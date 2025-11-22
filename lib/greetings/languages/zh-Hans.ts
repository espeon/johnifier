import { GreetingDefinition } from '../types';

// Chinese Simplified greetings
import { generalGreetings } from '../zh-Hans/general';
import { seasonalGreetings } from '../zh-Hans/seasonal';
import { personalityGreetings } from '../zh-Hans/personality';
import { techGreetings } from '../zh-Hans/tech';
import { incognitoGreetings } from '../zh-Hans/incognito';
import { holidayGreetings } from '../zh-Hans/holidays';
import { batteryGreetings } from '../zh-Hans/battery';
import { timeSpecificGreetings } from '../zh-Hans/timespecific';
import { contextualGreetings } from '../zh-Hans/contextual';

// Combine Chinese Simplified greetings
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
