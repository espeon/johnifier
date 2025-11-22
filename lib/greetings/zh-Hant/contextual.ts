import { GreetingDefinition } from '../types';

// Battery and weather contextual greetings (Chinese Traditional)
export const contextualGreetings: GreetingDefinition[] = [
  // === BATTERY-LEVEL GREETINGS ===
  {
    text: ({ battery }) => `電量很低，就像你的電池 (${battery}%)`,
    mood: 'playful',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery < 20,
  },
  {
    text: '充飽電，就像你一樣！⚡',
    mood: 'playful',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ battery }) => battery === 100,
  },
  {
    text: ({ battery }) => `能量等級高 (${battery}%)`,
    mood: 'casual',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 90,
  },
  {
    text: ({ battery }) => `危急電量！(${battery}%)`,
    mood: 'playful',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 0 && battery < 10,
  },
  {
    text: ({ battery }) => `低電量模式 (${battery}%)`,
    mood: 'casual',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 10 && battery < 20,
  },
  {
    text: ({ battery }) => `電量漸低 (${battery}%)`,
    mood: 'casual',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 20 && battery < 50,
  },
  {
    text: ({ battery }) => `電量不錯 (${battery}%)`,
    mood: 'casual',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 50 && battery < 80,
  },
  {
    text: ({ battery }) => `接近滿電 (${battery}%)`,
    mood: 'casual',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80 && battery < 100,
  },
  {
    text: '好電量',
    mood: 'playful',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ battery }) => battery === 69,
  },
  {
    text: '生命、宇宙和你電池的答案',
    mood: 'playful',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ battery }) => battery === 42,
  },
  {
    text: '活在邊緣！',
    mood: 'playful',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ battery }) => battery === 1,
  },
  {
    text: '如此接近完美',
    mood: 'playful',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ battery }) => battery === 99,
  },
  {
    text: '完美平衡',
    mood: 'casual',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ battery }) => battery === 50,
  },

  // === WEATHER-AWARE GREETINGS ===
  {
    text: '今天下雨氛圍 🌧️',
    mood: 'casual',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'rainy',
  },
  {
    text: '外面是冬日仙境 ❄️',
    mood: 'playful',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'snowy',
  },
  {
    text: '美好的早晨 ☀️',
    mood: 'casual',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ weather, hour }) =>
      weather?.condition === 'sunny' && hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '完美的天氣',
    mood: 'casual',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'sunny',
  },
  {
    text: '陰天氛圍',
    mood: 'casual',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'cloudy',
  },
  {
    text: '有點涼',
    mood: 'casual',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ weather }) => weather?.temperature !== undefined && weather.temperature < 10,
  },
  {
    text: '天氣很熱 🔥',
    mood: 'casual',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ weather }) => weather?.temperature !== undefined && weather.temperature > 30,
  },
  {
    text: '今天天氣宜人',
    mood: 'casual',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ weather }) =>
      weather?.temperature !== undefined &&
      weather.temperature >= 18 &&
      weather.temperature <= 25,
  },

  // === DAY + BATTERY CONTEXTUAL ===
  {
    text: ({ battery }) => `週一早晨，電量 ${battery}%`,
    mood: 'casual',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ day, hour, battery }) =>
      day === 1 && hour !== undefined && hour >= 5 && hour < 12 && battery !== null && battery !== undefined,
  },
  {
    text: '週五低電量，但心情很高',
    mood: 'playful',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ day, battery }) => day === 5 && battery !== null && battery !== undefined && battery < 30,
  },
  {
    text: '週末滿電',
    mood: 'playful',
    static: { language: 'zh-Hant', hasName: false },
    dynamic: ({ day, battery }) =>
      (day === 0 || day === 6) && battery !== null && battery !== undefined && battery >= 90,
  },
];
