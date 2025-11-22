import { GreetingDefinition } from '../types';

// Japanese seasonal and day-specific greetings
export const seasonalGreetings: GreetingDefinition[] = [
  // === WEEKDAY/WEEKEND GREETINGS ===
  {
    text: '金曜日！',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: '週末だ！',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 0 || day === 6,
  },
  {
    text: '土曜日',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: 'ゆっくり日曜日',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 0,
  },

  // === SEASONAL GREETINGS ===
  {
    text: '冬の雰囲気',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: '夏の暑さ！',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: '春だね',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: '秋の季節',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
];
