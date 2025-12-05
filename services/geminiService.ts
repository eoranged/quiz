import { CharacterId, Question, QuizResult } from "../types";
import { CHARACTERS } from "../data/characters";

// Map questions to cover 52 characters. 
// We need ~13 questions with 4 options each = 52 outcomes.
const QUESTIONS_DATA: Question[] = [
    {
        id: "q1",
        text: "Твой идеальный пятничный вечер?",
        options: [
            { id: "q1_a", text: "Медитация и чистка меча.", targetCharacter: CharacterId.GERALT },
            { id: "q1_b", text: "Роскошный ужин и ванна с лепестками.", targetCharacter: CharacterId.YENNEFER },
            { id: "q1_c", text: "Пьянка в корчме и песни до утра!", targetCharacter: CharacterId.JASKIER },
            { id: "q1_d", text: "Пожевать овес на крыше сарая.", targetCharacter: CharacterId.ROACH },
        ]
    },
    {
        id: "q2",
        text: "Как ты реагируешь на смертельную опасность?",
        options: [
            { id: "q2_a", text: "Телепортируюсь, я особенный!", targetCharacter: CharacterId.CIRI },
            { id: "q2_b", text: "Пытаюсь договориться, а потом сжигаю всех.", targetCharacter: CharacterId.TRISS },
            { id: "q2_c", text: "Ворчу, что раньше монстры были слабее.", targetCharacter: CharacterId.VESEMIR },
            { id: "q2_d", text: "Достаю топор и зову парней!", targetCharacter: CharacterId.ZOLTAN },
        ]
    },
    {
        id: "q3",
        text: "Твое отношение к выпивке?",
        options: [
            { id: "q3_a", text: "Я не пью. Только мандрагоровый дистиллят.", targetCharacter: CharacterId.REGIS },
            { id: "q3_b", text: "Наливай, хер моржовый!", targetCharacter: CharacterId.LAMBERT },
            { id: "q3_c", text: "Пью тихо, спокойно, с козой.", targetCharacter: CharacterId.ESKEL },
            { id: "q3_d", text: "Предпочитаю шампанское в ванне.", targetCharacter: CharacterId.KEIRA },
        ]
    },
    {
        id: "q4",
        text: "Выбери свою политическую позицию.",
        options: [
            { id: "q4_a", text: "Я знаю все секреты и правлю из тени.", targetCharacter: CharacterId.DIJKSTRA },
            { id: "q4_b", text: "Захватить Север (ради их же блага).", targetCharacter: CharacterId.EMHYR },
            { id: "q4_c", text: "Свободная Темерия или смерть!", targetCharacter: CharacterId.ROCHE },
            { id: "q4_d", text: "Смерть Dh'oine, да здравствуют белки!", targetCharacter: CharacterId.IORVETH },
        ]
    },
    {
        id: "q5",
        text: "Какая сила тебе ближе?",
        options: [
            { id: "q5_a", text: "Управление временем и душами.", targetCharacter: CharacterId.GAUNTER },
            { id: "q5_b", text: "Медицина и человечность.", targetCharacter: CharacterId.SHANI },
            { id: "q5_c", text: "Полиморфия и шпионаж.", targetCharacter: CharacterId.PHILIPPA },
            { id: "q5_d", text: "Сжигать врагов в пепел ради амбиций.", targetCharacter: CharacterId.VILGEFORTZ },
        ]
    },
    {
        id: "q6",
        text: "Что тебя больше всего бесит?",
        options: [
            { id: "q6_a", text: "Когда меня называют Нильфгаардцем!", targetCharacter: CharacterId.CAHIR },
            { id: "q6_b", text: "Нытики и болтуны в лесу.", targetCharacter: CharacterId.MILVA },
            { id: "q6_c", text: "Когда тетушка не наливает.", targetCharacter: CharacterId.ANGOULEME },
            { id: "q6_d", text: "Когда ведьмаки не показывают стиль крысы.", targetCharacter: CharacterId.BONHART },
        ]
    },
    {
        id: "q7",
        text: "Выбери свою роль в магической ложе.",
        options: [
            { id: "q7_a", text: "Имперская чародейка, люблю книги.", targetCharacter: CharacterId.FRINGILLA },
            { id: "q7_b", text: "Ректор школы, люблю своих учениц.", targetCharacter: CharacterId.MARGARITA },
            { id: "q7_c", text: "Отшельница, люблю астрологию.", targetCharacter: CharacterId.SHEALA },
            { id: "q7_d", text: "Строгая наставница, люблю порядок.", targetCharacter: CharacterId.TISSAIA },
        ]
    },
    {
        id: "q8",
        text: "Твой стиль жизни?",
        options: [
            { id: "q8_a", text: "Я меняю маски каждый день.", targetCharacter: CharacterId.DUDU },
            { id: "q8_b", text: "Я пою баллады о любви.", targetCharacter: CharacterId.PRISCILLA },
            { id: "q8_c", text: "Я убиваю тех, кто предал мою любовь.", targetCharacter: CharacterId.DETTLAFF },
            { id: "q8_d", text: "Я манипулирую рыцарями ради мести.", targetCharacter: CharacterId.SYANNA },
        ]
    },
    {
        id: "q9",
        text: "Как ты проводишь досуг?",
        options: [
            { id: "q9_a", text: "Правлю винным краем и дегустирую.", targetCharacter: CharacterId.ANNA_HENRIETTA },
            { id: "q9_b", text: "Ищу острых ощущений, ведь я бессмертен.", targetCharacter: CharacterId.OLGIERD },
            { id: "q9_c", text: "Тусуюсь на свадьбах (будучи призраком).", targetCharacter: CharacterId.VLODIMIR },
            { id: "q9_d", text: "Ору, пирую и дерусь на кулаках!", targetCharacter: CharacterId.CRACH },
        ]
    },
    {
        id: "q10",
        text: "Как получить корону?",
        options: [
            { id: "q10_a", text: "Через мудрость и заботу о народе.", targetCharacter: CharacterId.CERYS },
            { id: "q10_b", text: "Убить ледяного великана!", targetCharacter: CharacterId.HJALMAR },
            { id: "q10_c", text: "Слушать духов леса и давать советы.", targetCharacter: CharacterId.MOUSESACK },
            { id: "q10_d", text: "Ослепить врагов и играть в шахматы.", targetCharacter: CharacterId.RADOVID },
        ]
    },
    {
        id: "q11",
        text: "Твое любимое оружие/инструмент?",
        options: [
            { id: "q11_a", text: "Харизма и незаконнорожденные дети.", targetCharacter: CharacterId.FOLTEST },
            { id: "q11_b", text: "Огромные мускулы и яды.", targetCharacter: CharacterId.LETHO },
            { id: "q11_c", text: "Арбалет и глубокое декольте.", targetCharacter: CharacterId.VES },
            { id: "q11_d", text: "Отборный мат и монокль.", targetCharacter: CharacterId.THALER },
        ]
    },
    {
        id: "q12",
        text: "Кто ты в душе?",
        options: [
            { id: "q12_a", text: "Ума-ума-ума...", targetCharacter: CharacterId.UMA },
            { id: "q12_b", text: "Жестокий эльф с огромной булавой.", targetCharacter: CharacterId.IMLERITH },
            { id: "q12_c", text: "Король кошмаров в скелетоподобной броне.", targetCharacter: CharacterId.EREDIN },
            { id: "q12_d", text: "Загадочный эльф, рисующий бизонов.", targetCharacter: CharacterId.AVALLACH },
        ]
    },
    {
        id: "q13",
        text: "Философия конца жизни?",
        options: [
            { id: "q13_a", text: "Месть — это блюдо, которое подают холодным.", targetCharacter: CharacterId.RENFRI },
            { id: "q13_b", text: "Лучше выброситься из окна, чем сдаться.", targetCharacter: CharacterId.CALANTHE },
            { id: "q13_c", text: "АААААА!!! (Разрушить всё магией).", targetCharacter: CharacterId.PAVETTA },
            { id: "q13_d", text: "Умереть в бою с друзьями, защищая дракона.", targetCharacter: CharacterId.YARPEN },
        ]
    }
];

