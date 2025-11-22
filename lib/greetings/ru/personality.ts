import { GreetingDefinition } from '../types';

// Russian motivational, personality, creative/fun, and productivity/work greetings
export const personalityGreetings: GreetingDefinition[] = [
  // === MOTIVATIONAL GREETINGS ===
  {
    text: 'Сегодня твой день',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'У тебя всё получится!',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Сделай это легендарным',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Величие ждёт тебя',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Непобедимая энергия',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Энергия главного героя',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Время новых достижений',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Ты — это момент',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Ничто тебя не остановит',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Созданный по-другому',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },

  // === PERSONALITY GREETINGS ===
  {
    text: 'Вайб на максимум',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Элитный статус подтверждён',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Просто другой уровень',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Слишком крут для школы',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Сертифицированное настроение',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Абсолютно безбашенный (в хорошем смысле)',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Координатор хаоса на связи',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Профессиональный перфекционист',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Идеально несовершенный',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Чистая атмосфера',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },

  // === CREATIVE/FUN GREETINGS ===
  {
    text: 'Живём в безупречности',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Никаких мыслей, только вайб',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Безупречная атмосфера замечена',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Энергия непревзойдённая',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Работает на кофеине и мечтах',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Посылаю хороший вайб',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Максимальное расслабление достигнуто',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Абсолютно культовый',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Энергия шеф-поцелуя',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Сон временный, слава вечная',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Непобедимый',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Легендарный вход',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Чистая магия',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Уровень босса',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Космическая энергия',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Чемпионский настрой',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Абсолютная мощь',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Бриллиантовый уровень',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Безграничный потенциал',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Титанический настрой',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },

  // === PRODUCTIVITY/WORK GREETINGS ===
  {
    text: 'Вставай и работай',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Продуктивность разблокирована',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Состояние потока активировано',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Режим максимальной эффективности',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Режим создания: запущен',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Делаем это',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Режим разрушителя дедлайнов',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Рабочая неделя в режиме хастла',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
    dynamic: ({ day }) => day !== undefined && day >= 1 && day <= 5,
  },
  {
    text: 'Готов создавать?',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Время творить',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Давай за работу',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Что в планах?',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Режим создания активирован',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Время запускать',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Режим фокуса включён',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Сессия глубокой работы',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Делаем прогресс',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Время кода',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Готов к выполнению',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Что будем решать?',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Режим продуктивности',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Режим выполнения',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Давай сделаем',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Время спринта',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Энергия деплоя',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Продуктивный настрой',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Режим создателя',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Энергия строителя',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Творческий фокус',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Режим миссии',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Работа работа работа',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Режим эффективности',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Задачи ждут',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Время результата',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Создаём величие',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Профессиональный режим включён',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Режим хастла',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Давай итерируем',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Время грайнда',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Режим влияния',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Нацелен на результат',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
];
