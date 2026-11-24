import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Gamepad2, BookOpen, Sparkles, Globe, HelpCircle } from 'lucide-react';
import { IslandCanvas } from './IslandCanvas';
import { ZoneDetailModal } from './ZoneDetailModal';
import { MitraCompanionModal } from './MitraCompanionModal';
import { WorldControls } from './WorldControls';
import { LEARNING_ZONES } from '../../core/config';
import { useLanguage } from '../../shared/hooks/useLanguage';

export function LearningWorldPage() {
  const { currentLang } = useLanguage();
  const [selectedZone, setSelectedZone] = useState(null);
  const [robotModalOpen, setRobotModalOpen] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [companionTip, setCompanionTip] = useState(
    'Rotate the 3D island with your finger or mouse! Click any zone or Mitra to explore!'
  );
  const orbitRef = useRef();

  const handleResetCamera = () => {
    if (orbitRef.current) {
      orbitRef.current.reset();
    }
  };

  const playChime = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime); // A4
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.2); // A5
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } catch (e) {
      // ignore
    }
  };

  const handleSelectZone = (zone) => {
    setSelectedZone(zone);
    playChime();
    setCompanionTip(`You tapped ${zone.vernacular}! Let's explore its concepts.`);
  };

  const handleSelectRobot = () => {
    playChime();
    setRobotModalOpen(true);
    setCompanionTip('I am Mitra, your learning robot friend! Welcome to our island!');
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-900 select-none">
      
      {/* 1. TOP FLOATING NAVIGATION BAR */}
      <header className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
        
        {/* Left: Return Home & Brand */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <Link
            to="/"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-white/90 hover:bg-white text-slate-800 font-bubble text-xs sm:text-sm font-bold shadow-xl border border-white hover:scale-105 active:scale-95 transition"
          >
            <ArrowLeft className="w-4 h-4 text-sky-600" />
            <span>Home</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl border border-white">
            <img src="/robot-logo.svg" alt="Mitra" className="w-6 h-6 object-contain" />
            <span className="font-bubble text-sm font-bold bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent">
              BhashaMitra Island
            </span>
          </div>
        </div>

        {/* Right: Language Indicator + Links to Games & Resources */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Active language pill */}
          <Link
            to="/student"
            className="px-3 py-2 rounded-2xl bg-white/90 hover:bg-white text-xs font-bold text-purple-800 shadow-xl border border-white flex items-center gap-1.5 transition"
            title="Switch Language"
          >
            <span>{currentLang.flag}</span>
            <span className="hidden md:inline">{currentLang.nativeName}</span>
          </Link>

          {/* Quick link to Games */}
          <Link
            to="/games"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bubble text-xs sm:text-sm font-bold shadow-xl hover:brightness-105 active:scale-95 transition"
          >
            <Gamepad2 className="w-4 h-4" />
            <span>Games</span>
          </Link>

          {/* Quick link to Resources */}
          <Link
            to="/resources"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bubble text-xs sm:text-sm font-bold shadow-xl hover:brightness-105 active:scale-95 transition"
          >
            <BookOpen className="w-4 h-4" />
            <span>Library</span>
          </Link>
        </div>
      </header>

      {/* 2. THREE.JS 3D ISLAND CANVAS (with WebGL Fallback) */}
      <IslandCanvas
        orbitRef={orbitRef}
        autoRotate={autoRotate}
        onSelectZone={handleSelectZone}
        onSelectRobot={handleSelectRobot}
      />

      {/* 3. MITRA ROBOT FLOATING SPEECH PROMPT AT BOTTOM LEFT */}
      <div
        onClick={handleSelectRobot}
        className="absolute bottom-6 left-6 z-20 hidden md:flex items-center gap-3 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white max-w-sm pointer-events-auto cursor-pointer hover:scale-102 transition"
      >
        <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-xl flex-shrink-0 animate-bounce">
          🤖
        </div>
        <div className="text-xs">
          <p className="font-bubble font-bold text-purple-900 flex items-center gap-1">
            Mitra's Guide:
            <span className="text-[10px] text-purple-500 font-normal">(Click for details)</span>
          </p>
          <p className="text-slate-600 line-clamp-2">{companionTip}</p>
        </div>
      </div>

      {/* 4. WORLD CONTROLS HUD */}
      <WorldControls
        orbitRef={orbitRef}
        onResetCamera={handleResetCamera}
        autoRotate={autoRotate}
        onToggleAutoRotate={() => setAutoRotate(!autoRotate)}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
        onSelectZone={handleSelectZone}
      />

      {/* 5. ZONE DETAIL MODAL */}
      <ZoneDetailModal
        zone={selectedZone}
        onClose={() => setSelectedZone(null)}
      />

      {/* 6. MITRA COMPANION MODAL */}
      <MitraCompanionModal
        isOpen={robotModalOpen}
        onClose={() => setRobotModalOpen(false)}
        onSelectZone={handleSelectZone}
      />

    </div>
  );
}
