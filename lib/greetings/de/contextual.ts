import { GreetingDefinition } from '../types';

// German battery and weather contextual greetings
export const contextualGreetings: GreetingDefinition[] = [
  // === BATTERY-LEVEL GREETINGS ===
  {
    text: ({ battery }) => `Energielevel niedrig, genau wie dein Akku (${battery}%)`,
    mood: 'playful',
    static: { language: 'de', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery < 20,
  },
  {
    text: 'Voll aufgeladen, genau wie du! ⚡',
    mood: 'playful',
    static: { language: 'de', hasName: false },
    dynamic: ({ battery }) => battery === 100,
  },
  {
    text: ({ battery }) => `Energielevel hoch (${battery}%)`,
    mood: 'casual',
    static: { language: 'de', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 90,
  },
  {
    text: ({ battery }) => `Kritischer Akku! (${battery}%)`,
    mood: 'playful',
    static: { language: 'de', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 0 && battery < 10,
  },
  {
    text: ({ battery }) => `Akku wird langsam leer (${battery}%)`,
    mood: 'casual',
    static: { language: 'de', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 20 && battery < 50,
  },
  {
    text: ({ battery }) => `Ordentliche Ladung (${battery}%)`,
    mood: 'casual',
    static: { language: 'de', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 50 && battery < 80,
  },
  {
    text: ({ battery }) => `Fast volle Power (${battery}%)`,
    mood: 'casual',
    static: { language: 'de', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80 && battery < 100,
  },
  {
    text: 'Netter Akkustand',
    mood: 'playful',
    static: { language: 'de', hasName: false },
    dynamic: ({ battery }) => battery === 69,
  },
  {
    text: 'Die Antwort auf Leben, Universum und deinen Akku',
    mood: 'playful',
    static: { language: 'de', hasName: false },
    dynamic: ({ battery }) => battery === 42,
  },
  {
    text: 'Am Limit leben!',
    mood: 'playful',
    static: { language: 'de', hasName: false },
    dynamic: ({ battery }) => battery === 1,
  },
  {
    text: 'So nah an der Perfektion',
    mood: 'playful',
    static: { language: 'de', hasName: false },
    dynamic: ({ battery }) => battery === 99,
  },
  {
    text: 'Perfekt ausbalanciert',
    mood: 'casual',
    static: { language: 'de', hasName: false },
    dynamic: ({ battery }) => battery === 50,
  },

  // === WEATHER-AWARE GREETINGS ===
  {
    text: 'Regnerische Stimmung heute 🌧️',
    mood: 'casual',
    static: { language: 'de', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'rainy',
  },
  {
    text: 'Winterwunderland draußen ❄️',
    mood: 'playful',
    static: { language: 'de', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'snowy',
  },
  {
    text: 'Wunderschöner Morgen ☀️',
    mood: 'casual',
    static: { language: 'de', hasName: false },
    dynamic: ({ hour, weather }) =>
      hour !== undefined && weather?.condition === 'clear' && hour >= 5 && hour < 12,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return 'Bleib cool da draußen';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `Bleib cool da draußen (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'de', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp > 30,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return 'Warm einpacken!';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `Warm einpacken! (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'de', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp < 0,
  },
  {
    text: 'Perfektes Wetter heute',
    mood: 'casual',
    static: { language: 'de', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'clear' && weather?.temp !== undefined && weather.temp >= 15 && weather.temp <= 25,
  },
  {
    text: 'Neblig heute 🌫️',
    mood: 'mysterious',
    static: { language: 'de', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'foggy',
  },
  {
    text: 'Stürmisch da draußen ⛈️',
    mood: 'casual',
    static: { language: 'de', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'stormy',
  },
  {
    text: 'Bewölkt aber gemütlich ☁️',
    mood: 'casual',
    static: { language: 'de', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'cloudy',
  },
  {
    text: ({ name }) => `${name}, vergiss den Schirm nicht!`,
    mood: 'casual',
    static: { language: 'de', hasName: true },
    dynamic: ({ weather }) => weather?.condition === 'rainy',
  },
  {
    text: ({ name }) => `${name}, perfektes Sonnenwetter!`,
    mood: 'playful',
    static: { language: 'de', hasName: true },
    dynamic: ({ weather }) => weather?.condition === 'clear',
  },
  {
    text: 'Herrliches Frühlingswetter',
    mood: 'casual',
    static: { language: 'de', hasName: false },
    dynamic: ({ weather, month }) =>
      weather?.condition === 'clear' &&
      month !== undefined &&
      (month === 2 || month === 3 || month === 4) &&
      weather?.temp !== undefined &&
      weather.temp >= 10 &&
      weather.temp <= 20,
  },
  {
    text: 'Heiß heute! 🔥',
    mood: 'playful',
    static: { language: 'de', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp > 35,
  },
];
