import { GreetingDefinition } from '../types';

// Portuguese (Brazilian) motivational, personality, creative/fun, and productivity/work greetings
export const personalityGreetings: GreetingDefinition[] = [
  // === MOTIVATIONAL GREETINGS ===
  {
    text: 'Hoje é o seu dia',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Você consegue!',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Faça acontecer lendariamente',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'A grandeza te espera',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Energia imparável',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Energia de protagonista',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Hora de subir de nível',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Você é o momento',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Nada pode te parar',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Construído diferente',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, você é imparável`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, lenda absoluta`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `O mundo precisa de ${name} hoje`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, vai fazer mágica acontecer`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
  },

  // === PERSONALITY GREETINGS ===
  {
    text: 'Vibrando na capacidade máxima',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Status de elite confirmado',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Simplesmente diferente',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Estilo demais',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Clima certificado',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Perfeitamente imperfeito',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, o único`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Momento certificado de ${name}`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Supremacia de ${name}`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Performance máxima de ${name}`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
  },

  // === CREATIVE/FUN GREETINGS ===
  {
    text: 'Vivendo de graça na excelência',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Sem pensamentos, só vibes',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Vibes impecáveis detectadas',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Energia incomparável',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Alimentado por café e sonhos',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Enviando boas vibes',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Tranquilidade máxima alcançada',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Absolutamente icônico',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Energia de chef kiss',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Sono é temporário, glória é eterna',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name} passou no vibe check`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
  },

  // === PRODUCTIVITY/WORK GREETINGS ===
  {
    text: 'Acorda e trabalha',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Produtividade desbloqueada',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Estado de flow ativado',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Modo de eficiência máxima',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Modo de entrega: ativado',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Fazendo acontecer',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Modo destruidor de prazos',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name} em modo fera`,
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}, hora de dominar`,
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `Profissional da produtividade: ${name}`,
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Modo hustle de dia de semana',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false, variant: 'creative' },
    dynamic: ({ day }) => day !== undefined && day >= 1 && day <= 5,
  },
];
