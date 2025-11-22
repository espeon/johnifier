import { GreetingDefinition } from '../types';

// Italian incognito/privacy mode greetings (no names, mysterious vibes)
export const incognitoGreetings: GreetingDefinition[] = [
  {
    text: 'Buongiorno, misterioso straniero',
    mood: 'mysterious',
    static: { language: 'it', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Modalità furtiva: edizione mattutina',
    mood: 'playful',
    static: { language: 'it', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Le ombre ti salutano stamattina',
    mood: 'mysterious',
    static: { language: 'it', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Anonimo e caffeina to',
    mood: 'playful',
    static: { language: 'it', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Buon pomeriggio, fantasma',
    mood: 'mysterious',
    static: { language: 'it', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Modalità incognito: attivata',
    mood: 'professional',
    static: { language: 'it', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Operando sotto il radar',
    mood: 'mysterious',
    static: { language: 'it', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Nessun cookie, nessuna traccia, nessun problema',
    mood: 'playful',
    static: { language: 'it', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Buonasera, fantasma',
    mood: 'mysterious',
    static: { language: 'it', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Modalità notturna + incognito = massima furtività',
    mood: 'playful',
    static: { language: 'it', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'La notte protegge i senza nome',
    mood: 'mysterious',
    static: { language: 'it', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Ore di navigazione invisibile',
    mood: 'casual',
    static: { language: 'it', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Chi va là? (non lo diremo)',
    mood: 'mysterious',
    static: { language: 'it', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: 'Energia incognito delle 3 del mattino',
    mood: 'playful',
    static: { language: 'it', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: 'L\'ora delle streghe non conosce nomi',
    mood: 'mysterious',
    static: { language: 'it', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: 'Benvenuto, visitatore misterioso',
    mood: 'mysterious',
    static: { language: 'it', incognito: true, workMode: false },
  },
  {
    text: 'Il tuo segreto è al sicuro con noi',
    mood: 'mysterious',
    static: { language: 'it', incognito: true, workMode: false },
  },
  {
    text: 'Ciao, anonimo',
    mood: 'casual',
    static: { language: 'it', incognito: true, workMode: false },
  },
  {
    text: 'Saluti, fantasma digitale',
    mood: 'playful',
    static: { language: 'it', incognito: true, workMode: false },
  },
  {
    text: 'Shh... non ricorderemo che eri qui',
    mood: 'playful',
    static: { language: 'it', incognito: true, workMode: false },
  },
  {
    text: 'Navigando nelle ombre',
    mood: 'mysterious',
    static: { language: 'it', incognito: true, workMode: false },
  },
  {
    text: 'Nessuna cronologia, nessuna traccia',
    mood: 'professional',
    static: { language: 'it', incognito: true, workMode: false },
  },
  {
    text: 'Modalità privacy attivata',
    mood: 'professional',
    static: { language: 'it', incognito: true, workMode: false },
  },
  {
    text: 'Il vuoto ti riconosce',
    mood: 'mysterious',
    static: { language: 'it', incognito: true, workMode: false },
  },
  {
    text: 'Quello che succede qui rimane... da nessuna parte',
    mood: 'playful',
    static: { language: 'it', incognito: true, workMode: false },
  },
  {
    text: 'Professionale. Privato. Perfetto.',
    mood: 'professional',
    static: { language: 'it', incognito: true, workMode: true },
  },
  {
    text: 'Modalità produttività furtiva',
    mood: 'professional',
    static: { language: 'it', incognito: true, workMode: true },
  },
  {
    text: 'Sessione di lavoro confidenziale iniziata',
    mood: 'professional',
    static: { language: 'it', incognito: true, workMode: true },
  },
];
