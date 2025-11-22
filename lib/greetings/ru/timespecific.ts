import { GreetingDefinition } from '../types';

// Russian very specific time-based greetings
export const timeSpecificGreetings: GreetingDefinition[] = [
  // Lunch time (11am-2pm)
  {
    text: 'Вайб обеденного перерыва',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 11 && hour < 14,
  },
  {
    text: 'Время перекусить?',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: ({ name }) => `${name}, что на обед?`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: 'Обеденное топливо приближается',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },

  // Coffee time (9-11am)
  {
    text: 'Время кофе ☕',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: 'Работаем на кофеине',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: ({ name }) => `${name} + кофе = непобедимый`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: 'Утренний кофейный ритуал',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },

  // Golden hour (5-7pm)
  {
    text: 'Энергия золотого часа',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },
  {
    text: 'Скоро закат',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },
  {
    text: ({ name }) => `${name}, ловим золотой час`,
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },

  // Midnight exactly
  {
    text: 'Полночь где-то... о, подожди, здесь',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 0,
  },
  {
    text: 'Часы бьют двенадцать',
    mood: 'mysterious',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 0,
  },
  {
    text: ({ name }) => `${name}, новый день (технически)`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour === 0,
  },

  // 3AM
  {
    text: 'Мысли в 3 ночи бьют по-другому',
    mood: 'mysterious',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 3,
  },
  {
    text: 'Час истины в 3 ночи',
    mood: 'mysterious',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 3,
  },
  {
    text: ({ name }) => `${name}, почему ты не спишь?`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour === 3,
  },

  // Noon exactly
  {
    text: 'Ровно полдень',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 12,
  },
  {
    text: 'Двенадцать ровно',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 12,
  },

  // Early morning (5-6am)
  {
    text: 'Преданность: просыпаться так рано',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: 'Клуб рассветов',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: ({ name }) => `${name}, вставай и работай`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: 'Раннее утро — время чемпионов',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },

  // Prime working hours (2-4pm)
  {
    text: 'Послеобеденный грайнд',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },
  {
    text: 'Пик продуктивности',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },
  {
    text: ({ name }) => `${name}, разрываем день`,
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },

  // End of workday (5-6pm)
  {
    text: 'Почти конец рабочего дня',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },
  {
    text: 'Финишная прямая',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },
  {
    text: ({ name }) => `${name}, финиш сильным`,
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },

  // Tea time (4-5pm)
  {
    text: 'Время чая ☕',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 16 && hour < 17,
  },
  {
    text: 'Чайная пауза',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 16 && hour < 17,
  },
];
