import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QUIZZES } from '../data/quizzes';
import { Button } from './Button';
import { LoadingIndicator } from './LoadingIndicator';

export const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-950 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] text-slate-200 flex flex-col items-center justify-center p-4">
            <div className="max-w-4xl w-full">
                <header className="text-center mb-12 animate-fadeIn">
                    <h1 className="text-4xl md:text-6xl font-cinzel text-amber-500 mb-4 drop-shadow-md">
                        Personality Quizzes
                    </h1>
                    <p className="text-slate-400 text-xl font-serif">
                        Discover your true self across multiverses
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.values(QUIZZES).map(quiz => (
                        <div key={quiz.id} className="bg-slate-900/80 border border-slate-700 hover:border-amber-600 transition-all rounded-xl p-8 flex flex-col items-center text-center group cursor-pointer" onClick={() => navigate(quiz.path)}>
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                                <LoadingIndicator
                                    variant={quiz.id.includes('simpson') ? 'donut' : 'wolf'}
                                    className="w-24 h-24"
                                />
                            </div>
                            <h2 className="text-2xl font-cinzel text-slate-100 mb-2 group-hover:text-amber-500 transition-colors">
                                {quiz.title}
                            </h2>
                            <p className="text-slate-400 mb-6 flex-grow">
                                {quiz.description}
                            </p>
                            <Button onClick={(e) => { e.stopPropagation(); navigate(quiz.path); }} className="w-full">
                                Start Quiz
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
