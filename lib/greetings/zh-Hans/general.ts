import { GreetingDefinition } from '../types';

// Chinese Simplified general greetings
export const generalGreetings: GreetingDefinition[] = [
  // Morning
  {
    text: '早上好',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `早上好，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '新的一天，加油！',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}，早安！`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Afternoon
  {
    text: '下午好',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `下午好，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '午安',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Evening
  {
    text: '晚上好',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `晚上好，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '晚安',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 22,
  },

  // General
  {
    text: '你好',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `你好，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '欢迎',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `欢迎回来，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '很高兴见到你',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `很高兴见到你，${name}`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },

  // Work mode
  {
    text: '开始工作吧',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true },
  },
  {
    text: ({ name }) => `${name}，加油工作！`,
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '今天也要努力',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true },
  },

  // === EXPANDED GENERAL GREETINGS ===

  // More morning greetings
  {
    text: '美好的早晨',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}，早安！新的一天开始了`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '早啊',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '早上好呀',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `早，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '清晨的问候',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '美好的一天从现在开始',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}，早上好！今天会很棒`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // More afternoon greetings
  {
    text: '下午好呀',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `下午好，${name}！`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '午后时光',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}，下午好！继续加油`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '下午愉快',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // More evening greetings
  {
    text: '晚上好呀',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `晚上好，${name}！`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '夜幕降临',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}，晚上好！放松一下`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '夜晚好',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `晚安，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 22,
  },

  // More general greetings
  {
    text: '嗨',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `嗨，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '你来了',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `${name}来了`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '欢迎回来',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `欢迎，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '又见面了',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `又见面了，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '很高兴见到你',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `${name}，好久不见`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '你好呀',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `你好呀，${name}`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '嘿',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `嘿，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },

  // Creative/playful greetings
  {
    text: '今天也要开心',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}，今天也要开心！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '你最棒',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}最棒`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '加油',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}，加油！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '冲冲冲',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}，冲冲冲！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '让我们开始吧',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `${name}，让我们开始吧`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '准备好了吗',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `${name}，准备好了吗？`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '今天会很精彩',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}，今天会很精彩`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },

  // Encouraging greetings
  {
    text: '你能做到',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}，你能做到！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '继续保持',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}，继续保持！`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '做得好',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}，做得好！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '超越自我',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}，超越自我`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },

  // Friendly/warm greetings
  {
    text: '很高兴看到你',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `很高兴看到你，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '欢迎光临',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `${name}，欢迎光临`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '好久不见',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `好久不见，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '欢迎你',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `欢迎你，${name}`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },

  // More work mode greetings
  {
    text: '开工了',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true },
  },
  {
    text: ({ name }) => `${name}，开工了`,
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '今天要做什么',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true },
  },
  {
    text: ({ name }) => `${name}，今天要做什么？`,
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '工作模式',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true },
  },
  {
    text: ({ name }) => `${name}，工作模式启动`,
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '专注时刻',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true },
  },
  {
    text: ({ name }) => `${name}，专注时刻`,
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '开始干活',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true },
  },
  {
    text: ({ name }) => `${name}，开始干活！`,
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '努力工作',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true },
  },
  {
    text: ({ name }) => `${name}，努力工作`,
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '全力以赴',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true },
  },
  {
    text: ({ name }) => `${name}，全力以赴`,
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '保持专注',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true },
  },
  {
    text: ({ name }) => `${name}，保持专注`,
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: true },
  },

  // More creative/modern Chinese greetings
  {
    text: '来了来了',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `${name}来了来了`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '冲啊',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}，冲啊！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '好耶',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `好耶，${name}来了`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '冲鸭',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}，冲鸭！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '搞起来',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}，搞起来！`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '干就完了',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}，干就完了`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },

  // Culturally appropriate phrases
  {
    text: '吉祥如意',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `${name}，吉祥如意`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '心想事成',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}，心想事成`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '万事顺利',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `${name}，万事顺利`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '一切都好',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `${name}，一切都好`,
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '好运连连',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}，好运连连`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: true },
  },
];
