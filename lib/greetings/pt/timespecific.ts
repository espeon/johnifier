import { GreetingDefinition } from '../types';

// Portuguese (Brazilian) very specific time-based greetings
export const timeSpecificGreetings: GreetingDefinition[] = [
  // Lunch time (11am-2pm)
  {
    text: 'Vibes de hora do almoço',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 11 && hour < 14,
  },
  {
    text: 'Hora de um lanche?',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: ({ name }) => `${name}, o que vai almoçar?`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: 'Combustível do meio-dia chegando',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },

  // Coffee time (9-11am)
  {
    text: 'Hora do café',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: 'Funcionando à base de cafeína',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: ({ name }) => `${name} + café = imparável`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },

  // Golden hour (5-7pm)
  {
    text: 'Energia de golden hour',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },
  {
    text: 'Pôr do sol chegando',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },
  {
    text: ({ name }) => `${name}, pegando o golden hour`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },

  // Midnight exactly
  {
    text: 'É meia-noite em algum lugar... ah espera, aqui',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 0,
  },
  {
    text: 'O relógio marca doze',
    mood: 'mysterious',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 0,
  },
  {
    text: ({ name }) => `${name}, é um novo dia (tecnicamente)`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour === 0,
  },

  // 3AM
  {
    text: 'Pensamentos das 3h batem diferente',
    mood: 'mysterious',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 3,
  },
  {
    text: 'A hora da verdade das 3h',
    mood: 'mysterious',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 3,
  },
  {
    text: ({ name }) => `${name}, por que você está acordado?`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour === 3,
  },

  // Noon exactly
  {
    text: 'Meio-dia em ponto',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 12,
  },
  {
    text: 'Doze horas em ponto',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 12,
  },

  // Early morning (5-6am)
  {
    text: 'Dedicação: acordar tão cedo',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: 'O clube do nascer do sol',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: ({ name }) => `${name}, acorda e trabalha`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },

  // Prime working hours (2-4pm)
  {
    text: 'Hora de trabalhar pesado à tarde',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },
  {
    text: 'Horas de pico de produtividade',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },
  {
    text: ({ name }) => `${name}, arrasando na tarde`,
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },

  // End of workday (5-6pm)
  {
    text: 'Quase hora de sair',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },
  {
    text: 'Reta final',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },
  {
    text: ({ name }) => `${name}, termine com força`,
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },
];
