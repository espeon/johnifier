import { GreetingDefinition } from '../types';

// Incognito/privacy mode greetings (no names, mysterious vibes)
export const incognitoGreetings: GreetingDefinition[] = [
  // Morning incognito
  {
    text: 'Buenos días, extraño misterioso',
    mood: 'mysterious',
    static: { language: 'es', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Modo sigiloso: edición matutina',
    mood: 'playful',
    static: { language: 'es', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Las sombras te saludan esta mañana',
    mood: 'mysterious',
    static: { language: 'es', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Anónimo y cafeinado',
    mood: 'playful',
    static: { language: 'es', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Afternoon incognito
  {
    text: 'Buenas tardes, fantasma',
    mood: 'mysterious',
    static: { language: 'es', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Modo incógnito: activado',
    mood: 'professional',
    static: { language: 'es', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Operando bajo el radar',
    mood: 'mysterious',
    static: { language: 'es', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Sin cookies, sin rastros, sin problema',
    mood: 'playful',
    static: { language: 'es', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Evening incognito
  {
    text: 'Buenas noches, espectro',
    mood: 'mysterious',
    static: { language: 'es', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Modo noche + incógnito = sigilo máximo',
    mood: 'playful',
    static: { language: 'es', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'La noche protege a los sin nombre',
    mood: 'mysterious',
    static: { language: 'es', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Late night incognito
  {
    text: '¿Quién va? (no diremos nada)',
    mood: 'mysterious',
    static: { language: 'es', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: 'Energía incógnito de las 3AM',
    mood: 'playful',
    static: { language: 'es', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },

  // General incognito (any time)
  {
    text: 'Bienvenido, visitante misterioso',
    mood: 'mysterious',
    static: { language: 'es', incognito: true, workMode: false },
  },
  {
    text: 'Tu secreto está seguro con nosotros',
    mood: 'mysterious',
    static: { language: 'es', incognito: true, workMode: false },
  },
  {
    text: 'Hola, anónimo',
    mood: 'casual',
    static: { language: 'es', incognito: true, workMode: false },
  },
  {
    text: 'Saludos, fantasma digital',
    mood: 'playful',
    static: { language: 'es', incognito: true, workMode: false },
  },
  {
    text: 'Shh... no recordaremos que estuviste aquí',
    mood: 'playful',
    static: { language: 'es', incognito: true, workMode: false },
  },
  {
    text: 'Navegando en las sombras',
    mood: 'mysterious',
    static: { language: 'es', incognito: true, workMode: false },
  },
  {
    text: 'Sin historial, sin rastro',
    mood: 'professional',
    static: { language: 'es', incognito: true, workMode: false },
  },
  {
    text: 'Modo privacidad comprometido',
    mood: 'professional',
    static: { language: 'es', incognito: true, workMode: false },
  },
  {
    text: 'Sin nombre pero con estilo',
    mood: 'casual',
    static: { language: 'es', incognito: true, workMode: false },
  },

  // Work mode + incognito
  {
    text: 'Profesional. Privado. Perfecto.',
    mood: 'professional',
    static: { language: 'es', incognito: true, workMode: true },
  },
  {
    text: 'Modo productividad sigilosa',
    mood: 'professional',
    static: { language: 'es', incognito: true, workMode: true },
  },
];
