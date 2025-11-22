import { GreetingDefinition } from '../types';

// Chinese Simplified personality and creative greetings
export const personalityGreetings: GreetingDefinition[] = [
  // === MOTIVATIONAL/ENERGY GREETINGS ===
  {
    text: '主角能量',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '纯粹氛围',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '无敌了',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '今天属于你',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '你可以的',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '超越极限',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '势不可挡',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '你就是传奇',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '无人能挡',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '天生不凡',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '升级时刻',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '王者归来',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },

  // === PERSONALITY/VIBE GREETINGS ===
  {
    text: '氛围拉满',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '精英认证',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '与众不同',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '绝对王者',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '顶级氛围',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '独一无二',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '完美无瑕',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '混沌协调员报到',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '专业超越者',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },

  // === CREATIVE/FUN GREETINGS ===
  {
    text: '只有氛围，没有思考',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '氛围无可匹敌',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '能量无法匹敌',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '靠咖啡和梦想驱动',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '向你传送正能量',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '达到最大放松',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '绝对标志性',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '厨师之吻般的能量',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '睡眠是暂时的，荣耀是永恒的',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: '顶流本流',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '绝绝子',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '永远滴神',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '真的栓Q',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '破防了',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },

  // === PRODUCTIVITY/WORK GREETINGS ===
  {
    text: '起床奋斗',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '生产力解锁',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '心流状态激活',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '最大效率模式',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '发布模式：已启动',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '让它发生',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '截止日期粉碎者模式',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '准备好构建了吗',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '开始创造',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '开始工作吧',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '议程是什么',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '构建模式已激活',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '发布时刻',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '专注模式启动',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '深度工作会话',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '一起进步',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '编码时间',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '准备执行',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '我们要解决什么',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '生产力模式',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '执行模式',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '一起交付',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '冲刺时间',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '部署能量',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
];
