import { GreetingDefinition } from '../types';

// Motivational, personality, creative/fun, and productivity/work greetings
export const personalityGreetings: GreetingDefinition[] = [
  // === MOTIVATIONAL GREETINGS ===
  {
    text: 'Today is your day',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'You got this!',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Make it legendary',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Greatness awaits',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'Unstoppable energy',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Main character energy',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Level up time',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'You are the moment',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Nothing can stop you',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Built different',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, you're unstoppable`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, absolute legend`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `The world needs ${name} today`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, go make magic happen`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },

  // === PERSONALITY GREETINGS ===
  {
    text: 'Vibing at maximum capacity',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Elite status confirmed',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Simply built different',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Too cool for school',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Certified mood',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Absolutely unhinged (in a good way)',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Chaos coordinator reporting',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Professional over-achiever',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Perfectly imperfect',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}, the one and only`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Certified ${name} moment`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name} supremacy`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Peak ${name} performance`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },

  // === CREATIVE/FUN GREETINGS ===
  {
    text: 'Living rent-free in excellence',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'No thoughts, just vibes',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Immaculate vibes detected',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Energy unmatched',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Powered by caffeine and dreams',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Sending good vibes your way',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Maximum chill achieved',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Absolutely iconic',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Chef kiss energy',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'Sleep is temporary, glory is forever',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name} has the vibe check`,
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
    text: ({ name }) => `${name}, the legend`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, main character energy`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `It's ${name} o'clock`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, absolute unit`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Certified ${name} moment`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, no notes`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Peak ${name} performance`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, vibing immaculately`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `The ${name} experience`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, absolutely goated`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, doing the thing`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `Behold: ${name}`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, simply built different`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, elite status`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}, unstoppable force`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
  },
];
