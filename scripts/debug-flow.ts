
import { CHARACTERS } from '../data/witcher-personality/characters';
import { QUESTIONS_DATA } from '../data/witcher-personality/questions';
import { QUIZZES } from '../data/quizzes';
import { calculateProfile } from '../services/engine';
import { Trait } from '../types';
import * as fs from 'fs';


const expectedCharId = process.argv[2]?.toLowerCase();
let flowInput = process.argv.length > 3 ? process.argv[3] : null;

function prompt() {


    var rtnval = "";

    var buffer = Buffer.alloc ? Buffer.alloc(1) : new Buffer(1);

    for (; ;) {
        try {
            fs.readSync(0, buffer);   //0 is fd for stdin
        } catch (e: any) {
            if (e.code === 'EOF') break;
            throw e;
        }
        if (buffer[0] === 10) {   //LF \n   return on line feed
            break;
        } else if (buffer[0] !== 13) {     //CR \r   skip carriage return
            rtnval += new String(buffer);
        }
    }

    return rtnval;
}

// Read from stdin if no argument provided
if (!flowInput) {
    flowInput = prompt();
}

let flow: Array<{ qid: string, aid: string }>;
try {
    flow = JSON.parse(flowInput);
} catch (e) {
    console.error("❌ Error parsing flow JSON.");
    console.error(e);
    process.exit(1);
}

console.log(`\n🔍 Analyzing Flow with ${flow.length} steps...`);
if (expectedCharId) console.log(`🎯 Expected Character: ${expectedCharId}`);

const answers: Record<string, string> = {};
flow.forEach(item => {
    answers[item.qid] = item.aid;
});

const config = QUIZZES['witcher-personality'].engineConfig;

// 1. Calculate Profile
const profile = calculateProfile(answers, QUESTIONS_DATA);
console.log("\n👤 Calculated User Profile:");
console.log(JSON.stringify(profile, null, 2));

// 2. Calculate Distances for ALL characters
const scores: Record<string, number> = {};
// Calculate boosts first (logic copied/shared with engine)
Object.entries(answers).forEach(([qId, optionId]) => {
    const question = QUESTIONS_DATA.find(q => q.id === qId);
    const option = question?.options.find(o => o.id === optionId);
    if (option?.characterBoosts) {
        Object.entries(option.characterBoosts).forEach(([charId, boost]) => {
            scores[charId] = (scores[charId] || 0) + (boost || 0);
        });
    }
});

const BOOST_REDUCTION_FACTOR = config?.baseBoostFactor ?? 0.25;

const results = Object.values(CHARACTERS).map(character => {
    let distanceSquared = 0;
    for (const trait of Object.values(Trait)) {
        const playerVal = profile[trait];
        const charVal = character.traits[trait];
        const diff = playerVal - charVal;
        const weight = character.signatureWeights?.[trait] ?? 1;
        distanceSquared += (diff * weight) * (diff * weight);
    }

    const rawDistance = distanceSquared;
    const boost = scores[character.id] || 0;
    let finalDistance = rawDistance;
    let boostFactor = 1;

    if (boost > 0) {
        const reduction = Math.min(0.9, boost * BOOST_REDUCTION_FACTOR);
        boostFactor = 1 - reduction;
        finalDistance *= boostFactor;
    }

    return {
        id: character.id,
        name: character.name,
        rawDistance,
        finalDistance,
        boost,
        boostFactor
    };
});

// Sort by final distance (asc)
results.sort((a, b) => a.finalDistance - b.finalDistance);

// 3. Print Leaderboard
console.log("\n🏆 Leaderboard:");
const topN = 5;
results.slice(0, topN).forEach((r, i) => {
    const boostInfo = r.boost > 0 ? `(Boost ${r.boost} -> -${((1 - r.boostFactor) * 100).toFixed(0)}%)` : "";
    console.log(`${i + 1}. ${r.name.padEnd(25)} Dist: ${r.finalDistance.toFixed(0).padStart(7)} ${boostInfo}`);
});

// Check where expected char is
if (expectedCharId) {
    const rank = results.findIndex(r => r.id === expectedCharId);
    if (rank === -1) {
        console.log(`\n❌ Expected character '${expectedCharId}' not found in database.`);
    } else if (rank >= topN) {
        const r = results[rank];
        const boostInfo = r.boost > 0 ? `(Boost ${r.boost} -> -${((1 - r.boostFactor) * 100).toFixed(0)}%)` : "";
        console.log(`\n...\n${rank + 1}. ${r.name.padEnd(25)} Dist: ${r.finalDistance.toFixed(0).padStart(7)} ${boostInfo} <--- Expected`);
    } else {
        console.log(`\n✅ Expected character is in top ${topN} (Rank ${rank + 1}).`);
    }
}

// 4. Detailed Breakdown
// Show breakdown for Winner and Expected (if different)
const detailedChars = new Set<string>();
detailedChars.add(results[0].id);
if (expectedCharId && (CHARACTERS as any)[expectedCharId]) detailedChars.add(expectedCharId);

console.log("\n📊 Detailed Breakdown:");

detailedChars.forEach(charId => {
    const char = (CHARACTERS as any)[charId];
    const r = results.find(res => res.id === charId);
    if (!char || !r) return;

    console.log(`\n--- ${char.name} (${charId}) ---`);
    console.log(`Final Distance: ${r.finalDistance.toFixed(0)}`);
    if (r.boost > 0) {
        console.log(`Base Distance: ${r.rawDistance.toFixed(0)} | Boost: ${r.boost} (Reduces dist by ${((1 - r.boostFactor) * 100).toFixed(0)}%)`);
    }

    console.log("Trait Contributions to Distance (Lower is better):");
    const contributions = Object.values(Trait).map(trait => {
        const playerVal = profile[trait];
        const charVal = char.traits[trait];
        const diff = playerVal - charVal;
        const weight = char.signatureWeights?.[trait] ?? 1;
        const distSq = (diff * weight) * (diff * weight);
        return { trait, playerVal, charVal, diff, weight, distSq };
    });

    // Sort contributions by impact (descending)
    contributions.sort((a, b) => b.distSq - a.distSq);

    contributions.forEach(c => {
        console.log(`  ${c.trait.padEnd(15)}: You ${String(c.playerVal).padStart(4)} vs Char ${String(c.charVal).padStart(4)} (Diff ${String(c.diff).padStart(4)}) [Wt ${c.weight}] -> +${c.distSq.toFixed(0)}`);
    });
});
