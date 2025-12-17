import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { QUIZZES } from '../data/quizzes';
import { Quiz } from './Quiz';

export const QuizLoader: React.FC = () => {
    const { type, name } = useParams<{ type: string; name: string }>();

    const targetPath = `${type}/${name}`;
    const quizConfig = Object.values(QUIZZES).find(q => q.path === targetPath);

    if (!quizConfig) {
        return <Navigate to="/" replace />;
    }

    return <Quiz config={quizConfig} />;
};
