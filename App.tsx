import React, { useState, useCallback, useEffect } from 'react';
import { AppState, Question, QuizResult, CharacterId } from './types';
import { getQuestions, calculateResult, encodeAnswers, decodeAnswers } from './services/geminiService';
import { Button } from './components/Button';
import { WolfMedallion } from './components/WolfMedallion';
import { CharacterCard } from './components/CharacterCard';
import { CHARACTERS } from './data/characters';

// Load all avatar images from the avatars directory
// Using Vite's import.meta.glob to load assets dynamically
// @ts-ignore
const avatarModules: Record<string, string> = import.meta.glob('./avatars/*.png', { eager: true, import: 'default' });

const App: React.FC = () => {
  const [gameState, setGameState] = useState<AppState>(AppState.START);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<QuizResult | null>(null);

  // Sharing state
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Check URL hash on mount to restore shared result
  // Check URL hash on mount to restore shared result or enable dev view
  const [isDevView, setIsDevView] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#dev-view-all-characters') {
        setIsDevView(true);
        return;
      }

      setIsDevView(false);
      if (hash.startsWith('#result-')) {
        const code = hash.replace('#result-', '');
        const decodedAnswers = decodeAnswers(code);
        if (decodedAnswers) {
          const analysis = calculateResult(decodedAnswers);
          setResult(analysis);
          setGameState(AppState.RESULT);
          setAnswers(decodedAnswers);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const startGame = useCallback(() => {
    const q = getQuestions();
    setQuestions(q);
    setAnswers({});
    setCurrentQuestionIndex(0);
    setGameState(AppState.PLAYING);
    // Clear hash when starting a new game
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }, []);

  const handleAnswer = useCallback((optionId: string) => {
    const currentQ = questions[currentQuestionIndex];
    const newAnswers = { ...answers, [currentQ.id]: optionId };
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Quiz finished
      const analysis = calculateResult(newAnswers);
      setResult(analysis);
      setGameState(AppState.RESULT);

      // Update URL with encoded result
      const code = encodeAnswers(newAnswers);
      window.location.hash = `result-${code}`;
    }
  }, [answers, currentQuestionIndex, questions]);

  const restartGame = useCallback(() => {
    setGameState(AppState.START);
    setResult(null);
    setQuestions([]);
    setAnswers({});
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Helper to calculate style for character avatar from individual files
  const getAvatarStyle = (characterId: CharacterId) => {
    const allIds = Object.values(CharacterId);
    const index = allIds.indexOf(characterId);

    if (index === -1) return {};

    const paddedIndex = String(index).padStart(2, '0');

    // Robust lookup: try to find a key in loaded modules that ends with the expected filename.
    // This handles path differences and allows for both "avatar00.png" and "avatars00.png" naming.
    const expectedNames = [
      `avatar${paddedIndex}.png`,
      `avatars${paddedIndex}.png`
    ];

    const matchedKey = Object.keys(avatarModules).find(path =>
      expectedNames.some(name => path.endsWith(name))
    );

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

          {/* STATE: DEV VIEW */}
          {isDevView && (
            <div className="animate-fadeIn space-y-12">
              <div className="text-center mb-12">
                <h1 className="text-3xl font-cinzel text-amber-500">Все Персонажи</h1>
                <p className="text-slate-400">Режим разработчика</p>
              </div>
              <div className="grid grid-cols-1 gap-16">
                {Object.values(CHARACTERS).map(char => (
                  <div key={char.id} className="border-b border-slate-700 pb-12 last:border-0">
                    <CharacterCard
                      result={char}
                      avatarStyle={getAvatarStyle(char.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STATE: START */}
          {!isDevView && gameState === AppState.START && (
            <div className="text-center space-y-8 animate-fadeIn">
              <div className="flex justify-center mb-6">
                <WolfMedallion className="w-32 h-32 float-anim" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-cinzel text-amber-500 mb-2 drop-shadow-md">
                  Тест: Ведьмак
                </h1>
                <p className="text-slate-400 text-lg italic font-serif">
                  Узнай, кто ты: герой, бард или... лошадь?
                </p>
              </div>
              <p className="text-slate-300 leading-relaxed max-w-md mx-auto">
                Ответь на 13 забавных вопросов о жизни в мире монстров и магии. Никакой регистрации, только чистое Предназначение.
              </p>
              <Button onClick={startGame} className="mx-auto w-full md:w-auto text-xl px-12 py-4 mt-8">
                Начать Путь
              </Button>
            </div>
          )}

          {/* STATE: PLAYING */}
          {!isDevView && gameState === AppState.PLAYING && questions.length > 0 && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex justify-between items-end border-b border-slate-700 pb-4">
                <span className="text-amber-600 font-cinzel font-bold">Вопрос {currentQuestionIndex + 1} / {questions.length}</span>
                <WolfMedallion className="w-8 h-8 opacity-50" />
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
            </div>
          )}

          {/* STATE: RESULT */}
          {!isDevView && gameState === AppState.RESULT && result && (
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
            <p className="text-slate-400 mb-4 text-center text-sm">Скопируйте ссылку, чтобы показать друзьям, кто вы из Ведьмака:</p>
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

export default App;
