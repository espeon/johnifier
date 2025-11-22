import { useState, useEffect } from 'react';
import { Theme, ThemeName, themes } from '../themes';

const THEME_STORAGE_KEY = 'johnifier_theme';

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return (stored as ThemeName) || 'terracotta';
  });

  const theme = themes[currentTheme];

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, currentTheme);

    // Apply theme to document
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      root.style.setProperty(`--color-${cssKey}`, value);
    });

    Object.entries(theme.fonts).forEach(([key, value]) => {
      root.style.setProperty(`--font-${key}`, value);
    });
  }, [currentTheme, theme]);

  const switchTheme = (themeName: ThemeName) => {
    setCurrentTheme(themeName);
  };

  const randomTheme = () => {
    const themeNames = Object.keys(themes) as ThemeName[];
    const randomIndex = Math.floor(Math.random() * themeNames.length);
    setCurrentTheme(themeNames[randomIndex]);
  };

  return {
    theme,
    currentTheme,
    switchTheme,
    randomTheme,
    allThemes: themes,
  };
}
