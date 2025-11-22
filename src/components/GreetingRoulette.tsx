import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

interface GreetingRouletteProps {
  greetings: string[];
  onSelect: (greeting: string) => void;
}

export function GreetingRoulette({ greetings, onSelect }: GreetingRouletteProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const spin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    let iterations = 0;
    const maxIterations = 20 + Math.floor(Math.random() * 10);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % greetings.length);
      iterations++;

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setIsSpinning(false);
        onSelect(greetings[currentIndex]);

        // Confetti!
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['var(--color-primary)', 'var(--color-accent)', 'var(--color-accent-alt)'],
        });
      }
    }, 50 + iterations * 10);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-24 w-full flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute text-2xl font-display text-[var(--color-text-primary)] text-center px-4"
          >
            {greetings[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.button
        onClick={spin}
        disabled={isSpinning}
        className="px-8 py-3 rounded-xl font-bold text-lg bg-[var(--color-primary)] text-[var(--color-background)] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        whileHover={!isSpinning ? { scale: 1.05 } : {}}
        whileTap={!isSpinning ? { scale: 0.95 } : {}}
      >
        {isSpinning ? '🎰 Spinning...' : '🎰 Spin the Wheel'}
      </motion.button>
    </div>
  );
}
