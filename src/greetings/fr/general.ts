import { GreetingDefinition } from '../types';

// French general time-based greetings
export const generalGreetings: GreetingDefinition[] = [
  // === MORNING GREETINGS ===
  // With name
  {
    text: (name) => `Bonjour ${name}!`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: (name) => `Salut ${name}!`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: (name) => `Coucou ${name}!`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: (name) => `${name}, ça va?`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: (name) => `Bien le bonjour, ${name}!`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: (name) => `${name}, prêt pour la journée?`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: (name) => `${name}, en forme?`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: (name) => `Hey ${name}!`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Without name
  {
    text: 'Bonjour!',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Salut!',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Coucou!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Ça va?',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Bien le bonjour!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Belle journée!',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Salutations!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Bon matin!',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // === AFTERNOON GREETINGS ===
  // With name
  {
    text: (name) => `Bon après-midi, ${name}`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: (name) => `Re ${name}!`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: (name) => `${name}, ça roule?`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: (name) => `${name} de retour`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Without name
  {
    text: 'Bon après-midi',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Ça roule?',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Re!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Rebonjour!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // === EVENING GREETINGS ===
  // With name
  {
    text: (name) => `Bonsoir ${name}`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: (name) => `${name}, bonne soirée!`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: (name) => `Soirée parfaite avec ${name}`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: (name) => `${name}, ça va ce soir?`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Without name
  {
    text: 'Bonsoir',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Bonne soirée',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Belle soirée!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Bonne nuit!',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // === LATE NIGHT GREETINGS ===
  // With name
  {
    text: (name) => `${name}, encore debout?`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: (name) => `Couche-tard ${name}`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: (name) => `${name}, insomnie?`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // Without name
  {
    text: 'Encore debout?',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Nuit blanche?',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Heure des hiboux',
    mood: 'mysterious',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Minuit passé',
    mood: 'mysterious',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // === WORK MODE GREETINGS ===
  // With name
  {
    text: (name) => `Au boulot, ${name}!`,
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: true },
  },
  {
    text: (name) => `${name}, on y va!`,
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: true },
  },
  {
    text: (name) => `${name}, prêt à travailler?`,
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: true },
  },

  // Without name
  {
    text: 'Au travail!',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true },
  },
  {
    text: 'Mode focus',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true },
  },
  {
    text: 'Au boulot!',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true },
  },
  {
    text: 'On y va!',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true },
  },
  {
    text: 'Concentration!',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true },
  },
];
