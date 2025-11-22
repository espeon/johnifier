import { GreetingDefinition } from '../types';

// German tech-themed greetings
export const techGreetings: GreetingDefinition[] = [
  // With name
  {
    text: ({ name }) => `${name}.init()`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `console.log('Hallo ${name}')`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `git commit -m "Hallo ${name}"`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `import ${name} from './awesome'`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `sudo hallo ${name}`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `docker run ${name}`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `npm install ${name}`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}++`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: true },
  },

  // Without name
  {
    text: 'Hallo, Welt!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: "console.log('Hey!')",
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'git ready für heute',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'sudo mach weiter',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'npm start',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'docker compose up',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '// Los gehts',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '/* Bereit zum Coden */',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'if (ready) { code(); }',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'while (true) { beAwesome(); }',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'git push origin main',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Kompilierung erfolgreich',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Keine Bugs heute',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Code läuft sauber',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Stack Overflow bereit',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '404: Müdigkeit nicht gefunden',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '200 OK',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, techOk: true, hasName: false },
  },
];
