import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useEnhancedGreeting, Language } from './hooks/useEnhancedGreeting';
import { useTheme } from './hooks/useTheme';
import { useTypingAnimation } from './hooks/useTypingAnimation';
import { useKonamiCode } from './hooks/useKonamiCode';
import { useEnhancedContext } from './hooks/useEnhancedContext';
import { CursorGlow } from './components/CursorGlow';
import { ParticleBackground } from './components/ParticleBackground';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { GreetingRoulette } from './components/GreetingRoulette';
import { ShareCard } from './components/ShareCard';
import { StatsPanel } from './components/StatsPanel';
import { ExamplePage } from './components/ExamplePage';
import { getUserStats, updateUserStats } from './utils/storage';

function App() {
  const [name, setName] = useState('');
  const [incognito, setIncognito] = useState(false);
  const [workMode, setWorkMode] = useState(false);
  const [techOk, setTechOk] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [showRoulette, setShowRoulette] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [useTyping, setUseTyping] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [easterEggActivated, setEasterEggActivated] = useState(false);
  const [showExample, setShowExample] = useState(false);

  const { theme, currentTheme, switchTheme, randomTheme } = useTheme();
  const context = useEnhancedContext();

  const greeting = useEnhancedGreeting({
    name: name || undefined,
    incognito,
    workMode,
    techOk,
    language,
    battery: context.battery,
    weather: context.weather,
  });

  const { displayedText, isComplete } = useTypingAnimation(
    greeting.text,
    useTyping ? 50 : 0
  );

  const [stats, setStats] = useState(getUserStats());

  // Update stats when greeting changes
  useEffect(() => {
    if (greeting.text) {
      const updatedStats = updateUserStats(greeting.text, greeting.mood, greeting.timeOfDay);
      setStats(updatedStats);
    }
  }, [greeting.text, greeting.mood, greeting.timeOfDay]);

  // Konami code easter egg
  useKonamiCode(useCallback(() => {
    setEasterEggActivated(true);
    confetti({
      particleCount: 200,
      spread: 160,
      origin: { y: 0.6 },
      colors: ['#e07856', '#ffd89b', '#19d3da', '#ff71ce'],
    });
    setTimeout(() => randomTheme(), 500);
    setTimeout(() => setEasterEggActivated(false), 3000);
  }, [randomTheme]));

  // Reuse audio context for better performance
  const audioContextRef = useState<AudioContext | null>(() => {
    if (typeof window !== 'undefined' && (window.AudioContext || (window as any).webkitAudioContext)) {
      return new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return null;
  })[0];

  const playSound = useCallback((type: 'click' | 'toggle' | 'special') => {
    if (!soundEnabled || !audioContextRef) return;

    const oscillator = audioContextRef.createOscillator();
    const gainNode = audioContextRef.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContextRef.destination);

    const frequencies = {
      click: 800,
      toggle: 600,
      special: 1200,
    };

    oscillator.frequency.value = frequencies[type];
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.1, audioContextRef.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.currentTime + 0.1);

    oscillator.start(audioContextRef.currentTime);
    oscillator.stop(audioContextRef.currentTime + 0.1);
  }, [soundEnabled, audioContextRef]);

  const isUltraProfessional = currentTheme === 'claude';

  const handleToggle = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    playSound('toggle');
    // Skip confetti in Ultra Professional mode for a cleaner experience
    if (!isUltraProfessional) {
      confetti({
        particleCount: 20,
        spread: 40,
        origin: { y: 0.6 },
        colors: [theme.colors.primary],
      });
    }
    setter(prev => !prev);
  };

  const moodColors = {
    casual: theme.colors.secondary,
    playful: theme.colors.accent,
    professional: theme.colors.accentAlt,
    mysterious: theme.colors.primaryLight,
  };

  // Show example page if toggled
  if (showExample) {
    return <ExamplePage onClose={() => setShowExample(false)} />;
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ fontFamily: theme.fonts.body }}>
      {/* Cursor Glow - disabled in Ultra Professional mode */}
      {!isUltraProfessional && (
        <CursorGlow
          color={moodColors[greeting.mood]}
          intensity={theme.effects.glowIntensity}
        />
      )}

      {/* Particle Background - disabled in Ultra Professional mode */}
      {!isUltraProfessional && (
        <ParticleBackground color={theme.colors.primary} particleCount={40} />
      )}

      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 bg-pattern opacity-0 animate-fade-in" />

      {/* Easter Egg Overlay */}
      <AnimatePresence>
        {easterEggActivated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm pointer-events-none"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              exit={{ scale: 0 }}
              className="text-8xl"
            >
              🎉
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="px-6 py-10 lg:px-10">
        {/* Header */}
        <motion.header
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal gradient-text mb-4 tracking-tight"
            style={{ fontFamily: theme.fonts.display }}
          >
            Johnifier
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] font-normal mb-4">
            200x better contextual greetings ✨
          </p>
          <motion.button
            onClick={() => setShowExample(true)}
            className="px-6 py-2 rounded-lg text-sm"
            style={{
              fontFamily: theme.fonts.mono,
              backgroundColor: `${theme.colors.accent}22`,
              color: theme.colors.accent,
              border: `1px solid ${theme.colors.accent}40`,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🎨 View Showcase
          </motion.button>
        </motion.header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto flex flex-col gap-8">
          {/* Greeting Display */}
          <motion.section
            className="bg-[var(--color-surface)] rounded-2xl p-10 lg:p-16 text-center border relative overflow-hidden"
            style={{
              borderColor: `${theme.colors.primary}33`,
              borderWidth: theme.effects.borderStyle === 'brutalist' ? '4px' : '1px',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="shimmer" />

            <div
              className="text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight transition-all duration-400 min-h-[1.2em]"
              style={{
                fontFamily: theme.fonts.display,
                color: moodColors[greeting.mood],
                textShadow: greeting.mood === 'mysterious' ? `0 0 20px ${theme.colors.primary}` : 'none',
              }}
            >
              {useTyping ? displayedText : greeting.text}
              {useTyping && !isComplete && <span className="animate-pulse">|</span>}
            </div>

            <div className="flex gap-4 justify-center flex-wrap mb-6">
              <span
                className="px-6 py-2 rounded-lg text-sm font-medium lowercase tracking-wider border"
                style={{
                  fontFamily: theme.fonts.mono,
                  backgroundColor: `${theme.colors.primary}33`,
                  color: theme.colors.primaryLight,
                  borderColor: theme.colors.primary,
                }}
              >
                {greeting.timeOfDay}
              </span>
              <span
                className="px-6 py-2 rounded-lg text-sm font-medium lowercase tracking-wider border"
                style={{
                  fontFamily: theme.fonts.mono,
                  backgroundColor: greeting.mood === 'professional' ? `${theme.colors.accentAlt}33` : `${theme.colors.accent}33`,
                  color: greeting.mood === 'professional' ? theme.colors.accentAlt : theme.colors.accent,
                  borderColor: greeting.mood === 'professional' ? theme.colors.accentAlt : theme.colors.accent,
                }}
              >
                {greeting.mood}
              </span>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2 justify-center flex-wrap">
              <motion.button
                onClick={() => setShowRoulette(!showRoulette)}
                className="px-4 py-2 rounded-lg text-sm"
                style={{
                  fontFamily: theme.fonts.mono,
                  backgroundColor: `${theme.colors.primary}33`,
                  color: theme.colors.textPrimary,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🎰 Roulette
              </motion.button>
              <motion.button
                onClick={() => setShowShare(!showShare)}
                className="px-4 py-2 rounded-lg text-sm"
                style={{
                  fontFamily: theme.fonts.mono,
                  backgroundColor: `${theme.colors.accent}33`,
                  color: theme.colors.textPrimary,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📤 Share
              </motion.button>
              <motion.button
                onClick={() => setShowStats(!showStats)}
                className="px-4 py-2 rounded-lg text-sm"
                style={{
                  fontFamily: theme.fonts.mono,
                  backgroundColor: `${theme.colors.accentAlt}33`,
                  color: theme.colors.textPrimary,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📊 Stats
              </motion.button>
            </div>
          </motion.section>

          {/* Roulette Panel */}
          <AnimatePresence>
            {showRoulette && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-[var(--color-surface)] rounded-2xl p-8 border overflow-hidden"
                style={{ borderColor: `${theme.colors.primary}33` }}
              >
                <GreetingRoulette
                  greetings={greeting.allGreetings}
                  onSelect={(g) => console.log('Selected:', g)}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Share Panel */}
          <AnimatePresence>
            {showShare && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-[var(--color-surface)] rounded-2xl p-8 border overflow-hidden"
                style={{ borderColor: `${theme.colors.primary}33` }}
              >
                <ShareCard
                  greeting={greeting.text}
                  mood={greeting.mood}
                  timeOfDay={greeting.timeOfDay}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stats Panel */}
          <AnimatePresence>
            {showStats && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <StatsPanel
                  stats={stats}
                  battery={context.battery}
                  weather={context.weather}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Controls */}
          <motion.section
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm text-[var(--color-text-secondary)] lowercase tracking-wider"
                style={{ fontFamily: theme.fonts.mono }}
              >
                Your name
              </label>
              <input
                id="name"
                type="text"
                className="bg-[var(--color-surface-elevated)] border rounded-2xl px-6 py-4 text-lg text-[var(--color-text-primary)] transition-all focus:outline-none focus:ring-4"
                style={{
                  fontFamily: theme.fonts.body,
                  borderColor: `${theme.colors.primary}4D`,
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name..."
              />
            </div>

            <div className="flex gap-4 flex-wrap">
              <motion.button
                className="flex-1 min-w-[140px] border-2 rounded-2xl px-6 py-4 text-base cursor-pointer flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  fontFamily: theme.fonts.body,
                  backgroundColor: incognito ? theme.colors.primary : theme.colors.surfaceElevated,
                  borderColor: incognito ? theme.colors.primary : `${theme.colors.primary}33`,
                  color: incognito ? theme.colors.background : theme.colors.textSecondary,
                }}
                onClick={() => handleToggle(setIncognito)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xl">{incognito ? '🕶️' : '👤'}</span>
                <span className="font-semibold">Incognito</span>
              </motion.button>

              <motion.button
                className="flex-1 min-w-[140px] border-2 rounded-2xl px-6 py-4 text-base cursor-pointer flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  fontFamily: theme.fonts.body,
                  backgroundColor: workMode ? theme.colors.primary : theme.colors.surfaceElevated,
                  borderColor: workMode ? theme.colors.primary : `${theme.colors.primary}33`,
                  color: workMode ? theme.colors.background : theme.colors.textSecondary,
                }}
                onClick={() => handleToggle(setWorkMode)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xl">{workMode ? '💼' : '🎨'}</span>
                <span className="font-semibold">Work Mode</span>
              </motion.button>

              <motion.button
                className="flex-1 min-w-[140px] border-2 rounded-2xl px-6 py-4 text-base cursor-pointer flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  fontFamily: theme.fonts.body,
                  backgroundColor: useTyping ? theme.colors.primary : theme.colors.surfaceElevated,
                  borderColor: useTyping ? theme.colors.primary : `${theme.colors.primary}33`,
                  color: useTyping ? theme.colors.background : theme.colors.textSecondary,
                }}
                onClick={() => handleToggle(setUseTyping)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xl">⌨️</span>
                <span className="font-semibold">Typing</span>
              </motion.button>

              <motion.button
                className="flex-1 min-w-[140px] border-2 rounded-2xl px-6 py-4 text-base cursor-pointer flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  fontFamily: theme.fonts.body,
                  backgroundColor: soundEnabled ? theme.colors.primary : theme.colors.surfaceElevated,
                  borderColor: soundEnabled ? theme.colors.primary : `${theme.colors.primary}33`,
                  color: soundEnabled ? theme.colors.background : theme.colors.textSecondary,
                }}
                onClick={() => handleToggle(setSoundEnabled)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xl">{soundEnabled ? '🔊' : '🔇'}</span>
                <span className="font-semibold">Sound</span>
              </motion.button>

              <motion.button
                className="flex-1 min-w-[140px] border-2 rounded-2xl px-6 py-4 text-base cursor-pointer flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  fontFamily: theme.fonts.body,
                  backgroundColor: techOk ? theme.colors.primary : theme.colors.surfaceElevated,
                  borderColor: techOk ? theme.colors.primary : `${theme.colors.primary}33`,
                  color: techOk ? theme.colors.background : theme.colors.textSecondary,
                }}
                onClick={() => handleToggle(setTechOk)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xl">{techOk ? '💻' : '🚫'}</span>
                <span className="font-semibold">Tech OK</span>
              </motion.button>
            </div>

            {/* Language Selector */}
            <div className="flex gap-2 flex-wrap">
              {(['en', 'es', 'fr', 'de', 'ja'] as Language[]).map((lang) => (
                <motion.button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className="px-4 py-2 rounded-lg text-sm"
                  style={{
                    fontFamily: theme.fonts.mono,
                    backgroundColor: language === lang ? theme.colors.primary : theme.colors.surfaceElevated,
                    color: language === lang ? theme.colors.background : theme.colors.textSecondary,
                    borderWidth: '1px',
                    borderColor: `${theme.colors.primary}33`,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {lang.toUpperCase()}
                </motion.button>
              ))}
            </div>
          </motion.section>

          {/* Theme Switcher */}
          <motion.section
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3
              className="text-xl text-[var(--color-text-secondary)]"
              style={{ fontFamily: theme.fonts.display }}
            >
              Choose Your Vibe
            </h3>
            <ThemeSwitcher
              currentTheme={currentTheme}
              onThemeChange={switchTheme}
              onRandomTheme={randomTheme}
            />
          </motion.section>

          {/* Info Cards */}
          <motion.section
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div
              className="bg-[var(--color-surface)] rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: `${theme.colors.primary}26` }}
            >
              <h3
                className="text-2xl mb-4 font-normal"
                style={{
                  fontFamily: theme.fonts.display,
                  color: theme.colors.primaryLight,
                }}
              >
                Context-Aware
              </h3>
              <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                Greetings adapt to time, weather, battery level, and more.
                Try the Konami code for a surprise! ⬆⬆⬇⬇⬅➡⬅➡BA
              </p>
            </div>

            <div
              className="bg-[var(--color-surface)] rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: `${theme.colors.primary}26` }}
            >
              <h3
                className="text-2xl mb-4 font-normal"
                style={{
                  fontFamily: theme.fonts.display,
                  color: theme.colors.primaryLight,
                }}
              >
                Multi-Language
              </h3>
              <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                Greetings in English, Spanish, French, German, and Japanese.
                Switch languages on the fly!
              </p>
            </div>

            <div
              className="bg-[var(--color-surface)] rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: `${theme.colors.primary}26` }}
            >
              <h3
                className="text-2xl mb-4 font-normal"
                style={{
                  fontFamily: theme.fonts.display,
                  color: theme.colors.primaryLight,
                }}
              >
                5 Unique Themes
              </h3>
              <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                From warm terracotta to neon cyberpunk, brutalist to zen.
                Each with distinct fonts, colors, and vibes.
              </p>
            </div>
          </motion.section>
        </main>

        {/* Footer */}
        <motion.footer
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <code
            className="text-sm bg-[var(--color-surface)] px-6 py-3 rounded-lg border inline-block"
            style={{
              fontFamily: theme.fonts.mono,
              color: theme.colors.textMuted,
              borderColor: `${theme.colors.primary}26`,
            }}
          >
            useEnhancedGreeting({'{'} name, incognito, workMode, techOk, language {'}'})
          </code>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;
