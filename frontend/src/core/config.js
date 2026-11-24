// Application constants and core configuration
export const APP_CONFIG = {
  name: 'BhashaMitra AI',
  tagline: 'Vernacular Learning Adventure for Young Explorers',
  version: '1.0.0-phase1',
  supportEmail: 'hello@bhashamitra.ai',
  primaryTarget: 'Primary School Students (Classes 1-5)',
  colors: {
    primary: '#0284c7', // Sky Blue
    accent: '#9333ea',  // Purple
    sunshine: '#f59e0b',
    mint: '#10b981',
    coral: '#f43f5e'
  }
};

export const LEARNING_ZONES = [
  {
    id: 'math',
    name: 'Ganit Shikhar (Maths)',
    vernacular: 'गणित शिखर',
    english: 'Mathematics Wonder Island',
    description: 'Explore shapes, numbers, fun tables, and playful counting puzzles with friendly visual blocks!',
    color: '#0284c7',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
    topics: ['Counting & Numbers', 'Shapes & Geometry', 'Addition & Subtraction', 'Fun Multiplication Games'],
    icon: 'Calculator',
    position: [-3.8, 1.2, 0.5],
    accentColor: 'from-sky-400 to-blue-600',
    characterPrompt: 'Let\'s count the twinkling stars and solve number puzzles together!'
  },
  {
    id: 'science',
    name: 'Vigyan Vatika (Science)',
    vernacular: 'विज्ञान वाटिका',
    english: 'Science & Nature Grove',
    description: 'Discover how plants grow, why rainbows form, planets in the solar system, and curious animal secrets.',
    color: '#10b981',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    topics: ['Living Things & Plants', 'Solar System & Earth', 'Water & Rainbows', 'Animals & Habitats'],
    icon: 'Sparkles',
    position: [3.8, 1.1, -0.6],
    accentColor: 'from-emerald-400 to-teal-600',
    characterPrompt: 'Curious about how plants breathe? Come explore the green wonders!'
  },
  {
    id: 'languages',
    name: 'Bhasha Van (Languages)',
    vernacular: 'भाषा वन',
    english: 'Language & Akshar Forest',
    description: 'Learn mother tongues, Hindi, English, and regional dialects through storybooks, rhymes, and phonics.',
    color: '#a855f7',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
    topics: ['Alphabets & Akshar', 'Picture Vocabulary', 'Story Narration', 'Rhymes & Vernacular Poems'],
    icon: 'BookOpen',
    position: [0.2, 2.2, -3.2],
    accentColor: 'from-purple-400 to-indigo-600',
    characterPrompt: 'Speak, listen, and sing! Every language has magical stories to tell.'
  },
  {
    id: 'general-knowledge',
    name: 'Jigyasa Dweep (GK)',
    vernacular: 'जिज्ञासा द्वीप',
    english: 'Curiosity & General Knowledge',
    description: 'Travel across India\'s diverse states, culture, festivals, world wonders, and everyday safety awareness.',
    color: '#f59e0b',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    topics: ['Incredible India', 'Festivals & Folk Tales', 'Famous Leaders', 'Cleanliness & Green Planet'],
    icon: 'Compass',
    position: [0.0, 0.8, 3.4],
    accentColor: 'from-amber-400 to-orange-500',
    characterPrompt: 'Pack your virtual backpack! Let\'s embark on a journey of discovery!'
  }
];

export { BOARDS, CLASSES, SUBJECTS, RESOURCE_TYPES } from '../shared/utils/languages';
