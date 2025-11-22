import { GreetingDefinition } from '../types';

// French motivational, personality, creative/fun, and productivity/work greetings
export const personalityGreetings: GreetingDefinition[] = [
  // === MOTIVATIONAL GREETINGS ===
  {
    text: "Aujourd'hui c'est ton jour",
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Tu gères!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Fais-en quelque chose de légendaire',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'La grandeur attend',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Énergie inarrêtable',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Énergie de personnage principal',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Moment de montée de niveau',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Tu es le moment',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Rien ne peut te arrêter',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Construit différemment',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, tu es inarrêtable`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, légende absolue`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Le monde a besoin de ${name} aujourd'hui`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, va faire de la magie`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
  },

  // === PERSONALITY GREETINGS ===
  {
    text: 'Vibes au maximum',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Statut élite confirmé',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Simplement bâti autrement',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Trop cool pour l\'école',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Ambiance certifiée',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Absolument déchaîné (positivement)',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Coordinateur du chaos en service',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Surperformeur professionnel',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Parfaitement imparfait',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, l'unique`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Moment ${name} certifié`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Suprématie ${name}`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Performance ${name} au sommet`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
  },

  // === CREATIVE/FUN GREETINGS ===
  {
    text: 'Vivre dans l\'excellence sans payer de loyer',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Aucune pensée, que des vibes',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Vibes immaculées détectées',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Énergie inégalée',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Alimenté par café et rêves',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Envoi de bonnes vibes',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Zénitude maximale atteinte',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Absolument iconique',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Énergie chef kiss',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Le sommeil est temporaire, la gloire est éternelle',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name} a validé le vibe check`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Aura maximale',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Positivité débordante',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Mode champion activé',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },

  // === PRODUCTIVITY/WORK GREETINGS ===
  {
    text: 'Debout et en action',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Productivité débloquée',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'État de flow activé',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Mode efficacité maximale',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Mode livraison: engagé',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'On fait en sorte que ça arrive',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Mode écraseur de deadlines',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name} en mode bête`,
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}, temps de dominer`,
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `Pro de la productivité: ${name}`,
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Mode hustle en semaine',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
    dynamic: ({ day }) => day !== undefined && day >= 1 && day <= 5,
  },
  {
    text: 'Prêt à construire?',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Temps de créer',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Allons travailler',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'C\'est quoi le programme?',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Mode construction activé',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Temps de livrer',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Mode focus engagé',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Session de travail profond',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Faisons des progrès',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Temps de coder',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Prêt à exécuter',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Qu\'est-ce qu\'on attaque?',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Mode productivité',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `Prêt à livrer, ${name}?`,
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `Construisons, ${name}`,
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}, temps de focus`,
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: true },
  },
];
