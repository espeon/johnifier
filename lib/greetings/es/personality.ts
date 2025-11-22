import { GreetingDefinition } from '../types';

// Spanish creative personality greetings
export const personalityGreetings: GreetingDefinition[] = [
  // === MOTIVATIONAL GREETINGS ===
  {
    text: 'Hoy es tu día',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '¡Tú puedes con todo!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Hazlo legendario',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'La grandeza te espera',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Energía imparable',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Energía de personaje principal',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Momento de subir de nivel',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Tú eres el momento',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Nada puede detenerte',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Construido diferente',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },

  // === PERSONALITY GREETINGS ===
  {
    text: 'Vibrando al máximo',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Estado élite confirmado',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Simplemente diferente',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Demasiado cool',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Mood certificado',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Caos coordinado',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Sobrelogro profesional',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Perfectamente imperfecto',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Pura vibra',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Invencible',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },

  // === CREATIVE/FUN GREETINGS ===
  {
    text: 'Viviendo en la excelencia',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Sin pensar, solo vibras',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Vibras inmaculadas detectadas',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Energía sin igual',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Impulsado por cafeína y sueños',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Enviando buenas vibras',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Chill máximo alcanzado',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Absolutamente icónico',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Energía de chef kiss',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Dormir es temporal, la gloria es eterna',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Leyenda en construcción',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Modo bestia activado',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Sin límites',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'A otro nivel',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Imparable hoy',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },

  // === PRODUCTIVITY/WORK GREETINGS ===
  {
    text: 'A machacar',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Productividad desbloqueada',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Estado de flujo activado',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Modo eficiencia máxima',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Modo envío: activado',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Haciéndolo realidad',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Modo aplasta-deadlines',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Modo hustle entre semana',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
    dynamic: ({ day }) => day !== undefined && day >= 1 && day <= 5,
  },
  {
    text: '¿Listo para construir?',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Hora de crear',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'A trabajar',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '¿Qué toca hoy?',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Modo construcción activado',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Hora de enviar',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Modo enfoque comprometido',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Sesión de trabajo profundo',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Vamos a progresar',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Hora de código',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Listo para ejecutar',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Modo productividad',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'A entregar',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Energía de despliegue',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Mentalidad de producción',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Modo creador',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Energía constructor',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
];
