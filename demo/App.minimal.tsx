import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEnhancedGreeting, Language } from './hooks/useEnhancedGreeting';
import { useEnhancedContext } from './hooks/useEnhancedContext';

function App() {
  const [name, setName] = useState('');
  const [incognito, setIncognito] = useState(false);
  const [workMode, setWorkMode] = useState(false);
  const [techOk, setTechOk] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [showControls, setShowControls] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  useEffect(() => {
    setMounted(true);
  }, []);

  // Split greeting into words for staggered animation
  const words = greeting.text.split(' ');

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1a1a1a] relative overflow-hidden font-serif">
      {/* Subtle grain texture overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-noise" />

      {/* Main greeting display */}
      <main className="min-h-screen flex flex-col items-center justify-center px-8 py-20">
        <motion.div
          className="max-w-5xl w-full text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting text - huge and bold */}
          <h1 className="text-greeting leading-[0.95] mb-12 tracking-tight">
            {mounted && words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtle metadata */}
          <motion.div
            className="flex gap-6 justify-center items-center text-xs tracking-[0.2em] uppercase opacity-40 font-mono mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <span>{greeting.timeOfDay}</span>
            <span>·</span>
            <span>{greeting.mood}</span>
            <span>·</span>
            <span>{language.toUpperCase()}</span>
          </motion.div>

          {/* Minimal name input */}
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="your name"
              className="w-full bg-transparent border-b-2 border-[#1a1a1a]/20 focus:border-[#1a1a1a]
                         px-4 py-3 text-center text-lg tracking-wide transition-all duration-300
                         focus:outline-none placeholder:text-[#1a1a1a]/30 font-sans"
            />
          </motion.div>
        </motion.div>
      </main>

      {/* Floating controls toggle */}
      <motion.button
        onClick={() => setShowControls(!showControls)}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#1a1a1a] text-[#FAF8F5]
                   flex items-center justify-center text-xs font-mono tracking-wider hover:scale-110
                   transition-transform duration-200 shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
      >
        {showControls ? '×' : '⋮'}
      </motion.button>

      {/* Minimal controls panel */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            className="fixed bottom-24 right-8 bg-[#1a1a1a] text-[#FAF8F5] p-6 rounded-lg shadow-2xl
                       min-w-[280px] font-mono text-sm"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {/* Toggles */}
            <div className="space-y-4 mb-6">
              <ToggleButton
                label="incognito"
                active={incognito}
                onClick={() => setIncognito(!incognito)}
              />
              <ToggleButton
                label="work mode"
                active={workMode}
                onClick={() => setWorkMode(!workMode)}
              />
              <ToggleButton
                label="tech ok"
                active={techOk}
                onClick={() => setTechOk(!techOk)}
              />
            </div>

            {/* Language selector */}
            <div className="pt-4 border-t border-[#FAF8F5]/20">
              <div className="text-[10px] uppercase tracking-widest opacity-50 mb-3">Language</div>
              <div className="flex gap-2 flex-wrap">
                {(['en', 'es', 'fr', 'de', 'ja'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-all duration-200
                              ${language === lang
                                ? 'bg-[#FAF8F5] text-[#1a1a1a]'
                                : 'bg-[#FAF8F5]/10 hover:bg-[#FAF8F5]/20'
                              }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Tiny signature */}
            <div className="mt-6 pt-4 border-t border-[#FAF8F5]/20 text-[10px] opacity-30 text-center tracking-widest">
              JOHNIFIER
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Eczar:wght@400;600;800&family=JetBrains+Mono:wght@400;500&display=swap');

        body {
          font-family: 'Eczar', serif;
        }

        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        .font-sans {
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .text-greeting {
          font-size: clamp(2rem, 12vw, 7rem);
          font-weight: 800;
          font-family: 'Eczar', serif;
          color: #1a1a1a;
          line-height: 0.95;
        }

        /* Subtle grain texture */
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        ::selection {
          background: #1a1a1a;
          color: #FAF8F5;
        }
      `}</style>
    </div>
  );
}

// Minimal toggle button component
function ToggleButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between group"
    >
      <span className="text-xs uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
      <div className={`w-10 h-5 rounded-full relative transition-all duration-300
                      ${active ? 'bg-[#FAF8F5]' : 'bg-[#FAF8F5]/20'}`}>
        <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-[#1a1a1a] transition-all duration-300
                        ${active ? 'left-5' : 'left-0.5'}`} />
      </div>
    </button>
  );
}

export default App;
