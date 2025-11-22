import { GreetingDefinition } from '../types';

// Tech/Developer themed greetings (Japanese with tech terms, requires techOk=true)
export const techGreetings: GreetingDefinition[] = [
  // Casual tech greetings without name
  {
    text: 'console.log("こんにちは")',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Hello, World! // 世界よ、こんにちは',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'バグ検出なし...今のところ',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'git commit -m "今日も頑張ろう"',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '偉大さをコンパイル中...',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '404: 睡眠が見つかりません',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '人生をデバッグ中',
    mood: 'casual',
    static: { language: 'ja', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'マージコンフリクト解決済み',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'npm run awesome',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '全テスト合格',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'エラーゼロ、バイブス最高',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'git status: 最高',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'sudo やろう',
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, techOk: true, hasName: false },
  },

  // Tech greetings with name
  {
    text: ({ name }) => `${name}.init()`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `ようこそ ${name} // TODO: 素晴らしくなる`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}: ログイン成功`,
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}がサーバーに入りました`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `実績解除: ${name}が現れた`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `const ${name} = "最高"`,
    mood: 'playful',
    static: { language: 'ja', incognito: false, workMode: false, techOk: true, hasName: true },
  },

  // Work mode tech greetings
  {
    text: 'sudo 実現する',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: 'npm run success',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: '未来を構築中...',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: '10x開発者エネルギー',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: 'git push origin 成功',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: 'コードタイム',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: 'デプロイエネルギー',
    mood: 'professional',
    static: { language: 'ja', incognito: false, workMode: true, techOk: true, hasName: false },
  },
];
