
import { Question, Trait } from "../types";

export const QUESTIONS_DATA: Question[] = [
    // --- GLOBAL QUESTIONS (Phase 1) ---
    {
        id: "q_global_values",
        text: "Что для тебя важнее всего в этом жестоком мире?",
        tags: ["global"],
        options: [
            {
                id: "val_power",
                text: "Власть и Контроль. Чтобы никто не смел мне указывать.",
                traitModifiers: { [Trait.AMBITION]: 300, [Trait.ORDER]: 150, [Trait.CYNICISM]: 100 }
            },
            {
                id: "val_fun",
                text: "Веселье, Вино и Любовь! Жизнь одна, надо прожить её ярко.",
                traitModifiers: { [Trait.EXTROVERSION]: 300, [Trait.IMPULSIVENESS]: 200, [Trait.AMBITION]: -100 }
            },
            {
                id: "val_knowledge",
                text: "Знания и Тайны. Глупцы умирают первыми.",
                traitModifiers: { [Trait.INTELLECT]: 300, [Trait.MAGIC]: 150, [Trait.EXTROVERSION]: -50 }
            },
            {
                id: "val_survival",
                text: "Выживание и Монеты. Я не герой, я профи.",
                traitModifiers: { [Trait.CYNICISM]: 300, [Trait.EMPATHY]: -100 }
            }
        ]
    },
    {
        id: "q_global_social",
        text: "Ты на пиру в Цинтре. Где тебя найти?",
        tags: ["global"],
        options: [
            {
                id: "soc_center",
                text: "Я в центре зала, танцую на столе или пою балладу!",
                traitModifiers: { [Trait.EXTROVERSION]: 300, [Trait.IMPULSIVENESS]: 150, [Trait.ORDER]: -100 }
            },
            {
                id: "soc_corner",
                text: "В темном углу, наблюдаю за всеми и оцениваю угрозы.",
                traitModifiers: { [Trait.CYNICISM]: 200, [Trait.INTELLECT]: 150, [Trait.EXTROVERSION]: -200 }
            },
            {
                id: "soc_network",
                text: "Рядом с королем или важными вельможами. Завожу полезные связи.",
                traitModifiers: { [Trait.AMBITION]: 250, [Trait.INTELLECT]: 100, [Trait.CYNICISM]: 100 }
            },
            {
                id: "soc_leave",
                text: "Я уже ушел. Ненавижу толпу.",
                traitModifiers: { [Trait.EXTROVERSION]: -300, [Trait.ORDER]: 50, [Trait.IMPULSIVENESS]: -50 }
            }
        ]
    },
    {
        id: "q_global_conflict",
        text: "Дракон напал на деревню! Твои действия?",
        tags: ["global"],
        options: [
            {
                id: "con_negotiate",
                text: "Попробую договориться. Драконы разумны, в отличие от крестьян.",
                traitModifiers: { [Trait.INTELLECT]: 200, [Trait.EMPATHY]: 150, [Trait.IMPULSIVENESS]: -100 }
            },
            {
                id: "con_slayer",
                text: "Достаю меч. Зло должно быть уничтожено!",
                traitModifiers: { [Trait.ORDER]: 200, [Trait.IMPULSIVENESS]: 150, [Trait.CYNICISM]: -50 }
            },
            {
                id: "con_contract",
                text: "Сначала договоримся о цене. Бесплатно я и пальцем не пошевелю.",
                traitModifiers: { [Trait.CYNICISM]: 300, [Trait.EMPATHY]: -200 }
            },
            {
                id: "con_chaos",
                text: "Это же Золотой Дракон?! Бежим смотреть, это так красиво!",
                traitModifiers: { [Trait.IMPULSIVENESS]: 300, [Trait.EXTROVERSION]: 100, [Trait.INTELLECT]: -100 }
            }
        ]
    },

    // --- ARCHETYPE: REBEL/MONSTER (Focus: Cynicism, low Empathy) ---
    {
        id: "q_rebel_humanity",
        text: "Что ты думаешь о людях?",
        tags: ["cluster_rebel"],
        options: [
            {
                id: "reb_prey",
                text: "Овцы. Их можно стричь или есть.",
                traitModifiers: { [Trait.EMPATHY]: -300, [Trait.CYNICISM]: 300, [Trait.AMBITION]: 100 }
            },
            {
                id: "reb_annoy",
                text: "Шумные, глупые, живут слишком мало.",
                traitModifiers: { [Trait.INTELLECT]: 100, [Trait.CYNICISM]: 200, [Trait.EXTROVERSION]: -100 }
            },
            {
                id: "reb_tool",
                text: "Полезный ресурс, если уметь ими управлять.",
                traitModifiers: { [Trait.AMBITION]: 200, [Trait.CYNICISM]: 150, [Trait.INTELLECT]: 100 }
            },
            {
                id: "reb_pity",
                text: "Жалкие создания. Но иногда они могут удивить.",
                traitModifiers: { [Trait.EMPATHY]: 50, [Trait.CYNICISM]: 50 }
            }
        ]
    },
    {
        id: "q_rebel_rules",
        text: "Правила Для того, чтобы...",
        tags: ["cluster_rebel"],
        options: [
            {
                id: "reb_break",
                text: "Их нарушать! Анархия — мать порядка.",
                traitModifiers: { [Trait.ORDER]: -300, [Trait.IMPULSIVENESS]: 200, [Trait.EXTROVERSION]: 100 }
            },
            {
                id: "reb_guidelines",
                text: "Кодекс - это важно, но здравый смысл важнее.",
                traitModifiers: { [Trait.ORDER]: 100, [Trait.INTELLECT]: 150, [Trait.AMBITION]: 0 }
            },
            {
                id: "reb_own",
                text: "Я сам устанавливаю правила для других.",
                traitModifiers: { [Trait.ORDER]: 100, [Trait.AMBITION]: 250, [Trait.IMPULSIVENESS]: -100 }
            }
        ]
    },

    // --- ARCHETYPE: PROFESSIONAL (Focus: Intellect/Cynicism, low Impulsiveness) ---
    {
        id: "q_pro_prep",
        text: "Как ты готовишься к сложной задаче?",
        tags: ["cluster_pro"],
        options: [
            {
                id: "pro_study",
                text: "Читаю все доступные книги, медитирую, варю эликсиры.",
                traitModifiers: { [Trait.INTELLECT]: 300, [Trait.IMPULSIVENESS]: -200, [Trait.ORDER]: 150 }
            },
            {
                id: "pro_gear",
                text: "Проверяю снаряжение. Мой меч должен быть острым.",
                traitModifiers: { [Trait.ORDER]: 200, [Trait.CYNICISM]: 50, [Trait.MAGIC]: -50 }
            },
            {
                id: "pro_improv",
                text: "Разберусь на месте. Удача любит смелых.",
                traitModifiers: { [Trait.IMPULSIVENESS]: 200, [Trait.INTELLECT]: -100, [Trait.ORDER]: -100 }
            }
        ]
    },
    {
        id: "q_pro_loyalty",
        text: "Твой наниматель предал тебя. Что делаешь?",
        tags: ["cluster_pro"],
        options: [
            {
                id: "pro_revenge",
                text: "Вернусь и убью. Никто не кидает меня на деньги.",
                traitModifiers: { [Trait.CYNICISM]: 200, [Trait.ORDER]: 100, [Trait.EMPATHY]: -100 }
            },
            {
                id: "pro_shrug",
                text: "Бывает. Сделаю выводы и пойду дальше.",
                traitModifiers: { [Trait.CYNICISM]: 300, [Trait.INTELLECT]: 150, [Trait.IMPULSIVENESS]: -200 }
            },
            {
                id: "pro_expose",
                text: "Разрушу его репутацию. Это больнее, чем смерть.",
                traitModifiers: { [Trait.INTELLECT]: 250, [Trait.CYNICISM]: 150, [Trait.IMPULSIVENESS]: -100 }
            }
        ]
    },

    // --- ARCHETYPE: PASSIONATE (Focus: Extroversion/Impulsiveness) ---
    {
        id: "q_bard_love",
        text: "Что такое Любовь?",
        tags: ["cluster_bard"],
        options: [
            {
                id: "bard_muse",
                text: "Вдохновение! Страсть! Повод написать новую балладу!",
                traitModifiers: { [Trait.EXTROVERSION]: 300, [Trait.IMPULSIVENESS]: 150, [Trait.EMPATHY]: 150 }
            },
            {
                id: "bard_danger",
                text: "Опасная игра, в которой можно проиграть жизнь.",
                traitModifiers: { [Trait.CYNICISM]: 150, [Trait.INTELLECT]: 100, [Trait.EMPATHY]: -50 }
            },
            {
                id: "bard_bond",
                text: "Связь двух душ, ради которой стоит умереть.",
                traitModifiers: { [Trait.EMPATHY]: 300, [Trait.IMPULSIVENESS]: 200, [Trait.CYNICISM]: -200 }
            }
        ]
    },
    {
        id: "q_bard_risk",
        text: "Перед тобой портал в неизвестность. Прыгаешь?",
        tags: ["cluster_bard"],
        options: [
            {
                id: "bard_yes",
                text: "Джеронимо! Кто не рискует, тот не пьет шампанское!",
                traitModifiers: { [Trait.IMPULSIVENESS]: 300, [Trait.EXTROVERSION]: 150, [Trait.ORDER]: -150 }
            },
            {
                id: "bard_check",
                text: "Сначала кину туда камень. Или друга.",
                traitModifiers: { [Trait.INTELLECT]: 150, [Trait.CYNICISM]: 100, [Trait.EMPATHY]: -50 }
            },
            {
                id: "bard_no",
                text: "Я что, похож на идиота? Я пойду пешком.",
                traitModifiers: { [Trait.CYNICISM]: 150, [Trait.ORDER]: 100, [Trait.MAGIC]: -100 }
            }
        ]
    },

    // --- ARCHETYPE: MENTOR (Focus: Order/Intellect/Good) ---
    {
        id: "q_mentor_youth",
        text: "Молодое поколение ведьмаков/чародеев...",
        tags: ["cluster_mentor"],
        options: [
            {
                id: "ment_doom",
                text: "Обречено. Они не уважают традиции.",
                traitModifiers: { [Trait.ORDER]: 250, [Trait.CYNICISM]: 150, [Trait.EMPATHY]: -50 }
            },
            {
                id: "ment_hope",
                text: "Наша надежда. Нужно просто направить их энергию.",
                traitModifiers: { [Trait.EMPATHY]: 250, [Trait.INTELLECT]: 150, [Trait.CYNICISM]: -150 }
            },
            {
                id: "ment_strong",
                text: "Сильнее нас. И это пугает.",
                traitModifiers: { [Trait.INTELLECT]: 200, [Trait.CYNICISM]: 100, [Trait.AMBITION]: -50 }
            }
        ]
    },
    {
        id: "q_mentor_legacy",
        text: "Что ты оставишь после себя?",
        tags: ["cluster_mentor"],
        options: [
            {
                id: "ment_school",
                text: "Школу, учеников, знания. Мое дело будет жить.",
                traitModifiers: { [Trait.ORDER]: 300, [Trait.INTELLECT]: 200, [Trait.EMPATHY]: 100 }
            },
            {
                id: "ment_clean",
                text: "Чистый мир. Меньше монстров, меньше зла.",
                traitModifiers: { [Trait.ORDER]: 200, [Trait.EMPATHY]: 200, [Trait.AMBITION]: -50 }
            },
            {
                id: "ment_ruins",
                text: "Руины моих врагов.",
                traitModifiers: { [Trait.AMBITION]: 200, [Trait.CYNICISM]: 250, [Trait.EMPATHY]: -200 }
            },
            {
                id: "ment_tale",
                text: "Пару баек в таверне. Слава мне не нужна.",
                traitModifiers: { [Trait.CYNICISM]: 150, [Trait.EXTROVERSION]: -100, [Trait.ORDER]: 50 }
            }
        ]
    },

    // --- ARCHETYPE: RULER (Focus: Ambition/Order) ---
    {
        id: "q_ruler_king",
        text: "Идеальный правитель должен быть...",
        tags: ["cluster_ruler"],
        options: [
            {
                id: "rul_feared",
                text: "Внушающим страх. Страх лучше держит порядок, чем любовь.",
                traitModifiers: { [Trait.CYNICISM]: 200, [Trait.ORDER]: 200, [Trait.EMPATHY]: -150 }
            },
            {
                id: "rul_just",
                text: "Справедливым. Закон превыше всего.",
                traitModifiers: { [Trait.ORDER]: 300, [Trait.INTELLECT]: 100, [Trait.IMPULSIVENESS]: -100 }
            },
            {
                id: "rul_clever",
                text: "Хитрым. Политика — это шахматы, где пешки умирают.",
                traitModifiers: { [Trait.INTELLECT]: 250, [Trait.AMBITION]: 250, [Trait.CYNICISM]: 150 }
            },
            {
                id: "rul_loved",
                text: "Любимым. Народ должен обожать своего короля!",
                traitModifiers: { [Trait.EXTROVERSION]: 300, [Trait.AMBITION]: 100, [Trait.ORDER]: -100 }
            }
        ]
    },
    {
        id: "q_ruler_sacrifice",
        text: "Нужно пожертвовать деревней, чтобы спасти королевство.",
        tags: ["cluster_ruler"],
        options: [
            {
                id: "rul_doit",
                text: "Без колебаний. Благо большинства важнее.",
                traitModifiers: { [Trait.INTELLECT]: 200, [Trait.EMPATHY]: -200, [Trait.ORDER]: 150 }
            },
            {
                id: "rul_save",
                text: "Я найду другой путь! Я не торгую жизнями.",
                traitModifiers: { [Trait.EMPATHY]: 250, [Trait.IMPULSIVENESS]: 150, [Trait.CYNICISM]: -150 }
            },
            {
                id: "rul_neutral",
                text: "Я не буду выбирать. Зло есть зло.",
                traitModifiers: { [Trait.CYNICISM]: 250, [Trait.ORDER]: 100, [Trait.AMBITION]: -50 }
            }
        ]
    },

    // --- SPECIAL/MAGIC (Tie Breakers) ---
    {
        id: "q_magic_attitude",
        text: "Магия. Твое отношение?",
        tags: ["magic_check"],
        options: [
            {
                id: "mag_love",
                text: "Это Искусство. Я хочу владеть ей в совершенстве.",
                traitModifiers: { [Trait.MAGIC]: 300, [Trait.INTELLECT]: 100 }
            },
            {
                id: "mag_hate",
                text: "Мерзость. Только сталь, только хардкор.",
                traitModifiers: { [Trait.MAGIC]: -300, [Trait.CYNICISM]: 100 }
            },
            {
                id: "mag_tool",
                text: "Инструмент. Полезно, чтобы разогреть суп или сжечь врага.",
                traitModifiers: { [Trait.MAGIC]: 100, [Trait.CYNICISM]: 50 }
            },
            {
                id: "mag_wonder",
                text: "Это шоу! Искры, порталы, драма — я в восторге!",
                traitModifiers: { [Trait.EXTROVERSION]: 250, [Trait.IMPULSIVENESS]: 150, [Trait.MAGIC]: -100 }
            }
        ]
    },
    {
        id: "q_hobby",
        text: "Вечер субботы. Чем займемся?",
        tags: ["hobby"],
        options: [
            {
                id: "hob_gwent",
                text: "ГВИНТ! ГВИНТ! ГВИНТ!",
                traitModifiers: { [Trait.INTELLECT]: 100, [Trait.EXTROVERSION]: 50 }
            },
            {
                id: "hob_meditate",
                text: "Медитация и чистка меча.",
                traitModifiers: { [Trait.ORDER]: 150, [Trait.EXTROVERSION]: -100 }
            },
            {
                id: "hob_brothel",
                text: "К Пассифлоре! Девочки заждались.",
                traitModifiers: { [Trait.IMPULSIVENESS]: 150, [Trait.AMBITION]: -50 }
            },
            {
                id: "hob_scheme",
                text: "Планирую захват мира... то есть, завтрашний день.",
                traitModifiers: { [Trait.AMBITION]: 200, [Trait.ORDER]: 100 }
            }
        ]
    }
];
