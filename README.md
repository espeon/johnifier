# Johnifier

A delightfully contextual greeting system built with React, TypeScript, and Tailwind CSS. Johnifier generates dynamic greetings that adapt to the time of day, day of the week, user preferences, and mood.

## Features

- **Time-Aware**: Greetings adapt to morning, afternoon, evening, and late night periods
- **Day-Specific**: Special messages for each day of the week
- **Context-Sensitive**: Toggle between casual, work, and incognito modes
- **Personalized**: Add your name for personalized greetings
- **Beautiful Design**: Distinctive aesthetic with warm terracotta and deep navy palette
- **Smooth Animations**: Staggered fade-ins and micro-interactions
- **Fully Typed**: Built with TypeScript for type safety

## Demo

The demo application showcases all features with an interactive UI where you can:
- Enter your name for personalized greetings
- Toggle incognito mode for anonymous greetings
- Toggle work mode for professional greetings
- See greetings change based on time of day and mood

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Usage

### Basic Hook Usage

```tsx
import { useGreeting } from './hooks/useGreeting';

function MyComponent() {
  const greeting = useGreeting();

  return <h1>{greeting.text}</h1>;
}
```

### With Name

```tsx
const greeting = useGreeting({ name: 'Alice' });
// Returns: "Good morning, Alice" (time-dependent)
```

### Incognito Mode

```tsx
const greeting = useGreeting({ incognito: true });
// Returns: "Good morning, stranger" or "Ghost in the machine" (time-dependent)
```

### Work Mode

```tsx
const greeting = useGreeting({ workMode: true });
// Returns: "Ready to build?" or "What's on the agenda?" (randomized)
```

### Full API

```tsx
const greeting = useGreeting({
  name: 'John',      // Optional: User's name
  incognito: false,  // Optional: Anonymous mode
  workMode: false    // Optional: Professional mode
});

// Returns:
// {
//   text: string,                                    // The greeting text
//   timeOfDay: 'morning' | 'afternoon' | 'evening' | 'lateNight',
//   mood: 'casual' | 'professional' | 'playful' | 'mysterious'
// }
```

## Customization

### Colors

The color palette is defined in `tailwind.config.js` and can be easily customized:

```js
colors: {
  background: '#0a1628',      // Deep navy background
  surface: '#132238',          // Card surfaces
  'surface-elevated': '#1a2f4a',
  primary: {
    DEFAULT: '#e07856',        // Warm terracotta
    light: '#f5a686',
    dark: '#c85a38',
  },
  // ... more colors
}
```

### Typography

Three font families are used for distinctive typography:

- **Display**: DM Serif Display (headings)
- **Body**: Crimson Pro (body text)
- **Mono**: Fira Code (code snippets)

### Animations

Custom animations are defined in Tailwind config and can be tweaked:

```js
animation: {
  'fade-in': 'fadeIn 1.5s ease-out forwards',
  'slide-down': 'slideDown 0.8s ease-out 0.2s forwards',
  'slide-up': 'slideUp 0.6s ease-out forwards',
  'scale-in': 'scaleIn 0.6s ease-out forwards',
  'shimmer': 'shimmer 3s infinite',
}
```

## Architecture

### Hook Design

The `useGreeting` hook uses a filter-based system for greeting selection:

1. Each greeting has a filter function that determines when it's valid
2. All valid greetings are collected based on current context
3. A random greeting is selected from the valid options
4. The hook returns the greeting text along with metadata (timeOfDay, mood)

This design makes it easy to add new greetings or modify conditions.

### Tailwind + Custom CSS

The project uses a hybrid approach:

- Tailwind for utility classes and easy customization
- Custom CSS layers for complex effects (gradients, shimmer)
- Custom theme extended in `tailwind.config.js`

## Adding New Greetings

To add new greetings, edit `src/hooks/useGreeting.ts`:

```tsx
const greetings: Greeting[] = [
  // Add your greeting
  {
    filter: () => !incognito && hasName && isMorning && isFriday,
    text: `TGIF, ${name}!`,
    mood: 'playful'
  },
  // ... existing greetings
];
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool and dev server

## License

MIT

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.
