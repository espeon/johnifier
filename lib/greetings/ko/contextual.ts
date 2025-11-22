import { GreetingDefinition } from '../types';

// Korean battery and weather contextual greetings
export const contextualGreetings: GreetingDefinition[] = [
  // === BATTERY-LEVEL GREETINGS ===
  {
    text: ({ battery }) => `낮게 실행 중, 배터리처럼 (${battery}%)`,
    mood: 'playful',
    static: { language: 'ko', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery < 20,
  },
  {
    text: '완전 충전, 당신처럼!',
    mood: 'playful',
    static: { language: 'ko', hasName: false },
    dynamic: ({ battery }) => battery === 100,
  },
  {
    text: ({ battery }) => `에너지 레벨 높음 (${battery}%)`,
    mood: 'casual',
    static: { language: 'ko', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 90,
  },
  {
    text: ({ battery }) => `위급 배터리! (${battery}%)`,
    mood: 'playful',
    static: { language: 'ko', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 0 && battery < 10,
  },
  {
    text: ({ battery }) => `낮은 배터리 모드 (${battery}%)`,
    mood: 'casual',
    static: { language: 'ko', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 10 && battery < 20,
  },
  {
    text: ({ battery }) => `배터리 낮아짐 (${battery}%)`,
    mood: 'casual',
    static: { language: 'ko', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 20 && battery < 50,
  },
  {
    text: ({ battery }) => `적당한 충전 (${battery}%)`,
    mood: 'casual',
    static: { language: 'ko', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 50 && battery < 80,
  },
  {
    text: ({ battery }) => `거의 최대 전력 (${battery}%)`,
    mood: 'casual',
    static: { language: 'ko', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80 && battery < 100,
  },
  {
    text: '나이스한 배터리 레벨',
    mood: 'playful',
    static: { language: 'ko', hasName: false },
    dynamic: ({ battery }) => battery === 69,
  },
  {
    text: '삶, 우주, 그리고 당신의 배터리의 답',
    mood: 'playful',
    static: { language: 'ko', hasName: false },
    dynamic: ({ battery }) => battery === 42,
  },
  {
    text: '가장자리에서 살기!',
    mood: 'playful',
    static: { language: 'ko', hasName: false },
    dynamic: ({ battery }) => battery === 1,
  },
  {
    text: '완벽에 너무 가까움',
    mood: 'playful',
    static: { language: 'ko', hasName: false },
    dynamic: ({ battery }) => battery === 99,
  },
  {
    text: '완벽하게 균형 잡힘',
    mood: 'casual',
    static: { language: 'ko', hasName: false },
    dynamic: ({ battery }) => battery === 50,
  },

  // === WEATHER-AWARE GREETINGS ===
  {
    text: '오늘 비 오는 바이브',
    mood: 'casual',
    static: { language: 'ko', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'rainy',
  },
  {
    text: '밖에 겨울 원더랜드',
    mood: 'playful',
    static: { language: 'ko', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'snowy',
  },
  {
    text: '멋진 아침이에요',
    mood: 'casual',
    static: { language: 'ko', hasName: false },
    dynamic: ({ hour, weather }) =>
      hour !== undefined && weather?.condition === 'clear' && hour >= 5 && hour < 12,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return '시원하게 지내세요';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `시원하게 지내세요 (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'ko', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp > 30,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return '따뜻하게 입으세요!';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `따뜻하게 입으세요! (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'ko', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp < 0,
  },
];
