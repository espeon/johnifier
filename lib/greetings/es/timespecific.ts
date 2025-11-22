import { GreetingDefinition } from '../types';

// Very specific time-based greetings
export const timeSpecificGreetings: GreetingDefinition[] = [
  // Lunch time (11am-2pm)
  {
    text: 'Vibras de hora de comer',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 11 && hour < 14,
  },
  {
    text: '¿Hora de un snack?',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: ({ name }) => `${name}, ¿qué hay de comer?`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: 'Combustible del mediodía',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },

  // Coffee time (9-11am)
  {
    text: 'Hora del café',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: 'Funcionando con cafeína',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: ({ name }) => `${name} + café = imparable`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },

  // Golden hour (5-7pm)
  {
    text: 'Energía de hora dorada',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },
  {
    text: 'Atardecer pronto',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },
  {
    text: ({ name }) => `${name}, capturando la hora dorada`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },

  // Midnight exactly
  {
    text: 'Es medianoche en algún lugar... ah no, aquí',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 0,
  },
  {
    text: 'El reloj marca las doce',
    mood: 'mysterious',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 0,
  },
  {
    text: ({ name }) => `${name}, es un nuevo día (técnicamente)`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour === 0,
  },

  // 3AM
  {
    text: 'Pensamientos de las 3AM pegan diferente',
    mood: 'mysterious',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 3,
  },
  {
    text: 'La hora de la verdad de las 3AM',
    mood: 'mysterious',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 3,
  },
  {
    text: ({ name }) => `${name}, ¿por qué estás despierto?`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour === 3,
  },

  // Noon exactly
  {
    text: 'Mediodía en punto',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 12,
  },
  {
    text: 'Las doce en punto',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 12,
  },

  // Early morning (5-6am)
  {
    text: 'Dedicación: despertar tan temprano',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: 'El club del amanecer',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: ({ name }) => `${name}, arriba y a darle`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },

  // Prime working hours (2-4pm)
  {
    text: 'Hora de moler por la tarde',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },
  {
    text: 'Horas de productividad pico',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },
  {
    text: ({ name }) => `${name}, aplastando la tarde`,
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },

  // End of workday (5-6pm)
  {
    text: 'Casi hora de salir',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },
  {
    text: 'La recta final',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },
  {
    text: ({ name }) => `${name}, termina fuerte`,
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },

  // Siesta time (2-4pm - cultural)
  {
    text: 'Hora de la siesta',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },
  {
    text: '¿Una siestita?',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },
];
