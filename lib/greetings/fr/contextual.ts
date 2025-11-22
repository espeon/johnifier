import { GreetingDefinition } from '../types';

// Battery and weather contextual greetings (French)
export const contextualGreetings: GreetingDefinition[] = [
  // === BATTERY-LEVEL GREETINGS ===
  {
    text: ({ battery }) => `À court, comme ta batterie (${battery}%)`,
    mood: 'playful',
    static: { language: 'fr', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery < 20,
  },
  {
    text: 'Complètement chargé, comme toi! ⚡',
    mood: 'playful',
    static: { language: 'fr', hasName: false },
    dynamic: ({ battery }) => battery === 100,
  },
  {
    text: ({ battery }) => `Niveaux d'énergie élevés (${battery}%)`,
    mood: 'casual',
    static: { language: 'fr', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 90,
  },
  {
    text: ({ battery }) => `Batterie critique! (${battery}%)`,
    mood: 'playful',
    static: { language: 'fr', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 0 && battery < 10,
  },
  {
    text: ({ battery }) => `Mode batterie faible (${battery}%)`,
    mood: 'casual',
    static: { language: 'fr', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 10 && battery < 20,
  },
  {
    text: ({ battery }) => `Batterie en baisse (${battery}%)`,
    mood: 'casual',
    static: { language: 'fr', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 20 && battery < 50,
  },
  {
    text: ({ battery }) => `Charge correcte (${battery}%)`,
    mood: 'casual',
    static: { language: 'fr', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 50 && battery < 80,
  },
  {
    text: ({ battery }) => `Presque pleine puissance (${battery}%)`,
    mood: 'casual',
    static: { language: 'fr', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80 && battery < 100,
  },
  {
    text: 'Niveau de batterie sympa',
    mood: 'playful',
    static: { language: 'fr', hasName: false },
    dynamic: ({ battery }) => battery === 69,
  },
  {
    text: 'La réponse à la vie, l\'univers, et ta batterie',
    mood: 'playful',
    static: { language: 'fr', hasName: false },
    dynamic: ({ battery }) => battery === 42,
  },
  {
    text: 'Vivre sur le fil!',
    mood: 'playful',
    static: { language: 'fr', hasName: false },
    dynamic: ({ battery }) => battery === 1,
  },
  {
    text: 'Si proche de la perfection',
    mood: 'playful',
    static: { language: 'fr', hasName: false },
    dynamic: ({ battery }) => battery === 99,
  },
  {
    text: 'Parfaitement équilibré',
    mood: 'casual',
    static: { language: 'fr', hasName: false },
    dynamic: ({ battery }) => battery === 50,
  },

  // === WEATHER-AWARE GREETINGS ===
  {
    text: 'Vibes pluvieuses aujourd\'hui 🌧️',
    mood: 'casual',
    static: { language: 'fr', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'rainy',
  },
  {
    text: 'Pays des merveilles hivernales dehors ❄️',
    mood: 'playful',
    static: { language: 'fr', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'snowy',
  },
  {
    text: 'Magnifique matinée pour ça ☀️',
    mood: 'casual',
    static: { language: 'fr', hasName: false },
    dynamic: ({ hour, weather }) =>
      hour !== undefined && weather?.condition === 'clear' && hour >= 5 && hour < 12,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return 'Reste au frais là-bas';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `Reste au frais là-bas (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'fr', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp > 30,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return 'Couvre-toi bien!';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `Couvre-toi bien! (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'fr', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp < 0,
  },
  {
    text: 'Temps parfait pour une promenade',
    mood: 'casual',
    static: { language: 'fr', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'clear',
  },
  {
    text: 'Journée nuageuse mais vibes ensoleillées',
    mood: 'playful',
    static: { language: 'fr', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'cloudy',
  },
  {
    text: 'Ambiance brumeuse ce matin',
    mood: 'mysterious',
    static: { language: 'fr', hasName: false },
    dynamic: ({ weather, hour }) =>
      weather?.condition === 'foggy' && hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return 'Température agréable';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `Température agréable (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'fr', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp >= 15 && weather.temp <= 25,
  },
  {
    text: 'Temps de parapluie ☂️',
    mood: 'casual',
    static: { language: 'fr', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'rainy',
  },
];
