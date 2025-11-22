import { useState, useEffect } from 'react';
import { getBatteryLevel, getWeather, getLocation } from '../utils/context';

export interface EnhancedContext {
  battery: number | null;
  weather: { condition: string; temp: number } | null;
  isLoading: boolean;
}

/**
 * React hook for fetching enhanced context information.
 *
 * Automatically fetches battery level, location, and weather data
 * when the component mounts. This data can be passed to useEnhancedGreeting
 * for more contextual greetings.
 *
 * @returns Context object with battery, weather, and loading state
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const context = useEnhancedContext();
 *   const greeting = useEnhancedGreeting({
 *     battery: context.battery,
 *     weather: context.weather,
 *   });
 *
 *   if (context.isLoading) return <div>Loading...</div>;
 *   return <h1>{greeting.text}</h1>;
 * }
 * ```
 */
export function useEnhancedContext(): EnhancedContext {
  const [context, setContext] = useState<EnhancedContext>({
    battery: null,
    weather: null,
    isLoading: true,
  });

  useEffect(() => {
    async function loadContext() {
      const battery = await getBatteryLevel();

      let weather = null;
      const location = await getLocation();
      if (location) {
        weather = await getWeather(location.lat, location.lon);
      }

      setContext({
        battery,
        weather,
        isLoading: false,
      });
    }

    loadContext();
  }, []);

  return context;
}
