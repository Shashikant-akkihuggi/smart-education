import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowRightLeft, ShieldAlert, ArrowLeft, Volume2, Sparkles, CheckCircle2, Compass } from 'lucide-react';
import { Button } from '../../shared/components/Button';
import { RobotCompanion } from '../../shared/components/RobotCompanion';
import { SUPPORTED_LANGUAGES } from '../../shared/utils/languages';
import { LIVE_TRANSLATION_CONFIG } from './index';

export function LiveTranslationPage() {
  const [sourceLang, setSourceLang] = useState('hi');
  const [targetLang, setTargetLang] = useState('en');

  const sourceObj = SUPPORTED_LANGUAGES.find((l) => l.code === sourceLang) || SUPPORTED_LANGUAGES[0];
  const targetObj = SUPPORTED_LANGUAGES.find((l) => l.code === targetLang) || SUPPORTED_LANGUAGES[1];

  const handleSwap = () => {
    const temp = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(temp);
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 relative">
      {/* Background blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl -z-10" />

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
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-100 text-sky-800">
            Phase 1 Architectural Blueprint
          </span>
        </div>

        {/* Welcoming Header with Mitra */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-xl border-4 border-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <RobotCompanion
              size="lg"
              speech="In Phase 2, I will speak and listen in your mother tongue using sovereign Indian models like Bhashini! Here is our architectural preview!"
            />
            <div className="space-y-2 flex-1 text-center md:text-left">
              <span className="text-xs font-bold font-bubble px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                🗣️ Vernacular Voice & Text Hub
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold font-bubble text-slate-900 leading-tight">
                Live Vernacular Translation Architecture
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                Empowering children to bridge mother tongue understanding with curriculum English. Designed for seamless translation across 10 Indian vernacular languages.
              </p>
            </div>
          </div>
        </div>

        {/* Phase 1 Prototype Disclosure Banner */}
        <div className="p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900 font-sans space-y-1">
            <p className="font-bold">Phase 1 Interface Specification Notice:</p>
            <p>
              In strict adherence to Phase 1 constraints, <strong>no live translation models (such as Bhashini or IndicTrans2) or third-party paid translation APIs are invoked in this phase</strong>. This page showcases the interactive UI layout, language pairing controls, and technical pipeline specification for future FastAPI deployment.
            </p>
          </div>
        </div>

        {/* Interactive Language Pairing Blueprint */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-slate-100 space-y-6">
          <h2 className="text-xl font-bold font-bubble text-slate-900 flex items-center gap-2">
            <Globe className="w-5 h-5 text-purple-600" />
            Vernacular Language Pair Explorer
          </h2>

          {/* Language Pair Selectors */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            {/* Source */}
            <div className="w-full sm:w-5/12 space-y-1">
              <label className="text-xs font-bold text-slate-600 font-bubble">From Language:</label>
              <select
                value={sourceLang}
                onChange={(e) => setSourceLang(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:border-purple-400"
              >
                {SUPPORTED_LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.flag} {l.name} ({l.nativeName})
                  </option>
                ))}
              </select>
            </div>

            {/* Swap Button */}
            <button
              onClick={handleSwap}
              className="p-3 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 shadow-sm text-purple-600 hover:scale-105 active:scale-95 transition"
              title="Swap Languages"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>

            {/* Target */}
            <div className="w-full sm:w-5/12 space-y-1">
              <label className="text-xs font-bold text-slate-600 font-bubble">To Language:</label>
              <select
                value={targetLang}
                onChange={(e) => setTargetLang(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:border-purple-400"
              >
                {SUPPORTED_LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.flag} {l.name} ({l.nativeName})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sample Vernacular Phrasing Demonstrator */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-purple-800 font-bubble">
                  {sourceObj.name} ({sourceObj.nativeName})
                </span>
                <span className="text-xs text-slate-400">Specimen Greeting</span>
              </div>
              <p className="text-xl font-bubble text-slate-800">{sourceObj.greeting}</p>
              <p className="text-xs text-purple-700 italic">"{sourceObj.subtext}"</p>
            </div>

            <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-800 font-bubble">
                  {targetObj.name} ({targetObj.nativeName})
                </span>
                <span className="text-xs text-slate-400">Target Adaptation</span>
              </div>
              <p className="text-xl font-bubble text-slate-800">{targetObj.greeting}</p>
              <p className="text-xs text-sky-700 italic">"{targetObj.subtext}"</p>
            </div>
          </div>
        </div>

        {/* Integration Points */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-100 shadow-sm space-y-4">
          <h3 className="font-bubble text-lg font-bold text-slate-800">
            FastAPI Sovereign Microservice Pipeline
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
              <span className="font-mono font-bold text-sky-700">{LIVE_TRANSLATION_CONFIG.endpoints.translateText}</span>
              <p className="text-slate-500 text-[11px] mt-1">IndicTrans2 text translation</p>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
              <span className="font-mono font-bold text-purple-700">{LIVE_TRANSLATION_CONFIG.endpoints.speechToText}</span>
              <p className="text-slate-500 text-[11px] mt-1">Bhashini Speech Recognition</p>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
              <span className="font-mono font-bold text-emerald-700">{LIVE_TRANSLATION_CONFIG.endpoints.textToSpeech}</span>
              <p className="text-slate-500 text-[11px] mt-1">Vernacular voice synthesis</p>
            </div>
          </div>
        </div>

        {/* Navigation CTAs */}
        <div className="flex justify-center gap-4 pt-2">
          <Link to="/learning-world">
            <Button variant="primary" size="md">
              <Compass className="w-4 h-4 mr-1" />
              Return to 3D Island
            </Button>
          </Link>
          <Link to="/student">
            <Button variant="secondary" size="md">
              Change Active Language
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}

