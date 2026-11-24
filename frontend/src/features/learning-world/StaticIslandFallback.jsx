import React from 'react';
import { Compass, Sparkles, MapPin, Layers } from 'lucide-react';
import { LEARNING_ZONES } from '../../core/config';

export function StaticIslandFallback({ onSelectZone, onSelectRobot }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-sky-200 via-sky-100 to-indigo-100 relative overflow-hidden select-none">
      
      {/* Background clouds */}
      <div className="absolute top-10 left-12 px-4 py-2 bg-white/80 rounded-full text-xs font-bold text-sky-700 shadow-sm animate-float">
        ☁️ 2D Safe Fallback Mode
      </div>
      <div className="absolute top-12 right-12 px-4 py-2 bg-purple-100/90 rounded-full text-xs font-bold text-purple-800 shadow-sm">
        ✨ 100% Accessible Map
      </div>

      <div className="max-w-3xl w-full text-center space-y-4 z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-slate-700 text-xs font-bold border border-slate-200 shadow-sm">
          <Compass className="w-3.5 h-3.5 text-sky-600" />
          Interactive 2D BhashaMitra Adventure Island Map
        </div>

        {/* Visual 2D Map Container */}
        <div className="relative w-full max-w-xl mx-auto aspect-[16/10] bg-gradient-to-b from-emerald-300 via-emerald-400 to-amber-800 rounded-3xl shadow-2xl border-4 border-white p-6 flex flex-col justify-between overflow-hidden">
          
          {/* Water ring */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-sky-300/60 backdrop-blur-sm flex items-center justify-around text-xs font-bubble text-sky-900">
            <span>🌊 Calm River</span>
            <span>🌉 Wooden Crossing</span>
            <span>🌊 Clear Stream</span>
          </div>

          {/* Top Zone: Languages */}
          <div className="flex justify-center">
            <button
              onClick={() => onSelectZone(LEARNING_ZONES[2])}
              className="px-4 py-2 rounded-2xl bg-white/95 border-2 border-purple-400 text-purple-950 font-bubble text-xs sm:text-sm font-bold shadow-lg hover:scale-105 active:scale-95 transition flex items-center gap-2"
            >
              <span className="text-xl">📚</span>
              <span>{LEARNING_ZONES[2].vernacular}</span>
            </button>
          </div>

          {/* Middle Row: Math (Left) - Mitra Robot (Center) - Science (Right) */}
          <div className="flex items-center justify-between px-2">
            {/* Math */}
            <button
              onClick={() => onSelectZone(LEARNING_ZONES[0])}
              className="px-4 py-2 rounded-2xl bg-white/95 border-2 border-sky-400 text-sky-950 font-bubble text-xs sm:text-sm font-bold shadow-lg hover:scale-105 active:scale-95 transition flex items-center gap-2"
            >
              <span className="text-xl">🏛️</span>
              <span>{LEARNING_ZONES[0].vernacular}</span>
            </button>

            {/* Central Mitra Robot Avatar */}
            <button
              onClick={onSelectRobot}
              className="p-3 rounded-full bg-white border-4 border-purple-300 shadow-xl hover:scale-110 active:scale-95 transition flex flex-col items-center animate-bounce"
              title="Click to speak with Mitra"
            >
              <span className="text-3xl">🤖</span>
              <span className="text-[10px] font-bubble font-bold text-purple-700">Mitra</span>
            </button>

            {/* Science */}
            <button
              onClick={() => onSelectZone(LEARNING_ZONES[1])}
              className="px-4 py-2 rounded-2xl bg-white/95 border-2 border-emerald-400 text-emerald-950 font-bubble text-xs sm:text-sm font-bold shadow-lg hover:scale-105 active:scale-95 transition flex items-center gap-2"
            >
              <span className="text-xl">🔭</span>
              <span>{LEARNING_ZONES[1].vernacular}</span>
            </button>
          </div>

          {/* Bottom Zone: GK */}
          <div className="flex justify-center z-10 pb-4">
            <button
              onClick={() => onSelectZone(LEARNING_ZONES[3])}
              className="px-4 py-2 rounded-2xl bg-white/95 border-2 border-amber-400 text-amber-950 font-bubble text-xs sm:text-sm font-bold shadow-lg hover:scale-105 active:scale-95 transition flex items-center gap-2"
            >
              <span className="text-xl">🌍</span>
              <span>{LEARNING_ZONES[3].vernacular}</span>
            </button>
          </div>

        </div>

        <p className="text-xs text-slate-500 max-w-md mx-auto">
          Tap any learning landmark or Mitra above to explore lessons and concepts in your selected language!
        </p>
      </div>

    </div>
  );
}

