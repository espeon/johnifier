import { GreetingDefinition } from '../types';

// Very specific time-based greetings (Japanese)
export const timeSpecificGreetings: GreetingDefinition[] = [
  // Lunch time (11am-2pm)
  {
    text: 'お昼休み',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 11 && hour < 14,
  },
  {
    text: 'ランチの時間',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: ({ name }) => `${name}さん、お昼何食べる？`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: 'お腹空いた？',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },
  {
    text: 'ランチタイム',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 14,
  },

  // Coffee time (9-11am)
  {
    text: 'コーヒータイム',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: 'カフェインで動いてる',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: ({ name }) => `${name}さん + コーヒー = 無敵`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },
  {
    text: '朝のコーヒー',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 9 && hour < 11,
  },

  // Golden hour (5-7pm)
  {
    text: 'ゴールデンアワー',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },
  {
    text: 'もうすぐ夕日',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },
  {
    text: ({ name }) => `${name}さん、黄金の時間`,
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },
  {
    text: '夕暮れ時',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 19,
  },

  // Midnight exactly
  {
    text: '真夜中の12時',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 0,
  },
  {
    text: '時計が12時を打つ',
    mood: 'mysterious',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 0,
  },
  {
    text: ({ name }) => `${name}さん、新しい日だよ（一応）`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour === 0,
  },

  // 3AM
  {
    text: '深夜3時の思考',
    mood: 'mysterious',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 3,
  },
  {
    text: '深夜3時',
    mood: 'mysterious',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 3,
  },
  {
    text: ({ name }) => `${name}さん、なんで起きてるの？`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour === 3,
  },

  // Noon exactly
  {
    text: '正午',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 12,
  },
  {
    text: 'お昼の12時',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 12,
  },
  {
    text: 'ちょうど正午',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour === 12,
  },

  // Early morning (5-6am)
  {
    text: '早起き頑張った',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: '日の出クラブ',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: ({ name }) => `${name}さん、早起きだね`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },
  {
    text: '朝活',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 7,
  },

  // Prime working hours (2-4pm)
  {
    text: '午後の作業タイム',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },
  {
    text: '最高生産性時間',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },
  {
    text: ({ name }) => `${name}さん、午後も頑張ろう`,
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 14 && hour < 16,
  },

  // End of workday (5-6pm)
  {
    text: 'もうすぐ終業',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },
  {
    text: 'ラストスパート',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },
  {
    text: ({ name }) => `${name}さん、最後まで頑張ろう`,
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 17 && hour < 18,
  },
];
