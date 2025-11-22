import { GreetingDefinition, StaticFilters, Language, Mood, DynamicFilters, GreetingResult, TempUnit, GreetingContext, Variant } from './types';
import { buildGreetingIndex, getMatchingGreetings as getMatching } from './shared';

// English greetings
import { techGreetings } from './en/tech';
import { generalGreetings as enGeneralGreetings } from './en/general';
import { seasonalGreetings as enSeasonalGreetings } from './en/seasonal';
import { contextualGreetings as enContextualGreetings } from './en/contextual';
import { personalityGreetings as enPersonalityGreetings } from './en/personality';
import { incognitoGreetings as enIncognitoGreetings } from './en/incognito';
import { holidayGreetings as enHolidayGreetings } from './en/holidays';
import { batteryGreetings as enBatteryGreetings } from './en/battery';
import { timeSpecificGreetings as enTimeSpecificGreetings } from './en/timespecific';

// Spanish greetings
import { generalGreetings as esGeneralGreetings } from './es/general';
import { seasonalGreetings as esSeasonalGreetings } from './es/seasonal';
import { personalityGreetings as esPersonalityGreetings } from './es/personality';
import { techGreetings as esTechGreetings } from './es/tech';
import { incognitoGreetings as esIncognitoGreetings } from './es/incognito';
import { holidayGreetings as esHolidayGreetings } from './es/holidays';
import { batteryGreetings as esBatteryGreetings } from './es/battery';
import { timeSpecificGreetings as esTimeSpecificGreetings } from './es/timespecific';
import { contextualGreetings as esContextualGreetings } from './es/contextual';

// French greetings
import { generalGreetings as frGeneralGreetings } from './fr/general';
import { seasonalGreetings as frSeasonalGreetings } from './fr/seasonal';
import { personalityGreetings as frPersonalityGreetings } from './fr/personality';
import { techGreetings as frTechGreetings } from './fr/tech';
import { incognitoGreetings as frIncognitoGreetings } from './fr/incognito';
import { holidayGreetings as frHolidayGreetings } from './fr/holidays';
import { batteryGreetings as frBatteryGreetings } from './fr/battery';
import { timeSpecificGreetings as frTimeSpecificGreetings } from './fr/timespecific';
import { contextualGreetings as frContextualGreetings } from './fr/contextual';

// German greetings
import { generalGreetings as deGeneralGreetings } from './de/general';
import { seasonalGreetings as deSeasonalGreetings } from './de/seasonal';
import { personalityGreetings as dePersonalityGreetings } from './de/personality';
import { techGreetings as deTechGreetings } from './de/tech';
import { incognitoGreetings as deIncognitoGreetings } from './de/incognito';
import { holidayGreetings as deHolidayGreetings } from './de/holidays';
import { batteryGreetings as deBatteryGreetings } from './de/battery';
import { timeSpecificGreetings as deTimeSpecificGreetings } from './de/timespecific';
import { contextualGreetings as deContextualGreetings } from './de/contextual';

// Japanese greetings
import { generalGreetings as jaGeneralGreetings } from './ja/general';
import { seasonalGreetings as jaSeasonalGreetings } from './ja/seasonal';
import { personalityGreetings as jaPersonalityGreetings } from './ja/personality';
import { techGreetings as jaTechGreetings } from './ja/tech';
import { incognitoGreetings as jaIncognitoGreetings } from './ja/incognito';
import { holidayGreetings as jaHolidayGreetings } from './ja/holidays';
import { batteryGreetings as jaBatteryGreetings } from './ja/battery';
import { timeSpecificGreetings as jaTimeSpecificGreetings } from './ja/timespecific';
import { contextualGreetings as jaContextualGreetings } from './ja/contextual';

// Chinese Simplified greetings
import { generalGreetings as zhHansGeneralGreetings } from './zh-Hans/general';
import { seasonalGreetings as zhHansSeasonalGreetings } from './zh-Hans/seasonal';
import { personalityGreetings as zhHansPersonalityGreetings } from './zh-Hans/personality';
import { techGreetings as zhHansTechGreetings } from './zh-Hans/tech';
import { incognitoGreetings as zhHansIncognitoGreetings } from './zh-Hans/incognito';
import { holidayGreetings as zhHansHolidayGreetings } from './zh-Hans/holidays';
import { batteryGreetings as zhHansBatteryGreetings } from './zh-Hans/battery';
import { timeSpecificGreetings as zhHansTimeSpecificGreetings } from './zh-Hans/timespecific';
import { contextualGreetings as zhHansContextualGreetings } from './zh-Hans/contextual';

