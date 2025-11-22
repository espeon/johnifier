import { GreetingDefinition } from '../types';

// Portuguese seasonal greetings
export const seasonalGreetings: GreetingDefinition[] = [
  // Monday
  {
    text: 'Feliz segunda-feira',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: ({ name }) => `${name}, vamos começar a semana!`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: 'Segunda de novo',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 1,
  },

  // Friday
  {
    text: 'Sextou!',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: ({ name }) => `${name}, sextou!`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: 'Finalmente sexta!',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 5,
  },

  // Weekend
  {
    text: 'Bom fim de semana',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: ({ name }) => `${name}, bom fim de semana!`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: 'Aproveita o fim de semana',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },

  // Other weekdays
  {
    text: 'Terça-feira, bora!',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 2,
  },
  {
    text: 'Quarta-feira, meio da semana',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 3,
  },
  {
    text: ({ name }) => `${name}, quarta já!`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 3,
  },
  {
    text: 'Quinta-feira, quase lá',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 4,
  },
  {
    text: ({ name }) => `${name}, quinta-feira!`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 4,
  },
  {
    text: 'Sábado legal',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: ({ name }) => `${name}, sábado!`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: 'Domingão',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 0,
  },
  {
    text: ({ name }) => `${name}, domingo relaxante!`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 0,
  },

  // Seasons - Spring (Sep-Dec in Southern Hemisphere, but using Northern for simplicity)
  {
    text: 'Primavera chegou',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Clima de primavera',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `${name}, primavera!`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Flores da primavera',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },

  // Seasons - Summer
  {
    text: 'Verão vibes',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Verão quente',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `${name}, verão!`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Praia e sol',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },

  // Seasons - Fall/Autumn
  {
    text: 'Outono chegou',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Clima de outono',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: ({ name }) => `${name}, outono!`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Folhas caindo',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },

  // Seasons - Winter
  {
    text: 'Inverno chegou',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Frio de inverno',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `${name}, inverno!`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Se agasalhe bem',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
];
