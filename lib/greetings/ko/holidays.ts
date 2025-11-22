import { GreetingDefinition } from '../types';

// Korean holiday-specific greetings
export const holidayGreetings: GreetingDefinition[] = [
  // New Year's Day
  {
    text: '새해 복 많이 받으세요!',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: ({ name }) => `새해 복 많이 받으세요, ${name}님!`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: '새로운 시작 에너지',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 0,
  },

  // Seollal (Lunar New Year) - approximate dates Jan/Feb
  {
    text: '설날 복 많이 받으세요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 0 || month === 1,
  },
  {
    text: ({ name }) => `${name}님, 새해 복 많이 받으세요!`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 0 || month === 1,
  },

  // Independence Movement Day (March 1)
  {
    text: '삼일절을 기억하며',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 2 && day !== undefined && day === 1,
  },

  // Children's Day (May 5)
  {
    text: '어린이날이에요!',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 4 && day !== undefined && day === 5,
  },
  {
    text: '즐거운 어린이날 되세요',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 4 && day !== undefined && day === 5,
  },

  // Buddha's Birthday (usually in May)
  {
    text: '부처님 오신 날',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 4,
  },

  // Memorial Day (June 6)
  {
    text: '현충일을 기억하며',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 5 && day !== undefined && day === 6,
  },

  // Liberation Day (August 15)
  {
    text: '광복절 축하합니다',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 7 && day !== undefined && day === 15,
  },

  // Chuseok (Korean Thanksgiving) - usually September
  {
    text: '추석 잘 보내세요!',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 8,
  },
  {
    text: ({ name }) => `${name}님, 즐거운 추석 되세요!`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 8,
  },
  {
    text: '한가위 복 많이 받으세요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 8,
  },

  // National Foundation Day (October 3)
  {
    text: '개천절 축하합니다',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 3,
  },

  // Hangul Day (October 9)
  {
    text: '한글날 축하합니다',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 9,
  },
  {
    text: '한글의 아름다움을 기념하며',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 9,
  },

  // Christmas season
  {
    text: '메리 크리스마스!',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: ({ name }) => `${name}님, 메리 크리스마스!`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: '연말 분위기',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: '따뜻한 연말 되세요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },

  // New Year's Eve
  {
    text: '한 해를 마무리하며',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },
  {
    text: '새해 전야 기운',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },
];
