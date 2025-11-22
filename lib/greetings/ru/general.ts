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

  // === EXPANDED GENERAL GREETINGS ===

  // More casual greetings
  {
    text: 'Здорово',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `Здорово, ${name}`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Приветствую',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `Приветствую, ${name}`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Салют',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `Салют, ${name}`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Хей',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `Хей, ${name}`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Приветик',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `Приветик, ${name}`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },

  // Creative variants
  {
    text: 'Рады видеть',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `Рады видеть тебя, ${name}`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Отличный день для начала',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Хорошего дня',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}, хорошего дня`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Всё получится',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Вперёд к победам',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, вперёд к победам`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Начинаем',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}, начинаем`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },

  // Time-based general greetings
  {
    text: 'Доброе утречко',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Доброе утречко, ${name}`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'С добрым утром',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `С добрым утром, ${name}`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Добрый денёк',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Добрый денёк, ${name}`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Добрый вечерок',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `Добрый вечерок, ${name}`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // More professional greetings
  {
    text: 'Добрый день, коллеги',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false },
  },
  {
    text: 'Приступим к работе',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}, приступим к работе`,
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Время продуктивной работы',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false },
  },
  {
    text: 'Давайте начнём',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}, давайте начнём`,
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: true },
  },

  // More playful/creative greetings
  {
    text: 'Привет-привет',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `Привет-привет, ${name}`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Здравия желаю',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `Здравия желаю, ${name}`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Как дела?',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}, как дела?`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Как жизнь?',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}, как жизнь?`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Что нового?',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}, что нового?`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Как настроение?',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}, как настроение?`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },

  // Welcoming greetings
  {
    text: 'Добро пожаловать обратно',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `Добро пожаловать обратно, ${name}`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'С возвращением',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `С возвращением, ${name}`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Рад тебя видеть',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `Рад тебя видеть, ${name}`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Рады вас приветствовать',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `Рады вас приветствовать, ${name}`,
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },

  // Energetic greetings
  {
    text: 'Вперёд!',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, вперёд!`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Поехали!',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, поехали!`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Давай сделаем это',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, давай сделаем это`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Время действовать',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, время действовать`,
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: true },
  },

  // Friendly greetings
  {
    text: 'Отлично выглядишь',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, отлично выглядишь`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Прекрасный день',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}, прекрасный день`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Готов к новым свершениям?',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}, готов к новым свершениям?`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Отличного настроения',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}, отличного настроения`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },

  // Work-focused greetings
  {
    text: 'Продуктивного дня',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}, продуктивного дня`,
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Успешной работы',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}, успешной работы`,
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Плодотворного дня',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}, плодотворного дня`,
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: true },
  },

  // Creative/unique greetings
  {
    text: 'О, это ты!',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `О, это ${name}!`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Смотрите кто пришёл',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `Смотрите, ${name} пришёл`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Ого, здесь',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `Ого, ${name} здесь`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
  },
];
