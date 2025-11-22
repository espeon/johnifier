import { GreetingDefinition } from '../types';

// Italian greetings
import { generalGreetings } from '../it/general';
import { seasonalGreetings } from '../it/seasonal';
import { personalityGreetings } from '../it/personality';
import { techGreetings } from '../it/tech';
import { incognitoGreetings } from '../it/incognito';
import { holidayGreetings } from '../it/holidays';
import { batteryGreetings } from '../it/battery';
import { timeSpecificGreetings } from '../it/timespecific';
import { contextualGreetings } from '../it/contextual';

// Combine Italian greetings
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
