import { GreetingDefinition } from '../types';

// Incognito/privacy mode greetings (Japanese - no names, mysterious vibes)
export const incognitoGreetings: GreetingDefinition[] = [
  // Morning incognito
  {
    text: 'おはよう、謎の訪問者',
    mood: 'mysterious',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'ステルスモード：朝版',
    mood: 'playful',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '影があなたに挨拶',
    mood: 'mysterious',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Afternoon incognito
  {
    text: 'こんにちは、ゴースト',
    mood: 'mysterious',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'シークレットモード起動',
    mood: 'professional',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'レーダー下で活動中',
    mood: 'mysterious',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Evening incognito
  {
    text: 'こんばんは、幻影',
    mood: 'mysterious',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '夜モード + シークレット = 最強ステルス',
    mood: 'playful',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '夜は名無しを守る',
    mood: 'mysterious',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Late night incognito
  {
    text: '誰だ？（誰にも言わない）',
    mood: 'mysterious',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: '深夜3時のシークレットエネルギー',
    mood: 'playful',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },

  // General incognito (any time)
  {
    text: 'ようこそ、謎の人',
    mood: 'mysterious',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
  },
  {
    text: '秘密は守ります',
    mood: 'mysterious',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
  },
  {
    text: 'こんにちは、匿名さん',
    mood: 'casual',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
  },
  {
    text: 'デジタルゴースト様',
    mood: 'playful',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
  },
  {
    text: 'シーッ...あなたがいたこと忘れます',
    mood: 'playful',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
  },
  {
    text: '影でブラウジング',
    mood: 'mysterious',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
  },
  {
    text: '履歴なし、痕跡なし',
    mood: 'professional',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
  },
  {
    text: 'プライバシーモード起動',
    mood: 'professional',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
  },
  {
    text: '虚空があなたを認識',
    mood: 'mysterious',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
  },
  {
    text: '痕跡を残さない',
    mood: 'professional',
    static: { language: 'ja', incognito: true, workMode: false, hasName: false },
  },

  // Work mode + incognito
  {
    text: 'プロフェッショナル。プライベート。完璧。',
    mood: 'professional',
    static: { language: 'ja', incognito: true, workMode: true, hasName: false },
  },
  {
    text: 'ステルス生産性モード',
    mood: 'professional',
    static: { language: 'ja', incognito: true, workMode: true, hasName: false },
  },
  {
    text: '機密作業セッション開始',
    mood: 'professional',
    static: { language: 'ja', incognito: true, workMode: true, hasName: false },
  },
];
