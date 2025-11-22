import { GreetingDefinition } from '../types';

// Battery level-aware greetings
export const batteryGreetings: GreetingDefinition[] = [
  // Low battery (0-20%)
  {
    text: ({ battery }) => `Low power mode (${battery}%) but high vibes`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: ({ battery }) => `Running on fumes at ${battery}%`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: 'Charge soon, legend',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 15,
  },
  {
    text: ({ battery }) => `Battery at ${battery}%, vibes at 100%`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: ({ name, battery }) => `${name}, ${battery}%... living dangerously`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 15,
  },

  // Medium-low (21-50%)
  {
    text: ({ battery }) => `Halfway there at ${battery}%`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 20 && battery <= 50,
  },
  {
    text: 'Mid battery, full potential',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 30 && battery <= 50,
  },

  // High battery (80-100%)
  {
    text: ({ battery }) => `Fully charged (${battery}%), fully ready`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80,
  },
  {
    text: ({ battery }) => `Power levels: ${battery}% 🔋`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80,
  },
  {
    text: 'Fully charged and ready to roll',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 95,
  },
  {
    text: ({ name }) => `${name}, charged up and dangerous`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 90,
  },
  {
    text: 'Battery: maxed. Energy: infinite.',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery === 100,
  },

  // Exactly 69% (nice)
  {
    text: 'Nice battery level 😏',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ battery }) => battery === 69,
  },
  {
    text: ({ name }) => `${name}... nice (69%)`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery === 69,
  },

  // Exactly 42% (answer to everything)
  {
    text: 'Battery at 42%: the answer to everything',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ battery }) => battery === 42,
  },
];
