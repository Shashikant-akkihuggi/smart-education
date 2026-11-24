import React from 'react';
import { createBrowserRouter, Outlet, Link } from 'react-router-dom';
import { Navbar } from '../shared/components/Navbar';
import { Footer } from '../shared/components/Footer';

import { LandingPage } from '../features/landing/LandingPage';
import { StudentEntryPage } from '../features/student/StudentEntryPage';
import { LearningWorldPage } from '../features/learning-world/LearningWorldPage';
import { GamesPage } from '../features/games/GamesPage';
import { ResourceLibraryPage } from '../features/resource-library/ResourceLibraryPage';
import { ResourceUploadPage } from '../features/resource-upload/ResourceUploadPage';
import { AiLearningPage } from '../features/ai-learning/AiLearningPage';
import { LiveTranslationPage } from '../features/live-translation/LiveTranslationPage';

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-24 h-24 mb-4">
        <img src="/robot-logo.svg" alt="Mitra" className="w-full h-full object-contain" />
      </div>
      <h1 className="text-3xl font-bold font-bubble text-slate-800 mb-2">Oops! Island Not Found</h1>
      <p className="text-slate-600 max-w-md mb-6">
        Looks like you flew a bit too far into the clouds! Let's get you back to our friendly learning islands.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-bold shadow-md transition"
      >
        Fly Back Home 🚀
      </Link>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: 'student',
        element: <StudentEntryPage />
      },
      {
        path: 'games',
        element: <GamesPage />
      },
      {
        path: 'resources',
        element: <ResourceLibraryPage />
      },
      {
        path: 'upload',
        element: <ResourceUploadPage />
      },
      {
        path: 'ai-learning',
        element: <AiLearningPage />
      },
      {
        path: 'live-translation',
        element: <LiveTranslationPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  },
  {
    // 3D learning world has an immersive full-screen layout with integrated navigation
    path: 'learning-world',
    element: <LearningWorldPage />
  }
]);

