# Greeting System

This document explains how to add new greetings, languages, and categories to the Johnifier greeting system.

## Architecture Overview

The greeting system uses an **indexed lookup structure** for O(1) performance instead of filtering 950+ greetings every render.

- **Static filters** (language, workMode, techOk, incognito, hasName) are pre-indexed at module load
- **Dynamic filters** (time, battery, weather) are evaluated at runtime
- Greetings are organized by language and category in separate files

## File Structure

```
src/greetings/
├── types.ts              # Shared TypeScript types
├── index.ts              # Builds greeting index and exports lookup function
├── greetings.md          # This documentation file
└── [language]/           # Two-letter language code (en, es, fr, de, ja)
    ├── general.ts        # ✅ REQUIRED - Basic time-based greetings
    ├── seasonal.ts       # ⭐ RECOMMENDED - Seasonal/monthly/weekday greetings
    ├── contextual.ts     # Optional - Battery/weather greetings
    ├── personality.ts    # Optional - Motivational/fun greetings
    └── tech.ts           # Optional - Tech/developer greetings (requires techOk=true)
```

## Adding a New Language

### Minimum Requirements

To add a new language, you **must** create at minimum:

1. **`[language]/general.ts`** - Basic time-of-day greetings

This provides morning, afternoon, evening, and late night greetings both with and without names.

### Recommended Categories

For a complete experience, also add:

2. **`[language]/seasonal.ts`** - Seasonal, monthly, and weekday greetings

### Optional Categories

Enhance your language with:

3. **`[language]/contextual.ts`** - Battery and weather-aware greetings
4. **`[language]/personality.ts`** - Motivational, work mode, and fun greetings
5. **`[language]/tech.ts`** - Tech/developer themed greetings (only shown when techOk=true)

## File Template

### Basic Template Structure

```typescript
import { GreetingDefinition } from '../types';

export const [category]Greetings: GreetingDefinition[] = [
  // Your greetings here
];
```

### Greeting Definition Format

```typescript
{
  text: string | ((name?: string) => string),  // The greeting text or function
  mood: 'casual' | 'professional' | 'playful' | 'mysterious',
  static: {
    language: 'en',           // Two-letter language code
    incognito?: boolean,      // undefined = any, false = not incognito, true = incognito only
    workMode?: boolean,       // undefined = any, false = casual, true = work mode
    techOk?: boolean,         // undefined = any, false = no tech, true = tech allowed
    hasName?: boolean,        // undefined = any, false = no name, true = has name
  },
  dynamic?: (filters) => boolean,  // Optional runtime filter
}
```

### Example: Simple Greeting (No Dynamic Filter)

```typescript
{
  text: 'Hello!',
  mood: 'casual',
  static: {
    language: 'en',
    incognito: false,
    workMode: false,
  },
}
```

### Example: Greeting with Name

```typescript
{
  text: (name) => `Good morning, ${name}!`,
  mood: 'casual',
  static: {
    language: 'en',
    incognito: false,
    workMode: false,
    hasName: true,  // Only shown when user has a name
  },
  dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,  // Morning only
}
```

### Example: Time-Based Greeting

```typescript
{
  text: 'Good morning!',
  mood: 'casual',
  static: {
    language: 'en',
    incognito: false,
    workMode: false,
  },
  dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,  // 5am-12pm
}
```

### Example: Day-Specific Greeting

```typescript
{
  text: 'Happy Friday!',
  mood: 'playful',
  static: {
    language: 'en',
    incognito: false,
    workMode: false,
  },
  dynamic: ({ day }) => day === 5,  // Friday only
}
```

### Example: Seasonal Greeting

```typescript
{
  text: 'Winter vibes',
  mood: 'casual',
  static: {
    language: 'en',
    incognito: false,
    workMode: false,
  },
  dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),  // Dec, Jan, Feb
}
```

### Example: Battery-Level Greeting

```typescript
{
  text: 'Battery looking good!',
  mood: 'casual',
  static: {
    language: 'en',
    incognito: false,
  },
  dynamic: ({ battery }) => battery !== null && battery >= 80,  // 80%+ battery
}
```

## Dynamic Filter Reference

The `dynamic` function receives a `DynamicFilters` object with these properties:

```typescript
{
  hour?: number;     // 0-23 (current hour)
  day?: number;      // 0-6 (0=Sunday, 1=Monday, ..., 6=Saturday)
  month?: number;    // 0-11 (0=January, 1=February, ..., 11=December)
  battery?: number | null;  // 0-100 or null if unavailable
  weather?: { condition: string; temp: number } | null;
}
```

### Common Time Checks

