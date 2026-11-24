import React from 'react';
import { Gamepad2, Sparkles, Play, Info } from 'lucide-react';
import { Button } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';

export function GameCard({ game, onPlayPreview }) {
  return (
    <Card className="flex flex-col justify-between overflow-hidden relative group">
      <div>
        {/* Banner with gradient accent */}
        <div className={`-mx-6 -mt-6 p-6 bg-gradient-to-tr ${game.gradient} text-white relative`}>
          <div className="flex items-center justify-between">
            <span className="text-5xl filter drop-shadow-md transform group-hover:scale-110 transition-transform">
              {game.icon}
            </span>
            <div className="text-right">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/25 backdrop-blur-sm">
                {game.category}
              </span>
              <p className="text-[11px] font-semibold opacity-90 mt-1">Classes 1 - 5</p>
            </div>
          </div>

          <div className="mt-4">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-black/20 text-white font-bubble">
              {game.vernacular}
            </span>
            <h3 className="text-2xl font-bubble font-bold mt-1 text-white">
              {game.title}
            </h3>
          </div>
        </div>

        {/* Description & Learning Skills */}
        <div className="pt-5 space-y-3">
          <p className="text-sm text-slate-600 leading-relaxed font-sans">
            {game.description}
          </p>

          <div className="space-y-1.5 pt-2">
            <p className="text-xs font-bold text-slate-500 font-bubble">Skills Developed:</p>
            <div className="flex flex-wrap gap-1.5">
              {game.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-xl bg-slate-100 text-slate-700 font-medium"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between gap-3">
        <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
          🎮 Interactive Preview
        </span>

        <Button
          variant="primary"
          size="sm"
          onClick={() => onPlayPreview(game)}
          className="text-xs shadow-md"
        >
          <Play className="w-3.5 h-3.5 mr-1 fill-white" />
          Play Preview Demo
        </Button>
      </div>
    </Card>
  );
}

