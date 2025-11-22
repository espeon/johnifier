import { GreetingDefinition } from '../types';

// Holiday-specific greetings
export const holidayGreetings: GreetingDefinition[] = [
  // New Year's
  {
    text: 'Happy New Year! Fresh start incoming',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: ({ name }) => `New year, same awesome ${name}`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: 'New Year\'s resolution energy',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 0,
  },

  // Valentine's Day
  {
    text: 'Love is in the air ❤️',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },
  {
    text: ({ name }) => `${name}, you absolute sweetheart`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },
  {
    text: 'Happy Valentine\'s Day!',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },

  // Pi Day
  {
    text: 'Happy Pi Day! 3.14159...',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, techOk: true },
    dynamic: ({ month, day }) => month === 2 && day !== undefined && day === 14,
  },

  // April Fools
  {
    text: 'Trust nobody today 🤡',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 3 && day !== undefined && day === 1,
  },
  {
    text: 'This greeting is definitely not a joke',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 3 && day !== undefined && day === 1,
  },

  // Star Wars Day
  {
    text: 'May the 4th be with you',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 4 && day !== undefined && day === 4,
  },
  {
    text: ({ name }) => `May the 4th be with you, ${name}`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 4 && day !== undefined && day === 4,
  },

  // Halloween
  {
    text: 'Happy Halloween! 🎃',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 31,
  },
  {
    text: 'Spooky season vibes',
    mood: 'mysterious',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 9,
  },
  {
    text: ({ name }) => `Boo! Just kidding, hi ${name}`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 31,
  },
  {
    text: 'Trick or treat yourself',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 31,
  },

  // Thanksgiving (4th Thursday of November)
  {
    text: 'Happy Thanksgiving!',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 10 && day !== undefined && day >= 22 && day <= 28,
  },
  {
    text: 'Grateful for you today',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 10 && day !== undefined && day >= 22 && day <= 28,
  },
  {
    text: ({ name }) => `Happy Thanksgiving, ${name}!`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 10 && day !== undefined && day >= 22 && day <= 28,
  },

  // Christmas season
  {
    text: 'Merry Christmas! 🎄',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: 'Holiday season magic ✨',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: ({ name }) => `Merry Christmas, ${name}! 🎁`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: 'Jingle all the way',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: 'Cozy holiday vibes',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },

  // New Year's Eve
  {
    text: 'Out with the old, in with the bold',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },
  {
    text: 'NYE vibes incoming',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },
];
