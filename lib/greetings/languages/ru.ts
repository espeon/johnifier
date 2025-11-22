import { GreetingDefinition } from '../types';

// Russian greetings
import { generalGreetings } from '../ru/general';
import { seasonalGreetings } from '../ru/seasonal';
import { personalityGreetings } from '../ru/personality';
import { techGreetings } from '../ru/tech';
import { incognitoGreetings } from '../ru/incognito';
import { holidayGreetings } from '../ru/holidays';
import { batteryGreetings } from '../ru/battery';
import { timeSpecificGreetings } from '../ru/timespecific';
import { contextualGreetings } from '../ru/contextual';

// Combine Russian greetings
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
