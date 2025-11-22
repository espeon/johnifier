import { GreetingDefinition, StaticFilters, Language } from './types';
import { techGreetings } from './en/tech';

// Import other greeting files here as they're created
// import { generalGreetings } from './en/general';
// import { seasonalGreetings } from './en/seasonal';
// etc.

// Combine all greetings
const allGreetings: GreetingDefinition[] = [
  ...techGreetings,
  // ...other greeting arrays
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
    const hasNameVals: (boolean | '*')[] =
      greeting.static.hasName === undefined ? [true, false, '*'] : [greeting.static.hasName];

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
  const key = buildIndexKey(filters);
  return greetingIndex.get(key) || [];
}

export { allGreetings };
export * from './types';
