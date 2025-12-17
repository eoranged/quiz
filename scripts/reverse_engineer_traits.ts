
import { CHARACTERS } from "../data/witcher-personality/characters";
import { QUESTIONS_DATA } from "../data/witcher-personality/questions";
import { calculateProfile } from "../services/engine";
import { CharacterId, Trait } from "../types";

const LORE_ANSWERS: Record<string, Record<string, string>> = {
    [CharacterId.GERALT]: {
        "q_global_values": "val_survival",
        "q_global_social": "soc_corner",
        "q_global_conflict": "con_slayer",
        "q_rebel_humanity": "reb_pity",
        "q_rebel_rules": "reb_guidelines",
        "q_pro_prep": "pro_study",
        "q_pro_loyalty": "pro_shrug",
        "q_bard_love": "bard_bond",
        "q_bard_risk": "bard_check",
        "q_mentor_youth": "ment_hope",
        "q_mentor_legacy": "ment_tale",
        "q_ruler_king": "rul_just",
        "q_ruler_sacrifice": "rul_save",
        "q_magic_attitude": "mag_hate",
        "q_hobby": "hob_meditate",
        "q_authority_source": "auth_force",
        "q_crisis_friend": "cris_storm",
        "q_methodology": "meth_sword",
        "q_loyalty_target": "loy_friends",
    },
    [CharacterId.YENNEFER]: {
        "q_global_values": "val_power",
        "q_global_social": "soc_network",
        "q_global_conflict": "con_negotiate",
        "q_rebel_humanity": "reb_tool",
        "q_rebel_rules": "reb_own",
        "q_pro_prep": "pro_study",
        "q_pro_loyalty": "pro_revenge",
        "q_bard_love": "bard_bond",
        "q_bard_risk": "bard_check",
        "q_mentor_youth": "ment_hope",
        "q_mentor_legacy": "ment_school",
        "q_ruler_king": "rul_feared",
        "q_ruler_sacrifice": "rul_doit",
        "q_magic_attitude": "mag_love",
        "q_hobby": "hob_scheme",
        "q_authority_source": "auth_magic",
        "q_crisis_friend": "cris_storm",
        "q_methodology": "meth_magic",
        "q_loyalty_target": "loy_friends",
    },
    [CharacterId.JASKIER]: {
        "q_global_values": "val_fun",
        "q_global_social": "soc_center",
        "q_global_conflict": "con_chaos",
        "q_rebel_humanity": "reb_pity",
        "q_rebel_rules": "reb_break",
        "q_pro_prep": "pro_improv",
        "q_pro_loyalty": "pro_expose",
        "q_bard_love": "bard_muse",
        "q_bard_risk": "bard_yes",
        "q_mentor_youth": "ment_hope",
        "q_mentor_legacy": "ment_tale",
        "q_ruler_king": "rul_loved",
        "q_ruler_sacrifice": "rul_save",
        "q_magic_attitude": "mag_wonder",
        "q_hobby": "hob_brothel",
        "q_authority_source": "auth_force",
        "q_crisis_friend": "cris_bribe",
        "q_methodology": "meth_words",
        "q_loyalty_target": "loy_friends",
    },
    [CharacterId.CIRI]: {
        "q_global_values": "val_fun",
        "q_global_social": "soc_leave",
        "q_global_conflict": "con_slayer",
        "q_rebel_humanity": "reb_pity",
        "q_rebel_rules": "reb_break",
        "q_pro_prep": "pro_improv",
        "q_pro_loyalty": "pro_revenge",
        "q_bard_love": "bard_bond",
        "q_bard_risk": "bard_yes",
        "q_mentor_youth": "ment_strong",
        "q_mentor_legacy": "ment_clean",
        "q_ruler_king": "rul_just",
        "q_ruler_sacrifice": "rul_save",
        "q_magic_attitude": "mag_wonder",
        "q_hobby": "hob_meditate",         // Training
        "q_authority_source": "auth_magic",
        "q_crisis_friend": "cris_storm",
        "q_methodology": "meth_sword",
        "q_loyalty_target": "loy_friends",
    },
    [CharacterId.TRISS]: {
        "q_global_values": "val_fun",
        "q_global_social": "soc_network",
        "q_global_conflict": "con_negotiate",
        "q_rebel_humanity": "reb_pity",
        "q_rebel_rules": "reb_guidelines",
        "q_pro_prep": "pro_study",
        "q_pro_loyalty": "pro_shrug",
        "q_bard_love": "bard_bond",
        "q_bard_risk": "bard_check",
        "q_mentor_youth": "ment_hope",
        "q_mentor_legacy": "ment_clean",
        "q_ruler_king": "rul_just",
        "q_ruler_sacrifice": "rul_save",
        "q_magic_attitude": "mag_love",
        "q_hobby": "hob_brothel",
        "q_authority_source": "auth_magic",
        "q_crisis_friend": "cris_storm",
        "q_methodology": "meth_magic",
        "q_loyalty_target": "loy_friends",
    },
    [CharacterId.VESEMIR]: {
        "q_global_values": "val_knowledge",
        "q_global_social": "soc_corner",
        "q_global_conflict": "con_contract",
        "q_rebel_humanity": "reb_pity",
        "q_rebel_rules": "reb_guidelines",
        "q_pro_prep": "pro_study",
        "q_pro_loyalty": "pro_shrug",
        "q_bard_love": "bard_bond",
        "q_bard_risk": "bard_no",
        "q_mentor_youth": "ment_hope",
        "q_mentor_legacy": "ment_school",
        "q_ruler_king": "rul_just",
        "q_ruler_sacrifice": "rul_save",
        "q_magic_attitude": "mag_tool",
        "q_hobby": "hob_meditate",
        "q_authority_source": "auth_law",
        "q_crisis_friend": "cris_storm",
        "q_methodology": "meth_sword",
        "q_loyalty_target": "loy_friends",
    },
    [CharacterId.ZOLTAN]: {
        "q_global_values": "val_fun",
        "q_global_social": "soc_center",
        "q_global_conflict": "con_slayer",
        "q_rebel_humanity": "reb_pity",
        "q_rebel_rules": "reb_break",
        "q_pro_prep": "pro_gear",
        "q_pro_loyalty": "pro_revenge",
        "q_bard_love": "bard_muse",
        "q_bard_risk": "bard_yes",
        "q_mentor_youth": "ment_hope",
        "q_mentor_legacy": "ment_tale",
        "q_ruler_king": "rul_just",
        "q_ruler_sacrifice": "rul_save",
        "q_magic_attitude": "mag_hate",
        "q_hobby": "hob_gwent",
        "q_authority_source": "auth_force",
        "q_crisis_friend": "cris_storm",
        "q_methodology": "meth_sword",
        "q_loyalty_target": "loy_friends",
    },
    [CharacterId.REGIS]: {
        "q_global_values": "val_knowledge",
        "q_global_social": "soc_corner",
        "q_global_conflict": "con_negotiate",
        "q_rebel_humanity": "reb_pity",
        "q_rebel_rules": "reb_guidelines",
        "q_pro_prep": "pro_study",
        "q_pro_loyalty": "pro_shrug",
        "q_bard_love": "bard_bond",
        "q_bard_risk": "bard_check",
        "q_mentor_youth": "ment_hope",
        "q_mentor_legacy": "ment_clean",
        "q_ruler_king": "rul_clever",
        "q_ruler_sacrifice": "rul_save",
        "q_magic_attitude": "mag_love",
        "q_hobby": "hob_meditate",
        "q_authority_source": "auth_knowledge", // will resolve to default in logic or needs handling. actually 'calculateProfile' just ignores bad answers. Wait! 'auth_knowledge' option DOES NOT EXIST. I need to use an existing ID. 'val_knowledge' exists. 'auth_knowledge' does not. In Q 'q_authority_source', options are: auth_law, auth_force, auth_magic, auth_money. I should pick ONE OF THOSE. For Regis: 'auth_magic' (Magic is power)? Or 'auth_law'? He respects laws of nature. 'auth_magic' fits best (High Vampire).
        "q_crisis_friend": "cris_storm",
        "q_methodology": "meth_words",
        "q_loyalty_target": "loy_friends",
    },
    [CharacterId.LAMBERT]: {
        "q_global_values": "val_survival",
        "q_global_social": "soc_leave",
        "q_global_conflict": "con_contract",
        "q_rebel_humanity": "reb_annoy",
        "q_rebel_rules": "reb_break",
        "q_pro_prep": "pro_gear",
        "q_pro_loyalty": "pro_shrug",
        "q_bard_love": "bard_danger",
        "q_bard_risk": "bard_no",
        "q_mentor_youth": "ment_doom",
        "q_mentor_legacy": "ment_tale",
        "q_ruler_king": "rul_feared",
        "q_ruler_sacrifice": "rul_neutral",
        "q_magic_attitude": "mag_hate",
        "q_hobby": "hob_gwent",
        "q_authority_source": "auth_force",
        "q_crisis_friend": "cris_storm",
        "q_methodology": "meth_sword",
        "q_loyalty_target": "loy_friends",
    },
    [CharacterId.ESKEL]: {
        "q_global_values": "val_survival",
        "q_global_social": "soc_corner",
        "q_global_conflict": "con_contract",
        "q_rebel_humanity": "reb_pity",
        "q_rebel_rules": "reb_guidelines",
        "q_pro_prep": "pro_study",
        "q_pro_loyalty": "pro_shrug",
        "q_bard_love": "bard_danger",      // Differentiator
        "q_bard_risk": "bard_no",
        "q_mentor_youth": "ment_hope",
        "q_mentor_legacy": "ment_school",
        "q_ruler_king": "rul_just",
        "q_ruler_sacrifice": "rul_save",
        "q_magic_attitude": "mag_tool",
        "q_hobby": "hob_meditate",
        "q_authority_source": "auth_law",
        "q_crisis_friend": "cris_storm",
        "q_methodology": "meth_sword",
        "q_loyalty_target": "loy_friends",
    },
    [CharacterId.DIJKSTRA]: {
        "q_global_values": "val_power",
        "q_global_social": "soc_network",
        "q_global_conflict": "con_contract",
        "q_rebel_humanity": "reb_tool",
        "q_rebel_rules": "reb_guidelines",
        "q_pro_prep": "pro_study",
        "q_pro_loyalty": "pro_revenge",
        "q_bard_love": "bard_danger",
        "q_bard_risk": "bard_no",
        "q_mentor_youth": "ment_strong",
        "q_mentor_legacy": "ment_school",
        "q_ruler_king": "rul_clever",
        "q_ruler_sacrifice": "rul_doit",
        "q_magic_attitude": "mag_tool",
        "q_hobby": "hob_scheme",
        "q_authority_source": "auth_money",
        "q_crisis_friend": "cris_bribe",
        "q_methodology": "meth_cunning",
        "q_loyalty_target": "loy_state",
    },
    [CharacterId.EMHYR]: {
        "q_global_values": "val_power",
        "q_global_social": "soc_network",
        "q_global_conflict": "con_slayer",
        "q_rebel_humanity": "reb_tool",
        "q_rebel_rules": "reb_own",
        "q_pro_prep": "pro_study",
        "q_pro_loyalty": "pro_revenge",
        "q_bard_love": "bard_danger",
        "q_bard_risk": "bard_no",
        "q_mentor_youth": "ment_school",
        "q_mentor_legacy": "ment_school",
        "q_ruler_king": "rul_feared",
        "q_ruler_sacrifice": "rul_doit",
        "q_magic_attitude": "mag_tool",
        "q_hobby": "hob_scheme",
        "q_authority_source": "auth_law",  // Imperial Law
        "q_crisis_friend": "cris_plan",
        "q_methodology": "meth_cunning",
        "q_loyalty_target": "loy_state",
    },
    [CharacterId.ROCHE]: {
        "q_global_values": "val_survival",
        "q_global_social": "soc_corner",
        "q_global_conflict": "con_slayer",
        "q_rebel_humanity": "reb_annoy",
        "q_rebel_rules": "reb_guidelines",
        "q_pro_prep": "pro_gear",
        "q_pro_loyalty": "pro_revenge",
        "q_bard_love": "bard_bond",
        "q_bard_risk": "bard_yes",
        "q_mentor_youth": "ment_hope",
        "q_mentor_legacy": "ment_clean",
        "q_ruler_king": "rul_just",
        "q_ruler_sacrifice": "rul_doit",
        "q_magic_attitude": "mag_hate",
        "q_hobby": "hob_meditate",
        "q_authority_source": "auth_law",
        "q_crisis_friend": "cris_storm",
        "q_methodology": "meth_sword",
        "q_loyalty_target": "loy_state",
    },
    [CharacterId.IORVETH]: {
        "q_global_values": "val_survival",
        "q_global_social": "soc_leave",
        "q_global_conflict": "con_slayer",
        "q_rebel_humanity": "reb_prey",
        "q_rebel_rules": "reb_break",
        "q_pro_prep": "pro_gear",
        "q_pro_loyalty": "pro_revenge",
        "q_bard_love": "bard_bond",
        "q_bard_risk": "bard_yes",
        "q_mentor_youth": "ment_hope",
        "q_mentor_legacy": "ment_clean",
        "q_ruler_king": "rul_loved",
        "q_ruler_sacrifice": "rul_doit",
        "q_magic_attitude": "mag_tool",
        "q_hobby": "hob_meditate",
        "q_authority_source": "auth_force",
        "q_crisis_friend": "cris_storm",
        "q_methodology": "meth_cunning",
        "q_loyalty_target": "loy_friends",
    },
    [CharacterId.GAUNTER]: {
        "q_global_values": "val_power",
        "q_global_social": "soc_corner",
        "q_global_conflict": "con_contract",
        "q_rebel_humanity": "reb_prey",
        "q_rebel_rules": "reb_own",
        "q_pro_prep": "pro_study",
        "q_pro_loyalty": "pro_revenge",
        "q_bard_love": "bard_danger",
        "q_bard_risk": "bard_yes",
        "q_mentor_youth": "ment_doom",
        "q_mentor_legacy": "ment_ruins",
        "q_ruler_king": "rul_clever",
        "q_ruler_sacrifice": "rul_neutral",
        "q_magic_attitude": "mag_love",
        "q_hobby": "hob_scheme",
        "q_authority_source": "auth_magic",
        "q_crisis_friend": "cris_abandon",
        "q_methodology": "meth_cunning",
        "q_loyalty_target": "loy_self",
    },
    [CharacterId.SHANI]: {
        "q_global_values": "val_survival",
        "q_global_social": "soc_center",
        "q_global_conflict": "con_negotiate",
        "q_rebel_humanity": "reb_pity",
        "q_rebel_rules": "reb_guidelines",
        "q_pro_prep": "pro_study",
        "q_pro_loyalty": "pro_shrug",
        "q_bard_love": "bard_bond",
        "q_bard_risk": "bard_yes",
        "q_mentor_youth": "ment_hope",
        "q_mentor_legacy": "ment_clean",
        "q_ruler_king": "rul_loved",
        "q_ruler_sacrifice": "rul_save",
        "q_magic_attitude": "mag_tool",
        "q_hobby": "hob_gwent",
        "q_authority_source": "auth_law",
        "q_crisis_friend": "cris_bribe",
        "q_methodology": "meth_words",
        "q_loyalty_target": "loy_friends",
    },
    [CharacterId.PHILIPPA]: {
        "q_global_values": "val_power",
        "q_global_social": "soc_network",
        "q_global_conflict": "con_negotiate",
        "q_rebel_humanity": "reb_tool",
        "q_rebel_rules": "reb_own",
        "q_pro_prep": "pro_study",
        "q_pro_loyalty": "pro_revenge",
        "q_bard_love": "bard_danger",
        "q_bard_risk": "bard_check",
        "q_mentor_youth": "ment_school",
        "q_mentor_legacy": "ment_school",
        "q_ruler_king": "rul_clever",
        "q_ruler_sacrifice": "rul_doit",
        "q_magic_attitude": "mag_love",
        "q_hobby": "hob_scheme",
        "q_authority_source": "auth_magic",
        "q_crisis_friend": "cris_plan",
        "q_methodology": "meth_magic",
        "q_loyalty_target": "loy_state",
    },
    [CharacterId.VILGEFORTZ]: {
        "q_global_values": "val_power",
        "q_global_social": "soc_network",
        "q_global_conflict": "con_negotiate",
        "q_rebel_humanity": "reb_prey",
        "q_rebel_rules": "reb_own",
        "q_pro_prep": "pro_study",
        "q_pro_loyalty": "pro_revenge",
        "q_bard_love": "bard_danger",
        "q_bard_risk": "bard_yes",
        "q_mentor_youth": "ment_strong",
        "q_mentor_legacy": "ment_ruins",
        "q_ruler_king": "rul_feared",
        "q_ruler_sacrifice": "rul_doit",
        "q_magic_attitude": "mag_love",
        "q_hobby": "hob_scheme",
        "q_authority_source": "auth_magic",
        "q_crisis_friend": "cris_abandon",
        "q_methodology": "meth_magic",
        "q_loyalty_target": "loy_knowledge",
    },
    [CharacterId.DETTLAFF]: {
        "q_global_values": "val_fun",
        "q_global_social": "soc_leave",
        "q_global_conflict": "con_slayer",
        "q_rebel_humanity": "reb_prey",
        "q_rebel_rules": "reb_break",
        "q_pro_prep": "pro_gear",
        "q_pro_loyalty": "pro_revenge",
        "q_bard_love": "bard_bond",
        "q_bard_risk": "bard_yes",
        "q_mentor_youth": "ment_doom",
        "q_mentor_legacy": "ment_ruins",
        "q_ruler_king": "rul_neutral",
        "q_ruler_sacrifice": "rul_save",
        "q_magic_attitude": "mag_hate",
        "q_hobby": "hob_scheme",
        "q_authority_source": "auth_force",
        "q_crisis_friend": "cris_storm",
        "q_methodology": "meth_sword",
        "q_loyalty_target": "loy_friends",
    },
    [CharacterId.ANNA_HENRIETTA]: {
        "q_global_values": "val_power",
        "q_global_social": "soc_center",
        "q_global_conflict": "con_slayer",
        "q_rebel_humanity": "reb_pity",
        "q_rebel_rules": "reb_own",
        "q_pro_prep": "pro_gear",
        "q_pro_loyalty": "pro_revenge",
        "q_bard_love": "bard_muse",
        "q_bard_risk": "bard_yes",
        "q_mentor_youth": "ment_hope",
        "q_mentor_legacy": "ment_clean",
        "q_ruler_king": "rul_loved",
        "q_ruler_sacrifice": "rul_save",
        "q_magic_attitude": "mag_wonder",
        "q_hobby": "hob_scheme",
        "q_authority_source": "auth_law",
        "q_crisis_friend": "cris_storm",
        "q_methodology": "meth_words",
        "q_loyalty_target": "loy_state",
    },
    [CharacterId.OLGIERD]: {
        "q_global_values": "val_fun",
        "q_global_social": "soc_center",
        "q_global_conflict": "con_slayer",
        "q_rebel_humanity": "reb_pity",
        "q_rebel_rules": "reb_break",
        "q_pro_prep": "pro_improv",
        "q_pro_loyalty": "pro_shrug",
        "q_bard_love": "bard_bond",
        "q_bard_risk": "bard_yes",
        "q_mentor_youth": "ment_doom",
        "q_mentor_legacy": "ment_ruins",
        "q_ruler_king": "rul_feared",
        "q_ruler_sacrifice": "rul_doit",
        "q_magic_attitude": "mag_hate",
        "q_hobby": "hob_brothel",
        "q_authority_source": "auth_force",
        "q_crisis_friend": "cris_abandon",
        "q_methodology": "meth_sword",
        "q_loyalty_target": "loy_self",
    },
    [CharacterId.LETHO]: {
        "q_global_values": "val_survival",
        "q_global_social": "soc_corner",
        "q_global_conflict": "con_contract",
        "q_rebel_humanity": "reb_tool",
        "q_rebel_rules": "reb_break",
        "q_pro_prep": "pro_study",
        "q_pro_loyalty": "pro_shrug",
        "q_bard_love": "bard_danger",
        "q_bard_risk": "bard_no",
        "q_mentor_youth": "ment_school",
        "q_mentor_legacy": "ment_school",
        "q_ruler_king": "rul_clever",
        "q_ruler_sacrifice": "rul_doit",
        "q_magic_attitude": "mag_tool",
        "q_hobby": "hob_meditate",
        "q_authority_source": "auth_force",
        "q_crisis_friend": "cris_plan",
        "q_methodology": "meth_sword",
        "q_loyalty_target": "loy_friends",
    },
    [CharacterId.EREDIN]: {
        "q_global_values": "val_power",
        "q_global_social": "soc_network",
        "q_global_conflict": "con_slayer",
        "q_rebel_humanity": "reb_prey",
        "q_rebel_rules": "reb_own",
        "q_pro_prep": "pro_gear",
        "q_pro_loyalty": "pro_revenge",
        "q_bard_love": "bard_danger",
        "q_bard_risk": "bard_yes",
        "q_mentor_youth": "ment_strong",
        "q_mentor_legacy": "ment_school",
        "q_ruler_king": "rul_feared",
        "q_ruler_sacrifice": "rul_doit",
        "q_magic_attitude": "mag_love",
        "q_hobby": "hob_scheme",
        "q_authority_source": "auth_force",
        "q_crisis_friend": "cris_abandon",
        "q_methodology": "meth_sword",
        "q_loyalty_target": "loy_state",
    },
    [CharacterId.AVALLACH]: {
        "q_global_values": "val_knowledge",
        "q_global_social": "soc_leave",
        "q_global_conflict": "con_negotiate",
        "q_rebel_humanity": "reb_annoy",
        "q_rebel_rules": "reb_own",
        "q_pro_prep": "pro_study",
        "q_pro_loyalty": "pro_shrug",
        "q_bard_love": "bard_bond",
        "q_bard_risk": "bard_check",
        "q_mentor_youth": "ment_strong",
        "q_mentor_legacy": "ment_ruins",
        "q_ruler_king": "rul_clever",
        "q_ruler_sacrifice": "rul_doit",
        "q_magic_attitude": "mag_love",
        "q_hobby": "hob_study", // Drawing? "Study" -> This key might not exist? options: hob_gwent, hob_meditate, hob_brothel, hob_scheme. I must choose one of these. 'hob_meditate' (focus) or 'hob_scheme' (planning). Avallach schemes.
        "q_authority_source": "auth_knowledge", // AGAIN, 'auth_knowledge' DOES NOT EXIST. I must pick from: auth_law, auth_force, auth_magic, auth_money. Avallach is 'auth_magic' (Source). 
        "q_crisis_friend": "cris_plan",
        "q_methodology": "meth_magic",
        "q_loyalty_target": "loy_knowledge",
    }
};

