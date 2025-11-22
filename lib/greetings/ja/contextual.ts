import { GreetingDefinition } from '../types';

// Battery and weather contextual greetings (Japanese)
export const contextualGreetings: GreetingDefinition[] = [
  // === BATTERY-LEVEL GREETINGS ===
  {
    text: ({ battery }) => `バッテリーも気分も低め（${battery}%）`,
    mood: 'playful',
    static: { language: 'ja', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery < 20,
  },
  {
    text: 'フル充電、フルパワー！',
    mood: 'playful',
    static: { language: 'ja', hasName: false },
    dynamic: ({ battery }) => battery === 100,
  },
  {
    text: ({ battery }) => `エネルギーレベル高め（${battery}%）`,
    mood: 'casual',
    static: { language: 'ja', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 90,
  },
  {
    text: ({ battery }) => `緊急バッテリー！（${battery}%）`,
    mood: 'playful',
    static: { language: 'ja', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 0 && battery < 10,
  },
  {
    text: ({ battery }) => `低電力モード（${battery}%）`,
    mood: 'casual',
    static: { language: 'ja', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 10 && battery < 20,
  },
  {
    text: ({ battery }) => `バッテリー減ってきた（${battery}%）`,
    mood: 'casual',
    static: { language: 'ja', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 20 && battery < 50,
  },
  {
    text: ({ battery }) => `まずまずの充電（${battery}%）`,
    mood: 'casual',
    static: { language: 'ja', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 50 && battery < 80,
  },
  {
    text: ({ battery }) => `ほぼフルパワー（${battery}%）`,
    mood: 'casual',
    static: { language: 'ja', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80 && battery < 100,
  },
  {
    text: '完璧なバッテリー',
    mood: 'casual',
    static: { language: 'ja', hasName: false },
    dynamic: ({ battery }) => battery === 50,
  },

  // === WEATHER-AWARE GREETINGS ===
  {
    text: '今日は雨だね',
    mood: 'casual',
    static: { language: 'ja', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'rainy',
  },
  {
    text: '雨の日',
    mood: 'casual',
    static: { language: 'ja', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'rainy',
  },
  {
    text: '雪の日',
    mood: 'playful',
    static: { language: 'ja', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'snowy',
  },
  {
    text: '冬景色',
    mood: 'playful',
    static: { language: 'ja', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'snowy',
  },
  {
    text: '良い天気だね',
    mood: 'casual',
    static: { language: 'ja', hasName: false },
    dynamic: ({ hour, weather }) =>
      hour !== undefined && weather?.condition === 'clear' && hour >= 5 && hour < 12,
  },
  {
    text: '晴れた朝',
    mood: 'casual',
    static: { language: 'ja', hasName: false },
    dynamic: ({ hour, weather }) =>
      hour !== undefined && weather?.condition === 'clear' && hour >= 5 && hour < 12,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return '涼しくしてね';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `涼しくしてね（${temp}°${tempUnit || 'C'}）`;
    },
    mood: 'casual',
    static: { language: 'ja', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp > 30,
  },
  {
    text: '暑いね',
    mood: 'casual',
    static: { language: 'ja', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp > 30,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return '暖かくしてね';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `暖かくしてね（${temp}°${tempUnit || 'C'}）`;
    },
    mood: 'casual',
    static: { language: 'ja', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp < 0,
  },
  {
    text: '寒いね',
    mood: 'casual',
    static: { language: 'ja', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp < 0,
  },
  {
    text: '曇り空',
    mood: 'casual',
    static: { language: 'ja', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'cloudy',
  },
  {
    text: '快適な気温',
    mood: 'casual',
    static: { language: 'ja', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp >= 15 && weather.temp <= 25,
  },
  {
    text: '過ごしやすい日',
    mood: 'casual',
    static: { language: 'ja', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp >= 18 && weather.temp <= 22,
  },
  {
    text: '風が強いね',
    mood: 'casual',
    static: { language: 'ja', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'windy',
  },
  {
    text: ({ name }) => `${name}さん、良い天気だね`,
    mood: 'casual',
    static: { language: 'ja', hasName: true },
    dynamic: ({ weather }) => weather?.condition === 'clear',
  },
  {
    text: ({ name }) => `${name}さん、傘持った？`,
    mood: 'casual',
    static: { language: 'ja', hasName: true },
    dynamic: ({ weather }) => weather?.condition === 'rainy',
  },
];
