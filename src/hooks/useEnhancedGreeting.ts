import { useState, useEffect, useMemo } from 'react';
import { GreetingResult } from './useGreeting';

export type Language = 'en' | 'es' | 'fr' | 'de' | 'ja';

interface EnhancedGreetingProps {
  name?: string;
  incognito?: boolean;
  workMode?: boolean;
  language?: Language;
  battery?: number | null;
  weather?: { condition: string; temp: number } | null;
}

type Greeting = {
  filter: () => boolean;
  text: string | (() => string);
  mood: 'casual' | 'professional' | 'playful' | 'mysterious';
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    morning: 'Good morning',
    afternoon: 'Good afternoon',
    evening: 'Good evening',
    lateNight: 'Up late',
  },
  es: {
    morning: 'Buenos días',
    afternoon: 'Buenas tardes',
    evening: 'Buenas noches',
    lateNight: 'Despierto tarde',
  },
  fr: {
    morning: 'Bonjour',
    afternoon: 'Bon après-midi',
    evening: 'Bonsoir',
    lateNight: 'Debout tard',
  },
  de: {
    morning: 'Guten Morgen',
    afternoon: 'Guten Tag',
    evening: 'Guten Abend',
    lateNight: 'Spät wach',
  },
  ja: {
    morning: 'おはようございます',
    afternoon: 'こんにちは',
    evening: 'こんばんは',
    lateNight: '夜更かし',
  },
};

export function useEnhancedGreeting({
  name,
  incognito = false,
  workMode = false,
  language = 'en',
  battery = null,
  weather = null,
}: EnhancedGreetingProps = {}): GreetingResult & { allGreetings: string[] } {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    const hasName = !!name;

    const t = translations[language];

    // Time periods
    const isMorning = hour >= 5 && hour < 12;
    const isAfternoon = hour >= 12 && hour < 18;
    const isEvening = hour >= 18 && hour < 24;
    const isLateNight = hour >= 0 && hour < 5;

    // Days
    const isMonday = day === 1;
    const isTuesday = day === 2;
    const isWednesday = day === 3;
    const isThursday = day === 4;
    const isFriday = day === 5;
    const isSaturday = day === 6;
    const isSunday = day === 0;

    // Time of day for return
    const timeOfDay =
      isMorning ? 'morning' :
      isAfternoon ? 'afternoon' :
      isEvening ? 'evening' :
      'lateNight';

    const greetings: Greeting[] = [
      // Context-aware greetings (battery)
      { filter: () => battery !== null && battery < 20, text: () => `Running low, just like your battery (${battery}%)`, mood: 'playful' },
      { filter: () => battery !== null && battery === 100, text: 'Fully charged, just like you! ⚡', mood: 'playful' },
      { filter: () => battery !== null && battery >= 90, text: () => `Energy levels high (${battery}%)`, mood: 'casual' },

      // Weather-aware greetings
      { filter: () => weather?.condition === 'rainy', text: `Rainy vibes today 🌧️`, mood: 'casual' },
      { filter: () => weather?.condition === 'snowy', text: `Winter wonderland out there ❄️`, mood: 'playful' },
      { filter: () => weather?.condition === 'clear' && isMorning, text: `Gorgeous morning for it ☀️`, mood: 'casual' },
      { filter: () => weather?.temp && weather.temp > 30, text: `Stay cool out there (${weather.temp}°C)`, mood: 'casual' },
      { filter: () => weather?.temp && weather.temp < 0, text: `Bundle up! (${weather.temp}°C)`, mood: 'casual' },

      // === MORNING GREETINGS WITH NAME ===
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `${t.morning}, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Morning, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Welcome back, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Hey there, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isMonday, text: `Happy Monday, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isTuesday, text: `Happy Tuesday, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isWednesday, text: `Hump day, ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isThursday, text: `Happy Thursday, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isFriday, text: `Happy Friday, ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isFriday, text: `TGIF, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isSaturday, text: `Weekend mode, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isSunday, text: `Lazy Sunday, ${name}?`, mood: 'playful' },

      // === AFTERNOON GREETINGS WITH NAME ===
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `${t.afternoon}, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `Afternoon, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `Back at it, ${name}?`, mood: 'playful' },

      // === EVENING GREETINGS WITH NAME ===
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `${t.evening}, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `Evening, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `Golden hour, ${name}`, mood: 'playful' },

      // === LATE NIGHT GREETINGS WITH NAME ===
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `Burning the midnight oil, ${name}?`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `Night owl ${name}`, mood: 'playful' },

      // === MORNING GREETINGS WITHOUT NAME ===
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: t.morning, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Morning', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Coffee time?', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isFriday, text: 'Happy Friday!', mood: 'playful' },

      // === AFTERNOON GREETINGS WITHOUT NAME ===
      { filter: () => !incognito && !workMode && !hasName && isAfternoon, text: t.afternoon, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon, text: 'Back at it!', mood: 'playful' },

      // === EVENING GREETINGS WITHOUT NAME ===
      { filter: () => !incognito && !workMode && !hasName && isEvening, text: t.evening, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening, text: 'Golden hour', mood: 'playful' },

      // === LATE NIGHT GREETINGS WITHOUT NAME ===
      { filter: () => !incognito && !workMode && !hasName && isLateNight, text: 'Late night vibes', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight, text: 'Hello, night owl', mood: 'playful' },

      // === INCOGNITO MODE ===
      { filter: () => incognito && isMorning, text: 'Good morning, stranger', mood: 'mysterious' },
      { filter: () => incognito && isAfternoon, text: 'Greetings, mysterious one', mood: 'mysterious' },
      { filter: () => incognito && isEvening, text: 'Evening, shadow walker', mood: 'mysterious' },
      { filter: () => incognito && isLateNight, text: 'Ghost in the machine', mood: 'mysterious' },

      // === WORK MODE ===
      { filter: () => !incognito && workMode, text: 'Ready to build?', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Time to create', mood: 'professional' },
      { filter: () => !incognito && workMode, text: "Let's get to work", mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `Ready to ship, ${name}?`, mood: 'professional' },
    ];

    // Filter to valid greetings
    const validGreetings = greetings.filter(g => g.filter());
    const allGreetingTexts = validGreetings.map(g => typeof g.text === 'function' ? g.text() : g.text);

    // Select random greeting
    const selected = validGreetings[Math.floor(Math.random() * validGreetings.length)] || {
      text: 'Hello',
      mood: 'casual' as const
    };

    const selectedText = typeof selected.text === 'function' ? selected.text() : selected.text;

    return {
      text: selectedText,
      timeOfDay,
      mood: selected.mood,
      allGreetings: allGreetingTexts,
    };
  }, [mounted, name, incognito, workMode, language, battery, weather]);

  return result;
}
