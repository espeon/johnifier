import { GreetingDefinition } from '../types';

// Korean seasonal greetings
export const seasonalGreetings: GreetingDefinition[] = [
  // Monday
  {
    text: '월요일 파이팅!',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: ({ name }) => `${name}님, 월요일 화이팅!`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 1,
  },

  // Friday
  {
    text: '금요일이에요!',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: ({ name }) => `${name}님, 불금 즐기세요!`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 5,
  },

  // Weekend
  {
    text: '즐거운 주말 보내세요',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: ({ name }) => `${name}님, 주말 즐기세요!`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },

  // Seasons
  {
    text: '봄이 왔어요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: '여름이네요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: '가을이에요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: '겨울이네요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
];