export const getQuestions = (): Question[] => {
    return QUESTIONS_DATA.map(q => ({
        ...q,
        options: [...q.options].sort(() => Math.random() - 0.5)
    }));
};

export const calculateResult = (answers: Record<string, string>): QuizResult => {
    const scores: Partial<Record<CharacterId, number>> = {};

    Object.values(CharacterId).forEach(id => {
        scores[id] = 0;
    });

    QUESTIONS_DATA.forEach(question => {
        const selectedOptionId = answers[question.id];
        const option = question.options.find(o => o.id === selectedOptionId);
        if (option) {
            scores[option.targetCharacter] = (scores[option.targetCharacter] || 0) + 1;
        }
    });

    let maxScore = -1;
    let winner = CharacterId.GERALT;

    const ids = Object.keys(scores) as CharacterId[];
    // Sort deterministically to ensure consistent tie-breaking
    const sortedIds = ids.sort();

    sortedIds.forEach(charId => {
        const score = scores[charId] || 0;
        if (score > maxScore) {
            maxScore = score;
            winner = charId;
        }
    });

    return CHARACTERS[winner] || CHARACTERS[CharacterId.GERALT];
};

export const encodeAnswers = (answers: Record<string, string>): string => {
    const chars = QUESTIONS_DATA.map(q => {
        const answerId = answers[q.id];
        // answerId format is "qX_y", we want "y" (last char)
        return answerId ? answerId.split('_').pop() : '-';
    }).join('');

    try {
        return btoa(chars);
    } catch (e) {
        console.error("Failed to encode answers", e);
        return "";
    }
};

export const decodeAnswers = (code: string): Record<string, string> | null => {
    if (!code) return null;

    let decoded = "";
    try {
        decoded = atob(code);
    } catch (e) {
        console.error("Failed to decode answers", e);
        return null;
    }

    if (decoded.length !== QUESTIONS_DATA.length) return null;

    const answers: Record<string, string> = {};

    // Validate characters (a,b,c,d)
    if (!/^[abcd-]+$/.test(decoded)) return null;

    for (let i = 0; i < QUESTIONS_DATA.length; i++) {
        const char = decoded[i];
        if (char === '-') continue;

        const qId = QUESTIONS_DATA[i].id;
        answers[qId] = `${qId}_${char}`;
    }
    return answers;
};

// Deprecated functions
export const generateQuizQuestions = async (): Promise<Question[]> => { return []; };
export const analyzeQuizResult = async (): Promise<QuizResult> => { return CHARACTERS[CharacterId.GERALT]; };
