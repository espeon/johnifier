import { GreetingDefinition } from '../types';

// French seasonal and day-specific greetings
export const seasonalGreetings: GreetingDefinition[] = [
  // === WEEKDAY/WEEKEND GREETINGS ===
  {
    text: 'Vendredi!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: ({ name }) => `${name}, c'est vendredi!`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: 'Enfin vendredi!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: 'Vive le weekend qui approche',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: 'Weekend mode!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 0 || day === 6,
  },
  {
    text: ({ name }) => `Bon weekend, ${name}!`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 0 || day === 6,
  },
  {
    text: 'Samedi détendu',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: 'C\'est samedi!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: 'Dimanche tranquille',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 0,
  },
  {
    text: 'Dimanche cocooning',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 0,
  },
  {
    text: ({ name }) => `Bon dimanche, ${name}`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 0,
  },
  {
    text: 'Profite du dimanche',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 0,
  },
  {
    text: 'Lundi motivation',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: 'C\'est parti pour la semaine',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: ({ name }) => `${name}, bon début de semaine`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: 'Mardi productif',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 2,
  },
  {
    text: 'Mercredi, à mi-chemin',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 3,
  },
  {
    text: 'Hump day!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 3,
  },
  {
    text: 'Jeudi presque weekend',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 4,
  },

  // === WINTER GREETINGS (Dec, Jan, Feb) ===
  {
    text: 'Ambiance hivernale',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `${name}, l'hiver est là`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Saison froide et cosy',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Chaleur intérieure requise',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Hiver magique',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Temps de chocolat chaud',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Flocons et douceur',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `${name}, bien au chaud?`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },

  // === SPRING GREETINGS (Mar, Apr, May) ===
  {
    text: 'Printemps frais',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `${name}, le printemps est arrivé`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Renouveau printanier',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Fleurs et fraîcheur',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Les beaux jours arrivent',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Saison du renouveau',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Printemps énergisant',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `${name}, profite du printemps`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Nature en éveil',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },

  // === SUMMER GREETINGS (Jun, Jul, Aug) ===
  {
    text: 'Été chaud!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `${name}, profite de l'été`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Soleil et vacances',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Vibes estivales',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'C\'est l\'été!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Temps de plage',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Chaleur estivale',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `${name}, reste au frais`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Saison des glaces',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Été magnifique',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },

  // === AUTUMN GREETINGS (Sep, Oct, Nov) ===
  {
    text: 'Automne magnifique',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: ({ name }) => `${name}, l'automne est là`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Feuilles qui tombent',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Couleurs d\'automne',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Saison des pulls',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Automne cosy',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: ({ name }) => `${name}, profite de l'automne`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Temps de citrouilles',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Fraîcheur automnale',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Beauté de l\'automne',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },

  // === MONTH-SPECIFIC GREETINGS ===
  {
    text: 'Janvier glacial',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 0,
  },
  {
    text: 'Février doux',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 1,
  },
  {
    text: 'Mars printanier',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 2,
  },
  {
    text: 'Avril fleuri',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 3,
  },
  {
    text: 'Joli mois de mai',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 4,
  },
  {
    text: 'Juin ensoleillé',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 5,
  },
  {
    text: 'Juillet rayonnant',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 6,
  },
  {
    text: 'Août caniculaire',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 7,
  },
  {
    text: 'Septembre de transition',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 8,
  },
  {
    text: 'Octobre orangé',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 9,
  },
  {
    text: 'Novembre brumeux',
    mood: 'mysterious',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 10,
  },
  {
    text: 'Décembre festif',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
];
