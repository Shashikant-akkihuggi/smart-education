import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '../../shared/utils/languages';
import { useLanguage } from '../../shared/hooks/useLanguage';

export function VernacularSection() {
  const { currentLang, changeLanguage } = useLanguage();

  return (
    <section className="py-16 bg-white/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold font-bubble">
            <Globe className="w-3.5 h-3.5 text-purple-600" />
            Inclusive Vernacular Education
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-bubble text-slate-900">
            Every Child Thinks Best in Their Mother Tongue
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans">
            Research proves that children grasp foundational concepts 4x faster when taught in the language they speak at home. BhashaMitra removes the English-only barrier with multilingual learning modules.
          </p>
        </div>

        {/* Interactive Language Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 mb-10">
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isSelected = currentLang.code === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`p-4 rounded-2xl text-left border-2 transition-all duration-200 relative ${
                  isSelected
                    ? 'bg-purple-500 text-white border-purple-600 shadow-lg shadow-purple-500/25 scale-[1.03]'
                    : 'bg-white hover:bg-purple-50/60 border-slate-200 text-slate-800 hover:border-purple-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-2xl">{lang.flag}</span>
                  {isSelected && (
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                  )}
                </div>
                <h4 className="font-bubble font-bold text-base sm:text-lg leading-tight">
                  {lang.nativeName}
                </h4>
                <p className={`text-xs ${isSelected ? 'text-purple-100' : 'text-slate-500'}`}>
                  {lang.name}
                </p>
                <div className="mt-2 pt-2 border-t border-white/20 text-[11px] font-medium truncate">
                  "{lang.greeting.split('!')[0]}!"
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Selected Language Demonstration Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-50 via-sky-50 to-pink-50 border-2 border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-2xl">{currentLang.flag}</span>
              <h3 className="font-bubble text-xl font-bold text-slate-800">
                Currently Selected: {currentLang.nativeName} ({currentLang.name})
              </h3>
            </div>
            <p className="text-sm text-slate-600 font-sans">
              "{currentLang.greeting}" — {currentLang.subtext}
            </p>
          </div>

          <Link
            to="/student"
            className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bubble font-bold text-sm shadow-md shadow-purple-600/20 active:scale-95 transition"
          >
            Confirm & Enter Student Hub →
          </Link>
        </div>

      </div>
    </section>
  );
}

