import { GreetingDefinition } from '../types';

// Weather and contextual greetings
export const contextualGreetings: GreetingDefinition[] = [
  // === WEATHER-AWARE GREETINGS ===
  {
    text: 'Vibras lluviosas hoy',
    mood: 'casual',
    static: { language: 'es', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'rainy',
  },
  {
    text: 'País de las maravillas invernal',
    mood: 'playful',
    static: { language: 'es', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'snowy',
  },
  {
    text: 'Mañana hermosa para esto',
    mood: 'casual',
    static: { language: 'es', hasName: false },
    dynamic: ({ hour, weather }) =>
      hour !== undefined && weather?.condition === 'clear' && hour >= 5 && hour < 12,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return 'Mantente fresco';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `Mantente fresco (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'es', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp > 30,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return '¡Abrígate!';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `¡Abrígate! (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'es', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp < 0,
  },
  {
    text: 'Día soleado perfecto',
    mood: 'casual',
    static: { language: 'es', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'clear',
  },
  {
    text: 'Clima nublado, vibras acogedoras',
    mood: 'casual',
    static: { language: 'es', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'cloudy',
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return 'Temperatura perfecta';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `Temperatura perfecta (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'es', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp >= 18 && weather.temp <= 25,
  },
  {
    text: 'Hace calor hoy',
    mood: 'casual',
    static: { language: 'es', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp > 35,
  },
  {
    text: 'Frío polar',
    mood: 'playful',
    static: { language: 'es', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp < -10,
  },

  // === GENERAL CONTEXTUAL GREETINGS ===
  {
    text: 'Momento perfecto',
    mood: 'casual',
    static: { language: 'es', hasName: false },
  },
  {
    text: 'Justo a tiempo',
    mood: 'casual',
    static: { language: 'es', hasName: false },
  },
  {
    text: 'El timing es todo',
    mood: 'playful',
    static: { language: 'es', hasName: false },
  },
  {
    text: 'Vibras del día',
    mood: 'casual',
    static: { language: 'es', hasName: false },
  },
  {
    text: 'Energía positiva detectada',
    mood: 'playful',
    static: { language: 'es', hasName: false },
  },
  {
    text: 'Momento de brillar',
    mood: 'playful',
    static: { language: 'es', hasName: false },
  },
  {
    text: 'Tu momento ha llegado',
    mood: 'casual',
    static: { language: 'es', hasName: false },
  },
  {
    text: 'Presente y listo',
    mood: 'casual',
    static: { language: 'es', hasName: false },
  },
  {
    text: 'Aquí y ahora',
    mood: 'casual',
    static: { language: 'es', hasName: false },
  },
  {
    text: 'En el momento',
    mood: 'casual',
    static: { language: 'es', hasName: false },
  },
  {
    text: 'Totalmente presente',
    mood: 'casual',
    static: { language: 'es', hasName: false },
  },
  {
    text: 'Sincronizado',
    mood: 'playful',
    static: { language: 'es', hasName: false },
  },
  {
    text: 'Conectado',
    mood: 'casual',
    static: { language: 'es', hasName: false },
  },
];
