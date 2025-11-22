import { GreetingDefinition } from '../types';

// Chinese Traditional seasonal greetings
export const seasonalGreetings: GreetingDefinition[] = [
  // Monday
  {
    text: '週一快樂',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 1,
  },

  // Friday
  {
    text: '週五了，加油！',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 5,
  },

  // Weekend
  {
    text: '週末愉快',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: ({ name }) => `${name}，週末快樂！`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },

  // Seasons
  {
    text: '春天好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: '夏日快樂',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: '秋天好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: '冬天快樂',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
];
