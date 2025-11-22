import { useRef } from 'react';
import { motion } from 'framer-motion';

interface ShareCardProps {
  greeting: string;
  mood: string;
  timeOfDay: string;
}

export function ShareCard({ greeting, mood, timeOfDay }: ShareCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const downloadAsImage = async () => {
    if (!cardRef.current) return;

    try {
      // Use html2canvas or similar library in production
      // For now, we'll just copy the text
      await navigator.clipboard.writeText(`${greeting}\n\n— Johnifier (${mood}, ${timeOfDay})`);
      alert('Greeting copied to clipboard! 📋');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Johnifier Greeting',
          text: `${greeting}\n\n— Johnifier (${mood}, ${timeOfDay})`,
        });
      } catch (err) {
        console.error('Share failed:', err);
      }
    } else {
      downloadAsImage();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={cardRef}
        className="bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-elevated)] rounded-2xl p-8 border-2 border-[var(--color-primary)]/30"
      >
        <p className="text-2xl font-display text-[var(--color-text-primary)] mb-4">
          "{greeting}"
        </p>
        <div className="flex gap-2 text-sm font-mono text-[var(--color-text-secondary)]">
          <span className="px-3 py-1 rounded-md bg-[var(--color-primary)]/20">
            {mood}
          </span>
          <span className="px-3 py-1 rounded-md bg-[var(--color-accent)]/20">
            {timeOfDay}
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        <motion.button
          onClick={shareNative}
          className="flex-1 px-4 py-2 rounded-lg bg-[var(--color-primary)] text-[var(--color-background)] font-semibold"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          📤 Share
        </motion.button>
        <motion.button
          onClick={downloadAsImage}
          className="flex-1 px-4 py-2 rounded-lg bg-[var(--color-accent)]/20 text-[var(--color-accent)] border border-[var(--color-accent)]/40 font-semibold"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          📋 Copy
        </motion.button>
      </div>
    </div>
  );
}
