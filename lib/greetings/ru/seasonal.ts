import { GreetingDefinition } from '../types';

// Russian seasonal greetings
export const seasonalGreetings: GreetingDefinition[] = [
  // === WEEKDAY GREETINGS ===

  // Monday
  {
    text: 'С понедельником',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: ({ name }) => `${name}, с понедельником`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: 'Понедельник — новый старт',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: 'Начинаем неделю!',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 1,
  },

  // Tuesday
  {
    text: 'Вторник в разгаре',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 2,
  },
  {
    text: ({ name }) => `${name}, продуктивного вторника`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 2,
  },

  // Wednesday
  {
    text: 'Середина недели',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 3,
  },
  {
    text: ({ name }) => `${name}, уже среда!`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 3,
  },
  {
    text: 'Половина пути пройдено',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 3,
  },

  // Thursday
  {
    text: 'Четверг — почти пятница',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 4,
  },
  {
    text: ({ name }) => `${name}, четверг уже здесь`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 4,
  },

  // Friday
  {
    text: 'Пятница!',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: ({ name }) => `${name}, пятница наконец!`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: 'Ура, пятница пришла!',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: 'Пятничное настроение',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: ({ name }) => `${name}, пятничный вайб`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 5,
  },

  // Saturday
  {
    text: 'Отличной субботы',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: ({ name }) => `${name}, наслаждайся субботой`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: 'Субботнее расслабление',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 6,
  },

  // Sunday
  {
    text: 'Воскресный день',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 0,
  },
  {
    text: ({ name }) => `${name}, приятного воскресенья`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 0,
  },
  {
    text: 'Воскресное спокойствие',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 0,
  },

  // Weekend
  {
    text: 'Хороших выходных',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: ({ name }) => `${name}, отличных выходных!`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: 'Выходные наконец!',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: 'Время отдыхать',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },

  // === SEASONAL GREETINGS ===

  // Spring (March, April, May)
  {
    text: 'Весна пришла',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `${name}, весна здесь!`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Весеннее обновление',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Весенний вайб',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Пробуждение природы',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Весенние цветы и надежды',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `${name}, весеннего настроения!`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Свежесть весны',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },

  // Summer (June, July, August)
  {
    text: 'Лето!',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `${name}, лето в разгаре!`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Летнее настроение',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Солнечные дни',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `${name}, наслаждайся летом!`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Летняя атмосфера',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Тепло и солнце',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Летний вайб активирован',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Каникулы и солнце',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },

  // Autumn/Fall (September, October, November)
  {
    text: 'Осень здесь',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: ({ name }) => `${name}, осеннее настроение`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Золотая осень',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Осенние краски',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: ({ name }) => `${name}, осенний вайб`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Уютная осень',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Листопадное настроение',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Осенняя атмосфера',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Тёплый чай и осень',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },

  // Winter (December, January, February)
  {
    text: 'Зимнее настроение',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `${name}, зима пришла!`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Зимняя сказка',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Морозная свежесть',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `${name}, зимний вайб`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Снежное настроение',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Уютная зима',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Зимняя атмосфера',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Горячий чай и снег',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `${name}, зимнего тепла!`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
];
