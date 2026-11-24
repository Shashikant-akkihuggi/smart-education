import React, { useState } from 'react';
import { X, CheckCircle, RotateCcw, Sparkles, Award, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '../../shared/components/Button';
import { useLanguage } from '../../shared/hooks/useLanguage';

export function GamePreviewModal({ game, onClose }) {
  const { currentLang } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!game) return null;

  const gameInstructions = {
    'knowledge-quest': 'Instructions: Read the vernacular riddle and tap the correct option. Earn 1 Discovery Star per right answer!',
    'word-match': 'Instructions: Connect the native mother tongue word with its corresponding picture representation.',
    'treasure-hunt': 'Instructions: Follow the island landmark clues and answer geometry & science puzzles to find the treasure!'
  };

  // Mini interactive offline demo questions
  const demoQuestions = {
    'knowledge-quest': [
      {
        question: 'Which of these is India\'s national bird (राष्ट्रीय पक्षी)?',
        options: ['Sparrow (गौरैया)', 'Peacock (मोर)', 'Pigeon (कबूतर)', 'Parrot (तोता)'],
        answer: 1,
        hint: 'It has vibrant blue-green feathers and dances in the monsoon!'
      },
      {
        question: 'What is 5 + 3 = ? (पाँच और तीन कितने होते हैं?)',
        options: ['6', '7', '8', '9'],
        answer: 2,
        hint: 'Count on your fingers: 5, then add 3 more!'
      }
    ],
    'word-match': [
      {
        question: 'Match the Hindi word: "सेब" (Seb) with English picture:',
        options: ['Banana 🍌', 'Apple 🍎', 'Orange 🍊', 'Mango 🥭'],
        answer: 1,
        hint: 'It is red, round and sweet!'
      },
      {
        question: 'Match the picture: "Elephant" with its vernacular name:',
        options: ['शेर (Lion)', 'हाथी (Elephant)', 'घोड़ा (Horse)', 'बंदर (Monkey)'],
        answer: 1,
        hint: 'Has a long trunk and big ears!'
      }
    ],
    'treasure-hunt': [
      {
        question: 'Island Clue #1: Mitra hid a crystal near the 3D Math Dome. How many sides does a triangle have?',
        options: ['2 sides', '3 sides', '4 sides', '5 sides'],
        answer: 1,
        hint: 'Count: 1, 2, 3 angles!'
      },
      {
        question: 'Island Clue #2: Mitra asks — which planet is known as the Green & Blue Planet?',
        options: ['Mars', 'Earth', 'Jupiter', 'Venus'],
        answer: 1,
        hint: 'It is our home where we live!'
      }
    ]
  };

  const questions = demoQuestions[game.id] || demoQuestions['knowledge-quest'];
  const currentQ = questions[currentStep];

  const handleSelectOption = (idx) => {
    setSelectedAnswer(idx);
  };

  const handleNext = () => {
    if (selectedAnswer === currentQ.answer) {
      setScore(score + 1);
    }
    if (currentStep + 1 < questions.length) {
      setCurrentStep(currentStep + 1);
      setSelectedAnswer(null);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border-4 border-purple-200 relative flex flex-col justify-between">
        
        {/* Header */}
        <div className={`p-5 sm:p-6 bg-gradient-to-r ${game.gradient} text-white flex items-center justify-between sticky top-0 z-10 shadow-sm`}>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{game.icon}</span>
              <h3 className="font-bubble text-lg sm:text-xl font-bold">{game.title}</h3>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/25 text-white font-bold">
                Offline Prototype Demo
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white font-semibold">
                Not AI Generated
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Game Body */}
        <div className="p-5 sm:p-6 space-y-5">
          {!finished ? (
            <>
              {/* Instructions Bar */}
              <div className="p-3 rounded-2xl bg-purple-50 border border-purple-200 text-xs text-purple-900 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="font-medium">{gameInstructions[game.id]}</p>
              </div>

              {/* Progress & Language indicator */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 font-bubble">
                <span>Riddle {currentStep + 1} of {questions.length}</span>
                <span>Language: {currentLang.nativeName}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-purple-500 transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question Box */}
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200">
                <h4 className="font-bubble text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {currentQ.question}
                </h4>
                {currentQ.hint && (
                  <p className="text-xs text-sky-700 mt-2 italic">
                    💡 Mitra's Clue: {currentQ.hint}
                  </p>
                )}
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedAnswer === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`min-h-[44px] p-3 rounded-2xl border-2 font-bubble text-xs sm:text-sm text-left transition-all ${
                        isSelected
                          ? 'bg-purple-500 text-white border-purple-600 shadow-md scale-[1.01]'
                          : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 hover:border-purple-200'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-2">
                <p className="text-[11px] text-slate-400">
                  Select answer & tap Next
                </p>
                <Button
                  variant="primary"
                  size="md"
                  disabled={selectedAnswer === null}
                  onClick={handleNext}
                  className={selectedAnswer === null ? 'opacity-50 cursor-not-allowed' : ''}
                >
                  {currentStep + 1 < questions.length ? 'Next Riddle →' : 'Complete Quest ⭐'}
                </Button>
              </div>
            </>
          ) : (
            /* Celebration Screen */
            <div className="text-center py-6 space-y-4">
              <div className="w-20 h-20 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto text-4xl shadow-inner animate-bounce">
                🏆
              </div>
              <h4 className="text-2xl font-bubble font-bold text-slate-900">
                Splendid Effort, Young Explorer!
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto font-sans">
                You earned <strong className="text-purple-600">{score} out of {questions.length}</strong> Discovery Stars!
              </p>

              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 max-w-sm mx-auto text-left leading-relaxed">
                <strong>Offline Prototype Notice:</strong> This interactive preview uses pre-scripted offline templates. In Phase 2, dynamic adaptive difficulty and custom vernacular quizzes will connect to our FastAPI microservice.
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <Button variant="secondary" size="md" onClick={handleRestart} className="text-xs">
                  <RotateCcw className="w-4 h-4 mr-1" />
                  Try Again
                </Button>
                <Button variant="primary" size="md" onClick={onClose} className="text-xs">
                  Back to Arcade 🎮
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
