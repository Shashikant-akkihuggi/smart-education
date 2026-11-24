import React, { useRef } from 'react';
import { UploadCloud, FileText, X, AlertCircle } from 'lucide-react';
import { formatFileSize } from '../../shared/utils/helpers';

const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15 Megabytes

const VALID_EXTENSIONS = ['pdf', 'docx', 'doc', 'jpg', 'jpeg', 'png'];

const VALID_MIME_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/msword',
  'image/jpeg',
  'image/jpg',
  'image/png'
];

export function FileDropzone({ selectedFile, onFileSelect, onRemoveFile, error }) {
  const inputRef = useRef();

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSet(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSet(e.target.files[0]);
    }
  };

  const validateAndSet = (file) => {
    // 1. Validate file size (15MB limit)
    if (file.size > MAX_FILE_SIZE) {
      alert(`File size exceeds 15 MB limit (Current: ${formatFileSize(file.size)}). Please choose a smaller file.`);
      return;
    }

    // 2. Validate file extension
    const ext = file.name.split('.').pop()?.toLowerCase();
    if (!ext || !VALID_EXTENSIONS.includes(ext)) {
      alert(`Unsupported file format ('.${ext}'). Supported types are: PDF, DOCX, JPG, and PNG.`);
      return;
    }

    // 3. Validate MIME type if reported by browser
    if (file.type && !VALID_MIME_TYPES.includes(file.type.toLowerCase())) {
      alert(`Invalid file MIME type ('${file.type}'). Supported types are: PDF, DOCX, JPG, and PNG.`);
      return;
    }

    onFileSelect(file);
  };

  return (
    <div className="space-y-2">
      <label className="block text-xs font-bold font-bubble text-slate-700">
        Select Study Material File <span className="text-rose-500">*</span>
      </label>

      {!selectedFile ? (
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={`border-3 border-dashed rounded-3xl p-8 text-center cursor-pointer transition-all ${error
              ? 'border-rose-300 bg-rose-50/50 hover:bg-rose-50'
              : 'border-purple-200 bg-purple-50/40 hover:bg-purple-50 hover:border-purple-400'
            }`}
        >
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.docx,.doc,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleChange}
            className="hidden"
          />

          <div className="w-14 h-14 rounded-2xl bg-white text-purple-600 flex items-center justify-center mx-auto shadow-md mb-3">
            <UploadCloud className="w-8 h-8" />
          </div>

          <h4 className="font-bubble text-base font-bold text-slate-800">
            Click to Browse or Drag & Drop File Here
          </h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 font-sans">
            Supported types: <strong className="text-purple-700">PDF, DOCX, JPG, and PNG</strong> (Strict limit: 15MB)
          </p>
          <p className="text-[11px] text-slate-400 mt-2">
            MIME & extension validation enforced client-side
          </p>
        </div>
      ) : (
        <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bubble text-sm font-bold text-slate-800 truncate max-w-xs">
                {selectedFile.name}
              </p>
              <p className="text-xs text-emerald-700 font-semibold">
                {formatFileSize(selectedFile.size)} • Validated for preview (MIME: {selectedFile.type || 'detected by extension'})
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onRemoveFile}
            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
            title="Remove File"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {error && (
        <p className="text-xs text-rose-600 flex items-center gap-1 font-medium">
          <AlertCircle className="w-3.5 h-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}
