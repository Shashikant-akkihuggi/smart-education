# BhashaMitra AI — Vernacular Learning Platform (Phase 1 Frontend Foundation)

**BhashaMitra AI** is an AI-powered vernacular learning platform designed primarily for primary-school students (Classes 1–5). It transforms foundational learning into a colourful, joyful 3D adventure island guided by a friendly robot companion, **Mitra**.

---

## 🌟 Vision & Key Features

- **3D Learning Island (`/learning-world`)**: An interactive 3D floating adventure world built with Three.js, React Three Fiber, and Drei, featuring floating islands, rivers, bridges, low-poly clouds, and themed learning zones.
- **Multilingual Vernacular Support (`/student`)**: Seamless language switching across 10 Indian vernacular tongues (Hindi, Marathi, Tamil, Telugu, Bengali, Gujarati, Kannada, Odia, Punjabi, and English).
- **Gamified Learning Hub (`/games`)**: Game cards and offline interactive preview demos for *Knowledge Quest*, *Word Match*, and *Treasure Hunt*.
- **Public Educational Resource Library (`/resources`)**: Curated worksheets, interactive stories, audio rhymes, and flashcards filterable by Board, Class, Subject, and Language.
- **Student Resource Contribution (`/upload`)**: Drag-and-drop submission interface with pre-publication child-safety moderation guidelines and copyright declarations.
- **Child-Friendly Aesthetics**: Sky-blue, purple, and sunshine-yellow palette, rounded bubbly typography (Fredoka & Plus Jakarta Sans), and responsive layout.

---

## 🛡️ Strict Product Rules Followed

1. **Student-First Platform**: No teacher portals, teacher registrations, or teacher logins.
2. **Open Access**: No classroom codes or invitations; students can explore without mandatory sign-up.
3. **No Fabricated AI**: Zero fake AI outputs or pretend backend endpoints in Phase 1.
4. **Zero Paid APIs**: Completely free, lightweight, client-side offline-ready prototype.
5. **Modular Architecture**: Feature-based folder structure ready for future FastAPI backend integration.

---

## 🚀 Tech Stack

- **Framework**: React 18 & Vite 5
- **Styling**: Tailwind CSS & PostCSS
- **Routing**: React Router v6
- **3D Graphics**: Three.js, React Three Fiber (`@react-three/fiber`), and Drei (`@react-three/drei`)
- **Animation**: Motion (`framer-motion`)
- **Icons**: Lucide React

---

## 📂 Project Directory Structure

```text
smart-education/
├── README.md
└── frontend/
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── index.html
    ├── public/
    │   └── robot-logo.svg
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── core/
        │   ├── router.jsx
        │   └── config.js
        ├── shared/
        │   ├── components/
        │   │   ├── Navbar.jsx
        │   │   ├── Footer.jsx
        │   │   ├── RobotCompanion.jsx
        │   │   ├── Button.jsx
        │   │   └── Card.jsx
        │   ├── hooks/
        │   │   └── useLanguage.js
        │   └── utils/
        │       ├── languages.js
        │       └── helpers.js
        ├── features/
        │   ├── landing/
        │   │   ├── LandingPage.jsx
        │   │   ├── HeroSection.jsx
        │   │   ├── WorldPreviewSection.jsx
        │   │   ├── VernacularSection.jsx
        │   │   ├── GamesIntroSection.jsx
        │   │   └── ResourcesIntroSection.jsx
        │   ├── student/
        │   │   ├── StudentEntryPage.jsx
        │   │   └── LanguageSelector.jsx
        │   ├── learning-world/
        │   │   ├── LearningWorldPage.jsx
        │   │   ├── IslandCanvas.jsx
        │   │   ├── IslandScene.jsx
        │   │   ├── RobotAvatar3D.jsx
        │   │   ├── ZoneMarker.jsx
        │   │   ├── ZoneDetailModal.jsx
        │   │   └── WorldControls.jsx
        │   ├── games/
        │   │   ├── GamesPage.jsx
        │   │   ├── GameCard.jsx
        │   │   └── GamePreviewModal.jsx
        │   ├── resource-library/
        │   │   ├── ResourceLibraryPage.jsx
        │   │   ├── ResourceFilterBar.jsx
        │   │   ├── ResourceCard.jsx
        │   │   └── sampleResources.js
        │   ├── resource-upload/
        │   │   ├── ResourceUploadPage.jsx
        │   │   ├── FileDropzone.jsx
        │   │   └── UploadSuccessModal.jsx
        │   ├── ai-learning/
        │   │   └── index.js
        │   └── live-translation/
        │       └── index.js
        └── styles/
            └── index.css
```

---

## 🛠️ Running Locally

1. **Navigate to the frontend folder**:
   ```bash
   cd frontend
   ```

2. **Install dependencies** (if not already installed):
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm dev
   ```

4. **Production Build**:
   ```bash
   pnpm run build
   ```
