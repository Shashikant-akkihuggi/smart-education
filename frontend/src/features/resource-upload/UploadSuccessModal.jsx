import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, BookOpen, Compass, Info } from 'lucide-react';
import { Button } from '../../shared/components/Button';

export function UploadSuccessModal({ submission, onClose }) {
  if (!submission) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border-4 border-sky-300 overflow-hidden relative text-center p-6 sm:p-8 space-y-6">
        
        {/* Celebration Graphic */}
        <div className="w-16 h-16 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mx-auto text-3xl shadow-inner">
          📋
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold font-bubble px-3 py-1 rounded-full bg-sky-100 text-sky-800">
            Frontend Upload Verification Preview
          </span>
          <h3 className="font-bubble text-2xl font-bold text-slate-900">
            Client-Side Form Validation Complete!
          </h3>
          {/* Required Exact Suggested Message from Section 3 */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-medium text-left leading-relaxed">
            <strong>Notice:</strong> Your upload preview is complete. No file has been sent or published yet. Actual submission and moderation will be available in a future version.
          </div>
        </div>

        {/* Verification Summary */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 text-slate-600">
          <div className="flex items-center gap-1.5 font-bold text-slate-800 font-bubble">
            <Info className="w-4 h-4 text-sky-600" />
            Verified Preview Details:
          </div>
          <p><strong>Title:</strong> {submission.title}</p>
          <p><strong>File:</strong> {submission.fileName} (Checked under 15MB limit)</p>
          <p><strong>Curriculum:</strong> {submission.board} • {submission.classLevel}</p>
          <p><strong>Subject & Language:</strong> {submission.subject} ({submission.language})</p>
          <p className="pt-1 text-[11px] text-slate-400 italic">
            Privacy Check: No server payload generated. Student privacy completely preserved.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
          <Link to="/resources" onClick={onClose} className="flex-1">
            <Button variant="secondary" size="md" className="w-full text-xs">
              <BookOpen className="w-4 h-4 mr-1 text-purple-600" />
              Return to Library
            </Button>
          </Link>
          <Button variant="primary" size="md" onClick={onClose} className="flex-1 text-xs">
            <Compass className="w-4 h-4 mr-1" />
            Continue Exploring
          </Button>
        </div>

      </div>
    </div>
  );
}
