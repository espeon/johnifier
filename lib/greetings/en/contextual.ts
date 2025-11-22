import { GreetingDefinition } from '../types';

// Battery and weather contextual greetings
export const contextualGreetings: GreetingDefinition[] = [
  // === BATTERY-LEVEL GREETINGS ===
  {
    text: (name) => `Running low, just like your battery (${name}%)`,
    mood: 'playful',
    static: { language: 'en', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery < 20,
  },
  {
    text: 'Fully charged, just like you! ⚡',
    mood: 'playful',
    static: { language: 'en', hasName: false },
    dynamic: ({ battery }) => battery === 100,
  },
  {
    text: (name) => `Energy levels high (${name}%)`,
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 90,
  },
  {
    text: (name) => `Critical battery! (${name}%)`,
    mood: 'playful',
    static: { language: 'en', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 0 && battery < 10,
  },
  {
    text: (name) => `Low battery mode (${name}%)`,
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 10 && battery < 20,
  },
  {
    text: (name) => `Battery getting low (${name}%)`,
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 20 && battery < 50,
  },
  {
    text: (name) => `Decent charge (${name}%)`,
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 50 && battery < 80,
  },
  {
    text: (name) => `Nearly full power (${name}%)`,
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80 && battery < 100,
  },
  {
    text: 'Nice battery level',
    mood: 'playful',
    static: { language: 'en', hasName: false },
    dynamic: ({ battery }) => battery === 69,
  },
  {
    text: 'The answer to life, the universe, and your battery',
    mood: 'playful',
    static: { language: 'en', hasName: false },
    dynamic: ({ battery }) => battery === 42,
  },
  {
    text: 'Living on the edge!',
    mood: 'playful',
    static: { language: 'en', hasName: false },
    dynamic: ({ battery }) => battery === 1,
  },
  {
    text: 'So close to perfection',
    mood: 'playful',
    static: { language: 'en', hasName: false },
    dynamic: ({ battery }) => battery === 99,
  },
  {
    text: 'Perfectly balanced',
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ battery }) => battery === 50,
  },

  // === WEATHER-AWARE GREETINGS ===
  {
    text: 'Rainy vibes today 🌧️',
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'rainy',
  },
  {
    text: 'Perfect weather for staying indoors 🌧️',
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'rainy',
  },
  {
    text: 'Grab an umbrella! ☔',
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'rainy',
  },
  {
    text: 'Winter wonderland out there ❄️',
    mood: 'playful',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'snowy',
  },
  {
    text: 'Snow day energy ⛄',
    mood: 'playful',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'snowy',
  },
  {
    text: 'Cloudy with a chance of productivity ☁️',
    mood: 'playful',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'cloudy',
  },
  {
    text: 'Overcast but optimistic ☁️',
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'cloudy',
  },
  {
    text: 'Foggy morning mysteries 🌫️',
    mood: 'playful',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'foggy',
  },
  {
    text: 'Misty vibes out there 🌫️',
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'foggy',
  },
  {
    text: 'Gorgeous morning for it ☀️',
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ hour, weather }) =>
      hour !== undefined && weather?.condition === 'clear' && hour >= 5 && hour < 12,
  },
  {
    text: 'Beautiful day ahead ☀️',
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'clear',
  },
  {
    text: 'Clear skies, clear mind ✨',
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'clear',
  },
  {
    text: 'Sunshine state of mind ☀️',
    mood: 'playful',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'clear',
  },
  {
    text: 'Perfect evening sky 🌅',
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ hour, weather }) =>
      hour !== undefined && weather?.condition === 'clear' && hour >= 17 && hour < 20,
  },
  {
    text: 'Windy out there! 💨',
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'windy',
  },
  {
    text: 'Breezy day vibes 🍃',
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'windy',
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return 'Stay cool out there';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `Stay cool out there (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp > 30,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return 'Hot one today!';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `Hot one today! (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp > 35,
  },
  {
    text: 'Scorching out there 🔥',
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp > 38,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return 'Bundle up!';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `Bundle up! (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp < 0,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return 'Freezing out there!';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `Freezing out there! (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp < -10,
  },
  {
    text: 'Perfect sweater weather 🧥',
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp >= 10 && weather.temp <= 18,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return 'Nice temperature out';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `Perfect weather (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp >= 18 && weather.temp <= 24,
  },
  {
    text: 'Goldilocks weather—just right 👌',
    mood: 'playful',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp >= 20 && weather.temp <= 22,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return 'Bit chilly out';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `Bit chilly (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp >= 0 && weather.temp < 10,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return 'Warm one today';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `Warm one today (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp >= 24 && weather.temp <= 30,
  },
  {
    text: 'Crisp morning air 🍂',
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ hour, weather }) =>
      hour !== undefined && hour >= 5 && hour < 12 && weather?.temp !== undefined && weather.temp >= 5 && weather.temp < 15,
  },
  {
    text: 'Cozy evening weather 🌙',
    mood: 'casual',
    static: { language: 'en', hasName: false },
    dynamic: ({ hour, weather }) =>
      hour !== undefined && hour >= 18 && weather?.temp !== undefined && weather.temp >= 10 && weather.temp < 20,
  },
];
