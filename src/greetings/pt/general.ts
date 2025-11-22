import { GreetingDefinition } from '../types';

// Portuguese general greetings
export const generalGreetings: GreetingDefinition[] = [
  // Morning
  {
    text: 'Bom dia',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Bom dia, ${name}`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Afternoon
  {
    text: 'Boa tarde',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Boa tarde, ${name}`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Evening
  {
    text: 'Boa noite',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `Boa noite, ${name}`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // General
  {
    text: 'Olá',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `Olá, ${name}`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Bem-vindo',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `Bem-vindo de volta, ${name}`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Prazer em ver você',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false },
  },

  // Work mode
  {
    text: 'Vamos trabalhar',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true },
  },
  {
    text: ({ name }) => `Vamos lá, ${name}!`,
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: true },
  },
];
