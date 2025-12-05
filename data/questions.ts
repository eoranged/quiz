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
                    [CharacterId.GERALT]: 86,
                    [CharacterId.ESKEL]: 58,
                    [CharacterId.VESEMIR]: 33,
                    [CharacterId.LETHO]: 22,
                    [CharacterId.LAMBERT]: 15,
                    [CharacterId.BONHART]: 9,
                    [CharacterId.IORVETH]: 5,
                    [CharacterId.ROCHE]: 3,
                    [CharacterId.CIRI]: 2,
                    [CharacterId.CAHIR]: 5,
                    [CharacterId.MILVA]: 3,
                    [CharacterId.MOUSESACK]: 9,
                    [CharacterId.RADOVID]: 5,
                    [CharacterId.EREDIN]: 3
                }
            },
            {
                id: "q1_b",
                text: "Роскошный ужин и ванна с лепестками.",
                weights: {
                    [CharacterId.YENNEFER]: 87,
                    [CharacterId.KEIRA]: 52,
                    [CharacterId.ANNA_HENRIETTA]: 35,
                    [CharacterId.SYANNA]: 23,
                    [CharacterId.FRINGILLA]: 14,
                    [CharacterId.MARGARITA]: 7,
                    [CharacterId.TRISS]: 3,
                    [CharacterId.TISSAIA]: 10,
                    [CharacterId.FOLTEST]: 10,
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
                    [CharacterId.JASKIER]: 92,
                    [CharacterId.VLODIMIR]: 32,
                    [CharacterId.OLGIERD]: 20,
                    [CharacterId.ANGOULEME]: 15,
                    [CharacterId.ZOLTAN]: 6,
                    [CharacterId.YARPEN]: 5,
                    [CharacterId.CRACH]: 3,
                    [CharacterId.HJALMAR]: 2,
                    [CharacterId.SHANI]: 10,
                    [CharacterId.CERYS]: 11,
                    [CharacterId.VES]: 5,
                    [CharacterId.REGIS]: 3,
                    [CharacterId.CALANTHE]: 24, // Boosted
                    [CharacterId.UMA]: 16, // Boosted
                    [CharacterId.ROACH]: 11 // Boosted
                }
            },
            {
                id: "q1_d",
                text: "Пожевать овес на крыше сарая.",
                weights: {
                    [CharacterId.ROACH]: 86,
                    [CharacterId.UMA]: 54, // Boosted
                    [CharacterId.DUDU]: 10,
                    [CharacterId.PAVETTA]: 5,
                    [CharacterId.ESKEL]: 6,
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
                    [CharacterId.CIRI]: 86,
                    [CharacterId.YENNEFER]: 54,
                    [CharacterId.TRISS]: 33,
                    [CharacterId.KEIRA]: 23,
                    [CharacterId.GAUNTER]: 11,
                    [CharacterId.AVALLACH]: 6,
                    [CharacterId.PHILIPPA]: 5,
                    [CharacterId.VILGEFORTZ]: 15,
                    [CharacterId.SYANNA]: 6,
                    [CharacterId.ROACH]: 2,
                    [CharacterId.PRISCILLA]: 3,
                    [CharacterId.DUDU]: 1,
                    [CharacterId.TISSAIA]: 31,
                    [CharacterId.SHEALA]: 18,
                    [CharacterId.MOUSESACK]: 15,
                    [CharacterId.PAVETTA]: 5
                }
            },
            {
                id: "q2_b",
                text: "Пытаюсь договориться, а потом сжигаю всех.",
                weights: {
                    [CharacterId.TRISS]: 92,
                    [CharacterId.FRINGILLA]: 53,
                    [CharacterId.MARGARITA]: 32,
                    [CharacterId.SHEALA]: 20,
                    [CharacterId.SHANI]: 15,
                    [CharacterId.DIJKSTRA]: 6,
                    [CharacterId.EMHYR]: 5,
                    [CharacterId.RADOVID]: 22,
                    [CharacterId.FOLTEST]: 16,
                    [CharacterId.RENFRI]: 7,
                    [CharacterId.ANNA_HENRIETTA]: 3
                }
            },
            {
                id: "q2_c",
                text: "Ворчу, что раньше монстры были слабее.",
                weights: {
                    [CharacterId.VESEMIR]: 86,
                    [CharacterId.GERALT]: 53,
                    [CharacterId.THALER]: 32,
                    [CharacterId.DIJKSTRA]: 19,
                    [CharacterId.REGIS]: 14,
                    [CharacterId.BONHART]: 6,
                    [CharacterId.MOUSESACK]: 35, // Boosted
                    [CharacterId.ESKEL]: 20,
                    [CharacterId.LAMBERT]: 35,
                    [CharacterId.ROACH]: 22, // Boosted
                    [CharacterId.UMA]: 12 // Boosted
                }
            },
            {
                id: "q2_d",
                text: "Достаю топор и зову парней!",
                weights: {
                    [CharacterId.ZOLTAN]: 87,
                    [CharacterId.YARPEN]: 56,
                    [CharacterId.HJALMAR]: 32,
                    [CharacterId.CRACH]: 18,
                    [CharacterId.ROCHE]: 12,
                    [CharacterId.IORVETH]: 24, // Boosted
                    [CharacterId.LETHO]: 12, // Boosted
                    [CharacterId.MILVA]: 22,
                    [CharacterId.VES]: 14,
                    [CharacterId.CALANTHE]: 32, // Boosted
                    [CharacterId.ANGOULEME]: 19 // Boosted
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
                    [CharacterId.REGIS]: 87,
                    [CharacterId.GAUNTER]: 54,
                    [CharacterId.AVALLACH]: 33,
                    [CharacterId.VILGEFORTZ]: 20,
                    [CharacterId.EMHYR]: 10,
                    [CharacterId.SHANI]: 5,
                    [CharacterId.CALANTHE]: 5,
                    [CharacterId.PAVETTA]: 20, // Boosted
                    [CharacterId.BONHART]: 2,
                    [CharacterId.SHEALA]: 52, // Boosted
                    [CharacterId.TISSAIA]: 32, // Boosted
                    [CharacterId.MARGARITA]: 86 // Boosted
                }
            },
            {
                id: "q3_b",
                text: "Наливай, хер моржовый!",
                weights: {
                    [CharacterId.LAMBERT]: 88,
                    [CharacterId.OLGIERD]: 33, // Decreased
                    [CharacterId.VLODIMIR]: 36,
                    [CharacterId.ANGOULEME]: 86,
                    [CharacterId.ZOLTAN]: 12,
                    [CharacterId.YARPEN]: 10,
                    [CharacterId.CRACH]: 12,
                    [CharacterId.JASKIER]: 32,
                    [CharacterId.PRISCILLA]: 54,
                    [CharacterId.HJALMAR]: 23, // Boosted
                    [CharacterId.VES]: 5,
                    [CharacterId.IMLERITH]: 3
                }
            },
            {
                id: "q3_c",
                text: "Пью тихо, спокойно, с козой.",
                weights: {
                    [CharacterId.ESKEL]: 90,
                    [CharacterId.VESEMIR]: 58,
                    [CharacterId.GERALT]: 33,
                    [CharacterId.ROCHE]: 18,
                    [CharacterId.IORVETH]: 10,
                    [CharacterId.LETHO]: 10,
                    [CharacterId.CAHIR]: 11,
                    [CharacterId.UMA]: 22, // Boosted
                    [CharacterId.ROACH]: 3,
                    [CharacterId.MILVA]: 2,
                    [CharacterId.CRACH]: 18,
                    [CharacterId.CERYS]: 32,
                    [CharacterId.MOUSESACK]: 14,
                    [CharacterId.CALANTHE]: 53 // Boosted
                }
            },
            {
                id: "q3_d",
                text: "Предпочитаю шампанское в ванне.",
                weights: {
                    [CharacterId.KEIRA]: 88,
                    [CharacterId.YENNEFER]: 52,
                    [CharacterId.ANNA_HENRIETTA]: 32,
                    [CharacterId.SYANNA]: 24,
                    [CharacterId.TRISS]: 11,
                    [CharacterId.FRINGILLA]: 7,
                    [CharacterId.MARGARITA]: 36
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
                    [CharacterId.SHEALA]: 23,
                    [CharacterId.DIJKSTRA]: 57,
                    [CharacterId.PHILIPPA]: 35,
                    [CharacterId.TISSAIA]: 19,
                    [CharacterId.THALER]: 37,
                    [CharacterId.GAUNTER]: 22,
                    [CharacterId.AVALLACH]: 12,
                    [CharacterId.VILGEFORTZ]: 36, // Boosted
                    [CharacterId.SHANI]: 5
                }
            },
            {
                id: "q4_b",
                text: "Захватить Север (ради их же блага).",
                weights: {
                    [CharacterId.EMHYR]: 92,
                    [CharacterId.CAHIR]: 56,
                    [CharacterId.FRINGILLA]: 20,
                    [CharacterId.LETHO]: 53, // Boosted
                    [CharacterId.EREDIN]: 54, // Boosted
                    [CharacterId.RADOVID]: 31,
                    [CharacterId.VILGEFORTZ]: 19
                }
            },
            {
                id: "q4_c",
                text: "Свободная Темерия или смерть!",
                weights: {
                    [CharacterId.ROCHE]: 88,
                    [CharacterId.VES]: 53,
                    [CharacterId.FOLTEST]: 37,
                    [CharacterId.THALER]: 19,
                    [CharacterId.CERYS]: 9,
                    [CharacterId.CRACH]: 5,
                    [CharacterId.PRISCILLA]: 12,
                    [CharacterId.ANGOULEME]: 9
                }
            },
            {
                id: "q4_d",
                text: "Смерть Dh'oine, да здравствуют белки!",
                weights: {
                    [CharacterId.IORVETH]: 88,
                    [CharacterId.MILVA]: 52,
                    [CharacterId.EREDIN]: 35,
                    [CharacterId.IMLERITH]: 20,
                    [CharacterId.AVALLACH]: 10,
                    [CharacterId.DETTLAFF]: 6,
                    [CharacterId.YARPEN]: 14,
                    [CharacterId.ZOLTAN]: 9,
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
                    [CharacterId.GAUNTER]: 90,
                    [CharacterId.OLGIERD]: 57,
                    [CharacterId.CIRI]: 20,
                    [CharacterId.YENNEFER]: 12,
                    [CharacterId.DETTLAFF]: 53,
                    [CharacterId.RENFRI]: 37, // Boosted
                    [CharacterId.VILGEFORTZ]: 24,
                    [CharacterId.TISSAIA]: 35
                }
            },
            {
                id: "q5_b",
                text: "Медицина и человечность.",
                weights: {
                    [CharacterId.SHANI]: 92,
                    [CharacterId.REGIS]: 53,
                    [CharacterId.MARGARITA]: 37,
                    [CharacterId.TRISS]: 19,
                    [CharacterId.CERYS]: 11,
                    [CharacterId.JASKIER]: 11,
                    [CharacterId.PRISCILLA]: 5,
                    [CharacterId.PAVETTA]: 22,
                    [CharacterId.ESKEL]: 15,
                    [CharacterId.MOUSESACK]: 22,
                    [CharacterId.SHEALA]: 16
                }
            },
            {
                id: "q5_c",
                text: "Полиморфия и шпионаж.",
                weights: {
                    [CharacterId.PHILIPPA]: 91,
                    [CharacterId.DUDU]: 54,
                    [CharacterId.DIJKSTRA]: 35,
                    [CharacterId.THALER]: 24,
                    [CharacterId.AVALLACH]: 15,
                    [CharacterId.CAHIR]: 7,
                    [CharacterId.ROACH]: 5,
                    [CharacterId.FOLTEST]: 3
                }
            },
            {
                id: "q5_d",
                text: "Сжигать врагов в пепел ради амбиций.",
                weights: {
                    [CharacterId.VILGEFORTZ]: 92,
                    [CharacterId.TRISS]: 56,
                    [CharacterId.RADOVID]: 32,
                    [CharacterId.EMHYR]: 52, // Boosted
                    [CharacterId.EREDIN]: 32,
                    [CharacterId.CALANTHE]: 15,
                    [CharacterId.IMLERITH]: 58 // Boosted
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
                    [CharacterId.CAHIR]: 91,
                    [CharacterId.EMHYR]: 18,
                    [CharacterId.RENFRI]: 14,
                    [CharacterId.FRINGILLA]: 11
                }
            },
            {
                id: "q6_b",
                text: "Нытики и болтуны в лесу.",
                weights: {
                    [CharacterId.MILVA]: 90,
                    [CharacterId.IORVETH]: 88, // Boosted
                    [CharacterId.GERALT]: 32,
                    [CharacterId.ROCHE]: 24,
                    [CharacterId.VES]: 16,
                    [CharacterId.MOUSESACK]: 91, // Boosted
                    [CharacterId.ANGOULEME]: 31 // Boosted
                }
            },
            {
                id: "q6_c",
                text: "Когда тетушка не наливает.",
                weights: {
                    [CharacterId.ANGOULEME]: 91,
                    [CharacterId.ZOLTAN]: 56,
                    [CharacterId.YARPEN]: 52, // Boosted
                    [CharacterId.OLGIERD]: 10, // Decreased
                    [CharacterId.VLODIMIR]: 15,
                    [CharacterId.JASKIER]: 18,
                    [CharacterId.PAVETTA]: 36 // Boosted
                }
            },
            {
                id: "q6_d",
                text: "Когда ведьмаки не показывают стиль крысы.",
                weights: {
                    [CharacterId.BONHART]: 92,
                    [CharacterId.LETHO]: 54,
                    [CharacterId.GERALT]: 36,
                    [CharacterId.VESEMIR]: 18,
                    [CharacterId.LAMBERT]: 14,
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
                    [CharacterId.FRINGILLA]: 57,
                    [CharacterId.KEIRA]: 36,
                    [CharacterId.TRISS]: 18,
                    [CharacterId.MARGARITA]: 15,
                    [CharacterId.PHILIPPA]: 6,
                    [CharacterId.PAVETTA]: 3
                }
            },
            {
                id: "q7_b",
                text: "Ректор школы, люблю своих учениц.",
                weights: {
                    [CharacterId.MARGARITA]: 53,
                    [CharacterId.TISSAIA]: 36,
                    [CharacterId.YENNEFER]: 19,
                    [CharacterId.VESEMIR]: 15
                }
            },
            {
                id: "q7_c",
                text: "Отшельница, люблю астрологию.",
                weights: {
                    [CharacterId.AVALLACH]: 32,
                    [CharacterId.REGIS]: 22,
                    [CharacterId.MOUSESACK]: 58, // Boosted
                    [CharacterId.SHEALA]: 92 // Boosted
                }
            },
            {
                id: "q7_d",
                text: "Строгая наставница, люблю порядок.",
                weights: {
                    [CharacterId.TISSAIA]: 90, // Boosted from 55
                    [CharacterId.YENNEFER]: 36,
                    [CharacterId.PHILIPPA]: 18,
                    [CharacterId.BONHART]: 31, // Boosted
                    [CharacterId.RADOVID]: 52, // Boosted
                    [CharacterId.EREDIN]: 32, // Boosted
                    [CharacterId.MARGARITA]: 10,
                    [CharacterId.SHEALA]: 9
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
                    [CharacterId.DUDU]: 92,
                    [CharacterId.DIJKSTRA]: 52,
                    [CharacterId.THALER]: 33,
                    [CharacterId.GAUNTER]: 20,
                    [CharacterId.AVALLACH]: 14,
                    [CharacterId.UMA]: 10
                }
            },
            {
                id: "q8_b",
                text: "Я пою баллады о любви.",
                weights: {
                    [CharacterId.PRISCILLA]: 86,
                    [CharacterId.JASKIER]: 54,
                    [CharacterId.CIRI]: 23,
                    [CharacterId.ANGOULEME]: 36, // Boosted
                    [CharacterId.ROACH]: 18 // Boosted
                }
            },
            {
                id: "q8_c",
                text: "Я убиваю тех, кто предал мою любовь.",
                weights: {
                    [CharacterId.DETTLAFF]: 87,
                    [CharacterId.RENFRI]: 91, // Boosted
                    [CharacterId.SYANNA]: 31,
                    [CharacterId.OLGIERD]: 22,
                    [CharacterId.CRACH]: 16
                }
            },
            {
                id: "q8_d",
                text: "Я манипулирую рыцарями ради мести.",
                weights: {
                    [CharacterId.SYANNA]: 92,
                    [CharacterId.ANNA_HENRIETTA]: 53,
                    [CharacterId.KEIRA]: 33,
                    [CharacterId.FRINGILLA]: 24,
                    [CharacterId.VILGEFORTZ]: 33,
                    [CharacterId.IMLERITH]: 23,
                    [CharacterId.BONHART]: 11
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
                    [CharacterId.ANNA_HENRIETTA]: 87,
                    [CharacterId.SYANNA]: 56,
                    [CharacterId.FRINGILLA]: 37,
                    [CharacterId.EMHYR]: 19,
                    [CharacterId.FOLTEST]: 12,
                    [CharacterId.CALANTHE]: 6
                }
            },
            {
                id: "q9_b",
                text: "Ищу острых ощущений, ведь я бессмертен.",
                weights: {
                    [CharacterId.OLGIERD]: 90,
                    [CharacterId.VLODIMIR]: 57,
                    [CharacterId.GERALT]: 35,
                    [CharacterId.CIRI]: 22,
                    [CharacterId.GAUNTER]: 11,
                    [CharacterId.DETTLAFF]: 31, // Boosted
                    [CharacterId.REGIS]: 5,
                    [CharacterId.CRACH]: 20,
                    [CharacterId.CERYS]: 15
                }
            },
            {
                id: "q9_c",
                text: "Тусуюсь на свадьбах (будучи призраком).",
                weights: {
                    [CharacterId.VLODIMIR]: 91,
                    [CharacterId.SHANI]: 54,
                    [CharacterId.OLGIERD]: 37,
                    [CharacterId.GERALT]: 20
                }
            },
            {
                id: "q9_d",
                text: "Ору, пирую и дерусь на кулаках!",
                weights: {
                    [CharacterId.CRACH]: 90,
                    [CharacterId.HJALMAR]: 87, // Boosted
                    [CharacterId.ZOLTAN]: 33,
                    [CharacterId.YARPEN]: 37,
                    [CharacterId.IMLERITH]: 88,
                    [CharacterId.BONHART]: 24,
                    [CharacterId.LAMBERT]: 53,
                    [CharacterId.ANGOULEME]: 7
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
                    [CharacterId.CERYS]: 88,
                    [CharacterId.FOLTEST]: 54,
                    [CharacterId.CALANTHE]: 32,
                    [CharacterId.ANNA_HENRIETTA]: 23,
                    [CharacterId.EMHYR]: 15,
                    [CharacterId.PAVETTA]: 32, // Boosted
                    [CharacterId.VESEMIR]: 5
                }
            },
            {
                id: "q10_b",
                text: "Убить ледяного великана!",
                weights: {
                    [CharacterId.HJALMAR]: 87,
                    [CharacterId.ESKEL]: 58,
                    [CharacterId.LAMBERT]: 52,
                    [CharacterId.ROACH]: 37, // Boosted
                    [CharacterId.UMA]: 11,
                    [CharacterId.ROCHE]: 87,
                    [CharacterId.BONHART]: 9
                }
            },
            {
                id: "q10_c",
                text: "Слушать духов леса и давать советы.",
                weights: {
                    [CharacterId.AVALLACH]: 53,
                    [CharacterId.YENNEFER]: 35,
                    [CharacterId.KEIRA]: 19,
                    [CharacterId.ROACH]: 36, // Boosted
                    [CharacterId.MOUSESACK]: 53 // Boosted
                }
            },
            {
                id: "q10_d",
                text: "Ослепить врагов и играть в шахматы.",
                weights: {
                    [CharacterId.RADOVID]: 92,
                    [CharacterId.PHILIPPA]: 53,
                    [CharacterId.DIJKSTRA]: 36,
                    [CharacterId.EMHYR]: 57, // Boosted
                    [CharacterId.THALER]: 12,
                    [CharacterId.VILGEFORTZ]: 36,
                    [CharacterId.TISSAIA]: 22,
                    [CharacterId.SHEALA]: 16
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
                    [CharacterId.FOLTEST]: 87,
                    [CharacterId.JASKIER]: 56,
                    [CharacterId.PRISCILLA]: 35,
                    [CharacterId.ANNA_HENRIETTA]: 24,
                    [CharacterId.VLODIMIR]: 12,
                    [CharacterId.DUDU]: 11,
                    [CharacterId.CERYS]: 19, // Boosted
                    [CharacterId.UMA]: 12, // Boosted
                    [CharacterId.ANGOULEME]: 9,
                    [CharacterId.ROACH]: 5
                }
            },
            {
                id: "q11_b",
                text: "Огромные мускулы и яды.",
                weights: {
                    [CharacterId.LETHO]: 91,
                    [CharacterId.GERALT]: 58,
                    [CharacterId.BONHART]: 32,
                    [CharacterId.IMLERITH]: 18,
                    [CharacterId.CRACH]: 5
                }
            },
            {
                id: "q11_c",
                text: "Арбалет и глубокое декольте.",
                weights: {
                    [CharacterId.VES]: 90,
                    [CharacterId.MILVA]: 57,
                    [CharacterId.KEIRA]: 33,
                    [CharacterId.YENNEFER]: 20,
                    [CharacterId.TRISS]: 15,
                    [CharacterId.RENFRI]: 5,
                    [CharacterId.TISSAIA]: 18,
                    [CharacterId.SHEALA]: 16,
                    [CharacterId.PAVETTA]: 36
                }
            },
            {
                id: "q11_d",
                text: "Отборный мат и монокль.",
                weights: {
                    [CharacterId.THALER]: 87,
                    [CharacterId.DIJKSTRA]: 53,
                    [CharacterId.ZOLTAN]: 31,
                    [CharacterId.YARPEN]: 20,
                    [CharacterId.LAMBERT]: 12,
                    [CharacterId.ESKEL]: 9,
                    [CharacterId.ROCHE]: 6,
                    [CharacterId.ANGOULEME]: 16
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
                    [CharacterId.ROACH]: 53, // Restored
                    [CharacterId.VESEMIR]: 57,
                    [CharacterId.SHANI]: 53,
                    [CharacterId.REGIS]: 33,
                    [CharacterId.CAHIR]: 33,
                    [CharacterId.UMA]: 86, // Top
                    [CharacterId.MILVA]: 22,
                    [CharacterId.ANGOULEME]: 19,
                    [CharacterId.VES]: 90 // Boosted to Top
                }
            },
            {
                id: "q12_b",
                text: "Душа компании: могу спеть, могу выпить, могу вселиться в ведьмака.",
                weights: {
                    [CharacterId.VLODIMIR]: 31,
                    [CharacterId.CRACH]: 90,
                    [CharacterId.PRISCILLA]: 86, // Boosted to Top
                    [CharacterId.DUDU]: 58,
                    [CharacterId.JASKIER]: 37,
                    [CharacterId.ZOLTAN]: 35,
                    [CharacterId.YARPEN]: 23,
                    [CharacterId.HJALMAR]: 24,
                    [CharacterId.OLGIERD]: 20,
                    [CharacterId.CERYS]: 14
                }
            },
            {
                id: "q12_c",
                text: "Я знаю, как лучше, и у меня есть список тех, кто не согласен...",
                weights: {
                    [CharacterId.FRINGILLA]: 91,
                    [CharacterId.AVALLACH]: 87, // Boosted (was 0%)
                    [CharacterId.PHILIPPA]: 56,
                    [CharacterId.THALER]: 58,
                    [CharacterId.FOLTEST]: 33, // Boosted
                    [CharacterId.TRISS]: 35,
                    [CharacterId.DIJKSTRA]: 31,
                    [CharacterId.SHEALA]: 22,
                    [CharacterId.KEIRA]: 22,
                    [CharacterId.EMHYR]: 11,
                    [CharacterId.RADOVID]: 12
                }
            },
            {
                id: "q12_d",
                text: "В глубине души я — котик. Просто очень большой, клыкастый и люблю играть с едой.",
                weights: {
                    [CharacterId.DETTLAFF]: 57, // Lowered to give Eredin space
                    [CharacterId.EREDIN]: 86,
                    [CharacterId.IMLERITH]: 54,
                    [CharacterId.BONHART]: 57,
                    [CharacterId.CIRI]: 56, // Boosted
                    [CharacterId.GAUNTER]: 33,
                    [CharacterId.LETHO]: 31,
                    [CharacterId.VILGEFORTZ]: 19,
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
                    [CharacterId.RENFRI]: 87,
                    [CharacterId.SYANNA]: 53,
                    [CharacterId.OLGIERD]: 32,
                    [CharacterId.GAUNTER]: 18,
                    [CharacterId.DETTLAFF]: 14,
                    [CharacterId.RADOVID]: 9,
                    [CharacterId.CALANTHE]: 22,
                    [CharacterId.BONHART]: 10
                }
            },
            {
                id: "q13_b",
                text: "Лучше выброситься из окна, чем сдаться.",
                weights: {
                    [CharacterId.CALANTHE]: 91,
                    [CharacterId.CIRI]: 58,
                    [CharacterId.ROCHE]: 32,
                    [CharacterId.VES]: 20,
                    [CharacterId.CAHIR]: 15,
                    [CharacterId.UMA]: 11,
                    [CharacterId.CERYS]: 58, // Boosted
                    [CharacterId.CRACH]: 24
                }
            },
            {
                id: "q13_c",
                text: "АААААА!!! (Разрушить всё магией).",
                weights: {
                    [CharacterId.PAVETTA]: 87,
                    [CharacterId.CIRI]: 57,
                    [CharacterId.YENNEFER]: 35,
                    [CharacterId.TRISS]: 23,
                    [CharacterId.VILGEFORTZ]: 35, // Boosted
                    [CharacterId.PHILIPPA]: 11,
                    [CharacterId.TISSAIA]: 20,
                    [CharacterId.SHEALA]: 15,
                    [CharacterId.MARGARITA]: 2
                }
            },
            {
                id: "q13_d",
                text: "Умереть в бою с друзьями, защищая дракона.",
                weights: {
                    [CharacterId.YARPEN]: 87,
                    [CharacterId.ZOLTAN]: 57,
                    [CharacterId.REGIS]: 35,
                    [CharacterId.CAHIR]: 22,
                    [CharacterId.MILVA]: 14,
                    [CharacterId.ANGOULEME]: 6,
                    [CharacterId.VESEMIR]: 5,
                    [CharacterId.SHANI]: 9,
                    [CharacterId.IORVETH]: 20, // Boosted
                    [CharacterId.CRACH]: 3,
                    [CharacterId.HJALMAR]: 2
                }
            },
        ]
    }
];
