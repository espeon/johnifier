import { GreetingDefinition } from '../types';
import { buildGreetingIndex, getMatchingGreetings as getMatching } from '../shared';

// Japanese greetings
import { generalGreetings } from '../ja/general';
import { seasonalGreetings } from '../ja/seasonal';
import { personalityGreetings } from '../ja/personality';
import { techGreetings } from '../ja/tech';
import { incognitoGreetings } from '../ja/incognito';
import { holidayGreetings } from '../ja/holidays';
import { batteryGreetings } from '../ja/battery';
import { timeSpecificGreetings } from '../ja/timespecific';
import { contextualGreetings } from '../ja/contextual';

// Combine Japanese greetings
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
