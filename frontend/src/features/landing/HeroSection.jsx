import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Compass, BookOpen, Heart, ArrowRight } from 'lucide-react';
import { Button } from '../../shared/components/Button';
import { RobotCompanion } from '../../shared/components/RobotCompanion';
import { useLanguage } from '../../shared/hooks/useLanguage';

export function HeroSection() {
  const { currentLang } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24">
      {/* Decorative floating clouds & blobs in background */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-sky-200/50 rounded-full blur-3xl -z-10 animate-float-slow" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-5 left-1/3 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading, description, CTA buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Child-friendly greeting pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border-2 border-purple-200 shadow-sm">
              <span className="text-xl">{currentLang.flag}</span>
              <span className="text-xs sm:text-sm font-bold text-purple-800 font-bubble">
                {currentLang.greeting}
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-bubble text-slate-900 leading-[1.15] tracking-tight">
              Learn, Play & Explore in{' '}
              <span className="bg-gradient-to-r from-sky-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Your Own Language!
              </span>
            </h1>

            {/* Child-friendly description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Welcome to <strong className="text-sky-600 font-bold">BhashaMitra AI</strong> — a magical 3D learning island designed for curious primary-school explorers. Discover maths, science, stories, and riddles in Indian vernacular languages with your friendly AI companion, Mitra!
            </p>

            {/* Strict Product Rule Highlight: 100% Free Public Exploration */}
            <div className="p-3 sm:p-4 rounded-2xl bg-sky-50/80 border border-sky-200 max-w-xl mx-auto lg:mx-0 flex items-center gap-3 text-left">
              <div className="p-2 rounded-xl bg-sky-500 text-white flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-sky-900 font-medium">
                <strong>Student-First & Safe:</strong> Explore freely without mandatory registration, classroom codes, or hidden paywalls!
              </p>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link to="/learning-world" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto text-base">
                  <Compass className="w-5 h-5 mr-1" />
                  Start Learning (3D Island)
                </Button>
              </Link>
              <Link to="/resources" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-base">
                  <BookOpen className="w-5 h-5 mr-1 text-purple-600" />
                  Explore Resources
                </Button>
              </Link>
            </div>

            {/* Trust highlights for young students */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="text-sky-500 font-bold">✓</span> 10+ Indian Languages
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-purple-500 font-bold">✓</span> Interactive 3D World
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-500 font-bold">✓</span> Safe Educational Games
              </div>
            </div>
          </motion.div>

          {/* Right Column: Friendly Robot Mitra Mascot with interactive bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Playful Floating Card backing the mascot */}
            <div className="w-full max-w-sm sm:max-w-md p-6 sm:p-8 rounded-3xl glass-card relative overflow-hidden shadow-2xl shadow-sky-200/50">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-200/50 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-sky-200/50 rounded-full blur-xl" />

              <div className="flex flex-col items-center text-center">
                <RobotCompanion
                  size="hero"
                  speech="Namaste! Click on me or tap 'Start Learning' to fly into our 3D adventure!"
                  className="flex-col items-center gap-4"
                />

                <div className="mt-6 w-full pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bubble font-semibold text-slate-500">Companion Status:</span>
                  <span className="inline-flex items-center gap-1 text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Ready to Guide
                  </span>
                </div>

                <div className="mt-3 flex gap-2 w-full">
                  <Link to="/student" className="flex-1">
                    <Button variant="purple" size="sm" className="w-full text-xs">
                      Choose Language
                    </Button>
                  </Link>
                  <Link to="/learning-world" className="flex-1">
                    <Button variant="sunshine" size="sm" className="w-full text-xs">
                      Visit Island 🏝️
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

