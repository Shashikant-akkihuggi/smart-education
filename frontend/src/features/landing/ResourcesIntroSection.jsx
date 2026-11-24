import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Download, Search, CheckCircle, FileText, ArrowRight } from 'lucide-react';
import { Card } from '../../shared/components/Card';
import { Button } from '../../shared/components/Button';

export function ResourcesIntroSection() {
  const samplePicks = [
    {
      title: 'Fun with Shapes & Basic Patterns',
      subject: 'Mathematics',
      classLevel: 'Class 2',
      board: 'CBSE',
      lang: 'Hindi & English',
      type: 'Worksheet'
    },
    {
      title: 'Our Green Friends: Plants & Leaves',
      subject: 'Science (EVS)',
      classLevel: 'Class 3',
      board: 'State Board',
      lang: 'Marathi',
      type: 'Interactive Story'
    },
    {
      title: 'Panchatantra: Clever Crow & Vernacular Rhymes',
      subject: 'Languages',
      classLevel: 'Class 1',
      board: 'All Boards',
      lang: 'Tamil',
      type: 'Audio Rhyme'
    }
  ];

  return (
    <section className="py-16 bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold font-bubble mb-2">
              <BookOpen className="w-3.5 h-3.5 text-amber-700" />
              Open Resource Library
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-bubble text-slate-900">
              Free Books, Worksheets & Rhymes
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Curated study materials organized by curriculum board, grade level, and mother tongue. Fully accessible to all students.
            </p>
          </div>

          <Link to="/resources">
            <Button variant="purple" size="md">
              <span>Browse Full Library</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>

        {/* Sample Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {samplePicks.map((item, idx) => (
            <Card key={idx} className="flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="px-2.5 py-1 rounded-full bg-sky-100 text-sky-700 font-bubble">
                    {item.subject}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    {item.classLevel}
                  </span>
                </div>

                <h3 className="font-bubble text-lg font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 text-xs text-slate-500 pt-1">
                  <span className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200">
                    🏛️ {item.board}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200 font-semibold">
                    🗣️ {item.lang}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 font-semibold">
                    📄 {item.type}
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-4 flex items-center justify-between">
                <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Free Access
                </span>
                <Link to="/resources">
                  <Button variant="secondary" size="sm" className="text-xs">
                    View in Library
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

