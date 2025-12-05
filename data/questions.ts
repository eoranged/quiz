import { CharacterId, Question } from "../types";

// Map questions to cover 52 characters. 
// We need ~13 questions with 4 options each = 52 outcomes.
export const QUESTIONS_DATA: Question[] = [
    {
        id: "q1",
        text: "Твой идеальный пятничный вечер?",
        options: [
            {
                id: "q1_a",
                text: "Медитация и чистка меча.",
                weights: {
                    [CharacterId.GERALT]: 89,
                    [CharacterId.ESKEL]: 55,
                    [CharacterId.VESEMIR]: 34,
                    [CharacterId.LETHO]: 21,
                    [CharacterId.LAMBERT]: 13,
                    [CharacterId.BONHART]: 8,
                    [CharacterId.IORVETH]: 5,
                    [CharacterId.ROCHE]: 3,
                    [CharacterId.CIRI]: 2,
                    [CharacterId.CAHIR]: 5,
                    [CharacterId.MILVA]: 3,
                    [CharacterId.MOUSESACK]: 8,
                    [CharacterId.RADOVID]: 5,
                    [CharacterId.EREDIN]: 3
                }
            },
            {
                id: "q1_b",
                text: "Роскошный ужин и ванна с лепестками.",
                weights: {
                    [CharacterId.YENNEFER]: 89,
                    [CharacterId.KEIRA]: 55,
                    [CharacterId.ANNA_HENRIETTA]: 34,
                    [CharacterId.SYANNA]: 21,
                    [CharacterId.FRINGILLA]: 13,
                    [CharacterId.MARGARITA]: 8,
                    [CharacterId.SHEALA]: 8,
                    [CharacterId.TRISS]: 3,
                    [CharacterId.TISSAIA]: 13,
                    [CharacterId.FOLTEST]: 8,
                    [CharacterId.PAVETTA]: 5,
                    [CharacterId.DUDU]: 3,
                    [CharacterId.CERYS]: 2,
                    [CharacterId.DETTLAFF]: 1
                }
            },
            {
                id: "q1_c",
                text: "Пьянка в корчме и песни до утра!",
                weights: {
                    [CharacterId.JASKIER]: 89,
                    [CharacterId.PRISCILLA]: 55,
                    [CharacterId.VLODIMIR]: 34,
                    [CharacterId.OLGIERD]: 21,
                    [CharacterId.ANGOULEME]: 13,
                    [CharacterId.ZOLTAN]: 8,
                    [CharacterId.YARPEN]: 5,
                    [CharacterId.CRACH]: 3,
                    [CharacterId.HJALMAR]: 2,
                    [CharacterId.SHANI]: 13,
                    [CharacterId.CERYS]: 8,
                    [CharacterId.VES]: 5,
                    [CharacterId.REGIS]: 3,
                    [CharacterId.CALANTHE]: 21, // Boosted
                    [CharacterId.UMA]: 13, // Boosted
                    [CharacterId.ROACH]: 8 // Boosted
                }
            },
            {
                id: "q1_d",
                text: "Пожевать овес на крыше сарая.",
                weights: {
                    [CharacterId.ROACH]: 89,
                    [CharacterId.UMA]: 55, // Boosted
                    [CharacterId.DUDU]: 13,
                    [CharacterId.PAVETTA]: 5,
                    [CharacterId.ESKEL]: 8,
                    [CharacterId.LAMBERT]: 5
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
                weights: {
                    [CharacterId.CIRI]: 89,
                    [CharacterId.YENNEFER]: 55,
                    [CharacterId.TRISS]: 34,
                    [CharacterId.KEIRA]: 21,
                    [CharacterId.GAUNTER]: 13,
                    [CharacterId.AVALLACH]: 8,
                    [CharacterId.PHILIPPA]: 5,
                    [CharacterId.VILGEFORTZ]: 13,
                    [CharacterId.SYANNA]: 8,
                    [CharacterId.ROACH]: 2,
                    [CharacterId.PRISCILLA]: 3,
                    [CharacterId.DUDU]: 1,
                    [CharacterId.TISSAIA]: 34,
                    [CharacterId.SHEALA]: 21,
                    [CharacterId.MOUSESACK]: 13,
                    [CharacterId.PAVETTA]: 8
                }
            },
            {
                id: "q2_b",
                text: "Пытаюсь договориться, а потом сжигаю всех.",
                weights: {
                    [CharacterId.TRISS]: 89,
                    [CharacterId.FRINGILLA]: 55,
                    [CharacterId.MARGARITA]: 34,
                    [CharacterId.SHEALA]: 21,
                    [CharacterId.SHANI]: 13,
                    [CharacterId.DIJKSTRA]: 8,
                    [CharacterId.EMHYR]: 5,
                    [CharacterId.RADOVID]: 21,
                    [CharacterId.FOLTEST]: 13,
                    [CharacterId.RENFRI]: 8,
                    [CharacterId.ANNA_HENRIETTA]: 3
                }
            },
            {
                id: "q2_c",
                text: "Ворчу, что раньше монстры были слабее.",
                weights: {
                    [CharacterId.VESEMIR]: 89,
                    [CharacterId.GERALT]: 55,
                    [CharacterId.THALER]: 34,
                    [CharacterId.DIJKSTRA]: 21,
                    [CharacterId.REGIS]: 13,
                    [CharacterId.BONHART]: 8,
                    [CharacterId.MOUSESACK]: 34, // Boosted
                    [CharacterId.ESKEL]: 21,
                    [CharacterId.LAMBERT]: 34,
                    [CharacterId.ROACH]: 21, // Boosted
                    [CharacterId.UMA]: 13 // Boosted
                }
            },
            {
                id: "q2_d",
                text: "Достаю топор и зову парней!",
                weights: {
                    [CharacterId.ZOLTAN]: 89,
                    [CharacterId.YARPEN]: 55,
                    [CharacterId.HJALMAR]: 34,
                    [CharacterId.CRACH]: 21,
                    [CharacterId.ROCHE]: 13,
                    [CharacterId.IORVETH]: 21, // Boosted
                    [CharacterId.LETHO]: 13, // Boosted
                    [CharacterId.MILVA]: 21,
                    [CharacterId.VES]: 13,
                    [CharacterId.CALANTHE]: 34, // Boosted
                    [CharacterId.ANGOULEME]: 21 // Boosted
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
                weights: {
                    [CharacterId.REGIS]: 89,
                    [CharacterId.GAUNTER]: 55,
                    [CharacterId.AVALLACH]: 34,
                    [CharacterId.VILGEFORTZ]: 21,
                    [CharacterId.EMHYR]: 13,
                    [CharacterId.SHANI]: 5,
                    [CharacterId.CALANTHE]: 5,
                    [CharacterId.PAVETTA]: 21, // Boosted
                    [CharacterId.BONHART]: 2,
                    [CharacterId.SHEALA]: 55, // Boosted
                    [CharacterId.TISSAIA]: 34, // Boosted
                    [CharacterId.MARGARITA]: 89 // Boosted
                }
            },
            {
                id: "q3_b",
                text: "Наливай, хер моржовый!",
                weights: {
                    [CharacterId.LAMBERT]: 89,
                    [CharacterId.OLGIERD]: 34, // Decreased
                    [CharacterId.VLODIMIR]: 34,
                    [CharacterId.ANGOULEME]: 89,
                    [CharacterId.ZOLTAN]: 13,
                    [CharacterId.YARPEN]: 8,
                    [CharacterId.CRACH]: 13,
                    [CharacterId.JASKIER]: 34,
                    [CharacterId.PRISCILLA]: 55,
                    [CharacterId.HJALMAR]: 21, // Boosted
                    [CharacterId.VES]: 5,
                    [CharacterId.IMLERITH]: 3
                }
            },
            {
                id: "q3_c",
                text: "Пью тихо, спокойно, с козой.",
                weights: {
                    [CharacterId.ESKEL]: 89,
                    [CharacterId.VESEMIR]: 55,
                    [CharacterId.GERALT]: 34,
                    [CharacterId.ROCHE]: 21,
                    [CharacterId.IORVETH]: 13,
                    [CharacterId.LETHO]: 8,
                    [CharacterId.CAHIR]: 13,
                    [CharacterId.UMA]: 21, // Boosted
                    [CharacterId.ROACH]: 3,
                    [CharacterId.MILVA]: 2,
                    [CharacterId.CRACH]: 21,
                    [CharacterId.CERYS]: 34,
                    [CharacterId.MOUSESACK]: 13,
                    [CharacterId.CALANTHE]: 55 // Boosted
                }
            },
            {
                id: "q3_d",
                text: "Предпочитаю шампанское в ванне.",
                weights: {
                    [CharacterId.KEIRA]: 89,
                    [CharacterId.YENNEFER]: 55,
                    [CharacterId.ANNA_HENRIETTA]: 34,
                    [CharacterId.SYANNA]: 21,
                    [CharacterId.TRISS]: 13,
                    [CharacterId.FRINGILLA]: 8,
                    [CharacterId.MARGARITA]: 34
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
                weights: {
                    [CharacterId.SHEALA]: 89,
                    [CharacterId.DIJKSTRA]: 55,
                    [CharacterId.PHILIPPA]: 34,
                    [CharacterId.TISSAIA]: 21,
                    [CharacterId.THALER]: 34,
                    [CharacterId.GAUNTER]: 21,
                    [CharacterId.AVALLACH]: 13,
                    [CharacterId.VILGEFORTZ]: 34, // Boosted
                    [CharacterId.SHANI]: 5
                }
            },
            {
                id: "q4_b",
                text: "Захватить Север (ради их же блага).",
                weights: {
                    [CharacterId.EMHYR]: 89,
                    [CharacterId.CAHIR]: 55,
                    [CharacterId.FRINGILLA]: 21,
                    [CharacterId.LETHO]: 55, // Boosted
                    [CharacterId.EREDIN]: 55, // Boosted
                    [CharacterId.RADOVID]: 34,
                    [CharacterId.VILGEFORTZ]: 21
                }
            },
            {
                id: "q4_c",
                text: "Свободная Темерия или смерть!",
                weights: {
                    [CharacterId.ROCHE]: 89,
                    [CharacterId.VES]: 55,
                    [CharacterId.FOLTEST]: 34,
                    [CharacterId.THALER]: 21,
                    [CharacterId.CERYS]: 8,
                    [CharacterId.CRACH]: 5,
                    [CharacterId.PRISCILLA]: 13,
                    [CharacterId.ANGOULEME]: 8
                }
            },
            {
                id: "q4_d",
                text: "Смерть Dh'oine, да здравствуют белки!",
                weights: {
                    [CharacterId.IORVETH]: 89,
                    [CharacterId.MILVA]: 55,
                    [CharacterId.EREDIN]: 34,
                    [CharacterId.IMLERITH]: 21,
                    [CharacterId.AVALLACH]: 13,
                    [CharacterId.DETTLAFF]: 8,
                    [CharacterId.YARPEN]: 13,
                    [CharacterId.ZOLTAN]: 8,
                    [CharacterId.CRACH]: 5
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
                weights: {
                    [CharacterId.GAUNTER]: 89,
                    [CharacterId.OLGIERD]: 55,
                    [CharacterId.VLODIMIR]: 34,
                    [CharacterId.CIRI]: 21,
                    [CharacterId.YENNEFER]: 13,
                    [CharacterId.DETTLAFF]: 55,
                    [CharacterId.RENFRI]: 34, // Boosted
                    [CharacterId.VILGEFORTZ]: 21,
                    [CharacterId.TISSAIA]: 34
                }
            },
            {
                id: "q5_b",
                text: "Медицина и человечность.",
                weights: {
                    [CharacterId.SHANI]: 89,
                    [CharacterId.REGIS]: 55,
                    [CharacterId.MARGARITA]: 34,
                    [CharacterId.TRISS]: 21,
                    [CharacterId.CERYS]: 13,
                    [CharacterId.JASKIER]: 8,
                    [CharacterId.PRISCILLA]: 5,
                    [CharacterId.PAVETTA]: 21,
                    [CharacterId.ESKEL]: 13,
                    [CharacterId.MOUSESACK]: 21,
                    [CharacterId.SHEALA]: 13
                }
            },
            {
                id: "q5_c",
                text: "Полиморфия и шпионаж.",
                weights: {
                    [CharacterId.PHILIPPA]: 89,
                    [CharacterId.DUDU]: 55,
                    [CharacterId.DIJKSTRA]: 34,
                    [CharacterId.THALER]: 21,
                    [CharacterId.AVALLACH]: 13,
                    [CharacterId.CAHIR]: 8,
                    [CharacterId.ROACH]: 5,
                    [CharacterId.FOLTEST]: 3
                }
            },
            {
                id: "q5_d",
                text: "Сжигать врагов в пепел ради амбиций.",
                weights: {
                    [CharacterId.VILGEFORTZ]: 89,
                    [CharacterId.TRISS]: 55,
                    [CharacterId.RADOVID]: 34,
                    [CharacterId.EMHYR]: 55, // Boosted
                    [CharacterId.EREDIN]: 34,
                    [CharacterId.CALANTHE]: 13,
                    [CharacterId.IMLERITH]: 55 // Boosted
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
                weights: {
                    [CharacterId.CAHIR]: 89,
                    [CharacterId.EMHYR]: 21,
                    [CharacterId.RENFRI]: 13,
                    [CharacterId.FRINGILLA]: 8
                }
            },
            {
                id: "q6_b",
                text: "Нытики и болтуны в лесу.",
                weights: {
                    [CharacterId.MILVA]: 89,
                    [CharacterId.IORVETH]: 89, // Boosted
                    [CharacterId.GERALT]: 34,
                    [CharacterId.ROCHE]: 21,
                    [CharacterId.VES]: 13,
                    [CharacterId.MOUSESACK]: 89, // Boosted
                    [CharacterId.ANGOULEME]: 34 // Boosted
                }
            },
            {
                id: "q6_c",
                text: "Когда тетушка не наливает.",
                weights: {
                    [CharacterId.ANGOULEME]: 89,
                    [CharacterId.ZOLTAN]: 55,
                    [CharacterId.YARPEN]: 55, // Boosted
                    [CharacterId.OLGIERD]: 13, // Decreased
                    [CharacterId.VLODIMIR]: 13,
                    [CharacterId.JASKIER]: 21,
                    [CharacterId.PAVETTA]: 34 // Boosted
                }
            },
            {
                id: "q6_d",
                text: "Когда ведьмаки не показывают стиль крысы.",
                weights: {
                    [CharacterId.BONHART]: 89,
                    [CharacterId.LETHO]: 55,
                    [CharacterId.GERALT]: 34,
                    [CharacterId.VESEMIR]: 21,
                    [CharacterId.LAMBERT]: 13,
                    [CharacterId.RENFRI]: 5
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
                weights: {
                    [CharacterId.FRINGILLA]: 55,
                    [CharacterId.KEIRA]: 34,
                    [CharacterId.TRISS]: 21,
                    [CharacterId.MARGARITA]: 13,
                    [CharacterId.PHILIPPA]: 8,
                    [CharacterId.PAVETTA]: 3
                }
            },
            {
                id: "q7_b",
                text: "Ректор школы, люблю своих учениц.",
                weights: {
                    [CharacterId.MARGARITA]: 55,
                    [CharacterId.TISSAIA]: 34,
                    [CharacterId.YENNEFER]: 21,
                    [CharacterId.VESEMIR]: 13
                }
            },
            {
                id: "q7_c",
                text: "Отшельница, люблю астрологию.",
                weights: {
                    [CharacterId.AVALLACH]: 34,
                    [CharacterId.REGIS]: 21,
                    [CharacterId.MOUSESACK]: 55, // Boosted
                    [CharacterId.SHEALA]: 89 // Boosted
                }
            },
            {
                id: "q7_d",
                text: "Строгая наставница, люблю порядок.",
                weights: {
                    [CharacterId.TISSAIA]: 89, // Boosted from 55
                    [CharacterId.YENNEFER]: 34,
                    [CharacterId.PHILIPPA]: 21,
                    [CharacterId.BONHART]: 34, // Boosted
                    [CharacterId.RADOVID]: 55, // Boosted
                    [CharacterId.EREDIN]: 34, // Boosted
                    [CharacterId.MARGARITA]: 13,
                    [CharacterId.SHEALA]: 8
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
                weights: {
                    [CharacterId.DUDU]: 89,
                    [CharacterId.DIJKSTRA]: 55,
                    [CharacterId.THALER]: 34,
                    [CharacterId.GAUNTER]: 21,
                    [CharacterId.AVALLACH]: 13,
                    [CharacterId.UMA]: 8
                }
            },
            {
                id: "q8_b",
                text: "Я пою баллады о любви.",
                weights: {
                    [CharacterId.PRISCILLA]: 89,
                    [CharacterId.JASKIER]: 55,
                    [CharacterId.CIRI]: 21,
                    [CharacterId.ANGOULEME]: 34, // Boosted
                    [CharacterId.ROACH]: 21 // Boosted
                }
            },
            {
                id: "q8_c",
                text: "Я убиваю тех, кто предал мою любовь.",
                weights: {
                    [CharacterId.DETTLAFF]: 89,
                    [CharacterId.RENFRI]: 89, // Boosted
                    [CharacterId.SYANNA]: 34,
                    [CharacterId.OLGIERD]: 21,
                    [CharacterId.CRACH]: 13
                }
            },
            {
                id: "q8_d",
                text: "Я манипулирую рыцарями ради мести.",
                weights: {
                    [CharacterId.SYANNA]: 89,
                    [CharacterId.ANNA_HENRIETTA]: 55,
                    [CharacterId.KEIRA]: 34,
                    [CharacterId.FRINGILLA]: 21,
                    [CharacterId.VILGEFORTZ]: 34,
                    [CharacterId.IMLERITH]: 21,
                    [CharacterId.BONHART]: 13
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
                weights: {
                    [CharacterId.ANNA_HENRIETTA]: 89,
                    [CharacterId.SYANNA]: 55,
                    [CharacterId.FRINGILLA]: 34,
                    [CharacterId.EMHYR]: 21,
                    [CharacterId.FOLTEST]: 13,
                    [CharacterId.CALANTHE]: 8
                }
            },
            {
                id: "q9_b",
                text: "Ищу острых ощущений, ведь я бессмертен.",
                weights: {
                    [CharacterId.OLGIERD]: 89,
                    [CharacterId.VLODIMIR]: 55,
                    [CharacterId.GERALT]: 34,
                    [CharacterId.CIRI]: 21,
                    [CharacterId.GAUNTER]: 13,
                    [CharacterId.DETTLAFF]: 34, // Boosted
                    [CharacterId.REGIS]: 5,
                    [CharacterId.CRACH]: 21,
                    [CharacterId.CERYS]: 13
                }
            },
            {
                id: "q9_c",
                text: "Тусуюсь на свадьбах (будучи призраком).",
                weights: {
                    [CharacterId.VLODIMIR]: 89,
                    [CharacterId.SHANI]: 55,
                    [CharacterId.OLGIERD]: 34,
                    [CharacterId.GERALT]: 21
                }
            },
            {
                id: "q9_d",
                text: "Ору, пирую и дерусь на кулаках!",
                weights: {
                    [CharacterId.CRACH]: 89,
                    [CharacterId.HJALMAR]: 89, // Boosted
                    [CharacterId.ZOLTAN]: 34,
                    [CharacterId.YARPEN]: 34,
                    [CharacterId.IMLERITH]: 89,
                    [CharacterId.BONHART]: 21,
                    [CharacterId.LAMBERT]: 55,
                    [CharacterId.ANGOULEME]: 8
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
                weights: {
                    [CharacterId.CERYS]: 89,
                    [CharacterId.FOLTEST]: 55,
                    [CharacterId.CALANTHE]: 34,
                    [CharacterId.ANNA_HENRIETTA]: 21,
                    [CharacterId.EMHYR]: 13,
                    [CharacterId.PAVETTA]: 34, // Boosted
                    [CharacterId.VESEMIR]: 5
                }
            },
            {
                id: "q10_b",
                text: "Убить ледяного великана!",
                weights: {
                    [CharacterId.HJALMAR]: 89,
                    [CharacterId.ESKEL]: 55,
                    [CharacterId.LAMBERT]: 55,
                    [CharacterId.ROACH]: 34, // Boosted
                    [CharacterId.UMA]: 13,
                    [CharacterId.ROCHE]: 89,
                    [CharacterId.BONHART]: 8
                }
            },
            {
                id: "q10_c",
                text: "Слушать духов леса и давать советы.",
                weights: {
                    [CharacterId.AVALLACH]: 55,
                    [CharacterId.YENNEFER]: 34,
                    [CharacterId.KEIRA]: 21,
                    [CharacterId.ROACH]: 34, // Boosted
                    [CharacterId.MOUSESACK]: 89 // Boosted
                }
            },
            {
                id: "q10_d",
                text: "Ослепить врагов и играть в шахматы.",
                weights: {
                    [CharacterId.RADOVID]: 89,
                    [CharacterId.PHILIPPA]: 55,
                    [CharacterId.DIJKSTRA]: 34,
                    [CharacterId.EMHYR]: 55, // Boosted
                    [CharacterId.THALER]: 13,
                    [CharacterId.VILGEFORTZ]: 34,
                    [CharacterId.TISSAIA]: 21,
                    [CharacterId.SHEALA]: 13
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
                weights: {
                    [CharacterId.FOLTEST]: 89,
                    [CharacterId.JASKIER]: 55,
                    [CharacterId.PRISCILLA]: 34,
                    [CharacterId.ANNA_HENRIETTA]: 21,
                    [CharacterId.VLODIMIR]: 13,
                    [CharacterId.DUDU]: 8,
                    [CharacterId.CERYS]: 21, // Boosted
                    [CharacterId.UMA]: 13, // Boosted
                    [CharacterId.ANGOULEME]: 8,
                    [CharacterId.ROACH]: 5
                }
            },
            {
                id: "q11_b",
                text: "Огромные мускулы и яды.",
                weights: {
                    [CharacterId.LETHO]: 89,
                    [CharacterId.GERALT]: 55,
                    [CharacterId.BONHART]: 34,
                    [CharacterId.IMLERITH]: 21,
                    [CharacterId.CRACH]: 8
                }
            },
            {
                id: "q11_c",
                text: "Арбалет и глубокое декольте.",
                weights: {
                    [CharacterId.VES]: 89,
                    [CharacterId.MILVA]: 55,
                    [CharacterId.KEIRA]: 34,
                    [CharacterId.YENNEFER]: 21,
                    [CharacterId.TRISS]: 13,
                    [CharacterId.RENFRI]: 8,
                    [CharacterId.TISSAIA]: 21,
                    [CharacterId.SHEALA]: 13,
                    [CharacterId.PAVETTA]: 34
                }
            },
            {
                id: "q11_d",
                text: "Отборный мат и монокль.",
                weights: {
                    [CharacterId.THALER]: 89,
                    [CharacterId.DIJKSTRA]: 55,
                    [CharacterId.ZOLTAN]: 34,
                    [CharacterId.YARPEN]: 21,
                    [CharacterId.LAMBERT]: 13,
                    [CharacterId.ESKEL]: 8,
                    [CharacterId.ROCHE]: 8,
                    [CharacterId.ANGOULEME]: 13
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
                weights: {
                    [CharacterId.ROACH]: 55, // Restored
                    [CharacterId.VESEMIR]: 55,
                    [CharacterId.SHANI]: 55,
                    [CharacterId.REGIS]: 34,
                    [CharacterId.CAHIR]: 34,
                    [CharacterId.UMA]: 89, // Top
                    [CharacterId.MILVA]: 21,
                    [CharacterId.ANGOULEME]: 21,
                    [CharacterId.VES]: 89 // Boosted to Top
                }
            },
            {
                id: "q12_b",
                text: "Душа компании: могу спеть, могу выпить, могу вселиться в ведьмака.",
                weights: {
                    [CharacterId.VLODIMIR]: 89,
                    [CharacterId.CRACH]: 89,
                    [CharacterId.PRISCILLA]: 89, // Boosted to Top
                    [CharacterId.DUDU]: 55,
                    [CharacterId.JASKIER]: 34,
                    [CharacterId.ZOLTAN]: 34,
                    [CharacterId.YARPEN]: 21,
                    [CharacterId.HJALMAR]: 21,
                    [CharacterId.OLGIERD]: 21,
                    [CharacterId.CERYS]: 13
                }
            },
            {
                id: "q12_c",
                text: "Я знаю, как лучше, и у меня есть список тех, кто не согласен...",
                weights: {
                    [CharacterId.FRINGILLA]: 89,
                    [CharacterId.AVALLACH]: 89, // Boosted (was 0%)
                    [CharacterId.PHILIPPA]: 55,
                    [CharacterId.THALER]: 55,
                    [CharacterId.FOLTEST]: 34, // Boosted
                    [CharacterId.TRISS]: 34,
                    [CharacterId.DIJKSTRA]: 34,
                    [CharacterId.SHEALA]: 21,
                    [CharacterId.KEIRA]: 21,
                    [CharacterId.EMHYR]: 13,
                    [CharacterId.RADOVID]: 13
                }
            },
            {
                id: "q12_d",
                text: "В глубине души я — котик. Просто очень большой, клыкастый и люблю играть с едой.",
                weights: {
                    [CharacterId.DETTLAFF]: 55, // Lowered to give Eredin space
                    [CharacterId.EREDIN]: 89,
                    [CharacterId.IMLERITH]: 55,
                    [CharacterId.BONHART]: 55,
                    [CharacterId.CIRI]: 55, // Boosted
                    [CharacterId.GAUNTER]: 34,
                    [CharacterId.LETHO]: 34,
                    [CharacterId.VILGEFORTZ]: 21,
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
                weights: {
                    [CharacterId.RENFRI]: 89,
                    [CharacterId.SYANNA]: 55,
                    [CharacterId.OLGIERD]: 34,
                    [CharacterId.GAUNTER]: 21,
                    [CharacterId.DETTLAFF]: 13,
                    [CharacterId.RADOVID]: 8,
                    [CharacterId.CALANTHE]: 21,
                    [CharacterId.BONHART]: 13
                }
            },
            {
                id: "q13_b",
                text: "Лучше выброситься из окна, чем сдаться.",
                weights: {
                    [CharacterId.CALANTHE]: 89,
                    [CharacterId.CIRI]: 55,
                    [CharacterId.ROCHE]: 34,
                    [CharacterId.VES]: 21,
                    [CharacterId.CAHIR]: 13,
                    [CharacterId.UMA]: 8,
                    [CharacterId.CERYS]: 55, // Boosted
                    [CharacterId.CRACH]: 21
                }
            },
            {
                id: "q13_c",
                text: "АААААА!!! (Разрушить всё магией).",
                weights: {
                    [CharacterId.PAVETTA]: 89,
                    [CharacterId.CIRI]: 55,
                    [CharacterId.YENNEFER]: 34,
                    [CharacterId.TRISS]: 21,
                    [CharacterId.VILGEFORTZ]: 34, // Boosted
                    [CharacterId.PHILIPPA]: 8,
                    [CharacterId.TISSAIA]: 21,
                    [CharacterId.SHEALA]: 13,
                    [CharacterId.MARGARITA]: 2
                }
            },
            {
                id: "q13_d",
                text: "Умереть в бою с друзьями, защищая дракона.",
                weights: {
                    [CharacterId.YARPEN]: 89,
                    [CharacterId.ZOLTAN]: 55,
                    [CharacterId.REGIS]: 34,
                    [CharacterId.CAHIR]: 21,
                    [CharacterId.MILVA]: 13,
                    [CharacterId.ANGOULEME]: 8,
                    [CharacterId.VESEMIR]: 5,
                    [CharacterId.SHANI]: 8,
                    [CharacterId.IORVETH]: 21, // Boosted
                    [CharacterId.CRACH]: 3,
                    [CharacterId.HJALMAR]: 2
                }
            },
        ]
    }
];
