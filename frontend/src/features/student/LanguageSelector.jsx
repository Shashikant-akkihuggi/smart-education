import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Volume2 } from 'lucide-react';
import { useLanguage } from '../../shared/hooks/useLanguage';

export function LanguageSelector({ onSelect }) {
  const { currentLang, changeLanguage, allLanguages } = useLanguage();

  const handleSelect = (code) => {
    changeLanguage(code);
    if (onSelect) onSelect(code);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="font-bubble text-lg font-bold text-slate-800 flex items-center gap-2">
          <span>Choose Your Learning Tongue</span>
          <span className="text-xs font-normal text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full">
            10 Vernacular Options
          </span>
        </label>
        <span className="text-xs text-slate-500">Tap any language</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {allLanguages.map((lang) => {
          const isSelected = currentLang.code === lang.code;
          return (
            <motion.button
              key={lang.code}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect(lang.code)}
              className={`p-4 rounded-3xl text-left border-3 transition-all relative flex flex-col justify-between h-32 ${
                isSelected
                  ? 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white border-purple-400 shadow-xl shadow-purple-500/25 ring-4 ring-purple-200'
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800 hover:border-purple-300 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-3xl">{lang.flag}</span>
                {isSelected ? (
                  <CheckCircle2 className="w-5 h-5 text-white" />
                ) : (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">
                    {lang.badge}
                  </span>
                )}
              </div>

              <div>
                <p className="font-bubble text-lg font-bold leading-tight">
                  {lang.nativeName}
                </p>
                <p className={`text-xs ${isSelected ? 'text-purple-100' : 'text-slate-500'}`}>
                  {lang.name}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

