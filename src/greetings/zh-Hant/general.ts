import { GreetingDefinition } from '../types';

// Chinese Traditional general greetings
export const generalGreetings: GreetingDefinition[] = [
  // Morning
  {
    text: '早安',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `早安，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '新的一天，加油！',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Afternoon
  {
    text: '午安',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `午安，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '下午好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Evening
  {
    text: '晚安',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `晚安，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // General
  {
    text: '你好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `你好，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '歡迎',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `歡迎回來，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '很高興見到你',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false },
  },

  // Work mode
  {
    text: '開始工作吧',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true },
  },
  {
    text: ({ name }) => `${name}，加油工作！`,
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: true },
  },
];
