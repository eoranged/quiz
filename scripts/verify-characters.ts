import { calculateResult, calculateProfile, getNextQuestion } from '../services/geminiService';
import { QUIZZES } from '../data/quizzes';
import { CharacterId, Trait } from '../types';

// Simulation Logic
// Parse command line arguments
const args = process.argv.slice(2);
const verbose = args.includes('-v') || args.includes('--verbose');
const idIndex = args.findIndex(arg => arg === '-i' || arg === '--id');
const filterId = idIndex !== -1 ? args[idIndex + 1] : null;

const quizIndex = args.findIndex(arg => arg === '-q' || arg === '--quiz');
const quizId = quizIndex !== -1 ? args[quizIndex + 1] : 'witcher-personality';

const quizConfig = QUIZZES[quizId];

if (!quizConfig) {
    console.error(`❌ Error: Quiz '${quizId}' not found. Available: ${Object.keys(QUIZZES).join(', ')}`);
    process.exit(1);
}

const CHARACTERS = quizConfig.characters;
const QUESTIONS = quizConfig.questions;

console.log(`Starting Character Verification for '${quizConfig.title}'...\n`);

let successCount = 0;
const failures: Array<{
    char: string,
    got: string,
    distanceToSelf: number,
    distanceToGot: number
}> = [];

// Helper compatible with new types if needed, but we are using strings in logic mostly
const charactersToTest = filterId
    ? [CHARACTERS[filterId]].filter(Boolean)
    : Object.values(CHARACTERS);

// Seeded PRNG for deterministic results
let seed = 123456789;
const seededRandom = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
};
Math.random = seededRandom;

if (filterId && charactersToTest.length === 0) {
    console.error(`❌ Error: Character '${filterId}' not found in quiz '${quizId}'.`);
    process.exit(1);
}

charactersToTest.forEach(targetChar => {
    // Reset seed for each character to ensure isolation
    seed = 12345 + targetChar.id.length;

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
        const question = getNextQuestion(currentAnswers, QUESTIONS);
        if (!question) break; // No more questions

        // Find best option for this target character
        let bestOptionId = "";
        let bestDistSq = Infinity;

        // Predict what the profile WOULD be for each option
        question.options.forEach(option => {
            // Create temporary answers with this option
            const tempAnswers = { ...currentAnswers, [question.id]: option.id };
            const tempProfile = calculateProfile(tempAnswers, QUESTIONS);

            // Calculate distance to target char
            let distSq = 0;
            Object.values(Trait).forEach(t => {
                const pVal = tempProfile[t];
                // @ts-ignore
                const tVal = targetTraits[t] !== undefined ? targetTraits[t]! : 500;
                const diff = pVal - tVal;

                let weight = 1;
                // @ts-ignore
                if (targetChar.signatureWeights && targetChar.signatureWeights[t]) {
                    // @ts-ignore
                    weight = targetChar.signatureWeights[t]!;
                }
                distSq += (diff * weight) * (diff * weight);
            });

            // SIMULATION INTELLIGENCE:
            // If option has a specific boost for THIS target character, massive bonus.
            if (option.characterBoosts && option.characterBoosts[targetChar.id]) {
                distSq -= 1000000; // Artificially prefer this option
            }

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
    const finalProfile = calculateProfile(currentAnswers, QUESTIONS);
    const resultChar = calculateResult(currentAnswers, QUESTIONS, CHARACTERS);

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
