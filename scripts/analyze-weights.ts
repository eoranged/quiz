
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


    // Monte-Carlo Simulation
    const SIMULATIONS = 10000;
    const winCounts: Record<CharacterId, number> = {} as any;
    Object.values(CharacterId).forEach(id => winCounts[id] = 0);

    for (let i = 0; i < SIMULATIONS; i++) {
        const answers: Record<string, string> = {};
        QUESTIONS_DATA.forEach(q => {
            const randomOption = q.options[Math.floor(Math.random() * q.options.length)];
            answers[q.id] = randomOption.id;
        });

        // Calculate result for this simulation
        const scores: Partial<Record<CharacterId, number>> = {};
        Object.values(CharacterId).forEach(id => scores[id] = 0);

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

        let maxScore = -1;
        let winner = CharacterId.GERALT;
        const ids = Object.keys(scores) as CharacterId[];
        const sortedIds = ids.sort(); // Deterministic tie-breaking

        sortedIds.forEach(charId => {
            const score = scores[charId] || 0;
            if (score > maxScore) {
                maxScore = score;
                winner = charId;
            }
        });

        winCounts[winner]++;
    }

    // Merge win counts into results
    results.forEach(r => {
        (r as any).winCount = winCounts[r.id as CharacterId];
        (r as any).winRate = ((winCounts[r.id as CharacterId] / SIMULATIONS) * 100).toFixed(1) + '%';
    });

    // Sort by Win Count descending
    results.sort((a, b) => (b as any).winCount - (a as any).winCount);

    console.log(`Character Weight Analysis & Monte-Carlo Simulation (n=${SIMULATIONS})`);
    console.log('===============================================================');
    console.table(results.map(r => ({
        ID: r.id,
        Name: r.name,
        'Win Count': (r as any).winCount,
        'Win Rate': (r as any).winRate,
        'Max Score': r.maxPossibleScore,
        'Min Weight': r.minAssignedWeight,
        'Appearances': r.appearanceCount
    })));
};

analyzeCharacters();
