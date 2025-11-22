import { GreetingDefinition } from '../types';

// Tech/Developer themed greetings (Chinese Traditional, requires techOk=true)
export const techGreetings: GreetingDefinition[] = [
  // Casual tech greetings
  {
    text: 'Hello, World!',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'console.log("你好")',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'console.log("歡迎")',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '還沒發現bug...目前',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Git 準備好今天了',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '編譯偉大中...',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Stack overflow？更像氛圍overflow',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '404: 找不到睡眠',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '除錯人生，一天一次',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Merge conflicts 已解決',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Push to production 能量',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '所有測試通過',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '零錯誤，純氛圍',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: false },
  },

  // Tech greetings with name
  {
    text: ({ name }) => `${name}.init()`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `歡迎 ${name} // TODO: be awesome`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}: 登入成功`,
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: true },
  },

  // Work mode tech greetings
  {
    text: 'sudo 讓它發生',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, techOk: true },
  },
  {
    text: 'npm run success',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, techOk: true },
  },
  {
    text: 'yarn build 未來...',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, techOk: true },
  },
  {
    text: '10x developer 能量',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, techOk: true },
  },
  {
    text: 'git commit -m "讓我們開始"',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, techOk: true },
  },

  // Playful tech greetings
  {
    text: '活在夢想中（或除錯它）',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '碰草？不，碰code',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: ({ name }) => `${name} 進入了伺服器`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `成就解鎖：${name} 出現了`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: 'return "你好"',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'printf("早安\\n")',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, techOk: true, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
];
