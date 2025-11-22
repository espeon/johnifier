import { GreetingDefinition } from '../types';

// French seasonal and day-specific greetings
export const seasonalGreetings: GreetingDefinition[] = [
  // === WEEKDAY/WEEKEND GREETINGS ===
  {
    text: 'Vendredi!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: 'Weekend mode!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 0 || day === 6,
  },
  {
    text: 'Dimanche tranquille',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 0,
  },

  // === SEASONAL GREETINGS ===
  {
    text: 'Ambiance hivernale',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Été chaud!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Printemps frais',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Automne magnifique',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
];
