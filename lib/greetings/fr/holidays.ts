import { GreetingDefinition } from '../types';

// Holiday-specific greetings (French)
export const holidayGreetings: GreetingDefinition[] = [
  // Jour de l'An (New Year's Day)
  {
    text: 'Bonne année! Nouveau départ en approche',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: ({ name }) => `Nouvelle année, même ${name} génial`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: 'Énergie résolutions du Nouvel An',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 0,
  },
  {
    text: 'Nouvelle année, nouvelles possibilités',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },

  // Saint-Valentin (Valentine's Day)
  {
    text: 'L\'amour est dans l\'air ❤️',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },
  {
    text: ({ name }) => `${name}, tu es adorable`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },
  {
    text: 'Joyeuse Saint-Valentin!',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },

  // Poisson d'Avril (April Fools)
  {
    text: 'Ne crois personne aujourd\'hui 🤡',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 3 && day !== undefined && day === 1,
  },
  {
    text: 'Ce message n\'est certainement pas une blague',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 3 && day !== undefined && day === 1,
  },
  {
    text: 'Poisson d\'avril!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 3 && day !== undefined && day === 1,
  },

  // Fête du Travail (May 1st)
  {
    text: 'Joyeux 1er mai!',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 4 && day !== undefined && day === 1,
  },
  {
    text: 'Muguet et bonheur 🌸',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 4 && day !== undefined && day === 1,
  },

  // Fête de la Musique (June 21st)
  {
    text: 'Bonne fête de la musique! 🎵',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 5 && day !== undefined && day === 21,
  },
  {
    text: 'Que la musique soit avec toi',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 5 && day !== undefined && day === 21,
  },

  // Fête Nationale (July 14th - Bastille Day)
  {
    text: 'Joyeux 14 juillet! 🇫🇷',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 6 && day !== undefined && day === 14,
  },
  {
    text: 'Bonne fête nationale!',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 6 && day !== undefined && day === 14,
  },
  {
    text: ({ name }) => `${name}, vive la France!`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 6 && day !== undefined && day === 14,
  },

  // Halloween
  {
    text: 'Joyeux Halloween! 🎃',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 31,
  },
  {
    text: 'Ambiance effrayante',
    mood: 'mysterious',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 9,
  },
  {
    text: ({ name }) => `Boo! C\'est ${name}`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 31,
  },
  {
    text: 'Bonbon ou friandise?',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 31,
  },

  // Noël (Christmas)
  {
    text: 'Joyeux Noël! 🎄',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: 'Magie des fêtes ✨',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: ({ name }) => `Joyeux Noël, ${name}! 🎁`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: 'Ambiance festive cosy',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: 'Esprit de Noël activé',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: 'Saison des cadeaux 🎅',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },

  // Réveillon (New Year's Eve)
  {
    text: 'Du vieux vers le nouveau',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },
  {
    text: 'Vibes réveillon du Nouvel An',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },
  {
    text: ({ name }) => `${name}, prêt pour la nouvelle année?`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },

  // Pâques (Easter - approximate)
  {
    text: 'Joyeuses Pâques! 🐰',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 3 || month === 4,
  },
  {
    text: 'Chasse aux œufs mode activé',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 3 || month === 4,
  },
];
