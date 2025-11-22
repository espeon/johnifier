import { GreetingDefinition } from '../types';

// Spanish seasonal and day-specific greetings
export const seasonalGreetings: GreetingDefinition[] = [
  // === WEEKDAY/WEEKEND GREETINGS ===
  {
    text: (name) => `${name}, ¡viernes!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: '¡Fin de semana!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 0 || day === 6,
  },
  {
    text: '¡Sábado!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: 'Domingo relax',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 0,
  },
  {
    text: 'Lunes con energía',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 1,
  },

  // === SEASONAL GREETINGS ===
  {
    text: 'Vibes de invierno',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Verano caliente',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Primavera fresca',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Otoño perfecto',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
];
