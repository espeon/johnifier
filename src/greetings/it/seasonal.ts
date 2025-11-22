import { GreetingDefinition } from '../types';

// Italian seasonal greetings
export const seasonalGreetings: GreetingDefinition[] = [
  // Monday
  {
    text: 'Buon lunedì',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 1,
  },

  // Friday
  {
    text: 'Buon venerdì',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: ({ name }) => `${name}, buon venerdì!`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 5,
  },

  // Weekend
  {
    text: 'Buon fine settimana',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: ({ name }) => `${name}, buon weekend!`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },

  // Seasons
  {
    text: 'È primavera',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Estate felice',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
];