// --- 2. EXECUTE ---

console.log("Starting Reverse Engineering of Traits...");

const newCharacterData: any = {};
const collisions: Record<string, string[]> = {};

// Helper to generate hash of answers (collision detection)
const generateAnswerHash = (answers: Record<string, string>) => {
    return Object.values(answers).sort().join("|");
}

const answerHashes: Record<string, string> = {};

Object.values(CHARACTERS).forEach(character => {
    let answers = LORE_ANSWERS[character.id];

    if (!answers) {
        console.warn(`⚠️ No lore answers found for ${character.name} (${character.id}). Skipping.`);
        return;
    }

    // FIXUP for invalid keys I noticed in comments
    if (character.id === CharacterId.AVALLACH) {
        // Fix hobby (hob_study -> hob_scheme)
        if (answers["q_hobby"] === "hob_study") answers["q_hobby"] = "hob_scheme";
        // Fix authority (auth_knowledge -> auth_magic)
        if (answers["q_authority_source"] === "auth_knowledge") answers["q_authority_source"] = "auth_magic";
    }
    if (character.id === CharacterId.REGIS) {
        // Fix authority (auth_knowledge -> auth_magic)
        if (answers["q_authority_source"] === "auth_knowledge") answers["q_authority_source"] = "auth_magic";
    }

    // 1. Calculate Profile
    const profile = calculateProfile(answers, QUESTIONS_DATA);

    // 2. Collision Check
    const hash = generateAnswerHash(answers);
    if (answerHashes[hash]) {
        const existing = answerHashes[hash];
        console.warn(`❌ CLASH DETECTED: ${character.id} has same answers as ${existing}`);
        if (!collisions[existing]) collisions[existing] = [];
        collisions[existing].push(character.id);
    }
    answerHashes[hash] = character.id;


    // 3. Create New Data Block
    // Define overrides
    const SIGNATURE_OVERRIDES: Record<string, Record<string, number>> = {
        [CharacterId.EREDIN]: { [Trait.MAGIC]: 2.5, [Trait.AMBITION]: 2 },
        [CharacterId.LAMBERT]: { [Trait.CYNICISM]: 3, [Trait.IMPULSIVENESS]: 0.5 },
        [CharacterId.DETTLAFF]: { [Trait.IMPULSIVENESS]: 2.5, [Trait.EMPATHY]: 0.5 },
    };

    newCharacterData[character.id] = {
        ...character,
        traits: profile,
        signatureWeights: SIGNATURE_OVERRIDES[character.id] || character.signatureWeights
    };
});

