import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Sparkles, Compass, ShieldAlert, Award, Star } from 'lucide-react';
import { GameCard } from './GameCard';
import { GamePreviewModal } from './GamePreviewModal';
import { Button } from '../../shared/components/Button';
import { RobotCompanion } from '../../shared/components/RobotCompanion';

export function GamesPage() {
  const [activePreviewGame, setActivePreviewGame] = useState(null);

  const gamesData = [
    {
      id: 'knowledge-quest',
      title: 'Knowledge Quest',
      vernacular: 'ज्ञान खोज',
      category: 'Expedition Quiz',
      icon: '🧭',
      gradient: 'from-amber-400 via-orange-500 to-amber-600',
      description: 'Journey through themed island locations answering science, environment, and general curiosity riddles in your native language.',
      skills: ['Critical Thinking', 'Vernacular Comprehension', 'Environmental Awareness']
    },
    {
      id: 'word-match',
      title: 'Word Match',
      vernacular: 'शब्द मिलान',
      category: 'Vocabulary Puzzle',
      icon: '🃏',
      gradient: 'from-sky-400 via-blue-500 to-indigo-600',
      description: 'Connect vibrant picture tiles with their native language names, spellings, and phonetic sounds to master new words.',
      skills: ['Phonics & Pronunciation', 'Visual Association', 'Mother Tongue Vocabulary']
    },
    {
      id: 'treasure-hunt',
      title: 'Treasure Hunt',
      vernacular: 'खज़ाना खोज',
      category: 'Logic & Math',
      icon: '💎',
      gradient: 'from-emerald-400 via-teal-500 to-emerald-700',
      description: 'Follow number hints, count geometric shapes, and unlock hidden treasure chests across the 3D learning world.',
      skills: ['Foundational Arithmetic', 'Pattern Recognition', 'Spatial Logic']
    }
  ];

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 relative">
      {/* Background blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header with Friendly Mitra */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-xl border-4 border-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-bubble">
                <Gamepad2 className="w-3.5 h-3.5 text-emerald-600" />
                Play & Learn Arcade
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold font-bubble text-slate-900 leading-tight">
                Educational Adventures & Games
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-sans max-w-2xl">
                Choose an adventure below! Practice numbers, vernacular vocabulary, and science riddles through playful games built specifically for primary students.
              </p>
            </div>

            <RobotCompanion
              size="md"
              speech="Pick any game to try an interactive preview demo! No login required!"
            />
          </div>
        </div>

        {/* Phase 1 Prototype Disclosure Banner (Strict Rule adherence) */}
        <div className="p-4 rounded-2xl bg-amber-50/90 border-2 border-amber-300 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-950 font-sans space-y-1">
            <strong className="font-bold">Offline Educational Prototypes Notice:</strong>
            <p>
              The games below are offline interactive prototypes demonstrating question flows, visual pairing, and vernacular clues. <strong>They are pre-scripted demonstration templates and do NOT use AI generation or backend servers in Phase 1.</strong>
            </p>
          </div>
        </div>

        {/* Games Grid (3 Games) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gamesData.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onPlayPreview={(g) => setActivePreviewGame(g)}
            />
          ))}
        </div>

        {/* Island Navigation Prompt */}
        <div className="p-6 rounded-3xl bg-white/90 border-2 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center text-2xl flex-shrink-0">
              🏝️
            </div>
            <div>
              <h3 className="font-bubble text-lg font-bold text-slate-800">
                Want to play directly on the 3D Island?
              </h3>
              <p className="text-xs text-slate-500 font-sans">
                Each game has a dedicated landmark on BhashaMitra Island with 3D markers and audio clues.
              </p>
            </div>
          </div>

          <Link to="/learning-world">
            <Button variant="primary" size="md">
              <Compass className="w-4 h-4 mr-1" />
              Visit 3D World
            </Button>
          </Link>
        </div>

      </div>

      {/* Game Interactive Preview Modal */}
      {activePreviewGame && (
        <GamePreviewModal
          game={activePreviewGame}
          onClose={() => setActivePreviewGame(null)}
        />
      )}
    </div>
  );
}

