import { GreetingDefinition } from '../types';
import { buildGreetingIndex, getMatchingGreetings as getMatching } from '../shared';

// English greetings
import { techGreetings } from '../en/tech';
import { generalGreetings } from '../en/general';
import { seasonalGreetings } from '../en/seasonal';
import { contextualGreetings } from '../en/contextual';
import { personalityGreetings } from '../en/personality';
import { incognitoGreetings } from '../en/incognito';
import { holidayGreetings } from '../en/holidays';
import { batteryGreetings } from '../en/battery';
import { timeSpecificGreetings } from '../en/timespecific';

// Combine English greetings
export const greetings: GreetingDefinition[] = [
  ...techGreetings,
  ...generalGreetings,
  ...seasonalGreetings,
  ...contextualGreetings,
  ...personalityGreetings,
  ...incognitoGreetings,
  ...holidayGreetings,
  ...batteryGreetings,
  ...timeSpecificGreetings,
];

// Build index once at module load time
const greetingIndex = buildGreetingIndex(greetings);

export const getMatchingGreetings = getMatching.bind(null, greetingIndex);

export type { Language, Mood, GreetingDefinition, StaticFilters, DynamicFilters, GreetingResult, TempUnit, GreetingContext, Variant } from '../types';