// --- 3. OUTPUT ---

console.log("\n✅ Generated Data:");

let fileContent = `
import { CharacterId, QuizResult, Trait } from "../../types";

export const CHARACTERS: Record<CharacterId, QuizResult> = {
`;

Object.values(newCharacterData).forEach((char: any) => {
    fileContent += `  [CharacterId.${char.id.toUpperCase()}]: {\n`;
    fileContent += `    id: CharacterId.${char.id.toUpperCase()},\n`;
    fileContent += `    name: "${char.name}",\n`;
    fileContent += `    title: "${char.title}",\n`;
    fileContent += `    description: "${char.description}",\n`;
    fileContent += `    quote: "${char.quote}",\n`;
    fileContent += `    alignment: "${char.alignment}",\n`;
    fileContent += `    colorTheme: "${char.colorTheme}",\n`;
    fileContent += `    traits: {\n`;
    Object.entries(char.traits).forEach(([trait, value]) => {
        fileContent += `      [Trait.${(trait as string).toUpperCase()}]: ${value},\n`;
    });
    fileContent += `    },\n`;
    if (char.signatureWeights) {
        fileContent += `    signatureWeights: {\n`;
        Object.entries(char.signatureWeights).forEach(([trait, value]) => {
            fileContent += `      [Trait.${(trait as string).toUpperCase()}]: ${value},\n`;
        });
        fileContent += `    }\n`;
    }
    fileContent += `  },\n`;
});

fileContent += `};\n`;

console.log(fileContent);
