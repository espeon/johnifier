import { GreetingDefinition } from '../types';

// German seasonal and day-specific greetings
export const seasonalGreetings: GreetingDefinition[] = [
  // === WEEKDAY/WEEKEND GREETINGS ===
  {
    text: 'Freitag!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: ({ name }) => `${name}, endlich Freitag!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: 'Wochenende!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 0 || day === 6,
  },
  {
    text: ({ name }) => `${name}, schönes Wochenende!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 0 || day === 6,
  },
  {
    text: 'Samstag chillen',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: 'Sonntag entspannen',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 0,
  },
  {
    text: ({ name }) => `${name}, entspannter Samstag?`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: ({ name }) => `${name}, ruhiger Sonntag`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 0,
  },
  {
    text: 'Fast Wochenende!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 4,
  },
  {
    text: 'Montag Blues',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: ({ name }) => `${name}, durch den Montag kämpfen`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: 'Dienstag durchstarten',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 2,
  },
  {
    text: 'Mitte der Woche',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 3,
  },
  {
    text: ({ name }) => `${name}, Bergfest!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true, variant: 'creative' },
    dynamic: ({ day }) => day === 3,
  },

  // === SPRING GREETINGS (March, April, May) ===
  {
    text: 'Frühling!',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `${name}, der Frühling ist da!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Frühlingserwachen',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Blütezeit',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Frühlingsluft liegt in der Luft',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `${name}, Frühlingszeit!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Die Natur erwacht',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Vogelgezwitscher-Saison',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Frühlingsfrische',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `${name}, Zeit für Frühjahrsputz?`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },

  // === SUMMER GREETINGS (June, July, August) ===
  {
    text: 'Sommer Vibes',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `${name}, Sommerzeit!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Sonnige Grüße',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Sommerlaune',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Urlaubsstimmung',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `${name}, ab in die Sonne!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true, variant: 'creative' },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Badezeit!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Eis-Wetter',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Heiße Tage',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `${name}, Sommerfeeling!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Grillsaison eröffnet',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },

  // === FALL/AUTUMN GREETINGS (September, October, November) ===
  {
    text: 'Herbst Zeit',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: ({ name }) => `${name}, der Herbst ist da!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Herbststimmung',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Bunte Blätter',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Kürbiszeit',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: ({ name }) => `${name}, goldener Herbst!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Herbstlaub fällt',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Kastanien sammeln',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Nebliger Herbst',
    mood: 'mysterious',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: ({ name }) => `${name}, Herbstspaziergang?`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Erntezeit',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Herbstwind weht',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },

  // === WINTER GREETINGS (December, January, February) ===
  {
    text: 'Winter Stimmung',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `${name}, winterliche Grüße!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Winterzeit',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Schneeflockenzauber',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Kuschelige Winterzeit',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `${name}, warm einpacken!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Glühwein-Saison',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Winterwunderland',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Eisige Zeiten',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `${name}, Schneezeit!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Kaminfeuer-Wetter',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Schlitten fahren?',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Frostige Grüße',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
];
