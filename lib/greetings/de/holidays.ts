import { GreetingDefinition } from '../types';

// German holiday-specific greetings
export const holidayGreetings: GreetingDefinition[] = [
  // New Year's (Neujahr)
  {
    text: 'Frohes Neues Jahr! Frischer Start',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: ({ name }) => `Neues Jahr, gleich fantastischer ${name}`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: 'Prosit Neujahr!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: 'Gute Vorsätze-Energie',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 0,
  },

  // Valentine's Day (Valentinstag)
  {
    text: 'Liebe liegt in der Luft ❤️',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },
  {
    text: ({ name }) => `${name}, du absoluter Schatz`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },
  {
    text: 'Alles Liebe zum Valentinstag!',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },

  // Carnival/Karneval
  {
    text: 'Helau! Karnevalszeit!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 1 || month === 2,
  },
  {
    text: ({ name }) => `${name}, bereit zum Feiern? Alaaf!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 1 || month === 2,
  },

  // Pi Day
  {
    text: 'Alles Gute zum Pi-Tag! 3,14159...',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: false },
    dynamic: ({ month, day }) => month === 2 && day !== undefined && day === 14,
  },

  // Easter (Ostern)
  {
    text: 'Frohe Ostern! 🐰',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 2 || month === 3,
  },
  {
    text: ({ name }) => `${name}, schöne Ostertage!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 2 || month === 3,
  },
  {
    text: 'Ostereier-Jagd-Vibes',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 2 || month === 3,
  },

  // April Fools (Erster April)
  {
    text: 'Heute niemandem trauen 🤡',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 3 && day !== undefined && day === 1,
  },
  {
    text: 'Diese Begrüßung ist definitiv kein Scherz',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 3 && day !== undefined && day === 1,
  },
  {
    text: ({ name }) => `${name}, April, April!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 3 && day !== undefined && day === 1,
  },

  // May Day (Tag der Arbeit)
  {
    text: 'Schönen 1. Mai!',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 4 && day !== undefined && day === 1,
  },
  {
    text: ({ name }) => `${name}, einen schönen Maifeiertag!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 4 && day !== undefined && day === 1,
  },

  // Star Wars Day
  {
    text: 'Möge der 4. mit dir sein',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 4 && day !== undefined && day === 4,
  },
  {
    text: ({ name }) => `Möge der 4. mit dir sein, ${name}`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 4 && day !== undefined && day === 4,
  },

  // German Unity Day (Tag der Deutschen Einheit)
  {
    text: 'Tag der Deutschen Einheit 🇩🇪',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 3,
  },
  {
    text: ({ name }) => `${name}, schönen Feiertag!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 3,
  },

  // Halloween
  {
    text: 'Happy Halloween! 🎃',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 31,
  },
  {
    text: 'Gruselige Stimmung',
    mood: 'mysterious',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 9,
  },
  {
    text: ({ name }) => `Buh! Nur Spaß, hallo ${name}`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 31,
  },
  {
    text: 'Süßes oder Saures!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 31,
  },

  // St. Martin's Day (Martinstag)
  {
    text: 'Laterne, Laterne 🏮',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 10 && day !== undefined && day === 11,
  },

  // Christmas season (Weihnachten)
  {
    text: 'Frohe Weihnachten! 🎄',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: 'Weihnachtszauber ✨',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: ({ name }) => `Frohe Weihnachten, ${name}! 🎁`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: 'Alle Jahre wieder',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: 'Gemütliche Weihnachtszeit',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: 'Stille Nacht, heilige Nacht',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 24,
  },
  {
    text: ({ name }) => `${name}, schönen Heiligabend!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 24,
  },

  // Advent season
  {
    text: 'Adventszeit 🕯️',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: 'Plätzchen-Saison eröffnet',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },

  // New Year's Eve (Silvester)
  {
    text: 'Guten Rutsch ins neue Jahr!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },
  {
    text: ({ name }) => `${name}, guten Rutsch!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },
  {
    text: 'Silvester-Vibes',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },
];
