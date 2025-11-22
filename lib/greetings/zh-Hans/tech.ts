import { GreetingDefinition } from '../types';

// Chinese Simplified tech/developer themed greetings (requires techOk=true)
export const techGreetings: GreetingDefinition[] = [
  // Casual tech greetings (no name)
  {
    text: 'Hello, World!',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'console.log("你好")',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'print("欢迎")',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '还未检测到bug...暂时',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Git准备好迎接今天',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '正在编译伟大...',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '404：未找到睡眠',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '调试生活，一天一次',
    mood: 'casual',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '合并冲突已解决',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '推送到生产环境的能量',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '所有测试通过',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '零错误，纯粹氛围',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'npm install happiness',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: false },
  },

  // Tech greetings with name
  {
    text: ({ name }) => `${name}.init()`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `欢迎 ${name} // TODO: be awesome`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}: 登录成功`,
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `const 你好 = "${name}"`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `${name} 进入了服务器`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `成就解锁：${name} 出现了`,
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: true },
  },

  // Work mode tech greetings
  {
    text: 'sudo 让它发生',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: 'npm run success',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: '正在构建未来...',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: '10x开发者能量',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: 'git commit -m "又一个完美的一天"',
    mood: 'professional',
    static: { language: 'zh-Hans', incognito: false, workMode: true, techOk: true, hasName: false },
  },

  // More playful tech
  {
    text: '生活在梦想中（或调试它）',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '触摸草地？不，触摸代码',
    mood: 'playful',
    static: { language: 'zh-Hans', incognito: false, workMode: false, techOk: true, hasName: false },
  },
];
