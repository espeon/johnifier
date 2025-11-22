import { GreetingDefinition } from '../types';
import { buildGreetingIndex, getMatchingGreetings as getMatching } from '../shared';

// Korean greetings
import { generalGreetings } from '../ko/general';
import { seasonalGreetings } from '../ko/seasonal';
import { personalityGreetings } from '../ko/personality';
import { techGreetings } from '../ko/tech';
import { incognitoGreetings } from '../ko/incognito';
import { holidayGreetings } from '../ko/holidays';
import { batteryGreetings } from '../ko/battery';
import { timeSpecificGreetings } from '../ko/timespecific';
import { contextualGreetings } from '../ko/contextual';

// Combine Korean greetings
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
