import { motion } from 'framer-motion';
import { UserStats } from '../utils/storage';

interface StatsPanelProps {
  stats: UserStats;
  battery: number | null;
  weather: { condition: string; temp: number } | null;
}

const weatherEmojis: Record<string, string> = {
  clear: '☀️',
  cloudy: '☁️',
  rainy: '🌧️',
  snowy: '❄️',
  stormy: '⛈️',
};

export function StatsPanel({ stats, battery, weather }: StatsPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      <div className="bg-[var(--color-surface)] rounded-xl p-4 border border-[var(--color-primary)]/20">
        <div className="text-3xl font-bold text-[var(--color-primary)]">
          {stats.currentStreak}
        </div>
        <div className="text-sm text-[var(--color-text-secondary)] font-mono">
          🔥 day streak
        </div>
      </div>

      <div className="bg-[var(--color-surface)] rounded-xl p-4 border border-[var(--color-primary)]/20">
        <div className="text-3xl font-bold text-[var(--color-primary)]">
          {stats.totalVisits}
        </div>
        <div className="text-sm text-[var(--color-text-secondary)] font-mono">
          👋 total visits
        </div>
      </div>

      {battery !== null && (
        <div className="bg-[var(--color-surface)] rounded-xl p-4 border border-[var(--color-primary)]/20">
          <div className="text-3xl font-bold text-[var(--color-primary)]">
            {battery}%
          </div>
          <div className="text-sm text-[var(--color-text-secondary)] font-mono">
            🔋 battery
          </div>
        </div>
      )}

      {weather && (
        <div className="bg-[var(--color-surface)] rounded-xl p-4 border border-[var(--color-primary)]/20">
          <div className="text-3xl font-bold text-[var(--color-primary)]">
            {weather.temp}°
          </div>
          <div className="text-sm text-[var(--color-text-secondary)] font-mono">
            {weatherEmojis[weather.condition]} {weather.condition}
          </div>
        </div>
      )}
    </motion.div>
  );
}
