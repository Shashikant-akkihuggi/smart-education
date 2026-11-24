import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Brain, Cpu, ShieldAlert, ArrowLeft, Compass, Gamepad2, CheckCircle2 } from 'lucide-react';
import { Button } from '../../shared/components/Button';
import { RobotCompanion } from '../../shared/components/RobotCompanion';
import { AI_LEARNING_CONFIG } from './index';

export function AiLearningPage() {
  const plannedCapabilities = [
    {
      title: 'Adaptive Concept Breakdown',
      vernacular: 'अवधारणा समझ',
      description: 'Breaks down complex primary mathematics and science ideas into bite-sized, visual steps tailored to each student\'s learning pace.',
      icon: '🧩',
      accent: 'border-sky-300 bg-sky-50/60'
    },
    {
      title: 'Mother Tongue Phonics & Rhymes',
      vernacular: 'मातृभाषा ध्वनि व कविताएँ',
      description: 'Engaging vernacular phonetic hints that guide students on correct regional pronunciation without fear of making mistakes.',
      icon: '🗣️',
      accent: 'border-purple-300 bg-purple-50/60'
    },
    {
      title: 'Kind Encouragement & Stars',
      vernacular: 'सहानुभूतिपूर्ण मार्गदर्शन',
      description: 'Friendly, positive reinforcement from Mitra that celebrates every small breakthrough and builds young learners\' confidence.',
      icon: '⭐',
      accent: 'border-amber-300 bg-amber-50/60'
    }
  ];

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 relative">
      {/* Background blobs */}
      <div className="absolute top-12 left-10 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-sky-600 px-3 py-1.5 rounded-2xl bg-white border border-slate-200 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Homepage
          </Link>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-700">
            Phase 1 Architectural Blueprint
          </span>
        </div>

        {/* Header with Mitra */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-xl border-4 border-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <RobotCompanion
              size="lg"
              speech="I am designed to become your intelligent vernacular study buddy in Phase 2! Right now, you can explore our 3D world and offline games!"
            />
            <div className="space-y-2 flex-1 text-center md:text-left">
              <span className="text-xs font-bold font-bubble px-3 py-1 rounded-full bg-sky-100 text-sky-800">
                🤖 Companion Intelligence Architecture
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold font-bubble text-slate-900 leading-tight">
                AI Vernacular Tutor & Adaptive Guide
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                Discover the architectural blueprint for BhashaMitra's planned AI companion, engineered to provide individualized primary learning in 10 Indian vernacular languages.
              </p>
            </div>
          </div>
        </div>

        {/* Phase 1 Prototype Disclosure Banner (Strict Rule Adherence) */}
        <div className="p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900 font-sans space-y-1">
            <p className="font-bold">Phase 1 Interface Specification Notice:</p>
            <p>
              In accordance with Phase 1 project rules, <strong>no live AI models, neural weights, or backend API endpoints are operational in this phase</strong>. This page documents the planned microservice contracts, user experience flows, and FastAPI endpoints for future Phase 2 deployment.
            </p>
          </div>
        </div>

        {/* Planned AI Capabilities Grid */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold font-bubble text-slate-900 flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-600" />
            Planned Student-Centric Features:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plannedCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-3xl border-2 ${cap.accent} bg-white shadow-sm space-y-3 flex flex-col justify-between`}
              >
                <div>
                  <span className="text-4xl">{cap.icon}</span>
                  <h3 className="font-bubble text-lg font-bold text-slate-900 mt-2">
                    {cap.title}
                  </h3>
                  <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                    {cap.vernacular}
                  </span>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed mt-2">
                    {cap.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  FastAPI Ready Contract
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture Overview */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-sky-600" />
            <h3 className="font-bubble text-lg font-bold text-slate-800">
              Future FastAPI Integration Endpoint Contracts
            </h3>
          </div>
          <p className="text-xs text-slate-600 font-sans">
            The frontend architecture is decoupled and modularized to connect directly with the following sovereign backend routes in Phase 2:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
              <span className="font-mono font-bold text-sky-700">{AI_LEARNING_CONFIG.endpoints.tutor}</span>
              <p className="text-slate-500 text-[11px] mt-1">Vernacular reasoning tutor</p>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
              <span className="font-mono font-bold text-purple-700">{AI_LEARNING_CONFIG.endpoints.adaptiveQuiz}</span>
              <p className="text-slate-500 text-[11px] mt-1">Adaptive question engine</p>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
              <span className="font-mono font-bold text-emerald-700">{AI_LEARNING_CONFIG.endpoints.feedback}</span>
              <p className="text-slate-500 text-[11px] mt-1">Pedagogical feedback loop</p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-sky-50 to-purple-50 border border-purple-200">
          <div className="text-center sm:text-left">
            <h4 className="font-bubble text-base font-bold text-slate-800">
              Ready to explore what's active today?
            </h4>
            <p className="text-xs text-slate-600">
              Visit our interactive 3D Island or try offline educational games right now.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/games">
              <Button variant="secondary" size="md" className="text-xs">
                <Gamepad2 className="w-4 h-4 mr-1 text-emerald-600" />
                Play Games
              </Button>
            </Link>
            <Link to="/learning-world">
              <Button variant="primary" size="md" className="text-xs">
                <Compass className="w-4 h-4 mr-1" />
                Enter 3D Island
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

