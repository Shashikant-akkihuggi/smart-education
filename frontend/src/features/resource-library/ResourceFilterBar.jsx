import React from 'react';
import { Search, Filter, RotateCcw, Check, Sparkles, BookmarkCheck, Users } from 'lucide-react';
import { BOARDS, CLASSES, SUBJECTS, RESOURCE_TYPES } from '../../shared/utils/languages';
import { SUPPORTED_LANGUAGES } from '../../shared/utils/languages';

export function ResourceFilterBar({
  searchTerm,
  setSearchTerm,
  selectedBoard,
  setSelectedBoard,
  selectedClass,
  setSelectedClass,
  selectedSubject,
  setSelectedSubject,
  selectedLanguage,
  setSelectedLanguage,
  selectedType,
  setSelectedType,
  selectedSource,
  setSelectedSource,
  onReset
}) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-slate-100 space-y-5">
      {/* Search Input Row */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search demonstration resources by topic, title, chapter (e.g., shapes, water cycle, birds)..."
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border-2 border-slate-200 focus:border-sky-500 focus:bg-white focus:outline-none font-sans text-sm transition"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-200 px-2 py-1 rounded-full"
          >
            Clear
          </button>
        )}
      </div>

      {/* Dropdown Filters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Board Selection */}
        <div>
          <label className="block text-xs font-bold font-bubble text-slate-600 mb-1">
            Curriculum Board
          </label>
          <select
            value={selectedBoard}
            onChange={(e) => setSelectedBoard(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:border-purple-400"
          >
            {BOARDS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* Class Selection */}
        <div>
          <label className="block text-xs font-bold font-bubble text-slate-600 mb-1">
            Grade / Class
          </label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:border-purple-400"
          >
            {CLASSES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Subject Selection */}
        <div>
          <label className="block text-xs font-bold font-bubble text-slate-600 mb-1">
            Subject Area
          </label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:border-purple-400"
          >
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Language Selection */}
        <div>
          <label className="block text-xs font-bold font-bubble text-slate-600 mb-1">
            Language
          </label>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:border-purple-400"
          >
            <option value="All Languages">All Vernacular Languages</option>
            {SUPPORTED_LANGUAGES.map((l) => (
              <option key={l.code} value={l.name}>
                {l.flag} {l.name} ({l.nativeName})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row: Source Switcher & Reset */}
      <div className="pt-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-slate-100">
        
        {/* Visually Distinct Source Toggle Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl">
          <button
            onClick={() => setSelectedSource('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              selectedSource === 'all'
                ? 'bg-white text-slate-800 shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            All Samples ({selectedSource === 'all' ? 'Active' : ''})
          </button>
          <button
            onClick={() => setSelectedSource('official')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition ${
              selectedSource === 'official'
                ? 'bg-sky-500 text-white shadow-sm'
                : 'text-slate-500 hover:text-sky-700'
            }`}
          >
            <BookmarkCheck className="w-3.5 h-3.5" />
            Curated Specimens
          </button>
          <button
            onClick={() => setSelectedSource('community')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition ${
              selectedSource === 'community'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-500 hover:text-purple-700'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            Community Samples
          </button>
        </div>

        {/* Reset Filter Button */}
        <button
          onClick={onReset}
          className="text-xs font-bold text-slate-500 hover:text-rose-600 flex items-center gap-1 transition self-end md:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset All Filters
        </button>
      </div>
    </div>
  );
}
