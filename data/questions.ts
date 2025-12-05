
import { Question, Trait } from "../types";

export const QUESTIONS_DATA: Question[] = [
    {
        id: "q1",
        text: "Твой идеальный пятничный вечер?",
        options: [
            {
                id: "q1_a",
                text: "Медитация и чистка меча.",
                traitModifiers: {
                    [Trait.EXTROVERSION]: -125,
                    [Trait.IMPULSIVENESS]: -125,
                    [Trait.CYNICISM]: 50,
                    [Trait.INTELLECT]: 75,
                }
            },
            {
                id: "q1_b",
                text: "Роскошный ужин и ванна с лепестками.",
                traitModifiers: {
                    [Trait.AMBITION]: 75,
                    [Trait.EXTROVERSION]: -50,
                    [Trait.EMPATHY]: 25,
                    [Trait.IMPULSIVENESS]: 50,
                }
            },
            {
                id: "q1_c",
                text: "Пьянка в корчме и песни до утра!",
                traitModifiers: {
                    [Trait.EXTROVERSION]: 250,
                    [Trait.IMPULSIVENESS]: 200,
                    [Trait.INTELLECT]: -75,
                    [Trait.CYNICISM]: -100,
                }
            },
            {
                id: "q1_d",
                text: "Пожевать овес на крыше сарая.",
                traitModifiers: {
                    [Trait.INTELLECT]: 250,
                    [Trait.AMBITION]: -250,
                    [Trait.IMPULSIVENESS]: 125,
                    [Trait.CYNICISM]: 125,
                }
            },
        ]
    },
    {
        id: "q2",
        text: "Как ты реагируешь на смертельную опасность?",
        options: [
            {
                id: "q2_a",
                text: "Телепортируюсь, я особенный!",
                traitModifiers: {
                    [Trait.INTELLECT]: 125,
                    [Trait.AMBITION]: 50,
                    [Trait.IMPULSIVENESS]: 75,
                    [Trait.CYNICISM]: -25,
                }
            },
            {
                id: "q2_b",
                text: "Пытаюсь договориться, а потом сжигаю всех.",
                traitModifiers: {
                    [Trait.INTELLECT]: 100,
                    [Trait.EMPATHY]: -125,
                    [Trait.AMBITION]: 125,
                    [Trait.CYNICISM]: 75,
                }
            },
            {
                id: "q2_c",
                text: "Ворчу, что раньше монстры были слабее.",
                traitModifiers: {
                    [Trait.CYNICISM]: 200, // Scaled 80 * 2.5
                    [Trait.EXTROVERSION]: -75,
                    [Trait.IMPULSIVENESS]: -100,
                    [Trait.INTELLECT]: 50,
                    [Trait.EMPATHY]: 100 // Added positive empathy (Grumbling but caring)
                }
            },
            {
                id: "q2_d",
                text: "Достаю топор и зову парней!",
                traitModifiers: {
                    [Trait.EXTROVERSION]: 175,
                    [Trait.IMPULSIVENESS]: 150,
                    [Trait.INTELLECT]: -50,
                    [Trait.AMBITION]: 25,
                }
            },
        ]
    },
    {
        id: "q3",
        text: "Твое отношение к выпивке?",
        options: [
            {
                id: "q3_a",
                text: "Я не пью. Только мандрагоровый дистиллят.",
                traitModifiers: {
                    [Trait.INTELLECT]: 150,
                    [Trait.CYNICISM]: 50,
                    [Trait.IMPULSIVENESS]: -100,
                    [Trait.AMBITION]: 25,
                }
            },
            {
                id: "q3_b",
                text: "Наливай, хер моржовый!",
                traitModifiers: {
                    [Trait.IMPULSIVENESS]: 225,
                    [Trait.EXTROVERSION]: 200,
                    [Trait.AMBITION]: -75,
                    [Trait.INTELLECT]: -50,
                }
            },
            {
                id: "q3_c",
                text: "Пью тихо, спокойно, с козой.",
                traitModifiers: {
                    [Trait.EXTROVERSION]: -200,
                    [Trait.CYNICISM]: 100,
                    [Trait.IMPULSIVENESS]: -50,
                    [Trait.EMPATHY]: 75,
                }
            },
            {
                id: "q3_d",
                text: "Предпочитаю шампанское в ванне.",
                traitModifiers: {
                    [Trait.AMBITION]: 100,
                    [Trait.EXTROVERSION]: -25,
                    [Trait.IMPULSIVENESS]: 50,
                    [Trait.CYNICISM]: 50,
                }
            },
        ]
    },
    {
        id: "q4",
        text: "Выбери свою политическую позицию.",
        options: [
            {
                id: "q4_a",
                text: "Я знаю все секреты и правлю из тени.",
                traitModifiers: {
                    [Trait.AMBITION]: 225,
                    [Trait.INTELLECT]: 200,
                    [Trait.EXTROVERSION]: -100,
                    [Trait.CYNICISM]: 150,
                }
            },
            {
                id: "q4_b",
                text: "Захватить Север (ради их же блага).",
                traitModifiers: {
                    [Trait.AMBITION]: 250,
                    [Trait.EMPATHY]: -150,
                    [Trait.INTELLECT]: 125,
                    [Trait.EXTROVERSION]: 50,
                }
            },
            {
                id: "q4_c",
                text: "Свободная Темерия или смерть!",
                traitModifiers: {
                    [Trait.AMBITION]: 125,
                    [Trait.IMPULSIVENESS]: 150,
                    [Trait.CYNICISM]: 75,
                    [Trait.EMPATHY]: 25,
                }
            },
            {
                id: "q4_d",
                text: "Смерть Dh'oine, да здравствуют белки!",
                traitModifiers: {
                    [Trait.CYNICISM]: 200,
                    [Trait.EMPATHY]: -100,
                    [Trait.IMPULSIVENESS]: 175,
                    [Trait.AMBITION]: 100,
                }
            },
        ]
    },
    {
        id: "q5",
        text: "Какая сила тебе ближе?",
        options: [
            {
                id: "q5_a",
                text: "Управление временем и душами.",
                traitModifiers: {
                    [Trait.AMBITION]: 200,
                    [Trait.INTELLECT]: 225,
                    [Trait.EMPATHY]: -175,
                    [Trait.CYNICISM]: 150,
                }
            },
            {
                id: "q5_b",
                text: "Медицина и человечность.",
                traitModifiers: {
                    [Trait.EMPATHY]: 250,
                    [Trait.INTELLECT]: 125,
                    [Trait.CYNICISM]: -125,
                    [Trait.AMBITION]: -50,
                }
            },
            {
                id: "q5_c",
                text: "Полиморфия и шпионаж.",
                traitModifiers: {
                    [Trait.INTELLECT]: 150,
                    [Trait.CYNICISM]: 125,
                    [Trait.EXTROVERSION]: -75,
                    [Trait.AMBITION]: 100,
                }
            },
            {
                id: "q5_d",
                text: "Сжигать врагов в пепел ради амбиций.",
                traitModifiers: {
                    [Trait.AMBITION]: 250,
                    [Trait.EMPATHY]: -250,
                    [Trait.IMPULSIVENESS]: 125,
                    [Trait.CYNICISM]: 125,
                }
            },
        ]
    },
    {
        id: "q6",
        text: "Что тебя больше всего бесит?",
        options: [
            {
                id: "q6_a",
                text: "Когда меня называют Нильфгаардцем!",
                traitModifiers: {
                    [Trait.IMPULSIVENESS]: 100,
                    [Trait.CYNICISM]: 75,
                    [Trait.AMBITION]: 50,
                    [Trait.EXTROVERSION]: -50,
                }
            },
            {
                id: "q6_b",
                text: "Нытики и болтуны в лесу.",
                traitModifiers: {
                    [Trait.CYNICISM]: 175,
                    [Trait.EXTROVERSION]: -125,
                    [Trait.IMPULSIVENESS]: 75,
                    [Trait.EMPATHY]: -50,
                }
            },
            {
                id: "q6_c",
                text: "Когда тетушка не наливает.",
                traitModifiers: {
                    [Trait.EXTROVERSION]: 150,
                    [Trait.IMPULSIVENESS]: 125,
                    [Trait.AMBITION]: -100,
                    [Trait.INTELLECT]: -75,
                }
            },
            {
                id: "q6_d",
                text: "Когда ведьмаки не показывают стиль крысы.",
                traitModifiers: {
                    [Trait.CYNICISM]: 225,
                    [Trait.EMPATHY]: 50, // Was -200. Now positive (Professionalism != Cruelty)
                    [Trait.AMBITION]: 100,
                    [Trait.INTELLECT]: 75
                }
            },
        ]
    },
    {
        id: "q7",
        text: "Выбери свою роль в магической ложе.",
        options: [
            {
                id: "q7_a",
                text: "Имперская чародейка, люблю книги.",
                traitModifiers: {
                    [Trait.INTELLECT]: 175,
                    [Trait.AMBITION]: 100,
                    [Trait.CYNICISM]: 50,
                    [Trait.EXTROVERSION]: -50,
                }
            },
            {
                id: "q7_b",
                text: "Ректор школы, люблю своих учениц.",
                traitModifiers: {
                    [Trait.EMPATHY]: 150,
                    [Trait.AMBITION]: 75,
                    [Trait.INTELLECT]: 125,
                    [Trait.IMPULSIVENESS]: -75,
                }
            },
            {
                id: "q7_c",
                text: "Отшельница, люблю астрологию.",
                traitModifiers: {
                    [Trait.EXTROVERSION]: -225,
                    [Trait.INTELLECT]: 200,
                    [Trait.CYNICISM]: 100,
                    [Trait.AMBITION]: 50,
                }
            },
            {
                id: "q7_d",
                text: "Строгая наставница, люблю порядок.",
                traitModifiers: {
                    [Trait.IMPULSIVENESS]: -200,
                    [Trait.INTELLECT]: 150,
                    [Trait.AMBITION]: 125,
                    [Trait.EMPATHY]: -50,
                }
            },
        ]
    },
    {
        id: "q8",
        text: "Твой стиль жизни?",
        options: [
            {
                id: "q8_a",
                text: "Я меняю маски каждый день.",
                traitModifiers: {
                    [Trait.CYNICISM]: 75,
                    [Trait.INTELLECT]: 100,
                    [Trait.EXTROVERSION]: 50,
                    [Trait.AMBITION]: 25,
                }
            },
            {
                id: "q8_b",
                text: "Я пою баллады о любви.",
                traitModifiers: {
                    [Trait.EXTROVERSION]: 175,
                    [Trait.EMPATHY]: 125,
                    [Trait.CYNICISM]: -100,
                    [Trait.IMPULSIVENESS]: 100,
                }
            },
            {
                id: "q8_c",
                text: "Я убиваю тех, кто предал мою любовь.",
                traitModifiers: {
                    [Trait.IMPULSIVENESS]: 225,
                    [Trait.CYNICISM]: 150,
                    [Trait.EMPATHY]: -75,
                    [Trait.AMBITION]: 75,
                }
            },
            {
                id: "q8_d",
                text: "Я манипулирую рыцарями ради мести.",
                traitModifiers: {
                    [Trait.INTELLECT]: 175,
                    [Trait.CYNICISM]: 200,
                    [Trait.AMBITION]: 125,
                    [Trait.EMPATHY]: -100,
                }
            },
        ]
    },
    {
        id: "q9",
        text: "Как ты проводишь досуг?",
        options: [
            {
                id: "q9_a",
                text: "Правлю винным краем и дегустирую.",
                traitModifiers: {
                    [Trait.AMBITION]: 150,
                    [Trait.IMPULSIVENESS]: 100,
                    [Trait.EXTROVERSION]: 75,
                    [Trait.INTELLECT]: 50,
                }
            },
            {
                id: "q9_b",
                text: "Ищу острых ощущений, ведь я бессмертен.",
                traitModifiers: {
                    [Trait.IMPULSIVENESS]: 250,
                    [Trait.CYNICISM]: 125,
                    [Trait.AMBITION]: 50,
                    [Trait.EXTROVERSION]: 100,
                }
            },
            {
                id: "q9_c",
                text: "Тусуюсь на свадьбах (будучи призраком).",
                traitModifiers: {
                    [Trait.EXTROVERSION]: 250,
                    [Trait.IMPULSIVENESS]: 225,
                    [Trait.AMBITION]: -125,
                    [Trait.INTELLECT]: -100,
                }
            },
            {
                id: "q9_d",
                text: "Ору, пирую и дерусь на кулаках!",
                traitModifiers: {
                    [Trait.EXTROVERSION]: 225,
                    [Trait.IMPULSIVENESS]: 200,
                    [Trait.INTELLECT]: -125,
                    [Trait.AMBITION]: 75,
                }
            },
        ]
    },
    {
        id: "q10",
        text: "Как получить корону?",
        options: [
            {
                id: "q10_a",
                text: "Через мудрость и заботу о народе.",
                traitModifiers: {
                    [Trait.INTELLECT]: 150,
                    [Trait.EMPATHY]: 200,
                    [Trait.AMBITION]: 100,
                    [Trait.IMPULSIVENESS]: -100,
                }
            },
            {
                id: "q10_b",
                text: "Убить ледяного великана!",
                traitModifiers: {
                    [Trait.AMBITION]: 175,
                    [Trait.IMPULSIVENESS]: 150,
                    [Trait.INTELLECT]: -50,
                    [Trait.EXTROVERSION]: 75,
                }
            },
            {
                id: "q10_c",
                text: "Слушать духов леса и давать советы.",
                traitModifiers: {
                    [Trait.INTELLECT]: 125,
                    [Trait.EMPATHY]: 100,
                    [Trait.AMBITION]: -75,
                    [Trait.CYNICISM]: -50,
                }
            },
            {
                id: "q10_d",
                text: "Ослепить врагов и играть в шахматы.",
                traitModifiers: {
                    [Trait.AMBITION]: 250,
                    [Trait.CYNICISM]: 225,
                    [Trait.INTELLECT]: 200,
                    [Trait.EMPATHY]: -200,
                }
            },
        ]
    },
    {
        id: "q11",
        text: "Твое любимое оружие/инструмент?",
        options: [
            {
                id: "q11_a",
                text: "Харизма и незаконнорожденные дети.",
                traitModifiers: {
                    [Trait.EXTROVERSION]: 200,
                    [Trait.IMPULSIVENESS]: 150,
                    [Trait.AMBITION]: 100,
                    [Trait.CYNICISM]: 50,
                }
            },
            {
                id: "q11_b",
                text: "Огромные мускулы и яды.",
                traitModifiers: {
                    [Trait.INTELLECT]: 50,
                    [Trait.AMBITION]: 125,
                    [Trait.CYNICISM]: 100,
                    [Trait.IMPULSIVENESS]: 75,
                }
            },
            {
                id: "q11_c",
                text: "Арбалет и глубокое декольте.",
                traitModifiers: {
                    [Trait.EXTROVERSION]: 125,
                    [Trait.IMPULSIVENESS]: 125,
                    [Trait.AMBITION]: 75,
                    [Trait.INTELLECT]: 50,
                }
            },
            {
                id: "q11_d",
                text: "Отборный мат и монокль.",
                traitModifiers: {
                    [Trait.CYNICISM]: 200,
                    [Trait.INTELLECT]: 150,
                    [Trait.EXTROVERSION]: 100,
                    [Trait.EMPATHY]: 100 // Thaler is actually a patriot/good guy
                }
            },
        ]
    },
    {
        id: "q12",
        text: "Кто ты в душе?",
        options: [
            {
                id: "q12_a",
                text: "Верный друг, который всегда застрянет в заборе ради тебя.",
                traitModifiers: {
                    [Trait.EMPATHY]: 225,
                    [Trait.AMBITION]: -100,
                    [Trait.CYNICISM]: -125,
                    [Trait.IMPULSIVENESS]: 75,
                }
            },
            {
                id: "q12_b",
                text: "Душа компании: могу спеть, могу выпить, могу вселиться в ведьмака.",
                traitModifiers: {
                    [Trait.EXTROVERSION]: 250,
                    [Trait.IMPULSIVENESS]: 175,
                    [Trait.AMBITION]: 50,
                    [Trait.CYNICISM]: -75,
                }
            },
            {
                id: "q12_c",
                text: "Я знаю, как лучше, и у меня есть список тех, кто не согласен...",
                traitModifiers: {
                    [Trait.AMBITION]: 200,
                    [Trait.INTELLECT]: 175,
                    [Trait.CYNICISM]: 150,
                    [Trait.EMPATHY]: -100,
                }
            },
            {
                id: "q12_d",
                text: "В глубине души я — котик. Просто очень большой, клыкастый и люблю играть с едой.",
                traitModifiers: {
                    [Trait.IMPULSIVENESS]: 150,
                    [Trait.EMPATHY]: -150,
                    [Trait.AMBITION]: 100,
                    [Trait.CYNICISM]: 100,
                }
            },
        ]
    },
    {
        id: "q13",
        text: "Философия конца жизни?",
        options: [
            {
                id: "q13_a",
                text: "Месть — это блюдо, которое подают холодным.",
                traitModifiers: {
                    [Trait.CYNICISM]: 175,
                    [Trait.INTELLECT]: 125,
                    [Trait.EMPATHY]: -100,
                    [Trait.AMBITION]: 75,
                }
            },
            {
                id: "q13_b",
                text: "Лучше выброситься из окна, чем сдаться.",
                traitModifiers: {
                    [Trait.AMBITION]: 150,
                    [Trait.IMPULSIVENESS]: 125,
                    [Trait.CYNICISM]: 50,
                    [Trait.INTELLECT]: -25,
                }
            },
            {
                id: "q13_c",
                text: "АААААА!!! (Разрушить всё магией).",
                traitModifiers: {
                    [Trait.IMPULSIVENESS]: 250,
                    [Trait.INTELLECT]: -50,
                    [Trait.EMPATHY]: -75,
                    [Trait.CYNICISM]: 75,
                }
            },
            {
                id: "q13_d",
                text: "Умереть в бою с друзьями, защищая дракона.",
                traitModifiers: {
                    [Trait.EMPATHY]: 200,
                    [Trait.EXTROVERSION]: 100,
                    [Trait.AMBITION]: -50,
                    [Trait.IMPULSIVENESS]: 75,
                }
            },
        ]
    },
];
