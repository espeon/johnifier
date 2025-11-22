import { GreetingDefinition } from '../types';

// Chinese Simplified general greetings
export const generalGreetings: GreetingDefinition[] = [
  // Morning
  {
    text: '早上好',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `早上好，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '新的一天，加油！',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}，早安！`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Afternoon
  {
    text: '下午好',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `下午好，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '午安',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Evening
  {
    text: '晚上好',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `晚上好，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '晚安',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 22,
  },

  // General
  {
    text: '你好',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `你好，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '欢迎',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `欢迎回来，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '很高兴见到你',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `很高兴见到你，${name}`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },

  // Work mode
  {
    text: '开始工作吧',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true },
  },
  {
    text: ({ name }) => `${name}，加油工作！`,
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '今天也要努力',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true },
  },
];
