import { GreetingDefinition } from '../types';

// Holiday-specific greetings (Chinese Traditional)
export const holidayGreetings: GreetingDefinition[] = [
  // === LUNAR NEW YEAR / SPRING FESTIVAL (春節) ===
  // Note: Lunar calendar dates vary, using approximate Gregorian calendar dates
  {
    text: '恭喜發財！',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) =>
      (month === 0 && day !== undefined && day >= 15 && day <= 31) ||
      (month === 1 && day !== undefined && day >= 1 && day <= 28),
  },
  {
    text: '新年快樂！',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) =>
      (month === 0 && day !== undefined && day >= 15 && day <= 31) ||
      (month === 1 && day !== undefined && day >= 1 && day <= 28),
  },
  {
    text: ({ name }) => `${name}，恭喜發財，紅包拿來！`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) =>
      (month === 0 && day !== undefined && day >= 15 && day <= 31) ||
      (month === 1 && day !== undefined && day >= 1 && day <= 28),
  },
  {
    text: '春節快樂',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) =>
      (month === 0 && day !== undefined && day >= 15 && day <= 31) ||
      (month === 1 && day !== undefined && day >= 1 && day <= 28),
  },

  // === LANTERN FESTIVAL (元宵節) ===
  {
    text: '元宵節快樂！',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day >= 20 && day <= 28,
  },

  // === DRAGON BOAT FESTIVAL (端午節) ===
  {
    text: '端午節快樂！',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 5,
  },
  {
    text: '吃粽子了嗎？',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 5,
  },

  // === MID-AUTUMN FESTIVAL (中秋節) ===
  {
    text: '中秋節快樂！',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 8,
  },
  {
    text: '月圓人團圓',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 8,
  },
  {
    text: ({ name }) => `${name}，烤肉了嗎？`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 8,
  },
  {
    text: '賞月愉快',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 8,
  },

  // === DOUBLE TENTH DAY (雙十國慶) - October 10 ===
  {
    text: '國慶日快樂！',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day === 10,
  },
  {
    text: '雙十節愉快',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day === 10,
  },

  // === WESTERN NEW YEAR ===
  {
    text: '新年快樂！新的開始',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: ({ name }) => `新年，同樣精彩的${name}`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: '新年新氣象',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 0,
  },

  // === VALENTINE'S DAY ===
  {
    text: '愛意滿滿 ❤️',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },
  {
    text: ({ name }) => `${name}，你是甜心`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },
  {
    text: '情人節快樂！',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },

  // === WHITE DAY (March 14) ===
  {
    text: '白色情人節快樂',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 2 && day !== undefined && day === 14,
  },

  // === APRIL FOOLS ===
  {
    text: '今天別相信任何人',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 3 && day !== undefined && day === 1,
  },
  {
    text: '這個問候絕對不是玩笑',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 3 && day !== undefined && day === 1,
  },

  // === MOTHER'S DAY ===
  {
    text: '母親節快樂！',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 4,
  },

  // === CHILDREN'S DAY (April 4) ===
  {
    text: '兒童節快樂',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 3 && day === 4,
  },

  // === HALLOWEEN ===
  {
    text: '萬聖節快樂！🎃',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 31,
  },
  {
    text: '鬼怪季節氛圍',
    mood: 'mysterious',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 9,
  },
  {
    text: ({ name }) => `嘿！開玩笑的，嗨${name}`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 31,
  },

  // === CHRISTMAS ===
  {
    text: '聖誕快樂！🎄',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: ({ name }) => `${name}，聖誕快樂！`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: '節日氛圍',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },

  // === TOMB SWEEPING DAY (清明節) - April 4-5 ===
  {
    text: '清明時節',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 3 && day !== undefined && day >= 4 && day <= 5,
  },
];
