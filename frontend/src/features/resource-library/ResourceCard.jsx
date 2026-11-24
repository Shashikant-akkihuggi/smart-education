import React from 'react';
import { Eye, FileText, BookmarkCheck, Users } from 'lucide-react';
import { Card } from '../../shared/components/Card';

export function ResourceCard({ resource, onPreview }) {
  const isCurated = resource.source === 'official';

  return (
    <Card className="flex flex-col justify-between group">
      <div className="space-y-3">
        {/* Top Badges (Visually Distinct) */}
        <div className="flex items-center justify-between gap-2">
          {isCurated ? (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
              <BookmarkCheck className="w-3 h-3 text-sky-600" />
              Curated Specimen
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
              <Users className="w-3 h-3 text-purple-600" />
              Community Sample
            </span>
          )}

          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
            {resource.format} • {resource.size}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className="font-bubble text-lg font-bold text-slate-900 group-hover:text-sky-600 transition leading-snug">
            {resource.title}
          </h3>
          {resource.vernacularTitle && (
            <p className="text-xs font-semibold text-purple-700 font-bubble mt-0.5">
              {resource.vernacularTitle}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 line-clamp-3 font-sans leading-relaxed">
          {resource.description}
        </p>

        {/* Metadata pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          <span className="text-[11px] px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 border border-sky-100 font-semibold">
            📚 {resource.subject}
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-100 font-semibold">
            🎓 {resource.classLevel}
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100 font-semibold">
            🗣️ {resource.language}
          </span>
        </div>

        <p className="text-[10px] text-slate-400 italic pt-1 truncate">
          Category: {resource.author} (Demo Interface Specimen)
        </p>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between gap-2">
        <button
          onClick={() => onPreview(resource)}
          className="text-xs font-bold text-slate-600 hover:text-sky-600 flex items-center gap-1 px-3 py-1.5 rounded-xl hover:bg-sky-50 transition"
        >
          <Eye className="w-3.5 h-3.5 text-sky-600" />
          View Sample Preview
        </button>

        <button
          onClick={() => onPreview(resource)}
          className="text-xs font-bold px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white flex items-center gap-1 shadow-sm transition active:scale-95"
        >
          <FileText className="w-3.5 h-3.5" />
          Read Specimen
        </button>
      </div>
    </Card>
  );
}
