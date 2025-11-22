import { GreetingDefinition } from '../types';

// Russian battery level-aware greetings
export const batteryGreetings: GreetingDefinition[] = [
  // Low battery (0-20%)
  {
    text: ({ battery }) => `Режим низкого заряда (${battery}%), но вайб высокий`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: ({ battery }) => `Работаем на парах при ${battery}%`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: 'Скоро заряжай, легенда',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 15,
  },
  {
    text: ({ battery }) => `Батарея ${battery}%, вайб 100%`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: ({ name, battery }) => `${name}, ${battery}%... живём опасно`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 15,
  },
  {
    text: ({ battery }) => `Критический заряд! (${battery}%)`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 10,
  },

  // Medium-low (21-50%)
  {
    text: ({ battery }) => `Половина пути на ${battery}%`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 20 && battery <= 50,
  },
  {
    text: 'Средний заряд, полный потенциал',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 30 && battery <= 50,
  },
  {
    text: ({ battery }) => `Батарея падает (${battery}%)`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 20 && battery < 40,
  },

  // High battery (80-100%)
  {
    text: ({ battery }) => `Полностью заряжен (${battery}%), полностью готов`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80,
  },
  {
    text: ({ battery }) => `Уровень энергии: ${battery}% 🔋`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80,
  },
  {
    text: 'Полностью заряжен и готов к действию',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 95,
  },
  {
    text: ({ name }) => `${name}, заряжен и опасен`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 90,
  },
  {
    text: 'Батарея: макс. Энергия: бесконечная.',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery === 100,
  },
  {
    text: ({ battery }) => `Почти полная мощь (${battery}%)`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80 && battery < 100,
  },

  // Exactly 69% (nice)
  {
    text: 'Классный уровень батареи 😏',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 69,
  },
  {
    text: ({ name }) => `${name}... классно (69%)`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery === 69,
  },

  // Exactly 42% (answer to everything)
  {
    text: 'Батарея 42%: ответ на всё',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 42,
  },

  // Exactly 50%
  {
    text: 'Идеально сбалансировано',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 50,
  },

  // Almost dead
  {
    text: 'Живём на грани!',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 5,
  },
];
