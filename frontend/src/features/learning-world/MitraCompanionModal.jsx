import React from 'react';
import { X, Sparkles, Compass, Gamepad2, Info } from 'lucide-react';
import { Button } from '../../shared/components/Button';
import { LEARNING_ZONES } from '../../core/config';
import { useLanguage } from '../../shared/hooks/useLanguage';

export function MitraCompanionModal({ isOpen, onClose, onSelectZone }) {
  const { currentLang } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border-4 border-purple-300 overflow-hidden relative p-6 sm:p-8 space-y-5">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Mascot Header */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl shadow-sm animate-bounce flex-shrink-0">
            🤖
          </div>
          <div>
            <div className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-bubble">
              Mitra Companion Hub
            </div>
            <h3 className="font-bubble text-2xl font-bold text-slate-900">
              {currentLang.greeting}
            </h3>
            <p className="text-xs text-slate-500 font-sans">
              Active Language: <strong className="text-purple-700">{currentLang.nativeName} ({currentLang.name})</strong>
            </p>
          </div>
        </div>

        {/* Transparent Capability Disclosure (Strict adherence to Section 4) */}
        <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-xs text-sky-950 space-y-1.5 leading-relaxed">
          <div className="flex items-center gap-1.5 font-bold font-bubble text-sky-900">
            <Info className="w-4 h-4 text-sky-600" />
            Mitra's Phase 1 Status:
          </div>
          <p>
            I am your visual 3D island companion! <strong>Interactive speech recognition, real-time audio listening, and dynamic LLM conversational answers are under development for Phase 2.</strong> No fabricated AI speech outputs are generated here.
          </p>
        </div>

        {/* Landmarks Quick Guide */}
        <div className="space-y-2">
          <p className="text-xs font-bold font-bubble text-slate-700">Where would you like to explore?</p>
          <div className="grid grid-cols-2 gap-2">
            {LEARNING_ZONES.map((zone) => (
              <button
                key={zone.id}
                onClick={() => {
                  onSelectZone(zone);
                  onClose();
                }}
                className="p-3 rounded-2xl border-2 text-left transition hover:scale-102 flex items-center gap-2 bg-slate-50 hover:bg-white"
                style={{ borderColor: zone.color }}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: zone.color }} />
                <div className="min-w-0">
                  <p className="font-bubble text-xs font-bold text-slate-800 truncate">{zone.vernacular}</p>
                  <p className="text-[10px] text-slate-500 truncate">{zone.english}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-2 flex justify-end">
          <Button variant="primary" size="sm" onClick={onClose}>
            Back to Island 🏝️
          </Button>
        </div>

      </div>
    </div>
  );
}

