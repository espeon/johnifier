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
  const [randomSeed, setRandomSeed] = useState(() => Math.random());

  useEffect(() => {
    setMounted(true);
  }, []);

  // Re-randomize when key dependencies change
  useEffect(() => {
    if (mounted) {
      setRandomSeed(Math.random());
    }
  }, [name, incognito, workMode, language, mounted]);

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
    const month = now.getMonth(); // 0-11
    const hasName = !!name;

    const t = translations[language];

    // Time periods
    const isMorning = hour >= 5 && hour < 12;
    const isAfternoon = hour >= 12 && hour < 18;
    const isEvening = hour >= 18 && hour < 24;
    const isLateNight = hour >= 0 && hour < 5;

    // More specific time periods
    const isEarlyMorning = hour >= 5 && hour < 8;
    const isMidMorning = hour >= 8 && hour < 12;
    const isNoon = hour >= 11 && hour < 14;
    const isLateAfternoon = hour >= 15 && hour < 18;
    const isEarlyEvening = hour >= 18 && hour < 21;
    const isMidnight = hour >= 23 || hour < 2;

    // Days
    const isMonday = day === 1;
    const isTuesday = day === 2;
    const isWednesday = day === 3;
    const isThursday = day === 4;
    const isFriday = day === 5;
    const isSaturday = day === 6;
    const isSunday = day === 0;
    const isWeekend = isSaturday || isSunday;
    const isWeekday = !isWeekend;

    // Months and seasons
    const isJanuary = month === 0;
    const isFebruary = month === 1;
    const isMarch = month === 2;
    const isApril = month === 3;
    const isMay = month === 4;
    const isJune = month === 5;
    const isJuly = month === 6;
    const isAugust = month === 7;
    const isSeptember = month === 8;
    const isOctober = month === 9;
    const isNovember = month === 10;
    const isDecember = month === 11;

    // Seasons (Northern Hemisphere)
    const isWinter = isDecember || isJanuary || isFebruary;
    const isSpring = isMarch || isApril || isMay;
    const isSummer = isJune || isJuly || isAugust;
    const isFall = isSeptember || isOctober || isNovember;

    // Time of day for return
    const timeOfDay: 'morning' | 'afternoon' | 'evening' | 'lateNight' =
      isMorning ? 'morning' :
      isAfternoon ? 'afternoon' :
      isEvening ? 'evening' :
      'lateNight';

    const greetings: Greeting[] = [
      // Context-aware greetings (battery)
      { filter: () => battery !== null && battery < 20 && language === 'en', text: () => `Running low, just like your battery (${battery}%)`, mood: 'playful' },
      { filter: () => battery !== null && battery === 100 && language === 'en', text: 'Fully charged, just like you! ⚡', mood: 'playful' },
      { filter: () => battery !== null && battery >= 90 && language === 'en', text: () => `Energy levels high (${battery}%)`, mood: 'casual' },

      // Weather-aware greetings
      { filter: () => weather?.condition === 'rainy' && language === 'en', text: `Rainy vibes today 🌧️`, mood: 'casual' },
      { filter: () => weather?.condition === 'snowy' && language === 'en', text: `Winter wonderland out there ❄️`, mood: 'playful' },
      { filter: () => weather?.condition === 'clear' && isMorning && language === 'en', text: `Gorgeous morning for it ☀️`, mood: 'casual' },
      { filter: () => !!(weather?.temp && weather.temp > 30) && language === 'en', text: () => `Stay cool out there (${weather?.temp}°C)`, mood: 'casual' },
      { filter: () => !!(weather?.temp !== undefined && weather.temp < 0) && language === 'en', text: () => `Bundle up! (${weather?.temp}°C)`, mood: 'casual' },

      // === SEASONAL GREETINGS (ENGLISH) ===
      // Winter
      { filter: () => !incognito && !workMode && isWinter && isMorning && language === 'en', text: 'Winter morning chill', mood: 'casual' },
      { filter: () => !incognito && !workMode && isWinter && language === 'en', text: 'Cozy winter vibes', mood: 'casual' },
      { filter: () => !incognito && !workMode && isWinter && language === 'en', text: 'Hot cocoa weather', mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isWinter && language === 'en', text: `Stay warm, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isWinter && language === 'en', text: `${name} in winter mode`, mood: 'casual' },

      // Spring
      { filter: () => !incognito && !workMode && isSpring && isMorning && language === 'en', text: 'Spring has sprung!', mood: 'playful' },
      { filter: () => !incognito && !workMode && isSpring && language === 'en', text: 'Fresh spring energy', mood: 'casual' },
      { filter: () => !incognito && !workMode && isSpring && language === 'en', text: 'Blooming beautiful day', mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isSpring && language === 'en', text: `Spring vibes with ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isSpring && language === 'en', text: `${name}, feeling renewed?`, mood: 'casual' },

      // Summer
      { filter: () => !incognito && !workMode && isSummer && isMorning && language === 'en', text: 'Summer mornings hit different', mood: 'playful' },
      { filter: () => !incognito && !workMode && isSummer && language === 'en', text: 'Hot summer energy', mood: 'casual' },
      { filter: () => !incognito && !workMode && isSummer && language === 'en', text: 'Sunshine and good vibes', mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isSummer && language === 'en', text: `Summer mode ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isSummer && language === 'en', text: `${name}, enjoying the heat?`, mood: 'casual' },

      // Fall
      { filter: () => !incognito && !workMode && isFall && isMorning && language === 'en', text: 'Crisp fall morning', mood: 'casual' },
      { filter: () => !incognito && !workMode && isFall && language === 'en', text: 'Autumn vibes', mood: 'casual' },
      { filter: () => !incognito && !workMode && isFall && language === 'en', text: 'Sweater weather', mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isFall && language === 'en', text: `Fall colors and ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isFall && language === 'en', text: `${name}, pumpkin spice season`, mood: 'playful' },

      // === MONTHLY SPECIAL GREETINGS (ENGLISH) ===
      { filter: () => !incognito && !workMode && isJanuary && isMorning && language === 'en', text: 'New year, new you', mood: 'casual' },
      { filter: () => !incognito && !workMode && isJanuary && language === 'en', text: 'January hustle', mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isJanuary && language === 'en', text: `${name}, fresh start energy`, mood: 'casual' },

      { filter: () => !incognito && !workMode && isFebruary && language === 'en', text: 'February focus', mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isFebruary && language === 'en', text: `${name}, love is in the air`, mood: 'playful' },

      { filter: () => !incognito && !workMode && isMarch && language === 'en', text: 'March forward!', mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMarch && language === 'en', text: `${name}, spring is coming`, mood: 'casual' },

      { filter: () => !incognito && !workMode && isApril && language === 'en', text: 'April showers energy', mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isApril && language === 'en', text: `${name}, spring bloom time`, mood: 'playful' },

      { filter: () => !incognito && !workMode && isMay && language === 'en', text: 'May flowers blooming', mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMay && language === 'en', text: `${name}, almost summer!`, mood: 'playful' },

      { filter: () => !incognito && !workMode && isJune && language === 'en', text: 'June sunshine', mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isJune && language === 'en', text: `${name}, summer starts now`, mood: 'playful' },

      { filter: () => !incognito && !workMode && isJuly && language === 'en', text: 'Peak summer vibes', mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isJuly && language === 'en', text: `${name}, hottest month energy`, mood: 'casual' },

      { filter: () => !incognito && !workMode && isAugust && language === 'en', text: 'Late summer days', mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAugust && language === 'en', text: `${name}, savoring summer`, mood: 'playful' },

      { filter: () => !incognito && !workMode && isSeptember && language === 'en', text: 'September reset', mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isSeptember && language === 'en', text: `${name}, fall is calling`, mood: 'casual' },

      { filter: () => !incognito && !workMode && isOctober && language === 'en', text: 'Spooky season vibes', mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isOctober && language === 'en', text: `${name}, autumn magic`, mood: 'playful' },

      { filter: () => !incognito && !workMode && isNovember && language === 'en', text: 'November gratitude', mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isNovember && language === 'en', text: `${name}, thankful vibes`, mood: 'casual' },

      { filter: () => !incognito && !workMode && isDecember && language === 'en', text: 'December magic', mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isDecember && language === 'en', text: `${name}, holiday season!`, mood: 'playful' },

      // === TIME-SPECIFIC GREETINGS (ENGLISH) ===
      { filter: () => !incognito && !workMode && isEarlyMorning && language === 'en', text: 'Early bird special', mood: 'playful' },
      { filter: () => !incognito && !workMode && isEarlyMorning && language === 'en', text: 'Crack of dawn energy', mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEarlyMorning && language === 'en', text: `${name}, up with the sun`, mood: 'playful' },

      { filter: () => !incognito && !workMode && isMidMorning && language === 'en', text: 'Mid-morning flow', mood: 'casual' },
      { filter: () => !incognito && !workMode && isMidMorning && language === 'en', text: 'Getting into the groove', mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMidMorning && language === 'en', text: `${name}, morning momentum`, mood: 'casual' },

      { filter: () => !incognito && !workMode && isNoon && language === 'en', text: 'High noon', mood: 'casual' },
      { filter: () => !incognito && !workMode && isNoon && language === 'en', text: 'Midday power hour', mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isNoon && language === 'en', text: `${name}, lunch vibes?`, mood: 'casual' },

      { filter: () => !incognito && !workMode && isLateAfternoon && language === 'en', text: 'Golden hour approaching', mood: 'casual' },
      { filter: () => !incognito && !workMode && isLateAfternoon && language === 'en', text: 'Late afternoon energy', mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isLateAfternoon && language === 'en', text: `${name}, almost evening`, mood: 'casual' },

      { filter: () => !incognito && !workMode && isEarlyEvening && language === 'en', text: 'Early evening calm', mood: 'casual' },
      { filter: () => !incognito && !workMode && isEarlyEvening && language === 'en', text: 'Dinner time vibes', mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEarlyEvening && language === 'en', text: `${name}, early night`, mood: 'casual' },

      { filter: () => !incognito && !workMode && isMidnight && language === 'en', text: 'Midnight special', mood: 'mysterious' },
      { filter: () => !incognito && !workMode && isMidnight && language === 'en', text: 'Witching hour active', mood: 'mysterious' },
      { filter: () => !incognito && !workMode && hasName && isMidnight && language === 'en', text: `${name} at the stroke of midnight`, mood: 'mysterious' },

      // === WEEKDAY GREETINGS (ENGLISH) ===
      { filter: () => !incognito && !workMode && isWeekday && isMorning && language === 'en', text: 'Weekday grind', mood: 'casual' },
      { filter: () => !incognito && !workMode && isWeekday && workMode && language === 'en', text: 'Weekday hustle mode', mood: 'professional' },
      { filter: () => !incognito && !workMode && hasName && isWeekday && language === 'en', text: `${name}, weekday warrior`, mood: 'playful' },

      // === BATTERY-LEVEL GREETINGS (MORE) ===
      { filter: () => battery !== null && battery > 0 && battery < 10 && language === 'en', text: () => `Critical battery! (${battery}%)`, mood: 'playful' },
      { filter: () => battery !== null && battery >= 10 && battery < 20 && language === 'en', text: () => `Low battery mode (${battery}%)`, mood: 'casual' },
      { filter: () => battery !== null && battery >= 20 && battery < 50 && language === 'en', text: () => `Battery getting low (${battery}%)`, mood: 'casual' },
      { filter: () => battery !== null && battery >= 50 && battery < 80 && language === 'en', text: () => `Decent charge (${battery}%)`, mood: 'casual' },
      { filter: () => battery !== null && battery >= 80 && battery < 100 && language === 'en', text: () => `Nearly full power (${battery}%)`, mood: 'casual' },
      { filter: () => battery !== null && battery === 69 && language === 'en', text: 'Nice battery level', mood: 'playful' },
      { filter: () => battery !== null && battery === 42 && language === 'en', text: 'The answer to life, the universe, and your battery', mood: 'playful' },

      // === MORNING GREETINGS WITH NAME ===
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `${t.morning}, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `Morning, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `Welcome back, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `Hey there, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `Rise and shine, ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `${name} has entered the chat`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `Look who's up early, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `Wakey wakey, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `The legend ${name} returns`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `${name}, let's make today count`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `Bright and early, ${name}!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `Fresh start, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `${name} graces us with their presence`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `What's good, ${name}?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `${name}, you're glowing today`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `Top of the morning, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `${name}, ready to conquer?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `Good to see you, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `${name}'s morning has arrived`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `Sunrise and ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `${name}, you're up!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `Early bird ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `${name} starts the day right`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `Morning sunshine, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `${name}, let's do this`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `Another day, another ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `${name} bringing morning energy`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `Well well, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `${name}, coffee first?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `Today's main character: ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `${name}, new day, new you`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `Blessed to see ${name} this morning`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `${name} has arrived fashionably early`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `Morning champion ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'en', text: `${name}, crushing it already?`, mood: 'casual' },

      // Day-specific with name
      { filter: () => !incognito && !workMode && hasName && isMorning && isMonday && language === 'en', text: `Happy Monday, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isMonday && language === 'en', text: `New week, new wins, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isMonday && language === 'en', text: `Let's conquer this Monday, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isTuesday && language === 'en', text: `Happy Tuesday, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isTuesday && language === 'en', text: `Tuesday energy, ${name}!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isWednesday && language === 'en', text: `Hump day, ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isWednesday && language === 'en', text: `Halfway there, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isWednesday && language === 'en', text: `Wednesday vibes with ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isThursday && language === 'en', text: `Happy Thursday, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isThursday && language === 'en', text: `Almost Friday, ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isFriday && language === 'en', text: `Happy Friday, ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isFriday && language === 'en', text: `TGIF, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isFriday && language === 'en', text: `Friday feeling, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isFriday && language === 'en', text: `Weekend's calling, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isSaturday && language === 'en', text: `Weekend mode, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isSaturday && language === 'en', text: `Saturday vibes, ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isSaturday && language === 'en', text: `No alarms, ${name}?`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isSunday && language === 'en', text: `Lazy Sunday, ${name}?`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isSunday && language === 'en', text: `Sunday funday, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isSunday && language === 'en', text: `Recharge mode, ${name}`, mood: 'casual' },

      // === AFTERNOON GREETINGS WITH NAME ===
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `${t.afternoon}, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `Afternoon, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `Back at it, ${name}?`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `${name} returns`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `Powering through, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `Post-lunch ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `${name}'s back in action`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `Keeping the momentum, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `${name}, second wind time`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `Hello again, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `${name} in full swing`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `Midday ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `${name}, still going strong`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `Afternoon energy from ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `${name}, what's the vibe?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `Peak hours with ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `${name} in the zone`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `Catching ${name} in the afternoon`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `${name}, round two`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `Afternoon ${name} hits different`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `${name}, productive afternoon?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `Recharged ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `${name} keeping it moving`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'en', text: `Sunlight and ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && isFriday && language === 'en', text: `Friday afternoon, ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && (isSaturday || isSunday) && language === 'en', text: `Weekend afternoon with ${name}`, mood: 'casual' },

      // === EVENING GREETINGS WITH NAME ===
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `${t.evening}, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `Evening, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `Golden hour, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `Sunset session, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `${name} as the day winds down`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `Evening vibes with ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `${name}, winding down?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `Twilight ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `${name} in the evening glow`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `Still going strong, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `${name} after hours`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `Nightfall with ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `${name}, stars are coming out`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `Prime time ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `${name}, ready to unwind?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `Dusk and ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `${name}, moonrise incoming`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `Evening ${name} energy`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `${name}, calling it a day?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `Cozy evening, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `${name} as darkness falls`, mood: 'mysterious' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `Magic hour with ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'en', text: `${name}, night shifts`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && isFriday && language === 'en', text: `Friday night, ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening && (isSaturday || isSunday) && language === 'en', text: `Weekend nights with ${name}`, mood: 'playful' },

      // === LATE NIGHT GREETINGS WITH NAME ===
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `Burning the midnight oil, ${name}?`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `Night owl ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `${name} in the witching hours`, mood: 'mysterious' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `Can't sleep, ${name}?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `${name}'s late night session`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `Vampire hours, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `3am ${name} hits different`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `${name} when the world sleeps`, mood: 'mysterious' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `Midnight ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `${name}'s graveyard shift`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `Creatures of the night, ${name}?`, mood: 'mysterious' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `${name} in the dark hours`, mood: 'mysterious' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `Insomnia club president: ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `${name}, sleep is for the weak?`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `Night mode ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `${name} under the stars`, mood: 'mysterious' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `Midnight oil expert: ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `${name}, the night is yours`, mood: 'mysterious' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `Nocturnal ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `${name} vibing at ungodly hours`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `Dark mode ${name}`, mood: 'mysterious' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'en', text: `${name}, tomorrow's problem?`, mood: 'playful' },

      // === MORNING GREETINGS WITHOUT NAME ===
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: t.morning, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Morning', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Coffee time?', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Rise and shine!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Fresh start', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Welcome back', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Hey there', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Wakey wakey', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Up bright and early', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'New day, new possibilities', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: "Let's make it count", mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Morning energy ⚡', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Sunrise vibes', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Ready for today?', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Early bird gets the worm', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Top of the morning!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'The day awaits', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Morning glory', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Dawn patrol', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Breakfast energy', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: "Here we go again", mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'A.M. vibes', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Carpe diem', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Morning mood activated', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: "Sun's up", mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Another beautiful day', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Morning magic', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'en', text: 'Wake up and win', mood: 'playful' },

      // Day-specific without name
      { filter: () => !incognito && !workMode && !hasName && isMorning && isMonday && language === 'en', text: 'Happy Monday!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isMonday && language === 'en', text: 'New week energy', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isTuesday && language === 'en', text: 'Happy Tuesday!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isTuesday && language === 'en', text: 'Tuesday vibes', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isWednesday && language === 'en', text: 'Hump day!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isWednesday && language === 'en', text: 'Halfway there', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isThursday && language === 'en', text: 'Happy Thursday!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isThursday && language === 'en', text: 'Almost Friday...', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isFriday && language === 'en', text: 'Happy Friday!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isFriday && language === 'en', text: 'TGIF!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isFriday && language === 'en', text: 'Friday feeling', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isSaturday && language === 'en', text: 'Saturday!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isSaturday && language === 'en', text: 'Weekend mode activated', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isSunday && language === 'en', text: 'Lazy Sunday', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isSunday && language === 'en', text: 'Sunday funday', mood: 'playful' },

      // === AFTERNOON GREETINGS WITHOUT NAME ===
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'en', text: t.afternoon, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'en', text: 'Afternoon', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'en', text: 'Back at it!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'en', text: 'Powering through', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'en', text: 'Post-lunch vibes', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'en', text: 'Afternoon energy', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'en', text: 'Keeping the flow', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'en', text: 'Second wind', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'en', text: 'Hello again', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'en', text: 'Welcome back', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'en', text: 'Midday momentum', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && isFriday && language === 'en', text: 'Friday afternoon!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && (isSaturday || isSunday) && language === 'en', text: 'Weekend afternoon', mood: 'casual' },

      // === EVENING GREETINGS WITHOUT NAME ===
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'en', text: t.evening, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'en', text: 'Evening', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'en', text: 'Golden hour', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'en', text: 'Sunset session', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'en', text: 'Winding down', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'en', text: 'Evening vibes', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'en', text: 'Twilight time', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'en', text: 'Still going strong', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'en', text: 'After hours', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'en', text: 'Evening energy', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'en', text: 'Night is young', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && isFriday && language === 'en', text: 'Friday night!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && (isSaturday || isSunday) && language === 'en', text: 'Weekend nights', mood: 'playful' },

      // === LATE NIGHT GREETINGS WITHOUT NAME ===
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'en', text: 'Late night vibes', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'en', text: 'Hello, night owl', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'en', text: 'Burning midnight oil', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'en', text: 'Witching hours', mood: 'mysterious' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'en', text: "Can't sleep?", mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'en', text: 'Vampire hours', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'en', text: '3am hits different', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'en', text: 'The world sleeps', mood: 'mysterious' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'en', text: 'Midnight session', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'en', text: 'Graveyard shift', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'en', text: 'Moon vibes', mood: 'mysterious' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'en', text: 'Silent hours', mood: 'mysterious' },

      // === INCOGNITO MODE ===
      { filter: () => incognito && isMorning && language === 'en', text: 'Good morning, stranger', mood: 'mysterious' },
      { filter: () => incognito && isMorning && language === 'en', text: 'Anonymous entry detected', mood: 'mysterious' },
      { filter: () => incognito && isMorning && language === 'en', text: 'Who goes there?', mood: 'mysterious' },
      { filter: () => incognito && isMorning && language === 'en', text: 'Morning, mystery person', mood: 'mysterious' },
      { filter: () => incognito && isAfternoon && language === 'en', text: 'Greetings, mysterious one', mood: 'mysterious' },
      { filter: () => incognito && isAfternoon && language === 'en', text: 'Identity: unknown', mood: 'mysterious' },
      { filter: () => incognito && isAfternoon && language === 'en', text: 'Incognito mode: active', mood: 'mysterious' },
      { filter: () => incognito && isAfternoon && language === 'en', text: 'The phantom returns', mood: 'mysterious' },
      { filter: () => incognito && isEvening && language === 'en', text: 'Evening, shadow walker', mood: 'mysterious' },
      { filter: () => incognito && isEvening && language === 'en', text: 'Darkness welcomes you', mood: 'mysterious' },
      { filter: () => incognito && isEvening && language === 'en', text: 'Masked visitor detected', mood: 'mysterious' },
      { filter: () => incognito && isEvening && language === 'en', text: 'Anonymous in the twilight', mood: 'mysterious' },
      { filter: () => incognito && isLateNight && language === 'en', text: 'Ghost in the machine', mood: 'mysterious' },
      { filter: () => incognito && isLateNight && language === 'en', text: 'Phantom of the night', mood: 'mysterious' },
      { filter: () => incognito && isLateNight && language === 'en', text: 'Identity cloaked', mood: 'mysterious' },
      { filter: () => incognito && isLateNight && language === 'en', text: 'Who are you, really?', mood: 'mysterious' },

      // === WORK MODE ===
      { filter: () => !incognito && workMode && language === 'en', text: 'Ready to build?', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Time to create', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: "Let's get to work", mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: "What's on the agenda?", mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Build mode activated', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Time to ship', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Focus mode engaged', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Deep work session', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: "Let's make progress", mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Code time', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Ready to execute', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: "What are we tackling?", mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Productivity mode', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Execute mode', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: "Let's deliver", mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Sprint time', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Deployment energy', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Production mindset', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Maker mode', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Builder energy', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Creative focus', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Mission mode', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Push to prod?', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Merge and deploy', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Work work work', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Efficiency mode', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Tasks await', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Output time', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Create greatness', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Professional mode engaged', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Hustle mode', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: "Let's iterate", mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Grind time', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Impact mode', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'en', text: 'Results-driven', mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'en', text: `Ready to ship, ${name}?`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'en', text: `Let's build, ${name}`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'en', text: `Focus time, ${name}`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'en', text: `${name}, ready to execute?`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'en', text: `Time to ship, ${name}`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'en', text: `${name} in work mode`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'en', text: `Deploy time, ${name}`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'en', text: `${name}, let's execute`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'en', text: `Builder ${name}`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'en', text: `${name} locked in`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'en', text: `Production ${name}`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'en', text: `${name}, deep work?`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'en', text: `Sprint mode ${name}`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'en', text: `${name}, make it happen`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'en', text: `Go time, ${name}`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'en', text: `${name} means business`, mood: 'professional' },

      // === SPANISH LOCALIZED GREETINGS ===
      // Morning
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'es', text: `¡Qué tal, ${name}!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'es', text: `¡Hola ${name}!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'es', text: `¡Buenos días, ${name}!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'es', text: `¿Cómo amaneciste, ${name}?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'es', text: `¡Arriba ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'es', text: `${name}, ¡a darle!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'es', text: `¡Órale ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'es', text: `${name}, ¡qué buena onda verte!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'es', text: `${name}, listo para hoy?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'es', text: `¡Ey ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'es', text: `${name}, ¡buenos días!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'es', text: '¡Qué onda!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'es', text: '¡Buenos días!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'es', text: '¡Buen día!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'es', text: '¿Cómo amaneciste?', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'es', text: '¡A darle con todo!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'es', text: '¡Arriba!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'es', text: '¡Órale!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'es', text: '¡A por ello!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'es', text: '¡Vamos!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'es', text: 'Buen inicio', mood: 'casual' },

      // Afternoon
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'es', text: `Buenas tardes, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'es', text: `¿Qué pasa, ${name}?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'es', text: `${name}, ¿cómo vas?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'es', text: `¡Hola de nuevo, ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'es', text: `${name}, ¿todo bien?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'es', text: `${name} de vuelta`, mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'es', text: 'Buenas tardes', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'es', text: '¿Qué tal la tarde?', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'es', text: '¡Buenas!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'es', text: '¿Qué tal?', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'es', text: 'Buena tarde', mood: 'casual' },

      // Evening
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'es', text: `Buenas noches, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'es', text: `${name}, ¿qué tal la noche?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'es', text: `Noche perfecta con ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'es', text: `${name}, buena noche`, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'es', text: 'Buenas noches', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'es', text: '¿Qué tal la noche?', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'es', text: 'Noche tranquila', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'es', text: 'Buena noche', mood: 'casual' },

      // Late night
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'es', text: `${name}, ¿trasnochando?`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'es', text: `Búho nocturno ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'es', text: `${name}, ¿no duermes?`, mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'es', text: '¿Trasnochando?', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'es', text: 'Hora de búhos', mood: 'mysterious' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'es', text: 'Madrugada', mood: 'mysterious' },

      // Spanish weekends/days
      { filter: () => !incognito && !workMode && hasName && isFriday && language === 'es', text: `${name}, ¡viernes!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && isWeekend && language === 'es', text: '¡Fin de semana!', mood: 'playful' },
      { filter: () => !incognito && !workMode && isSaturday && language === 'es', text: '¡Sábado!', mood: 'playful' },
      { filter: () => !incognito && !workMode && isSunday && language === 'es', text: 'Domingo relax', mood: 'casual' },
      { filter: () => !incognito && !workMode && isMonday && language === 'es', text: 'Lunes con energía', mood: 'casual' },

      // Spanish seasons
      { filter: () => !incognito && !workMode && isWinter && language === 'es', text: 'Vibes de invierno', mood: 'casual' },
      { filter: () => !incognito && !workMode && isSummer && language === 'es', text: 'Verano caliente', mood: 'playful' },
      { filter: () => !incognito && !workMode && isSpring && language === 'es', text: 'Primavera fresca', mood: 'casual' },
      { filter: () => !incognito && !workMode && isFall && language === 'es', text: 'Otoño perfecto', mood: 'casual' },

      // Work mode
      { filter: () => !incognito && workMode && hasName && language === 'es', text: `${name}, ¡a trabajar!`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'es', text: `Vamos ${name}, ¡a producir!`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'es', text: `${name}, ¡a darle duro!`, mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'es', text: '¡A trabajar!', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'es', text: 'Modo productivo', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'es', text: '¡Vamos a darle!', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'es', text: 'Hora de producir', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'es', text: 'Modo enfoque', mood: 'professional' },

      // === FRENCH LOCALIZED GREETINGS ===
      // Morning
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'fr', text: `Bonjour ${name}!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'fr', text: `Salut ${name}!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'fr', text: `Coucou ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'fr', text: `${name}, ça va?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'fr', text: `Bien le bonjour, ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'fr', text: `${name}, prêt pour la journée?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'fr', text: `${name}, en forme?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'fr', text: `Hey ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'fr', text: 'Bonjour!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'fr', text: 'Salut!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'fr', text: 'Coucou!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'fr', text: 'Ça va?', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'fr', text: 'Bien le bonjour!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'fr', text: 'Belle journée!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'fr', text: 'Salutations!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'fr', text: 'Bon matin!', mood: 'casual' },

      // Afternoon
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'fr', text: `Bon après-midi, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'fr', text: `Re ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'fr', text: `${name}, ça roule?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'fr', text: `${name} de retour`, mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'fr', text: 'Bon après-midi', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'fr', text: 'Ça roule?', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'fr', text: 'Re!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'fr', text: 'Rebonjour!', mood: 'playful' },

      // Evening
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'fr', text: `Bonsoir ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'fr', text: `${name}, bonne soirée!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'fr', text: `Soirée parfaite avec ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'fr', text: `${name}, ça va ce soir?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'fr', text: 'Bonsoir', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'fr', text: 'Bonne soirée', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'fr', text: 'Belle soirée!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'fr', text: 'Bonne nuit!', mood: 'casual' },

      // Late night
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'fr', text: `${name}, encore debout?`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'fr', text: `Couche-tard ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'fr', text: `${name}, insomnie?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'fr', text: 'Encore debout?', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'fr', text: 'Nuit blanche?', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'fr', text: 'Heure des hiboux', mood: 'mysterious' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'fr', text: 'Minuit passé', mood: 'mysterious' },

      // French weekends/days
      { filter: () => !incognito && !workMode && isFriday && language === 'fr', text: 'Vendredi!', mood: 'playful' },
      { filter: () => !incognito && !workMode && isWeekend && language === 'fr', text: 'Weekend mode!', mood: 'playful' },
      { filter: () => !incognito && !workMode && isSunday && language === 'fr', text: 'Dimanche tranquille', mood: 'casual' },

      // French seasons
      { filter: () => !incognito && !workMode && isWinter && language === 'fr', text: 'Ambiance hivernale', mood: 'casual' },
      { filter: () => !incognito && !workMode && isSummer && language === 'fr', text: 'Été chaud!', mood: 'playful' },
      { filter: () => !incognito && !workMode && isSpring && language === 'fr', text: 'Printemps frais', mood: 'casual' },
      { filter: () => !incognito && !workMode && isFall && language === 'fr', text: 'Automne magnifique', mood: 'casual' },

      // Work mode
      { filter: () => !incognito && workMode && hasName && language === 'fr', text: `Au boulot, ${name}!`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'fr', text: `${name}, on y va!`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'fr', text: `${name}, prêt à travailler?`, mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'fr', text: 'Au travail!', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'fr', text: 'Mode focus', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'fr', text: 'Au boulot!', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'fr', text: 'On y va!', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'fr', text: 'Concentration!', mood: 'professional' },

      // === GERMAN LOCALIZED GREETINGS ===
      // Morning
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'de', text: `Guten Morgen, ${name}!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'de', text: `Moin ${name}!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'de', text: `Hallo ${name}!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'de', text: `Servus ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'de', text: `${name}, gut geschlafen?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'de', text: `Schön dich zu sehen, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'de', text: `${name}, bereit für heute?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'de', text: `Hey ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'de', text: 'Guten Morgen!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'de', text: 'Moin!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'de', text: 'Hallo!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'de', text: 'Servus!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'de', text: 'Gut geschlafen?', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'de', text: 'Frischer Start!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'de', text: 'Guten Start!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'de', text: 'Mahlzeit!', mood: 'playful' },

      // Afternoon
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'de', text: `Guten Tag, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'de', text: `${name}, wie geht's?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'de', text: `Tag ${name}!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'de', text: `${name} wieder da`, mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'de', text: 'Guten Tag', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'de', text: 'Tag!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'de', text: "Wie geht's?", mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'de', text: 'Alles klar?', mood: 'casual' },

      // Evening
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'de', text: `Guten Abend, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'de', text: `${name}, schöner Abend!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'de', text: `N'Abend ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'de', text: `${name}, wie war dein Tag?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'de', text: 'Guten Abend', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'de', text: "N'Abend!", mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'de', text: 'Schöner Abend', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'de', text: 'Gute Nacht!', mood: 'casual' },

      // Late night
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'de', text: `${name}, noch wach?`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'de', text: `Nachteule ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'de', text: `${name}, Schlaflos?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'de', text: 'Noch wach?', mood: 'casual' },
      { filter: () => !incognito && workMode && !hasName && isLateNight && language === 'de', text: 'Nachtschicht?', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'de', text: 'Mitternachtsstunde', mood: 'mysterious' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'de', text: 'Späte Stunde', mood: 'mysterious' },

      // German weekends/days
      { filter: () => !incognito && !workMode && isFriday && language === 'de', text: 'Freitag!', mood: 'playful' },
      { filter: () => !incognito && !workMode && isWeekend && language === 'de', text: 'Wochenende!', mood: 'playful' },
      { filter: () => !incognito && !workMode && isSaturday && language === 'de', text: 'Samstag chillen', mood: 'casual' },
      { filter: () => !incognito && !workMode && isSunday && language === 'de', text: 'Sonntag entspannen', mood: 'casual' },

      // German seasons
      { filter: () => !incognito && !workMode && isWinter && language === 'de', text: 'Winter Stimmung', mood: 'casual' },
      { filter: () => !incognito && !workMode && isSummer && language === 'de', text: 'Sommer Vibes', mood: 'playful' },
      { filter: () => !incognito && !workMode && isSpring && language === 'de', text: 'Frühling!', mood: 'casual' },
      { filter: () => !incognito && !workMode && isFall && language === 'de', text: 'Herbst Zeit', mood: 'casual' },

      // Work mode
      { filter: () => !incognito && workMode && hasName && language === 'de', text: `${name}, an die Arbeit!`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'de', text: `Los geht's, ${name}!`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'de', text: `${name}, Zeit zu arbeiten!`, mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'de', text: 'Arbeitsmodus', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'de', text: 'An die Arbeit!', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'de', text: 'Fokus-Zeit', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'de', text: "Los geht's!", mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'de', text: 'Produktiv sein!', mood: 'professional' },

      // === JAPANESE LOCALIZED GREETINGS ===
      // Morning
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'ja', text: `${name}さん、おはよう！`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'ja', text: `おはよう、${name}さん`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'ja', text: `${name}さん、おはようございます`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'ja', text: `やあ、${name}さん！`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'ja', text: `${name}さん、調子どう？`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'ja', text: `おっす、${name}！`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'ja', text: `${name}さん、元気？`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'ja', text: `よう、${name}さん`, mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'ja', text: 'おはよう！', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'ja', text: 'おはようございます', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'ja', text: 'やあ！', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'ja', text: '調子どう？', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'ja', text: 'おっす！', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'ja', text: '朝だよ！', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'ja', text: 'よう！', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'ja', text: '元気？', mood: 'casual' },

      // Afternoon
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'ja', text: `こんにちは、${name}さん`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'ja', text: `${name}さん、お疲れ様`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'ja', text: `よう、${name}！`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'ja', text: `${name}さん、また会ったね`, mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'ja', text: 'こんにちは', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'ja', text: 'お疲れ様', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'ja', text: 'よう！', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'ja', text: 'また会ったね', mood: 'playful' },

      // Evening
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'ja', text: `こんばんは、${name}さん`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'ja', text: `${name}さん、良い夜を`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'ja', text: `夜の${name}さん`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'ja', text: `${name}さん、お疲れ`, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'ja', text: 'こんばんは', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'ja', text: '良い夜を', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'ja', text: '夜だね', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'ja', text: 'おやすみ', mood: 'casual' },

      // Late night
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'ja', text: `${name}さん、夜更かし？`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'ja', text: `夜型${name}さん`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'ja', text: `${name}さん、まだ起きてる？`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'ja', text: `${name}さん、眠れない？`, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'ja', text: '夜更かし？', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'ja', text: 'まだ起きてる？', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'ja', text: '深夜だよ', mood: 'mysterious' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'ja', text: '真夜中', mood: 'mysterious' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'ja', text: '眠れない？', mood: 'casual' },

      // Japanese weekends/days
      { filter: () => !incognito && !workMode && isFriday && language === 'ja', text: '金曜日！', mood: 'playful' },
      { filter: () => !incognito && !workMode && isWeekend && language === 'ja', text: '週末だ！', mood: 'playful' },
      { filter: () => !incognito && !workMode && isSaturday && language === 'ja', text: '土曜日', mood: 'casual' },
      { filter: () => !incognito && !workMode && isSunday && language === 'ja', text: 'ゆっくり日曜日', mood: 'casual' },

      // Japanese seasons
      { filter: () => !incognito && !workMode && isWinter && language === 'ja', text: '冬の雰囲気', mood: 'casual' },
      { filter: () => !incognito && !workMode && isSummer && language === 'ja', text: '夏の暑さ！', mood: 'playful' },
      { filter: () => !incognito && !workMode && isSpring && language === 'ja', text: '春だね', mood: 'casual' },
      { filter: () => !incognito && !workMode && isFall && language === 'ja', text: '秋の季節', mood: 'casual' },

      // Work mode
      { filter: () => !incognito && workMode && hasName && language === 'ja', text: `${name}さん、頑張ろう！`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'ja', text: `${name}さん、作業開始！`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'ja', text: `仕事モード、${name}さん`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'ja', text: `${name}さん、やろう！`, mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'ja', text: '頑張ろう！', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'ja', text: '作業開始', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'ja', text: '仕事モード', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'ja', text: '集中タイム', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'ja', text: 'やるぞ！', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'ja', text: '仕事しよう', mood: 'professional' },
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
  }, [mounted, name, incognito, workMode, language, battery, weather, randomSeed]);

  return result;
}
