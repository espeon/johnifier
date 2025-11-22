import { GreetingDefinition, StaticFilters, Language, Variant } from './types';

// Build indexed structure for O(1) lookup instead of O(n) filtering
export type GreetingIndex = Map<string, GreetingDefinition[]>;

export function buildIndexKey(filters: Partial<StaticFilters>): string {
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

export function buildGreetingIndex(greetings: GreetingDefinition[]): GreetingIndex {
  const index: GreetingIndex = new Map();

  for (const greeting of greetings) {
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

export function getMatchingGreetings(
  index: GreetingIndex,
  filters: StaticFilters
): GreetingDefinition[] {
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
        const greetings = index.get(key) || [];
        results.push(...greetings);
      }
    }

    // Deduplicate using Set
    const merged = new Set(results);
    return Array.from(merged);
  }

  const key = buildIndexKey(filters);
  return index.get(key) || [];
}
