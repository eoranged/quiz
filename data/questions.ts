
import { Question, Trait } from "../types";

export const QUESTIONS_DATA: Question[] = [
    // 1. EMPATHY PRIMARY (Moral Dilemma)
    {
        id: "q_empathy_1",
        text: "Ты натыкаешься на раненого солдата вражеской армии, который просит воды. Твои действия?",
        options: [
            {
                id: "q_empathy_1_help",
                text: "Дам воды и перевяжу рану. Война войной, а он живой человек.",
                traitModifiers: {
                    [Trait.EMPATHY]: 250,
                    [Trait.CYNICISM]: -150,
                    [Trait.IMPULSIVENESS]: 50,
                    [Trait.AMBITION]: -50,
                },
            },
            {
                id: "q_empathy_1_ignore",
                text: "Проигнорирую. Это его проблемы, что он выбрал не ту сторону.",
                traitModifiers: {
                    [Trait.EMPATHY]: -150,
                    [Trait.CYNICISM]: 150,
                    [Trait.INTELLECT]: 50,
                    [Trait.EXTROVERSION]: -50,
                },
            },
            {
                id: "q_empathy_1_kill",
                text: "Добью, чтобы не мучился. Это милосердие.",
                traitModifiers: {
                    [Trait.EMPATHY]: -300,
                    [Trait.IMPULSIVENESS]: 150,
                    [Trait.CYNICISM]: 300,
                    [Trait.EXTROVERSION]: -150,
                },
            },
            {
                id: "q_empathy_1_trade",
                text: "Потребую плату за помощь. Ничего личного, только бизнес.",
                traitModifiers: {
                    [Trait.EMPATHY]: -200,
                    [Trait.AMBITION]: 200,
                    [Trait.CYNICISM]: 200,
                },
            },
        ],
    },
    // 2. EMPATHY PRIMARY (Social Interaction)
    {
        id: "q_empathy_2",
        text: "Твой друг попал в беду из-за своей глупости. Реакция?",
        options: [
            {
                id: "q_empathy_2_save",
                text: "Брошусь на помощь не раздумывая! Друзья важнее всего.",
                traitModifiers: {
                    [Trait.EMPATHY]: 250,
                    [Trait.IMPULSIVENESS]: 250,
                    [Trait.INTELLECT]: -100,
                },
            },
            {
                id: "q_empathy_2_lecture",
                text: "Помогу, но потом прочитаю долгую лекцию о том, какой он идиот.",
                traitModifiers: {
                    [Trait.EMPATHY]: 100,
                    [Trait.INTELLECT]: 100,
                    [Trait.CYNICISM]: 50,
                    [Trait.AMBITION]: 50, // Superiority complex
                },
            },
            {
                id: "q_empathy_2_leave",
                text: "Пусть сам выкручивается. Это будет ему уроком.",
                traitModifiers: {
                    [Trait.EMPATHY]: -250,
                    [Trait.CYNICISM]: 150,
                    [Trait.INTELLECT]: 100,
                    [Trait.EXTROVERSION]: -100,
                },
            },
            {
                id: "q_empathy_2_laugh",
                text: "Посмеюсь над ситуацией и предложу выпить, если он выживет.",
                traitModifiers: {
                    [Trait.EMPATHY]: 50,
                    [Trait.EXTROVERSION]: 150,
                    [Trait.IMPULSIVENESS]: 100,
                },
            },
        ],
    },
    // 3. IMPULSIVENESS PRIMARY (Reaction to Threat)
    {
        id: "q_impulsiveness_1",
        text: "Стражники оскорбляют тебя у ворот города.",
        options: [
            {
                id: "q_impulsiveness_1_fight",
                text: "Выхватываю меч. Никто не смеет говорить со мной в таком тоне!",
                traitModifiers: {
                    [Trait.IMPULSIVENESS]: 250,
                    [Trait.EXTROVERSION]: 100,
                    [Trait.INTELLECT]: -150,
                    [Trait.AMBITION]: 50,
                    [Trait.ORDER]: -150,
                },
            },
            {
                id: "q_impulsiveness_1_joke",
                text: "Отшучиваюсь острой колкостью, чтобы вся толпа смеялась над ними.",
                traitModifiers: {
                    [Trait.IMPULSIVENESS]: 100,
                    [Trait.INTELLECT]: 100,
                    [Trait.EXTROVERSION]: 150,
                    [Trait.ORDER]: -50,
                },
            },
            {
                id: "q_impulsiveness_1_ignore",
                text: "Молча прохожу мимо. Собаки лают, караван идет.",
                traitModifiers: {
                    [Trait.IMPULSIVENESS]: -200,
                    [Trait.CYNICISM]: 150,
                    [Trait.INTELLECT]: 150,
                    [Trait.EXTROVERSION]: -50,
                },
            },
            {
                id: "q_impulsiveness_1_bribe",
                text: "Кидаю им монету. Мне некогда тратить время на идиотов.",
                traitModifiers: {
                    [Trait.IMPULSIVENESS]: -150,
                    [Trait.AMBITION]: 150,
                    [Trait.CYNICISM]: 200,
                    [Trait.EMPATHY]: -50,
                    [Trait.ORDER]: 50,
                },
            },
        ],
    },
    // 4. IMPULSIVENESS PRIMARY (Planning vs Action)
    {
        id: "q_impulsiveness_2",
        text: "Нужно убить монстра в пещере. План?",
        options: [
            {
                id: "q_impulsiveness_2_charge",
                text: "Забегаю с криком и бью чем попало!",
                traitModifiers: {
                    [Trait.IMPULSIVENESS]: 200,
                    [Trait.INTELLECT]: -200,
                    [Trait.EXTROVERSION]: 100,
                    [Trait.AMBITION]: 50,
                    [Trait.ORDER]: -100,
                },
            },
            {
                id: "q_impulsiveness_2_prepare",
                text: "Изучу бестиарий, приготовлю эликсиры, смажу меч маслом.",
                traitModifiers: {
                    [Trait.IMPULSIVENESS]: -250,
                    [Trait.INTELLECT]: 250,
                    [Trait.CYNICISM]: 100,
                    [Trait.EXTROVERSION]: -50,
                    [Trait.ORDER]: 100,
                },
            },
            {
                id: "q_impulsiveness_2_trap",
                text: "Заманю его в ловушку снаружи. Зачем лезть в темноту?",
                traitModifiers: {
                    [Trait.IMPULSIVENESS]: -200,
                    [Trait.INTELLECT]: 200,
                    [Trait.CYNICISM]: 150,
                    [Trait.ORDER]: 50,
                },
            },
            {
                id: "q_impulsiveness_2_hire",
                text: "Найму кого-нибудь другого сделать грязную работу.",
                traitModifiers: {
                    [Trait.IMPULSIVENESS]: -150,
                    [Trait.AMBITION]: 200,
                    [Trait.CYNICISM]: 200,
                },
            },
        ],
    },
    // 5. AMBITION PRIMARY (Goal)
    {
        id: "q_ambition_1",
        text: "Чего ты хочешь от жизни больше всего?",
        options: [
            {
                id: "q_ambition_1_power",
                text: "Абсолютной власти. Чтобы мир дрожал при моем имени.",
                traitModifiers: {
                    [Trait.AMBITION]: 250,
                    [Trait.CYNICISM]: 250,
                    [Trait.EMPATHY]: -250,
                    [Trait.ORDER]: 150,
                },
            },
            {
                id: "q_ambition_1_wealth",
                text: "Богатства и комфорта. Виноградники в Туссенте звучат отлично.",
                traitModifiers: {
                    [Trait.AMBITION]: 100,
                    [Trait.IMPULSIVENESS]: 50,
                    [Trait.EXTROVERSION]: 50,
                },
            },
            {
                id: "q_ambition_1_peace",
                text: "Спокойной жизни вдали от политики и войн.",
                traitModifiers: {
                    [Trait.AMBITION]: -250,
                    [Trait.CYNICISM]: 50,
                    [Trait.EXTROVERSION]: -150,
                    [Trait.IMPULSIVENESS]: -50,
                },
            },
            {
                id: "q_ambition_1_adventure",
                text: "Вечной дороги и приключений. Скука — это смерть.",
                traitModifiers: {
                    [Trait.AMBITION]: -100,
                    [Trait.IMPULSIVENESS]: 200,
                    [Trait.EXTROVERSION]: 150,
                    [Trait.ORDER]: -150,
                },
            },
        ],
    },
    // 6. AMBITION PRIMARY (Means to an end)
    {
        id: "q_ambition_2",
        text: "Чтобы достичь своей цели, ты готов...",
        options: [
            {
                id: "q_ambition_2_anything",
                text: "На всё. Цель оправдывает средства, даже самые жестокие.",
                traitModifiers: {
                    [Trait.AMBITION]: 250,
                    [Trait.CYNICISM]: 150,
                    [Trait.EMPATHY]: -200,
                    [Trait.ORDER]: 100,
                },
            },
            {
                id: "q_ambition_2_work",
                text: "Трудиться и совершенствоваться, но не переступать через себя.",
                traitModifiers: {
                    [Trait.AMBITION]: 0,
                    [Trait.INTELLECT]: 100,
                    [Trait.EMPATHY]: 100,
                    [Trait.CYNICISM]: -50,
                    [Trait.ORDER]: 100,
                },
            },
            {
                id: "q_ambition_2_manipulate",
                text: "Использовать других людей и плести интриги.",
                traitModifiers: {
                    [Trait.AMBITION]: 200,
                    [Trait.INTELLECT]: 200,
                    [Trait.CYNICISM]: 150,
                },
            },
            {
                id: "q_ambition_2_risk",
                text: "Рискнуть жизнью, но не честью.",
                traitModifiers: {
                    [Trait.AMBITION]: -50,
                    [Trait.IMPULSIVENESS]: 150,
                    [Trait.EMPATHY]: 150,
                },
            },
        ],
    },
    // NEW QUESTION: ORDER PRIMARY
    {
        id: "q_order_1",
        text: "Как ты относишься к законам и правилам?",
        options: [
            {
                id: "q_order_1_absolute",
                text: "Закон суров, но это закон. Порядок необходим любой ценой.",
                traitModifiers: {
                    [Trait.ORDER]: 250,
                    [Trait.CYNICISM]: 100,
                    [Trait.IMPULSIVENESS]: -150,
                }
            },
            {
                id: "q_order_1_chaos",
                text: "Правила существуют, чтобы их нарушать. Свобода важнее всего!",
                traitModifiers: {
                    [Trait.ORDER]: -250,
                    [Trait.IMPULSIVENESS]: 200,
                    [Trait.EXTROVERSION]: 100,
                }
            },
            {
                id: "q_order_1_code",
                text: "У меня свой кодекс чести, и я следую только ему.",
                traitModifiers: {
                    [Trait.ORDER]: 50,
                    [Trait.AMBITION]: 50,
                    [Trait.CYNICISM]: 50,
                }
            },
            {
                id: "q_order_1_flexible",
                text: "Я действую по ситуации. Глупо слепо следовать правилам.",
                traitModifiers: {
                    [Trait.ORDER]: -100,
                    [Trait.INTELLECT]: 100,
                    [Trait.CYNICISM]: 150,
                }
            }
        ]
    },
    // 7. INTELLECT PRIMARY (Problem Solving)
    {
        id: "q_intellect_1",
        text: "Ты нашел древний магический артефакт. Что с ним делать?",
        options: [
            {
                id: "q_intellect_1_study",
                text: "Изучу его свойства, проведу эксперименты.",
                traitModifiers: {
                    [Trait.INTELLECT]: 250,
                    [Trait.AMBITION]: 100,
                    [Trait.IMPULSIVENESS]: -150,
                    [Trait.EXTROVERSION]: -50,
                    [Trait.MAGIC]: 150,
                },
            },
            {
                id: "q_intellect_1_sell",
                text: "Продам первому встречному магу. Деньги не пахнут.",
                traitModifiers: {
                    [Trait.INTELLECT]: -100,
                    [Trait.AMBITION]: 100,
                    [Trait.CYNICISM]: 200,
                    [Trait.MAGIC]: -100,
                },
            },
            {
                id: "q_intellect_1_use",
                text: "Попробую использовать! Вдруг я стану всемогущим?",
                traitModifiers: {
                    [Trait.INTELLECT]: -50,
                    [Trait.IMPULSIVENESS]: 250,
                    [Trait.AMBITION]: 200,
                    [Trait.MAGIC]: 250,
                },
            },
            {
                id: "q_intellect_1_destroy",
                text: "Уничтожу. Магия опасна и никому не приносит добра.",
                traitModifiers: {
                    [Trait.INTELLECT]: -50,
                    [Trait.CYNICISM]: 150,
                    [Trait.IMPULSIVENESS]: 50,
                    [Trait.AMBITION]: -100, // Destroying power is anti-ambition
                    [Trait.MAGIC]: -250,
                },
            },
        ],
    },
    // NEW QUESTION: MAGIC PRIMARY
    {
        id: "q_magic_1",
        text: "Каково твое отношение к магии?",
        options: [
            {
                id: "q_magic_1_master",
                text: "Это искусство, наука и власть. Я стремлюсь постичь все её тайны.",
                traitModifiers: {
                    [Trait.MAGIC]: 300,
                    [Trait.INTELLECT]: 150,
                    [Trait.AMBITION]: 100,
                }
            },
            {
                id: "q_magic_1_tool",
                text: "Полезный инструмент, как меч или молот. Главное уметь им пользоваться.",
                traitModifiers: {
                    [Trait.MAGIC]: 100,
                    [Trait.CYNICISM]: 50,
                    [Trait.INTELLECT]: 50,
                }
            },
            {
                id: "q_magic_1_danger",
                text: "Магия — это Хаос. Она опасна, непредсказуема и лучше держаться от неё подальше.",
                traitModifiers: {
                    [Trait.MAGIC]: -200,
                    [Trait.ORDER]: 50,
                    [Trait.CYNICISM]: 100,
                }
            },
            {
                id: "q_magic_1_unnatural",
                text: "Мерзость. Чародеи играют с силами, которые не контролируют.",
                traitModifiers: {
                    [Trait.MAGIC]: -300,
                    [Trait.ORDER]: 150,
                    [Trait.CYNICISM]: 200,
                    [Trait.EMPATHY]: -50,
                }
            }
        ]
    },
    // 8. INTELLECT PRIMARY (Curiosity)
    {
        id: "q_intellect_2",
        text: "Книги — это...",
        options: [
            {
                id: "q_intellect_2_source",
                text: "Источник знаний и силы. Я читаю всё, что попадается под руку.",
                traitModifiers: {
                    [Trait.INTELLECT]: 200,
                    [Trait.EXTROVERSION]: -50,
                    [Trait.AMBITION]: 50,
                },
            },
            {
                id: "q_intellect_2_kindling",
                text: "Хорошая растопка для костра в холодную ночь.",
                traitModifiers: {
                    [Trait.INTELLECT]: -300,
                    [Trait.IMPULSIVENESS]: 100,
                    [Trait.CYNICISM]: 100,
                },
            },
            {
                id: "q_intellect_2_tales",
                text: "Сборники легенд и баллад. Люблю красивые истории.",
                traitModifiers: {
                    [Trait.INTELLECT]: 50,
                    [Trait.EXTROVERSION]: 50,
                    [Trait.EMPATHY]: 100,
                },
            },
            {
                id: "q_intellect_2_boring",
                text: "Скука смертная. Жизнь учит лучше любых книг.",
                traitModifiers: {
                    [Trait.INTELLECT]: -100,
                    [Trait.EXTROVERSION]: 100,
                    [Trait.IMPULSIVENESS]: 50,
                },
            },
        ],
    },
    // 9. CYNICISM PRIMARY (Worldview)
    {
        id: "q_cynicism_1",
        text: "Что ты думаешь о 'Предназначении'?",
        options: [
            {
                id: "q_cynicism_1_lie",
                text: "Сказка для дураков. Мы сами строим свою судьбу.",
                traitModifiers: {
                    [Trait.CYNICISM]: 200,
                    [Trait.INTELLECT]: 100,
                    [Trait.EMPATHY]: -50,
                    [Trait.AMBITION]: 100, // Self-made man
                },
            },
            {
                id: "q_cynicism_1_belief",
                text: "Оно существует и связывает нас всех. От него не уйти.",
                traitModifiers: {
                    [Trait.CYNICISM]: -200,
                    [Trait.EMPATHY]: 100,
                    [Trait.INTELLECT]: 50,
                },
            },
            {
                id: "q_cynicism_1_excuse",
                text: "Удобное оправдание, чтобы не нести ответственность.",
                traitModifiers: {
                    [Trait.CYNICISM]: 150,
                    [Trait.INTELLECT]: 150,
                    [Trait.AMBITION]: 50,
                },
            },
            {
                id: "q_cynicism_1_maybe",
                text: "Может есть, может нет. Главное — чтобы платили золотом.",
                traitModifiers: {
                    [Trait.CYNICISM]: 100,
                    [Trait.AMBITION]: 100,
                    [Trait.INTELLECT]: -50,
                },
            },
        ],
    },
    // 10. CYNICISM PRIMARY (Trust)
    {
        id: "q_cynicism_2",
        text: "Можно ли доверять людям?",
        options: [
            {
                id: "q_cynicism_2_no",
                text: "Никому и никогда. В любой момент предадут.",
                traitModifiers: {
                    [Trait.CYNICISM]: 250,
                    [Trait.EXTROVERSION]: -200,
                    [Trait.EMPATHY]: -200,
                },
            },
            {
                id: "q_cynicism_2_yes",
                text: "Конечно! В большинстве своем люди добры.",
                traitModifiers: {
                    [Trait.CYNICISM]: -250,
                    [Trait.EXTROVERSION]: 150,
                    [Trait.EMPATHY]: 200,
                },
            },
            {
                id: "q_cynicism_2_close",
                text: "Только близкому кругу проверенных друзей.",
                traitModifiers: {
                    [Trait.CYNICISM]: 0,
                    [Trait.EXTROVERSION]: 50,
                    [Trait.EMPATHY]: 100,
                },
            },
            {
                id: "q_cynicism_2_check",
                text: "Доверяй, но проверяй. И держи меч под рукой.",
                traitModifiers: {
                    [Trait.CYNICISM]: 100,
                    [Trait.INTELLECT]: 100,
                    [Trait.IMPULSIVENESS]: -50,
                },
            },
        ],
    },
    // 11. EXTROVERSION PRIMARY (Socializing)
    {
        id: "q_extroversion_1",
        text: "Ты заходишь в таверну. Твои действия?",
        options: [
            {
                id: "q_extroversion_1_party",
                text: "Заказываю выпивку на всех! Будем гулять до утра!",
                traitModifiers: {
                    [Trait.EXTROVERSION]: 250,
                    [Trait.IMPULSIVENESS]: 200,
                    [Trait.AMBITION]: -50,
                    [Trait.INTELLECT]: -50,
                },
            },
            {
                id: "q_extroversion_1_corner",
                text: "Сажусь в темный угол и молча наблюдаю за залом.",
                traitModifiers: {
                    [Trait.EXTROVERSION]: -250,
                    [Trait.CYNICISM]: 150,
                    [Trait.INTELLECT]: 100,
                    [Trait.AMBITION]: -50,
                },
            },
            {
                id: "q_extroversion_1_gwent",
                text: "Ищу, с кем перекинуться в Гвинт.",
                traitModifiers: {
                    [Trait.EXTROVERSION]: 50,
                    [Trait.INTELLECT]: 100,
                    [Trait.CYNICISM]: -50,
                },
            },
            {
                id: "q_extroversion_1_info",
                text: "Подслушиваю разговоры, чтобы узнать свежие сплетни и новости.",
                traitModifiers: {
                    [Trait.EXTROVERSION]: -50,
                    [Trait.INTELLECT]: 150,
                    [Trait.CYNICISM]: 50,
                },
            },
        ],
    },
    // 12. EXTROVERSION PRIMARY (Leadership)
    {
        id: "q_extroversion_2",
        text: "Тебе предлагают возглавить отряд. Ты...",
        options: [
            {
                id: "q_extroversion_2_lead",
                text: "Соглашаюсь! Я прирожденный лидер.",
                traitModifiers: {
                    [Trait.EXTROVERSION]: 150,
                    [Trait.AMBITION]: 150,
                    [Trait.IMPULSIVENESS]: 50,
                },
            },
            {
                id: "q_extroversion_2_refuse",
                text: "Отказываюсь. Я волк-одиночка, мне никто не нужен.",
                traitModifiers: {
                    [Trait.EXTROVERSION]: -250,
                    [Trait.CYNICISM]: 100,
                    [Trait.AMBITION]: -100,
                },
            },
            {
                id: "q_extroversion_2_maybe",
                text: "Подумаю, если это принесет мне выгоду или славу.",
                traitModifiers: {
                    [Trait.EXTROVERSION]: 50,
                    [Trait.AMBITION]: 100,
                    [Trait.CYNICISM]: 100,
                },
            },
            {
                id: "q_extroversion_2_share",
                text: "Предложу разделить ответственность с кем-то более опытным.",
                traitModifiers: {
                    [Trait.EXTROVERSION]: 0,
                    [Trait.INTELLECT]: 100,
                    [Trait.EMPATHY]: 50,
                },
            },
        ],
    },
];
