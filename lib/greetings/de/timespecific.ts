import { GreetingDefinition } from '../types';

// German very specific time-based greetings
export const timeSpecificGreetings: GreetingDefinition[] = [
  // Lunch time (11am-2pm)
  {
    text: 'Mittagspausen-Vibes',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 11 && hour < 14,
  },
  {
    text: 'Zeit für einen Snack?',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: ({ name }) => `${name}, was gibt's zum Mittagessen?`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: 'Mittagszeit!',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: ({ name }) => `${name}, Mahlzeit!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 11 && hour < 14,
  },

  // Coffee time (9-11am)
  {
    text: 'Kaffeezeit ☕',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: 'Läuft auf Koffein',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: ({ name }) => `${name} + Kaffee = unaufhaltbar`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: 'Zweiter Kaffee?',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 10 && hour < 11,
  },

  // Golden hour (5-7pm)
  {
    text: 'Goldene Stunde',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },
  {
    text: 'Gleich Sonnenuntergang',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },
  {
    text: ({ name }) => `${name}, perfektes Abendlicht`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },

  // Midnight exactly
  {
    text: 'Es ist Mitternacht',
    mood: 'mysterious',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 0,
  },
  {
    text: 'Die Glocke schlägt zwölf',
    mood: 'mysterious',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 0,
  },
  {
    text: ({ name }) => `${name}, es ist ein neuer Tag (technisch gesehen)`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour === 0,
  },
  {
    text: 'Mitternacht ist da',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 0,
  },

  // 3AM
  {
    text: '3 Uhr morgens-Gedanken',
    mood: 'mysterious',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 3,
  },
  {
    text: 'Die 3-Uhr-Wahrheit',
    mood: 'mysterious',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 3,
  },
  {
    text: ({ name }) => `${name}, warum bist du wach?`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour === 3,
  },
  {
    text: 'Mitten in der Nacht',
    mood: 'mysterious',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 3,
  },

  // Noon exactly
  {
    text: 'Punkt zwölf Uhr',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 12,
  },
  {
    text: 'Hochmittag',
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 12,
  },
  {
    text: ({ name }) => `${name}, genau Mittag!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour === 12,
  },

  // Early morning (5-6am)
  {
    text: 'Hingabe: so früh aufstehen',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: 'Der Sonnenaufgangs-Club',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: ({ name }) => `${name}, früh aufstehen zahlt sich aus`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: 'Morgenstund hat Gold im Mund',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },

  // Prime working hours (2-4pm)
  {
    text: 'Nachmittags-Grind',
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },
  {
    text: 'Produktivste Stunden',
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },
  {
    text: ({ name }) => `${name}, den Nachmittag rocken`,
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },

  // End of workday (5-6pm)
  {
    text: 'Fast Feierabend',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },
  {
    text: 'Endspurt',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },
  {
    text: ({ name }) => `${name}, stark zu Ende bringen`,
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },
  {
    text: 'Feierabend-Vibes',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },

  // Tea time (3-4pm)
  {
    text: 'Teezeit am Nachmittag',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 15 && hour < 16,
  },
  {
    text: ({ name }) => `${name}, Kaffeepause?`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 15 && hour < 16,
  },
];
