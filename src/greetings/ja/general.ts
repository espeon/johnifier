import { GreetingDefinition } from '../types';

// Japanese general time-based greetings
export const generalGreetings: GreetingDefinition[] = [
  // === MORNING GREETINGS ===
  // With name
  {
    text: ({ name }) => `${name}さん、おはよう！`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `おはよう、${name}さん`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}さん、おはようございます`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `やあ、${name}さん！`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}さん、調子どう？`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `おっす、${name}！`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}さん、元気？`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `よう、${name}さん`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Without name
  {
    text: 'おはよう！',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'おはようございます',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'やあ！',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '調子どう？',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'おっす！',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '朝だよ！',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'よう！',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '元気？',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // === AFTERNOON GREETINGS ===
  // With name
  {
    text: ({ name }) => `こんにちは、${name}さん`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}さん、お疲れ様`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `よう、${name}！`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}さん、また会ったね`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Without name
  {
    text: 'こんにちは',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'お疲れ様',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'よう！',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'また会ったね',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // === EVENING GREETINGS ===
  // With name
  {
    text: ({ name }) => `こんばんは、${name}さん`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}さん、良い夜を`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `夜の${name}さん`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}さん、お疲れ`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Without name
  {
    text: 'こんばんは',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '良い夜を',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '夜だね',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'おやすみ',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // === LATE NIGHT GREETINGS ===
  // With name
  {
    text: ({ name }) => `${name}さん、夜更かし？`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `夜型${name}さん`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name}さん、まだ起きてる？`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name}さん、眠れない？`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // Without name
  {
    text: '夜更かし？',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'まだ起きてる？',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: '深夜だよ',
    mood: 'mysterious',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: '真夜中',
    mood: 'mysterious',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: '眠れない？',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // === WORK MODE GREETINGS ===
  // With name
  {
    text: ({ name }) => `${name}さん、頑張ろう！`,
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}さん、作業開始！`,
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `仕事モード、${name}さん`,
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}さん、やろう！`,
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: true },
  },

  // Without name
  {
    text: '頑張ろう！',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true },
  },
  {
    text: '作業開始',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true },
  },
  {
    text: '仕事モード',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true },
  },
  {
    text: '集中タイム',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true },
  },
  {
    text: 'やるぞ！',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true },
  },
  {
    text: '仕事しよう',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true },
  },
];
