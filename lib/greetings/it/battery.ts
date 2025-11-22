import { GreetingDefinition } from '../types';

// Italian battery level-aware greetings
export const batteryGreetings: GreetingDefinition[] = [
  {
    text: ({ battery }) => `Modalità risparmio energetico (${battery}%) ma vibes alte`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: ({ battery }) => `Funzionando a riserva al ${battery}%`,
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: 'Ricarica presto, leggenda',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 15,
  },
  {
    text: ({ battery }) => `Batteria al ${battery}%, vibes al 100%`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: ({ name, battery }) => `${name}, ${battery}%... vivendo pericolosamente`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 15,
  },
  {
    text: ({ battery }) => `A metà strada al ${battery}%`,
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 20 && battery <= 50,
  },
  {
    text: 'Batteria media, potenziale totale',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 30 && battery <= 50,
  },
  {
    text: ({ battery }) => `Completamente carico (${battery}%), completamente pronto`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80,
  },
  {
    text: ({ battery }) => `Livelli di energia: ${battery}%`,
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80,
  },
  {
    text: 'Completamente carico e pronto',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 95,
  },
  {
    text: ({ name }) => `${name}, carico e pericoloso`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 90,
  },
  {
    text: 'Batteria: massima. Energia: infinita.',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery === 100,
  },
  {
    text: 'Livello batteria nice',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 69,
  },
  {
    text: ({ name }) => `${name}... nice (69%)`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery === 69,
  },
  {
    text: 'Batteria al 42%: la risposta a tutto',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 42,
  },
];
