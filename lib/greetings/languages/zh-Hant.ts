import { GreetingDefinition } from '../types';
import { buildGreetingIndex, getMatchingGreetings as getMatching } from '../shared';

// Chinese Traditional greetings
import { generalGreetings } from '../zh-Hant/general';
import { seasonalGreetings } from '../zh-Hant/seasonal';
import { personalityGreetings } from '../zh-Hant/personality';
import { techGreetings } from '../zh-Hant/tech';
import { incognitoGreetings } from '../zh-Hant/incognito';
import { holidayGreetings } from '../zh-Hant/holidays';
import { batteryGreetings } from '../zh-Hant/battery';
import { timeSpecificGreetings } from '../zh-Hant/timespecific';
import { contextualGreetings } from '../zh-Hant/contextual';

// Combine Chinese Traditional greetings
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
