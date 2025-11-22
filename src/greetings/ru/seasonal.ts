import { GreetingDefinition } from '../types';

// Russian seasonal greetings
export const seasonalGreetings: GreetingDefinition[] = [
  // Monday
  {
    text: 'С понедельником',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 1,
  },

  // Friday
  {
    text: 'Пятница!',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: ({ name }) => `${name}, пятница наконец!`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 5,
  },

  // Weekend
  {
    text: 'Хороших выходных',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: ({ name }) => `${name}, отличных выходных!`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },

  // Seasons
  {
    text: 'Весна пришла',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Лето!',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Осень здесь',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Зимнее настроение',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
];
