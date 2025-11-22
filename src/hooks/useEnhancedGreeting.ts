import { useState, useEffect, useMemo } from 'react';
import { GreetingResult } from './useGreeting';
import { getMatchingGreetings, Language, Mood, TempUnit } from '../greetings';

interface EnhancedGreetingProps {
  name?: string;
  incognito?: boolean;
  workMode?: boolean;
  techOk?: boolean;
  language?: Language;
  battery?: number | null;
  weather?: { condition: string; temp: number } | null;
  tempUnit?: TempUnit;
  refreshKey?: number;
}

export function useEnhancedGreeting({
  name,
  incognito = false,
  workMode = false,
  techOk = false,
  language = 'en',
  battery = null,
  weather = null,
  tempUnit = 'C',
  refreshKey = 0,
}: EnhancedGreetingProps = {}): GreetingResult & { allGreetings: string[] } {
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
  }, [name, incognito, workMode, techOk, language, tempUnit, refreshKey, mounted]);

  const result = useMemo(() => {
    if (!mounted) {
      return {
        text: '',
        timeOfDay: 'morning' as const,
        mood: 'casual' as const,
        allGreetings: [],
      };
    }

    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    const month = now.getMonth();
    const hasName = !!name;

    // Determine time of day for metadata
    let timeOfDay: 'morning' | 'afternoon' | 'evening' | 'lateNight';
    if (hour >= 5 && hour < 12) timeOfDay = 'morning';
    else if (hour >= 12 && hour < 18) timeOfDay = 'afternoon';
    else if (hour >= 18 && hour < 24) timeOfDay = 'evening';
    else timeOfDay = 'lateNight';

    // Get candidate greetings using O(1) indexed lookup
    const candidates = getMatchingGreetings({
      language,
      incognito,
      workMode,
      techOk,
      hasName,
    });

    // Filter candidates by dynamic criteria (time, battery, weather)
    const dynamicFilters = { hour, day, month, battery, weather };
    const validGreetings = candidates.filter(
      (g) => !g.dynamic || g.dynamic(dynamicFilters)
    );

    if (validGreetings.length === 0) {
      // Fallback greeting
      const fallbackText = hasName ? `Hello, ${name}!` : 'Hello!';
      return {
        text: fallbackText,
        timeOfDay,
        mood: 'casual' as Mood,
        allGreetings: [fallbackText],
      };
    }

    // Use randomSeed to deterministically select a greeting
    const index = Math.floor(randomSeed * validGreetings.length);
    const selectedGreeting = validGreetings[index];

    // Build context for greeting text resolution
    const context = { name, battery, weather, tempUnit };

    // Resolve greeting text (handle both strings and functions)
    const greetingText =
      typeof selectedGreeting.text === 'function'
        ? selectedGreeting.text(context)
        : selectedGreeting.text;

    // Get all currently valid greeting texts (time-filtered)
    const allGreetings = validGreetings.map((g) =>
      typeof g.text === 'function' ? g.text(context) : g.text
    );

    return {
      text: greetingText,
      timeOfDay,
      mood: selectedGreeting.mood,
      allGreetings,
    };
  }, [mounted, randomSeed, name, incognito, workMode, techOk, language, battery, weather, tempUnit]);

  return result;
}

// Re-export types for convenience
export type { Language, TempUnit };
