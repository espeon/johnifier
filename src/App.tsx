import { useState } from 'react';
import { useGreeting } from './hooks/useGreeting';

function App() {
  const [name, setName] = useState('');
  const [incognito, setIncognito] = useState(false);
  const [workMode, setWorkMode] = useState(false);

  const greeting = useGreeting({
    name: name || undefined,
    incognito,
    workMode
  });

  const moodStyles = {
    casual: 'text-secondary',
    playful: 'text-accent',
    professional: 'text-accent-alt',
    mysterious: 'text-primary-light drop-shadow-[0_0_20px_rgba(224,120,86,0.3)]',
  };

  return (
    <div className="min-h-screen relative px-6 py-10 lg:px-10">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 bg-pattern opacity-0 animate-fade-in" />

      {/* Header */}
      <header className="text-center mb-16 opacity-0 -translate-y-5 animate-slide-down">
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal gradient-text mb-4 tracking-tight">
          Johnifier
        </h1>
        <p className="text-xl text-text-secondary font-normal">
          Contextual greetings that adapt to time, mood, and you
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto flex flex-col gap-10">
        {/* Greeting Display */}
        <section className="bg-surface rounded-2xl p-10 lg:p-16 text-center border border-primary/20 relative overflow-hidden opacity-0 scale-95 animate-scale-in animation-delay-400">
          <div className="shimmer" />

          <div className={`font-display text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight transition-all duration-400 min-h-[1.2em] ${moodStyles[greeting.mood]}`}>
            {greeting.text || 'Hello'}
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <span className="px-6 py-2 rounded-lg font-mono text-sm font-medium lowercase tracking-wider bg-primary/20 text-primary-light border border-primary">
              {greeting.timeOfDay}
            </span>
            <span className={`px-6 py-2 rounded-lg font-mono text-sm font-medium lowercase tracking-wider border ${
              greeting.mood === 'professional'
                ? 'bg-accent-alt/20 text-accent-alt border-accent-alt'
                : 'bg-accent/20 text-accent border-accent'
            }`}>
              {greeting.mood}
            </span>
          </div>
        </section>

        {/* Controls */}
        <section className="flex flex-col gap-6 opacity-0 translate-y-5 animate-slide-up animation-delay-600">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-mono text-sm text-text-secondary lowercase tracking-wider">
              Your name
            </label>
            <input
              id="name"
              type="text"
              className="bg-surface-elevated border border-primary/30 rounded-2xl px-6 py-4 font-body text-lg text-text-primary transition-all focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-text-muted"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
            />
          </div>

          <div className="flex gap-6 flex-wrap">
            <button
              className={`flex-1 min-w-[140px] border-2 rounded-2xl px-6 py-4 font-body text-base cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_4px_12px_rgba(224,120,86,0.2)] ${
                incognito
                  ? 'bg-primary border-primary text-background shadow-[0_4px_16px_rgba(224,120,86,0.4)]'
                  : 'bg-surface-elevated border-primary/20 text-text-secondary'
              }`}
              onClick={() => setIncognito(!incognito)}
              aria-pressed={incognito}
            >
              <span className="text-xl">{incognito ? '🕶️' : '👤'}</span>
              <span className="font-semibold">Incognito</span>
            </button>

            <button
              className={`flex-1 min-w-[140px] border-2 rounded-2xl px-6 py-4 font-body text-base cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_4px_12px_rgba(224,120,86,0.2)] ${
                workMode
                  ? 'bg-primary border-primary text-background shadow-[0_4px_16px_rgba(224,120,86,0.4)]'
                  : 'bg-surface-elevated border-primary/20 text-text-secondary'
              }`}
              onClick={() => setWorkMode(!workMode)}
              aria-pressed={workMode}
            >
              <span className="text-xl">{workMode ? '💼' : '🎨'}</span>
              <span className="font-semibold">Work Mode</span>
            </button>
          </div>
        </section>

        {/* Info Panel */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 opacity-0 translate-y-5 animate-slide-up animation-delay-800">
          <div className="bg-surface rounded-2xl p-8 border border-primary/15 transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
            <h3 className="font-display text-2xl text-primary-light mb-4 font-normal">
              Time-Aware
            </h3>
            <p className="text-text-secondary text-base leading-relaxed">
              Greetings adapt to morning, afternoon, evening, and late night,
              with special messages for each day of the week.
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-8 border border-primary/15 transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
            <h3 className="font-display text-2xl text-primary-light mb-4 font-normal">
              Context-Sensitive
            </h3>
            <p className="text-text-secondary text-base leading-relaxed">
              Toggle work mode for professional greetings, or go incognito
              for mysterious, anonymous vibes.
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-8 border border-primary/15 transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
            <h3 className="font-display text-2xl text-primary-light mb-4 font-normal">
              Personalized
            </h3>
            <p className="text-text-secondary text-base leading-relaxed">
              Add your name for personalized greetings that make every
              interaction feel more human.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center mt-16 opacity-0 animate-fade-in animation-delay-1000">
        <code className="font-mono text-sm text-text-muted bg-surface px-6 py-3 rounded-lg border border-primary/15 inline-block">
          useGreeting({'{'} name, incognito, workMode {'}'})
        </code>
      </footer>
    </div>
  );
}

export default App;
