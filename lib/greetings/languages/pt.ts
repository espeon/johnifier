import { GreetingDefinition } from '../types';

// Portuguese greetings
import { generalGreetings } from '../pt/general';
import { seasonalGreetings } from '../pt/seasonal';
import { personalityGreetings } from '../pt/personality';
import { techGreetings } from '../pt/tech';
import { incognitoGreetings } from '../pt/incognito';
import { holidayGreetings } from '../pt/holidays';
import { batteryGreetings } from '../pt/battery';
import { timeSpecificGreetings } from '../pt/timespecific';
import { contextualGreetings } from '../pt/contextual';

// Combine Portuguese greetings
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
