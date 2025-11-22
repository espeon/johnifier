import { GreetingDefinition } from '../types';

// Battery level-aware greetings (Chinese Traditional)
export const batteryGreetings: GreetingDefinition[] = [
  // Low battery (0-20%)
  {
    text: ({ battery }) => `低電量模式 (${battery}%) 但氛圍很高`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: ({ battery }) => `${battery}% 快沒電了`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: '快充電，傳奇',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 15,
  },
  {
    text: ({ battery }) => `電量 ${battery}%，氛圍 100%`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: ({ name, battery }) => `${name}，${battery}%... 活得很危險`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 15,
  },

  // Medium-low (21-50%)
  {
    text: ({ battery }) => `${battery}% 一半了`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 20 && battery <= 50,
  },
  {
    text: '電量中等，潛力滿分',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 30 && battery <= 50,
  },

  // High battery (80-100%)
  {
    text: ({ battery }) => `充飽電了 (${battery}%)，準備好了`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80,
  },
  {
    text: ({ battery }) => `電量：${battery}% 🔋`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80,
  },
  {
    text: '充飽電，準備出發',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 95,
  },
  {
    text: ({ name }) => `${name}，充飽電好危險`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 90,
  },
  {
    text: '電量：滿。能量：無限。',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery === 100,
  },

  // Exactly 69% (nice)
  {
    text: '好電量 😏',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 69,
  },
  {
    text: ({ name }) => `${name}... 不錯 (69%)`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery === 69,
  },

  // Exactly 42% (answer to everything)
  {
    text: '電量 42%：一切的答案',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 42,
  },

  // Exactly 50%
  {
    text: '完美平衡',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 50,
  },

  // Exactly 100%
  {
    text: '100% 完美',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 100,
  },

  // Very low (1-5%)
  {
    text: '在邊緣生活！',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 1 && battery <= 5,
  },

  // Almost perfect (99%)
  {
    text: '差一點就完美了',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 99,
  },

  // 88% (lucky number in Chinese culture)
  {
    text: '88% 好運來',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 88,
  },
];
