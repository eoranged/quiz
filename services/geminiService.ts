import { CharacterId, Question, QuizResult } from "../types";
import { CHARACTERS } from "../data/characters";

import { QUESTIONS_DATA } from "../data/questions";

export const getQuestions = (): Question[] => {
    return QUESTIONS_DATA.map(q => ({
        ...q,
        options: [...q.options].sort(() => Math.random() - 0.5)
    }));
};

export const calculateResult = (answers: Record<string, string>): QuizResult => {
    const scores: Partial<Record<CharacterId, number>> = {};

    Object.values(CharacterId).forEach(id => {
        scores[id] = 0;
    });

    QUESTIONS_DATA.forEach(question => {
        const selectedOptionId = answers[question.id];
        const option = question.options.find(o => o.id === selectedOptionId);
        if (option && option.weights) {
            Object.entries(option.weights).forEach(([charId, weight]) => {
                const id = charId as CharacterId;
                scores[id] = (scores[id] || 0) + (weight || 0);
            });
        }
    });

    // Debug: Log sorted weights for debugging
    const sortedWeights = Object.entries(scores)
        .sort(([, a], [, b]) => (b || 0) - (a || 0));
    console.log("🏆 Character Weights (Sorted):", sortedWeights);

    let maxScore = -1;
    let winner = CharacterId.GERALT;

    const ids = Object.keys(scores) as CharacterId[];
    // Sort deterministically to ensure consistent tie-breaking
    const sortedIds = ids.sort();

    sortedIds.forEach(charId => {
        const score = scores[charId] || 0;
        if (score > maxScore) {
            maxScore = score;
            winner = charId;
        }
    });

    return CHARACTERS[winner] || CHARACTERS[CharacterId.GERALT];
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
