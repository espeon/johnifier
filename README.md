# Johnifier 🎉

**200x better contextual greetings** - A delightfully over-the-top greeting system built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🎨 5 Unique Themes
- **Warm Terracotta** - Classic warm tones with serif elegance
- **Brutalist** - Raw, minimal, high-contrast black & white
- **Neon Cyberpunk** - Electric pinks and blues with glow effects
- **Minimal Zen** - Light, airy, peaceful minimalism
- **Vaporwave Dreams** - Retro 80s aesthetics with purple and pink

Each theme has custom fonts, colors, and visual effects!

### 🌍 Multi-Language Support
Greetings in 5 languages:
- English
- Spanish (Español)
- French (Français)
- German (Deutsch)
- Japanese (日本語)

### 🧠 Context-Aware Greetings
Greetings adapt to:
- **Time of day** - Morning, afternoon, evening, late night
- **Day of week** - Special messages for each day
- **Battery level** - "Running low, just like your battery (15%)"
- **Weather** - Real-time weather integration with location
- **User modes** - Incognito, work mode, casual

### 🎭 Interactive Features
- **Greeting Roulette** 🎰 - Spin to get a random greeting with confetti
- **Share Cards** 📤 - Share your greeting as a beautiful card
- **Stats Panel** 📊 - Track your visit streak, total visits, battery, weather
- **Typing Animation** ⌨️ - Character-by-character typing effect (toggleable)
- **Sound Effects** 🔊 - Subtle audio feedback (toggleable)

### 🎮 Easter Eggs
- **Konami Code** - Type ⬆⬆⬇⬇⬅➡⬅➡BA for a surprise!
- **Secret greetings** - Discover hidden messages

### 🌟 Visual Effects
- **Cursor-following glow** - Mood-based gradient blob follows your cursor
- **Particle constellations** - Canvas-based particle background
- **Confetti bursts** - Celebratory animations on interactions
- **Smooth transitions** - Framer Motion powered animations
- **Shimmer effects** - Subtle light animations

### 📊 Tracking & Stats
- **Visit streaks** - Track consecutive days
- **Greeting history** - Last 50 greetings saved
- **Context display** - See battery level and weather at a glance

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 💻 Usage

### Basic Hook
```tsx
import { useEnhancedGreeting } from './hooks/useEnhancedGreeting';

function MyComponent() {
  const greeting = useEnhancedGreeting();

  return <h1>{greeting.text}</h1>;
}
```

### With All Options
```tsx
const greeting = useEnhancedGreeting({
  name: 'Alice',        // Personalized greetings
  incognito: false,     // Anonymous mode
  workMode: false,      // Professional greetings
  language: 'en',       // Language (en, es, fr, de, ja)
  battery: 85,          // Battery level for context
  weather: {            // Weather for context
    condition: 'sunny',
    temp: 22
  }
});

// Returns:
// {
//   text: "Good morning, Alice",
//   timeOfDay: "morning",
//   mood: "casual",
//   allGreetings: ["Good morning, Alice", "Morning, Alice", ...]
// }
```

### Theme System
```tsx
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, currentTheme, switchTheme, randomTheme } = useTheme();

  return (
    <div style={{ backgroundColor: theme.colors.background }}>
      <button onClick={() => switchTheme('cyberpunk')}>
        Cyberpunk Mode
      </button>
      <button onClick={randomTheme}>
        Random Theme
      </button>
    </div>
  );
}
```

## 🎨 Customization

### Adding New Greetings
Edit `src/hooks/useEnhancedGreeting.ts`:

```tsx
const greetings: Greeting[] = [
  // Add your custom greeting
  {
    filter: () => hasName && isMorning && isFriday,
    text: `TGIF, ${name}! Ready to crush it?`,
    mood: 'playful'
  },
  // ... existing greetings
];
```

### Creating a Custom Theme
Edit `src/themes.ts`:

