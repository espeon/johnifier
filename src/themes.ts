export type ThemeName = 'terracotta' | 'brutalist' | 'cyberpunk' | 'zen' | 'vaporwave';

export interface Theme {
  name: ThemeName;
  displayName: string;
  colors: {
    background: string;
    surface: string;
    surfaceElevated: string;
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    accent: string;
    accentAlt: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
  };
  fonts: {
    display: string;
    body: string;
    mono: string;
  };
  effects: {
    glowIntensity: number;
    borderStyle: 'smooth' | 'sharp' | 'brutalist';
  };
}

export const themes: Record<ThemeName, Theme> = {
  terracotta: {
    name: 'terracotta',
    displayName: 'Warm Terracotta',
    colors: {
      background: '#0a1628',
      surface: '#132238',
      surfaceElevated: '#1a2f4a',
      primary: '#e07856',
      primaryLight: '#f5a686',
      primaryDark: '#c85a38',
      secondary: '#f4e4d7',
      accent: '#ffd89b',
      accentAlt: '#19d3da',
      textPrimary: '#f9f4ef',
      textSecondary: '#c4b5a0',
      textMuted: '#8b8174',
    },
    fonts: {
      display: "'DM Serif Display', serif",
      body: "'Crimson Pro', serif",
      mono: "'Fira Code', monospace",
    },
    effects: {
      glowIntensity: 0.3,
      borderStyle: 'smooth',
    },
  },
  brutalist: {
    name: 'brutalist',
    displayName: 'Brutalist',
    colors: {
      background: '#000000',
      surface: '#1a1a1a',
      surfaceElevated: '#2a2a2a',
      primary: '#ffffff',
      primaryLight: '#ffffff',
      primaryDark: '#cccccc',
      secondary: '#ffff00',
      accent: '#00ff00',
      accentAlt: '#ff0000',
      textPrimary: '#ffffff',
      textSecondary: '#cccccc',
      textMuted: '#888888',
    },
    fonts: {
      display: "'Courier New', monospace",
      body: "'Arial', sans-serif",
      mono: "'Courier New', monospace",
    },
    effects: {
      glowIntensity: 0,
      borderStyle: 'brutalist',
    },
  },
  cyberpunk: {
    name: 'cyberpunk',
    displayName: 'Neon Cyberpunk',
    colors: {
      background: '#0a0e27',
      surface: '#1a1f3a',
      surfaceElevated: '#252b4a',
      primary: '#ff2a6d',
      primaryLight: '#ff5e92',
      primaryDark: '#d1004f',
      secondary: '#05d9e8',
      accent: '#d1f7ff',
      accentAlt: '#01012b',
      textPrimary: '#ffffff',
      textSecondary: '#a5b3d9',
      textMuted: '#6b7aa1',
    },
    fonts: {
      display: "'Orbitron', sans-serif",
      body: "'Rajdhani', sans-serif",
      mono: "'Share Tech Mono', monospace",
    },
    effects: {
      glowIntensity: 0.8,
      borderStyle: 'sharp',
    },
  },
  zen: {
    name: 'zen',
    displayName: 'Minimal Zen',
    colors: {
      background: '#f5f5f0',
      surface: '#ffffff',
      surfaceElevated: '#fafaf8',
      primary: '#2d3436',
      primaryLight: '#636e72',
      primaryDark: '#000000',
      secondary: '#dfe6e9',
      accent: '#74b9ff',
      accentAlt: '#a29bfe',
      textPrimary: '#2d3436',
      textSecondary: '#636e72',
      textMuted: '#b2bec3',
    },
    fonts: {
      display: "'Lora', serif",
      body: "'Source Sans Pro', sans-serif",
      mono: "'IBM Plex Mono', monospace",
    },
    effects: {
      glowIntensity: 0.1,
      borderStyle: 'smooth',
    },
  },
  vaporwave: {
    name: 'vaporwave',
    displayName: 'Vaporwave Dreams',
    colors: {
      background: '#2b0d3e',
      surface: '#3d1259',
      surfaceElevated: '#4a1770',
      primary: '#ff71ce',
      primaryLight: '#ff9dd6',
      primaryDark: '#e64bb8',
      secondary: '#01cdfe',
      accent: '#b967ff',
      accentAlt: '#05ffa1',
      textPrimary: '#ffffff',
      textSecondary: '#ff71ce',
      textMuted: '#b967ff',
    },
    fonts: {
      display: "'Righteous', cursive",
      body: "'VT323', monospace",
      mono: "'VT323', monospace",
    },
    effects: {
      glowIntensity: 0.6,
      borderStyle: 'sharp',
    },
  },
};
