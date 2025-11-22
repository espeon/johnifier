import { GreetingDefinition } from '../types';

// German seasonal and day-specific greetings
export const seasonalGreetings: GreetingDefinition[] = [
  // === WEEKDAY/WEEKEND GREETINGS ===
  {
    text: 'Freitag!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: 'Wochenende!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 0 || day === 6,
  },
  {
    text: 'Samstag chillen',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: 'Sonntag entspannen',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false },
    dynamic: ({ day }) => day === 0,
  },

  // === SEASONAL GREETINGS ===
  {
    text: 'Winter Stimmung',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Sommer Vibes',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Frühling!',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Herbst Zeit',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
];
