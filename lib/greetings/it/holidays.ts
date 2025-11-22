import { GreetingDefinition } from '../types';

// Italian holiday-specific greetings
export const holidayGreetings: GreetingDefinition[] = [
  {
    text: 'Buon Anno! Nuovo inizio in arrivo',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: ({ name }) => `Anno nuovo, stesso fantastico ${name}`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: 'Energia di propositi per l\'anno nuovo',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 0,
  },
  {
    text: 'Epifania! La Befana arriva',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 6,
  },
  {
    text: 'San Valentino! Amore nell\'aria',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },
  {
    text: ({ name }) => `${name}, buon San Valentino!`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 1 && day !== undefined && day === 14,
  },
  {
    text: 'Carnevale! Tempo di festa',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 1 || month === 2,
  },
  {
    text: 'Festa della donna',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 2 && day !== undefined && day === 8,
  },
  {
    text: 'Festa della Liberazione',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 3 && day !== undefined && day === 25,
  },
  {
    text: 'Primo Maggio! Festa del Lavoro',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 4 && day !== undefined && day === 1,
  },
  {
    text: 'Festa della Repubblica',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 5 && day !== undefined && day === 2,
  },
  {
    text: 'Ferragosto! Estate italiana',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 7 && day !== undefined && day === 15,
  },
  {
    text: ({ name }) => `Buon Ferragosto, ${name}!`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 7 && day !== undefined && day === 15,
  },
  {
    text: 'Ognissanti',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 10 && day !== undefined && day === 1,
  },
  {
    text: 'Buon Natale!',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: ({ name }) => `Buon Natale, ${name}!`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: 'Magia delle feste',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: 'Atmosfera natalizia',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: 'Santo Stefano',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 26,
  },
  {
    text: 'Capodanno in arrivo',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },
  {
    text: 'Energia di fine anno',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },
];
