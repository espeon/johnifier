import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useEnhancedGreeting, Language } from './hooks/useEnhancedGreeting';
import { useEnhancedContext } from './hooks/useEnhancedContext';

function App() {
  const [name, setName] = useState('');
  const [incognito, setIncognito] = useState(false);
  const [workMode, setWorkMode] = useState(false);
  const [techOk, setTechOk] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
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

  const words = greeting.text.split(' ');
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  const dateString = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e8e8] relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#1a1a2e]/20 via-transparent to-[#0f3460]/10 pointer-events-none" />

      {/* Grain texture */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-noise" />

      <div className="relative min-h-screen flex flex-col">
        {/* Header bar */}
        <motion.header
          className="px-8 py-6 flex items-center justify-between border-b border-[#e8e8e8]/5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-signature text-2xl text-[#e8e8e8]/60">
            johnifier
          </div>
          <div className="font-garamond text-sm text-[#e8e8e8]/40 tracking-wider">
            {dateString} · {timeString}
          </div>
        </motion.header>

        {/* Main content */}
        <main className="flex-1 flex items-center justify-center px-8 py-16">
          <div className="max-w-6xl w-full">
            {/* Greeting */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-orbiter font-bold text-greeting leading-[0.9] mb-8 tracking-tight">
                {mounted && words.map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.3em]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.4 + i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              {/* Metadata pills */}
              <motion.div
                className="flex gap-3 items-center flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <Pill>{greeting.timeOfDay}</Pill>
                <Pill>{greeting.mood}</Pill>
                {context.battery !== null && (
                  <Pill>battery {context.battery}%</Pill>
                )}
                {context.weather && (
                  <Pill>{context.weather.condition} · {context.weather.temp}°</Pill>
                )}
              </motion.div>
            </motion.div>

            {/* Controls grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {/* Name input */}
              <div className="space-y-3">
                <label className="font-garamond text-xs uppercase tracking-[0.15em] text-[#e8e8e8]/50">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name..."
                  className="w-full bg-[#e8e8e8]/5 border border-[#e8e8e8]/10
                           px-4 py-3 font-garamond text-base tracking-wide
                           focus:outline-none focus:border-[#e8e8e8]/30 focus:bg-[#e8e8e8]/8
                           placeholder:text-[#e8e8e8]/20 transition-all duration-300"
                />
              </div>

              {/* Language selector */}
              <div className="space-y-3">
                <label className="font-garamond text-xs uppercase tracking-[0.15em] text-[#e8e8e8]/50">
                  Language
                </label>
                <div className="flex gap-2">
                  {(['en', 'es', 'fr', 'de', 'ja'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`flex-1 px-3 py-3 font-garamond text-sm uppercase tracking-widest
                                transition-all duration-300 border
                                ${language === lang
                                  ? 'bg-[#e8e8e8] text-[#0a0a0a] border-[#e8e8e8]'
                                  : 'bg-[#e8e8e8]/5 text-[#e8e8e8]/60 border-[#e8e8e8]/10 hover:bg-[#e8e8e8]/10 hover:border-[#e8e8e8]/20'
                                }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggles */}
              <div className="md:col-span-2 space-y-3">
                <label className="font-garamond text-xs uppercase tracking-[0.15em] text-[#e8e8e8]/50">
                  Settings
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <ToggleCard
                    label="Incognito"
                    active={incognito}
                    onClick={() => setIncognito(!incognito)}
                  />
                  <ToggleCard
                    label="Work Mode"
                    active={workMode}
                    onClick={() => setWorkMode(!workMode)}
                  />
                  <ToggleCard
                    label="Tech OK"
                    active={techOk}
                    onClick={() => setTechOk(!techOk)}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <motion.footer
          className="px-8 py-6 border-t border-[#e8e8e8]/5 flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <div className="font-garamond text-xs text-[#e8e8e8]/30 tracking-wider">
            {greeting.allGreetings.length} greetings available
          </div>
          <code className="font-garamond text-xs text-[#e8e8e8]/30 tracking-wider">
            useEnhancedGreeting()
          </code>
        </motion.footer>
      </div>

      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Momo+Signature&family=TASA+Orbiter:wght@400..800&display=swap');

        .font-orbiter {
          font-family: 'TASA Orbiter', sans-serif;
        }

        .font-garamond {
          font-family: 'EB Garamond', serif;
        }

        .font-signature {
          font-family: 'Momo Signature', cursive;
        }

        .text-greeting {
          font-size: clamp(2.5rem, 11vw, 8rem);
          color: #e8e8e8;
        }

        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        ::selection {
          background: #e8e8e8;
          color: #0a0a0a;
        }

        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }

        ::-webkit-scrollbar-thumb {
          background: #e8e8e8;
          opacity: 0.2;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #e8e8e8;
          opacity: 0.4;
        }
      `}</style>
    </div>
  );
}

// Pill component for metadata
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1.5 bg-[#e8e8e8]/8 border border-[#e8e8e8]/10
                   font-garamond text-xs tracking-wider text-[#e8e8e8]/60">
      {children}
    </span>
  );
}

// Toggle card component
function ToggleCard({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-4 border transition-all duration-300 font-garamond text-sm
                ${active
                  ? 'bg-[#e8e8e8] text-[#0a0a0a] border-[#e8e8e8]'
                  : 'bg-[#e8e8e8]/5 text-[#e8e8e8]/60 border-[#e8e8e8]/10 hover:bg-[#e8e8e8]/10 hover:border-[#e8e8e8]/20'
                }`}
    >
      <div className="text-center tracking-wider uppercase text-xs">
        {label}
      </div>
    </button>
  );
}

export default App;
