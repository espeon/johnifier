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

  // Seasons - Spring
  {
    text: '봄이 왔어요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: '따뜻한 봄날',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `${name}님, 봄이에요!`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: '봄 기운 가득',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: '꽃피는 계절',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: '봄바람이 불어요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },

  // Seasons - Summer
  {
    text: '여름이네요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: '뜨거운 여름',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `${name}님, 여름이에요!`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: '여름 바이브',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: '시원하게 보내세요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: '여름 햇살 아래',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },

  // Seasons - Fall/Autumn
  {
    text: '가을이에요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: '낙엽 지는 계절',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: ({ name }) => `${name}님, 가을이네요!`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: '가을 감성',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: '단풍 구경 가요',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: '선선한 가을',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },

  // Seasons - Winter
  {
    text: '겨울이네요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: '추운 겨울',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `${name}님, 겨울이에요!`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: '겨울 감성',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: '따뜻하게 입으세요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: '눈 오는 계절',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },

  // Additional weekday greetings
  {
    text: '화요일도 화이팅',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 2,
  },
  {
    text: '수요일 절반 왔어요',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 3,
  },
  {
    text: ({ name }) => `${name}님, 수요일!`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 3,
  },
  {
    text: '목요일 거의 다 왔어요',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 4,
  },
  {
    text: ({ name }) => `${name}님, 목요일 파이팅!`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 4,
  },
  {
    text: '토요일 즐기세요',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: ({ name }) => `${name}님, 토요일!`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: '일요일 편히 쉬세요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 0,
  },
  {
    text: ({ name }) => `${name}님, 일요일 휴식!`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 0,
  },
];
