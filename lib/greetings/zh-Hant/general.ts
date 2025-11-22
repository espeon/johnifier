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
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}，加油工作！`,
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: true },
  },

  // === MORE MORNING GREETINGS ===
  {
    text: '早安安',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '早～',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '美好的早晨',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '起床啦！',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 9,
  },
  {
    text: ({ name }) => `${name}，早安呀`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '早晨好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}，新的一天開始囉`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '今天會很棒',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '早晨的陽光',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '開啟美好的一天',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // === MORE AFTERNOON GREETINGS ===
  {
    text: ({ name }) => `午安呀，${name}`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '下午好呀',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '午後時光',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '下午愉快',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}，午後好`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '午安～',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // === MORE EVENING GREETINGS ===
  {
    text: ({ name }) => `晚上好，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '夜晚好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '晚上好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '晚安～',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}，夜晚愉快`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '晚間時光',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // === MORE GENERAL GREETINGS ===
  {
    text: '嗨',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `嗨，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '哈囉',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `哈囉，${name}`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '嘿',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `嘿，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '你好呀',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `你好呀，${name}`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '嗨嗨',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}，你來了`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '歡迎光臨',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}，歡迎`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '好久不見',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}，好久不見`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '又見面了',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `又見面了，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '歡迎回來',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `歡迎回來呀，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '回來了',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}回來了`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '今天過得好嗎？',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}，今天過得如何？`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },

  // === CREATIVE VARIANTS ===
  {
    text: '嗨起來',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '來囉',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}來囉`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '你好鴨',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}好鴨`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Yo',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `Yo ${name}`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '嘿嘿',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '安安',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `安安，${name}`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },

  // === FRIENDLY GREETINGS ===
  {
    text: '很開心見到你',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `很開心見到你，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '見到你真好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `見到你真好，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '今天也要加油',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}，今天也要加油`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '加油',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}，加油`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '一起努力吧',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `一起努力吧，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },

  // === MORE WORK MODE GREETINGS ===
  {
    text: '開工了',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}，開工囉`,
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '工作模式',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}，準備好工作了嗎？`,
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '專注工作',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}，專注模式`,
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '衝刺時間',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}，衝刺囉`,
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '效率全開',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}，效率時間`,
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: true },
  },

  // === TAIWANESE STYLE GREETINGS ===
  {
    text: '呷飽未？',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}，呷飽未？`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '好天氣',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}，今天天氣好好`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '來坐',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}，來坐喔`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },

  // === ENERGETIC GREETINGS ===
  {
    text: '滿滿活力',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}，活力滿滿`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '精神奕奕',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}精神很好`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '充滿能量',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}充滿能量`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },

  // === CASUAL/CHILL GREETINGS ===
  {
    text: '輕鬆一下',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}，放鬆一下`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '慢慢來',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}，慢慢來`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '沒事就好',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}，一切都好嗎？`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },

  // === POSITIVE VIBES ===
  {
    text: '正能量',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}正能量`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '好心情',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}心情好好`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '開心',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}很開心`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '笑一個',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}，笑一個`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },

  // === COOL/STYLISH GREETINGS ===
  {
    text: '帥氣',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}很帥`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '有型',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}很有型`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '超酷',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}超酷`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },

  // === SUPPORTIVE GREETINGS ===
  {
    text: '你可以的',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}，你一定可以`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '相信自己',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}，相信自己`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '做得到',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}做得到`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
];
