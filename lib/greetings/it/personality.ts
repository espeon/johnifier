import { GreetingDefinition } from '../types';

// Italian motivational, personality, creative/fun, and productivity/work greetings
export const personalityGreetings: GreetingDefinition[] = [
  // === MOTIVATIONAL GREETINGS ===
  {
    text: 'Oggi è il tuo giorno',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Ce la farai!',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Fallo in modo leggendario',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'La grandezza ti aspetta',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Energia inarrestabile',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Energia da protagonista',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Tempo di salire di livello',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Tu sei il momento',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Niente può fermarti',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Costruito diverso',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, sei inarrestabile`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, leggenda assoluta`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Il mondo ha bisogno di ${name} oggi`,
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, vai a fare magia`,
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
  },

  // === PERSONALITY GREETINGS ===
  {
    text: 'Vibe alla massima capacità',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Status élite confermato',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Semplicemente diverso',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Troppo cool',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Atmosfera certificata',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Perfettamente imperfetto',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, l'unico`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Momento certificato di ${name}`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Supremazia di ${name}`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Massima prestazione di ${name}`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
  },

  // === CREATIVE/FUN GREETINGS ===
  {
    text: 'Vivere gratis nell\'eccellenza',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Nessun pensiero, solo vibes',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Vibes impeccabili rilevate',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Energia impareggiabile',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Alimentato da caffè e sogni',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Mandando buone vibes',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Massimo relax raggiunto',
    mood: 'casual',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Assolutamente iconico',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Energia da chef kiss',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Il sonno è temporaneo, la gloria è eterna',
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name} ha superato il vibe check`,
    mood: 'playful',
    static: { language: 'it', incognito: false, workMode: false, hasName: true },
  },

  // === PRODUCTIVITY/WORK GREETINGS ===
  {
    text: 'Alzati e lavora',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Produttività sbloccata',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Stato di flow attivato',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Modalità massima efficienza',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Modalità consegna: attivata',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Facciamolo accadere',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Modalità distruggi scadenze',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name} in modalità bestia`,
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}, tempo di dominare`,
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `Professionista della produttività: ${name}`,
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Modalità hustle nei giorni feriali',
    mood: 'professional',
    static: { language: 'it', incognito: false, workMode: true, hasName: false, variant: 'creative' },
    dynamic: ({ day }) => day !== undefined && day >= 1 && day <= 5,
  },
];
