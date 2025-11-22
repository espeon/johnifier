import { GreetingDefinition } from '../types';

// Battery level-aware greetings (Japanese)
export const batteryGreetings: GreetingDefinition[] = [
  // Low battery (0-20%)
  {
    text: ({ battery }) => `低電力モード（${battery}%）でも元気`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: ({ battery }) => `バッテリー${battery}%、そろそろ充電`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: '充電した方がいいよ',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 15,
  },
  {
    text: ({ battery }) => `バッテリー${battery}%、バイブス100%`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: ({ name, battery }) => `${name}さん、${battery}%...危険な生活`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 15,
  },
  {
    text: '残量わずか',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 10,
  },

  // Medium-low (21-50%)
  {
    text: ({ battery }) => `半分で${battery}%`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 20 && battery <= 50,
  },
  {
    text: 'バッテリー中程度、可能性無限',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 30 && battery <= 50,
  },
  {
    text: ({ battery }) => `まだ${battery}%ある`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 30 && battery <= 50,
  },

  // High battery (80-100%)
  {
    text: ({ battery }) => `フル充電（${battery}%）、準備万端`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80,
  },
  {
    text: ({ battery }) => `パワーレベル：${battery}%`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80,
  },
  {
    text: 'フル充電完了',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 95,
  },
  {
    text: ({ name }) => `${name}さん、満充電で最強`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 90,
  },
  {
    text: 'バッテリー：最大。エネルギー：無限。',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery === 100,
  },
  {
    text: ({ battery }) => `${battery}%、絶好調`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 85,
  },

  // Exactly 69% (nice)
  {
    text: 'ナイスなバッテリー',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 69,
  },
  {
    text: ({ name }) => `${name}さん...ナイス（69%）`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery === 69,
  },

  // Exactly 42% (answer to everything)
  {
    text: 'バッテリー42%：全ての答え',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 42,
  },

  // Exactly 50% (balanced)
  {
    text: '完璧なバランス',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 50,
  },

  // Exactly 100%
  {
    text: '100%！完璧',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 100,
  },
];
