
import { QUESTIONS_DATA } from "../data/questions";
import { CHARACTERS } from "../data/characters";
import { CharacterId, Trait, TraitProfile } from "../types";

const NUM_SIMULATIONS = 10000;
const TRAITS = Object.values(Trait);

function calculateDistance(profile1: TraitProfile, profile2: TraitProfile): number {
    return Math.sqrt(
        TRAITS.reduce((sum, trait) => {
            const diff = (profile1[trait] || 0) - (profile2[trait] || 0);
            return sum + diff * diff;
        }, 0)
    );
}

function runSimulation() {
    const counts: Record<CharacterId, number> = {} as any;
    Object.values(CharacterId).forEach(id => counts[id] = 0);

    for (let i = 0; i < NUM_SIMULATIONS; i++) {
        const currentTraits: TraitProfile = {
            [Trait.EMPATHY]: 0,
            [Trait.IMPULSIVENESS]: 0,
            [Trait.AMBITION]: 0,
            [Trait.INTELLECT]: 0,
            [Trait.CYNICISM]: 0,
            [Trait.EXTROVERSION]: 0
        };

        QUESTIONS_DATA.forEach(question => {
            const randomOption = question.options[Math.floor(Math.random() * question.options.length)];
            Object.entries(randomOption.traitModifiers).forEach(([key, value]) => {
                currentTraits[key as Trait] = (currentTraits[key as Trait] || 0) + (value || 0);
            });
        });

        let bestChar: CharacterId | null = null;
        let minDistance = Infinity;

        Object.values(CHARACTERS).forEach(char => {
            const dist = calculateDistance(currentTraits, char.traits);
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
