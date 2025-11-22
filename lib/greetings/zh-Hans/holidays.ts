import { GreetingDefinition } from '../types';

// Chinese Simplified holiday-specific greetings
export const holidayGreetings: GreetingDefinition[] = [
  // === CHINESE HOLIDAYS ===

  // Spring Festival (Chinese New Year) - Lunar calendar, approximated to late Jan/early Feb
  {
    text: '新年快乐！',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) =>
      (month === 0 && day !== undefined && day >= 20) ||
      (month === 1 && day !== undefined && day <= 15),
  },
  {
    text: '春节快乐，万事如意！',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) =>
      (month === 0 && day !== undefined && day >= 20) ||
      (month === 1 && day !== undefined && day <= 15),
  },
  {
    text: ({ name }) => `${name}，新年快乐！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) =>
      (month === 0 && day !== undefined && day >= 20) ||
      (month === 1 && day !== undefined && day <= 15),
  },
  {
    text: '恭喜发财，红包拿来',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) =>
      (month === 0 && day !== undefined && day >= 20) ||
      (month === 1 && day !== undefined && day <= 15),
  },

  // Lantern Festival (15th day after Spring Festival)
  {
    text: '元宵节快乐！',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day >= 10 && day <= 20,
  },

  // Qingming Festival (Tomb Sweeping Day) - early April
  {
    text: '清明时节',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 3 && day !== undefined && day >= 4 && day <= 6,
  },

  // Dragon Boat Festival - approximated to June
  {
    text: '端午节快乐！',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 5 && day !== undefined && day >= 10 && day <= 20,
  },
  {
    text: '吃粽子啦',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 5 && day !== undefined && day >= 10 && day <= 20,
  },

  // Mid-Autumn Festival - approximated to mid-September
  {
    text: '中秋节快乐！',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 8 && day !== undefined && day >= 15 && day <= 25,
  },
  {
    text: '月圆人团圆',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 8 && day !== undefined && day >= 15 && day <= 25,
  },
  {
    text: ({ name }) => `${name}，中秋快乐！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 8 && day !== undefined && day >= 15 && day <= 25,
  },
  {
    text: '吃月饼啦',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 8 && day !== undefined && day >= 15 && day <= 25,
  },

  // National Day (October 1)
  {
    text: '国庆节快乐！',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 1,
  },
  {
    text: ({ name }) => `${name}，国庆快乐！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 1,
  },
  {
    text: '祖国生日快乐',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day >= 1 && day <= 7,
  },

  // === INTERNATIONAL HOLIDAYS ===

  // New Year's Day (January 1)
  {
    text: '元旦快乐！',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: ({ name }) => `新年新气象，${name}`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },

  // Valentine's Day (February 14)
  {
    text: '情人节快乐',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },
  {
    text: ({ name }) => `${name}，情人节快乐`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },

  // April Fools' Day (April 1)
  {
    text: '愚人节快乐，小心被骗哦',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 3 && day !== undefined && day === 1,
  },

  // Halloween (October 31)
  {
    text: '万圣节快乐！',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 31,
  },
  {
    text: ({ name }) => `${name}，万圣节快乐！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 31,
  },
  {
    text: '不给糖就捣蛋',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 31,
  },

  // Christmas (December 25)
  {
    text: '圣诞快乐！',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: ({ name }) => `${name}，圣诞快乐！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: '节日季节的魔力',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: '温馨的节日氛围',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
];
