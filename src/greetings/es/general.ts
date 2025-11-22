import { GreetingDefinition } from '../types';

// Spanish general time-based greetings
export const generalGreetings: GreetingDefinition[] = [
  // === MORNING GREETINGS ===
  // With name
  {
    text: (name) => `¡Qué tal, ${name}!`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: (name) => `¡Hola ${name}!`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: (name) => `¡Buenos días, ${name}!`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: (name) => `¿Cómo amaneciste, ${name}?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: (name) => `¡Arriba ${name}!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: (name) => `${name}, ¡a darle!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: (name) => `¡Órale ${name}!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: (name) => `${name}, ¡qué buena onda verte!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: (name) => `${name}, listo para hoy?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: (name) => `¡Ey ${name}!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: (name) => `${name}, ¡buenos días!`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: (name) => `Buenos días, ${name}`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Without name
  {
    text: '¡Qué onda!',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡Buenos días!',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡Buen día!',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¿Cómo amaneciste?',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡A darle con todo!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡Arriba!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡Órale!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡A por ello!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡Vamos!',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Buen inicio',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // === AFTERNOON GREETINGS ===
  // With name
  {
    text: (name) => `Buenas tardes, ${name}`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: (name) => `¿Qué pasa, ${name}?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: (name) => `${name}, ¿cómo vas?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: (name) => `¡Hola de nuevo, ${name}!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: (name) => `${name}, ¿todo bien?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: (name) => `${name} de vuelta`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Without name
  {
    text: 'Buenas tardes',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '¿Qué tal la tarde?',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '¡Buenas!',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '¿Qué tal?',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Buena tarde',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // === EVENING GREETINGS ===
  // With name
  {
    text: (name) => `Buenas noches, ${name}`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: (name) => `${name}, ¿qué tal la noche?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: (name) => `Noche perfecta con ${name}`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: (name) => `${name}, buena noche`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Without name
  {
    text: 'Buenas noches',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '¿Qué tal la noche?',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Noche tranquila',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Buena noche',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // === LATE NIGHT GREETINGS ===
  // With name
  {
    text: (name) => `${name}, ¿trasnochando?`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: (name) => `Búho nocturno ${name}`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: (name) => `${name}, ¿no duermes?`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // Without name
  {
    text: '¿Trasnochando?',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Hora de búhos',
    mood: 'mysterious',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Madrugada',
    mood: 'mysterious',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // === WORK MODE GREETINGS ===
  // With name
  {
    text: (name) => `${name}, ¡a trabajar!`,
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: true },
  },
  {
    text: (name) => `Vamos ${name}, ¡a producir!`,
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: true },
  },
  {
    text: (name) => `${name}, ¡a darle duro!`,
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: true },
  },

  // Without name
  {
    text: '¡A trabajar!',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true },
  },
  {
    text: 'Modo productivo',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true },
  },
  {
    text: '¡Vamos a darle!',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true },
  },
  {
    text: 'Hora de producir',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true },
  },
  {
    text: 'Modo enfoque',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true },
  },
];
