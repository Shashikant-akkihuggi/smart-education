import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UploadCloud, ShieldAlert, Lock, ArrowLeft, ShieldCheck } from 'lucide-react';
import { FileDropzone } from './FileDropzone';
import { UploadSuccessModal } from './UploadSuccessModal';
import { Button } from '../../shared/components/Button';
import { BOARDS, CLASSES, SUBJECTS } from '../../shared/utils/languages';
import { SUPPORTED_LANGUAGES } from '../../shared/utils/languages';
import { RobotCompanion } from '../../shared/components/RobotCompanion';

export function ResourceUploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [board, setBoard] = useState(BOARDS[1]);
  const [classLevel, setClassLevel] = useState(CLASSES[2]);
  const [subject, setSubject] = useState(SUBJECTS[1]);
  const [chapter, setChapter] = useState('');
  const [language, setLanguage] = useState(SUPPORTED_LANGUAGES[0].name);
  const [description, setDescription] = useState('');
  const [declaredCopyright, setDeclaredCopyright] = useState(false);
  const [errors, setErrors] = useState({});
  const [completedSubmission, setCompletedSubmission] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!selectedFile) {
      newErrors.file = 'Please choose a study worksheet or notes file.';
    }
    if (!title.trim()) {
      newErrors.title = 'Please provide a clear title for your resource.';
    }
    if (!chapter.trim()) {
      newErrors.chapter = 'Please mention the chapter name or unit topic.';
    }
    if (!declaredCopyright) {
      newErrors.copyright = 'Please confirm ownership & consent before testing the preview.';
    }

    // Privacy guard: check if user typed phone numbers or email patterns in title or description
    const phonePattern = /\b\d{10}\b/;
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    if (phonePattern.test(title) || phonePattern.test(description) || emailPattern.test(title) || emailPattern.test(description)) {
      newErrors.privacy = 'For your child safety, do not include phone numbers or email addresses.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Client-side simulation only: No server upload
    setCompletedSubmission({
      title,
      board,
      classLevel,
      subject,
      chapter,
      language,
      description,
      fileName: selectedFile.name
    });
  };

  const handleResetForm = () => {
    setSelectedFile(null);
    setTitle('');
    setChapter('');
    setDescription('');
    setDeclaredCopyright(false);
    setErrors({});
    setCompletedSubmission(null);
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Navigation back */}
        <div className="flex items-center justify-between">
          <Link
            to="/resources"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-sky-600 px-3 py-1.5 rounded-2xl bg-white border border-slate-200 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resource Library
          </Link>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-700">
            Frontend Form Prototype
          </span>
        </div>

        {/* Welcoming Header with Mitra */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-xl border-4 border-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <RobotCompanion
              size="md"
              speech="This is our frontend upload preview! You can test file validation safely — no files are sent to any server in Phase 1!"
            />
            <div className="space-y-2 flex-1 text-center md:text-left">
              <span className="text-xs font-bold font-bubble px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                ✨ Community Material Preview
              </span>
              <h1 className="text-3xl font-bold font-bubble text-slate-900">
                Student Resource Upload Preview
              </h1>
              <p className="text-sm text-slate-600 font-sans">
                Experience how students will share handwritten notes, study worksheets, and vernacular drawings. Fully client-side validated.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy & Upload Preview Guidance Banner */}
        <div className="p-4 rounded-2xl bg-sky-50 border border-sky-300 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-sky-700 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-sky-950 font-sans space-y-1">
            <strong className="font-bold">Phase 1 Offline Prototype Notice:</strong>
            <p>
              BhashaMitra AI does not have a backend upload server in Phase 1. <strong>No file will be uploaded, stored, or publicly published from this form.</strong> All validations (15MB file size, MIME types, required curriculum fields) run strictly in your browser.
            </p>
          </div>
        </div>

        {/* Child Safety & Privacy Protection Notice */}
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
          <Lock className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-emerald-900 font-sans">
            <strong>Student Privacy Protection:</strong> Do not enter real names, phone numbers, home addresses, or personal contact info in any field.
          </div>
        </div>

        {/* Main Upload Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-slate-100 space-y-6">
          
          {/* File Selector Dropzone */}
          <FileDropzone
            selectedFile={selectedFile}
            onFileSelect={(f) => {
              setSelectedFile(f);
              setErrors({ ...errors, file: null });
            }}
            onRemoveFile={() => setSelectedFile(null)}
            error={errors.file}
          />

          {/* Title Field */}
          <div>
            <label className="block text-xs font-bold font-bubble text-slate-700 mb-1">
              Resource Title <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Simple Addition with Fruits & Shapes (Do not include personal names)"
              className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-purple-400 focus:bg-white text-sm focus:outline-none transition"
            />
            {errors.title && <p className="text-xs text-rose-600 mt-1">{errors.title}</p>}
          </div>

          {/* Board, Class, Subject & Chapter Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold font-bubble text-slate-700 mb-1">
                Curriculum Board
              </label>
              <select
                value={board}
                onChange={(e) => setBoard(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:border-purple-400"
              >
                {BOARDS.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold font-bubble text-slate-700 mb-1">
                Target Class / Grade
              </label>
              <select
                value={classLevel}
                onChange={(e) => setClassLevel(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:border-purple-400"
              >
                {CLASSES.slice(1).map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold font-bubble text-slate-700 mb-1">
                Subject
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:border-purple-400"
              >
                {SUBJECTS.slice(1).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold font-bubble text-slate-700 mb-1">
                Chapter / Unit Topic <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={chapter}
                onChange={(e) => setChapter(e.target.value)}
                placeholder="e.g., Chapter 3: How Plants Grow"
                className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-purple-400"
              />
              {errors.chapter && <p className="text-xs text-rose-600 mt-1">{errors.chapter}</p>}
            </div>
          </div>

          {/* Language Selection */}
          <div>
            <label className="block text-xs font-bold font-bubble text-slate-700 mb-1">
              Language of Material
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:border-purple-400"
            >
              {SUPPORTED_LANGUAGES.map((l) => (
                <option key={l.code} value={l.name}>
                  {l.flag} {l.name} ({l.nativeName})
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold font-bubble text-slate-700 mb-1">
              Brief Description & Tips for Other Explorers
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell other students what concepts this practice sheet covers (never include phone numbers or school names)..."
              className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-purple-400 focus:bg-white text-xs focus:outline-none transition"
            />
            {errors.privacy && <p className="text-xs text-rose-600 mt-1">{errors.privacy}</p>}
          </div>

          {/* Copyright Declaration Checkbox */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={declaredCopyright}
                onChange={(e) => setDeclaredCopyright(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded text-purple-600 focus:ring-purple-400"
              />
              <span className="text-xs text-slate-700 leading-relaxed font-sans">
                <strong className="text-slate-900 font-bold">Ownership & Originality Declaration:</strong> I confirm this is my own study worksheet or drawing, and contains no commercial copyright infringements or private personal identifying data.
              </span>
            </label>
            {errors.copyright && <p className="text-xs text-rose-600 pl-7">{errors.copyright}</p>}
          </div>

          {/* Submit CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-slate-400 italic">
              Client-side verification only. Backend submission service will launch in Phase 2.
            </p>
            <Button variant="purple" size="lg" type="submit" className="w-full sm:w-auto text-sm">
              <UploadCloud className="w-4 h-4 mr-1.5" />
              Verify Upload Preview 🚀
            </Button>
          </div>

        </form>

      </div>

      {/* Success Modal */}
      {completedSubmission && (
        <UploadSuccessModal
          submission={completedSubmission}
          onClose={handleResetForm}
        />
      )}
    </div>
  );
}
