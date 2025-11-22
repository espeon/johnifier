import { GreetingDefinition } from '../types';

// German general time-based greetings
export const generalGreetings: GreetingDefinition[] = [
  // === MORNING GREETINGS ===
  // With name
  {
    text: ({ name }) => `Guten Morgen, ${name}!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Moin ${name}!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Hallo ${name}!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Servus ${name}!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, gut geschlafen?`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Schön dich zu sehen, ${name}`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, bereit für heute?`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Hey ${name}!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Without name
  {
    text: 'Guten Morgen!',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Moin!',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Hallo!',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Servus!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Gut geschlafen?',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Frischer Start!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Guten Start!',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Mahlzeit!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // === AFTERNOON GREETINGS ===
  // With name
  {
    text: ({ name }) => `Guten Tag, ${name}`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}, wie geht's?`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Tag ${name}!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name} wieder da`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Without name
  {
    text: 'Guten Tag',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Tag!',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: "Wie geht's?",
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Alles klar?',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // === EVENING GREETINGS ===
  // With name
  {
    text: ({ name }) => `Guten Abend, ${name}`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}, schöner Abend!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `N'Abend ${name}!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}, wie war dein Tag?`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Without name
  {
    text: 'Guten Abend',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: "N'Abend!",
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Schöner Abend',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Gute Nacht!',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // === LATE NIGHT GREETINGS ===
  // With name
  {
    text: ({ name }) => `${name}, noch wach?`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `Nachteule ${name}`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name}, Schlaflos?`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // Without name
  {
    text: 'Noch wach?',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Nachtschicht?',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Mitternachtsstunde',
    mood: 'mysterious',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Späte Stunde',
    mood: 'mysterious',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // === WORK MODE GREETINGS ===
  // With name
  {
    text: ({ name }) => `${name}, an die Arbeit!`,
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `Los geht's, ${name}!`,
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}, Zeit zu arbeiten!`,
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true, hasName: true },
  },

  // Without name
  {
    text: 'Arbeitsmodus',
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true },
  },
  {
    text: 'An die Arbeit!',
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true },
  },
  {
    text: 'Fokus-Zeit',
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true },
  },
  {
    text: "Los geht's!",
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true },
  },
  {
    text: 'Produktiv sein!',
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true },
  },
];
