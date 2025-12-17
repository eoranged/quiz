import React, { useState, useCallback, useEffect } from 'react';
import { AppState, Question, QuizResult } from '../types';
import { calculateResult, encodeAnswers, decodeAnswers, getNextQuestion } from '../services/engine';
import { Button } from './Button';
import { LoadingIndicator } from './LoadingIndicator';
import { CharacterCard } from './CharacterCard';
import { QuizConfig } from '../types';
import { useNavigate } from 'react-router-dom';

// Helper to load avatar images dynamically
// @ts-ignore
const avatarModules: Record<string, string> = import.meta.glob('../data/witcher-personality/avatars/*.png', { eager: true, import: 'default' });

interface QuizProps {
    config: QuizConfig;
}

export const Quiz: React.FC<QuizProps> = ({ config }) => {
    const [gameState, setGameState] = useState<AppState>(AppState.START);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [result, setResult] = useState<QuizResult | null>(null);

    // Sharing state
    const [showShareModal, setShowShareModal] = useState(false);
    const [copied, setCopied] = useState(false);

    const navigate = useNavigate();

    // Check URL hash on mount to restore shared result
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash.startsWith('#result-')) {
                const code = hash.replace('#result-', '');
                const decodedAnswers = decodeAnswers(code);
                if (decodedAnswers) {
                    const analysis = calculateResult(decodedAnswers, config.questions, config.characters, config.engineConfig);
                    setResult(analysis);
                    setGameState(AppState.RESULT);
                    setAnswers(decodedAnswers);
                }
            }
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [config]);

    const startGame = useCallback(() => {
        // Start with the first adaptive question
        const firstQuestion = getNextQuestion({}, config.questions, config.engineConfig);
        if (firstQuestion) {
            setQuestions([firstQuestion]);
            setAnswers({});
            setCurrentQuestionIndex(0);
            setGameState(AppState.PLAYING);
            // Clear hash when starting a new game
            // In a router context, we might not want to mess with history state directly if not needed, 
            // but here we are cleaning up the hash
            if (window.location.hash) {
                navigate(window.location.pathname, { replace: true });
            }
        }
    }, [config, navigate]);

    const handleBack = useCallback(() => {
        if (currentQuestionIndex > 0) {
            // Go back to previous question
            setCurrentQuestionIndex(prev => prev - 1);

            // Remove the answer for the current question (the one we are leaving)
            // But we keep the answer for the previous question so it can be pre-selected if we want (though logic below handles selection state via `answers`)

            // Actually, we might want to pop the last question from `questions` array if we want to truly "rewind" the adaptive path.
            // But since `questions` history is preserved, we just move `currentQuestionIndex` back.
            // However, if the user changes the answer, the subsequent path might change.
            // For now, let's just decrement index. If they answer differently, we slice the array.
        } else {
            // If at first question, go back to splash screen
            setGameState(AppState.START);
            setAnswers({});
            setQuestions([]);
        }
    }, [currentQuestionIndex]);

    const handleAnswer = useCallback((optionId: string) => {
        const currentQ = questions[currentQuestionIndex];
        const newAnswers = { ...answers, [currentQ.id]: optionId };

        // If we are re-answering a previous question, we must discard all future questions/answers
        // because the adaptive path might change.
        if (currentQuestionIndex < questions.length - 1) {
            setQuestions(prev => prev.slice(0, currentQuestionIndex + 1));
            // We also need to clean up answers for the discarded questions
            // but `newAnswers` will be set fresh below, so we just need to filter `answers` if we strictly wanted to clean up.
            // However, simply overwriting `answers` state with `newAnswers` (which adds the current one) is fine, 
            // as long as we treat the quiz "state" as valid up to `currentQuestionIndex`.
            // Let's actually clean up `answers` to be safe.

            // Actually simplest way: just take the answers up to current index + new one
            // Detailed cleanup is hard without order. But effectively, if we slice questions, subsequent `handleAnswer` calls will rebuild properly.
        }

        setAnswers(newAnswers);

        // Get next question based on current answers
        const nextQuestion = getNextQuestion(newAnswers, config.questions, config.engineConfig);
        const MAX_QUESTIONS = config.engineConfig?.maxQuestions || 8;

        if (nextQuestion && (currentQuestionIndex + 1) < MAX_QUESTIONS) {
            setQuestions(prev => {
                // If we are simply proceeding, append. 
                // If we re-answered (sliced above), this appends to the new end.
                const nextDocs = [...prev];
                // Ensure we don't have duplicates if React strict mode double-invokes or similar
                if (nextDocs.length > currentQuestionIndex + 1) {
                    nextDocs[currentQuestionIndex + 1] = nextQuestion;
                    return nextDocs.slice(0, currentQuestionIndex + 2);
                }
                return [...nextDocs, nextQuestion];
            });
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            // Quiz finished
            const analysis = calculateResult(newAnswers, config.questions, config.characters, config.engineConfig);

            // Log user flow for reproduction
            const flow = questions.map(q => ({
                qid: q.id,
                aid: newAnswers[q.id]
            }));
            console.log("📜 User Flow:", JSON.stringify(flow));

            setResult(analysis);
            setGameState(AppState.RESULT);

            // Silent statistics report
            try {
                const params = new URLSearchParams();
                params.append('id', config.path); // path is like "personality/witcher"
                params.append('result', analysis.id);
                params.append('user_flow', JSON.stringify(flow));

                // Fire and forget
                fetch(`/_tools/quiz/result?${params.toString()}`, { method: 'GET', keepalive: true }).catch(() => { });
            } catch (e) {
                // Ignore
            }

            // Update URL with encoded result
            const code = encodeAnswers(newAnswers);
            window.location.hash = `result-${code}`;
        }
    }, [answers, currentQuestionIndex, questions, config]);

    const restartGame = useCallback(() => {
        setGameState(AppState.START);
        setResult(null);
        setQuestions([]);
        setAnswers({});
        if (window.location.hash) {
            navigate(window.location.pathname, { replace: true });
        }
    }, [navigate]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const getAvatarStyle = (characterId: string) => {
        // Match by filename containing ID (robust since we renamed avatars to match IDs)
        // e.g. 'geralt' matches '.../geralt.png'
        const matchedKey = Object.keys(avatarModules).find(path => {
            const filename = path.split('/').pop()?.toLowerCase();
            return filename?.includes(characterId.toLowerCase());
        });

        const imageUrl = matchedKey ? avatarModules[matchedKey] : null;

        if (!imageUrl) {
            return {
                backgroundColor: '#1e293b' // slate-800
            };
        }

        return {
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        };
    };

    return (
        <div className="min-h-screen bg-slate-950 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] text-slate-200 flex flex-col items-center justify-center p-4 selection:bg-amber-900 selection:text-white transition-colors duration-1000">

            <div className="max-w-2xl w-full bg-slate-900/90 border border-slate-700 shadow-2xl rounded-xl overflow-hidden backdrop-blur-sm relative transition-all duration-500">
                {/* Border Decor */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent opacity-70"></div>

                <main className="p-6 md:p-12 min-h-[500px] flex flex-col justify-center relative">

                    {/* STATE: START */}
                    {gameState === AppState.START && (
                        <div className="text-center space-y-8 animate-fadeIn">
                            <div className="flex justify-center mb-6">
                                <LoadingIndicator className="w-32 h-32 float-anim" variant={config.id.includes('simpson') ? 'donut' : 'wolf'} />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-cinzel text-amber-500 mb-2 drop-shadow-md">
                                    {config.title}
                                </h1>
                                <p className="text-slate-400 text-lg italic font-serif">
                                    {config.description}
                                </p>
                            </div>
                            <Button onClick={startGame} className="mx-auto w-full md:w-auto text-xl px-12 py-4 mt-8">
                                Начать
                            </Button>
                        </div>
                    )}

                    {/* STATE: PLAYING */}
                    {gameState === AppState.PLAYING && questions.length > 0 && (
                        <div className="space-y-8 animate-fadeIn">
                            <div className="flex justify-between items-end border-b border-slate-700 pb-4">
                                <span className="text-amber-600 font-cinzel font-bold">Вопрос {currentQuestionIndex + 1} / {questions.length < 8 ? "..." : 8}</span>
                                <LoadingIndicator className="w-8 h-8 opacity-50" variant={config.id.includes('simpson') ? 'donut' : 'wolf'} />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-serif leading-snug text-slate-100 min-h-[3rem]">
                                {questions[currentQuestionIndex].text}
                            </h3>

                            <div className="grid gap-4 mt-8">
                                {questions[currentQuestionIndex].options.map((option, idx) => (
                                    <Button
                                        key={option.id}
                                        variant="option"
                                        onClick={() => handleAnswer(option.id)}
                                        style={{ animationDelay: `${idx * 100}ms` }}
                                        className="animate-[fadeIn_0.5s_ease-out_both]"
                                    >
                                        <span className="w-8 h-8 rounded-full border border-slate-500 flex items-center justify-center mr-4 text-xs text-slate-500 group-hover:border-amber-500 group-hover:text-amber-500 transition-colors shrink-0">
                                            {String.fromCharCode(65 + idx)}
                                        </span>
                                        {option.text}
                                    </Button>
                                ))}
                            </div>

                            {/* Back Button */}
                            <div className="flex justify-start mt-6 pt-4 border-t border-slate-700/50">
                                <button
                                    onClick={handleBack}
                                    className="text-slate-500 hover:text-amber-500 transition-colors text-sm uppercase tracking-wider font-bold flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-800/50"
                                >
                                    <span>←</span> Назад
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STATE: RESULT */}
                    {gameState === AppState.RESULT && result && (
                        <CharacterCard
                            result={result}
                            avatarStyle={getAvatarStyle(result.id)}
                            onRestart={restartGame}
                            onShare={() => setShowShareModal(true)}
                        />
                    )}

                </main>
            </div>

            {/* Share Modal */}
            {showShareModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn" onClick={() => setShowShareModal(false)}>
                    <div className="bg-slate-900 border border-amber-700/50 p-6 rounded-xl shadow-2xl max-w-md w-full" onClick={e => e.stopPropagation()}>
                        <h3 className="text-xl font-cinzel text-amber-500 mb-4 text-center">Поделиться результатом</h3>
                        <div className="flex gap-2 mb-6">
                            <input
                                type="text"
                                readOnly
                                value={window.location.href}
                                className="flex-1 bg-slate-950 border border-slate-700 rounded p-2 text-slate-300 text-sm focus:border-amber-500 outline-none truncate"
                                onClick={e => e.currentTarget.select()}
                            />
                            <Button variant="primary" onClick={copyToClipboard} className="py-2 px-4 text-xs">
                                {copied ? 'Скопировано!' : 'Копировать'}
                            </Button>
                        </div>
                        <div className="flex justify-end">
                            <button onClick={() => setShowShareModal(false)} className="text-slate-500 hover:text-slate-300 transition-colors text-sm uppercase tracking-wider font-bold">Закрыть</button>
                        </div>
                    </div>
                </div>
            )}

            <footer className="mt-8 text-slate-600 text-sm text-center">
                <p className="text-xs mt-1 opacity-50">Неофициальный фанатский проект</p>
            </footer>
        </div>
    );
};
