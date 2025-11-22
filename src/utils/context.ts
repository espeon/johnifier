// Context utilities for enhanced greeting features

export async function getBatteryLevel(): Promise<number | null> {
  if ('getBattery' in navigator) {
    try {
      const battery = await (navigator as any).getBattery();
      return Math.round(battery.level * 100);
    } catch {
      return null;
    }
  }
  return null;
}

export function getTimeZone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export async function getWeather(lat: number, lon: number): Promise<{
  condition: string;
  temp: number;
} | null> {
  try {
    // Using Open-Meteo (free, no API key needed)
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );
    const data = await response.json();

    const weatherCode = data.current_weather.weathercode;
    const temp = Math.round(data.current_weather.temperature);

    // Map weather codes to conditions
    const condition = weatherCode === 0 ? 'clear' :
                     weatherCode <= 3 ? 'cloudy' :
                     weatherCode <= 67 ? 'rainy' :
                     weatherCode <= 77 ? 'snowy' :
                     'stormy';

    return { condition, temp };
  } catch {
    return null;
  }
}

export async function getLocation(): Promise<{ lat: number; lon: number } | null> {
  return new Promise((resolve) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        () => resolve(null),
        { timeout: 5000 }
      );
    } else {
      resolve(null);
    }
  });
}

export function isSlowConnection(): boolean {
  if ('connection' in navigator) {
    const conn = (navigator as any).connection;
    return conn?.effectiveType === 'slow-2g' || conn?.effectiveType === '2g';
  }
  return false;
}
