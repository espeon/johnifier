import { GreetingDefinition } from '../types';

// Italian tech/developer themed greetings (requires techOk=true)
export const techGreetings: GreetingDefinition[] = [
  {
    text: 'Hello, World!',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'console.log("Ciao!")',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Nessun bug rilevato... ancora',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Git pronto per oggi',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Compilando grandezza...',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '404: Sonno non trovato',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Debuggando la vita, un giorno alla volta',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Conflitti di merge risolti',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Energia da push in produzione',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Tutti i test passano',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Zero errori, solo vibes',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}.init()`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `Benvenuto ${name} // TODO: essere fantastico`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}: Login riuscito`,
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: 'sudo fallo accadere',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: 'npm run successo',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: 'Costruendo il futuro...',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: 'Energia da sviluppatore 10x',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: 'Vivendo il sogno (o debuggando)',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: ({ name }) => `${name} è entrato nel server`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `Achievement sbloccato: ${name} è apparso`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, techOk: true, hasName: true },
  },
];
