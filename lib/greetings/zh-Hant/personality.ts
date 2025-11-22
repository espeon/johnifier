import { GreetingDefinition } from '../types';

// Chinese Traditional personality, motivational, and creative greetings
export const personalityGreetings: GreetingDefinition[] = [
  // === MOTIVATIONAL GREETINGS ===
  {
    text: '今天是你的主場',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '你可以的！',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '今日傳奇誕生',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '偉大在等著你',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '無法阻擋的能量',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '主角能量',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '升級時刻',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '你就是這一刻',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '沒什麼能阻止你',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '就是不一樣',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}，你無可阻擋`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}，絕對傳奇`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `世界需要今天的${name}`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}，去創造奇蹟吧`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },

  // === PERSONALITY GREETINGS ===
  {
    text: '氛圍感拉滿',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '菁英身份認證',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '純粹不一樣',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '太酷了吧',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '認證氛圍',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '絕對瘋狂（褒義）',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '混亂協調員報到',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '專業過度成就者',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '完美的不完美',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}，獨一無二`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `認證${name}時刻`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}至上主義`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `巔峰${name}表現`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },

  // === CREATIVE/FUN GREETINGS ===
  {
    text: '活在卓越的免費空間',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '不想事，只要氛圍',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '完美氛圍偵測',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '能量無可匹敵',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '由咖啡和夢想驅動',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '送你滿滿好氛圍',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '最大放鬆達成',
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '絕對標誌性',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '主廚之吻能量',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '睡眠是暫時的，榮耀是永恆的',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name}通過氛圍檢查`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '無敵了',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '純粹氛圍',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '頂級狀態',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '氣場全開',
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },

  // === PRODUCTIVITY/WORK GREETINGS ===
  {
    text: '起來衝了',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '生產力解鎖',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '心流狀態啟動',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '最大效率模式',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '出貨模式：啟動',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '讓它發生',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '截止日期粉碎機模式',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}獸模式`,
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}，該統治了`,
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `生產力專家：${name}`,
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '平日衝刺模式',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
    dynamic: ({ day }) => day !== undefined && day >= 1 && day <= 5,
  },
  {
    text: '準備開始建造了嗎？',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '該創造了',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '開始工作吧',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '今天的議程是什麼？',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '建造模式啟動',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '該出貨了',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '專注模式啟動',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '深度工作時段',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '讓我們有所進展',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '寫程式時間',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '準備執行',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '我們要處理什麼？',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '生產力模式',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '執行模式',
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `準備出貨了嗎，${name}？`,
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `一起建造吧，${name}`,
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `專注時間，${name}`,
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}，準備執行了嗎？`,
    mood: 'professional',
    static: { language: 'zh-Hant', incognito: false, workMode: true, hasName: true },
  },

  // === MORE FUN NAME GREETINGS ===
  {
    text: ({ name }) => `${name}，傳奇`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}，主角能量`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `現在是${name}點鐘`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}，絕對單位`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}，沒有筆記`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}，完美氛圍`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}體驗`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}，絕對強大`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}，在做事情`,
    mood: 'casual',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `看：${name}`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}，就是不一樣`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}，菁英狀態`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}，無法阻擋的力量`,
    mood: 'playful',
    static: { language: 'zh-Hant', incognito: false, workMode: false, hasName: true },
  },
];
