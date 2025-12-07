
import { QUESTIONS_DATA } from "../data/questions";
import { CHARACTERS } from "../data/characters";
import { CharacterId, Trait, TraitProfile, QuizResult } from "../types";

const NUM_SIMULATIONS = 10000;

function calculateDistance(playerTraits: TraitProfile, character: QuizResult): number {
    let distanceSquared = 0;
    Object.values(Trait).forEach(trait => {
        const playerVal = playerTraits[trait] !== undefined ? playerTraits[trait] : 500;
        const charVal = character.traits[trait] !== undefined ? character.traits[trait] : 500;
        const diff = playerVal - charVal;

        // Apply Signature Weight multiplier if present
        let weight = 1;
        if (character.signatureWeights && character.signatureWeights[trait]) {
            weight = character.signatureWeights[trait]!;
        }

        distanceSquared += (diff * weight) * (diff * weight);
    });
    return Math.sqrt(distanceSquared);
}

function runSimulation() {
    const counts: Record<CharacterId, number> = {} as any;
    Object.values(CharacterId).forEach(id => counts[id] = 0);

    for (let i = 0; i < NUM_SIMULATIONS; i++) {
        const currentTraits: TraitProfile = {
            [Trait.EMPATHY]: 500,
            [Trait.IMPULSIVENESS]: 500,
            [Trait.AMBITION]: 500,
            [Trait.INTELLECT]: 500,
            [Trait.CYNICISM]: 500,
            [Trait.EXTROVERSION]: 500,
            [Trait.MAGIC]: 500,
            [Trait.ORDER]: 500
        };

        QUESTIONS_DATA.forEach(question => {
            const randomOption = question.options[Math.floor(Math.random() * question.options.length)];
            Object.entries(randomOption.traitModifiers).forEach(([key, value]) => {
                const trait = key as Trait;
                const modifier = value || 0;
                currentTraits[trait] = Math.max(0, Math.min(1000, currentTraits[trait] + modifier));
            });
        });

        let bestChar: CharacterId | null = null;
        let minDistance = Infinity;

        Object.values(CHARACTERS).forEach(char => {
            const dist = calculateDistance(currentTraits, char);
            if (dist < minDistance) {
                minDistance = dist;
                bestChar = char.id;
            }
        });

        if (bestChar) {
            counts[bestChar]++;
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
