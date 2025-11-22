import { GreetingDefinition } from '../types';

// Russian tech/Developer themed greetings (requires techOk=true)
export const techGreetings: GreetingDefinition[] = [
  // Casual tech greetings
  {
    text: 'Hello, World!',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'console.log("Привет")',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Багов не обнаружено... пока',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Git готов к сегодня',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Компилируем величие...',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Stack overflow? Скорее stack overflow вайбов',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '404: Сон не найден',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Дебажим жизнь, день за днём',
    mood: 'casual',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Merge конфликты разрешены',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Энергия Push to production',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Все тесты проходят',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Ноль ошибок, чистый вайб',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'git commit -m "Новый день начат"',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'npm install успех',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Код чище, чем твой стол',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: false },
  },

  // Tech greetings with name
  {
    text: ({ name }) => `${name}.init()`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `Welcome ${name} // TODO: быть крутым`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}: Вход выполнен успешно`,
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `console.log("Привет, ${name}")`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: true },
  },

  // Work mode tech greetings
  {
    text: 'sudo make it happen',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: 'npm run success',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: 'Строим будущее...',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: 'Энергия 10x разработчика',
    mood: 'professional',
    static: { language: 'ru', incognito: false, workMode: true, techOk: true, hasName: false },
  },

  // Playful tech greetings
  {
    text: 'Живём мечтой (или дебажим её)',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Трогать траву? Неа, трогать код',
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: ({ name }) => `${name} вошёл на сервер`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `Достижение разблокировано: появился ${name}`,
    mood: 'playful',
    static: { language: 'ru', incognito: false, workMode: false, techOk: true, hasName: true },
  },
];
