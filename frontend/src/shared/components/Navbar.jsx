import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Globe, Compass, BookOpen, Gamepad2, UploadCloud, Menu, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export function Navbar() {
  const location = useLocation();
  const { currentLang, changeLanguage, allLanguages } = useLanguage();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/student', label: 'Student Entry' },
    { to: '/learning-world', label: '3D World', badge: '3D' },
    { to: '/games', label: 'Games' },
    { to: '/resources', label: 'Library' },
    { to: '/upload', label: 'Upload' },
    { to: '/ai-learning', label: 'AI Tutor', badge: 'Preview' },
    { to: '/live-translation', label: 'Translate', badge: 'Preview' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-6 py-3">
      <nav className="max-w-7xl mx-auto glass-panel rounded-3xl px-4 sm:px-6 py-2.5 shadow-lg shadow-sky-900/5 flex items-center justify-between transition-all">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-400 via-blue-500 to-purple-600 p-0.5 shadow-md group-hover:scale-105 transition-transform">
            <img src="/robot-logo.svg" alt="BhashaMitra" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bubble text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-sky-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                BhashaMitra
              </span>
              <span className="text-xs font-bold px-1.5 py-0.5 rounded-md bg-purple-100 text-purple-700 border border-purple-200">
                AI
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-medium hidden sm:block">Vernacular Adventure Learning</p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3.5 py-2 rounded-2xl text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  active
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                    : 'text-slate-600 hover:text-sky-700 hover:bg-sky-50/80'
                }`}
              >
                {link.label}
                {link.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    active ? 'bg-white/30 text-white' : 'bg-purple-100 text-purple-700'
                  }`}>
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Right side controls: Language switcher + Quick Enter CTA */}
        <div className="flex items-center gap-2">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 hover:border-purple-300 shadow-sm transition"
            >
              <Globe className="w-4 h-4 text-purple-600" />
              <span>{currentLang.nativeName}</span>
              <span className="text-[10px] text-slate-400">({currentLang.name})</span>
            </button>

            {langMenuOpen && (
              <div
                className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-50 max-h-72 overflow-y-auto"
                onMouseLeave={() => setLangMenuOpen(false)}
              >
                <div className="px-3 py-1.5 border-b border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Select Language</p>
                </div>
                {allLanguages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      changeLanguage(l.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-purple-50 transition ${
                      currentLang.code === l.code ? 'bg-purple-50 text-purple-700 font-bold' : 'text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{l.flag}</span>
                      <span>{l.nativeName}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">{l.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Action Button */}
          <Link
            to="/learning-world"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-purple-500/25 hover:brightness-105 active:scale-95 transition"
          >
            <Sparkles className="w-4 h-4" />
            <span>Enter World</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 glass-panel rounded-3xl shadow-xl border border-slate-100 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2.5 rounded-2xl text-sm font-bold flex items-center justify-between ${
                isActive(link.to)
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'text-slate-700 hover:bg-sky-50'
              }`}
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
          <Link
            to="/learning-world"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-sm shadow-md"
          >
            🚀 Enter 3D Learning World
          </Link>
        </div>
      )}
    </header>
  );
}

