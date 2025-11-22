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
  const [randomSeed, setRandomSeed] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Re-randomize on mount and when key dependencies change
  useEffect(() => {
    setRandomSeed(Math.random());
  }, [mounted, name, incognito, workMode]);

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
    const timeOfDay: 'morning' | 'afternoon' | 'evening' | 'lateNight' =
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
      { filter: () => !!(weather?.temp && weather.temp > 30), text: () => `Stay cool out there (${weather?.temp}°C)`, mood: 'casual' },
      { filter: () => !!(weather?.temp !== undefined && weather.temp < 0), text: () => `Bundle up! (${weather?.temp}°C)`, mood: 'casual' },

      // === MORNING GREETINGS WITH NAME ===
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `${t.morning}, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Morning, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Welcome back, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Hey there, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Rise and shine, ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `${name} has entered the chat`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Look who's up early, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Wakey wakey, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `The legend ${name} returns`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `${name}, let's make today count`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Bright and early, ${name}!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Fresh start, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `${name} graces us with their presence`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `What's good, ${name}?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `${name}, you're glowing today`, mood: 'playful' },

      // Day-specific with name
      { filter: () => !incognito && !workMode && hasName && isMorning && isMonday, text: `Happy Monday, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isMonday, text: `New week, new wins, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isMonday, text: `Let's conquer this Monday, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isTuesday, text: `Happy Tuesday, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isTuesday, text: `Tuesday energy, ${name}!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isWednesday, text: `Hump day, ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isWednesday, text: `Halfway there, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isWednesday, text: `Wednesday vibes with ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isThursday, text: `Happy Thursday, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isThursday, text: `Almost Friday, ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isFriday, text: `Happy Friday, ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isFriday, text: `TGIF, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isFriday, text: `Friday feeling, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isFriday, text: `Weekend's calling, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isSaturday, text: `Weekend mode, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isSaturday, text: `Saturday vibes, ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isSaturday, text: `No alarms, ${name}?`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isSunday, text: `Lazy Sunday, ${name}?`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isSunday, text: `Sunday funday, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && isSunday, text: `Recharge mode, ${name}`, mood: 'casual' },

      // === AFTERNOON GREETINGS WITH NAME ===
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `${t.afternoon}, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `Afternoon, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `Back at it, ${name}?`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `${name} returns`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `Powering through, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `Post-lunch ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `${name}'s back in action`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `Keeping the momentum, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `${name}, second wind time`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `Hello again, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `${name} in full swing`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && isFriday, text: `Friday afternoon, ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && (isSaturday || isSunday), text: `Weekend afternoon with ${name}`, mood: 'casual' },

      // === EVENING GREETINGS WITH NAME ===
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `${t.evening}, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `Evening, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `Golden hour, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `Sunset session, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `${name} as the day winds down`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `Evening vibes with ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `${name}, winding down?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `Twilight ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `${name} in the evening glow`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `Still going strong, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `${name} after hours`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening && isFriday, text: `Friday night, ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening && (isSaturday || isSunday), text: `Weekend nights with ${name}`, mood: 'playful' },

      // === LATE NIGHT GREETINGS WITH NAME ===
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `Burning the midnight oil, ${name}?`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `Night owl ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `${name} in the witching hours`, mood: 'mysterious' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `Can't sleep, ${name}?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `${name}'s late night session`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `Vampire hours, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `3am ${name} hits different`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `${name} when the world sleeps`, mood: 'mysterious' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `Midnight ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `${name}'s graveyard shift`, mood: 'playful' },

      // === MORNING GREETINGS WITHOUT NAME ===
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: t.morning, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Morning', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Coffee time?', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Rise and shine!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Fresh start', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Welcome back', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Hey there', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Wakey wakey', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Up bright and early', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'New day, new possibilities', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: "Let's make it count", mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Morning energy ⚡', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Sunrise vibes', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Ready for today?', mood: 'casual' },

      // Day-specific without name
      { filter: () => !incognito && !workMode && !hasName && isMorning && isMonday, text: 'Happy Monday!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isMonday, text: 'New week energy', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isTuesday, text: 'Happy Tuesday!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isTuesday, text: 'Tuesday vibes', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isWednesday, text: 'Hump day!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isWednesday, text: 'Halfway there', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isThursday, text: 'Happy Thursday!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isThursday, text: 'Almost Friday...', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isFriday, text: 'Happy Friday!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isFriday, text: 'TGIF!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isFriday, text: 'Friday feeling', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isSaturday, text: 'Saturday!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isSaturday, text: 'Weekend mode activated', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isSunday, text: 'Lazy Sunday', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && isSunday, text: 'Sunday funday', mood: 'playful' },

      // === AFTERNOON GREETINGS WITHOUT NAME ===
      { filter: () => !incognito && !workMode && !hasName && isAfternoon, text: t.afternoon, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon, text: 'Afternoon', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon, text: 'Back at it!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon, text: 'Powering through', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon, text: 'Post-lunch vibes', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon, text: 'Afternoon energy', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon, text: 'Keeping the flow', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon, text: 'Second wind', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon, text: 'Hello again', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon, text: 'Welcome back', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon, text: 'Midday momentum', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && isFriday, text: 'Friday afternoon!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && (isSaturday || isSunday), text: 'Weekend afternoon', mood: 'casual' },

      // === EVENING GREETINGS WITHOUT NAME ===
      { filter: () => !incognito && !workMode && !hasName && isEvening, text: t.evening, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening, text: 'Evening', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening, text: 'Golden hour', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isEvening, text: 'Sunset session', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isEvening, text: 'Winding down', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening, text: 'Evening vibes', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening, text: 'Twilight time', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isEvening, text: 'Still going strong', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening, text: 'After hours', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isEvening, text: 'Evening energy', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening, text: 'Night is young', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && isFriday, text: 'Friday night!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && (isSaturday || isSunday), text: 'Weekend nights', mood: 'playful' },

      // === LATE NIGHT GREETINGS WITHOUT NAME ===
      { filter: () => !incognito && !workMode && !hasName && isLateNight, text: 'Late night vibes', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight, text: 'Hello, night owl', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight, text: 'Burning midnight oil', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight, text: 'Witching hours', mood: 'mysterious' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight, text: "Can't sleep?", mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight, text: 'Vampire hours', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight, text: '3am hits different', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight, text: 'The world sleeps', mood: 'mysterious' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight, text: 'Midnight session', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight, text: 'Graveyard shift', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight, text: 'Moon vibes', mood: 'mysterious' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight, text: 'Silent hours', mood: 'mysterious' },

      // === INCOGNITO MODE ===
      { filter: () => incognito && isMorning, text: 'Good morning, stranger', mood: 'mysterious' },
      { filter: () => incognito && isMorning, text: 'Anonymous entry detected', mood: 'mysterious' },
      { filter: () => incognito && isMorning, text: 'Who goes there?', mood: 'mysterious' },
      { filter: () => incognito && isMorning, text: 'Morning, mystery person', mood: 'mysterious' },
      { filter: () => incognito && isAfternoon, text: 'Greetings, mysterious one', mood: 'mysterious' },
      { filter: () => incognito && isAfternoon, text: 'Identity: unknown', mood: 'mysterious' },
      { filter: () => incognito && isAfternoon, text: 'Incognito mode: active', mood: 'mysterious' },
      { filter: () => incognito && isAfternoon, text: 'The phantom returns', mood: 'mysterious' },
      { filter: () => incognito && isEvening, text: 'Evening, shadow walker', mood: 'mysterious' },
      { filter: () => incognito && isEvening, text: 'Darkness welcomes you', mood: 'mysterious' },
      { filter: () => incognito && isEvening, text: 'Masked visitor detected', mood: 'mysterious' },
      { filter: () => incognito && isEvening, text: 'Anonymous in the twilight', mood: 'mysterious' },
      { filter: () => incognito && isLateNight, text: 'Ghost in the machine', mood: 'mysterious' },
      { filter: () => incognito && isLateNight, text: 'Phantom of the night', mood: 'mysterious' },
      { filter: () => incognito && isLateNight, text: 'Identity cloaked', mood: 'mysterious' },
      { filter: () => incognito && isLateNight, text: 'Who are you, really?', mood: 'mysterious' },

      // === WORK MODE ===
      { filter: () => !incognito && workMode, text: 'Ready to build?', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Time to create', mood: 'professional' },
      { filter: () => !incognito && workMode, text: "Let's get to work", mood: 'professional' },
      { filter: () => !incognito && workMode, text: "What's on the agenda?", mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Build mode activated', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Time to ship', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Focus mode engaged', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Deep work session', mood: 'professional' },
      { filter: () => !incognito && workMode, text: "Let's make progress", mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Code time', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Ready to execute', mood: 'professional' },
      { filter: () => !incognito && workMode, text: "What are we tackling?", mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Productivity mode', mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `Ready to ship, ${name}?`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `Let's build, ${name}`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `Focus time, ${name}`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `${name}, ready to execute?`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `Time to ship, ${name}`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `${name} in work mode`, mood: 'professional' },
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
