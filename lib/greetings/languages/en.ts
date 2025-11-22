import { GreetingDefinition } from '../types';

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

export type { Language, Mood, GreetingDefinition, StaticFilters, DynamicFilters, GreetingResult, TempUnit, GreetingContext, Variant } from '../types';
