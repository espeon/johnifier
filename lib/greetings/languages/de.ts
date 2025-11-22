import { GreetingDefinition } from '../types';
import { buildGreetingIndex, getMatchingGreetings as getMatching } from '../shared';

// German greetings
import { generalGreetings } from '../de/general';
import { seasonalGreetings } from '../de/seasonal';
import { personalityGreetings } from '../de/personality';
import { techGreetings } from '../de/tech';
import { incognitoGreetings } from '../de/incognito';
import { holidayGreetings } from '../de/holidays';
import { batteryGreetings } from '../de/battery';
import { timeSpecificGreetings } from '../de/timespecific';
import { contextualGreetings } from '../de/contextual';

// Combine German greetings
export const greetings: GreetingDefinition[] = [
  ...generalGreetings,
  ...seasonalGreetings,
  ...personalityGreetings,
  ...techGreetings,
  ...incognitoGreetings,
  ...holidayGreetings,
  ...batteryGreetings,
  ...timeSpecificGreetings,
  ...contextualGreetings,
];

// Build index once at module load time
const greetingIndex = buildGreetingIndex(greetings);

export const getMatchingGreetings = getMatching.bind(null, greetingIndex);

export type { Language, Mood, GreetingDefinition, StaticFilters, DynamicFilters, GreetingResult, TempUnit, GreetingContext, Variant } from '../types';
