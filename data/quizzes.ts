import { QuizConfig, Trait } from '../types';
import { CHARACTERS } from './witcher-personality/characters';
import { QUESTIONS_DATA as WITCHER_QUESTIONS } from './witcher-personality/questions';
import { SIMPSON_CHARACTERS } from './simpson-personality/characters';
import { SIMPSON_QUESTIONS } from './simpson-personality/questions';

export const QUIZZES: Record<string, QuizConfig> = {
    'witcher-personality': {
        id: 'witcher-personality',
        title: 'Ведьмак Тест',
        description: 'Узнай, кто ты из мира Ведьмака',
        characters: CHARACTERS,
        questions: WITCHER_QUESTIONS,
        path: 'personality/witcher',
        engineConfig: {
            maxQuestions: 8,
            baseBoostFactor: 0.25,
            duplicateCheck: true,
            clusterRules: [
                {
                    tag: "cluster_bard",
                    conditions: [
                        { trait: Trait.EXTROVERSION, operator: '>', threshold: 600 }
                    ],
                    combineWith: 'OR'
                },
                {
                    tag: "cluster_bard",
                    conditions: [
                        { trait: Trait.IMPULSIVENESS, operator: '>', threshold: 600 }
                    ],
                    combineWith: 'OR'
                },
                {
                    tag: "cluster_ruler",
                    conditions: [
                        { trait: Trait.AMBITION, operator: '>', threshold: 600 },
                        { trait: Trait.ORDER, operator: '>', threshold: 550 }
                    ],
                    combineWith: 'AND'
                },
                {
                    tag: "cluster_rebel",
                    conditions: [
                        { trait: Trait.CYNICISM, operator: '>', threshold: 600 },
                        { trait: Trait.EMPATHY, operator: '<', threshold: 450 }
                    ],
                    combineWith: 'AND'
                },
                {
                    tag: "cluster_mentor",
                    conditions: [
                        { trait: Trait.INTELLECT, operator: '>', threshold: 600 },
                        { trait: Trait.ORDER, operator: '>', threshold: 500 }
                    ],
                    combineWith: 'AND'
                }
            ]
        }
    },
    'simpson-personality': {
        id: 'simpson-personality',
        title: 'Simpson Personality Quiz',
        description: 'Which Simpson character are you?',
        characters: SIMPSON_CHARACTERS,
        questions: SIMPSON_QUESTIONS,
        path: 'personality/simpsons'
    }
};
