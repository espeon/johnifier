export type Language = 'en' | 'es' | 'fr' | 'de' | 'ja';
export type Mood = 'casual' | 'professional' | 'playful' | 'mysterious';

// Static filter criteria (can be pre-indexed)
export interface StaticFilters {
  language: Language;
  incognito?: boolean;   // undefined means "any"
  workMode?: boolean;    // undefined means "any"
  techOk?: boolean;      // undefined means "any"
  hasName?: boolean;     // undefined means "any"
}

// Dynamic filter criteria (must be evaluated at runtime)
export interface DynamicFilters {
  hour?: number;
  day?: number;
  month?: number;
  battery?: number | null;
  weather?: { condition: string; temp: number } | null;
}

export type TempUnit = 'C' | 'F';

export interface GreetingContext {
  name?: string;
  battery?: number | null;
  weather?: { condition: string; temp: number } | null;
  tempUnit?: TempUnit;
}

export interface GreetingDefinition {
  text: string | ((context: GreetingContext) => string);
  mood: Mood;

  // Static criteria for indexing
  static: StaticFilters;

  // Optional dynamic filter function
  dynamic?: (filters: DynamicFilters) => boolean;
}

export interface GreetingResult {
  text: string;
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'lateNight';
  mood: Mood;
}
