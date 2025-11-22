import { GreetingDefinition } from '../types';

// Portuguese (Brazilian) incognito/privacy mode greetings (no names, mysterious vibes)
export const incognitoGreetings: GreetingDefinition[] = [
  // Morning incognito
  {
    text: 'Bom dia, estranho misterioso',
    mood: 'mysterious',
    static: { language: 'pt', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Modo furtivo: edição matinal',
    mood: 'playful',
    static: { language: 'pt', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'As sombras te cumprimentam nesta manhã',
    mood: 'mysterious',
    static: { language: 'pt', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Anônimo e cafeinado',
    mood: 'playful',
    static: { language: 'pt', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Afternoon incognito
  {
    text: 'Boa tarde, fantasma',
    mood: 'mysterious',
    static: { language: 'pt', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Modo incógnito: ativado',
    mood: 'professional',
    static: { language: 'pt', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Operando sob o radar',
    mood: 'mysterious',
    static: { language: 'pt', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Sem cookies, sem rastros, sem problemas',
    mood: 'playful',
    static: { language: 'pt', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Evening incognito
  {
    text: 'Boa noite, fantasma',
    mood: 'mysterious',
    static: { language: 'pt', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Modo noturno + incógnito = furtividade máxima',
    mood: 'playful',
    static: { language: 'pt', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'A noite protege os sem nome',
    mood: 'mysterious',
    static: { language: 'pt', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Horas de navegação invisível',
    mood: 'casual',
    static: { language: 'pt', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Late night incognito
  {
    text: 'Quem vai lá? (não vamos contar)',
    mood: 'mysterious',
    static: { language: 'pt', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: 'Energia incógnita das 3h',
    mood: 'playful',
    static: { language: 'pt', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: 'A hora das bruxas não conhece nomes',
    mood: 'mysterious',
    static: { language: 'pt', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },

  // General incognito (any time)
  {
    text: 'Bem-vindo, visitante misterioso',
    mood: 'mysterious',
    static: { language: 'pt', incognito: true, workMode: false },
  },
  {
    text: 'Seu segredo está seguro conosco',
    mood: 'mysterious',
    static: { language: 'pt', incognito: true, workMode: false },
  },
  {
    text: 'Olá, anônimo',
    mood: 'casual',
    static: { language: 'pt', incognito: true, workMode: false },
  },
  {
    text: 'Saudações, fantasma digital',
    mood: 'playful',
    static: { language: 'pt', incognito: true, workMode: false },
  },
  {
    text: 'Shh... não vamos lembrar que você esteve aqui',
    mood: 'playful',
    static: { language: 'pt', incognito: true, workMode: false },
  },
  {
    text: 'Navegando nas sombras',
    mood: 'mysterious',
    static: { language: 'pt', incognito: true, workMode: false },
  },
  {
    text: 'Sem histórico, sem rastro',
    mood: 'professional',
    static: { language: 'pt', incognito: true, workMode: false },
  },
  {
    text: 'Modo privacidade ativado',
    mood: 'professional',
    static: { language: 'pt', incognito: true, workMode: false },
  },
  {
    text: 'O vazio te reconhece',
    mood: 'mysterious',
    static: { language: 'pt', incognito: true, workMode: false },
  },
  {
    text: 'O que acontece aqui fica... em lugar nenhum',
    mood: 'playful',
    static: { language: 'pt', incognito: true, workMode: false },
  },

  // Work mode + incognito
  {
    text: 'Profissional. Privado. Perfeito.',
    mood: 'professional',
    static: { language: 'pt', incognito: true, workMode: true },
  },
  {
    text: 'Modo produtividade furtiva',
    mood: 'professional',
    static: { language: 'pt', incognito: true, workMode: true },
  },
  {
    text: 'Sessão de trabalho confidencial iniciada',
    mood: 'professional',
    static: { language: 'pt', incognito: true, workMode: true },
  },
];
