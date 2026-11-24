import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, ShieldAlert, UploadCloud, Eye, Download, X, Info } from 'lucide-react';
import { ResourceFilterBar } from './ResourceFilterBar';
import { ResourceCard } from './ResourceCard';
import { SAMPLE_RESOURCES } from './sampleResources';
import { Button } from '../../shared/components/Button';

export function ResourceLibraryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('All Educational Boards');
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const [selectedLanguage, setSelectedLanguage] = useState('All Languages');
  const [selectedType, setSelectedType] = useState('All Formats');
  const [selectedSource, setSelectedSource] = useState('all'); // 'all', 'official', 'community'
  const [previewingResource, setPreviewingResource] = useState(null);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedBoard('All Educational Boards');
    setSelectedClass('All Classes');
    setSelectedSubject('All Subjects');
    setSelectedLanguage('All Languages');
    setSelectedType('All Formats');
    setSelectedSource('all');
  };

  const filteredResources = useMemo(() => {
    return SAMPLE_RESOURCES.filter((item) => {
      // Search term
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(term);
        const matchesVernacular = item.vernacularTitle?.toLowerCase().includes(term);
        const matchesDesc = item.description.toLowerCase().includes(term);
        const matchesSubject = item.subject.toLowerCase().includes(term);
        if (!matchesTitle && !matchesVernacular && !matchesDesc && !matchesSubject) {
          return false;
        }
      }

      // Board
      if (selectedBoard !== 'All Educational Boards' && item.board !== 'All Educational Boards') {
        if (!item.board.includes(selectedBoard.split(' ')[0])) return false;
      }

      // Class
      if (selectedClass !== 'All Classes' && item.classLevel !== selectedClass) {
        return false;
      }

      // Subject
      if (selectedSubject !== 'All Subjects' && item.subject !== selectedSubject) {
        return false;
      }

      // Language
      if (selectedLanguage !== 'All Languages' && item.language !== selectedLanguage) {
        return false;
      }

      // Source
      if (selectedSource !== 'all' && item.source !== selectedSource) {
        return false;
      }

      return true;
    });
  }, [
    searchTerm,
    selectedBoard,
    selectedClass,
    selectedSubject,
    selectedLanguage,
    selectedSource
  ]);

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header with Mitra */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-xl border-4 border-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold font-bubble">
                <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                Public Vernacular Library Prototype
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold font-bubble text-slate-900 leading-tight">
                Educational Resource Library
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-sans max-w-2xl">
                Free storybooks, worksheets, phonics flashcards, and activities in Indian languages. Filter by board, class, or subject without registration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link to="/upload">
                <Button variant="purple" size="md" className="text-xs">
                  <UploadCloud className="w-4 h-4 mr-1.5" />
                  Contribute Material
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Explicit Demonstration Data Disclosure Banner (Adhering to Section 5) */}
        <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-950 font-sans space-y-1">
            <strong className="font-bold">Demonstration Interface Data Notice:</strong>
            <p>
              The materials shown below are sample demonstration specimens designed to showcase UI filtering, search, and reading layouts. <strong>These are demonstration items and are not connected to government educational portals or official ministry APIs in Phase 1.</strong>
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <ResourceFilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedBoard={selectedBoard}
          setSelectedBoard={setSelectedBoard}
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
          selectedSubject={selectedSubject}
          setSelectedSubject={setSelectedSubject}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedSource={selectedSource}
          setSelectedSource={setSelectedSource}
          onReset={handleResetFilters}
        />

        {/* Results Header */}
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-2 font-bubble">
          <span>Showing {filteredResources.length} demonstration learning resources</span>
          {filteredResources.length === 0 && (
            <button onClick={handleResetFilters} className="text-sky-600 hover:underline">
              Clear filters to view all
            </button>
          )}
        </div>

        {/* Resource Cards Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredResources.map((res) => (
              <ResourceCard
                key={res.id}
                resource={res}
                onPreview={(r) => setPreviewingResource(r)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-slate-200 p-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto text-3xl">
              🔍
            </div>
            <h3 className="font-bubble text-xl font-bold text-slate-800">
              No matching demonstration resources found
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Try adjusting your search keywords or switching filters like Board or Grade to explore more materials.
            </p>
            <Button variant="secondary" size="sm" onClick={handleResetFilters}>
              Reset Filters
            </Button>
          </div>
        )}

      </div>

      {/* Resource Quick Preview Modal */}
      {previewingResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border-4 border-sky-200 overflow-hidden relative">
            <div className="p-6 bg-gradient-to-r from-sky-500 to-blue-600 text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-white/20">
                  {previewingResource.format} Specimen Preview
                </span>
                <h3 className="font-bubble text-xl font-bold mt-1">
                  {previewingResource.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewingResource(null)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center py-8">
                <span className="text-5xl">📄</span>
                <p className="font-bubble font-bold text-slate-800 mt-2">
                  Sample Demonstration Reader
                </p>
                <p className="text-xs text-slate-500 max-w-xs mx-auto mt-1">
                  {previewingResource.description}
                </p>
              </div>

              <div className="text-xs space-y-1 text-slate-600">
                <p><strong>Grade:</strong> {previewingResource.classLevel}</p>
                <p><strong>Language:</strong> {previewingResource.language}</p>
                <p><strong>Board Category:</strong> {previewingResource.board}</p>
                <p><strong>Status:</strong> Interface demonstration prototype only</p>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <Button variant="secondary" size="sm" onClick={() => setPreviewingResource(null)}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    alert('Demonstration specimen: in Phase 2 this initiates direct open download.');
                    setPreviewingResource(null);
                  }}
                >
                  <Eye className="w-4 h-4 mr-1" />
                  Close Preview
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
