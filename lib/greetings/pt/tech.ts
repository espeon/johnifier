import { GreetingDefinition } from '../types';

// Portuguese (Brazilian) tech/developer themed greetings (requires techOk=true)
export const techGreetings: GreetingDefinition[] = [
  // Casual tech greetings
  {
    text: 'Hello, World!',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'console.log("E aí!")',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Nenhum bug detectado... ainda',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Git pronto para hoje',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Compilando grandeza...',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '404: Sono não encontrado',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Debugando a vida, um dia de cada vez',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Conflitos de merge resolvidos',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Energia de push para produção',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Todos os testes passando',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Zero erros, puras vibes',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, techOk: true, hasName: false },
  },

  // Tech greetings with name
  {
    text: ({ name }) => `${name}.init()`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `Bem-vindo ${name} // TODO: ser incrível`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}: Login bem-sucedido`,
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: false, techOk: true, hasName: true },
  },

  // Work mode tech greetings
  {
    text: 'sudo fazer acontecer',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: 'npm run sucesso',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: 'Construindo o futuro...',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: 'Energia de desenvolvedor 10x',
    mood: 'professional',
    static: { language: 'pt', incognito: false, workMode: true, techOk: true, hasName: false },
  },

  // Playful tech greetings
  {
    text: 'Vivendo o sonho (ou debugando)',
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: ({ name }) => `${name} entrou no servidor`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `Conquista desbloqueada: ${name} apareceu`,
    mood: 'playful',
    static: { language: 'pt', incognito: false, workMode: false, techOk: true, hasName: true },
  },
];
