import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Compass, BookOpen, ArrowLeft, ShieldCheck, Heart, Volume2 } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { RobotCompanion } from '../../shared/components/RobotCompanion';
import { Button } from '../../shared/components/Button';
import { useLanguage } from '../../shared/hooks/useLanguage';

export function StudentEntryPage() {
  const { currentLang } = useLanguage();

  return (
    <div className="min-h-[85vh] py-8 sm:py-12 px-4 sm:px-6 relative">
      {/* Background clouds & glow */}
      <div className="absolute top-12 left-10 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Navigation back to homepage */}
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bubble font-bold text-slate-600 hover:text-sky-600 px-3 py-1.5 rounded-2xl bg-white/80 border border-slate-200 shadow-sm transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Homepage
          </Link>

          <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            No Registration Needed • 100% Free
          </div>
        </div>

        {/* Welcoming Banner with Mitra Companion */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-xl border-4 border-white">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <RobotCompanion
              size="lg"
              speech={`${currentLang.greeting} Choose your language and let's jump straight into the fun learning adventure!`}
              className="flex-col md:flex-row items-center"
            />
            
            <div className="space-y-2 flex-1">
              <span className="text-xs font-bold font-bubble px-3 py-1 rounded-full bg-purple-100 text-purple-700 border border-purple-200 inline-block">
                🌟 Student Welcome Portal
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold font-bubble text-slate-900 leading-tight">
                Welcome, Little Explorer!
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                You do not need a password, classroom code, or teacher invite here. Just pick the language you love best, and your island adventure begins immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Language Selection Interface */}
        <div className="bg-white/95 rounded-3xl p-6 sm:p-8 shadow-md border-2 border-slate-100">
          <LanguageSelector />

          {/* Active confirmation card */}
          <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-sky-50 to-purple-50 border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{currentLang.flag}</span>
              <div>
                <p className="font-bubble font-bold text-slate-800 text-sm sm:text-base">
                  Ready to learn in: <span className="text-purple-700">{currentLang.nativeName} ({currentLang.name})</span>
                </p>
                <p className="text-xs text-slate-500 font-sans">
                  All island topics, voice prompts & games will be tuned for you.
                </p>
              </div>
            </div>

            {/* Prominent CTA to Enter World */}
            <Link to="/learning-world" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto text-base shadow-lg shadow-sky-500/30">
                <Compass className="w-5 h-5 mr-1" />
                Enter 3D Island Now 🚀
              </Button>
            </Link>
          </div>
        </div>

        {/* Alternative Action: Explore Learning Resources */}
        <div className="p-6 rounded-3xl bg-white/80 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-bubble text-lg font-bold text-slate-800 flex items-center justify-center sm:justify-start gap-2">
              <BookOpen className="w-5 h-5 text-amber-500" />
              Prefer Worksheets or Storybooks?
            </h3>
            <p className="text-xs text-slate-600">
              You can also browse our public library for printable practice sheets, rhymes, and flashcards.
            </p>
          </div>

          <Link to="/resources">
            <Button variant="secondary" size="md">
              Browse Resource Library 📚
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}

