import { GreetingDefinition } from '../types';

// Incognito/privacy mode greetings (no names, mysterious vibes)
export const incognitoGreetings: GreetingDefinition[] = [
  // Morning incognito
  {
    text: 'Good morning, mysterious stranger',
    mood: 'mysterious',
    static: { language: 'en', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Stealth mode: morning edition',
    mood: 'playful',
    static: { language: 'en', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'The shadows greet you this morning',
    mood: 'mysterious',
    static: { language: 'en', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Anonymous and caffeinated',
    mood: 'playful',
    static: { language: 'en', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Afternoon incognito
  {
    text: 'Good afternoon, ghost',
    mood: 'mysterious',
    static: { language: 'en', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Incognito mode: activated',
    mood: 'professional',
    static: { language: 'en', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'Operating under the radar',
    mood: 'mysterious',
    static: { language: 'en', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: 'No cookies, no traces, no problem',
    mood: 'playful',
    static: { language: 'en', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Evening incognito
  {
    text: 'Good evening, phantom',
    mood: 'mysterious',
    static: { language: 'en', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Night mode + incognito = peak stealth',
    mood: 'playful',
    static: { language: 'en', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'The night protects the nameless',
    mood: 'mysterious',
    static: { language: 'en', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: 'Invisible browsing hours',
    mood: 'casual',
    static: { language: 'en', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Late night incognito
  {
    text: 'Who goes there? (we won\'t tell)',
    mood: 'mysterious',
    static: { language: 'en', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: '3AM incognito energy',
    mood: 'playful',
    static: { language: 'en', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: 'The witching hour knows no names',
    mood: 'mysterious',
    static: { language: 'en', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: 'Night owl in stealth mode',
    mood: 'casual',
    static: { language: 'en', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },

  // General incognito (any time)
  {
    text: 'Welcome, mysterious visitor',
    mood: 'mysterious',
    static: { language: 'en', incognito: true, workMode: false },
  },
  {
    text: 'Your secret is safe with us',
    mood: 'mysterious',
    static: { language: 'en', incognito: true, workMode: false },
  },
  {
    text: 'Hello, anonymous one',
    mood: 'casual',
    static: { language: 'en', incognito: true, workMode: false },
  },
  {
    text: 'Greetings, digital ghost',
    mood: 'playful',
    static: { language: 'en', incognito: true, workMode: false },
  },
  {
    text: 'Shh... we won\'t remember you were here',
    mood: 'playful',
    static: { language: 'en', incognito: true, workMode: false },
  },
  {
    text: 'Browsing in the shadows',
    mood: 'mysterious',
    static: { language: 'en', incognito: true, workMode: false },
  },
  {
    text: 'No history, no trace',
    mood: 'professional',
    static: { language: 'en', incognito: true, workMode: false },
  },
  {
    text: 'Privacy mode engaged',
    mood: 'professional',
    static: { language: 'en', incognito: true, workMode: false },
  },
  {
    text: 'The void acknowledges you',
    mood: 'mysterious',
    static: { language: 'en', incognito: true, workMode: false },
  },
  {
    text: 'What happens here stays... nowhere',
    mood: 'playful',
    static: { language: 'en', incognito: true, workMode: false },
  },
  {
    text: 'Nameless but not faceless',
    mood: 'casual',
    static: { language: 'en', incognito: true, workMode: false },
  },
  {
    text: 'Undercover mode activated',
    mood: 'playful',
    static: { language: 'en', incognito: true, workMode: false },
  },
  {
    text: 'Who? We don\'t know you',
    mood: 'playful',
    static: { language: 'en', incognito: true, workMode: false },
  },
  {
    text: 'Leave no trace',
    mood: 'professional',
    static: { language: 'en', incognito: true, workMode: false },
  },
  {
    text: 'Incognito legend in the making',
    mood: 'playful',
    static: { language: 'en', incognito: true, workMode: false },
  },

  // Work mode + incognito
  {
    text: 'Professional. Private. Perfect.',
    mood: 'professional',
    static: { language: 'en', incognito: true, workMode: true },
  },
  {
    text: 'Stealth productivity mode',
    mood: 'professional',
    static: { language: 'en', incognito: true, workMode: true },
  },
  {
    text: 'Confidential work session initiated',
    mood: 'professional',
    static: { language: 'en', incognito: true, workMode: true },
  },
  {
    text: 'No records, all business',
    mood: 'professional',
    static: { language: 'en', incognito: true, workMode: true },
  },
];
