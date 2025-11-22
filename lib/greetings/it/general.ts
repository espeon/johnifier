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
    static: { language: 'it', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `Forza, ${name}!`,
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: true },
  },

  // Additional morning greetings
  {
    text: 'Buongiorno splendido',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Buongiorno, ${name}! Andiamo!`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Che bella giornata',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Buongiorno, amico',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Buongiorno, ${name}! Tutto andrà bene`,
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Nuovo giorno, nuove opportunità',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Energia mattutina',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Additional afternoon greetings
  {
    text: 'Come va?',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Buon pomeriggio, ${name}! Come stai?`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Pomeriggio benedetto',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Buon pomeriggio, caro',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Buon pomeriggio, ${name}! Andiamo avanti`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Pomeriggio produttivo',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Additional evening greetings
  {
    text: 'Buonasera, nobile',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `Buonasera, ${name}! Riposa`,
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Serata tranquilla',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Ottima serata',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}, buonasera!`,
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Serata illuminata',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Additional general greetings
  {
    text: 'Ehi, come va?',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}, bentornato!`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Salve',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `Salve, ${name}`,
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Ehi, tutto bene?',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `Ehi, ${name}! Tutto bene?`,
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Sei arrivato!',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name} è arrivato!`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Bentornato',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `Benvenuto, ${name}`,
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Che bello vederti',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `Che bello vederti, ${name}`,
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Sei apparso!',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name} è apparso!`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
  },

  // Additional work mode greetings
  {
    text: 'Andiamo',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `Andiamo a lavorare, ${name}`,
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Concentrazione totale',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}, tempo di concentrarsi!`,
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Mettiamoci al lavoro',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}, mettiamoci al lavoro!`,
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Tempo di produrre',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}, produciamo!`,
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Verso il successo',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}, verso il successo!`,
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Lavoro duro',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}, lavoro duro!`,
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Produttività alta',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}, produttività massima!`,
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Andiamo a conquistare',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}, andiamo a conquistare!`,
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: true },
  },
];
