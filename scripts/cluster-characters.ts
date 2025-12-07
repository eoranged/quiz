
import { CHARACTERS } from "../data/characters";
import { CharacterId, Trait } from "../types";

const TRAITS = Object.values(Trait);

interface Cluster {
    name: string;
    centroid: Record<Trait, number>;
    members: CharacterId[];
}

// Simple K-Means-ish implementation
function clusterCharacters(k: number) {
    // 1. Initialize random centroids
    let clusters: Cluster[] = [];
    const charIds = Object.values(CharacterId);

    // Pick k random characters as initial centroids to ensure valid starting points
    const seeds = new Set<CharacterId>();
    while (seeds.size < k) {
        seeds.add(charIds[Math.floor(Math.random() * charIds.length)]);
    }

    Array.from(seeds).forEach((seedId, i) => {
        clusters.push({
            name: `Cluster ${i + 1}`,
            centroid: { ...CHARACTERS[seedId].traits },
            members: []
        });
    });

    let changed = true;
    let iterations = 0;

    while (changed && iterations < 50) {
        changed = false;
        iterations++;

        // Clear members
        clusters.forEach(c => c.members = []);

        // 2. Assign characters to closest centroid
        Object.values(CHARACTERS).forEach(char => {
            let minDist = Infinity;
            let bestCluster = 0;

            clusters.forEach((cluster, idx) => {
                let dist = 0;
                TRAITS.forEach(t => {
                    const diff = char.traits[t] - cluster.centroid[t];
                    dist += diff * diff;
                });

                if (dist < minDist) {
                    minDist = dist;
                    bestCluster = idx;
                }
            });

            clusters[bestCluster].members.push(char.id);
        });

        // 3. Update centroids
        clusters.forEach(cluster => {
            if (cluster.members.length === 0) return;

            const newCentroid = {} as Record<Trait, number>;
            TRAITS.forEach(t => {
                let sum = 0;
                cluster.members.forEach(mId => sum += CHARACTERS[mId].traits[t]);
                newCentroid[t] = sum / cluster.members.length;
            });

            // Check if centroid changed significantly
            // For simplicity, just check if any value changed by > 1 (floating point diff)
            let diffSum = 0;
            TRAITS.forEach(t => diffSum += Math.abs(newCentroid[t] - cluster.centroid[t]));

            if (diffSum > 1) {
                cluster.centroid = newCentroid;
                changed = true;
            }
        });
    }

    return clusters;
}

// Run for K=5 (5 archetypes)
// We'll run it multiple times and pick the one with most balanced distribution? 
// No, just run once for insight.
const result = clusterCharacters(5);

console.log("=== Character Clusters (Archetypes) ===");
result.forEach(c => {
    console.log(`\n${c.name} (${c.members.length} members):`);

    // Print top defining traits (high and low)
    const sortedTraits = TRAITS.map(t => ({ t, val: c.centroid[t] })).sort((a, b) => b.val - a.val);
    const high = sortedTraits.slice(0, 3).map(x => `${x.t}: ${x.val.toFixed(0)}`).join(', ');
    const low = sortedTraits.slice(-3).map(x => `${x.t}: ${x.val.toFixed(0)}`).join(', ');

    console.log(`  Traits: High[${high}] | Low[${low}]`);
    console.log(`  Members: ${c.members.join(', ')}`);
});
