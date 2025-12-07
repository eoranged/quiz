import { calculateResult, calculateProfile, getNextQuestion } from '../services/geminiService';
import { CHARACTERS } from '../data/characters';
import { CharacterId, Trait } from '../types';

// Simulation Logic
// Parse command line arguments
const args = process.argv.slice(2);
const verbose = args.includes('-v') || args.includes('--verbose');
const idIndex = args.findIndex(arg => arg === '-i' || arg === '--id');
const filterId = idIndex !== -1 ? args[idIndex + 1] : null;

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

    if (verbose) {
        console.log(`\n================================`);
        console.log(`Simulating run for: ${targetChar.name} (${targetChar.id})`);
        console.log(`Target Traits: ${JSON.stringify(targetTraits)}`);
        console.log(`================================`);
    }

    // For each question, pick the option that minimizes distance to target traits for THIS step
    // Note: This matches the "Greedy" approach of a user trying to be that character.

    // Simulate Adaptive Quiz Loop
    let currentAnswers: Record<string, string> = {};
    let iteration = 0;
    const MAX_ITERATIONS = 8; // Match App.tsx limit

    while (iteration < MAX_ITERATIONS) {
        const question = getNextQuestion(currentAnswers);
        if (!question) break; // No more questions

        // Find best option for this target character
        let bestOptionId = "";
        let bestDistSq = Infinity;

        // Predict what the profile WOULD be for each option
        question.options.forEach(option => {
            // Create temporary answers with this option
            const tempAnswers = { ...currentAnswers, [question.id]: option.id };
            const tempProfile = calculateProfile(tempAnswers);

            // Calculate distance to target char
            let distSq = 0;
            Object.values(Trait).forEach(t => {
                const pVal = tempProfile[t];
                const tVal = targetTraits[t] !== undefined ? targetTraits[t]! : 500;
                const diff = pVal - tVal;

                let weight = 1;
                if (targetChar.signatureWeights && targetChar.signatureWeights[t]) {
                    weight = targetChar.signatureWeights[t]!;
                }
                distSq += (diff * weight) * (diff * weight);
            });

            if (distSq < bestDistSq) {
                bestDistSq = distSq;
                bestOptionId = option.id;
            }
        });

        // "Select" the best option
        if (bestOptionId) {
            currentAnswers[question.id] = bestOptionId;
            if (verbose) {
                const optionText = question.options.find(o => o.id === bestOptionId)?.text;
                console.log(`Q: ${question.text}\n  Selected: ${optionText}`);
                console.log(`  Current Dist Sq: ${bestDistSq.toFixed(2)}`);
            }
        }
        iteration++;
    }

    // Final Calculation
    const finalProfile = calculateProfile(currentAnswers);
    const resultChar = calculateResult(currentAnswers);

    // Check duplication logic: Calculate distances for results
    // We recreate "getDist" logic here using the *final* currentTraits vs Char Traits
    // Note: currentTraits matches the state AFTER all questions, which    // Check duplication logic: Calculate distances for results
    // We recreate "getDist" logic here using the *final* currentTraits vs Char Traits
    const getDist = (id: CharacterId) => {
        const c = CHARACTERS[id];
        let sum = 0;
        Object.values(Trait).forEach(t => {
            const diff = (finalProfile[t] || 500) - (c.traits[t] || 500);
            let weight = 1;
            if (c.signatureWeights && c.signatureWeights[t]) {
                weight = c.signatureWeights[t]!;
            }
            sum += (diff * weight) * (diff * weight);
        });
        return Math.sqrt(sum);
    };

    if (resultChar.id === targetChar.id) {
        successCount++;
        if (verbose || charactersToTest.length === 1) { // Always show success detail if single char run
            console.log(`✅ ${targetChar.id}: Success (Dist Self: ${getDist(targetChar.id).toFixed(1)})`);
        }
    } else {

        failures.push({
            char: targetChar.id,
            got: resultChar.id,
            distanceToSelf: getDist(targetChar.id),
            distanceToGot: getDist(resultChar.id)
        });
        console.log(`❌ ${targetChar.id}: Got ${resultChar.id} (Dist Self: ${getDist(targetChar.id).toFixed(1)}, Dist Got: ${getDist(resultChar.id).toFixed(1)})`);
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
