import { QuizResult, Question } from '../types';
import { CHARACTERS } from './witcher-personality/characters';
import { QUESTIONS_DATA as WITCHER_QUESTIONS } from './witcher-personality/questions';
import { SIMPSON_CHARACTERS } from './simpson-personality/characters';
import { SIMPSON_QUESTIONS } from './simpson-personality/questions';

export interface QuizConfig {
    id: string;
    title: string;
    description: string;
    characters: Record<string, QuizResult>;
    questions: Question[];
    path: string;
}

export const QUIZZES: Record<string, QuizConfig> = {
    'witcher-personality': {
        id: 'witcher-personality',
        title: 'Ведьмак Тест',
        description: 'Узнай, кто ты из мира Ведьмака',
        characters: CHARACTERS,
        questions: WITCHER_QUESTIONS,
        path: '/witcher-personality'
    },
    'simpson-personality': {
        id: 'simpson-personality',
        title: 'Simpson Personality Quiz',
        description: 'Which Simpson character are you?',
        characters: SIMPSON_CHARACTERS,
        questions: SIMPSON_QUESTIONS,
        path: '/simpson-personality'
    }
};
