import { GreetingDefinition } from '../types';

// Korean general greetings
export const generalGreetings: GreetingDefinition[] = [
  // Morning
  {
    text: '좋은 아침이에요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `좋은 아침이에요, ${name}님`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '굿모닝!',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Afternoon
  {
    text: '안녕하세요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `안녕하세요, ${name}님`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '좋은 오후예요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Evening
  {
    text: '좋은 저녁이에요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `좋은 저녁이에요, ${name}님`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // General
  {
    text: '안녕하세요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `안녕하세요, ${name}님`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '환영합니다',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `환영합니다, ${name}님`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '반가워요',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `반가워요, ${name}님`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },

  // Work mode
  {
    text: '화이팅!',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true },
  },
  {
    text: ({ name }) => `${name}님, 화이팅!`,
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '오늘도 파이팅',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true },
  },
];
