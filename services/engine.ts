import { Question, QuizResult, Trait, TraitProfile, QuizEngineConfig } from "../types";

// Helper to calculate current profile based on answers
export const calculateProfile = (answers: Record<string, string>, allQuestions: Question[]): TraitProfile => {
    // Start with balanced profile
    const profile: TraitProfile = {
        [Trait.EMPATHY]: 500,
        [Trait.IMPULSIVENESS]: 500,
        [Trait.AMBITION]: 500,
        [Trait.INTELLECT]: 500,
        [Trait.CYNICISM]: 500,
        [Trait.EXTROVERSION]: 500,
        [Trait.MAGIC]: 500,
        [Trait.ORDER]: 500
    };

    Object.entries(answers).forEach(([qId, optionId]) => {
        const question = allQuestions.find(q => q.id === qId);
        const option = question?.options.find(o => o.id === optionId);
        if (option?.traitModifiers) {
            Object.entries(option.traitModifiers).forEach(([t, val]) => {
                const trait = t as Trait;
                profile[trait] = Math.max(0, Math.min(1000, profile[trait] + (val || 0)));
            });
        }
    });

    return profile;
};

// Deterministic Pseudo-Random Number Generator
const seededRandom = (seed: number) => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
};

// Fuzzy Logic to determine next question
/**
 * Determines the next question based on the Phase System Algorithm:
 * 
 * Phase 1: Global Questions (Initial broad categorization)
 * Phase 2: Archetype Scaling (Cluster-specific deep dive based on early traits)
 * Phase 3: Refinement (Tie-breaking questions for close matches)
 * Phase 4: Filler/Falling (Remaining questions to complete the quiz)
 */
export const getNextQuestion = (
    answers: Record<string, string>,
    allQuestions: Question[],
    config?: QuizEngineConfig
): Question | null => {
    const answeredIds = new Set(Object.keys(answers));
    const count = answeredIds.size;

    // Use config or defaults
    const maxQuestions = config?.maxQuestions || 8;
    const duplicateCheck = config?.duplicateCheck ?? true;
    const seed = config?.randomSeed ? (config.randomSeed + count) : undefined;

    const getRandomElement = <T>(array: T[]): T => {
        if (seed !== undefined) {
            const index = Math.floor(seededRandom(seed) * array.length);
            return array[index];
        }
        return array[Math.floor(Math.random() * array.length)];
    };


    if (count >= maxQuestions) return null;

    // Phase 1: Global Questions (First 3 usually)
    // We can infer phase length from config if needed, but keeping simple first 3 logic as default if not specified
    // Or we can rely on available questions.

    // Check for 'global' tags first if early in quiz
    if (count < 3) {
        const globals = allQuestions.filter(q => q.tags?.includes("global") && !answeredIds.has(q.id));
        if (globals.length > 0) {
            return getRandomElement(globals);
        }
    }

    // Determine Archetype / Cluster
    const profile = calculateProfile(answers, allQuestions);
    let targetTag = "cluster_pro"; // Fallback default

    if (config?.clusterRules) {
        // Evaluator for configurable rules
        const rules = config.clusterRules;
        for (const rule of rules) {
            const matches = rule.conditions.every(cond => {
                const val = profile[cond.trait];
                const thresh = cond.threshold;
                switch (cond.operator) {
                    case '>': return val > thresh;
                    case '<': return val < thresh;
                    case '>=': return val >= thresh;
                    case '<=': return val <= thresh;
                    default: return false;
                }
            });

            // TODO support OR logic if needed, currently assumes AND for conditions array
            if (matches) {
                targetTag = rule.tag;
                break; // First match wins
            }
        }
    } else {
        // Legacy Hardcoded Logic (Backup)
        if (profile[Trait.EXTROVERSION] > 600 || profile[Trait.IMPULSIVENESS] > 600) {
            targetTag = "cluster_bard";
        } else if (profile[Trait.AMBITION] > 600 && profile[Trait.ORDER] > 550) {
            targetTag = "cluster_ruler";
        } else if (profile[Trait.CYNICISM] > 600 && profile[Trait.EMPATHY] < 450) {
            targetTag = "cluster_rebel";
        } else if (profile[Trait.INTELLECT] > 600 && profile[Trait.ORDER] > 500) {
            targetTag = "cluster_mentor";
        }
    }

    // Phase 2: Archetype Specific
    const archetypeQuestions = allQuestions.filter(q => q.tags?.includes(targetTag) && !answeredIds.has(q.id));
    if (archetypeQuestions.length > 0) {
        return getRandomElement(archetypeQuestions);
    }

    // Phase 3: Refinement / Tie Breakers
    const refinementQuestions = allQuestions.filter(q =>
        q.tags?.some(tag => tag.startsWith("refine_") || tag === "magic_check") && !answeredIds.has(q.id)
    );
    if (refinementQuestions.length > 0) {
        return getRandomElement(refinementQuestions);
    }

    // Phase 4: Fillers / Remaining
    const remaining = allQuestions.filter(q => !answeredIds.has(q.id));

    if (duplicateCheck) {
        // Extra safe check although !answeredIds.has(q.id) should cover it
        // If we had a pool of potential questions that might duplicate IDs (unlikely in this setup)
    }

    if (remaining.length > 0) {
        return getRandomElement(remaining);
    }

    return null;
};