```typescript
// Time of day
isMorning:       ({ hour }) => hour !== undefined && hour >= 5 && hour < 12
isAfternoon:     ({ hour }) => hour !== undefined && hour >= 12 && hour < 18
isEvening:       ({ hour }) => hour !== undefined && hour >= 18 && hour < 24
isLateNight:     ({ hour }) => hour !== undefined && hour >= 0 && hour < 5
isEarlyMorning:  ({ hour }) => hour !== undefined && hour >= 5 && hour < 8
isMidMorning:    ({ hour }) => hour !== undefined && hour >= 8 && hour < 12
isNoon:          ({ hour }) => hour !== undefined && hour >= 11 && hour < 14
isLateAfternoon: ({ hour }) => hour !== undefined && hour >= 15 && hour < 18
isEarlyEvening:  ({ hour }) => hour !== undefined && hour >= 18 && hour < 21
isMidnight:      ({ hour }) => hour !== undefined && (hour >= 23 || hour < 2)
```

### Common Day Checks

```typescript
// Days of week
isSunday:    ({ day }) => day === 0
isMonday:    ({ day }) => day === 1
isTuesday:   ({ day }) => day === 2
isWednesday: ({ day }) => day === 3
isThursday:  ({ day }) => day === 4
isFriday:    ({ day }) => day === 5
isSaturday:  ({ day }) => day === 6
isWeekend:   ({ day }) => day === 0 || day === 6
isWeekday:   ({ day }) => day !== undefined && day >= 1 && day <= 5
```

### Common Month/Season Checks

```typescript
// Months
isJanuary:   ({ month }) => month === 0
isFebruary:  ({ month }) => month === 1
isMarch:     ({ month }) => month === 2
isApril:     ({ month }) => month === 3
isMay:       ({ month }) => month === 4
isJune:      ({ month }) => month === 5
isJuly:      ({ month }) => month === 6
isAugust:    ({ month }) => month === 7
isSeptember: ({ month }) => month === 8
isOctober:   ({ month }) => month === 9
isNovember:  ({ month }) => month === 10
isDecember:  ({ month }) => month === 11

// Seasons (Northern Hemisphere)
isWinter: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1)
isSpring: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4)
isSummer: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7)
isFall:   ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10)
```

### Battery Checks

```typescript
// Battery levels
isCriticalBattery: ({ battery }) => battery !== null && battery <= 10
isLowBattery:      ({ battery }) => battery !== null && battery > 10 && battery <= 20
isFullBattery:     ({ battery }) => battery !== null && battery === 100
isCharged:         ({ battery }) => battery !== null && battery >= 80
```

## Adding Your Language to the Index

After creating your greeting files, add them to `src/greetings/index.ts`:

```typescript
// 1. Import your greeting files
import { generalGreetings as [lang]GeneralGreetings } from './[lang]/general';
import { seasonalGreetings as [lang]SeasonalGreetings } from './[lang]/seasonal';
// ... import other categories

// 2. Add to allGreetings array
const allGreetings: GreetingDefinition[] = [
  // ... existing languages

  // Your language
  ...[lang]GeneralGreetings,
  ...[lang]SeasonalGreetings,
  // ... other categories
];
```

The greeting index will automatically build and your greetings will be available!

## Best Practices

1. **Start small**: Begin with just `general.ts` with basic time greetings
2. **Test as you go**: Build the project (`npm run build`) to catch TypeScript errors
3. **Use dynamic filters wisely**: Only add dynamic filters when needed (time/battery/weather)
4. **Maintain consistency**: Follow the mood conventions (casual, professional, playful, mysterious)
5. **Consider culture**: Seasonal greetings may differ by hemisphere and cultural context
6. **Name support**: Always create greeting pairs for with/without names when possible

## Example: Adding Portuguese (pt)

1. Create `/src/greetings/pt/general.ts`:

```typescript
import { GreetingDefinition } from '../types';

export const generalGreetings: GreetingDefinition[] = [
  // Morning
  {
    text: 'Bom dia!',
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: (name) => `Bom dia, ${name}!`,
    mood: 'casual',
    static: { language: 'pt', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  // ... more greetings
];
```

2. Add to `src/greetings/index.ts`:

```typescript
import { generalGreetings as ptGeneralGreetings } from './pt/general';

const allGreetings: GreetingDefinition[] = [
  // ... existing languages
  ...ptGeneralGreetings,
];
```

3. Add 'pt' to the Language type in `src/greetings/types.ts`:

```typescript
export type Language = 'en' | 'es' | 'fr' | 'de' | 'ja' | 'pt';
```

4. Build and test: `npm run build`

## Questions?

Check the existing language files for examples:
- `src/greetings/en/` - Most comprehensive examples
- `src/greetings/es/` - Good minimal example
- `src/greetings/ja/` - Non-Latin script example
