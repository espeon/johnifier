import { useState, useEffect } from 'react';
import { getBatteryLevel, getWeather, getLocation } from '../utils/context';

export interface EnhancedContext {
  battery: number | null;
  weather: { condition: string; temp: number } | null;
  isLoading: boolean;
}

export function useEnhancedContext() {
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
