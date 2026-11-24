import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Eye, ArrowRight, Layers, MapPin } from 'lucide-react';
import { Button } from '../../shared/components/Button';
import { LEARNING_ZONES } from '../../core/config';

export function WorldPreviewSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-transparent via-sky-100/40 to-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold font-bubble">
            <Compass className="w-3.5 h-3.5 text-sky-600" />
            3D Learning Adventure Island
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-bubble text-slate-900">
            A Floating Educational Universe Awaits!
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans">
            Step away from dull text pages! Explore a colorful 3D floating island where every hill, tree, and observatory represents a learning milestone.
          </p>
        </div>

        {/* 3D Island Preview Interactive Banner */}
        <div className="relative rounded-3xl overflow-hidden glass-card p-4 sm:p-8 shadow-2xl border-4 border-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual 3D Preview Window */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-gradient-to-b from-sky-400 via-sky-300 to-indigo-300 flex items-center justify-center p-4 shadow-inner group">
              {/* Sun & Clouds */}
              <div className="absolute top-6 right-8 w-16 h-16 rounded-full bg-yellow-300 shadow-[0_0_40px_rgba(253,224,71,0.8)] animate-pulse" />
              <div className="absolute top-10 left-8 px-4 py-2 bg-white/80 rounded-full text-xs font-bold text-sky-700 shadow-sm animate-float">
                ☁️ Floating Island Sanctuary
              </div>
              
              {/* Island illustration graphic representation */}
              <div className="relative z-10 flex flex-col items-center text-center transform group-hover:scale-105 transition-transform duration-500">
                <div className="w-48 h-32 sm:w-64 sm:h-44 relative">
                  {/* Floating island base */}
                  <div className="w-full h-full bg-gradient-to-b from-emerald-400 via-emerald-600 to-amber-900 rounded-[50%] shadow-2xl border-b-8 border-amber-950 flex flex-col items-center justify-center relative">
                    {/* Buildings & markers */}
                    <div className="absolute -top-6 left-6 text-2xl animate-bounce">🏛️</div>
                    <div className="absolute -top-8 right-8 text-3xl animate-bounce delay-150">🔭</div>
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-2xl">📚</div>
                    <div className="text-white font-bubble text-sm sm:text-base font-bold bg-slate-900/40 px-3 py-1 rounded-full backdrop-blur-sm">
                      BhashaMitra Island
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-white/90 text-slate-800 font-bold shadow-sm">
                    ✨ Realtime 3D Engine Ready
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-600 text-white font-bold shadow-sm">
                    🎮 Full 360° Exploration
                  </span>
                </div>
              </div>

              {/* Enter overlay button */}
              <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link to="/learning-world">
                  <Button variant="sunshine" size="lg" className="shadow-2xl">
                    <Eye className="w-5 h-5 mr-1" /> Jump Into 3D World
                  </Button>
                </Link>
              </div>
            </div>

            {/* Island Zones Quick Navigation Cards */}
            <div className="lg:col-span-5 space-y-3">
              <h3 className="font-bubble text-lg font-bold text-slate-800 flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-600" />
                Featured Learning Zones:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {LEARNING_ZONES.map((zone) => (
                  <Link
                    key={zone.id}
                    to="/learning-world"
                    className="p-3.5 rounded-2xl bg-white hover:bg-sky-50/80 border border-slate-200 hover:border-sky-300 transition-all flex items-center gap-3 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm"
                      style={{ backgroundColor: zone.color }}
                    >
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="font-bubble font-bold text-sm text-slate-800 truncate group-hover:text-sky-600">
                          {zone.name}
                        </p>
                      </div>
                      <p className="text-xs text-slate-500 truncate">{zone.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>

              <div className="pt-2">
                <Link to="/learning-world" className="block">
                  <Button variant="purple" size="md" className="w-full">
                    Launch Interactive 3D World 🚀
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

