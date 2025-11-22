import { GreetingDefinition } from '../types';

// Holiday-specific greetings (Spanish/Latin American and international holidays)
export const holidayGreetings: GreetingDefinition[] = [
  // New Year's
  {
    text: '¡Feliz Año Nuevo! Nuevo comienzo',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: ({ name }) => `Año nuevo, mismo increíble ${name}`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: 'Energía de propósitos de año nuevo',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 0,
  },

  // Día de Reyes (Three Kings Day - January 6)
  {
    text: '¡Feliz Día de Reyes!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 6,
  },
  {
    text: 'Los Reyes Magos llegaron',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 6,
  },

  // Valentine's Day
  {
    text: 'Amor en el aire',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },
  {
    text: ({ name }) => `${name}, eres un amor`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },
  {
    text: '¡Feliz San Valentín!',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },

  // Día de la Mujer (International Women's Day - March 8)
  {
    text: '¡Feliz Día de la Mujer!',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 2 && day !== undefined && day === 8,
  },

  // Semana Santa (Easter - approximate, late March/early April)
  {
    text: 'Felices Pascuas',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 2 || month === 3,
  },

  // Día del Niño (Children's Day - April 30 in Mexico)
  {
    text: '¡Feliz Día del Niño!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 3 && day !== undefined && day === 30,
  },

  // Cinco de Mayo (May 5)
  {
    text: '¡Feliz Cinco de Mayo!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 4 && day !== undefined && day === 5,
  },

  // Día de las Madres (Mother's Day - May 10 in Mexico)
  {
    text: '¡Feliz Día de las Madres!',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 4 && day !== undefined && day === 10,
  },

  // Día del Padre (Father's Day - 3rd Sunday in June, approx)
  {
    text: '¡Feliz Día del Padre!',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 5 && day !== undefined && day >= 15 && day <= 21,
  },

  // Día de la Independencia (Mexico - September 16)
  {
    text: '¡Viva México!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 8 && day !== undefined && day === 16,
  },
  {
    text: '¡Feliz Día de la Independencia!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 8 && day !== undefined && day === 16,
  },

  // Halloween
  {
    text: '¡Feliz Halloween!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 31,
  },
  {
    text: 'Vibras espeluznantes',
    mood: 'mysterious',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 9,
  },
  {
    text: ({ name }) => `¡Buu! Es broma, hola ${name}`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 31,
  },

  // Día de los Muertos (Day of the Dead - November 1-2)
  {
    text: '¡Feliz Día de los Muertos!',
    mood: 'mysterious',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 10 && day !== undefined && (day === 1 || day === 2),
  },
  {
    text: 'Recordando con amor',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 10 && day !== undefined && (day === 1 || day === 2),
  },

  // Día de Acción de Gracias (Thanksgiving - 4th Thursday of November)
  {
    text: '¡Feliz Día de Acción de Gracias!',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 10 && day !== undefined && day >= 22 && day <= 28,
  },
  {
    text: 'Agradecido por ti hoy',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 10 && day !== undefined && day >= 22 && day <= 28,
  },

  // Christmas season
  {
    text: '¡Feliz Navidad!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: 'Magia de temporada navideña',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: ({ name }) => `¡Feliz Navidad, ${name}!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: 'Vibras acogedoras de fiesta',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },

  // New Year's Eve
  {
    text: 'Lo viejo se va, lo audaz llega',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },
  {
    text: 'Vibras de Nochevieja',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },
];
