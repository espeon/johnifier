/**
 * Johnifier React Bindings
 *
 * React hooks and utilities for using Johnifier in React applications.
 *
 * @packageDocumentation
 */

// Export hooks
export { useEnhancedGreeting } from './hooks/useEnhancedGreeting';
export { useEnhancedContext } from './hooks/useEnhancedContext';

// Export utility functions
export { getBatteryLevel, getWeather, getLocation, getTimeZone, isSlowConnection } from './utils/context';

// Re-export types from core library
export type {
  Language,
  Mood,
  GreetingDefinition,
  StaticFilters,
  DynamicFilters,
  GreetingResult,
  GreetingContext,
  TempUnit
} from '../lib';

// Re-export types from hooks
export type { EnhancedGreetingProps } from './hooks/useEnhancedGreeting';
export type { EnhancedContext } from './hooks/useEnhancedContext';
