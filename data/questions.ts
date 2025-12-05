import { CharacterId, Question } from "../types";

// Map questions to cover 52 characters. 
// We need ~13 questions with 4 options each = 52 outcomes.
export const QUESTIONS_DATA: Question[] = [
    {
        id: "q1",
        text: "Твой идеальный пятничный вечер?",
        options: [
            { id: "q1_a", text: "Медитация и чистка меча.", weights: { [CharacterId.GERALT]: 3, [CharacterId.ESKEL]: 1 } },
            { id: "q1_b", text: "Роскошный ужин и ванна с лепестками.", weights: { [CharacterId.YENNEFER]: 3, [CharacterId.KEIRA]: 1 } },
            { id: "q1_c", text: "Пьянка в корчме и песни до утра!", weights: { [CharacterId.JASKIER]: 3, [CharacterId.PRISCILLA]: 1 } },
            { id: "q1_d", text: "Пожевать овес на крыше сарая.", weights: { [CharacterId.ROACH]: 3 } },
        ]
    },
    {
        id: "q2",
        text: "Как ты реагируешь на смертельную опасность?",
        options: [
            { id: "q2_a", text: "Телепортируюсь, я особенный!", weights: { [CharacterId.CIRI]: 3, [CharacterId.YENNEFER]: 1 } },
            { id: "q2_b", text: "Пытаюсь договориться, а потом сжигаю всех.", weights: { [CharacterId.TRISS]: 3, [CharacterId.YENNEFER]: 1 } },
            { id: "q2_c", text: "Ворчу, что раньше монстры были слабее.", weights: { [CharacterId.VESEMIR]: 3, [CharacterId.GERALT]: 1 } },
            { id: "q2_d", text: "Достаю топор и зову парней!", weights: { [CharacterId.ZOLTAN]: 3, [CharacterId.YARPEN]: 1 } },
        ]
    },
    {
        id: "q3",
        text: "Твое отношение к выпивке?",
        options: [
            { id: "q3_a", text: "Я не пью. Только мандрагоровый дистиллят.", weights: { [CharacterId.REGIS]: 3, [CharacterId.DETTLAFF]: 1 } },
            { id: "q3_b", text: "Наливай, хер моржовый!", weights: { [CharacterId.LAMBERT]: 3, [CharacterId.GERALT]: 1 } },
            { id: "q3_c", text: "Пью тихо, спокойно, с козой.", weights: { [CharacterId.ESKEL]: 3, [CharacterId.VESEMIR]: 1 } },
            { id: "q3_d", text: "Предпочитаю шампанское в ванне.", weights: { [CharacterId.KEIRA]: 3, [CharacterId.TRISS]: 1 } },
        ]
    },
    {
        id: "q4",
        text: "Выбери свою политическую позицию.",
        options: [
            { id: "q4_a", text: "Я знаю все секреты и правлю из тени.", weights: { [CharacterId.DIJKSTRA]: 3, [CharacterId.PHILIPPA]: 1 } },
            { id: "q4_b", text: "Захватить Север (ради их же блага).", weights: { [CharacterId.EMHYR]: 3, [CharacterId.CAHIR]: 1 } },
            { id: "q4_c", text: "Свободная Темерия или смерть!", weights: { [CharacterId.ROCHE]: 3, [CharacterId.VES]: 1 } },
            { id: "q4_d", text: "Смерть Dh'oine, да здравствуют белки!", weights: { [CharacterId.IORVETH]: 3, [CharacterId.MILVA]: 1 } },
        ]
    },
    {
        id: "q5",
        text: "Какая сила тебе ближе?",
        options: [
            { id: "q5_a", text: "Управление временем и душами.", weights: { [CharacterId.GAUNTER]: 3 } },
            { id: "q5_b", text: "Медицина и человечность.", weights: { [CharacterId.SHANI]: 3 } },
            { id: "q5_c", text: "Полиморфия и шпионаж.", weights: { [CharacterId.PHILIPPA]: 3, [CharacterId.DIJKSTRA]: 1 } },
            { id: "q5_d", text: "Сжигать врагов в пепел ради амбиций.", weights: { [CharacterId.VILGEFORTZ]: 3 } },
        ]
    },
    {
        id: "q6",
        text: "Что тебя больше всего бесит?",
        options: [
            { id: "q6_a", text: "Когда меня называют Нильфгаардцем!", weights: { [CharacterId.CAHIR]: 3 } },
            { id: "q6_b", text: "Нытики и болтуны в лесу.", weights: { [CharacterId.MILVA]: 3 } },
            { id: "q6_c", text: "Когда тетушка не наливает.", weights: { [CharacterId.ANGOULEME]: 3 } },
            { id: "q6_d", text: "Когда ведьмаки не показывают стиль крысы.", weights: { [CharacterId.BONHART]: 3 } },
        ]
    },
    {
        id: "q7",
        text: "Выбери свою роль в магической ложе.",
        options: [
            { id: "q7_a", text: "Имперская чародейка, люблю книги.", weights: { [CharacterId.FRINGILLA]: 3 } },
            { id: "q7_b", text: "Ректор школы, люблю своих учениц.", weights: { [CharacterId.MARGARITA]: 3 } },
            { id: "q7_c", text: "Отшельница, люблю астрологию.", weights: { [CharacterId.SHEALA]: 3 } },
            { id: "q7_d", text: "Строгая наставница, люблю порядок.", weights: { [CharacterId.TISSAIA]: 3, [CharacterId.YENNEFER]: 1 } },
        ]
    },
    {
        id: "q8",
        text: "Твой стиль жизни?",
        options: [
            { id: "q8_a", text: "Я меняю маски каждый день.", weights: { [CharacterId.DUDU]: 3 } },
            { id: "q8_b", text: "Я пою баллады о любви.", weights: { [CharacterId.PRISCILLA]: 3, [CharacterId.JASKIER]: 1 } },
            { id: "q8_c", text: "Я убиваю тех, кто предал мою любовь.", weights: { [CharacterId.DETTLAFF]: 3, [CharacterId.REGIS]: 1 } },
            { id: "q8_d", text: "Я манипулирую рыцарями ради мести.", weights: { [CharacterId.SYANNA]: 3, [CharacterId.ANNA_HENRIETTA]: 1 } },
        ]
    },
    {
        id: "q9",
        text: "Как ты проводишь досуг?",
        options: [
            { id: "q9_a", text: "Правлю винным краем и дегустирую.", weights: { [CharacterId.ANNA_HENRIETTA]: 3 } },
            { id: "q9_b", text: "Ищу острых ощущений, ведь я бессмертен.", weights: { [CharacterId.OLGIERD]: 3, [CharacterId.VLODIMIR]: 1 } },
            { id: "q9_c", text: "Тусуюсь на свадьбах (будучи призраком).", weights: { [CharacterId.VLODIMIR]: 3, [CharacterId.OLGIERD]: 1 } },
            { id: "q9_d", text: "Ору, пирую и дерусь на кулаках!", weights: { [CharacterId.CRACH]: 3, [CharacterId.HJALMAR]: 1 } },
        ]
    },
    {
        id: "q10",
        text: "Как получить корону?",
        options: [
            { id: "q10_a", text: "Через мудрость и заботу о народе.", weights: { [CharacterId.CERYS]: 3, [CharacterId.CRACH]: 1 } },
            { id: "q10_b", text: "Убить ледяного великана!", weights: { [CharacterId.HJALMAR]: 3, [CharacterId.CRACH]: 1 } },
            { id: "q10_c", text: "Слушать духов леса и давать советы.", weights: { [CharacterId.MOUSESACK]: 3, [CharacterId.CERYS]: 1 } },
            { id: "q10_d", text: "Ослепить врагов и играть в шахматы.", weights: { [CharacterId.RADOVID]: 3 } },
        ]
    },
    {
        id: "q11",
        text: "Твое любимое оружие/инструмент?",
        options: [
            { id: "q11_a", text: "Харизма и незаконнорожденные дети.", weights: { [CharacterId.FOLTEST]: 3 } },
            { id: "q11_b", text: "Огромные мускулы и яды.", weights: { [CharacterId.LETHO]: 3 } },
            { id: "q11_c", text: "Арбалет и глубокое декольте.", weights: { [CharacterId.VES]: 3, [CharacterId.ROCHE]: 1 } },
            { id: "q11_d", text: "Отборный мат и монокль.", weights: { [CharacterId.THALER]: 3, [CharacterId.ROCHE]: 1 } },
        ]
    },
    {
        id: "q12",
        text: "Кто ты в душе?",
        options: [
            { id: "q12_a", text: "Ума-ума-ума...", weights: { [CharacterId.UMA]: 3 } },
            { id: "q12_b", text: "Жестокий эльф с огромной булавой.", weights: { [CharacterId.IMLERITH]: 3, [CharacterId.EREDIN]: 1 } },
            { id: "q12_c", text: "Король кошмаров в скелетоподобной броне.", weights: { [CharacterId.EREDIN]: 3, [CharacterId.IMLERITH]: 1 } },
            { id: "q12_d", text: "Загадочный эльф, рисующий бизонов.", weights: { [CharacterId.AVALLACH]: 3 } },
        ]
    },
    {
        id: "q13",
        text: "Философия конца жизни?",
        options: [
            { id: "q13_a", text: "Месть — это блюдо, которое подают холодным.", weights: { [CharacterId.RENFRI]: 3 } },
            { id: "q13_b", text: "Лучше выброситься из окна, чем сдаться.", weights: { [CharacterId.CALANTHE]: 3, [CharacterId.CIRI]: 1 } },
            { id: "q13_c", text: "АААААА!!! (Разрушить всё магией).", weights: { [CharacterId.PAVETTA]: 3, [CharacterId.CIRI]: 1 } },
            { id: "q13_d", text: "Умереть в бою с друзьями, защищая дракона.", weights: { [CharacterId.YARPEN]: 3, [CharacterId.ZOLTAN]: 1 } },
        ]
    }
];
