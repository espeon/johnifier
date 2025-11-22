import { useState, useEffect } from 'react';

interface GreetingProps {
  name?: string;
  incognito?: boolean;
  workMode?: boolean;
}

export interface GreetingResult {
  text: string;
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'lateNight';
  mood: 'casual' | 'professional' | 'playful' | 'mysterious';
}

export function useGreeting({
  name,
  incognito = false,
  workMode = false
}: GreetingProps = {}): GreetingResult {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default return for SSR
  if (!mounted) {
    return {
      text: '',
      timeOfDay: 'morning',
      mood: 'casual'
    };
  }

  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();
  const hasName = !!name;

  // Time periods
  const isMorning = hour >= 5 && hour < 12;
  const isAfternoon = hour >= 12 && hour < 18;
  const isEvening = hour >= 18 && hour < 24;
  const isLateNight = hour >= 0 && hour < 5;

  // Days of week
  const isDayName = (targetDay: number) => day === targetDay;
  const isMonday = isDayName(1);
  const isTuesday = isDayName(2);
  const isWednesday = isDayName(3);
  const isThursday = isDayName(4);
  const isFriday = isDayName(5);
  const isSaturday = isDayName(6);
  const isSunday = isDayName(0);

  // Determine time of day for return
  const timeOfDay =
    isMorning ? 'morning' :
    isAfternoon ? 'afternoon' :
    isEvening ? 'evening' :
    'lateNight';

  type Greeting = {
    filter: () => boolean;
    text: string;
    mood: 'casual' | 'professional' | 'playful' | 'mysterious';
  };

  const greetings: Greeting[] = [
    // === MORNING GREETINGS WITH NAME ===
    { filter: () => !incognito && !workMode && hasName && isMorning, text: `Good morning, ${name}`, mood: 'casual' },
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
    { filter: () => !incognito && !workMode && hasName && isMorning && isSaturday, text: `Happy Saturday, ${name}`, mood: 'playful' },
    { filter: () => !incognito && !workMode && hasName && isMorning && isSunday, text: `Lazy Sunday, ${name}?`, mood: 'playful' },
    { filter: () => !incognito && !workMode && hasName && isMorning && isSunday, text: `Happy Sunday, ${name}`, mood: 'casual' },

    // === AFTERNOON GREETINGS WITH NAME ===
    { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `Good afternoon, ${name}`, mood: 'casual' },
    { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `Afternoon, ${name}`, mood: 'casual' },
    { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `Back at it, ${name}?`, mood: 'playful' },
    { filter: () => !incognito && !workMode && hasName && isAfternoon, text: `${name} returns`, mood: 'playful' },

    // === EVENING GREETINGS WITH NAME ===
    { filter: () => !incognito && !workMode && hasName && isEvening, text: `Good evening, ${name}`, mood: 'casual' },
    { filter: () => !incognito && !workMode && hasName && isEvening, text: `Evening, ${name}`, mood: 'casual' },
    { filter: () => !incognito && !workMode && hasName && isEvening, text: `${name} in the twilight`, mood: 'playful' },
    { filter: () => !incognito && !workMode && hasName && isEvening, text: `Golden hour, ${name}`, mood: 'playful' },

    // === LATE NIGHT GREETINGS WITH NAME ===
    { filter: () => !incognito && !workMode && hasName && isLateNight, text: `Burning the midnight oil, ${name}?`, mood: 'playful' },
    { filter: () => !incognito && !workMode && hasName && isLateNight, text: `Late night vibes, ${name}`, mood: 'casual' },
    { filter: () => !incognito && !workMode && hasName && isLateNight, text: `Night owl ${name}`, mood: 'playful' },

    // === MORNING GREETINGS WITHOUT NAME ===
    { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Good morning', mood: 'casual' },
    { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Morning', mood: 'casual' },
    { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Coffee time?', mood: 'playful' },
    { filter: () => !incognito && !workMode && !hasName && isMorning, text: 'Welcome', mood: 'casual' },
    { filter: () => !incognito && !workMode && !hasName && isMorning && isMonday, text: 'Happy Monday', mood: 'playful' },
    { filter: () => !incognito && !workMode && !hasName && isMorning && isTuesday, text: 'Happy Tuesday', mood: 'playful' },
    { filter: () => !incognito && !workMode && !hasName && isMorning && isWednesday, text: 'Hump day!', mood: 'playful' },
    { filter: () => !incognito && !workMode && !hasName && isMorning && isThursday, text: 'Happy Thursday', mood: 'playful' },
    { filter: () => !incognito && !workMode && !hasName && isMorning && isFriday, text: 'Happy Friday!', mood: 'playful' },
    { filter: () => !incognito && !workMode && !hasName && isMorning && isSaturday, text: 'Weekend mode', mood: 'casual' },
    { filter: () => !incognito && !workMode && !hasName && isMorning && isSunday, text: 'Lazy Sunday?', mood: 'playful' },

    // === AFTERNOON GREETINGS WITHOUT NAME ===
    { filter: () => !incognito && !workMode && !hasName && isAfternoon, text: 'Good afternoon', mood: 'casual' },
    { filter: () => !incognito && !workMode && !hasName && isAfternoon, text: 'Afternoon', mood: 'casual' },
    { filter: () => !incognito && !workMode && !hasName && isAfternoon, text: 'Back at it!', mood: 'playful' },

    // === EVENING GREETINGS WITHOUT NAME ===
    { filter: () => !incognito && !workMode && !hasName && isEvening, text: 'Good evening', mood: 'casual' },
    { filter: () => !incognito && !workMode && !hasName && isEvening, text: 'Evening', mood: 'casual' },
    { filter: () => !incognito && !workMode && !hasName && isEvening, text: 'Twilight thoughts', mood: 'playful' },
    { filter: () => !incognito && !workMode && !hasName && isEvening, text: 'Golden hour', mood: 'playful' },

    // === LATE NIGHT GREETINGS WITHOUT NAME ===
    { filter: () => !incognito && !workMode && !hasName && isLateNight, text: 'Burning midnight oil?', mood: 'playful' },
    { filter: () => !incognito && !workMode && !hasName && isLateNight, text: 'Late night vibes', mood: 'casual' },
    { filter: () => !incognito && !workMode && !hasName && isLateNight, text: 'Hello, night owl', mood: 'playful' },
    { filter: () => !incognito && !workMode && !hasName && isLateNight, text: 'Moonlit moment', mood: 'mysterious' },

    // === INCOGNITO MODE ===
    { filter: () => incognito && isMorning, text: 'Good morning, stranger', mood: 'mysterious' },
    { filter: () => incognito && isMorning, text: 'Incognito mode active', mood: 'mysterious' },
    { filter: () => incognito && isAfternoon, text: 'Greetings, mysterious one', mood: 'mysterious' },
    { filter: () => incognito && isAfternoon, text: 'Anonymous afternoon', mood: 'mysterious' },
    { filter: () => incognito && isEvening, text: 'Evening, shadow walker', mood: 'mysterious' },
    { filter: () => incognito && isEvening, text: 'Incognito evening', mood: 'mysterious' },
    { filter: () => incognito && isLateNight, text: 'Ghost in the machine', mood: 'mysterious' },
    { filter: () => incognito && isLateNight, text: 'Phantom hours', mood: 'mysterious' },

    // === WORK MODE ===
    { filter: () => !incognito && workMode, text: 'Ready to build?', mood: 'professional' },
    { filter: () => !incognito && workMode, text: 'What are we tackling today?', mood: 'professional' },
    { filter: () => !incognito && workMode, text: 'Time to create', mood: 'professional' },
    { filter: () => !incognito && workMode, text: "Let's get to work", mood: 'professional' },
    { filter: () => !incognito && workMode, text: "What's on the agenda?", mood: 'professional' },
    { filter: () => !incognito && workMode, text: 'Build mode activated', mood: 'professional' },
    { filter: () => !incognito && workMode && hasName, text: `Ready to ship, ${name}?`, mood: 'professional' },
    { filter: () => !incognito && workMode && hasName, text: `Let's build something great, ${name}`, mood: 'professional' },
  ];

  // Filter to valid greetings
  const validGreetings = greetings.filter(g => g.filter());

  // Return random greeting from valid options
  const selected = validGreetings[Math.floor(Math.random() * validGreetings.length)] || {
    text: 'Hello',
    mood: 'casual' as const
  };

  return {
    text: selected.text,
    timeOfDay,
    mood: selected.mood
  };
}
