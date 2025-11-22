import { GreetingDefinition } from '../types';

// Spanish general time-based greetings
export const generalGreetings: GreetingDefinition[] = [
  // === MORNING GREETINGS ===
  // With name
  {
    text: ({ name }) => `¡Qué tal, ${name}!`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `¡Hola ${name}!`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `¡Buenos días, ${name}!`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `¿Cómo amaneciste, ${name}?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `¡Arriba ${name}!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, ¡a darle!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `¡Órale ${name}!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, ¡qué buena onda verte!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, listo para hoy?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `¡Ey ${name}!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, ¡buenos días!`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Buenos días, ${name}`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Without name
  {
    text: '¡Qué onda!',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡Buenos días!',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡Buen día!',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¿Cómo amaneciste?',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡A darle con todo!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡Arriba!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡Órale!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡A por ello!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡Vamos!',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Buen inicio',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // === AFTERNOON GREETINGS ===
  // With name
  {
    text: ({ name }) => `Buenas tardes, ${name}`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `¿Qué pasa, ${name}?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}, ¿cómo vas?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `¡Hola de nuevo, ${name}!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}, ¿todo bien?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name} de vuelta`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Without name
  {
    text: 'Buenas tardes',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '¿Qué tal la tarde?',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '¡Buenas!',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '¿Qué tal?',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Buena tarde',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // === EVENING GREETINGS ===
  // With name
  {
    text: ({ name }) => `Buenas noches, ${name}`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}, ¿qué tal la noche?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `Noche perfecta con ${name}`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}, buena noche`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Without name
  {
    text: 'Buenas noches',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '¿Qué tal la noche?',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Noche tranquila',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Buena noche',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // === LATE NIGHT GREETINGS ===
  // With name
  {
    text: ({ name }) => `${name}, ¿trasnochando?`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `Búho nocturno ${name}`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name}, ¿no duermes?`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // Without name
  {
    text: '¿Trasnochando?',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Hora de búhos',
    mood: 'mysterious',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Madrugada',
    mood: 'mysterious',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // === WORK MODE GREETINGS ===
  // With name
  {
    text: ({ name }) => `${name}, ¡a trabajar!`,
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `Vamos ${name}, ¡a producir!`,
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}, ¡a darle duro!`,
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: true },
  },

  // Without name
  {
    text: '¡A trabajar!',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false },
  },
  {
    text: 'Modo productivo',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false },
  },
  {
    text: '¡Vamos a darle!',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false },
  },
  {
    text: 'Hora de producir',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false },
  },
  {
    text: 'Modo enfoque',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false },
  },

  // === EXPANDED MORNING GREETINGS ===
  // With name
  {
    text: ({ name }) => `¡Qué onda, ${name}!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, ¡arranca el día!`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `¡A tope, ${name}!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, ¡con toda!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `¡Dale, ${name}!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, ¡a romperla!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `¡Épa, ${name}!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, lista para brillar`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `¡Wepa, ${name}!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, ¿cómo vas hoy?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `¡Ánimo, ${name}!`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, ¡vamos con todo!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `¡Presente, ${name}!`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, ¡otro día para ganar!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `¡Gusto verte, ${name}!`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Without name - morning
  {
    text: '¡Qué tal!',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡A darle!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡Con toda!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡Dale!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡A romperla!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡Épa!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡Wepa!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'A brillar',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡Ánimo!',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Con todo',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡A despuntar!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡Saludos matutinos!',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Mañana fresca',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡Buenos días, mundo!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'A conquistar el día',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // === EXPANDED AFTERNOON GREETINGS ===
  // With name
  {
    text: ({ name }) => `${name}, ¿qué cuentas?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `¿Todo bien, ${name}?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}, aquí estamos`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `¡Hola otra vez, ${name}!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}, ¿cómo te va?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `¿Qué hay, ${name}?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}, ¡qué alegría!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `¡Ey, ${name}!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}, ¿todo chido?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `¡Buenas, ${name}!`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Without name - afternoon
  {
    text: '¿Qué cuentas?',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '¿Todo bien?',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Aquí estamos',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '¿Qué hay?',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '¿Cómo va?',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '¡Ey!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '¿Todo chido?',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Tarde perfecta',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Buena vibra',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Medio día bien',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // === EXPANDED EVENING GREETINGS ===
  // With name
  {
    text: ({ name }) => `${name}, buena noche`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `Buenas noches, ${name}`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}, ¿cómo va la noche?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `Noche tranquila, ${name}`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}, ¿relajándote?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `Buena noche con ${name}`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name} de noche`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `¿Cómo la noche, ${name}?`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Without name - evening
  {
    text: 'Buena noche',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '¿Cómo va la noche?',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Noche perfecta',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Hora nocturna',
    mood: 'mysterious',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Noche relajada',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Atardecer completo',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // === EXPANDED LATE NIGHT GREETINGS ===
  // With name
  {
    text: ({ name }) => `${name}, ¿desvelado?`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `Noctámbulo ${name}`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name}, ¿sin sueño?`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name} en la madrugada`,
    mood: 'mysterious',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `Búho nocturno, ${name}`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // Without name - late night
  {
    text: '¿Desvelado?',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Noctámbulo detectado',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: '¿Sin sueño?',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'En la madrugada',
    mood: 'mysterious',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Hora de insomnes',
    mood: 'mysterious',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Muy tarde o muy temprano',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // === CREATIVE GENERAL GREETINGS ===
  {
    text: ({ name }) => `¡${name}, crack!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, leyenda`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `¡${name}, máquina!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, la rompe`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `Genio ${name}`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, fenómeno`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `¡${name} al poder!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, pura energía`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, total crack`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `¡Presente el gran ${name}!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },

  // Creative without name
  {
    text: '¡Crack!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '¡Máquina!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Genio total',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '¡Fenomenal!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Pura potencia',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Eres la clave',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Total maestría',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Nivel superior',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Imbatible',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Legendario',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
];
