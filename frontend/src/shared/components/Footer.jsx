import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, ShieldCheck, Compass, BookOpen, Gamepad2, FileText } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: About & Vision */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-sky-400 to-purple-600 p-0.5">
                <img src="/robot-logo.svg" alt="BhashaMitra" className="w-full h-full object-contain" />
              </div>
              <span className="font-bubble text-2xl font-bold bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent">
                {APP_CONFIG.name}
              </span>
            </div>
            <p className="text-sm text-slate-600 max-w-md leading-relaxed">
              Empowering primary-school children across India to discover mathematics, science, literature, and general knowledge in their own native mother tongues through joyful 3D adventures and games.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                100% Free Public Learning
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                No Mandatory Login
              </span>
            </div>
          </div>

          {/* Col 2: Learning Adventures */}
          <div className="space-y-3">
            <h4 className="font-bubble text-base font-bold text-slate-800">Learning World</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/learning-world" className="hover:text-sky-600 transition flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-sky-500" /> 3D Island Adventure
                </Link>
              </li>
              <li>
                <Link to="/student" className="hover:text-sky-600 transition flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-purple-500" /> Student Welcome Hub
                </Link>
              </li>
              <li>
                <Link to="/games" className="hover:text-sky-600 transition flex items-center gap-1.5">
                  <Gamepad2 className="w-4 h-4 text-emerald-500" /> Educational Games
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-sky-600 transition flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-amber-500" /> Public Resource Library
                </Link>
              </li>
              <li>
                <Link to="/ai-learning" className="hover:text-sky-600 transition flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sky-500" /> AI Tutor Architecture
                </Link>
              </li>
              <li>
                <Link to="/live-translation" className="hover:text-sky-600 transition flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-purple-500" /> Vernacular Translation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Student First Guidelines */}
          <div className="space-y-3">
            <h4 className="font-bubble text-base font-bold text-slate-800">Child-Safe Promise</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Designed specifically for curious young minds. Zero ads, zero tracking, child-friendly vernacular UI, and respectful community contributions with pre-publication validation.
            </p>
            <div className="pt-2">
              <Link
                to="/upload"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-800 underline"
              >
                <FileText className="w-3.5 h-3.5" />
                Contribute Learning Materials
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} BhashaMitra AI. Built for the children of India.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>for vernacular education</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

