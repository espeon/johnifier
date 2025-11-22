import { GreetingDefinition } from '../types';

// Chinese Simplified incognito/privacy mode greetings
export const incognitoGreetings: GreetingDefinition[] = [
  // Morning incognito
  {
    text: '早上好，神秘的陌生人',
    mood: 'mysterious',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '隐身模式：早晨版',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '阴影在今早向你致意',
    mood: 'mysterious',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Afternoon incognito
  {
    text: '下午好，幽灵',
    mood: 'mysterious',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '隐私模式：已启动',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '雷达下运行',
    mood: 'mysterious',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Evening incognito
  {
    text: '晚上好，幻影',
    mood: 'mysterious',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '夜间模式 + 隐身 = 极致隐秘',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '黑夜保护无名者',
    mood: 'mysterious',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // General incognito (any time)
  {
    text: '欢迎，神秘访客',
    mood: 'mysterious',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
  },
  {
    text: '你的秘密与我们同在',
    mood: 'mysterious',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
  },
  {
    text: '你好，匿名者',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
  },
  {
    text: '问候，数字幽灵',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
  },
  {
    text: '嘘...我们不会记得你来过',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
  },
  {
    text: '在阴影中浏览',
    mood: 'mysterious',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
  },
  {
    text: '无历史，无痕迹',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
  },
  {
    text: '隐私模式已启动',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
  },
  {
    text: '虚空认可了你',
    mood: 'mysterious',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
  },
  {
    text: '无名但非无面',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
  },
  {
    text: '卧底模式已激活',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
  },
  {
    text: '不留痕迹',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: true, workMode: false },
  },

  // Work mode + incognito
  {
    text: '专业。私密。完美。',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: true, workMode: true },
  },
  {
    text: '隐秘生产力模式',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: true, workMode: true },
  },
  {
    text: '机密工作会话已启动',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: true, workMode: true },
  },
];
