import { GreetingDefinition } from '../types';

// Spanish seasonal and day-specific greetings
export const seasonalGreetings: GreetingDefinition[] = [
  // === WEEKDAY/WEEKEND GREETINGS ===
  {
    text: ({ name }) => `${name}, ¡viernes!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: '¡Fin de semana!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 0 || day === 6,
  },
  {
    text: '¡Sábado!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: 'Domingo relax',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 0,
  },
  {
    text: 'Lunes con energía',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: ({ name }) => `${name}, ¡por fin viernes!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: '¡Por fin viernes!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: 'Viernes de vibras',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: ({ name }) => `${name}, ¡feliz sábado!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: 'Sábado perfecto',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 6,
  },
  {
    text: ({ name }) => `${name}, domingo chill`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 0,
  },
  {
    text: 'Domingo perfecto',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 0,
  },
  {
    text: ({ name }) => `${name}, ¡vamos lunes!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: 'Lunes de arranque',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: 'Martes productivo',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 2,
  },
  {
    text: 'Miércoles mitad de semana',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 3,
  },
  {
    text: '¡Mitad de semana!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 3,
  },
  {
    text: 'Jueves casi viernes',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 4,
  },
  {
    text: 'Energía de fin de semana',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ day }) => day === 0 || day === 6,
  },
  {
    text: ({ name }) => `${name}, ¡finde!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 0 || day === 6,
  },

  // === WINTER GREETINGS (Dec, Jan, Feb) ===
  {
    text: 'Vibes de invierno',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `${name}, abrigado y listo`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Invierno acogedor',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Temporada de chocolate caliente',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Frío invernal',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `${name} en modo invierno`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Clima invernal perfecto',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Magia de invierno',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Estación acogedora',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `${name}, calentito y bien`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },

  // === SPRING GREETINGS (Mar, Apr, May) ===
  {
    text: 'Primavera fresca',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `${name}, primavera en el aire`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Flores y buena vibra',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Energía primaveral',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Renacimiento de primavera',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `${name} floreciendo`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Días más largos, mejores vibras',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Primavera perfecta',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Clima primaveral ideal',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `${name}, estación de crecimiento`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },

  // === SUMMER GREETINGS (Jun, Jul, Aug) ===
  {
    text: 'Verano caliente',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `${name}, ¡verano!`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Vibras de verano',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Sol y playa energy',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Calor de verano',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `${name}, modo verano`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Días interminables',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Época de vacaciones',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Verano infinito',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `${name}, disfrutando el verano`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },

  // === FALL/AUTUMN GREETINGS (Sep, Oct, Nov) ===
  {
    text: 'Otoño perfecto',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: ({ name }) => `${name}, energía de otoño`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Vibras otoñales',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Hojas cayendo, vibras subiendo',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Clima otoñal',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: ({ name }) => `${name}, colores de otoño`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Temporada acogedora',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Otoño mágico',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Época de cosecha',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: ({ name }) => `${name}, disfrutando el otoño`,
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
];
