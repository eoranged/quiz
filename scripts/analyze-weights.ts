import * as fs from 'fs';
import * as path from 'path';
import { CHARACTERS } from '../data/characters';
import { QUESTIONS_DATA } from '../data/questions';
import { CharacterId } from '../types';

interface AnalysisResult {
    id: string;
    name: string;
    maxObservedScore: number;
    avgDistanceToSecond: number;
    minAssignedWeight: number | null;
    appearanceCount: number;
    winCount: number;
    tieCount: number;
    winRate: string;
}

const analyzeCharacters = () => {
    // 1. Static Analysis for Min Weight and Appearances
    const staticStats: Record<string, { minAssignedWeight: number; appearanceCount: number }> = {};

    Object.values(CHARACTERS).forEach(char => {
        staticStats[char.id] = { minAssignedWeight: Infinity, appearanceCount: 0 };
    });

    QUESTIONS_DATA.forEach(q => {
        q.options.forEach(opt => {
            if (opt.weights) {
                Object.entries(opt.weights).forEach(([cId, w]) => {
                    if (staticStats[cId]) {
                        if (w > 0) {
                            staticStats[cId].appearanceCount++;
                            if (w < staticStats[cId].minAssignedWeight) {
                                staticStats[cId].minAssignedWeight = w;
                            }
                        }
                    }
                });
            }
        });
    });

    Object.keys(staticStats).forEach(id => {
        if (staticStats[id].minAssignedWeight === Infinity) {
            staticStats[id].minAssignedWeight = 0; // or null, but using 0 for safety
        }
    });

    // 2. Monte-Carlo Simulation
    const SIMULATIONS = 100000;
    const stats: Record<CharacterId, { wins: number; ties: number; maxScore: number; totalDistance: number }> = {} as any;
    Object.values(CharacterId).forEach(id => {
        stats[id] = { wins: 0, ties: 0, maxScore: 0, totalDistance: 0 };
    });

    const LOG_FILE = path.join(process.cwd(), 'log.txt');
    try {
        fs.unlinkSync(LOG_FILE);
    } catch (e) { /* ignore if not exists */ }

    // Buffer for log entries to avoid excessive IO
    let logBuffer: string[] = [];
    const FLUSH_THRESHOLD = 1000;

    const flushLogs = () => {
        if (logBuffer.length > 0) {
            fs.appendFileSync(LOG_FILE, logBuffer.join('\n') + '\n');
            logBuffer = [];
        }
    };

    console.log(`Starting Monte-Carlo Simulation (n=${SIMULATIONS})...`);

    for (let i = 0; i < SIMULATIONS; i++) {
        const answers: Record<string, string> = {};
        QUESTIONS_DATA.forEach(q => {
            const randomOption = q.options[Math.floor(Math.random() * q.options.length)];
            answers[q.id] = randomOption.id;
        });

        // Calculate scores
        const scores: Record<string, number> = {};
        Object.values(CharacterId).forEach(id => scores[id] = 0);

        QUESTIONS_DATA.forEach(question => {
            const selectedOptionId = answers[question.id];
            const option = question.options.find(o => o.id === selectedOptionId);
            if (option && option.weights) {
                Object.entries(option.weights).forEach(([charId, weight]) => {
                    scores[charId] = (scores[charId] || 0) + (weight || 0);
                });
            }
        });

        // Determine Winner
        const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        const first = sortedScores[0];
        const second = sortedScores[1];

        if (first && second && first[1] === second[1]) {
            // TIE - Count tie for all characters with the top score
            const topScore = first[1];
            const tiedCharacters = sortedScores.filter(s => s[1] === topScore);

            tiedCharacters.forEach(tied => {
                const tiedId = tied[0] as CharacterId;
                if (stats[tiedId]) {
                    stats[tiedId].ties++;
                }
            });

            // Log tie (shows top 2 for brevity)
            const logEntry = `TIE: ${first[0]} vs ${second[0]} (Score: ${first[1]}) | Count: ${tiedCharacters.length} | Answers: ${JSON.stringify(answers)}`;
            logBuffer.push(logEntry);
            if (logBuffer.length >= FLUSH_THRESHOLD) flushLogs();
        } else if (first) {
            // Explicit Winner
            const winnerId = first[0] as CharacterId;
            const winnerScore = first[1];
            const runnerUpScore = second ? second[1] : 0;
            const distance = winnerScore - runnerUpScore;

            stats[winnerId].wins++;
            if (winnerScore > stats[winnerId].maxScore) {
                stats[winnerId].maxScore = winnerScore;
            }
            stats[winnerId].totalDistance += distance;
        }
    }

    flushLogs();

    // 3. Aggregate Results
    const results: AnalysisResult[] = [];

    Object.values(CHARACTERS).forEach(char => {
        const s = stats[char.id as CharacterId];
        const st = staticStats[char.id];

        const avgDist = s.wins > 0 ? (s.totalDistance / s.wins) : 0;

        results.push({
            id: char.id,
            name: char.name,
            maxObservedScore: s.maxScore,
            avgDistanceToSecond: parseFloat(avgDist.toFixed(1)),
            minAssignedWeight: st.minAssignedWeight === 0 ? null : st.minAssignedWeight,
            appearanceCount: st.appearanceCount,
            winCount: s.wins,
            tieCount: s.ties,
            winRate: ((s.wins / SIMULATIONS) * 100).toFixed(1) + '%'
        });
    });

    // Sort by Win Count descending
    results.sort((a, b) => b.winCount - a.winCount);

    console.log(`\nSimulation Complete.`);
    console.table(results.map(r => ({
        ID: r.id,
        Name: r.name,
        'Win Count': r.winCount,
        'Tie Count': r.tieCount,
        'Win Rate': r.winRate,
        'Max Score': r.maxObservedScore,
        'Avg Margin': r.avgDistanceToSecond,
        'Min Weight': r.minAssignedWeight,
        'Appearances': r.appearanceCount
    })));
};

analyzeCharacters();