```tsx
export const themes = {
  // ... existing themes
  myTheme: {
    name: 'myTheme',
    displayName: 'My Custom Theme',
    colors: {
      background: '#your-color',
      primary: '#your-color',
      // ... more colors
    },
    fonts: {
      display: "'Your Display Font', serif",
      body: "'Your Body Font', sans-serif",
      mono: "'Your Mono Font', monospace",
    },
    effects: {
      glowIntensity: 0.5,  // 0-1
      borderStyle: 'smooth', // 'smooth' | 'sharp' | 'brutalist'
    },
  },
};
```

### Adding New Languages
Edit `src/hooks/useEnhancedGreeting.ts`:

```tsx
const translations: Record<Language, Record<string, string>> = {
  // ... existing languages
  pt: {
    morning: 'Bom dia',
    afternoon: 'Boa tarde',
    evening: 'Boa noite',
    lateNight: 'Madrugada',
  },
};
```

## 🏗️ Architecture

### Key Components
- `App.tsx` - Main application with all features integrated
- `useEnhancedGreeting` - Core greeting logic with context awareness
- `useTheme` - Theme management and switching
- `useTypingAnimation` - Character-by-character typing effect
- `useKonamiCode` - Easter egg detection
- `useEnhancedContext` - Battery and weather context
- `CursorGlow` - Cursor-following gradient effect
- `ParticleBackground` - Canvas-based particle system
- `GreetingRoulette` - Randomizer with confetti
- `ShareCard` - Share greeting functionality
- `StatsPanel` - Visit tracking and stats display
- `ThemeSwitcher` - Theme selection UI

### Data Flow
```
User Input → Hooks → Context Providers → Components → Visual Effects
```

### Storage
- Theme preference stored in `localStorage`
- User stats and streaks in `localStorage`
- Weather/battery fetched on load

## 🎯 All Features Implemented

✅ Cursor-following gradient blob
✅ Canvas particle constellations
✅ 5 unique theme system
✅ Confetti effects
✅ Typing animation
✅ Weather awareness
✅ Battery level detection
✅ Visit streak tracking
✅ Greeting roulette
✅ Share cards
✅ Sound effects
✅ Konami code easter egg
✅ Multi-language support (5 languages)
✅ Context-aware greetings
✅ Smooth animations with Framer Motion

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **Canvas Confetti** - Celebration effects
- **Vite** - Build tool & dev server
- **Canvas API** - Custom particle effects
- **Web Audio API** - Sound effects
- **Geolocation API** - Weather context
- **Battery API** - Battery context
- **LocalStorage** - Persistence

## 🌐 Browser APIs Used

- Geolocation API (for weather)
- Battery Status API (for battery greetings)
- Web Audio API (for sound effects)
- LocalStorage (for persistence)
- Canvas API (for particles)
- Navigator Share API (for sharing)

## 📱 Features by Category

### Visual Polish
- Staggered animations with delays
- Smooth theme transitions
- Particle constellations
- Cursor glow effects
- Shimmer animations
- Confetti celebrations
- Typing effects

### Interactivity
- Roulette spinner
- Theme switcher
- Language selector
- Mode toggles
- Sound toggle
- Stats panel
- Share functionality

### Intelligence
- Time-aware greetings
- Weather integration
- Battery awareness
- Streak tracking
- Context sensitivity
- Multi-language
- Mood detection

## 🎮 Try These!

1. **Type the Konami Code**: ⬆⬆⬇⬇⬅➡⬅➡BA
2. **Switch to Cyberpunk theme** and see the glow effects
3. **Enable sound** and click buttons for audio feedback
4. **Spin the roulette** for confetti explosions
5. **Check your stats** to see visit streaks
6. **Try different languages** for localized greetings
7. **Check at different times** for time-aware messages
8. **Let your battery drain** for battery-aware greetings

## 📄 License

MIT

## 🙏 Credits

Built with care using:
- Google Fonts (10+ font families)
- Open-Meteo (weather data)
- Canvas Confetti by Kiril Vatev
- Framer Motion
- And lots of coffee ☕

---

**Made 200x better** ✨
