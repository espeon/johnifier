import { useState, useEffect, useMemo } from 'react';
import { selectGreeting } from '../../lib/utils';
import type { Language, TempUnit, GreetingResult, Variant, GreetingDefinition } from '../../lib/greetings/types';

export interface EnhancedGreetingProps {
  greetings: GreetingDefinition[];
  name?: string;
  incognito?: boolean;
  workMode?: boolean;
  techOk?: boolean;
  language?: Language;
  battery?: number | null;
  weather?: { condition: string; temp: number } | null;
  tempUnit?: TempUnit;
  refreshKey?: number;
  hasNameFilter?: boolean;
  variant?: Variant;
  onlyDynamic?: boolean;
  onlyTimeBased?: boolean;
}

/**
 * React hook for selecting and displaying contextual greetings.
 *
 * This hook manages the greeting selection state and automatically
 * re-randomizes when key dependencies change.
 *
 * @param props - Configuration options for greeting selection
 * @returns Greeting result with text, metadata, and all available greetings
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const greeting = useEnhancedGreeting({
 *     name: 'John',
 *     language: 'en',
 *     techOk: true,
 *     battery: 85,
 *     weather: { condition: 'sunny', temp: 22 },
 *     tempUnit: 'C'
 *   });
 *
 *   return <h1>{greeting.text}</h1>;
 * }
 * ```
 */
export function useEnhancedGreeting({
  greetings,
  name,
  incognito = false,
  workMode = false,
  techOk = false,
  language = 'en',
  battery = null,
  weather = null,
  tempUnit = 'C',
  refreshKey = 0,
  hasNameFilter,
  variant,
  onlyDynamic = false,
  onlyTimeBased = false,
}: EnhancedGreetingProps): GreetingResult & { allGreetings: string[] } {
  const [mounted, setMounted] = useState(false);
  const [randomSeed, setRandomSeed] = useState(() => Math.random());

  useEffect(() => {
    setMounted(true);
  }, []);

  // Re-randomize when key dependencies change
  useEffect(() => {
    if (mounted) {
      setRandomSeed(Math.random());
    }
  }, [name, incognito, workMode, techOk, language, tempUnit, hasNameFilter, variant, onlyDynamic, onlyTimeBased, refreshKey, mounted]);

  const result = useMemo(() => {
    if (!mounted) {
      return {
        text: '',
        timeOfDay: 'morning' as const,
        mood: 'casual' as const,
        allGreetings: [],
      };
    }

    return selectGreeting(greetings, {
      name,
      incognito,
      workMode,
      techOk,
      language,
      battery,
      weather,
      tempUnit,
      randomSeed,
      hasNameFilter,
      variant,
      onlyDynamic,
      onlyTimeBased,
    });
  }, [greetings, mounted, randomSeed, name, incognito, workMode, techOk, language, battery, weather, tempUnit, hasNameFilter, variant, onlyDynamic, onlyTimeBased]);

  return result;
}

// Re-export types for convenience
export type { Language, TempUnit, Variant };
