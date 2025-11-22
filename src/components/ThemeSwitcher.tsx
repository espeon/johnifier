import { motion } from 'framer-motion';
import { ThemeName } from '../themes';

interface ThemeSwitcherProps {
  currentTheme: ThemeName;
  onThemeChange: (theme: ThemeName) => void;
  onRandomTheme: () => void;
}

const themeIcons: Record<ThemeName, string> = {
  terracotta: '🏺',
  brutalist: '⬛',
  cyberpunk: '💎',
  zen: '🌸',
  vaporwave: '🌈',
};

const themeNames: Record<ThemeName, string> = {
  terracotta: 'Terracotta',
  brutalist: 'Brutalist',
  cyberpunk: 'Cyberpunk',
  zen: 'Zen',
  vaporwave: 'Vaporwave',
};

export function ThemeSwitcher({ currentTheme, onThemeChange, onRandomTheme }: ThemeSwitcherProps) {
  const themes: ThemeName[] = ['terracotta', 'brutalist', 'cyberpunk', 'zen', 'vaporwave'];

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {themes.map((theme) => (
        <motion.button
          key={theme}
          onClick={() => onThemeChange(theme)}
          className={`px-4 py-2 rounded-lg font-mono text-sm transition-all flex items-center gap-2 ${
            currentTheme === theme
              ? 'bg-[var(--color-primary)] text-[var(--color-background)] shadow-lg'
              : 'bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] border border-[var(--color-primary)]/20'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{themeIcons[theme]}</span>
          <span className="hidden sm:inline">{themeNames[theme]}</span>
        </motion.button>
      ))}
      <motion.button
        onClick={onRandomTheme}
        className="px-4 py-2 rounded-lg font-mono text-sm bg-[var(--color-accent)]/20 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/30 border border-[var(--color-accent)]/40"
        whileHover={{ scale: 1.05, rotate: 180 }}
        whileTap={{ scale: 0.95 }}
      >
        🎲
      </motion.button>
    </div>
  );
}
