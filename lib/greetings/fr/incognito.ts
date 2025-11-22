import { GreetingDefinition } from '../types';

// Incognito/privacy mode greetings (no names, mysterious vibes)
export const incognitoGreetings: GreetingDefinition[] = [
  // Morning incognito
  {
    text: 'Bonjour, mystérieux étranger',
    mood: 'mysterious',
    static: { language: 'fr', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Mode furtif: édition matinale',
    mood: 'playful',
    static: { language: 'fr', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Les ombres te saluent ce matin',
    mood: 'mysterious',
    static: { language: 'fr', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Anonyme et caféiné',
    mood: 'playful',
    static: { language: 'fr', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Afternoon incognito
  {
    text: 'Bon après-midi, fantôme',
    mood: 'mysterious',
    static: { language: 'fr', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Mode incognito: activé',
    mood: 'professional',
    static: { language: 'fr', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Opération sous le radar',
    mood: 'mysterious',
    static: { language: 'fr', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Pas de cookies, pas de traces, pas de problème',
    mood: 'playful',
    static: { language: 'fr', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Evening incognito
  {
    text: 'Bonsoir, spectre',
    mood: 'mysterious',
    static: { language: 'fr', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Mode nuit + incognito = furtivité maximale',
    mood: 'playful',
    static: { language: 'fr', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'La nuit protège les sans-nom',
    mood: 'mysterious',
    static: { language: 'fr', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Heures de navigation invisible',
    mood: 'casual',
    static: { language: 'fr', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Late night incognito
  {
    text: 'Qui va là? (on ne dira rien)',
    mood: 'mysterious',
    static: { language: 'fr', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: 'Énergie incognito de 3h du matin',
    mood: 'playful',
    static: { language: 'fr', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: 'L\'heure des sorcières ne connaît pas de noms',
    mood: 'mysterious',
    static: { language: 'fr', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: 'Oiseau de nuit en mode furtif',
    mood: 'casual',
    static: { language: 'fr', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },

  // General incognito (any time)
  {
    text: 'Bienvenue, visiteur mystérieux',
    mood: 'mysterious',
    static: { language: 'fr', incognito: true, workMode: false },
  },
  {
    text: 'Ton secret est en sécurité',
    mood: 'mysterious',
    static: { language: 'fr', incognito: true, workMode: false },
  },
  {
    text: 'Salut, anonyme',
    mood: 'casual',
    static: { language: 'fr', incognito: true, workMode: false },
  },
  {
    text: 'Salutations, fantôme numérique',
    mood: 'playful',
    static: { language: 'fr', incognito: true, workMode: false },
  },
  {
    text: 'Chut... on ne se souviendra pas que tu étais là',
    mood: 'playful',
    static: { language: 'fr', incognito: true, workMode: false },
  },
  {
    text: 'Navigation dans l\'ombre',
    mood: 'mysterious',
    static: { language: 'fr', incognito: true, workMode: false },
  },
  {
    text: 'Pas d\'historique, pas de trace',
    mood: 'professional',
    static: { language: 'fr', incognito: true, workMode: false },
  },
  {
    text: 'Mode privé activé',
    mood: 'professional',
    static: { language: 'fr', incognito: true, workMode: false },
  },
  {
    text: 'Le vide te reconnaît',
    mood: 'mysterious',
    static: { language: 'fr', incognito: true, workMode: false },
  },
  {
    text: 'Ce qui se passe ici reste... nulle part',
    mood: 'playful',
    static: { language: 'fr', incognito: true, workMode: false },
  },
  {
    text: 'Sans nom mais pas sans visage',
    mood: 'casual',
    static: { language: 'fr', incognito: true, workMode: false },
  },
  {
    text: 'Mode couverture activé',
    mood: 'playful',
    static: { language: 'fr', incognito: true, workMode: false },
  },
  {
    text: 'Qui? On ne te connaît pas',
    mood: 'playful',
    static: { language: 'fr', incognito: true, workMode: false },
  },
  {
    text: 'Ne laisse aucune trace',
    mood: 'professional',
    static: { language: 'fr', incognito: true, workMode: false },
  },
  {
    text: 'Légende incognito en devenir',
    mood: 'playful',
    static: { language: 'fr', incognito: true, workMode: false },
  },

  // Work mode + incognito
  {
    text: 'Professionnel. Privé. Parfait.',
    mood: 'professional',
    static: { language: 'fr', incognito: true, workMode: true },
  },
  {
    text: 'Mode productivité furtive',
    mood: 'professional',
    static: { language: 'fr', incognito: true, workMode: true },
  },
  {
    text: 'Session de travail confidentielle initiée',
    mood: 'professional',
    static: { language: 'fr', incognito: true, workMode: true },
  },
  {
    text: 'Pas de dossiers, que du business',
    mood: 'professional',
    static: { language: 'fr', incognito: true, workMode: true },
  },
];
