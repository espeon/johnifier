import { GreetingDefinition } from '../types';

// German incognito/privacy mode greetings
export const incognitoGreetings: GreetingDefinition[] = [
  // Morning incognito
  {
    text: 'Guten Morgen, geheimnisvoller Fremder',
    mood: 'mysterious',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Tarnmodus: Morgenausgabe',
    mood: 'playful',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Die Schatten begrüßen dich an diesem Morgen',
    mood: 'mysterious',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Anonym und koffeiniert',
    mood: 'playful',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Afternoon incognito
  {
    text: 'Guten Tag, Geist',
    mood: 'mysterious',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Inkognito-Modus: aktiviert',
    mood: 'professional',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Unter dem Radar unterwegs',
    mood: 'mysterious',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Keine Cookies, keine Spuren, kein Problem',
    mood: 'playful',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Evening incognito
  {
    text: 'Guten Abend, Phantom',
    mood: 'mysterious',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Nachtmodus + Inkognito = maximale Tarnung',
    mood: 'playful',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Die Nacht schützt die Namenlosen',
    mood: 'mysterious',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Unsichtbare Surfzeiten',
    mood: 'casual',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Late night incognito
  {
    text: 'Wer ist da? (wir verraten nichts)',
    mood: 'mysterious',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: '3 Uhr morgens Inkognito-Energie',
    mood: 'playful',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: 'Die Geisterstunde kennt keine Namen',
    mood: 'mysterious',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: 'Nachteule im Tarnmodus',
    mood: 'casual',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },

  // General incognito (any time)
  {
    text: 'Willkommen, geheimnisvoller Besucher',
    mood: 'mysterious',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
  },
  {
    text: 'Dein Geheimnis ist bei uns sicher',
    mood: 'mysterious',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
  },
  {
    text: 'Hallo, anonyme Person',
    mood: 'casual',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
  },
  {
    text: 'Grüße, digitaler Geist',
    mood: 'playful',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
  },
  {
    text: 'Psst... wir erinnern uns nicht, dass du hier warst',
    mood: 'playful',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
  },
  {
    text: 'Surfen im Schatten',
    mood: 'mysterious',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
  },
  {
    text: 'Keine Historie, keine Spur',
    mood: 'professional',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
  },
  {
    text: 'Privatsphäre gesichert',
    mood: 'professional',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
  },
  {
    text: 'Die Leere nimmt dich zur Kenntnis',
    mood: 'mysterious',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
  },
  {
    text: 'Was hier passiert, bleibt... nirgendwo',
    mood: 'playful',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
  },
  {
    text: 'Namenlos aber nicht gesichtslos',
    mood: 'casual',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
  },
  {
    text: 'Undercover-Modus aktiviert',
    mood: 'playful',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
  },
  {
    text: 'Wer? Wir kennen dich nicht',
    mood: 'playful',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
  },
  {
    text: 'Keine Spuren hinterlassen',
    mood: 'professional',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
  },
  {
    text: 'Inkognito-Legende im Werden',
    mood: 'playful',
    static: { language: 'de', incognito: true, workMode: false, hasName: false },
  },

  // Work mode + incognito
  {
    text: 'Professionell. Privat. Perfekt.',
    mood: 'professional',
    static: { language: 'de', incognito: true, workMode: true, hasName: false },
  },
  {
    text: 'Stealth-Produktivitätsmodus',
    mood: 'professional',
    static: { language: 'de', incognito: true, workMode: true, hasName: false },
  },
  {
    text: 'Vertrauliche Arbeitssitzung gestartet',
    mood: 'professional',
    static: { language: 'de', incognito: true, workMode: true, hasName: false },
  },
  {
    text: 'Keine Aufzeichnungen, nur Business',
    mood: 'professional',
    static: { language: 'de', incognito: true, workMode: true, hasName: false },
  },
];
