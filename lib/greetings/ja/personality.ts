import { GreetingDefinition } from '../types';

// Japanese creative personality greetings
export const personalityGreetings: GreetingDefinition[] = [
  // === MOTIVATIONAL GREETINGS ===
  {
    text: '今日は君の日',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: 'できる！',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '伝説を作ろう',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '素晴らしさが待ってる',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '止められないエネルギー',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '主人公エネルギー',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'レベルアップタイム',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '君が瞬間',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '何も止められない',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '無敵',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },

  // === PERSONALITY GREETINGS ===
  {
    text: '最高のバイブス',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'エリート確定',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '別格',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'クール過ぎる',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '認定ムード',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '完璧に不完璧',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '純粋なバイブ',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '最高級の雰囲気',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'エネルギー無限',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'カオスコーディネーター',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'プロの達成者',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },

  // === CREATIVE/FUN GREETINGS ===
  {
    text: '優秀さに住んでる',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '考えない、ただバイブス',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '完璧なバイブス検出',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'エネルギーマックス',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'カフェインと夢でパワー',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '良いバイブスを送る',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '最大チル達成',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '絶対的アイコン',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'シェフキスエネルギー',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '睡眠は一時的、栄光は永遠',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: '覚醒した存在',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '圧倒的オーラ',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'ヤバいエネルギー',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: 'テンション最高潮',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '神ってる',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '無双モード',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },

  // === PRODUCTIVITY/WORK GREETINGS ===
  {
    text: '起きて頑張る',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '生産性解放',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'フロー状態発動',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '最大効率モード',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '実現する',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '締切クラッシャーモード',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '平日ハッスルモード',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
    dynamic: ({ day }) => day !== undefined && day >= 1 && day <= 5,
  },
  {
    text: '作る準備できた？',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '創造の時間',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '仕事しよう',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '今日の計画は？',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'ビルドモード発動',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'フォーカスモード起動',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'ディープワークセッション',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '進もう',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '実行準備完了',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '何に取り組む？',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '生産性モード',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '実行モード',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'スプリントタイム',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'ハッスルモード',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: 'グラインドタイム',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
];
