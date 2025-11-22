# Johnifier

> A delightfully contextual greeting system with 1100+ greetings in 5 languages

Johnifier is a lightweight, framework-agnostic TypeScript library that provides contextual, personalized greetings based on time of day, language, weather, battery level, holidays, and more.

[![npm version](https://img.shields.io/npm/v/johnifier.svg)](https://www.npmjs.com/package/johnifier)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- 🌍 **1100+ Greetings** across 5 languages (English, Spanish, French, German, Japanese)
- 🎭 **Context-Aware** - Adapts to time, weather, battery, holidays, and user preferences
- 🔒 **Privacy Mode** - Special incognito greetings for anonymous browsing
- ⚡ **Performance** - O(1) greeting lookups via indexed data structure
- 🎨 **Customizable** - Filter by mood, work mode, tech preferences
- 📦 **Framework Agnostic** - Pure TypeScript core with React bindings
- 🌳 **Tree-Shakeable** - ESM and CJS builds for optimal bundle size
- 📖 **TypeScript** - Full type safety with declaration files

## Installation

```bash
npm install johnifier
```

## Quick Start

### React

```tsx
import { useEnhancedGreeting, useEnhancedContext } from 'johnifier/react';

function App() {
  const context = useEnhancedContext();
  const greeting = useEnhancedGreeting({
    name: 'Alice',
    language: 'en',
    techOk: true,
    battery: context.battery,
    weather: context.weather,
    tempUnit: 'C'
  });

  return <h1>{greeting.text}</h1>;
}
```

### Vanilla JavaScript/TypeScript

```typescript
import { selectGreeting } from 'johnifier';

const greeting = selectGreeting({
  name: 'Alice',
  language: 'en',
  techOk: true,
  battery: 85,
  weather: { condition: 'sunny', temp: 22 },
  tempUnit: 'C'
});

console.log(greeting.text); // "Good morning, Alice!"
console.log(greeting.mood); // "casual"
console.log(greeting.timeOfDay); // "morning"
```

## API Reference

### Core Library (`johnifier`)

#### `selectGreeting(options)`

Selects an appropriate greeting based on filters and context.

**Parameters:**
- `name?: string` - User's name for personalized greetings
- `incognito?: boolean` - Privacy mode (default: `false`)
- `workMode?: boolean` - Professional mode (default: `false`)
- `techOk?: boolean` - Allow tech-themed greetings (default: `false`)
- `language?: Language` - Language code: `'en' | 'es' | 'fr' | 'de' | 'ja'` (default: `'en'`)
- `battery?: number | null` - Device battery percentage (0-100)
- `weather?: { condition: string; temp: number } | null` - Weather data
- `tempUnit?: TempUnit` - Temperature unit: `'C' | 'F'` (default: `'C'`)
- `randomSeed?: number` - Seed for deterministic selection

**Returns:**
```typescript
{
  text: string;           // The greeting message
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'lateNight';
  mood: 'casual' | 'professional' | 'playful' | 'mysterious';
  allGreetings: string[]; // All currently valid greetings
}
```

### React Hooks (`johnifier/react`)

#### `useEnhancedGreeting(props)`

React hook for selecting and displaying greetings. Automatically re-randomizes when dependencies change.

**Props:**
Same as `selectGreeting()` options, plus:
- `refreshKey?: number` - Change to force new greeting selection

**Returns:** Same as `selectGreeting()`

#### `useEnhancedContext()`

Fetches enhanced context information (battery, weather, location).

**Returns:**
```typescript
{
  battery: number | null;
  weather: { condition: string; temp: number } | null;
  isLoading: boolean;
}
```

### Utility Functions

```typescript
import {
  getBatteryLevel,
  getWeather,
  getLocation,
  getTimeZone,
  isSlowConnection
} from 'johnifier/react';

const battery = await getBatteryLevel();     // Returns 0-100 or null
const location = await getLocation();        // Returns { lat, lon } or null
const weather = await getWeather(lat, lon);  // Returns weather data or null
const timezone = getTimeZone();              // Returns IANA timezone string
const isSlow = isSlowConnection();           // Returns boolean
```

## Greeting Categories

### Time-Based
- **Morning** (5am-12pm): "Good morning!", "Rise and shine"
- **Afternoon** (12pm-6pm): "Good afternoon!", "Midday vibes"
- **Evening** (6pm-12am): "Good evening!", "Night mode activated"
- **Late Night** (12am-5am): "Burning the midnight oil", "3AM energy"

### Contextual
- **Weather**: "Bundle up! (12°C)", "Perfect sunny day"
- **Battery**: "Fully charged (95%)", "Low power mode (15%) but high vibes"
- **Holidays**: "Happy Halloween! 🎃", "Merry Christmas! 🎄", "May the 4th be with you"
- **Time-Specific**: "Coffee time ☕", "Lunch break vibes", "Golden hour energy"

### Modes
- **Incognito**: "Hello, mysterious visitor", "Your secret is safe with us"
- **Work Mode**: "Let's get to work", "Professional mode: activated"
- **Tech Mode**: "Hello, World!", "console.log('Hey there')", "Git ready for today"

### Languages
- **English**: 800+ greetings
- **Spanish**: 100+ greetings
- **French**: 100+ greetings
- **German**: 100+ greetings
- **Japanese**: 100+ greetings

## Examples

### Incognito Mode
```typescript
const greeting = selectGreeting({ incognito: true });
// "Good morning, mysterious stranger"
// "Privacy mode engaged"
// "The shadows greet you"
```

### Tech Greetings
```typescript
const greeting = selectGreeting({
  name: 'Bob',
  techOk: true
});
// "Bob.init()"
// "console.log('Hey there')"
// "Hello, World!"
```

### Holiday Greetings
```typescript
// On Halloween (October 31st)
const greeting = selectGreeting({});
// "Happy Halloween! 🎃"
// "Spooky season vibes"

// On Star Wars Day (May 4th)
const greeting = selectGreeting({ name: 'Luke' });
// "May the 4th be with you, Luke"
```

### Battery-Aware
```typescript
const greeting = selectGreeting({ battery: 15 });
// "Running on fumes at 15%"
// "Charge soon, legend"

const greeting = selectGreeting({ battery: 69 });
// "Nice battery level 😏"
```

### Work Mode
```typescript
const greeting = selectGreeting({ workMode: true });
// "Let's get to work"
// "Time to crush it"
// "Professional mode: activated"
```

## Development

```bash
# Install dependencies
npm install

# Run demo app
npm run dev

# Build library
npm run build:lib

# Build demo
npm run build:demo

# Build both
npm run build
```

## Project Structure

```
johnifier/
├── lib/                 # Framework-agnostic core
│   ├── greetings/      # Greeting definitions
│   │   ├── en/         # English greetings
│   │   ├── es/         # Spanish greetings
│   │   ├── fr/         # French greetings
│   │   ├── de/         # German greetings
│   │   ├── ja/         # Japanese greetings
│   │   ├── index.ts    # Greeting index & lookup
│   │   └── types.ts    # Type definitions
│   ├── index.ts        # Main exports
│   └── utils.ts        # Selection logic
├── lib-react/          # React bindings
│   ├── hooks/          # React hooks
│   ├── utils/          # Context utilities
│   └── index.ts        # React exports
├── demo/               # Demo application
└── dist/               # Build output
```

## Contributing

We welcome contributions! Here's how to add greetings:

### Adding a New Greeting

1. Choose the appropriate category file in `lib/greetings/en/`
2. Add your greeting following this pattern:

```typescript
{
  text: 'Your greeting here',
  mood: 'casual', // 'casual' | 'professional' | 'playful' | 'mysterious'
  static: {
    language: 'en',
    incognito: false,  // true = incognito only, false = normal only, undefined = both
    workMode: false,   // true = work mode only
    techOk: false,     // true = requires tech permission
    hasName: false,    // true = personalized greeting with name
  },
  dynamic: ({ hour, day, month, battery, weather }) => {
    // Optional: Return true if greeting should show based on context
    return hour !== undefined && hour >= 9 && hour < 12;
  }
}
```

### With Name Parameter

```typescript
{
  text: ({ name }) => `Good morning, ${name}!`,
  mood: 'casual',
  static: {
    language: 'en',
    incognito: false,
    hasName: true, // Required for name greetings
  },
  dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
}
```

### With Battery/Weather Context

```typescript
{
  text: ({ battery }) => `Battery at ${battery}%, vibes at 100%`,
  mood: 'playful',
  static: { language: 'en', incognito: false },
  dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
}

{
  text: ({ weather, tempUnit }) => {
    if (!weather) return 'Weather unknown';
    const temp = tempUnit === 'F' ? Math.round(weather.temp * 9/5 + 32) : weather.temp;
    return `Bundle up! (${temp}°${tempUnit})`;
  },
  mood: 'casual',
  static: { language: 'en', incognito: false },
  dynamic: ({ weather }) => weather?.temp !== undefined && weather.temp < 10,
}
```

### Adding a New Language

1. Create directory: `lib/greetings/[lang-code]/`
2. Add `general.ts` and `seasonal.ts` files
3. Import in `lib/greetings/index.ts`
4. Add to `allGreetings` array
5. Add language code to `Language` type in `types.ts`

### Guidelines

- Keep greetings friendly and inclusive
- Test with different contexts (time, battery, weather)
- Include both simple and personalized variants
- Maintain appropriate mood for context
- Avoid offensive or controversial content

## License

MIT © Your Name

## Credits

- Weather API: [Open-Meteo](https://open-meteo.com/)
- Inspired by the need for delightful user experiences

---

**[View Demo](https://your-demo-url.com)** • **[Report Bug](https://github.com/yourusername/johnifier/issues)** • **[Request Feature](https://github.com/yourusername/johnifier/issues)**
