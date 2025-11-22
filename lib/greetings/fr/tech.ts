import { GreetingDefinition } from '../types';

// Tech/Developer themed greetings (French, requires techOk=true)
export const techGreetings: GreetingDefinition[] = [
  // Casual tech greetings
  {
    text: 'Hello, World!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'console.log("Salut!")',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Aucun bug détecté... pour l\'instant',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Git prêt pour aujourd\'hui',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Compilation de grandeur...',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Stack overflow? Plutôt stack overflow de vibes',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '404: Sommeil introuvable',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Débogage de la vie, un jour à la fois',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Conflits de merge résolus',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Énergie push to production',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Tous les tests passent',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Zéro erreur, vibes pures',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'git commit -m "journée incroyable"',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'npm install bonheur',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: false },
  },

  // Tech greetings with name
  {
    text: ({ name }) => `${name}.init()`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `Bienvenue ${name} // TODO: être génial`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}: Connexion réussie`,
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `import ${name} from './légende'`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `function ${name}() { return 'génial'; }`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: true },
  },

  // Work mode tech greetings
  {
    text: 'sudo fais en sorte que ça arrive',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: 'npm run succès',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: 'Construction du futur...',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: 'Énergie développeur 10x',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, techOk: true, hasName: false },
  },

  // Playful tech greetings
  {
    text: 'Vivre le rêve (ou le déboguer)',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: ({ name }) => `${name} a rejoint le serveur`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `Succès débloqué: ${name} est apparu`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, techOk: true, hasName: true },
  },
];
