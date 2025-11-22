import { GreetingDefinition } from '../types';

// Portuguese (Brazilian) battery and weather contextual greetings
export const contextualGreetings: GreetingDefinition[] = [
  // === BATTERY-LEVEL GREETINGS ===
  {
    text: ({ battery }) => `Correndo na reserva, assim como sua bateria (${battery}%)`,
    mood: 'playful',
    static: { language: 'pt', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery < 20,
  },
  {
    text: 'Totalmente carregado, assim como você!',
    mood: 'playful',
    static: { language: 'pt', hasName: false },
    dynamic: ({ battery }) => battery === 100,
  },
  {
    text: ({ battery }) => `Níveis de energia altos (${battery}%)`,
    mood: 'casual',
    static: { language: 'pt', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 90,
  },
  {
    text: ({ battery }) => `Bateria crítica! (${battery}%)`,
    mood: 'playful',
    static: { language: 'pt', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 0 && battery < 10,
  },
  {
    text: ({ battery }) => `Modo de bateria fraca (${battery}%)`,
    mood: 'casual',
    static: { language: 'pt', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 10 && battery < 20,
  },
  {
    text: ({ battery }) => `Bateria ficando fraca (${battery}%)`,
    mood: 'casual',
    static: { language: 'pt', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 20 && battery < 50,
  },
  {
    text: ({ battery }) => `Carga decente (${battery}%)`,
    mood: 'casual',
    static: { language: 'pt', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 50 && battery < 80,
  },
  {
    text: ({ battery }) => `Quase energia total (${battery}%)`,
    mood: 'casual',
    static: { language: 'pt', hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80 && battery < 100,
  },
  {
    text: 'Nível de bateria nice',
    mood: 'playful',
    static: { language: 'pt', hasName: false },
    dynamic: ({ battery }) => battery === 69,
  },
  {
    text: 'A resposta para a vida, o universo e sua bateria',
    mood: 'playful',
    static: { language: 'pt', hasName: false },
    dynamic: ({ battery }) => battery === 42,
  },
  {
    text: 'Vivendo no limite!',
    mood: 'playful',
    static: { language: 'pt', hasName: false },
    dynamic: ({ battery }) => battery === 1,
  },
  {
    text: 'Tão perto da perfeição',
    mood: 'playful',
    static: { language: 'pt', hasName: false },
    dynamic: ({ battery }) => battery === 99,
  },
  {
    text: 'Perfeitamente equilibrado',
    mood: 'casual',
    static: { language: 'pt', hasName: false },
    dynamic: ({ battery }) => battery === 50,
  },

  // === WEATHER-AWARE GREETINGS ===
  {
    text: 'Vibes de chuva hoje',
    mood: 'casual',
    static: { language: 'pt', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'rainy',
  },
  {
    text: 'País das maravilhas de inverno lá fora',
    mood: 'playful',
    static: { language: 'pt', hasName: false },
    dynamic: ({ weather }) => weather?.condition === 'snowy',
  },
  {
    text: 'Manhã linda para isso',
    mood: 'casual',
    static: { language: 'pt', hasName: false },
    dynamic: ({ hour, weather }) =>
      hour !== undefined && weather?.condition === 'clear' && hour >= 5 && hour < 12,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return 'Fique fresquinho';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `Fique fresquinho (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'pt', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp > 30,
  },
  {
    text: ({ weather, tempUnit }) => {
      if (!weather?.temp) return 'Se agasalhe!';
      const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
      return `Se agasalhe! (${temp}°${tempUnit || 'C'})`;
    },
    mood: 'casual',
    static: { language: 'pt', hasName: false },
    dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp < 0,
  },
];
