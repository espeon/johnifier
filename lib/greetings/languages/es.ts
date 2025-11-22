import { GreetingDefinition } from '../types';
import { buildGreetingIndex, getMatchingGreetings as getMatching } from '../shared';

// Spanish greetings
import { generalGreetings } from '../es/general';
import { seasonalGreetings } from '../es/seasonal';
import { personalityGreetings } from '../es/personality';
import { techGreetings } from '../es/tech';
import { incognitoGreetings } from '../es/incognito';
import { holidayGreetings } from '../es/holidays';
import { batteryGreetings } from '../es/battery';
import { timeSpecificGreetings } from '../es/timespecific';
import { contextualGreetings } from '../es/contextual';

// Combine Spanish greetings
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
