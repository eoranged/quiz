
import { CHARACTERS } from '../data/characters';
import { QUESTIONS_DATA } from '../data/questions';
import { Trait, CharacterId } from '../types';

// Duplicate logic from geminiService.ts to ensure test fidelity
// Ideally we would import this, but for a script it's safer to reproduce the exact logic 
// being tested against to avoid tight coupling or import issues with Vite.
const calculateResult = (answers: Record<string, string>) => {
    // 1. Initialize Player Profile (Based on Character Averages)
    const playerTraits: Record<Trait, number> = {
        [Trait.EMPATHY]: 450,
        [Trait.IMPULSIVENESS]: 500,
        [Trait.AMBITION]: 530,
        [Trait.INTELLECT]: 700,
        [Trait.CYNICISM]: 520,
        [Trait.EXTROVERSION]: 510,
        [Trait.MAGIC]: 500,
        [Trait.ORDER]: 500
    };

    // 2. Apply Modifiers from Answers
    QUESTIONS_DATA.forEach(question => {
        const selectedOptionId = answers[question.id];
        const option = question.options.find(o => o.id === selectedOptionId);

        if (option && option.traitModifiers) {
            Object.entries(option.traitModifiers).forEach(([traitKey, value]) => {
                const trait = traitKey as Trait;
                if (value) {
                    playerTraits[trait] = Math.max(0, Math.min(1000, playerTraits[trait] + value));
                }
            });
        }
    });

    // 3. Find Closest Character (Euclidean Distance)
    let minDistance = Infinity;
    let closestCharacter = CharacterId.GERALT;

    Object.values(CHARACTERS).forEach(character => {
        if (!character.traits) return;

        let distanceSquared = 0;
        Object.values(Trait).forEach(trait => {
            const playerVal = playerTraits[trait] !== undefined ? playerTraits[trait] : 500;
            const charVal = character.traits[trait] !== undefined ? character.traits[trait] : 500;
            const diff = playerVal - charVal;

            let weight = 1;
            if (character.signatureWeights && character.signatureWeights[trait]) {
                weight = character.signatureWeights[trait]!;
            }

            distanceSquared += (diff * weight) * (diff * weight);
        });

        const distance = Math.sqrt(distanceSquared);

        if (distance < minDistance) {
            minDistance = distance;
            closestCharacter = character.id;
        }
    });

    return closestCharacter;
};

// Simulation Logic
// Parse command line arguments
const args = process.argv.slice(2);
const verbose = args.includes('-v') || args.includes('--verbose');
const idIndex = args.findIndex(arg => arg === '-i' || arg === '--id');
const filterId = idIndex !== -1 ? args[idIndex + 1] : null;

// Simulation Logic
console.log("Starting Character Verification...\n");

let successCount = 0;
const failures: Array<{
    char: string,
    got: string,
    distanceToSelf: number,
    distanceToGot: number
}> = [];

const charactersToTest = filterId
    ? [CHARACTERS[filterId as CharacterId]].filter(Boolean)
    : Object.values(CHARACTERS);

if (filterId && charactersToTest.length === 0) {
    console.error(`❌ Error: Character '${filterId}' not found.`);
    process.exit(1);
}

