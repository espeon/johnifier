import { GreetingDefinition } from '../types';

// Italian general greetings
export const generalGreetings: GreetingDefinition[] = [
  // Morning
  {
    text: 'Buongiorno',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Buongiorno, ${name}`,
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Afternoon
  {
    text: 'Buon pomeriggio',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Buon pomeriggio, ${name}`,
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Evening
  {
    text: 'Buonasera',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `Buonasera, ${name}`,
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // General
  {
    text: 'Ciao',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `Ciao, ${name}`,
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Benvenuto',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `Benvenuto, ${name}`,
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Piacere di vederti',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false },
  },

  // Work mode
  {
    text: 'Al lavoro',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true },
  },
  {
    text: ({ name }) => `Forza, ${name}!`,
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: true },
  },
];
