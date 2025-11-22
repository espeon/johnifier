import { GreetingDefinition } from '../types';

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


export type { Language, Mood, GreetingDefinition, StaticFilters, DynamicFilters, GreetingResult, TempUnit, GreetingContext, Variant } from '../types';