/**
 * Calculates the final result based on answers and character traits.
 * Uses a weighted Euclidean distance with an adaptive boost system.
 * 
 * Algorithm:
 * 1. Calculate Player Profile from answers.
 * 2. Calculate Boost Scores from answer 'characterBoosts'.
 * 3. For each character:
 *    a. Calculate weighted squared distance between Player and Character traits.
 *    b. Apply boost reduction factor (default 25% per boost point).
 * 4. Return character with minimum distance.
 */
export const calculateResult = (
    answers: Record<string, string>,
    allQuestions: Question[],
    allCharacters: Record<string, QuizResult>,
    config?: QuizEngineConfig
): QuizResult => {
    const playerTraits = calculateProfile(answers, allQuestions);
    const debug = config?.debug ?? false; // import.meta.env.DEV could be used here too

    if (debug) console.log("👤 Final Player Profile:", playerTraits);

    // Calculate Boosts First
    const scores: Record<string, number> = {};
    Object.entries(answers).forEach(([qId, optionId]) => {
        const question = allQuestions.find(q => q.id === qId);
        const option = question?.options.find(o => o.id === optionId);
        if (option?.characterBoosts) {
            Object.entries(option.characterBoosts).forEach(([charId, boost]) => {
                scores[charId] = (scores[charId] || 0) + (boost || 0);
            });
        }
    });

    const BOOST_REDUCTION_FACTOR = config?.baseBoostFactor ?? 0.25;

    let minDistance = Infinity;
    // Safe default fallbacks
    const charKeys = Object.keys(allCharacters);
    if (charKeys.length === 0) {
        throw new Error("No characters defined in quiz.");
    }
    let closestCharacterId = charKeys[0];

    Object.values(allCharacters).forEach(character => {
        let distanceSquared = 0;

        // Single Pass Distance Calculation
        for (const trait of Object.values(Trait)) {
            const playerVal = playerTraits[trait];
            const charVal = character.traits[trait];
            const diff = playerVal - charVal;

            // Apply Signature Weight
            const weight = character.signatureWeights?.[trait] ?? 1;

            distanceSquared += (diff * weight) * (diff * weight);
        }

        // Apply Boost
        const boost = scores[character.id] || 0;
        if (boost > 0) {
            // Formula: Reduce distance by Percentage per boost point
            // Limit factor to avoid negative distance or zeroing out completely if not desired (though 0 is fine for perfect match)
            // Cap at 0.1 (90% reduction) to prevent total override of traits unless boost is massive
            const reduction = Math.min(0.9, boost * BOOST_REDUCTION_FACTOR);
            const factor = 1 - reduction;

            distanceSquared *= factor;

            if (debug) console.log(`🚀 Boost for ${character.id}: ${boost} (Factor: ${factor.toFixed(2)})`);
        }

        if (distanceSquared < minDistance) {
            minDistance = distanceSquared;
            closestCharacterId = character.id;
        }
    });

    if (debug) console.log(`🏆 Closest Character: ${closestCharacterId} (DistSq: ${minDistance.toFixed(0)})`);
    return allCharacters[closestCharacterId];
};

export const encodeAnswers = (answers: Record<string, string>): string => {
    // Simple JSON encoding
    try {
        return btoa(JSON.stringify(answers));
    } catch { return ""; }
};

export const decodeAnswers = (code: string): Record<string, string> | null => {
    try {
        return JSON.parse(atob(code));
    } catch { return null; }
};
