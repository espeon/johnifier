import { GreetingDefinition } from '../types';

// Chinese Traditional seasonal greetings
export const seasonalGreetings: GreetingDefinition[] = [
  // Monday
  {
    text: '週一快樂',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 1,
  },

  // Friday
  {
    text: '週五了，加油！',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 5,
  },

  // Weekend
  {
    text: '週末愉快',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: ({ name }) => `${name}，週末快樂！`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },

  // === MORE MONDAY GREETINGS ===
  {
    text: '週一加油',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: ({ name }) => `${name}，週一加油`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: '新的一週開始',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: ({ name }) => `${name}，新週開始囉`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 1,
  },

  // === TUESDAY ===
  {
    text: '週二好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 2,
  },
  {
    text: ({ name }) => `${name}，週二愉快`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 2,
  },
  {
    text: '週二繼續衝',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 2,
  },

  // === WEDNESDAY ===
  {
    text: '週三快樂',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 3,
  },
  {
    text: ({ name }) => `${name}，週三好`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 3,
  },
  {
    text: '週三過半',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 3,
  },
  {
    text: '一週過半了',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 3,
  },

  // === THURSDAY ===
  {
    text: '週四快樂',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 4,
  },
  {
    text: ({ name }) => `${name}，週四好`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 4,
  },
  {
    text: '快到週末了',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 4,
  },

  // === MORE FRIDAY GREETINGS ===
  {
    text: '週五快樂',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: ({ name }) => `${name}，週五了耶`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: '終於到週五',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: ({ name }) => `${name}，週末要到了`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: 'TGIF！',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: '週五氛圍',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 5,
  },

  // === SATURDAY ===
  {
    text: '週六快樂',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: ({ name }) => `${name}，週六愉快`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: '美好的週六',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: '週六放鬆日',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 6,
  },

  // === SUNDAY ===
  {
    text: '週日快樂',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 0,
  },
  {
    text: ({ name }) => `${name}，週日愉快`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 0,
  },
  {
    text: '美好的週日',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 0,
  },
  {
    text: '週日放鬆',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 0,
  },

  // === MORE WEEKEND GREETINGS ===
  {
    text: ({ name }) => `${name}，週末好`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: '週末放鬆',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: '享受週末',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: ({ name }) => `${name}，好好享受週末`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: '週末時光',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },

  // === WEEKDAY GREETINGS ===
  {
    text: '工作日加油',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day !== undefined && day >= 1 && day <= 5,
  },
  {
    text: ({ name }) => `${name}，工作日繼續加油`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day !== undefined && day >= 1 && day <= 5,
  },

  // === SPRING GREETINGS ===
  {
    text: '春天好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `${name}，春天快樂`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: '春暖花開',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: '春天的氣息',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `${name}，享受春天`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },

  // === SUMMER GREETINGS ===
  {
    text: '夏日快樂',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `${name}，夏天好`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: '夏天來了',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: '夏日氛圍',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `${name}，享受夏天`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: '陽光普照',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },

  // === AUTUMN/FALL GREETINGS ===
  {
    text: '秋天好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: ({ name }) => `${name}，秋天快樂`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: '秋高氣爽',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: '秋意濃濃',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: ({ name }) => `${name}，享受秋天`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: '秋天的氣息',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },

  // === WINTER GREETINGS ===
  {
    text: '冬天快樂',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `${name}，冬天好`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: '冬日暖陽',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: '冬天來了',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `${name}，享受冬天`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: '冬日氛圍',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },

  // === MONTH-SPECIFIC GREETINGS ===
  {
    text: '一月好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 0,
  },
  {
    text: '二月好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 1,
  },
  {
    text: '三月好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 2,
  },
  {
    text: '四月好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 3,
  },
  {
    text: '五月好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 4,
  },
  {
    text: '六月好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 5,
  },
  {
    text: '七月好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 6,
  },
  {
    text: '八月好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 7,
  },
  {
    text: '九月好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 8,
  },
  {
    text: '十月好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 9,
  },
  {
    text: '十一月好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 10,
  },
  {
    text: '十二月好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },

  // === MONTH OF THE YEAR GREETINGS ===
  {
    text: ({ name }) => `${name}，新年新開始`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 0,
  },
  {
    text: ({ name }) => `${name}，年中了`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 5 || month === 6,
  },
  {
    text: '年末將至',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: ({ name }) => `${name}，年末了`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 11,
  },
];
