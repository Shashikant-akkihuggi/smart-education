import React from 'react';
import { Link } from 'react-router-dom';
import { X, Gamepad2, BookOpen, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../../shared/components/Button';
import { useLanguage } from '../../shared/hooks/useLanguage';

export function ZoneDetailModal({ zone, onClose }) {
  const { currentLang } = useLanguage();

  if (!zone) return null;

  // Synthesize friendly tone when child clicks speaker
  const playFriendlyTone = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, audioCtx.currentTime + 0.15); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, audioCtx.currentTime + 0.3); // G5
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } catch (e) {
      // AudioContext fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in">
      <div
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border-4 overflow-hidden relative"
        style={{ borderColor: zone.color }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-700 flex items-center justify-center shadow-md transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Zone Accent Gradient */}
        <div
          className="p-6 text-white relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${zone.color}, #1e1b4b)`
          }}
        >
          <div className="flex items-center justify-between pr-8">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold font-bubble">
              Explore Learning Zone
            </span>
            <button
              onClick={playFriendlyTone}
              className="px-2.5 py-1 rounded-full bg-white/20 hover:bg-white/30 text-xs font-bold flex items-center gap-1 transition"
              title="Play Greeting Tone"
            >
              <Volume2 className="w-3.5 h-3.5" />
              Listen
            </button>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bubble font-bold mt-2">
            {zone.vernacular}
          </h2>
          <p className="text-sm font-semibold opacity-90">{zone.english}</p>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {/* Mitra's tip */}
          <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-200 flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🤖</span>
            <div>
              <p className="text-xs font-bold text-purple-900 font-bubble">Mitra Companion Tip:</p>
              <p className="text-xs text-purple-800 italic">"{zone.characterPrompt}"</p>
            </div>
          </div>

          <div>
            <h4 className="font-bubble text-sm font-bold text-slate-800 mb-2">About This Zone:</h4>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">{zone.description}</p>
          </div>

          {/* Key Learning Topics */}
          <div>
            <h4 className="font-bubble text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Curious Topics Inside:
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {zone.topics.map((topic, i) => (
                <div
                  key={i}
                  className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span className="truncate">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link to="/games" className="flex-1" onClick={onClose}>
              <Button variant="primary" size="md" className="w-full text-xs">
                <Gamepad2 className="w-4 h-4 mr-1" />
                Play Zone Games
              </Button>
            </Link>
            <Link to="/resources" className="flex-1" onClick={onClose}>
              <Button variant="secondary" size="md" className="w-full text-xs">
                <BookOpen className="w-4 h-4 mr-1 text-purple-600" />
                Open Worksheets
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

