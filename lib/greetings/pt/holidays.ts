import { GreetingDefinition } from '../types';

// Portuguese (Brazilian) holiday-specific greetings
export const holidayGreetings: GreetingDefinition[] = [
  // New Year's Day
  {
    text: 'Feliz Ano Novo! Novo começo chegando',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: ({ name }) => `Ano novo, mesmo ${name} incrível`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 0 && day !== undefined && day === 1,
  },
  {
    text: 'Energia de resoluções de ano novo',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 0,
  },

  // Carnaval (February/March - approximate)
  {
    text: 'Carnaval! Hora de folia',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 1 || month === 2,
  },
  {
    text: ({ name }) => `${name}, vamos sambar!`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 1 || month === 2,
  },
  {
    text: 'Energia de carnaval',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 1 || month === 2,
  },

  // Tiradentes (April 21)
  {
    text: 'Dia de Tiradentes - Liberdade!',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 3 && day !== undefined && day === 21,
  },

  // Festa Junina (June)
  {
    text: 'Arraiá! Festa Junina',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 5,
  },
  {
    text: ({ name }) => `${name}, vamos pular fogueira?`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 5,
  },
  {
    text: 'Clima junino',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 5,
  },

  // Independence Day (September 7)
  {
    text: 'Independência ou Morte!',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 8 && day !== undefined && day === 7,
  },
  {
    text: 'Feliz Dia da Independência',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 8 && day !== undefined && day === 7,
  },

  // Nossa Senhora Aparecida (October 12)
  {
    text: 'Dia de Nossa Senhora Aparecida',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 9 && day !== undefined && day === 12,
  },

  // Proclamação da República (November 15)
  {
    text: 'Dia da Proclamação da República',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 10 && day !== undefined && day === 15,
  },

  // Christmas season
  {
    text: 'Feliz Natal!',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: ({ name }) => `Feliz Natal, ${name}!`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 25,
  },
  {
    text: 'Magia das festas',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: 'Clima natalino',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month === 11,
  },

  // New Year's Eve
  {
    text: 'Reveillon chegando',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },
  {
    text: 'Energia de fim de ano',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month, day }) => month === 11 && day !== undefined && day === 31,
  },
];
