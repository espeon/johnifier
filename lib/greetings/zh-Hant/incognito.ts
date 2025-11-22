import { GreetingDefinition } from '../types';

// Incognito/privacy mode greetings (no names, mysterious vibes)
export const incognitoGreetings: GreetingDefinition[] = [
  // Morning incognito
  {
    text: '早安，神秘訪客',
    mood: 'mysterious',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '隱身模式：早晨版',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '陰影在今早向你問候',
    mood: 'mysterious',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Afternoon incognito
  {
    text: '午安，幽靈',
    mood: 'mysterious',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '隱私模式：已啟動',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '在雷達下運作',
    mood: 'mysterious',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Evening incognito
  {
    text: '晚安，幻影',
    mood: 'mysterious',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '夜間模式 + 隱私 = 巔峰隱身',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '夜晚保護無名者',
    mood: 'mysterious',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Late night incognito
  {
    text: '是誰？（我們不會說）',
    mood: 'mysterious',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: '凌晨3點隱私能量',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },

  // General incognito (any time)
  {
    text: '歡迎，神秘訪客',
    mood: 'mysterious',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
  },
  {
    text: '你的秘密我們會保守',
    mood: 'mysterious',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
  },
  {
    text: '你好，匿名者',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
  },
  {
    text: '問候，數位幽靈',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
  },
  {
    text: '噓...我們不會記得你來過',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
  },
  {
    text: '在陰影中瀏覽',
    mood: 'mysterious',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
  },
  {
    text: '無歷史，無痕跡',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
  },
  {
    text: '隱私模式啟動',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
  },
  {
    text: '虛空認可你',
    mood: 'mysterious',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
  },
  {
    text: '這裡發生的事...都不留',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
  },
  {
    text: '無名但非無臉',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
  },
  {
    text: '臥底模式啟動',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
  },
  {
    text: '誰？我們不認識你',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
  },
  {
    text: '不留痕跡',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: true, workMode: false },
  },

  // Work mode + incognito
  {
    text: '專業。私密。完美。',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: true, workMode: true },
  },
  {
    text: '隱身生產力模式',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: true, workMode: true },
  },
  {
    text: '機密工作時段已啟動',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: true, workMode: true },
  },
  {
    text: '無記錄，全力工作',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: true, workMode: true },
  },
];
