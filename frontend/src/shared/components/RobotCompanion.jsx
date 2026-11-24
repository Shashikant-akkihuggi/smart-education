import React from 'react';
import { motion } from 'framer-motion';

export function RobotCompanion({
  mood = 'happy',
  speech = 'Namaste! Ready to explore our magical learning world?',
  size = 'md',
  className = '',
  onClick
}) {
  const sizeMap = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-36 h-36',
    hero: 'w-48 h-48 md:w-56 md:h-56'
  };

  return (
    <div className={`relative flex items-center gap-4 ${className}`} onClick={onClick}>
      {speech && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white/95 backdrop-blur-sm border-2 border-purple-200 text-purple-950 font-bubble text-sm sm:text-base px-4 py-3 rounded-2xl shadow-lg max-w-xs md:max-w-sm"
        >
          <span className="inline-block mr-1">🤖</span> {speech}
          {/* Speech bubble tail */}
          <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-purple-200" />
        </motion.div>
      )}

      {/* Robot Mascot SVG */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 2, -2, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className={`relative ${sizeMap[size]} flex-shrink-0 filter drop-shadow-xl cursor-pointer`}
      >
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Glow backdrop */}
          <circle cx="60" cy="60" r="54" fill="url(#botGlow)" opacity="0.3" />
          
          {/* Antenna */}
          <line x1="60" y1="26" x2="60" y2="10" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
          <motion.circle
            cx="60"
            cy="8"
            r="6"
            fill="#FBBF24"
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />

          {/* Ears */}
          <rect x="22" y="42" width="6" height="14" rx="3" fill="#38BDF8" />
          <rect x="92" y="42" width="6" height="14" rx="3" fill="#38BDF8" />

          {/* Head */}
          <rect x="26" y="24" width="68" height="52" rx="18" fill="white" stroke="#38BDF8" strokeWidth="4" />
          
          {/* Visor / Face Screen */}
          <rect x="34" y="32" width="52" height="34" rx="10" fill="#0F172A" />

          {/* Animated Eyes */}
          <motion.circle
            cx="48"
            cy="48"
            r="6"
            fill="#38BDF8"
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ repeat: Infinity, duration: 3.5, repeatDelay: 1 }}
          />
          <circle cx="50" cy="46" r="2" fill="white" />

          <motion.circle
            cx="72"
            cy="48"
            r="6"
            fill="#38BDF8"
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ repeat: Infinity, duration: 3.5, repeatDelay: 1 }}
          />
          <circle cx="74" cy="46" r="2" fill="white" />

          {/* Cheeks */}
          <circle cx="41" cy="56" r="3" fill="#FB7185" opacity="0.75" />
          <circle cx="79" cy="56" r="3" fill="#FB7185" opacity="0.75" />

          {/* Smile */}
          <path d="M54 58 Q60 63 66 58" stroke="#34D399" strokeWidth="3" strokeLinecap="round" fill="none" />

          {/* Neck */}
          <rect x="52" y="76" width="16" height="8" rx="4" fill="#94A3B8" />

          {/* Torso */}
          <rect x="34" y="82" width="52" height="34" rx="14" fill="white" stroke="#9333EA" strokeWidth="3.5" />
          
          {/* Chest Badge / Heart */}
          <motion.path
            d="M60 92 C56 86 48 88 48 94 C48 100 60 106 60 106 C60 106 72 100 72 94 C72 88 64 86 60 92 Z"
            fill="#F43F5E"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          />

          <defs>
            <radialGradient id="botGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) scale(60)">
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#A855F7" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
}

