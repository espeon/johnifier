import { useState, useEffect, useMemo } from 'react';
import { selectGreeting } from '../../lib/utils';
import { greetings as enGreetings } from '../../lib/greetings/languages/en';
import type { Language, TempUnit, Variant } from '../../lib/greetings/types';

interface GreetingProps {
  name?: string;
  incognito?: boolean;
  workMode?: boolean;
  techOk?: boolean;
  language?: Language;
  battery?: number | null;
  weather?: { condition: string; temp: number } | null;
  tempUnit?: TempUnit;
  variant?: Variant;
}

export interface GreetingResult {
  text: string;
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'lateNight';
  mood: 'casual' | 'professional' | 'playful' | 'mysterious';
  allGreetings: string[];
}

export function useGreeting({
  name,
  incognito = false,
  workMode = false,
  techOk = false,
  language = 'en',
  battery = null,
  weather = null,
  tempUnit = 'C',
  variant
}: GreetingProps = {}): GreetingResult {
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
  }, [name, incognito, workMode, techOk, language, tempUnit, variant, mounted]);

  const result = useMemo(() => {
    if (!mounted) {
      return {
        text: '',
        timeOfDay: 'morning' as const,
        mood: 'casual' as const,
        allGreetings: [],
      };
    }

    return selectGreeting(enGreetings, {
      name,
      incognito,
      workMode,
      techOk,
      language,
      battery,
      weather,
      tempUnit,
      randomSeed,
      variant,
    });
  }, [mounted, randomSeed, name, incognito, workMode, techOk, language, battery, weather, tempUnit, variant]);

  return result;
}

// Re-export types for convenience
export type { Language, TempUnit, Variant };
