import { GreetingDefinition } from '../types';

// Russian general greetings
export const generalGreetings: GreetingDefinition[] = [
  // Morning
  {
    text: 'Доброе утро',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Доброе утро, ${name}`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Afternoon
  {
    text: 'Добрый день',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Добрый день, ${name}`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Evening
  {
    text: 'Добрый вечер',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `Добрый вечер, ${name}`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // General
  {
    text: 'Привет',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `Привет, ${name}`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Здравствуйте',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `Здравствуйте, ${name}`,
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Добро пожаловать',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `Рад видеть вас, ${name}`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },

  // Work mode
  {
    text: 'За работу',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true },
  },
  {
    text: ({ name }) => `${name}, вперёд!`,
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: true },
  },
];
