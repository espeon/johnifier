/**
 * Johnifier - A delightfully contextual greeting system
 *
 * @packageDocumentation
 */

// Export core greeting system
export {
  getMatchingGreetings,
  allGreetings
} from './greetings';

// Export types
export type {
  Language,
  Mood,
  GreetingDefinition,
  StaticFilters,
  DynamicFilters,
  GreetingResult,
  GreetingContext,
  TempUnit,
  Variant
} from './greetings/types';

// Export utility function for selecting a greeting
export { selectGreeting } from './utils';
