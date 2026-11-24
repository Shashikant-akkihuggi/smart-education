import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, ArrowRight, Trophy, Sparkles, HelpCircle } from 'lucide-react';
import { Card } from '../../shared/components/Card';
import { Button } from '../../shared/components/Button';

export function GamesIntroSection() {
  const games = [
    {
      id: 'knowledge-quest',
      title: 'Knowledge Quest',
      vernacular: 'ज्ञान खोज',
      desc: 'Embark on an expedition solving concept puzzles, animal riddles, and nature challenges.',
      emoji: '🧭',
      accent: 'from-amber-400 to-orange-500',
      badge: 'Adventure Quiz'
    },
    {
      id: 'word-match',
      title: 'Word Match',
      vernacular: 'शब्द मिलान',
      desc: 'Pair colourful picture cards with their vernacular names, sounds, and phonics.',
      emoji: '🃏',
      accent: 'from-sky-400 to-blue-600',
      badge: 'Vocabulary'
    },
    {
      id: 'treasure-hunt',
      title: 'Treasure Hunt',
      vernacular: 'खज़ाना खोज',
      desc: 'Unearth secret knowledge gems hidden across the 3D island through maths & logic clues.',
      emoji: '💎',
      accent: 'from-emerald-400 to-teal-600',
      badge: 'Logic & Math'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-transparent via-purple-50/40 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-bubble mb-2">
              <Gamepad2 className="w-3.5 h-3.5 text-emerald-600" />
              Game-Based Learning
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-bubble text-slate-900">
              Learning Disguised as Pure Joy!
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Turn practice into play! Earn discovery stars while mastering foundational primary school concepts.
            </p>
          </div>

          <Link to="/games">
            <Button variant="secondary" size="md">
              <span>View All 3 Games</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>

        {/* Game Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {games.map((game) => (
            <Card key={game.id} className="relative overflow-hidden flex flex-col justify-between group">
              <div>
                {/* Visual Header */}
                <div className={`h-36 -mx-6 -mt-6 p-6 bg-gradient-to-tr ${game.accent} flex items-center justify-between text-white relative`}>
                  <span className="text-5xl filter drop-shadow-lg transform group-hover:scale-110 transition-transform">
                    {game.emoji}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                    {game.badge}
                  </span>
                </div>

                <div className="pt-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bubble text-xl font-bold text-slate-900">
                      {game.title}
                    </h3>
                    <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                      {game.vernacular}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {game.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <Link to="/games" className="block">
                  <Button variant="primary" size="sm" className="w-full text-xs">
                    Try Game Demo 🎮
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

