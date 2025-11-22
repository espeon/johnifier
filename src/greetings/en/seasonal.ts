import { GreetingDefinition } from '../types';

// Seasonal, monthly, holiday, and weekday greetings
export const seasonalGreetings: GreetingDefinition[] = [
  // === SEASONAL GREETINGS ===
  // Winter
  {
    text: 'Winter morning chill',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour, month }) =>
      hour !== undefined && month !== undefined &&
      hour >= 5 && hour < 12 &&
      (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Cozy winter vibes',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: 'Hot cocoa weather',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `Stay warm, ${name}`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },
  {
    text: ({ name }) => `${name} in winter mode`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 11 || month === 0 || month === 1),
  },

  // Spring
  {
    text: 'Spring has sprung!',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour, month }) =>
      hour !== undefined && month !== undefined &&
      hour >= 5 && hour < 12 &&
      (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Fresh spring energy',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: 'Blooming beautiful day',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `Spring vibes with ${name}`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `${name}, feeling renewed?`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },

  // Summer
  {
    text: 'Summer mornings hit different',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour, month }) =>
      hour !== undefined && month !== undefined &&
      hour >= 5 && hour < 12 &&
      (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Hot summer energy',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: 'Sunshine and good vibes',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `Summer mode ${name}`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `${name}, enjoying the heat?`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },

  // Fall
  {
    text: 'Crisp fall morning',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour, month }) =>
      hour !== undefined && month !== undefined &&
      hour >= 5 && hour < 12 &&
      (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Autumn vibes',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: 'Sweater weather',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: ({ name }) => `Fall colors and ${name}`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
  {
    text: ({ name }) => `${name}, pumpkin spice season`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },

  // === MONTHLY SPECIAL GREETINGS ===
  // January
  {
    text: 'New year, new you',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour, month }) =>
      hour !== undefined && month !== undefined &&
      hour >= 5 && hour < 12 && month === 0,
  },
  {
    text: 'January hustle',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 0,
  },
  {
    text: ({ name }) => `${name}, fresh start energy`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 0,
  },
  {
    text: 'New year, same awesome you',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour, month }) =>
      hour !== undefined && month !== undefined &&
      hour >= 5 && hour < 12 && month === 0,
  },
  {
    text: 'Fresh year energy',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 0,
  },

  // February
  {
    text: 'February focus',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 1,
  },
  {
    text: ({ name }) => `${name}, love is in the air`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 1,
  },
  {
    text: 'Love is in the air',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 1,
  },

  // March
  {
    text: 'March forward!',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 2,
  },
  {
    text: ({ name }) => `${name}, spring is coming`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 2,
  },

  // April
  {
    text: 'April showers energy',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 3,
  },
  {
    text: ({ name }) => `${name}, spring bloom time`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 3,
  },

  // May
  {
    text: 'May flowers blooming',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 4,
  },
  {
    text: ({ name }) => `${name}, almost summer!`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 4,
  },

  // June
  {
    text: 'June sunshine',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 5,
  },
  {
    text: ({ name }) => `${name}, summer starts now`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 5,
  },

  // July
  {
    text: 'Peak summer vibes',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 6,
  },
  {
    text: ({ name }) => `${name}, hottest month energy`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 6,
  },

  // August
  {
    text: 'Late summer days',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 7,
  },
  {
    text: ({ name }) => `${name}, savoring summer`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 7,
  },

  // September
  {
    text: 'September reset',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 8,
  },
  {
    text: ({ name }) => `${name}, fall is calling`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 8,
  },

  // October
  {
    text: 'Spooky season vibes',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 9,
  },
  {
    text: ({ name }) => `${name}, autumn magic`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 9,
  },
  {
    text: '🎃 Spooky greetings',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 9,
  },
  {
    text: 'Trick or treat energy',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 9,
  },

  // November
  {
    text: 'November gratitude',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 10,
  },
  {
    text: ({ name }) => `${name}, thankful vibes`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 10,
  },
  {
    text: 'Thankful for today',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 10,
  },

  // December
  {
    text: 'December magic',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: ({ name }) => `${name}, holiday season!`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: 'Tis the season!',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: 'Festive vibes only',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ month }) => month === 11,
  },
  {
    text: ({ name }) => `Happy holidays, ${name}!`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month === 11,
  },

  // === WEEKDAY GREETINGS ===
  // General weekday
  {
    text: 'Weekday grind',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day !== undefined &&
      hour >= 5 && hour < 12 && day >= 1 && day <= 5,
  },
  {
    text: ({ name }) => `${name}, weekday warrior`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day !== undefined && day >= 1 && day <= 5,
  },

  // Monday
  {
    text: 'Happy Monday!',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 1 && hour >= 5 && hour < 12,
  },
  {
    text: 'New week energy',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 1 && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Happy Monday, ${name}`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 1 && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `New week, new wins, ${name}`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 1 && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Let's conquer this Monday, ${name}`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 1 && hour >= 5 && hour < 12,
  },

  // Tuesday
  {
    text: 'Happy Tuesday!',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 2 && hour >= 5 && hour < 12,
  },
  {
    text: 'Tuesday vibes',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 2 && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Happy Tuesday, ${name}`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 2 && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Tuesday energy, ${name}!`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 2 && hour >= 5 && hour < 12,
  },

  // Wednesday
  {
    text: 'Hump day!',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 3 && hour >= 5 && hour < 12,
  },
  {
    text: 'Halfway there',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 3 && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Hump day, ${name}!`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 3 && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Halfway there, ${name}`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 3 && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Wednesday vibes with ${name}`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 3 && hour >= 5 && hour < 12,
  },

  // Thursday
  {
    text: 'Happy Thursday!',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 4 && hour >= 5 && hour < 12,
  },
  {
    text: 'Almost Friday...',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 4 && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Happy Thursday, ${name}`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 4 && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Almost Friday, ${name}!`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 4 && hour >= 5 && hour < 12,
  },

  // Friday
  {
    text: 'Happy Friday!',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 5 && hour >= 5 && hour < 12,
  },
  {
    text: 'TGIF!',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 5 && hour >= 5 && hour < 12,
  },
  {
    text: 'Friday feeling',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 5 && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Happy Friday, ${name}!`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 5 && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `TGIF, ${name}`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 5 && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Friday feeling, ${name}`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 5 && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Weekend's calling, ${name}`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 5 && hour >= 5 && hour < 12,
  },
  {
    text: 'Friday afternoon!',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 5 && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `Friday afternoon, ${name}!`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 5 && hour >= 12 && hour < 18,
  },
  {
    text: 'Friday night!',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 5 && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `Friday night, ${name}!`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 5 && hour >= 18 && hour < 24,
  },

  // Saturday
  {
    text: 'Saturday!',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 6 && hour >= 5 && hour < 12,
  },
  {
    text: 'Weekend mode activated',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 6 && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Weekend mode, ${name}`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 6 && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Saturday vibes, ${name}!`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 6 && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `No alarms, ${name}?`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 6 && hour >= 5 && hour < 12,
  },

  // Sunday
  {
    text: 'Lazy Sunday',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 0 && hour >= 5 && hour < 12,
  },
  {
    text: 'Sunday funday',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 0 && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Lazy Sunday, ${name}?`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 0 && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Sunday funday, ${name}`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 0 && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `Recharge mode, ${name}`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day === 0 && hour >= 5 && hour < 12,
  },

  // Weekend (general)
  {
    text: 'Weekend afternoon',
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day !== undefined &&
      hour >= 12 && hour < 18 && (day === 0 || day === 6),
  },
  {
    text: ({ name }) => `Weekend afternoon with ${name}`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day !== undefined &&
      hour >= 12 && hour < 18 && (day === 0 || day === 6),
  },
  {
    text: 'Weekend nights',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day !== undefined &&
      hour >= 18 && hour < 24 && (day === 0 || day === 6),
  },
  {
    text: ({ name }) => `Weekend nights with ${name}`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour, day }) =>
      hour !== undefined && day !== undefined &&
      hour >= 18 && hour < 24 && (day === 0 || day === 6),
  },
  {
    text: 'Weekend warrior activated',
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: ({ name }) => `${name}, weekend warrior mode`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: ({ name }) => `Friday night ${name}`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 5,
  },
  {
    text: ({ name }) => `${name}, it's the freakin' weekend!`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day !== undefined && (day === 0 || day === 6),
  },
  {
    text: ({ name }) => `Monday ${name}, let's get it`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 1,
  },
  {
    text: ({ name }) => `Hump day ${name}!`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 3,
  },
  {
    text: ({ name }) => `${name}, almost there (it's Thursday)`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 4,
  },
  {
    text: ({ name }) => `Taco Tuesday ${name}`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ day }) => day === 2,
  },
  {
    text: ({ name }) => `${name}, spring has sprung`,
    mood: 'playful',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 2 || month === 3 || month === 4),
  },
  {
    text: ({ name }) => `Summer ${name}`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 5 || month === 6 || month === 7),
  },
  {
    text: ({ name }) => `${name}, fall is in the air`,
    mood: 'casual',
    static: { language: 'en', incognito: false, workMode: false, hasName: true },
    dynamic: ({ month }) => month !== undefined && (month === 8 || month === 9 || month === 10),
  },
];
