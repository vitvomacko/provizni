
import React from 'react';
import { Language } from '../types';

interface Props {
  current: Language;
  onToggle: (lang: Language) => void;
}

export const LanguageToggle: React.FC<Props> = ({ current, onToggle }) => {
  return (
    <div className="flex bg-slate-200 rounded-full p-1 shadow-inner">
      <button 
        onClick={() => onToggle('CZ')}
        className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${current === 'CZ' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
      >
        CZ
      </button>
      <button 
        onClick={() => onToggle('EN')}
        className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${current === 'EN' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
      >
        EN
      </button>
    </div>
  );
};
