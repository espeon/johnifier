import { GreetingDefinition } from '../types';

// French general time-based greetings
export const generalGreetings: GreetingDefinition[] = [
  // === MORNING GREETINGS ===
  // With name
  {
    text: ({ name }) => `Bonjour ${name}!`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Salut ${name}!`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Coucou ${name}!`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, ça va?`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Bien le bonjour, ${name}!`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, prêt pour la journée?`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, en forme?`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Hey ${name}!`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Without name
  {
    text: 'Bonjour!',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Salut!',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Coucou!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Ça va?',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Bien le bonjour!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Belle journée!',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Salutations!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Bon matin!',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // === AFTERNOON GREETINGS ===
  // With name
  {
    text: ({ name }) => `Bon après-midi, ${name}`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Re ${name}!`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}, ça roule?`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name} de retour`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Without name
  {
    text: 'Bon après-midi',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Ça roule?',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Re!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Rebonjour!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // === EVENING GREETINGS ===
  // With name
  {
    text: ({ name }) => `Bonsoir ${name}`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}, bonne soirée!`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `Soirée parfaite avec ${name}`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}, ça va ce soir?`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Without name
  {
    text: 'Bonsoir',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Bonne soirée',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Belle soirée!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Bonne nuit!',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // === LATE NIGHT GREETINGS ===
  // With name
  {
    text: ({ name }) => `${name}, encore debout?`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `Couche-tard ${name}`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name}, insomnie?`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // Without name
  {
    text: 'Encore debout?',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Nuit blanche?',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Heure des hiboux',
    mood: 'mysterious',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Minuit passé',
    mood: 'mysterious',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // === WORK MODE GREETINGS ===
  // With name
  {
    text: ({ name }) => `Au boulot, ${name}!`,
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}, on y va!`,
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}, prêt à travailler?`,
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: true },
  },

  // Without name
  {
    text: 'Au travail!',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false },
  },
  {
    text: 'Mode focus',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false },
  },
  {
    text: 'Au boulot!',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false },
  },
  {
    text: 'On y va!',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false },
  },
  {
    text: 'Concentration!',
    mood: 'professional',
    static: { language: 'fr', incognito: false, workMode: true, hasName: false },
  },

  // === MORE MORNING GREETINGS ===
  {
    text: ({ name }) => `${name}, quelle belle journée!`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Reveillé, ${name}?`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, nouveau jour, nouvelles opportunités`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Salutations matinales, ${name}`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}, début frais`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Quelle belle journée!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Bien réveillé?',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Nouveau jour, nouvelles opportunités',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Un bon début',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Bonjour tout le monde!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // === MORE AFTERNOON GREETINGS ===
  {
    text: ({ name }) => `${name}, belle après-midi`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Salut ${name}, ça boume?`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}, comment va?`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Yo ${name}!`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Hé ${name}, quoi de neuf?`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Belle après-midi',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Ça boume?',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Comment ça va?',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Quoi de neuf?',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Bonjour!',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // === MORE EVENING GREETINGS ===
  {
    text: ({ name }) => `${name}, tranquille ce soir?`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `Bonsoir à toi, ${name}`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}, détends-toi`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `Soirée cosy avec ${name}`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}, repose-toi bien`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Tranquille ce soir?',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Soirée relax',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Détends-toi',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Temps de se relaxer',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Bonne fin de journée',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // === MORE LATE NIGHT GREETINGS ===
  {
    text: ({ name }) => `${name}, toujours là?`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name}, l'oiseau de nuit`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `Bonne nuit ${name}... ou pas`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Toujours là?',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'L\'oiseau de nuit',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'Les heures tardives',
    mood: 'mysterious',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: 'La nuit est jeune',
    mood: 'mysterious',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },

  // === CREATIVE GREETINGS WITH NAME ===
  {
    text: ({ name }) => `${name} est arrivé!`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `Le voilà, ${name}!`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, toujours au top`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `Bienvenue à toi, ${name}`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, on t'attendait`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `Content de te voir, ${name}`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, la star`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, tu brilles`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `Extraordinaire ${name}`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, toujours impressionnant`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `Quelle entrée, ${name}!`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, l'incroyable`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `Salut ${name}`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, le meilleur`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, numéro un`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `Voici ${name}!`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, quelle présence`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, tu es génial`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `Fantastique ${name}`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, sensationnel`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },

  // === CREATIVE GREETINGS WITHOUT NAME ===
  {
    text: 'Quel plaisir!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Ravi de te voir',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
  },
  {
    text: 'Tu es là!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Quelle entrée!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Content de te revoir',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
  },
  {
    text: 'Bienvenue!',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
  },
  {
    text: 'Salut toi!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
  },
  {
    text: 'Heureux de te voir',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
  },
  {
    text: 'Quelle joie!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Te voilà!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },

  // === CASUAL ANYTIME GREETINGS ===
  {
    text: ({ name }) => `Salut ${name}, comment tu vas?`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, tout va bien?`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Hé ${name}, ça dit quoi?`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, la forme?`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Tiens, ${name}!`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Comment tu vas?',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
  },
  {
    text: 'Tout va bien?',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
  },
  {
    text: 'Ça dit quoi?',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
  },
  {
    text: 'La forme?',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
  },
  {
    text: 'Bien ou bien?',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
  },

  // === PLAYFUL GREETINGS ===
  {
    text: ({ name }) => `Oh regardez, c'est ${name}!`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name} entre dans le chat`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `Alerte: ${name} détecté`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name} a fait son apparition`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `Mesdames et messieurs: ${name}!`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: 'Oh regardez qui voilà!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Entrée remarquée',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Voilà du beau monde',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },

  // === FRIENDLY GREETINGS ===
  {
    text: ({ name }) => `${name}, mon ami!`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Cher ${name}`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, toujours un plaisir`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Merveilleux de te voir, ${name}`,
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true },
  },
  {
    text: 'Toujours un plaisir',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
  },
  {
    text: 'Merveilleux de te voir',
    mood: 'casual',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false },
  },

  // === ENERGETIC GREETINGS ===
  {
    text: ({ name }) => `${name}, plein d'énergie!`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, toujours motivé`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, en pleine forme`,
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: true, variant: 'creative' },
  },
  {
    text: 'Plein d\'énergie!',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Toujours motivé',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'En pleine forme',
    mood: 'playful',
    static: { language: 'fr', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
];
