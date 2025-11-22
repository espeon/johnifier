import { GreetingDefinition } from '../types';

// Very specific time-based greetings (Chinese Traditional)
export const timeSpecificGreetings: GreetingDefinition[] = [
  // Lunch time (11am-2pm)
  {
    text: '午餐時光',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 11 && hour < 14,
  },
  {
    text: '該吃點東西了？',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: ({ name }) => `${name}，午餐吃什麼？`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: '中午補充能量中',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },

  // Coffee/Breakfast time (7-10am)
  {
    text: '早餐時間 ☕',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 7 && hour < 10,
  },
  {
    text: '咖啡時間 ☕',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: '靠咖啡因運作中',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: ({ name }) => `${name} + 咖啡 = 無可阻擋`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },

  // Golden hour (5-7pm)
  {
    text: '黃金時刻能量',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },
  {
    text: '日落時分',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },
  {
    text: ({ name }) => `${name}，捕捉黃金時刻`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },

  // Midnight exactly
  {
    text: '正好午夜...噢等等，就是這裡',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 0,
  },
  {
    text: '時鐘敲響十二下',
    mood: 'mysterious',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 0,
  },
  {
    text: ({ name }) => `${name}，新的一天了（技術上）`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour === 0,
  },

  // 3AM
  {
    text: '凌晨3點的思緒不一樣',
    mood: 'mysterious',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 3,
  },
  {
    text: '凌晨3點真相時刻',
    mood: 'mysterious',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 3,
  },
  {
    text: ({ name }) => `${name}，為什麼還醒著？`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour === 3,
  },

  // 4AM
  {
    text: '凌晨4點衝刺',
    mood: 'mysterious',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 4,
  },
  {
    text: '早起或晚睡？',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 4,
  },

  // Tea time (3-5pm)
  {
    text: '下午茶時間 🫖',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 15 && hour < 17,
  },
  {
    text: '該休息一下了',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 15 && hour < 17,
  },

  // Late night work (10pm-2am)
  {
    text: '深夜工作模式',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && ((hour >= 22 && hour < 24) || (hour >= 0 && hour < 2)),
  },
  {
    text: '夜貓子時間',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && ((hour >= 22 && hour < 24) || (hour >= 0 && hour < 2)),
  },

  // Early morning (5-7am)
  {
    text: '清晨時光',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: '早起的鳥兒',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },

  // Dinner time (6-8pm)
  {
    text: '晚餐時間',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 20,
  },
  {
    text: ({ name }) => `${name}，晚餐吃什麼？`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 20,
  },

  // Late evening (9-11pm)
  {
    text: '夜晚放鬆時光',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 21 && hour < 23,
  },
  {
    text: '夜深了',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 21 && hour < 23,
  },

  // Exact 12 noon
  {
    text: '正午時分',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 12,
  },
];
