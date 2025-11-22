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
    static: { language: 'ja', incognito: false, workMode: true, hasName: false },
  },

  // === ADDITIONAL MORNING GREETINGS ===
  // With name
  {
    text: ({ name }) => `${name}さん、素敵な朝だね`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}さん、今日も頑張ろう`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `朝だよ、${name}さん`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}さん、良い朝`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `ハロー、${name}さん`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}さん、起きた？`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}さん、準備OK？`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `おはよー、${name}さん`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Without name
  {
    text: '良い朝',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '素敵な朝だね',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '今日も頑張ろう',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '新しい一日',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '準備できた？',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '起きた？',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'おはよー',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'ハロー',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // === ADDITIONAL AFTERNOON GREETINGS ===
  // With name
  {
    text: ({ name }) => `${name}さん、午後もよろしく`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `やあやあ、${name}さん`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}さん、こんちは`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}さん、調子は？`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}さん、元気にしてる？`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `ハイ、${name}さん`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}さん、いい感じ？`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Without name
  {
    text: '午後もよろしく',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'やあやあ',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'こんちは',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '調子は？',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '元気にしてる？',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'ハイ',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'いい感じ？',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '午後だね',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // === ADDITIONAL EVENING GREETINGS ===
  // With name
  {
    text: ({ name }) => `${name}さん、今晩は`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}さん、夜だね`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}さん、こんばんわ`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}さん、今日も一日お疲れ様`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}さん、夜の時間`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `イブニング、${name}さん`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Without name
  {
    text: '今晩は',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'こんばんわ',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '今日も一日お疲れ様',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '夜の時間',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'イブニング',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '夜',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // === ADDITIONAL LATE NIGHT GREETINGS ===
  // With name
  {
    text: ({ name }) => `${name}さん、遅くまで`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name}さん、深夜だよ`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name}さん、そろそろ寝よう？`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `夜型人間${name}さん`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // Without name
  {
    text: '遅くまで',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: '深夜',
    mood: 'mysterious',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'そろそろ寝よう？',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: '夜型人間',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: '夜ふかし',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // === ADDITIONAL WORK MODE GREETINGS ===
  // With name
  {
    text: ({ name }) => `${name}さん、仕事始めよう`,
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}さん、集中しよう`,
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}さん、いこう`,
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}さん、やる時間`,
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `作業開始、${name}さん`,
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}さん、集中モード`,
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: true },
  },

  // Without name
  {
    text: '仕事始めよう',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false },
  },
  {
    text: '集中しよう',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false },
  },
  {
    text: 'いこう',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false },
  },
  {
    text: 'やる時間',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false },
  },
  {
    text: '作業時間',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false },
  },
  {
    text: '始めよう',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false },
  },

  // === CREATIVE VARIANTS (variant: 'creative') ===
  {
    text: '最高の気分',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'いい感じのバイブス',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '超元気',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '絶好調',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '調子いいね',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'ナイスな日',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '最高だね',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'グッドバイブス',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'いい波',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'サイコー',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'めっちゃいい',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '最強',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },

  // === CULTURALLY APPROPRIATE JAPANESE PHRASES ===
  // With name
  {
    text: ({ name }) => `${name}さん、お元気ですか`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}さん、いらっしゃい`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}さん、久しぶり`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}さん、お待ちしてました`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}さん、ようこそ`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}さん、どうも`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}さん、お久しぶり`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
  },

  // Without name
  {
    text: 'お元気ですか',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
  },
  {
    text: 'いらっしゃい',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
  },
  {
    text: '久しぶり',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
  },
  {
    text: 'お待ちしてました',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
  },
  {
    text: 'ようこそ',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
  },
  {
    text: 'どうも',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
  },
  {
    text: 'お久しぶり',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
  },
  {
    text: 'また来たね',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
  },
  {
    text: '戻ってきた',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
  },
  {
    text: 'お帰り',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
  },

  // === GENERAL ANYTIME GREETINGS ===
  // With name
  {
    text: ({ name }) => `${name}さん、会えて嬉しい`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}さん、いい日を`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}さん、最高`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}さん、楽しもう`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}さん！`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
  },

  // Without name
  {
    text: '会えて嬉しい',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
  },
  {
    text: 'いい日を',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
  },
  {
    text: '楽しもう',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
  },
  {
    text: 'いいね',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
  },
  {
    text: 'やったね',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
  },
];
