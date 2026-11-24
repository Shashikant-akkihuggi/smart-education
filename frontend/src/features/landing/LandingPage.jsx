import React from 'react';
import { HeroSection } from './HeroSection';
import { WorldPreviewSection } from './WorldPreviewSection';
import { VernacularSection } from './VernacularSection';
import { GamesIntroSection } from './GamesIntroSection';
import { ResourcesIntroSection } from './ResourcesIntroSection';

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WorldPreviewSection />
      <VernacularSection />
      <GamesIntroSection />
      <ResourcesIntroSection />
    </div>
  );
}