// Chinese Traditional greetings
import { generalGreetings as zhHantGeneralGreetings } from './zh-Hant/general';
import { seasonalGreetings as zhHantSeasonalGreetings } from './zh-Hant/seasonal';
import { personalityGreetings as zhHantPersonalityGreetings } from './zh-Hant/personality';
import { techGreetings as zhHantTechGreetings } from './zh-Hant/tech';
import { incognitoGreetings as zhHantIncognitoGreetings } from './zh-Hant/incognito';
import { holidayGreetings as zhHantHolidayGreetings } from './zh-Hant/holidays';
import { batteryGreetings as zhHantBatteryGreetings } from './zh-Hant/battery';
import { timeSpecificGreetings as zhHantTimeSpecificGreetings } from './zh-Hant/timespecific';
import { contextualGreetings as zhHantContextualGreetings } from './zh-Hant/contextual';

// Korean greetings
import { generalGreetings as koGeneralGreetings } from './ko/general';
import { seasonalGreetings as koSeasonalGreetings } from './ko/seasonal';
import { personalityGreetings as koPersonalityGreetings } from './ko/personality';
import { techGreetings as koTechGreetings } from './ko/tech';
import { incognitoGreetings as koIncognitoGreetings } from './ko/incognito';
import { holidayGreetings as koHolidayGreetings } from './ko/holidays';
import { batteryGreetings as koBatteryGreetings } from './ko/battery';
import { timeSpecificGreetings as koTimeSpecificGreetings } from './ko/timespecific';
import { contextualGreetings as koContextualGreetings } from './ko/contextual';

// Portuguese greetings
import { generalGreetings as ptGeneralGreetings } from './pt/general';
import { seasonalGreetings as ptSeasonalGreetings } from './pt/seasonal';
import { personalityGreetings as ptPersonalityGreetings } from './pt/personality';
import { techGreetings as ptTechGreetings } from './pt/tech';
import { incognitoGreetings as ptIncognitoGreetings } from './pt/incognito';
import { holidayGreetings as ptHolidayGreetings } from './pt/holidays';
import { batteryGreetings as ptBatteryGreetings } from './pt/battery';
import { timeSpecificGreetings as ptTimeSpecificGreetings } from './pt/timespecific';
import { contextualGreetings as ptContextualGreetings } from './pt/contextual';

// Italian greetings
import { generalGreetings as itGeneralGreetings } from './it/general';
import { seasonalGreetings as itSeasonalGreetings } from './it/seasonal';
import { personalityGreetings as itPersonalityGreetings } from './it/personality';
import { techGreetings as itTechGreetings } from './it/tech';
import { incognitoGreetings as itIncognitoGreetings } from './it/incognito';
import { holidayGreetings as itHolidayGreetings } from './it/holidays';
import { batteryGreetings as itBatteryGreetings } from './it/battery';
import { timeSpecificGreetings as itTimeSpecificGreetings } from './it/timespecific';
import { contextualGreetings as itContextualGreetings } from './it/contextual';

// Russian greetings
import { generalGreetings as ruGeneralGreetings } from './ru/general';
import { seasonalGreetings as ruSeasonalGreetings } from './ru/seasonal';
import { personalityGreetings as ruPersonalityGreetings } from './ru/personality';
import { techGreetings as ruTechGreetings } from './ru/tech';
import { incognitoGreetings as ruIncognitoGreetings } from './ru/incognito';
import { holidayGreetings as ruHolidayGreetings } from './ru/holidays';
import { batteryGreetings as ruBatteryGreetings } from './ru/battery';
import { timeSpecificGreetings as ruTimeSpecificGreetings } from './ru/timespecific';
import { contextualGreetings as ruContextualGreetings } from './ru/contextual';

