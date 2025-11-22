import { motion } from 'framer-motion';
import { themes, ThemeName } from '../themes';

interface ExamplePageProps {
  onClose: () => void;
}

export function ExamplePage({ onClose }: ExamplePageProps) {
  const themesList: ThemeName[] = ['terracotta', 'brutalist', 'cyberpunk', 'zen', 'vaporwave', 'claude', 'synthwave', 'matrix', 'nord', 'sunset'];

  const exampleGreetings = {
    terracotta: 'Good evening, creative soul',
    brutalist: 'HELLO THERE',
    cyberpunk: 'Welcome back, cyber warrior',
    zen: 'Peace be with you',
    vaporwave: 'Aesthetic vibes only',
    claude: 'Good evening, Natalie',
    synthwave: 'Neon dreams ahead',
    matrix: 'Wake up, Neo',
    nord: 'Frost and focus',
    sunset: 'Golden hour vibes',
  };

  const themeDescriptions = {
    terracotta: 'Warm, earthy tones with serif fonts for a cozy creative vibe',
    brutalist: 'Raw, high-contrast design with bold geometric elements',
    cyberpunk: 'Neon-soaked future with glowing accents and tech aesthetic',
    zen: 'Light, minimal design for calm and focused experiences',
    vaporwave: 'Retro 80s dreamscape with bold colors and nostalgia',
    claude: 'Ultra professional dark theme with clean typography',
    synthwave: 'Retro-futuristic purple and pink gradients with intense glow',
    matrix: 'Classic green-on-black terminal hacker aesthetic',
    nord: 'Cool Scandinavian blues with minimal Arctic elegance',
    sunset: 'Warm tropical colors with playful beach sunset vibes',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            Johnifier Showcase
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            10 Unique Themes • 850+ Greetings • Context-Aware • Multi-Language
          </p>
          <motion.button
            onClick={onClose}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm border border-white/20 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to App
          </motion.button>
        </motion.div>

        {/* Theme Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {themesList.map((themeName, index) => {
            const theme = themes[themeName];
            return (
              <motion.div
                key={themeName}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden border border-white/10"
              >
                {/* Theme Preview */}
                <div
                  className="p-8 min-h-[300px] flex flex-col justify-between"
                  style={{
                    backgroundColor: theme.colors.background,
                    fontFamily: theme.fonts.body,
                  }}
                >
                  {/* Theme Name Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${theme.colors.primary}33`,
                        color: theme.colors.primary,
                        fontFamily: theme.fonts.mono,
                      }}
                    >
                      {theme.displayName}
                    </span>
                    <span className="text-2xl">
                      {themeName === 'terracotta' && '🏺'}
                      {themeName === 'brutalist' && '⬛'}
                      {themeName === 'cyberpunk' && '💎'}
                      {themeName === 'zen' && '🌸'}
                      {themeName === 'vaporwave' && '🌈'}
                      {themeName === 'claude' && '✨'}
                      {themeName === 'synthwave' && '🌃'}
                      {themeName === 'matrix' && '💚'}
                      {themeName === 'nord' && '❄️'}
                      {themeName === 'sunset' && '🌅'}
                    </span>
                  </div>

                  {/* Sample Greeting */}
                  <div>
                    <h3
                      className="text-3xl mb-4 leading-tight"
                      style={{
                        fontFamily: theme.fonts.display,
                        color: theme.colors.primary,
                        textShadow: theme.effects.glowIntensity > 0.5
                          ? `0 0 20px ${theme.colors.primary}`
                          : 'none',
                      }}
                    >
                      {exampleGreetings[themeName]}
                    </h3>

                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap">
                      <span
                        className="px-3 py-1 rounded-lg text-xs"
                        style={{
                          backgroundColor: `${theme.colors.accent}33`,
                          color: theme.colors.accent,
                          fontFamily: theme.fonts.mono,
                        }}
                      >
                        evening
                      </span>
                      <span
                        className="px-3 py-1 rounded-lg text-xs"
                        style={{
                          backgroundColor: `${theme.colors.secondary}33`,
                          color: theme.colors.textSecondary,
                          fontFamily: theme.fonts.mono,
                        }}
                      >
                        casual
                      </span>
                    </div>
                  </div>

                  {/* Sample Button */}
                  <button
                    className="w-full mt-4 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                    style={{
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.background,
                    }}
                  >
                    Experience Theme
                  </button>
                </div>

                {/* Description */}
                <div className="p-4 bg-white/5 backdrop-blur-sm">
                  <p className="text-sm text-gray-400">
                    {themeDescriptions[themeName]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-4xl mb-3">🌍</div>
            <h3 className="text-xl font-bold mb-2">Multi-Language</h3>
            <p className="text-gray-400 text-sm">
              English, Spanish, French, German, and Japanese support
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-4xl mb-3">🕐</div>
            <h3 className="text-xl font-bold mb-2">Time-Aware</h3>
            <p className="text-gray-400 text-sm">
              Greetings adapt to morning, afternoon, evening, and late night
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-4xl mb-3">🌤️</div>
            <h3 className="text-xl font-bold mb-2">Context-Sensitive</h3>
            <p className="text-gray-400 text-sm">
              Battery level, weather, and day of week awareness
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-xl font-bold mb-2">Rich Themes</h3>
            <p className="text-gray-400 text-sm">
              Custom fonts, colors, effects, and animations per theme
            </p>
          </div>
        </motion.div>

        {/* Code Example */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/10"
        >
          <h2 className="text-2xl font-bold mb-4">Usage Example</h2>
          <pre className="bg-black/30 p-6 rounded-lg overflow-x-auto">
            <code className="text-sm text-green-400 font-mono">
{`import { useEnhancedGreeting } from './hooks/useEnhancedGreeting';

function MyApp() {
  const greeting = useEnhancedGreeting({
    name: 'Alex',
    workMode: true,
    language: 'en',
  });

  return <h1>{greeting.text}</h1>;
  // Output: "Ready to ship, Alex?"
}`}
            </code>
          </pre>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12 text-gray-500"
        >
          <p>Built with React, TypeScript, Tailwind CSS, and Framer Motion</p>
        </motion.div>
      </div>
    </div>
  );
}
