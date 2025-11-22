import { GreetingDefinition } from '../types';

// Portuguese general greetings
export const generalGreetings: GreetingDefinition[] = [
  // Morning
  {
    text: 'Bom dia',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Bom dia, ${name}`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Afternoon
  {
    text: 'Boa tarde',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Boa tarde, ${name}`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Evening
  {
    text: 'Boa noite',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `Boa noite, ${name}`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // General
  {
    text: 'Olá',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `Olá, ${name}`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Bem-vindo',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `Bem-vindo de volta, ${name}`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Prazer em ver você',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false },
  },

  // Work mode
  {
    text: 'Vamos trabalhar',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `Vamos lá, ${name}!`,
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: true },
  },

  // Additional morning greetings
  {
    text: 'Bom dia lindo',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Bom dia, ${name}! Bora arrasar`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Que dia maravilhoso',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Bom dia, parceiro',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Bom dia, ${name}! Vai dar tudo certo`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Novo dia, novas oportunidades',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Energia matinal',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Additional afternoon greetings
  {
    text: 'E aí, tudo bem?',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Boa tarde, ${name}! E aí?`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Tarde abençoada',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Boa tarde, amigo',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Boa tarde, ${name}! Bora continuar`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Tarde produtiva',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Additional evening greetings
  {
    text: 'Boa noite, meu nobre',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `Boa noite, ${name}! Descanse`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Noite tranquila',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Ótima noite',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}, boa noite!`,
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Noite iluminada',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Additional general greetings
  {
    text: 'E aí, beleza?',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}, de volta!`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Salve',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `Salve, ${name}`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Opa, tudo certo?',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `Opa, ${name}! Tudo certo?`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Chegou!',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name} chegou!`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Seja bem-vindo de volta',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `Seja bem-vindo, ${name}`,
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Que bom te ver',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `Que bom te ver, ${name}`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Apareceu!',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name} apareceu!`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
  },

  // Additional work mode greetings
  {
    text: 'Vamos nessa',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `Bora trabalhar, ${name}`,
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Foco total',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}, hora de focar!`,
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Mão na massa',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}, mão na massa!`,
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Hora de produzir',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}, vamos produzir!`,
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Rumo ao sucesso',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}, rumo ao sucesso!`,
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Trabalho duro',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}, trabalho duro!`,
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Produtividade em alta',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}, produtividade máxima!`,
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Vamos conquistar',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}, vamos conquistar!`,
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: true },
  },
];
