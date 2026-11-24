import React from 'react';
import { RotateCcw, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { LEARNING_ZONES } from '../../core/config';

export function WorldControls({
  onResetCamera,
  autoRotate,
  onToggleAutoRotate,
  soundEnabled,
  onToggleSound,
  onSelectZone
}) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 w-full px-4 max-w-2xl pointer-events-none">
      
      {/* Zone quick-select dock */}
      <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white pointer-events-auto overflow-x-auto max-w-full">
        {LEARNING_ZONES.map((zone) => (
          <button
            key={zone.id}
            onClick={() => onSelectZone(zone)}
            className="px-3 py-1.5 rounded-xl text-xs font-bold font-bubble text-slate-700 hover:text-white transition-all flex items-center gap-1.5 whitespace-nowrap hover:scale-105 active:scale-95 shadow-sm"
            style={{
              backgroundColor: '#f8fafc'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = zone.color;
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f8fafc';
              e.currentTarget.style.color = '#334155';
            }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: zone.color }}
            />
            <span>{zone.vernacular.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Floating control buttons */}
      <div className="flex items-center gap-2 pointer-events-auto">
        <button
          onClick={onResetCamera}
          className="p-2.5 rounded-2xl bg-white/90 hover:bg-white text-slate-700 shadow-lg border border-slate-200 text-xs font-bold flex items-center gap-1.5 hover:scale-105 active:scale-95 transition"
          title="Reset Camera View"
        >
          <RotateCcw className="w-4 h-4 text-sky-600" />
          <span className="hidden sm:inline">Reset View</span>
        </button>

        <button
          onClick={onToggleAutoRotate}
          className={`p-2.5 rounded-2xl shadow-lg border text-xs font-bold flex items-center gap-1.5 hover:scale-105 active:scale-95 transition ${
            autoRotate
              ? 'bg-purple-600 text-white border-purple-700'
              : 'bg-white/90 hover:bg-white text-slate-700 border-slate-200'
          }`}
          title="Toggle Auto-Rotation"
        >
          {autoRotate ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-purple-600" />}
          <span className="hidden sm:inline">{autoRotate ? 'Pause Spin' : 'Auto Spin'}</span>
        </button>

        <button
          onClick={onToggleSound}
          className={`p-2.5 rounded-2xl shadow-lg border text-xs font-bold flex items-center gap-1.5 hover:scale-105 active:scale-95 transition ${
            soundEnabled
              ? 'bg-emerald-600 text-white border-emerald-700'
              : 'bg-white/90 hover:bg-white text-slate-700 border-slate-200'
          }`}
          title="Sound Effects"
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          <span className="hidden sm:inline">{soundEnabled ? 'Sound On' : 'Sound Off'}</span>
        </button>
      </div>

    </div>
  );
}

