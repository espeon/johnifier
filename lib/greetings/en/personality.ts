import { GreetingDefinition } from '../types';

// Motivational, personality, creative/fun, and productivity/work greetings
export const personalityGreetings: GreetingDefinition[] = [
  // === CASUAL GREETINGS ===
  {
    text: 'Another day, another tab',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Here we go',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Just vibing',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Doing the thing',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Tab number who knows',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Yep, still here',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `Oh hey ${name}`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Back again, ${name}?`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },

  // === PERSONALITY GREETINGS ===
  {
    text: 'Just another browser tab',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Taking it easy',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Certified mood',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Chaos coordinator reporting',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Perfectly imperfect',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Just existing',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Hanging in there',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, back at it`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Certified ${name} moment`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name} in the house`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },

  // === CREATIVE/FUN GREETINGS ===
  {
    text: 'No thoughts, just vibes',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Powered by caffeine and dreams',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Maximum chill achieved',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'It is what it is',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Trying to vibe here',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Just browsing',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Probably should be sleeping',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name}, procrastinating again?`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },

  // === PRODUCTIVITY/WORK GREETINGS ===
  {
    text: 'Rise and grind',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Productivity unlocked',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Flow state activated',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Maximum efficiency mode',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Ship mode: engaged',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Making it happen',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Deadline crusher mode',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name} in beast mode`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}, time to dominate`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `Productivity pro: ${name}`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
  },
  {
    text: 'Weekday hustle mode',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
    dynamic: ({ day }) => day !== undefined && day >= 1 && day <= 5,
  },
  {
    text: 'Ready to build?',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Time to create',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: "Let's get to work",
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: "What's on the agenda?",
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Build mode activated',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Time to ship',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Focus mode engaged',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Deep work session',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: "Let's make progress",
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Code time',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Ready to execute',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'What are we tackling?',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Productivity mode',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Execute mode',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: "Let's deliver",
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Sprint time',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Deployment energy',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Production mindset',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Maker mode',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Builder energy',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Creative focus',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Mission mode',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Push to prod?',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Merge and deploy',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Work work work',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Efficiency mode',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Tasks await',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Output time',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Create greatness',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Professional mode engaged',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Hustle mode',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: "Let's iterate",
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Grind time',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Impact mode',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'Results-driven',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `Ready to ship, ${name}?`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `Let's build, ${name}`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `Focus time, ${name}`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}, ready to execute?`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `Time to ship, ${name}`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name} in work mode`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `Deploy time, ${name}`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}, let's execute`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `Builder ${name}`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name} locked in`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `Production ${name}`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}, deep work?`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `Sprint mode ${name}`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}, make it happen`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `Go time, ${name}`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name} means business`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, hasName: true },
  },

  // === MORE FUN NAME GREETINGS ===
  {
    text: ({ name }) => `It's ${name} o'clock`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, no notes`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `The ${name} experience`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, doing the thing`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name} is here`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Welcome back, ${name}`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, what's up?`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, once more`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Good to see you, ${name}`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, just browsing?`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Another tab for ${name}`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },

  // === REALISTIC/RELATABLE GREETINGS ===
  {
    text: 'Still awake?',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 6,
  },
  {
    text: 'Another Monday',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: 'Almost there',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ day }) => day === 4,
  },
  {
    text: 'TGIF',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: 'Weekend mode',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ day }) => day === 0 || day === 6,
  },
  {
    text: 'Midweek already',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ day }) => day === 3,
  },
  {
    text: 'Just going through it',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'One tab of many',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Tab #infinity',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Scroll, scroll, scroll',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, another day`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name} checking in`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
];
