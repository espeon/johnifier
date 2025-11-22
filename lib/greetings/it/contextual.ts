import { GreetingDefinition } from '../types';

// Italian battery and weather contextual greetings
export const contextualGreetings: GreetingDefinition[] = [
  {
    text: ({ battery }) => `Funzionando a riserva, come la tua batteria (${battery}%)`,
    mood: 'playful',
    static: { language: 'it', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery < 20,
  },
  {
    text: 'Completamente carico, come te!',
    mood: 'playful',
    static: { language: 'it', hasName: false },
    dynamic: ({ battery }) => battery === 100,
  },
  {
    text: ({ battery }) => `Livelli di energia alti (${battery}%)`,
    mood: 'casual',
    static: { language: 'it', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 90,
  },
  {
    text: ({ battery }) => `Batteria critica! (${battery}%)`,
    mood: 'playful',
    static: { language: 'it', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 0 && battery < 10,
  },
  {
    text: ({ battery }) => `Modalità batteria scarica (${battery}%)`,
    mood: 'casual',
    static: { language: 'it', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 10 && battery < 20,
  },
  {
    text: ({ battery }) => `Batteria in calo (${battery}%)`,
    mood: 'casual',
    static: { language: 'it', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 20 && battery < 50,
  },
  {
    text: ({ battery }) => `Carica decente (${battery}%)`,
    mood: 'casual',
    static: { language: 'it', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 50 && battery < 80,
  },
  {
    text: ({ battery }) => `Quasi energia piena (${battery}%)`,
    mood: 'casual',
    static: { language: 'it', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80 && battery < 100,
  },
  {
    text: 'Livello batteria nice',
    mood: 'playful',
    static: { language: 'it', hasName: false },
    dynamic: ({ battery }) => battery === 69,
  },
  {
    text: 'La risposta alla vita, all\'universo e alla tua batteria',
    mood: 'playful',
    static: { language: 'it', hasName: false },
    dynamic: ({ battery }) => battery === 42,
  },
  {
    text: 'Vivendo al limite!',
    mood: 'playful',
    static: { language: 'it', hasName: false },
    dynamic: ({ battery }) => battery === 1,
  },
  {
    text: 'Così vicino alla perfezione',
    mood: 'playful',
    static: { language: 'it', hasName: false },
    dynamic: ({ battery }) => battery === 99,
  },
  {
    text: 'Perfettamente equilibrato',
    mood: 'casual',
    static: { language: 'it', hasName: false },
    dynamic: ({ battery }) => battery === 50,
  },
  {
    text: 'Vibes di pioggia oggi',
    mood: 'casual',
    static: { language: 'it', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'rainy',
  },
  {
    text: 'Paese delle meraviglie invernale là fuori',
    mood: 'playful',
    static: { language: 'it', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'snowy',
  },
  {
    text: 'Splendida mattinata per questo',
    mood: 'casual',
    static: { language: 'it', hasName: false },
    dynamic: ({ hour, weather }) =>
      hour !== undefined && weather?.condition === 'clear' && hour >= 5 && hour < 12,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return 'Stai fresco là fuori';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `Stai fresco là fuori (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'it', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp > 30,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return 'Copriti bene!';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `Copriti bene! (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'it', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp < 0,
  },
];
