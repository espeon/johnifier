import { GreetingDefinition } from '../types';

// Battery level-aware greetings (French)
export const batteryGreetings: GreetingDefinition[] = [
  // Low battery (0-20%)
  {
    text: ({ battery }) => `Mode économie d'énergie (${battery}%) mais vibes au max`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: ({ battery }) => `Presque à sec à ${battery}%`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: 'Charge bientôt, légende',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 15,
  },
  {
    text: ({ battery }) => `Batterie à ${battery}%, vibes à 100%`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: ({ name, battery }) => `${name}, ${battery}%... tu vis dangereusement`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 15,
  },
  {
    text: ({ battery }) => `Alerte batterie faible: ${battery}%`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 10,
  },

  // Medium-low (21-50%)
  {
    text: ({ battery }) => `À mi-chemin à ${battery}%`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 20 && battery <= 50,
  },
  {
    text: 'Batterie moyenne, potentiel maximal',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 30 && battery <= 50,
  },
  {
    text: ({ battery }) => `${battery}% - ça tient encore`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 20 && battery <= 50,
  },

  // High battery (80-100%)
  {
    text: ({ battery }) => `Pleinement chargé (${battery}%), pleinement prêt`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80,
  },
  {
    text: ({ battery }) => `Niveau d'énergie: ${battery}% 🔋`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80,
  },
  {
    text: 'Complètement chargé et prêt à rouler',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 95,
  },
  {
    text: ({ name }) => `${name}, chargé et dangereux`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 90,
  },
  {
    text: 'Batterie: max. Énergie: infinie.',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery === 100,
  },
  {
    text: 'Charge complète atteinte ⚡',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery === 100,
  },

  // Exactly 69% (nice)
  {
    text: 'Niveau de batterie sympa 😏',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 69,
  },
  {
    text: ({ name }) => `${name}... sympa (69%)`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery === 69,
  },

  // Exactly 42% (answer to everything)
  {
    text: 'Batterie à 42%: la réponse à tout',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 42,
  },

  // Exactly 50% (balanced)
  {
    text: 'Parfaitement équilibré, comme tout devrait l\'être',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 50,
  },

  // Medium range (51-79%)
  {
    text: ({ battery }) => `Bonne charge: ${battery}%`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 50 && battery < 80,
  },
];
