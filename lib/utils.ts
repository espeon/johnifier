import { getMatchingGreetings, Language, Mood, GreetingResult, GreetingContext, TempUnit, Variant } from './greetings';

export interface SelectGreetingOptions {
  name?: string;
  incognito?: boolean;
  workMode?: boolean;
  techOk?: boolean;
  language?: Language;
  battery?: number | null;
  weather?: { condition: string; temp: number } | null;
  tempUnit?: TempUnit;
  randomSeed?: number;
  hasNameFilter?: boolean; // undefined = any, true = only with names, false = only without names
  variant?: Variant; // undefined = any, standard = traditional, creative = unique/playful
}

/**
 * Selects an appropriate greeting based on the provided filters and context.
 *
 * This is a pure, framework-agnostic function that can be used in any JavaScript environment.
 *
 * @param options - Filtering and context options
 * @returns A greeting result with text, time of day, mood, and all available greetings
 *
 * @example
 * ```typescript
 * const greeting = selectGreeting({
 *   name: 'John',
 *   language: 'en',
 *   techOk: true,
 *   battery: 85,
 *   weather: { condition: 'sunny', temp: 22 },
 *   tempUnit: 'C'
 * });
 *
 * console.log(greeting.text); // "Hello, John!"
 * console.log(greeting.timeOfDay); // "morning"
 * console.log(greeting.mood); // "casual"
 * ```
 */
export function selectGreeting({
  name,
  incognito = false,
  workMode = false,
  techOk = false,
  language = 'en',
  battery = null,
  weather = null,
  tempUnit = 'C',
  randomSeed = Math.random(),
  hasNameFilter,
  variant,
}: SelectGreetingOptions = {}): GreetingResult & { allGreetings: string[] } {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();
  const month = now.getMonth();

  // Determine hasName based on filter and name availability
  let hasName: boolean | undefined;
  if (hasNameFilter === true) {
    // "with-names" mode: only show name greetings if a name is provided
    // Otherwise show all greetings to avoid showing "undefined" in the text
    hasName = !!name ? true : undefined;
  } else if (hasNameFilter === false) {
    // "without-names" mode: never show name greetings
    hasName = false;
  } else {
    // "any" mode: show all greeting types
    hasName = undefined;
  }

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
    variant,
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
  const context: GreetingContext = { name, battery, weather, tempUnit };

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
}
