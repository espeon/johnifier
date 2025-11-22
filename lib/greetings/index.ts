import { GreetingDefinition, StaticFilters, Language, Mood, DynamicFilters, GreetingResult, TempUnit, GreetingContext } from './types';

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

// German greetings
import { generalGreetings as deGeneralGreetings } from './de/general';
import { seasonalGreetings as deSeasonalGreetings } from './de/seasonal';

// Japanese greetings
import { generalGreetings as jaGeneralGreetings } from './ja/general';
import { seasonalGreetings as jaSeasonalGreetings } from './ja/seasonal';

// Chinese Simplified greetings
import { generalGreetings as zhHansGeneralGreetings } from './zh-Hans/general';
import { seasonalGreetings as zhHansSeasonalGreetings } from './zh-Hans/seasonal';

// Chinese Traditional greetings
import { generalGreetings as zhHantGeneralGreetings } from './zh-Hant/general';
import { seasonalGreetings as zhHantSeasonalGreetings } from './zh-Hant/seasonal';

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

  // German
  ...deGeneralGreetings,
  ...deSeasonalGreetings,

  // Japanese
  ...jaGeneralGreetings,
  ...jaSeasonalGreetings,

  // Chinese Simplified
  ...zhHansGeneralGreetings,
  ...zhHansSeasonalGreetings,

  // Chinese Traditional
  ...zhHantGeneralGreetings,
  ...zhHantSeasonalGreetings,

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
  } = filters;

  return `${language}:${incognito}:${workMode}:${techOk}:${hasName}`;
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
              const key = buildIndexKey({
                language: lang as Language,
                incognito: incog === '*' ? undefined : incog,
                workMode: work === '*' ? undefined : work,
                techOk: tech === '*' ? undefined : tech,
                hasName: name === '*' ? undefined : name,
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

  return index;
}

// Build index once at module load time
const greetingIndex = buildGreetingIndex();

export function getMatchingGreetings(filters: StaticFilters): GreetingDefinition[] {
  // When hasName is undefined, we want ALL greetings (both with and without names)
  // So we need to merge results from both hasName: true and hasName: false
  if (filters.hasName === undefined) {
    const withNames = greetingIndex.get(buildIndexKey({ ...filters, hasName: true })) || [];
    const withoutNames = greetingIndex.get(buildIndexKey({ ...filters, hasName: false })) || [];
    const anyNames = greetingIndex.get(buildIndexKey(filters)) || [];

    // Merge and deduplicate (using a Set to avoid duplicates)
    const merged = new Set([...withNames, ...withoutNames, ...anyNames]);
    return Array.from(merged);
  }

  const key = buildIndexKey(filters);
  return greetingIndex.get(key) || [];
}

export { allGreetings };
export type { Language, Mood, GreetingDefinition, StaticFilters, DynamicFilters, GreetingResult, TempUnit, GreetingContext };
