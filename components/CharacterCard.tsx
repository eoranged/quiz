import React from 'react';
import { QuizResult } from '../types';
import { Button } from './Button';
import { WolfMedallion } from './WolfMedallion';

interface CharacterCardProps {
    result: QuizResult;
    avatarStyle: React.CSSProperties;
    onRestart?: () => void;
    onShare?: () => void;
    className?: string;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
    result,
    avatarStyle,
    onRestart,
    onShare,
    className = ''
}) => {
    return (
        <div className={`animate-fadeIn space-y-6 text-center ${className}`}>
            <div className="relative inline-block mb-2">
                <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-bold">
                    {onRestart ? 'Твое истинное лицо' : 'Персонаж'}
                </h2>
            </div>

            <div className="flex justify-center mb-6">
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-amber-700/50 overflow-hidden shadow-[0_0_30px_rgba(180,83,9,0.3)] bg-slate-800">
                    <div
                        // scale-110 applied to crop out potential margins from image files
                        className="w-full h-full transform scale-110 hover:scale-125 transition-transform duration-700"
                        style={avatarStyle}
                        role="img"
                        aria-label={result.name}
                    >
                        {!avatarStyle.backgroundImage && (
                            <div className="w-full h-full flex items-center justify-center">
                                <WolfMedallion className="w-16 h-16 opacity-20" />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <h1 className={`text-3xl md:text-5xl font-cinzel mb-2 ${result.colorTheme}`}>
                {result.name}
            </h1>
            <p className="text-xl text-slate-400 font-serif italic mb-6">{result.title}</p>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 shadow-inner text-left mb-6">
                <p className="text-slate-300 leading-relaxed text-lg">
                    {result.description}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-700/50 text-right">
                    <span className="text-xs text-slate-500 uppercase tracking-wider">Мировоззрение: {result.alignment}</span>
                </div>
            </div>

            <blockquote className="border-l-4 border-amber-700 pl-4 italic text-slate-400 text-left my-8 bg-slate-900/50 p-4 rounded-r">
                "{result.quote}"
            </blockquote>

            {(onRestart || onShare) && (
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    {onRestart && (
                        <Button onClick={onRestart} variant="primary" className="flex-1">
                            Пройти заново
                        </Button>
                    )}
                    {onShare && (
                        <Button onClick={onShare} variant="secondary" className="flex-1">
                            Поделиться
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
};