charactersToTest.forEach(targetChar => {
    const targetTraits = targetChar.traits;
    const answers: Record<string, string> = {};

    if (verbose) {
        console.log(`\n================================`);
        console.log(`Simulating run for: ${targetChar.name} (${targetChar.id})`);
        console.log(`Target Traits: ${JSON.stringify(targetTraits)}`);
        console.log(`================================`);
    }

    // For each question, pick the option that minimizes distance to target traits for THIS step
    // Note: This matches the "Greedy" approach of a user trying to be that character.
    // It's not a perfect search for "Is it mathematically possible?", but "Is it intuitively possible?"

    // We maintain a running state to make the greedy decision relevant to the current accumulation
    const currentTraits: Record<Trait, number> = {
        [Trait.EMPATHY]: 450,
        [Trait.IMPULSIVENESS]: 500,
        [Trait.AMBITION]: 530,
        [Trait.INTELLECT]: 700,
        [Trait.CYNICISM]: 520,
        [Trait.EXTROVERSION]: 510,
        [Trait.MAGIC]: 500,
        [Trait.ORDER]: 500
    };

    QUESTIONS_DATA.forEach(question => {
        let bestOptionId = "";
        let bestDistance = Infinity;
        let bestModifiers: Partial<Record<Trait, number>> = {};

        if (verbose) {
            console.log(`\nQ: ${question.text}`);
        }

        // Evaluate all options for this question
        question.options.forEach(option => {
            // Calculate hypothetical stats if we pick this option
            const tempTraits = { ...currentTraits };
            if (option.traitModifiers) {
                Object.entries(option.traitModifiers).forEach(([t, v]) => {
                    tempTraits[t as Trait] = Math.max(0, Math.min(1000, tempTraits[t as Trait] + v));
                });
            }

            // Calculate distance to TARGET character traits
            let distSq = 0;
            Object.values(Trait).forEach(t => {
                const tempVal = tempTraits[t] !== undefined ? tempTraits[t]! : 500;
                const targetVal = targetTraits[t] !== undefined ? targetTraits[t]! : 500;
                const diff = tempVal - targetVal;

                // IMPORTANT: Use weights of the TARGET character we are trying to become.
                let weight = 1;
                if (targetChar.signatureWeights && targetChar.signatureWeights[t]) {
                    weight = targetChar.signatureWeights[t]!;
                }

                distSq += (diff * weight) * (diff * weight);
            });


            if (distSq < bestDistance) {
                bestDistance = distSq;
                bestOptionId = option.id;
                bestModifiers = option.traitModifiers || {};
            }
        });

        // Apply best option
        answers[question.id] = bestOptionId;
        if (bestModifiers) {
            Object.entries(bestModifiers).forEach(([t, v]) => {
                currentTraits[t as Trait] = Math.max(0, Math.min(1000, currentTraits[t as Trait] + v));
            });
        }

        if (verbose) {
            const selectedOption = question.options.find(o => o.id === bestOptionId);
            console.log(`  Selected: ${selectedOption?.text}`);
            console.log(`  New Dist: ${Math.sqrt(bestDistance).toFixed(2)}`);
            console.log(`  Traits: ${JSON.stringify(currentTraits)}`);
        }
    });

    const resultId = calculateResult(answers);

    // Check duplication logic: Calculate distances for results
    // We recreate "getDist" logic here using the *final* currentTraits vs Char Traits
    // Note: currentTraits matches the state AFTER all questions, which is exactly what calculateResult assumes 
    // (modifiers applied sequentially).

    const getDist = (id: CharacterId) => {
        const c = CHARACTERS[id];
        let sum = 0;
        Object.values(Trait).forEach(t => {
            const diff = (currentTraits[t] || 500) - (c.traits[t] || 500);
            sum += diff * diff;
        });
        return Math.sqrt(sum);
    };

    if (resultId === targetChar.id) {
        successCount++;
        if (verbose || charactersToTest.length === 1) { // Always show success detail if single char run
            console.log(`✅ ${targetChar.id}: Success (Dist Self: ${getDist(targetChar.id).toFixed(1)})`);
        }
    } else {

        failures.push({
            char: targetChar.id,
            got: resultId,
            distanceToSelf: getDist(targetChar.id),
            distanceToGot: getDist(resultId)
        });
        console.log(`❌ ${targetChar.id}: Got ${resultId} (Dist Self: ${getDist(targetChar.id).toFixed(1)}, Dist Got: ${getDist(resultId).toFixed(1)})`);
    }
});

console.log(`\nResults: ${successCount}/${charactersToTest.length} passed.`);

if (failures.length > 0) {
    console.log("\nFailures:");
    failures.forEach(f => {
        console.log(`${f.char} -> ${f.got} (Self: ${f.distanceToSelf.toFixed(1)} vs Match: ${f.distanceToGot.toFixed(1)})`);
    });
    process.exit(1);
} else {
    console.log("Verification Passed!");
    process.exit(0);
}
