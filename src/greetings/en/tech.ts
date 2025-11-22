import { GreetingDefinition } from '../types';

// Tech/Developer themed greetings (English only, requires techOk=true)
export const techGreetings: GreetingDefinition[] = [
  // Casual tech greetings
  {
    text: 'Hello, World!',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, techOk: true },
  },
  {
    text: 'console.log("Hey there")',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, techOk: true },
  },
  {
    text: 'No bugs detected... yet',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, techOk: true },
  },
  {
    text: 'Git ready for today',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, techOk: true },
  },
  {
    text: 'Compiling greatness...',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: false, techOk: true },
  },
  {
    text: 'Stack overflow? More like stack overflow with vibes',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, techOk: true },
  },
  {
    text: '404: Sleep not found',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, techOk: true },
  },
  {
    text: 'Debugging life, one day at a time',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, techOk: true },
  },
  {
    text: 'Merge conflicts resolved',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: false, techOk: true },
  },
  {
    text: 'Push to production energy',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: false, techOk: true },
  },
  {
    text: 'All tests passing',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: false, techOk: true },
  },
  {
    text: 'Zero errors, pure vibes',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, techOk: true },
  },

  // Tech greetings with name
  {
    text: ({ name }) => `${name}.init()`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `Welcome ${name} // TODO: be awesome`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}: Logged in successfully`,
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: false, techOk: true, hasName: true },
  },

  // Work mode tech greetings
  {
    text: 'sudo make it happen',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, techOk: true },
  },
  {
    text: 'npm run success',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, techOk: true },
  },
  {
    text: 'Building the future...',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, techOk: true },
  },
  {
    text: '10x developer energy',
    mood: 'professional',
    static: { language: 'en', incognito: false, workMode: true, techOk: true },
  },

  // Playful tech greetings
  {
    text: 'Living the dream (or debugging it)',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, techOk: true },
  },
  {
    text: 'Touch grass? Nah, touch code',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, techOk: true },
  },
  {
    text: ({ name }) => `${name} entered the server`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `Achievement unlocked: ${name} appeared`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, techOk: true, hasName: true },
  },
];
