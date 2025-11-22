import { GreetingDefinition } from '../types';

// Italian seasonal greetings
export const seasonalGreetings: GreetingDefinition[] = [
  // Monday
  {
    text: 'Buon lunedì',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: ({ name }) => `${name}, iniziamo la settimana!`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: 'Lunedì di nuovo',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 1,
  },

  // Friday
  {
    text: 'Buon venerdì',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: ({ name }) => `${name}, buon venerdì!`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: 'Finalmente venerdì!',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 5,
  },

  // Weekend
  {
    text: 'Buon fine settimana',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: ({ name }) => `${name}, buon weekend!`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: 'Goditi il weekend',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },

  // Other weekdays
  {
    text: 'Martedì, andiamo!',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 2,
  },
  {
    text: 'Mercoledì, metà settimana',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 3,
  },
  {
    text: ({ name }) => `${name}, mercoledì già!`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 3,
  },
  {
    text: 'Giovedì, quasi arrivati',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 4,
  },
  {
    text: ({ name }) => `${name}, giovedì!`,
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 4,
  },
  {
    text: 'Sabato fantastico',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: ({ name }) => `${name}, sabato!`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: 'Domenica relax',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 0,
  },
  {
    text: ({ name }) => `${name}, domenica rilassante!`,
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 0,
  },

  // Seasons - Spring
  {
    text: 'È primavera',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Atmosfera primaverile',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `${name}, primavera!`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Fiori di primavera',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },

  // Seasons - Summer
  {
    text: 'Estate felice',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Estate calda',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `${name}, estate!`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Mare e sole',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },

  // Seasons - Fall/Autumn
  {
    text: 'È autunno',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Atmosfera autunnale',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: ({ name }) => `${name}, autunno!`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Foglie che cadono',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },

  // Seasons - Winter
  {
    text: 'È inverno',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Freddo invernale',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `${name}, inverno!`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Copriti bene',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
];
