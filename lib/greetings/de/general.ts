import { GreetingDefinition } from '../types';

// German general time-based greetings
export const generalGreetings: GreetingDefinition[] = [
  // === MORNING GREETINGS ===
  // With name
  {
    text: ({ name }) => `Guten Morgen, ${name}!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Moin ${name}!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Hallo ${name}!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Servus ${name}!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, gut geschlafen?`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Schön dich zu sehen, ${name}`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, bereit für heute?`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Hey ${name}!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Without name
  {
    text: 'Guten Morgen!',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Moin!',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Hallo!',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Servus!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Gut geschlafen?',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Frischer Start!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Guten Start!',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Mahlzeit!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // === AFTERNOON GREETINGS ===
  // With name
  {
    text: ({ name }) => `Guten Tag, ${name}`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}, wie geht's?`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Tag ${name}!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name} wieder da`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Without name
  {
    text: 'Guten Tag',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Tag!',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: "Wie geht's?",
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Alles klar?',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // === EVENING GREETINGS ===
  // With name
  {
    text: ({ name }) => `Guten Abend, ${name}`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}, schöner Abend!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `N'Abend ${name}!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}, wie war dein Tag?`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Without name
  {
    text: 'Guten Abend',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: "N'Abend!",
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Schöner Abend',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Gute Nacht!',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // === LATE NIGHT GREETINGS ===
  // With name
  {
    text: ({ name }) => `${name}, noch wach?`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `Nachteule ${name}`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name}, Schlaflos?`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // Without name
  {
    text: 'Noch wach?',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Nachtschicht?',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Mitternachtsstunde',
    mood: 'mysterious',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Späte Stunde',
    mood: 'mysterious',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // === WORK MODE GREETINGS ===
  // With name
  {
    text: ({ name }) => `${name}, an die Arbeit!`,
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `Los geht's, ${name}!`,
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}, Zeit zu arbeiten!`,
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true, hasName: true },
  },

  // Without name
  {
    text: 'Arbeitsmodus',
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true },
  },
  {
    text: 'An die Arbeit!',
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true },
  },
  {
    text: 'Fokus-Zeit',
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true },
  },
  {
    text: "Los geht's!",
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true },
  },
  {
    text: 'Produktiv sein!',
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true },
  },

  // === ADDITIONAL MORNING GREETINGS ===
  // Creative with name
  {
    text: ({ name }) => `${name}, du Frühaufsteher!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Wundervoller Morgen für ${name}`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name} bringt die Morgensonne mit`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Guten Morgen, ${name}! Bereit durchzustarten?`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name} ist früh dran heute`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 8,
  },
  {
    text: ({ name }) => `Top of the morning, ${name}!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name} startet gut in den Tag`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Morgen ${name}! Kaffee schon drin?`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, frisch und munter?`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Was für ein Morgen, ${name}!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name} erobert den Morgen`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Perfekter Start, ${name}!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, auf geht's!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Moinsen ${name}!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Grüß Gott, ${name}!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Creative without name
  {
    text: 'Ein neuer Tag voller Möglichkeiten',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Morgenluft schnuppern',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Die Sonne lacht',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Morgenstimmung aktiv',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Bereit für Abenteuer?',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Was für ein Tag!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Heute wird großartig',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Energie tanken',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Tagesanbruch',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 8,
  },
  {
    text: 'Vogelgezwitscher und gute Laune',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Morgenmuffel? Nicht heute!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Frühstart',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 8,
  },
  {
    text: 'Sonnenschein voraus',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Mit Schwung in den Tag',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Moinsen!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // === ADDITIONAL AFTERNOON GREETINGS ===
  // Creative with name
  {
    text: ({ name }) => `${name}, schöner Nachmittag!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Hey ${name}, gut drauf heute?`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name} am Nachmittag unterwegs`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Na ${name}, alles fit?`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}, was läuft?`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Nachmittag, ${name}!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}, alles im Griff?`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Schön dich zu sehen, ${name}!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}, produktiver Nachmittag?`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Servus ${name}, alles klar?`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name} mitten am Tag`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Tach ${name}!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Creative without name
  {
    text: 'Nachmittagsgrüße',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Tagesmitte erreicht',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Nachmittags-Vibes',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Was geht ab?',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Mittagsstimmung',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Schöner Tag heute',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Tagesrhythmus',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Weiter so!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Läuft bei dir',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Sonnige Stunden',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // === ADDITIONAL EVENING GREETINGS ===
  // Creative with name
  {
    text: ({ name }) => `${name}, entspannter Abend!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}, Feierabend?`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `Abendgrüße an ${name}`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}, gemütlich ausklingen lassen?`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `Nabend ${name}!`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}, der Tag neigt sich`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name} am Abend`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `Schönen Abend noch, ${name}!`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}, gemütlicher Ausklang`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `Abendstimmung mit ${name}`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Creative without name
  {
    text: 'Abendstimmung',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Feierabendzeit',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Gemütliche Stunden',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Nabend!',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Tag geschafft',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Abenddämmerung',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Entspannte Abendstunden',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Der Tag verabschiedet sich',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Abendruhe',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Chillige Abendstunden',
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // === ADDITIONAL LATE NIGHT GREETINGS ===
  // Creative with name
  {
    text: ({ name }) => `${name}, Geisterstunde?`,
    mood: 'mysterious',
    static: { language: 'de', incognito: false, workMode: false, hasName: true, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name}, die Nacht ist jung`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `Mitternacht mit ${name}`,
    mood: 'mysterious',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name}, warum schläfst du nicht?`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name} in der Nacht unterwegs`,
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `Nachteulen-${name}`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name}, zu spät oder zu früh?`,
    mood: 'playful',
    static: { language: 'de', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // Creative without name
  {
    text: 'Nachtaktiv',
    mood: 'mysterious',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Geisterstunde',
    mood: 'mysterious',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Die Nacht gehört dir',
    mood: 'mysterious',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Schlaflose Nacht?',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Tiefe Nacht',
    mood: 'mysterious',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Die Stille der Nacht',
    mood: 'mysterious',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Mondschein-Stunden',
    mood: 'mysterious',
    static: { language: 'de', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Nachtarbeit?',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Lange Nacht',
    mood: 'casual',
    static: { language: 'de', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // === ADDITIONAL WORK MODE GREETINGS ===
  {
    text: ({ name }) => `${name}, Vollgas geben!`,
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `Arbeitszeit für ${name}`,
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}, konzentriert bleiben`,
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Volle Konzentration',
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true, hasName: false },
  },
  {
    text: 'Arbeitsflow aktiviert',
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true, hasName: false },
  },
  {
    text: 'Produktivität an erster Stelle',
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true, hasName: false },
  },
  {
    text: 'Konzentration ist der Schlüssel',
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true, hasName: false },
  },
  {
    text: 'Schaffen wir das!',
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true, hasName: false },
  },
  {
    text: 'Arbeitspower',
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true, hasName: false },
  },
  {
    text: 'Effizienz-Modus',
    mood: 'professional',
    static: { language: 'de', incognito: false, workMode: true, hasName: false },
  },
];
