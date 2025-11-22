export type ThemeName = 'terracotta' | 'brutalist' | 'cyberpunk' | 'zen' | 'vaporwave' | 'claude' | 'synthwave' | 'matrix' | 'nord' | 'sunset';

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
  claude: {
    name: 'claude',
    displayName: 'Ultra Professional',
    colors: {
      background: '#2D2D2D',
      surface: '#343434',
      surfaceElevated: '#3D3D3D',
      primary: '#D97757',
      primaryLight: '#E89A7A',
      primaryDark: '#C85A38',
      secondary: '#8B8B8B',
      accent: '#D97757',
      accentAlt: '#9F9F9F',
      textPrimary: '#ECECEC',
      textSecondary: '#A8A8A8',
      textMuted: '#6B6B6B',
    },
    fonts: {
      display: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'SF Mono', 'Monaco', 'Inconsolata', monospace",
    },
    effects: {
      glowIntensity: 0,
      borderStyle: 'smooth',
    },
  },
  synthwave: {
    name: 'synthwave',
    displayName: 'Synthwave Nights',
    colors: {
      background: '#1a0b2e',
      surface: '#2b1055',
      surfaceElevated: '#3d1578',
      primary: '#ff006e',
      primaryLight: '#ff4d9c',
      primaryDark: '#cc0058',
      secondary: '#8b5cf6',
      accent: '#00f5ff',
      accentAlt: '#fb5607',
      textPrimary: '#f8f8ff',
      textSecondary: '#c4b5fd',
      textMuted: '#8b7fb8',
    },
    fonts: {
      display: "'Audiowide', cursive",
      body: "'Exo 2', sans-serif",
      mono: "'Share Tech Mono', monospace",
    },
    effects: {
      glowIntensity: 0.9,
      borderStyle: 'sharp',
    },
  },
  matrix: {
    name: 'matrix',
    displayName: 'Matrix Terminal',
    colors: {
      background: '#000000',
      surface: '#0d0d0d',
      surfaceElevated: '#1a1a1a',
      primary: '#00ff41',
      primaryLight: '#39ff6e',
      primaryDark: '#00cc34',
      secondary: '#008f11',
      accent: '#00ff41',
      accentAlt: '#003b00',
      textPrimary: '#00ff41',
      textSecondary: '#00cc34',
      textMuted: '#008f11',
    },
    fonts: {
      display: "'Courier New', monospace",
      body: "'Courier New', monospace",
      mono: "'Courier New', monospace",
    },
    effects: {
      glowIntensity: 0.7,
      borderStyle: 'sharp',
    },
  },
  nord: {
    name: 'nord',
    displayName: 'Nordic Frost',
    colors: {
      background: '#2e3440',
      surface: '#3b4252',
      surfaceElevated: '#434c5e',
      primary: '#88c0d0',
      primaryLight: '#a3d4e3',
      primaryDark: '#5e81ac',
      secondary: '#81a1c1',
      accent: '#8fbcbb',
      accentAlt: '#5e81ac',
      textPrimary: '#eceff4',
      textSecondary: '#d8dee9',
      textMuted: '#4c566a',
    },
    fonts: {
      display: "'Montserrat', sans-serif",
      body: "'Inter', sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
    effects: {
      glowIntensity: 0.2,
      borderStyle: 'smooth',
    },
  },
  sunset: {
    name: 'sunset',
    displayName: 'Tropical Sunset',
    colors: {
      background: '#1a1423',
      surface: '#2d1b3d',
      surfaceElevated: '#3d2651',
      primary: '#ff6b6b',
      primaryLight: '#ff9999',
      primaryDark: '#ee5a6f',
      secondary: '#f9ca24',
      accent: '#ff9ff3',
      accentAlt: '#feca57',
      textPrimary: '#ffeaa7',
      textSecondary: '#fab1a0',
      textMuted: '#a29bfe',
    },
    fonts: {
      display: "'Pacifico', cursive",
      body: "'Quicksand', sans-serif",
      mono: "'Roboto Mono', monospace",
    },
    effects: {
      glowIntensity: 0.5,
      borderStyle: 'smooth',
    },
  },
};
