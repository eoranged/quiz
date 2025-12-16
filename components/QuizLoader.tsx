import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { QUIZZES } from '../data/quizzes';
import { Quiz } from './Quiz';

export const QuizLoader: React.FC = () => {
    const { quizId } = useParams<{ quizId: string }>();

    if (!quizId || !QUIZZES[quizId]) {
        return <Navigate to="/" replace />;
    }

    const quizConfig = QUIZZES[quizId];
    return <Quiz config={quizConfig} />;
};
