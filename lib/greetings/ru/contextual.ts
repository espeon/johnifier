import { GreetingDefinition } from '../types';

// Russian battery and weather contextual greetings
export const contextualGreetings: GreetingDefinition[] = [
  // === BATTERY-LEVEL GREETINGS ===
  {
    text: ({ battery }) => `Заряд падает, как твоя батарея (${battery}%)`,
    mood: 'playful',
    static: { language: 'ru', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery < 20,
  },
  {
    text: 'Полностью заряжен, как и ты! ⚡',
    mood: 'playful',
    static: { language: 'ru', hasName: false },
    dynamic: ({ battery }) => battery === 100,
  },
  {
    text: ({ battery }) => `Уровни энергии высоки (${battery}%)`,
    mood: 'casual',
    static: { language: 'ru', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 90,
  },
  {
    text: ({ battery }) => `Критическая батарея! (${battery}%)`,
    mood: 'playful',
    static: { language: 'ru', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 0 && battery < 10,
  },
  {
    text: ({ battery }) => `Режим низкого заряда (${battery}%)`,
    mood: 'casual',
    static: { language: 'ru', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 10 && battery < 20,
  },
  {
    text: ({ battery }) => `Батарея садится (${battery}%)`,
    mood: 'casual',
    static: { language: 'ru', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 20 && battery < 50,
  },
  {
    text: ({ battery }) => `Приличный заряд (${battery}%)`,
    mood: 'casual',
    static: { language: 'ru', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 50 && battery < 80,
  },
  {
    text: ({ battery }) => `Почти полная мощь (${battery}%)`,
    mood: 'casual',
    static: { language: 'ru', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80 && battery < 100,
  },
  {
    text: 'Классный уровень батареи',
    mood: 'playful',
    static: { language: 'ru', hasName: false },
    dynamic: ({ battery }) => battery === 69,
  },
  {
    text: 'Ответ на жизнь, вселенную и твою батарею',
    mood: 'playful',
    static: { language: 'ru', hasName: false },
    dynamic: ({ battery }) => battery === 42,
  },
  {
    text: 'Живём на грани!',
    mood: 'playful',
    static: { language: 'ru', hasName: false },
    dynamic: ({ battery }) => battery === 1,
  },
  {
    text: 'Так близко к совершенству',
    mood: 'playful',
    static: { language: 'ru', hasName: false },
    dynamic: ({ battery }) => battery === 99,
  },
  {
    text: 'Идеально сбалансировано',
    mood: 'casual',
    static: { language: 'ru', hasName: false },
    dynamic: ({ battery }) => battery === 50,
  },

  // === WEATHER-AWARE GREETINGS ===
  {
    text: 'Дождливый вайб сегодня 🌧️',
    mood: 'casual',
    static: { language: 'ru', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'rainy',
  },
  {
    text: 'Зимняя сказка на улице ❄️',
    mood: 'playful',
    static: { language: 'ru', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'snowy',
  },
  {
    text: 'Прекрасное утро для этого ☀️',
    mood: 'casual',
    static: { language: 'ru', hasName: false },
    dynamic: ({ hour, weather }) =>
      hour !== undefined && weather?.condition === 'clear' && hour >= 5 && hour < 12,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return 'Держись в прохладе';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `Держись в прохладе (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'ru', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp > 30,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return 'Одевайся теплее!';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `Одевайся теплее! (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'ru', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp < 0,
  },
  {
    text: 'Идеальная погода сегодня',
    mood: 'casual',
    static: { language: 'ru', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'clear',
  },
  {
    text: 'Облачно, но вайб ясный',
    mood: 'playful',
    static: { language: 'ru', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'cloudy',
  },
  {
    text: 'Туманное утро загадок',
    mood: 'mysterious',
    static: { language: 'ru', hasName: false },
    dynamic: ({ weather, hour }) => weather?.condition === 'foggy' && hour !== undefined && hour >= 5 && hour < 12,
  },
];
