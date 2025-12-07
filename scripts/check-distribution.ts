
import { CHARACTERS } from "../data/characters";
import { CharacterId, Trait, TraitProfile, QuizResult } from "../types";
import { getNextQuestion, calculateResult } from "../services/geminiService";

const NUM_SIMULATIONS = 2000; // Lower count for speed with adaptive logic

function runSimulation() {
    const counts: Record<CharacterId, number> = {} as any;
    Object.values(CharacterId).forEach(id => counts[id] = 0);

    for (let i = 0; i < NUM_SIMULATIONS; i++) {
        let currentAnswers: Record<string, string> = {};
        const MAX_QUESTIONS = 8;

        // Sim adaptive
        for (let q = 0; q < MAX_QUESTIONS; q++) {
            const question = getNextQuestion(currentAnswers);
            if (!question) break;

            const randomOption = question.options[Math.floor(Math.random() * question.options.length)];
            currentAnswers[question.id] = randomOption.id;
        }

        const result = calculateResult(currentAnswers);
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
