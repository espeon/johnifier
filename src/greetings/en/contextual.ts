import { GreetingDefinition } from '../types';

// Battery and weather contextual greetings
export const contextualGreetings: GreetingDefinition[] = [
  // === BATTERY-LEVEL GREETINGS ===
  {
    text: (name) => `Running low, just like your battery (${name}%)`,
    mood: 'playful',
    static: { language: 'en' },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery < 20,
  },
  {
    text: 'Fully charged, just like you! ⚡',
    mood: 'playful',
    static: { language: 'en' },
    dynamic: ({ battery }) => battery === 100,
  },
  {
    text: (name) => `Energy levels high (${name}%)`,
    mood: 'casual',
    static: { language: 'en' },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 90,
  },
  {
    text: (name) => `Critical battery! (${name}%)`,
    mood: 'playful',
    static: { language: 'en' },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 0 && battery < 10,
  },
  {
    text: (name) => `Low battery mode (${name}%)`,
    mood: 'casual',
    static: { language: 'en' },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 10 && battery < 20,
  },
  {
    text: (name) => `Battery getting low (${name}%)`,
    mood: 'casual',
    static: { language: 'en' },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 20 && battery < 50,
  },
  {
    text: (name) => `Decent charge (${name}%)`,
    mood: 'casual',
    static: { language: 'en' },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 50 && battery < 80,
  },
  {
    text: (name) => `Nearly full power (${name}%)`,
    mood: 'casual',
    static: { language: 'en' },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80 && battery < 100,
  },
  {
    text: 'Nice battery level',
    mood: 'playful',
    static: { language: 'en' },
    dynamic: ({ battery }) => battery === 69,
  },
  {
    text: 'The answer to life, the universe, and your battery',
    mood: 'playful',
    static: { language: 'en' },
    dynamic: ({ battery }) => battery === 42,
  },
  {
    text: 'Living on the edge!',
    mood: 'playful',
    static: { language: 'en' },
    dynamic: ({ battery }) => battery === 1,
  },
  {
    text: 'So close to perfection',
    mood: 'playful',
    static: { language: 'en' },
    dynamic: ({ battery }) => battery === 99,
  },
  {
    text: 'Perfectly balanced',
    mood: 'casual',
    static: { language: 'en' },
    dynamic: ({ battery }) => battery === 50,
  },

  // === WEATHER-AWARE GREETINGS ===
  {
    text: 'Rainy vibes today 🌧️',
    mood: 'casual',
    static: { language: 'en' },
    dynamic: ({ weather }) => weather?.condition === 'rainy',
  },
  {
    text: 'Winter wonderland out there ❄️',
    mood: 'playful',
    static: { language: 'en' },
    dynamic: ({ weather }) => weather?.condition === 'snowy',
  },
  {
    text: 'Gorgeous morning for it ☀️',
    mood: 'casual',
    static: { language: 'en' },
    dynamic: ({ hour, weather }) =>
      hour !== undefined && weather?.condition === 'clear' && hour >= 5 && hour < 12,
  },
  {
    text: (name) => `Stay cool out there (${name}°C)`,
    mood: 'casual',
    static: { language: 'en' },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp > 30,
  },
  {
    text: (name) => `Bundle up! (${name}°C)`,
    mood: 'casual',
    static: { language: 'en' },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp < 0,
  },
];
