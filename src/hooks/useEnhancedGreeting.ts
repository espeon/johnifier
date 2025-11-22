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
  }, [name, incognito, workMode, mounted]);

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
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Top of the morning, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `${name}, ready to conquer?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Good to see you, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `${name}'s morning has arrived`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Sunrise and ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `${name}, you're up!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Early bird ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `${name} starts the day right`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Morning sunshine, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `${name}, let's do this`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Another day, another ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `${name} bringing morning energy`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Well well, ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `${name}, coffee first?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Today's main character: ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `${name}, new day, new you`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Blessed to see ${name} this morning`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `${name} has arrived fashionably early`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `Morning champion ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning, text: `${name}, crushing it already?`, mood: 'casual' },

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
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `Midday ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `${name}, still going strong`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `Afternoon energy from ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `${name}, what's the vibe?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `Peak hours with ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `${name} in the zone`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `Catching ${name} in the afternoon`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `${name}, round two`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `Afternoon ${name} hits different`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `${name}, productive afternoon?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `Recharged ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `${name} keeping it moving`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `Sunlight and ${name}`, mood: 'playful' },
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
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `Nightfall with ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `${name}, stars are coming out`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `Prime time ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `${name}, ready to unwind?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `Dusk and ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `${name}, moonrise incoming`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `Evening ${name} energy`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `${name}, calling it a day?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `Cozy evening, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `${name} as darkness falls`, mood: 'mysterious' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `Magic hour with ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isEvening, text: `${name}, night shifts`, mood: 'casual' },
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
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `Creatures of the night, ${name}?`, mood: 'mysterious' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `${name} in the dark hours`, mood: 'mysterious' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `Insomnia club president: ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `${name}, sleep is for the weak?`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `Night mode ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `${name} under the stars`, mood: 'mysterious' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `Midnight oil expert: ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `${name}, the night is yours`, mood: 'mysterious' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `Nocturnal ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `${name} vibing at ungodly hours`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `Dark mode ${name}`, mood: 'mysterious' },
      { filter: () => !incognito && !workMode && hasName && isLateNight, text: `${name}, tomorrow's problem?`, mood: 'playful' },

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
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Early bird gets the worm', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Top of the morning!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'The day awaits', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Morning glory', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Dawn patrol', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Breakfast energy', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: "Here we go again", mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'A.M. vibes', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Carpe diem', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Morning mood activated', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: "Sun's up", mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Another beautiful day', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Morning magic', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Wake up and win', mood: 'playful' },

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
      { filter: () => !incognito && workMode, text: 'Execute mode', mood: 'professional' },
      { filter: () => !incognito && workMode, text: "Let's deliver", mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Sprint time', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Deployment energy', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Production mindset', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Maker mode', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Builder energy', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Creative focus', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Mission mode', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Push to prod?', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Merge and deploy', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Work work work', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Efficiency mode', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Tasks await', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Output time', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Create greatness', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Professional mode engaged', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Hustle mode', mood: 'professional' },
      { filter: () => !incognito && workMode, text: "Let's iterate", mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Grind time', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Impact mode', mood: 'professional' },
      { filter: () => !incognito && workMode, text: 'Results-driven', mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `Ready to ship, ${name}?`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `Let's build, ${name}`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `Focus time, ${name}`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `${name}, ready to execute?`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `Time to ship, ${name}`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `${name} in work mode`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `Deploy time, ${name}`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `${name}, let's execute`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `Builder ${name}`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `${name} locked in`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `Production ${name}`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `${name}, deep work?`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `Sprint mode ${name}`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `${name}, make it happen`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `Go time, ${name}`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName, text: `${name} means business`, mood: 'professional' },

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
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'es', text: '¡Qué onda!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'es', text: '¡Buenos días!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'es', text: '¡Buen día!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'es', text: '¿Cómo amaneciste?', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'es', text: '¡A darle con todo!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'es', text: '¡Arriba!', mood: 'playful' },

      // Afternoon
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'es', text: `Buenas tardes, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'es', text: `¿Qué pasa, ${name}?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'es', text: `${name}, ¿cómo vas?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'es', text: `¡Hola de nuevo, ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'es', text: 'Buenas tardes', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'es', text: '¿Qué tal la tarde?', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'es', text: '¡Buenas!', mood: 'casual' },

      // Evening
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'es', text: `Buenas noches, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'es', text: `${name}, ¿qué tal la noche?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'es', text: `Noche perfecta con ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'es', text: 'Buenas noches', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'es', text: '¿Qué tal la noche?', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'es', text: 'Noche tranquila', mood: 'casual' },

      // Late night
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'es', text: `${name}, trasnochando?`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'es', text: `Búho nocturno ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'es', text: '¿Trasnochando?', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'es', text: 'Hora de búhos', mood: 'mysterious' },

      // Work mode
      { filter: () => !incognito && workMode && hasName && language === 'es', text: `${name}, ¡a trabajar!`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'es', text: `Vamos ${name}, ¡a producir!`, mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'es', text: '¡A trabajar!', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'es', text: 'Modo productivo', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'es', text: '¡Vamos a darle!', mood: 'professional' },

      // === FRENCH LOCALIZED GREETINGS ===
      // Morning
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'fr', text: `Bonjour ${name}!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'fr', text: `Salut ${name}!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'fr', text: `Coucou ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'fr', text: `${name}, ça va?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'fr', text: `Bien le bonjour, ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'fr', text: `${name}, prêt pour la journée?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'fr', text: 'Bonjour!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'fr', text: 'Salut!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'fr', text: 'Coucou!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'fr', text: 'Ça va?', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'fr', text: 'Bien le bonjour!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'fr', text: 'Belle journée!', mood: 'casual' },

      // Afternoon
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'fr', text: `Bon après-midi, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'fr', text: `Re ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'fr', text: `${name}, ça roule?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'fr', text: 'Bon après-midi', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'fr', text: 'Ça roule?', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'fr', text: 'Re!', mood: 'playful' },

      // Evening
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'fr', text: `Bonsoir ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'fr', text: `${name}, bonne soirée!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'fr', text: `Soirée parfaite avec ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'fr', text: 'Bonsoir', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'fr', text: 'Bonne soirée', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'fr', text: 'Belle soirée!', mood: 'playful' },

      // Late night
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'fr', text: `${name}, encore debout?`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'fr', text: `Couche-tard ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'fr', text: 'Encore debout?', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'fr', text: 'Nuit blanche?', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'fr', text: 'Heure des hiboux', mood: 'mysterious' },

      // Work mode
      { filter: () => !incognito && workMode && hasName && language === 'fr', text: `Au boulot, ${name}!`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'fr', text: `${name}, on y va!`, mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'fr', text: 'Au travail!', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'fr', text: 'Mode focus', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'fr', text: 'Au boulot!', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'fr', text: 'On y va!', mood: 'professional' },

      // === GERMAN LOCALIZED GREETINGS ===
      // Morning
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'de', text: `Guten Morgen, ${name}!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'de', text: `Moin ${name}!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'de', text: `Hallo ${name}!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'de', text: `Servus ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'de', text: `${name}, gut geschlafen?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'de', text: `Schön dich zu sehen, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'de', text: 'Guten Morgen!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'de', text: 'Moin!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'de', text: 'Hallo!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'de', text: 'Servus!', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'de', text: 'Gut geschlafen?', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'de', text: 'Frischer Start!', mood: 'playful' },

      // Afternoon
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'de', text: `Guten Tag, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'de', text: `${name}, wie geht's?`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'de', text: `Tag ${name}!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'de', text: 'Guten Tag', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'de', text: 'Tag!', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'de', text: "Wie geht's?", mood: 'casual' },

      // Evening
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'de', text: `Guten Abend, ${name}`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'de', text: `${name}, schöner Abend!`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'de', text: `N'Abend ${name}!`, mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'de', text: 'Guten Abend', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'de', text: "N'Abend!", mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'de', text: 'Schöner Abend', mood: 'casual' },

      // Late night
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'de', text: `${name}, noch wach?`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'de', text: `Nachteule ${name}`, mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'de', text: 'Noch wach?', mood: 'casual' },
      { filter: () => !incognito && workMode && !hasName && isLateNight && language === 'de', text: 'Nachtschicht?', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'de', text: 'Mitternachtsstunde', mood: 'mysterious' },

      // Work mode
      { filter: () => !incognito && workMode && hasName && language === 'de', text: `${name}, an die Arbeit!`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'de', text: `Los geht's, ${name}!`, mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'de', text: 'Arbeitsmodus', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'de', text: 'An die Arbeit!', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'de', text: 'Fokus-Zeit', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'de', text: "Los geht's!", mood: 'professional' },

      // === JAPANESE LOCALIZED GREETINGS ===
      // Morning
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'ja', text: `${name}さん、おはよう！`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'ja', text: `おはよう、${name}さん`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'ja', text: `${name}さん、おはようございます`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'ja', text: `やあ、${name}さん！`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'ja', text: `${name}さん、調子どう？`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isMorning && language === 'ja', text: `おっす、${name}！`, mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'ja', text: 'おはよう！', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'ja', text: 'おはようございます', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'ja', text: 'やあ！', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'ja', text: '調子どう？', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'ja', text: 'おっす！', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isMorning && language === 'ja', text: '朝だよ！', mood: 'playful' },

      // Afternoon
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'ja', text: `こんにちは、${name}さん`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'ja', text: `${name}さん、お疲れ様`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isAfternoon && language === 'ja', text: `よう、${name}！`, mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'ja', text: 'こんにちは', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'ja', text: 'お疲れ様', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isAfternoon && language === 'ja', text: 'よう！', mood: 'playful' },

      // Evening
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'ja', text: `こんばんは、${name}さん`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'ja', text: `${name}さん、良い夜を`, mood: 'casual' },
      { filter: () => !incognito && !workMode && hasName && isEvening && language === 'ja', text: `夜の${name}さん`, mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'ja', text: 'こんばんは', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'ja', text: '良い夜を', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isEvening && language === 'ja', text: '夜だね', mood: 'playful' },

      // Late night
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'ja', text: `${name}さん、夜更かし？`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'ja', text: `夜型${name}さん`, mood: 'playful' },
      { filter: () => !incognito && !workMode && hasName && isLateNight && language === 'ja', text: `${name}さん、まだ起きてる？`, mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'ja', text: '夜更かし？', mood: 'playful' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'ja', text: 'まだ起きてる？', mood: 'casual' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'ja', text: '深夜だよ', mood: 'mysterious' },
      { filter: () => !incognito && !workMode && !hasName && isLateNight && language === 'ja', text: '真夜中', mood: 'mysterious' },

      // Work mode
      { filter: () => !incognito && workMode && hasName && language === 'ja', text: `${name}さん、頑張ろう！`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'ja', text: `${name}さん、作業開始！`, mood: 'professional' },
      { filter: () => !incognito && workMode && hasName && language === 'ja', text: `仕事モード、${name}さん`, mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'ja', text: '頑張ろう！', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'ja', text: '作業開始', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'ja', text: '仕事モード', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'ja', text: '集中タイム', mood: 'professional' },
      { filter: () => !incognito && workMode && language === 'ja', text: 'やるぞ！', mood: 'professional' },
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
