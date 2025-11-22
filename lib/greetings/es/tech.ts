import { GreetingDefinition } from '../types';

// Tech/Developer themed greetings (Spanish with tech terms, requires techOk=true)
export const techGreetings: GreetingDefinition[] = [
  // Casual tech greetings
  {
    text: '¡Hola, Mundo!',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'console.log("¡Hola!")',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'No se detectaron bugs... todavía',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'git ready para hoy',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Compilando grandeza...',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '404: Sueño no encontrado',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Debugeando la vida, un día a la vez',
    mood: 'casual',
    static: { language: 'es', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Merge conflicts resueltos',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Energía push to production',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Todos los tests pasando',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Cero errores, puras vibras',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'npm install felicidad',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'git commit -m "día épico"',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, techOk: true, hasName: false },
  },

  // Tech greetings with name
  {
    text: ({ name }) => `${name}.init()`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `Bienvenido ${name} // TODO: ser increíble`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}: Sesión iniciada exitosamente`,
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `${name} entró al servidor`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `Logro desbloqueado: ${name} apareció`,
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, techOk: true, hasName: true },
  },

  // Work mode tech greetings
  {
    text: 'sudo hazlo posible',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, techOk: true },
  },
  {
    text: 'npm run éxito',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, techOk: true },
  },
  {
    text: 'Construyendo el futuro...',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, techOk: true },
  },
  {
    text: 'Energía 10x developer',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, techOk: true },
  },
  {
    text: 'git push --force tu potencial',
    mood: 'professional',
    static: { language: 'es', incognito: false, workMode: true, techOk: true },
  },

  // Playful tech greetings
  {
    text: 'Viviendo el sueño (o debugeándolo)',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '¿Tocar pasto? Nah, tocar código',
    mood: 'playful',
    static: { language: 'es', incognito: false, workMode: false, techOk: true, hasName: false },
  },
];
