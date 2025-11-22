import { GreetingDefinition, StaticFilters, Language, Mood, DynamicFilters, GreetingResult, TempUnit, GreetingContext, Variant } from './types';

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

// Portuguese greetings
import { generalGreetings as ptGeneralGreetings } from './pt/general';
import { seasonalGreetings as ptSeasonalGreetings } from './pt/seasonal';

// Italian greetings
import { generalGreetings as itGeneralGreetings } from './it/general';
import { seasonalGreetings as itSeasonalGreetings } from './it/seasonal';

// Russian greetings
import { generalGreetings as ruGeneralGreetings } from './ru/general';
import { seasonalGreetings as ruSeasonalGreetings } from './ru/seasonal';

// Combine all greetings
const allGreetings: GreetingDefinition[] = [
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

  // Portuguese
  ...ptGeneralGreetings,
  ...ptSeasonalGreetings,

  // Italian
  ...itGeneralGreetings,
  ...itSeasonalGreetings,

  // Russian
  ...ruGeneralGreetings,
  ...ruSeasonalGreetings,
];

// Build indexed structure for O(1) lookup instead of O(n) filtering
type GreetingIndex = Map<string, GreetingDefinition[]>;

function buildIndexKey(filters: Partial<StaticFilters>): string {
  const {
    language = '*',
    incognito = '*',
    workMode = '*',
    techOk = '*',
    hasName = '*',
    variant = '*',
  } = filters;

  return `${language}:${incognito}:${workMode}:${techOk}:${hasName}:${variant}`;
}

function buildGreetingIndex(): GreetingIndex {
  const index: GreetingIndex = new Map();

  for (const greeting of allGreetings) {
    // Generate all possible key combinations for this greeting
    // A greeting with incognito=false means it matches when incognito is false
    // but a greeting with incognito=undefined means it matches any incognito value

    const languages: (Language | '*')[] = [greeting.static.language];
    const incognitoVals: (boolean | '*')[] =
      greeting.static.incognito === undefined ? [true, false, '*'] : [greeting.static.incognito];
    const workModeVals: (boolean | '*')[] =
      greeting.static.workMode === undefined ? [true, false, '*'] : [greeting.static.workMode];
    const techOkVals: (boolean | '*')[] =
      greeting.static.techOk === undefined ? [true, false, '*'] : [greeting.static.techOk];
    const variantVals: (Variant | '*')[] =
      greeting.static.variant === undefined ? ['standard' as Variant, 'creative' as Variant, '*'] : [greeting.static.variant];

    // Auto-detect hasName if not explicitly set: if text is a function, it likely uses name
    let hasNameVals: (boolean | '*')[];
    if (greeting.static.hasName === undefined) {
      const hasName = typeof greeting.text === 'function';
      hasNameVals = [hasName];
    } else {
      hasNameVals = [greeting.static.hasName];
    }

    // Generate all combinations
    for (const lang of languages) {
      for (const incog of incognitoVals) {
        for (const work of workModeVals) {
          for (const tech of techOkVals) {
            for (const name of hasNameVals) {
              for (const variant of variantVals) {
                const key = buildIndexKey({
                  language: lang as Language,
                  incognito: incog === '*' ? undefined : incog,
                  workMode: work === '*' ? undefined : work,
                  techOk: tech === '*' ? undefined : tech,
                  hasName: name === '*' ? undefined : name,
                  variant: variant === '*' ? undefined : variant,
                });

                if (!index.has(key)) {
                  index.set(key, []);
                }
                index.get(key)!.push(greeting);
              }
            }
          }
        }
      }
    }
  }

  return index;
}

// Build index once at module load time
const greetingIndex = buildGreetingIndex();

export function getMatchingGreetings(filters: StaticFilters): GreetingDefinition[] {
  // When hasName or variant is undefined, we want ALL greetings
  // So we need to merge results from all possible values
  const needsHasNameMerge = filters.hasName === undefined;
  const needsVariantMerge = filters.variant === undefined;

  if (needsHasNameMerge || needsVariantMerge) {
    const results: GreetingDefinition[] = [];
    const hasNameVals = needsHasNameMerge ? [true, false, undefined] : [filters.hasName];
    const variantVals = needsVariantMerge ? ['standard' as Variant, 'creative' as Variant, undefined] : [filters.variant];

    for (const hasName of hasNameVals) {
      for (const variant of variantVals) {
        const key = buildIndexKey({ ...filters, hasName, variant });
        const greetings = greetingIndex.get(key) || [];
        results.push(...greetings);
      }
    }

    // Deduplicate using Set
    const merged = new Set(results);
    return Array.from(merged);
  }

  const key = buildIndexKey(filters);
  return greetingIndex.get(key) || [];
}

export { allGreetings };
export type { Language, Mood, GreetingDefinition, StaticFilters, DynamicFilters, GreetingResult, TempUnit, GreetingContext, Variant };
