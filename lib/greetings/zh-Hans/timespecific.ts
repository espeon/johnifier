import { GreetingDefinition } from '../types';

// Chinese Simplified very specific time-based greetings
export const timeSpecificGreetings: GreetingDefinition[] = [
  // Lunch time (11am-2pm)
  {
    text: '午餐时间氛围',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 11 && hour < 14,
  },
  {
    text: '是时候吃点东西了吗',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: ({ name }) => `${name}，午餐吃什么？`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: '中午能量补充中',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: '干饭时间',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },

  // Coffee time (9-11am)
  {
    text: '咖啡时间',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: '靠咖啡因运行',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: ({ name }) => `${name} + 咖啡 = 无敌`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: '需要续命咖啡了',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },

  // Golden hour (5-7pm)
  {
    text: '黄金时刻能量',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },
  {
    text: '日落将至',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },
  {
    text: ({ name }) => `${name}，捕捉黄金时刻`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },

  // Midnight exactly
  {
    text: '午夜时分',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 0,
  },
  {
    text: '时钟敲响十二点',
    mood: 'mysterious',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 0,
  },
  {
    text: ({ name }) => `${name}，新的一天了（技术上）`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour === 0,
  },

  // 3AM
  {
    text: '凌晨三点的思绪不一样',
    mood: 'mysterious',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 3,
  },
  {
    text: '凌晨三点的真理时刻',
    mood: 'mysterious',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 3,
  },
  {
    text: ({ name }) => `${name}，你怎么还醒着？`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour === 3,
  },

  // Noon exactly
  {
    text: '正午时分',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 12,
  },
  {
    text: '十二点整',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 12,
  },

  // Early morning (5-6am)
  {
    text: '这么早醒来的决心',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: '日出俱乐部',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: ({ name }) => `${name}，起床奋斗`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: '早起的鸟儿',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },

  // Prime working hours (2-4pm)
  {
    text: '下午奋斗时间',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },
  {
    text: '巅峰生产力时段',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },
  {
    text: ({ name }) => `${name}，征服下午`,
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },

  // End of workday (5-6pm)
  {
    text: '快下班了',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },
  {
    text: '最后冲刺',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },
  {
    text: ({ name }) => `${name}，漂亮收尾`,
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },

  // Late night (10pm-midnight)
  {
    text: '深夜模式',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 22 && hour < 24,
  },
  {
    text: '夜猫子时间',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 22 && hour < 24,
  },
];