// Combine all greetings
export const allGreetings: GreetingDefinition[] = [
  // English
  ...techGreetings,
  ...enGeneralGreetings,
  ...enSeasonalGreetings,
  ...enContextualGreetings,
  ...enPersonalityGreetings,
  ...enIncognitoGreetings,
  ...enHolidayGreetings,
  ...enBatteryGreetings,
  ...enTimeSpecificGreetings,

  // Spanish
  ...esGeneralGreetings,
  ...esSeasonalGreetings,
  ...esPersonalityGreetings,
  ...esTechGreetings,
  ...esIncognitoGreetings,
  ...esHolidayGreetings,
  ...esBatteryGreetings,
  ...esTimeSpecificGreetings,
  ...esContextualGreetings,

  // French
  ...frGeneralGreetings,
  ...frSeasonalGreetings,
  ...frPersonalityGreetings,
  ...frTechGreetings,
  ...frIncognitoGreetings,
  ...frHolidayGreetings,
  ...frBatteryGreetings,
  ...frTimeSpecificGreetings,
  ...frContextualGreetings,

  // German
  ...deGeneralGreetings,
  ...deSeasonalGreetings,
  ...dePersonalityGreetings,
  ...deTechGreetings,
  ...deIncognitoGreetings,
  ...deHolidayGreetings,
  ...deBatteryGreetings,
  ...deTimeSpecificGreetings,
  ...deContextualGreetings,

  // Japanese
  ...jaGeneralGreetings,
  ...jaSeasonalGreetings,
  ...jaPersonalityGreetings,
  ...jaTechGreetings,
  ...jaIncognitoGreetings,
  ...jaHolidayGreetings,
  ...jaBatteryGreetings,
  ...jaTimeSpecificGreetings,
  ...jaContextualGreetings,

  // Chinese Simplified
  ...zhHansGeneralGreetings,
  ...zhHansSeasonalGreetings,
  ...zhHansPersonalityGreetings,
  ...zhHansTechGreetings,
  ...zhHansIncognitoGreetings,
  ...zhHansHolidayGreetings,
  ...zhHansBatteryGreetings,
  ...zhHansTimeSpecificGreetings,
  ...zhHansContextualGreetings,

  // Chinese Traditional
  ...zhHantGeneralGreetings,
  ...zhHantSeasonalGreetings,
  ...zhHantPersonalityGreetings,
  ...zhHantTechGreetings,
  ...zhHantIncognitoGreetings,
  ...zhHantHolidayGreetings,
  ...zhHantBatteryGreetings,
  ...zhHantTimeSpecificGreetings,
  ...zhHantContextualGreetings,

  // Korean
  ...koGeneralGreetings,
  ...koSeasonalGreetings,
  ...koPersonalityGreetings,
  ...koTechGreetings,
  ...koIncognitoGreetings,
  ...koHolidayGreetings,
  ...koBatteryGreetings,
  ...koTimeSpecificGreetings,
  ...koContextualGreetings,

  // Portuguese
  ...ptGeneralGreetings,
  ...ptSeasonalGreetings,
  ...ptPersonalityGreetings,
  ...ptTechGreetings,
  ...ptIncognitoGreetings,
  ...ptHolidayGreetings,
  ...ptBatteryGreetings,
  ...ptTimeSpecificGreetings,
  ...ptContextualGreetings,

  // Italian
  ...itGeneralGreetings,
  ...itSeasonalGreetings,
  ...itPersonalityGreetings,
  ...itTechGreetings,
  ...itIncognitoGreetings,
  ...itHolidayGreetings,
  ...itBatteryGreetings,
  ...itTimeSpecificGreetings,
  ...itContextualGreetings,

  // Russian
  ...ruGeneralGreetings,
  ...ruSeasonalGreetings,
  ...ruPersonalityGreetings,
  ...ruTechGreetings,
  ...ruIncognitoGreetings,
  ...ruHolidayGreetings,
  ...ruBatteryGreetings,
  ...ruTimeSpecificGreetings,
  ...ruContextualGreetings,
];

// Build index once at module load time
const greetingIndex = buildGreetingIndex(allGreetings);

export const getMatchingGreetings = getMatching.bind(null, greetingIndex);

export type { Language, Mood, GreetingDefinition, StaticFilters, DynamicFilters, GreetingResult, TempUnit, GreetingContext, Variant };
