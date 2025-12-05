
import { CHARACTERS } from '../data/characters';
import { QUESTIONS_DATA } from '../data/questions';
import { CharacterId } from '../types';

interface AnalysisResult {
    id: string;
    name: string;
    maxPossibleScore: number;
    minAssignedWeight: number | null;
    appearanceCount: number;
}

const analyzeCharacters = () => {
    const results: AnalysisResult[] = [];

    // Iterate over each character defined in the game
    Object.values(CHARACTERS).forEach((character) => {
        const charId = character.id;
        let maxPossibleScore = 0;
        let minAssignedWeight = Infinity;
        let appearanceCount = 0;

        // Iterate over all questions
        QUESTIONS_DATA.forEach((question) => {
            let maxWeightInQuestion = 0;

            // Check each option for this question
            question.options.forEach((option) => {
                const weight = option.weights?.[charId];
                if (weight !== undefined && weight > 0) {
                    // Update max weight found for this character in this question
                    if (weight > maxWeightInQuestion) {
                        maxWeightInQuestion = weight;
                    }

                    // Update global min weight for this character
                    if (weight < minAssignedWeight) {
                        minAssignedWeight = weight;
                    }

                    appearanceCount++;
                }
            });

            maxPossibleScore += maxWeightInQuestion;
        });

        results.push({
            id: charId,
            name: character.name,
            maxPossibleScore,
            minAssignedWeight: minAssignedWeight === Infinity ? null : minAssignedWeight,
            appearanceCount
        });
    });

    // Sort by Max Possible Score descending
    results.sort((a, b) => b.maxPossibleScore - a.maxPossibleScore);

    console.log('Character Weight Analysis');
    console.log('=========================');
    console.table(results.map(r => ({
        ID: r.id,
        Name: r.name,
        'Max Score': r.maxPossibleScore,
        'Min Weight': r.minAssignedWeight,
        'Appearances': r.appearanceCount
    })));
};

analyzeCharacters();
