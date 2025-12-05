import { CharacterId, Question, QuizResult, Trait } from "../types";
import { CHARACTERS } from "../data/characters";

import { QUESTIONS_DATA } from "../data/questions";

export const getQuestions = (): Question[] => {
    return QUESTIONS_DATA.map(q => ({
        ...q,
        options: [...q.options].sort(() => Math.random() - 0.5)
    }));
};

export const calculateResult = (answers: Record<string, string>): QuizResult => {
    // 1. Initialize Player Profile (Based on Character Averages)
    const playerTraits: Record<Trait, number> = {
        [Trait.EMPATHY]: 450,
        [Trait.IMPULSIVENESS]: 500,
        [Trait.AMBITION]: 530,
        [Trait.INTELLECT]: 700,
        [Trait.CYNICISM]: 520,
        [Trait.EXTROVERSION]: 510
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

    console.log("👤 Player Trait Profile:", playerTraits);

    // 3. Find Closest Character (Euclidean Distance)
    let minDistance = Infinity;
    let closestCharacter = CharacterId.GERALT;

    Object.values(CHARACTERS).forEach(character => {
        if (!character.traits) return; // Safety check

        let distanceSquared = 0;
        Object.values(Trait).forEach(trait => {
            const diff = (playerTraits[trait] || 500) - (character.traits[trait] || 500);
            distanceSquared += diff * diff;
        });

        const distance = Math.sqrt(distanceSquared);

        if (distance < minDistance) {
            minDistance = distance;
            closestCharacter = character.id;
        }
    });

    console.log(`🏆 Closest Character: ${closestCharacter} (Distance: ${minDistance.toFixed(2)})`);

    return CHARACTERS[closestCharacter];
};

export const encodeAnswers = (answers: Record<string, string>): string => {
    const chars = QUESTIONS_DATA.map(q => {
        const answerId = answers[q.id];
        // answerId format is "qX_y", we want "y" (last char)
        return answerId ? answerId.split('_').pop() : '-';
    }).join('');

    try {
        return btoa(chars);
    } catch (e) {
        console.error("Failed to encode answers", e);
        return "";
    }
};

export const decodeAnswers = (code: string): Record<string, string> | null => {
    if (!code) return null;

    let decoded = "";
    try {
        decoded = atob(code);
    } catch (e) {
        console.error("Failed to decode answers", e);
        return null;
    }

    if (decoded.length !== QUESTIONS_DATA.length) return null;

    const answers: Record<string, string> = {};

    // Validate characters (a,b,c,d)
    if (!/^[abcd-]+$/.test(decoded)) return null;

    for (let i = 0; i < QUESTIONS_DATA.length; i++) {
        const char = decoded[i];
        if (char === '-') continue;

        const qId = QUESTIONS_DATA[i].id;
        answers[qId] = `${qId}_${char}`;
    }
    return answers;
};

// Deprecated functions
export const generateQuizQuestions = async (): Promise<Question[]> => { return []; };
export const analyzeQuizResult = async (): Promise<QuizResult> => { return CHARACTERS[CharacterId.GERALT]; };
