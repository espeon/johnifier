import { GreetingDefinition } from '../types';

// Very specific time-based greetings (French)
export const timeSpecificGreetings: GreetingDefinition[] = [
  // Lunch time (11am-2pm)
  {
    text: 'Vibes pause déjeuner',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 11 && hour < 14,
  },
  {
    text: 'L\'heure du déjeuner',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: 'Temps pour un snack?',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: ({ name }) => `${name}, qu'est-ce qu'on mange?`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: 'Carburant de midi en approche',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },

  // Coffee time (9-11am)
  {
    text: 'L\'heure du café ☕',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: 'Alimenté par caféine',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: ({ name }) => `${name} + café = inarrêtable`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: 'Pause café nécessaire',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },

  // Golden hour (5-7pm)
  {
    text: 'Énergie heure dorée',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },
  {
    text: 'Coucher de soleil bientôt',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },
  {
    text: ({ name }) => `${name}, profite de l'heure dorée`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },

  // Midnight exactly
  {
    text: 'C\'est minuit quelque part... ah non, ici',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 0,
  },
  {
    text: 'L\'horloge sonne minuit',
    mood: 'mysterious',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 0,
  },
  {
    text: ({ name }) => `${name}, c'est un nouveau jour (techniquement)`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour === 0,
  },

  // 3AM
  {
    text: 'Pensées de 3h du matin différentes',
    mood: 'mysterious',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 3,
  },
  {
    text: 'L\'heure de vérité de 3h',
    mood: 'mysterious',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 3,
  },
  {
    text: ({ name }) => `${name}, pourquoi es-tu réveillé?`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour === 3,
  },

  // Noon exactly
  {
    text: 'Midi pile',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 12,
  },
  {
    text: 'Douze heures précises',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 12,
  },

  // Early morning (5-6am)
  {
    text: 'Dévouement: se lever si tôt',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: 'Le club du lever du soleil',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: ({ name }) => `${name}, debout et en action`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: 'Aurore nouvelle',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },

  // Prime working hours (2-4pm)
  {
    text: 'Grind de l\'après-midi',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },
  {
    text: 'Heures de productivité maximale',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },
  {
    text: ({ name }) => `${name}, écrase l'après-midi`,
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },

  // End of workday (5-6pm)
  {
    text: 'Presque l\'heure de finir',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },
  {
    text: 'Dernière ligne droite',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },
  {
    text: ({ name }) => `${name}, finis en force`,
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },

  // Apéro time (6-8pm)
  {
    text: 'L\'heure de l\'apéro 🍷',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 20,
  },
  {
    text: 'Temps de décompresser',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 20,
  },
];
