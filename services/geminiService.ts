import { Question, QuizResult, Trait, TraitProfile } from "../types";

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

// Fuzzy Logic to determine next question
export const getNextQuestion = (answers: Record<string, string>, allQuestions: Question[]): Question | null => {
    const answeredIds = new Set(Object.keys(answers));
    const count = answeredIds.size;

    // Phase 1: Global Questions (First 3)
    // Note: This logic assumes questions are tagged 'global'. If the quiz doesn't use tags or uses different tags, this might need adjustment.
    // For now, we keep it generic enough: if no 'global' tags found, it might skip to other logic or we assume the quiz structure follows this pattern.
    // If a quiz is simple (linear), we might just want random from remaining.
    // Let's keep the logic but check if 'global' exists.

    if (count < 3) {
        const globals = allQuestions.filter(q => q.tags?.includes("global") && !answeredIds.has(q.id));
        if (globals.length > 0) {
            return globals[Math.floor(Math.random() * globals.length)];
        }
    }

    // Determine Archetype
    const profile = calculateProfile(answers, allQuestions);
    let targetTag = "cluster_pro"; // Default

    // Logic to determine cluster (This logic is very Witcher specific in terms of specific thresholds/clusters)
    // TODO: Ideally this logic should be configurable part of the quiz definition.
    // For now, if tags don't exist, we fall through to random remaining.
    if (profile[Trait.EXTROVERSION] > 600 || profile[Trait.IMPULSIVENESS] > 600) {
        targetTag = "cluster_bard";
    } else if (profile[Trait.AMBITION] > 600 && profile[Trait.ORDER] > 550) {
        targetTag = "cluster_ruler";
    } else if (profile[Trait.CYNICISM] > 600 && profile[Trait.EMPATHY] < 450) {
        targetTag = "cluster_rebel";
    } else if (profile[Trait.INTELLECT] > 600 && profile[Trait.ORDER] > 500) {
        targetTag = "cluster_mentor";
    }

    // Phase 2: Archetype Specific
    const archetypeQuestions = allQuestions.filter(q => q.tags?.includes(targetTag) && !answeredIds.has(q.id));
    if (archetypeQuestions.length > 0) {
        return archetypeQuestions[Math.floor(Math.random() * archetypeQuestions.length)];
    }

    // Phase 3: Refinement / Tie Breakers (Prioritize new questions)
    const refinementQuestions = allQuestions.filter(q =>
        q.tags?.some(tag => tag.startsWith("refine_") || tag === "magic_check") && !answeredIds.has(q.id)
    );
    if (refinementQuestions.length > 0) {
        return refinementQuestions[Math.floor(Math.random() * refinementQuestions.length)];
    }

    // Phase 4: Fillers / Remaining
    const remaining = allQuestions.filter(q => !answeredIds.has(q.id));
    if (remaining.length > 0) {
        return remaining[Math.floor(Math.random() * remaining.length)];
    }

    return null;
};

export const calculateResult = (answers: Record<string, string>, allQuestions: Question[], allCharacters: Record<string, QuizResult>): QuizResult => {
    const playerTraits = calculateProfile(answers, allQuestions);

    console.log("👤 Final Player Profile:", playerTraits);

    // Find Closest Character
    let minDistance = Infinity;
    // Default to first character if generic, or null handling (using type casting safe bet for now)
    let closestCharacterId = Object.keys(allCharacters)[0];

    Object.values(allCharacters).forEach(character => {
        let distanceSquared = 0;
        Object.values(Trait).forEach(trait => {
            const playerVal = playerTraits[trait];
            const charVal = character.traits[trait];
            const diff = playerVal - charVal;

            // Apply Signature Weight
            let weight = 1;
            if (character.signatureWeights && character.signatureWeights[trait]) {
                weight = character.signatureWeights[trait]!;
            }

            distanceSquared += (diff * weight) * (diff * weight);
        });

        if (distanceSquared < minDistance) {
            minDistance = distanceSquared;
            closestCharacterId = character.id;
        }
    });

    // Apply strict character boosts (DABES refinement)
    // We calculate a 'boost' score for each character based on answers
    const scores: Record<string, number> = {};
    Object.keys(allCharacters).forEach(id => scores[id] = 0);

    Object.entries(answers).forEach(([qId, optionId]) => {
        const question = allQuestions.find(q => q.id === qId);
        const option = question?.options.find(o => o.id === optionId);
        if (option?.characterBoosts) {
            Object.entries(option.characterBoosts).forEach(([charId, boost]) => {
                if (scores[charId] !== undefined) {
                    scores[charId] += (boost || 0);
                }
            });
        }
    });

    // Strategy: Reduce distance for boosted characters
    // Logic: distance = distance - (boost_score * MULTIPLIER)
    // A strong boost (e.g., +5) should significantly reduce the distance gap.
    // Distance roughly ranges 0-3000 (sqrt of sum squares). Squared distance ranges 0-~8,000,000. 
    // Wait, minDistance here is squared distance. Max possible sq distance is 8 * 1000^2 = 8,000,000.
    // Typical "close" match is ~100,000 - 300,000.
    // A boost of 1 should be meaningful. Let's act on squared distance directly.
    // Let's re-evaluate best match with boosts.

    // Recalculate best match with boosts
    minDistance = Infinity;

    Object.values(allCharacters).forEach(character => {
        let distanceSquared = 0;
        Object.values(Trait).forEach(trait => {
            const playerVal = playerTraits[trait];
            const charVal = character.traits[trait];
            const diff = playerVal - charVal;

            // Apply Signature Weight
            let weight = 1;
            if (character.signatureWeights && character.signatureWeights[trait]) {
                weight = character.signatureWeights[trait]!;
            }

            distanceSquared += (diff * weight) * (diff * weight);
        });

        // APPLY BOOST
        const boost = scores[character.id] || 0;
        // Each point of boost reduces effective "error" distance.
        // Let's say 1 boost point removes ~50 units of linear distance error.
        // So we subtract (boost * 50)^2 ? No, that's not linear.
        // Let's reduce Squared Distance by a percentage or a flat chunk.
        // 1 boost = reduce distance by 15%. (Strong preference).
        // Max boost likely 1-3.

        // Alternative: Treat boost as a massive reduction in error.
        // let's try: distSq = distSq * (1 - boost * 0.15)
        if (boost > 0) {
            const factor = Math.max(0.1, 1 - (boost * 0.25)); // 1 boost = 25% closer, 3 boosts = 75% closer
            distanceSquared *= factor;
            console.log(`🚀 Boost for ${character.id}: ${boost} (Factor: ${factor.toFixed(2)})`);
        }

        if (distanceSquared < minDistance) {
            minDistance = distanceSquared;
            closestCharacterId = character.id;
        }
    });

    console.log(`🏆 Closest Character: ${closestCharacterId} (DistSq: ${minDistance.toFixed(0)})`);
    return allCharacters[closestCharacterId];
};

export const encodeAnswers = (answers: Record<string, string>): string => {
    // Simple JSON encoding since dynamic questions make positional encoding hard
    try {
        return btoa(JSON.stringify(answers));
    } catch { return ""; }
};

export const decodeAnswers = (code: string): Record<string, string> | null => {
    try {
        return JSON.parse(atob(code));
    } catch { return null; }
};
