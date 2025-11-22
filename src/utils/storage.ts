// Local storage utilities for tracking history and streaks

export interface GreetingHistory {
  date: string;
  greeting: string;
  mood: string;
  timeOfDay: string;
}

export interface UserStats {
  totalVisits: number;
  currentStreak: number;
  longestStreak: number;
  lastVisit: string;
  history: GreetingHistory[];
}

const STORAGE_KEY = 'johnifier_stats';

export function getUserStats(): UserStats {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return {
    totalVisits: 0,
    currentStreak: 0,
    longestStreak: 0,
    lastVisit: '',
    history: [],
  };
}

export function updateUserStats(greeting: string, mood: string, timeOfDay: string): UserStats {
  const stats = getUserStats();
  const today = new Date().toISOString().split('T')[0];

  // Update visit count
  stats.totalVisits++;

  // Calculate streak
  const lastVisitDate = stats.lastVisit ? new Date(stats.lastVisit) : null;
  const todayDate = new Date(today);

  if (lastVisitDate) {
    const daysDiff = Math.floor((todayDate.getTime() - lastVisitDate.getTime()) / (1000 * 60 * 60 * 24));

    if (daysDiff === 0) {
      // Same day, don't update streak
    } else if (daysDiff === 1) {
      // Consecutive day
      stats.currentStreak++;
      if (stats.currentStreak > stats.longestStreak) {
        stats.longestStreak = stats.currentStreak;
      }
    } else {
      // Streak broken
      stats.currentStreak = 1;
    }
  } else {
    // First visit
    stats.currentStreak = 1;
    stats.longestStreak = 1;
  }

  stats.lastVisit = today;

  // Add to history (keep last 50)
  stats.history.unshift({
    date: new Date().toISOString(),
    greeting,
    mood,
    timeOfDay,
  });
  stats.history = stats.history.slice(0, 50);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  return stats;
}

export function clearStats() {
  localStorage.removeItem(STORAGE_KEY);
}
