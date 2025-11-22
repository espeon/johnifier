import { GreetingDefinition } from '../types';

// Very specific time-based greetings
export const timeSpecificGreetings: GreetingDefinition[] = [
  // Lunch time (11am-2pm)
  {
    text: 'Lunch break vibes',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 11 && hour < 14,
  },
  {
    text: 'Time for a snack?',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: ({ name }) => `${name}, what's for lunch?`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: 'Midday fuel incoming',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },

  // Coffee time (9-11am)
  {
    text: 'Coffee time ☕',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: 'Running on caffeine',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: ({ name }) => `${name} + coffee = unstoppable`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },

  // Golden hour (5-7pm)
  {
    text: 'Golden hour energy',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },
  {
    text: 'Sunset soon',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },
  {
    text: ({ name }) => `${name}, catching the golden hour`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },

  // Midnight exactly
  {
    text: 'It\'s midnight somewhere... oh wait, here',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour === 0,
  },
  {
    text: 'The clock strikes twelve',
    mood: 'mysterious',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour === 0,
  },
  {
    text: ({ name }) => `${name}, it's a new day (technically)`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour === 0,
  },

  // 3AM
  {
    text: '3AM thoughts hitting different',
    mood: 'mysterious',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour === 3,
  },
  {
    text: 'The 3AM hour of truth',
    mood: 'mysterious',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour === 3,
  },
  {
    text: ({ name }) => `${name}, why are you awake?`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour === 3,
  },

  // Noon exactly
  {
    text: 'High noon',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour === 12,
  },
  {
    text: 'Twelve o\'clock sharp',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour === 12,
  },

  // Early morning (5-6am)
  {
    text: 'Dedication: waking up this early',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: 'The sunrise club',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: ({ name }) => `${name}, rise and grind`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },

  // Prime working hours (2-4pm)
  {
    text: 'Afternoon grind time',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },
  {
    text: 'Peak productivity hours',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },
  {
    text: ({ name }) => `${name}, crushing the afternoon`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },

  // End of workday (5-6pm)
  {
    text: 'Almost quitting time',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },
  {
    text: 'Homestretch',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },
  {
    text: ({ name }) => `${name}, finish strong`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },
];
