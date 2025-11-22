import { GreetingDefinition } from '../types';

// Russian incognito/privacy mode greetings (no names, mysterious vibes)
export const incognitoGreetings: GreetingDefinition[] = [
  // Morning incognito
  {
    text: 'Доброе утро, таинственный незнакомец',
    mood: 'mysterious',
    static: { language: 'ru', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Режим невидимки: утренняя версия',
    mood: 'playful',
    static: { language: 'ru', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Тени приветствуют тебя этим утром',
    mood: 'mysterious',
    static: { language: 'ru', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Анонимный и под кофеином',
    mood: 'playful',
    static: { language: 'ru', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Afternoon incognito
  {
    text: 'Добрый день, призрак',
    mood: 'mysterious',
    static: { language: 'ru', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Режим инкогнито активирован',
    mood: 'professional',
    static: { language: 'ru', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Работаем под радаром',
    mood: 'mysterious',
    static: { language: 'ru', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Никаких cookies, никаких следов, никаких проблем',
    mood: 'playful',
    static: { language: 'ru', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Evening incognito
  {
    text: 'Добрый вечер, фантом',
    mood: 'mysterious',
    static: { language: 'ru', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Ночной режим + инкогнито = пик невидимости',
    mood: 'playful',
    static: { language: 'ru', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Ночь защищает безымянных',
    mood: 'mysterious',
    static: { language: 'ru', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Часы невидимого серфинга',
    mood: 'casual',
    static: { language: 'ru', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Late night incognito
  {
    text: 'Кто там? (мы не скажем)',
    mood: 'mysterious',
    static: { language: 'ru', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: 'Энергия 3 часов ночи в режиме инкогнито',
    mood: 'playful',
    static: { language: 'ru', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: 'Час ведьм не знает имён',
    mood: 'mysterious',
    static: { language: 'ru', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: 'Ночная сова в режиме стелс',
    mood: 'casual',
    static: { language: 'ru', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },

  // General incognito (any time)
  {
    text: 'Добро пожаловать, таинственный посетитель',
    mood: 'mysterious',
    static: { language: 'ru', incognito: true, workMode: false },
  },
  {
    text: 'Твой секрет в безопасности',
    mood: 'mysterious',
    static: { language: 'ru', incognito: true, workMode: false },
  },
  {
    text: 'Привет, анонимный',
    mood: 'casual',
    static: { language: 'ru', incognito: true, workMode: false },
  },
  {
    text: 'Приветствую, цифровой призрак',
    mood: 'playful',
    static: { language: 'ru', incognito: true, workMode: false },
  },
  {
    text: 'Тсс... мы не запомним, что ты был здесь',
    mood: 'playful',
    static: { language: 'ru', incognito: true, workMode: false },
  },
  {
    text: 'Сёрфинг в тенях',
    mood: 'mysterious',
    static: { language: 'ru', incognito: true, workMode: false },
  },
  {
    text: 'Никакой истории, никаких следов',
    mood: 'professional',
    static: { language: 'ru', incognito: true, workMode: false },
  },
  {
    text: 'Режим приватности активирован',
    mood: 'professional',
    static: { language: 'ru', incognito: true, workMode: false },
  },
  {
    text: 'Пустота признаёт тебя',
    mood: 'mysterious',
    static: { language: 'ru', incognito: true, workMode: false },
  },
  {
    text: 'Что здесь происходит, остаётся... нигде',
    mood: 'playful',
    static: { language: 'ru', incognito: true, workMode: false },
  },
  {
    text: 'Безымянный, но не безликий',
    mood: 'casual',
    static: { language: 'ru', incognito: true, workMode: false },
  },
  {
    text: 'Режим под прикрытием активирован',
    mood: 'playful',
    static: { language: 'ru', incognito: true, workMode: false },
  },
  {
    text: 'Кто? Мы тебя не знаем',
    mood: 'playful',
    static: { language: 'ru', incognito: true, workMode: false },
  },
  {
    text: 'Не оставляй следов',
    mood: 'professional',
    static: { language: 'ru', incognito: true, workMode: false },
  },
  {
    text: 'Легенда инкогнито в процессе',
    mood: 'playful',
    static: { language: 'ru', incognito: true, workMode: false },
  },

  // Work mode + incognito
  {
    text: 'Профессионально. Приватно. Идеально.',
    mood: 'professional',
    static: { language: 'ru', incognito: true, workMode: true },
  },
  {
    text: 'Режим стелс-продуктивности',
    mood: 'professional',
    static: { language: 'ru', incognito: true, workMode: true },
  },
  {
    text: 'Конфиденциальная рабочая сессия начата',
    mood: 'professional',
    static: { language: 'ru', incognito: true, workMode: true },
  },
  {
    text: 'Никаких записей, только бизнес',
    mood: 'professional',
    static: { language: 'ru', incognito: true, workMode: true },
  },
];
