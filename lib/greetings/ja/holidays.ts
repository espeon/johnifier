import { GreetingDefinition } from '../types';

// Holiday-specific greetings (Japanese holidays and international holidays)
export const holidayGreetings: GreetingDefinition[] = [
  // === 正月 (New Year) ===
  {
    text: 'あけましておめでとうございます！',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: ({ name }) => `${name}さん、新年おめでとう！`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: '新しい年、新しい始まり',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 0,
  },
  {
    text: 'お正月気分',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day <= 3,
  },

  // === バレンタインデー (Valentine's Day) ===
  {
    text: 'ハッピーバレンタイン！',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },
  {
    text: ({ name }) => `${name}さん、チョコの日！`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },

  // === ひな祭り (Doll's Festival) ===
  {
    text: 'ひな祭りだね',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 2 && day !== undefined && day === 3,
  },
  {
    text: '桃の節句',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 2 && day !== undefined && day === 3,
  },

  // === ホワイトデー (White Day) ===
  {
    text: 'ホワイトデー！',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 2 && day !== undefined && day === 14,
  },

  // === ゴールデンウィーク (Golden Week) ===
  {
    text: 'ゴールデンウィーク！',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 3 && day !== undefined && day >= 29,
  },
  {
    text: 'GW楽しもう',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 4 && day !== undefined && day <= 5,
  },

  // === こどもの日 (Children's Day) ===
  {
    text: 'こどもの日！',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 4 && day !== undefined && day === 5,
  },
  {
    text: '端午の節句',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 4 && day !== undefined && day === 5,
  },

  // === 七夕 (Tanabata) ===
  {
    text: '七夕だね',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 6 && day !== undefined && day === 7,
  },
  {
    text: '願い事は？',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 6 && day !== undefined && day === 7,
  },
  {
    text: ({ name }) => `${name}さん、星に願いを`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 6 && day !== undefined && day === 7,
  },

  // === お盆 (Obon) ===
  {
    text: 'お盆だね',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 7 && day !== undefined && day >= 13 && day <= 16,
  },
  {
    text: 'お盆休み',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 7 && day !== undefined && day >= 13 && day <= 16,
  },

  // === 中秋の名月 (Mid-Autumn Moon) ===
  {
    text: '月がきれいだね',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 8,
  },

  // === ハロウィン (Halloween) ===
  {
    text: 'ハッピーハロウィン！',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 31,
  },
  {
    text: 'トリック・オア・トリート',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 31,
  },
  {
    text: ({ name }) => `${name}さん、仮装した？`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 31,
  },

  // === 文化の日 (Culture Day) ===
  {
    text: '文化の日',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 10 && day !== undefined && day === 3,
  },

  // === クリスマス (Christmas) ===
  {
    text: 'メリークリスマス！',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: ({ name }) => `${name}さん、メリクリ！`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: 'クリスマスだね',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: 'ホリデーシーズン',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },

  // === 大晦日 (New Year's Eve) ===
  {
    text: '良いお年を！',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },
  {
    text: ({ name }) => `${name}さん、良いお年を`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },
  {
    text: '大晦日だね',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },
  {
    text: '今年もありがとう',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },
];
