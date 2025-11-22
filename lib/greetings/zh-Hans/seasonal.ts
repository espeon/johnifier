import { GreetingDefinition } from '../types';

// Chinese Simplified seasonal greetings
export const seasonalGreetings: GreetingDefinition[] = [
  // Monday
  {
    text: '周一快乐',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: ({ name }) => `${name}，新的一周开始了！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 1,
  },

  // Friday
  {
    text: '周五了，加油！',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: ({ name }) => `${name}，周五快乐！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 5,
  },

  // Weekend
  {
    text: '周末愉快',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: ({ name }) => `${name}，周末快乐！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },

  // Spring
  {
    text: '春天好',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },

  // Summer
  {
    text: '夏日快乐',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },

  // Autumn
  {
    text: '秋天好',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },

  // Winter
  {
    text: '冬天快乐',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },

  // === EXPANDED SEASONAL GREETINGS ===

  // More weekday greetings
  {
    text: '周二好',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 2,
  },
  {
    text: ({ name }) => `${name}，周二快乐！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 2,
  },
  {
    text: '周三了，加油',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 3,
  },
  {
    text: ({ name }) => `${name}，周三继续努力`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 3,
  },
  {
    text: '周四好',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 4,
  },
  {
    text: ({ name }) => `${name}，周四快乐`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 4,
  },
  {
    text: '工作日快乐',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ day }) => day !== undefined && day >= 1 && day <= 5,
  },
  {
    text: ({ name }) => `${name}，工作日继续加油`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day !== undefined && day >= 1 && day <= 5,
  },

  // More weekend greetings
  {
    text: '周六快乐',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: ({ name }) => `${name}，周六愉快！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: '周日好',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 0,
  },
  {
    text: ({ name }) => `${name}，周日快乐！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 0,
  },
  {
    text: '享受周末',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: ({ name }) => `${name}，享受周末！`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },

  // === COMPREHENSIVE SPRING GREETINGS (March-May) ===
  {
    text: '春暖花开',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `${name}，春天来了`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: '万物复苏',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: '春意盎然',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `${name}，享受春天吧`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: '春光明媚',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: '春天的气息',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `${name}，春天好舒服`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },

  // === COMPREHENSIVE SUMMER GREETINGS (June-August) ===
  {
    text: '夏日阳光',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `${name}，夏天来了`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: '炎炎夏日',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: '夏日氛围',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `${name}，夏天要保持凉爽`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: '夏日时光',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: '阳光灿烂',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `${name}，享受夏日`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: '热情的夏天',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },

  // === COMPREHENSIVE AUTUMN GREETINGS (September-November) ===
  {
    text: '秋高气爽',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: ({ name }) => `${name}，秋天来了`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: '金秋时节',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: '秋意浓浓',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: ({ name }) => `${name}，享受秋天`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: '秋色宜人',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: '秋天的氛围',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: ({ name }) => `${name}，秋天真美`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: '凉爽的秋天',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },

  // === COMPREHENSIVE WINTER GREETINGS (December-February) ===
  {
    text: '冬日温暖',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `${name}，冬天来了`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: '寒冷的冬天',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: '冬日氛围',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `${name}，冬天要保暖`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: '冬日时光',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: '雪花飘飘',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `${name}，享受冬日`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: '温馨的冬天',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: '寒风刺骨，心却温暖',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },

  // More specific seasonal greetings
  {
    text: '三月春风',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 2,
  },
  {
    text: '四月芳菲',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 3,
  },
  {
    text: '五月花开',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 4,
  },
  {
    text: '六月骄阳',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 5,
  },
  {
    text: '七月流火',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 6,
  },
  {
    text: '八月炎夏',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 7,
  },
  {
    text: '九月金秋',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 8,
  },
  {
    text: '十月深秋',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 9,
  },
  {
    text: '十一月初冬',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 10,
  },
  {
    text: '十二月寒冬',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 11,
  },
];
