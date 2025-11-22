import { GreetingDefinition } from '../types';

// Portuguese (Brazilian) battery level-aware greetings
export const batteryGreetings: GreetingDefinition[] = [
  // Low battery (0-20%)
  {
    text: ({ battery }) => `Modo de baixa energia (${battery}%) mas vibes altas`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: ({ battery }) => `Correndo na reserva em ${battery}%`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: 'Carregue logo, lenda',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 15,
  },
  {
    text: ({ battery }) => `Bateria em ${battery}%, vibes em 100%`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: ({ name, battery }) => `${name}, ${battery}%... vivendo perigosamente`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 15,
  },

  // Medium-low (21-50%)
  {
    text: ({ battery }) => `No meio do caminho em ${battery}%`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 20 && battery <= 50,
  },
  {
    text: 'Bateria média, potencial total',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 30 && battery <= 50,
  },

  // High battery (80-100%)
  {
    text: ({ battery }) => `Totalmente carregado (${battery}%), totalmente pronto`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80,
  },
  {
    text: ({ battery }) => `Níveis de energia: ${battery}%`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80,
  },
  {
    text: 'Totalmente carregado e pronto',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 95,
  },
  {
    text: ({ name }) => `${name}, carregado e perigoso`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 90,
  },
  {
    text: 'Bateria: máxima. Energia: infinita.',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery === 100,
  },

  // Exactly 69% (nice)
  {
    text: 'Nível de bateria nice',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 69,
  },
  {
    text: ({ name }) => `${name}... nice (69%)`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery === 69,
  },

  // Exactly 42% (answer to everything)
  {
    text: 'Bateria em 42%: a resposta para tudo',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 42,
  },
];
