import { GreetingDefinition } from '../types';

// Portuguese seasonal greetings
export const seasonalGreetings: GreetingDefinition[] = [
  // Monday
  {
    text: 'Feliz segunda-feira',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 1,
  },

  // Friday
  {
    text: 'Sextou!',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: ({ name }) => `${name}, sextou!`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 5,
  },

  // Weekend
  {
    text: 'Bom fim de semana',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: ({ name }) => `${name}, bom fim de semana!`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },

  // Seasons
  {
    text: 'Primavera chegou',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Verão vibes',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
];
