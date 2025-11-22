import { GreetingDefinition } from '../types';
import { buildGreetingIndex, getMatchingGreetings as getMatching } from '../shared';

// French greetings
import { generalGreetings } from '../fr/general';
import { seasonalGreetings } from '../fr/seasonal';
import { personalityGreetings } from '../fr/personality';
import { techGreetings } from '../fr/tech';
import { incognitoGreetings } from '../fr/incognito';
import { holidayGreetings } from '../fr/holidays';
import { batteryGreetings } from '../fr/battery';
import { timeSpecificGreetings } from '../fr/timespecific';
import { contextualGreetings } from '../fr/contextual';

// Combine French greetings
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
