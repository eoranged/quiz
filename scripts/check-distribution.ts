import { getNextQuestion, calculateResult } from "../services/geminiService";
import { QUIZZES } from "../data/quizzes";

const args = process.argv.slice(2);
const quizIndex = args.findIndex(arg => arg === '-q' || arg === '--quiz');
const quizId = quizIndex !== -1 ? args[quizIndex + 1] : 'witcher-personality';

const quizConfig = QUIZZES[quizId];
if (!quizConfig) {
    console.error(`❌ Error: Quiz '${quizId}' not found.`);
    process.exit(1);
}

const { questions: QUESTIONS, characters: CHARACTERS } = quizConfig;

const NUM_SIMULATIONS = 1000; // Lower count for speed with adaptive logic

function runSimulation() {
    const counts: Record<string, number> = {};
    Object.keys(CHARACTERS).forEach(id => counts[id] = 0);

    for (let i = 0; i < NUM_SIMULATIONS; i++) {
        let currentAnswers: Record<string, string> = {};
        const MAX_QUESTIONS = 8;

        // Sim adaptive
        for (let q = 0; q < MAX_QUESTIONS; q++) {
            const question = getNextQuestion(currentAnswers, QUESTIONS);
            if (!question) break;

            const randomOption = question.options[Math.floor(Math.random() * question.options.length)];
            currentAnswers[question.id] = randomOption.id;
        }

        const result = calculateResult(currentAnswers, QUESTIONS, CHARACTERS);
        if (result && result.id) {
            counts[result.id]++;
        }
    }

    console.log("--- Win Rates ---");
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    sorted.forEach(([id, count]) => {
        console.log(`${id}: ${count} (${(count / NUM_SIMULATIONS * 100).toFixed(2)}%)`);
    });

    const unreachable = sorted.filter(([_, count]) => count === 0).map(([id]) => id);
    console.log(`\nUnreachable Characters (${unreachable.length}): ${unreachable.join(', ')}`);
}

runSimulation();
