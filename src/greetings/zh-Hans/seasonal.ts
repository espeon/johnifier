import { GreetingDefinition } from '../types';

// Chinese Simplified seasonal greetings
export const seasonalGreetings: GreetingDefinition[] = [
  // Monday
  {
    text: '周一快乐',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: ({ name }) => `${name}，新的一周开始了！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 1,
  },

  // Friday
  {
    text: '周五了，加油！',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: ({ name }) => `${name}，周五快乐！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 5,
  },

  // Weekend
  {
    text: '周末愉快',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: ({ name }) => `${name}，周末快乐！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },

  // Spring
  {
    text: '春天好',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },

  // Summer
  {
    text: '夏日快乐',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },

  // Autumn
  {
    text: '秋天好',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },

  // Winter
  {
    text: '冬天快乐',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
];
