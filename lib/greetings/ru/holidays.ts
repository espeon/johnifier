import { GreetingDefinition } from '../types';

// Russian holiday-specific greetings
export const holidayGreetings: GreetingDefinition[] = [
  // New Year's
  {
    text: 'С Новым годом! Свежий старт впереди',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: ({ name }) => `Новый год, всё тот же крутой ${name}`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: 'Энергия новогодних обещаний',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 0,
  },
  {
    text: 'Новый год — новые победы!',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day <= 7,
  },

  // День защитника Отечества (February 23)
  {
    text: 'С Днём защитника Отечества!',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 23,
  },
  {
    text: ({ name }) => `${name}, с 23 февраля!`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 23,
  },

  // Международный женский день (March 8)
  {
    text: 'С 8 марта! Весна и красота',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 2 && day !== undefined && day === 8,
  },
  {
    text: ({ name }) => `${name}, с праздником весны!`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 2 && day !== undefined && day === 8,
  },

  // День космонавтики (April 12)
  {
    text: 'Поехали! С Днём космонавтики',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 3 && day !== undefined && day === 12,
  },
  {
    text: ({ name }) => `${name}, до звёзд! С Днём космонавтики`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 3 && day !== undefined && day === 12,
  },

  // Праздник Весны и Труда (May 1)
  {
    text: 'С 1 мая! Праздник весны и труда',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 4 && day !== undefined && day === 1,
  },

  // День Победы (May 9)
  {
    text: 'С Днём Победы! Помним и гордимся',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 4 && day !== undefined && day === 9,
  },
  {
    text: ({ name }) => `${name}, с Днём Победы!`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 4 && day !== undefined && day === 9,
  },

  // День России (June 12)
  {
    text: 'С Днём России!',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 5 && day !== undefined && day === 12,
  },
  {
    text: ({ name }) => `${name}, с Днём России!`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 5 && day !== undefined && day === 12,
  },

  // День знаний (September 1)
  {
    text: 'С Днём знаний! Время учиться',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 8 && day !== undefined && day === 1,
  },
  {
    text: ({ name }) => `${name}, с 1 сентября!`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 8 && day !== undefined && day === 1,
  },

  // День народного единства (November 4)
  {
    text: 'С Днём народного единства!',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 10 && day !== undefined && day === 4,
  },

  // Новый год приближается (December)
  {
    text: 'Новый год уже близко! 🎄',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: 'Магия праздников ✨',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: ({ name }) => `${name}, скоро Новый год! 🎁`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: 'Предновогоднее настроение',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: 'Уютная праздничная атмосфера',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },

  // New Year's Eve (December 31)
  {
    text: 'Старое уходит, новое приходит',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },
  {
    text: 'Вайб кануна Нового года',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },

  // Масленица (Varies, but typically late February/early March - week-long)
  {
    text: 'Масленичная неделя началась!',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 1 || month === 2,
  },

  // Татьянин день / День студента (January 25)
  {
    text: 'С Татьяниным днём! День студента',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 25,
  },
  {
    text: ({ name }) => `${name}, с Днём студента!`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 25,
  },
];
