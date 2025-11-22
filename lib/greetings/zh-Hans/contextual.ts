import { GreetingDefinition } from '../types';

// Chinese Simplified contextual greetings (weather, general context)
export const contextualGreetings: GreetingDefinition[] = [
  // === WEATHER-AWARE GREETINGS ===
  {
    text: '今天雨天氛围',
    mood: 'casual',
    static: { language: 'zh-Hans', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'rainy',
  },
  {
    text: '外面是冬日仙境',
    mood: 'playful',
    static: { language: 'zh-Hans', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'snowy',
  },
  {
    text: '美好的晴天',
    mood: 'casual',
    static: { language: 'zh-Hans', hasName: false },
    dynamic: ({ hour, weather }) =>
      hour !== undefined && weather?.condition === 'clear' && hour >= 5 && hour < 12,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return '外面保持凉爽';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `外面保持凉爽 (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'zh-Hans', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp > 30,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return '多穿点！';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `多穿点！(${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'zh-Hans', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp < 0,
  },
  {
    text: '天气不错呢',
    mood: 'casual',
    static: { language: 'zh-Hans', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'clear',
  },
  {
    text: '多云的一天',
    mood: 'casual',
    static: { language: 'zh-Hans', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'cloudy',
  },
  {
    text: '雨天，记得带伞',
    mood: 'casual',
    static: { language: 'zh-Hans', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'rainy',
  },
  {
    text: '下雪啦',
    mood: 'playful',
    static: { language: 'zh-Hans', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'snowy',
  },

  // === GENERAL CONTEXTUAL GREETINGS ===
  {
    text: '能量满满',
    mood: 'playful',
    static: { language: 'zh-Hans', hasName: false },
  },
  {
    text: '氛围正好',
    mood: 'casual',
    static: { language: 'zh-Hans', hasName: false },
  },
  {
    text: '状态拉满',
    mood: 'playful',
    static: { language: 'zh-Hans', hasName: false },
  },
  {
    text: '今天也要加油',
    mood: 'casual',
    static: { language: 'zh-Hans', hasName: false },
  },
  {
    text: '准备好了吗',
    mood: 'casual',
    static: { language: 'zh-Hans', hasName: false },
  },
  {
    text: '开始新的冒险',
    mood: 'playful',
    static: { language: 'zh-Hans', hasName: false },
  },
  {
    text: '今天会很棒',
    mood: 'casual',
    static: { language: 'zh-Hans', hasName: false },
  },
  {
    text: '让我们开始吧',
    mood: 'casual',
    static: { language: 'zh-Hans', hasName: false },
  },
  {
    text: '全新的开始',
    mood: 'casual',
    static: { language: 'zh-Hans', hasName: false },
  },
  {
    text: '好事即将发生',
    mood: 'playful',
    static: { language: 'zh-Hans', hasName: false },
  },
  {
    text: '机会无限',
    mood: 'casual',
    static: { language: 'zh-Hans', hasName: false },
  },
  {
    text: '保持专注',
    mood: 'professional',
    static: { language: 'zh-Hans', hasName: false },
  },
  {
    text: '继续前进',
    mood: 'casual',
    static: { language: 'zh-Hans', hasName: false },
  },
  {
    text: '你能做到',
    mood: 'casual',
    static: { language: 'zh-Hans', hasName: false },
  },
  {
    text: '保持动力',
    mood: 'casual',
    static: { language: 'zh-Hans', hasName: false },
  },
];
