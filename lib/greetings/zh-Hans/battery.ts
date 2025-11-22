import { GreetingDefinition } from '../types';

// Chinese Simplified battery level-aware greetings
export const batteryGreetings: GreetingDefinition[] = [
  // Low battery (0-20%)
  {
    text: ({ battery }) => `低电量模式 (${battery}%) 但高氛围`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: ({ battery }) => `电量耗尽中 ${battery}%`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: '快充电，传奇',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 15,
  },
  {
    text: ({ battery }) => `电量 ${battery}%，氛围 100%`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: ({ name, battery }) => `${name}，${battery}%...活在危险边缘`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 15,
  },
  {
    text: '电量告急！',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery < 10,
  },

  // Medium-low (21-50%)
  {
    text: ({ battery }) => `半路上了 ${battery}%`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 20 && battery <= 50,
  },
  {
    text: '中等电量，全力以赴',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 30 && battery <= 50,
  },

  // High battery (80-100%)
  {
    text: ({ battery }) => `满电 (${battery}%)，完全准备好`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80,
  },
  {
    text: ({ battery }) => `能量等级：${battery}%`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80,
  },
  {
    text: '满电并准备出发',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 95,
  },
  {
    text: ({ name }) => `${name}，充满电力，危险了`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 90,
  },
  {
    text: '电量：最大。能量：无限。',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery === 100,
  },
  {
    text: '100%电量，100%能量',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery === 100,
  },

  // Exactly 69% (nice)
  {
    text: '不错的电量等级',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 69,
  },
  {
    text: ({ name }) => `${name}...不错 (69%)`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery === 69,
  },

  // Exactly 42% (answer to everything)
  {
    text: '电量 42%：万物的答案',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 42,
  },

  // Exactly 50% (balanced)
  {
    text: '完美平衡',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 50,
  },

  // Exactly 99% (so close)
  {
    text: '接近完美',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 99,
  },

  // Exactly 1% (living on the edge)
  {
    text: '活在边缘！',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 1,
  },
];
