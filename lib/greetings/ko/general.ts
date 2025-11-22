import { GreetingDefinition } from '../types';

// Korean general greetings
export const generalGreetings: GreetingDefinition[] = [
  // Morning
  {
    text: '좋은 아침이에요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `좋은 아침이에요, ${name}님`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '굿모닝!',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Afternoon
  {
    text: '안녕하세요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `안녕하세요, ${name}님`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '좋은 오후예요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Evening
  {
    text: '좋은 저녁이에요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `좋은 저녁이에요, ${name}님`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // General
  {
    text: '안녕하세요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `안녕하세요, ${name}님`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '환영합니다',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `환영합니다, ${name}님`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '반가워요',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false },
  },
  {
    text: ({ name }) => `반가워요, ${name}님`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },

  // Work mode
  {
    text: '화이팅!',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}님, 화이팅!`,
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '오늘도 파이팅',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: false },
  },

  // Additional morning greetings
  {
    text: '상쾌한 아침이에요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}님, 활기찬 아침!`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '아침 햇살처럼 빛나요',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '좋은 아침입니다',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '오늘도 좋은 하루!',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: ({ name }) => `${name}님, 좋은 아침입니다!`,
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '새로운 시작이에요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '아침 에너지 충전',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Additional afternoon greetings
  {
    text: '좋은 오후입니다',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}님, 좋은 오후!`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '오후도 힘차게',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '활기찬 오후',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: ({ name }) => `${name}님, 오후도 파이팅!`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '점심 잘 드셨어요?',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '오후 시간도 즐겁게',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Additional evening greetings
  {
    text: '편안한 저녁이에요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}님, 저녁 잘 보내세요`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '오늘 하루도 수고하셨어요',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '저녁 시간이에요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: ({ name }) => `${name}님, 좋은 저녁 되세요`,
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '밤이 되었네요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '저녁도 멋지게',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Additional general greetings
  {
    text: '또 만나서 반가워요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}님, 돌아오셨군요!`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '어서오세요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `어서오세요, ${name}님`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '만나서 반갑습니다',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}님, 만나서 반가워요`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '오셨군요!',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}님이 오셨어요`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '오늘도 좋은 날',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}님과 함께라면 좋은 날`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '다시 뵙게 되어 기쁩니다',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}님, 다시 뵙네요`,
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '좋은 시간 되세요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}님, 좋은 시간!`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },
  {
    text: '오늘도 함께해요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
  },
  {
    text: ({ name }) => `${name}님, 오늘도 함께!`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },

  // Additional work mode greetings
  {
    text: '일 시작해볼까요',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}님, 일 시작!`,
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '집중 모드',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}님, 집중 시간!`,
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '열심히 해봐요',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}님, 열심히!`,
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '생산성 시간',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}님, 생산적으로!`,
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '목표를 향해',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}님, 목표 달성!`,
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '성공적인 하루',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}님, 성공하세요!`,
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '업무 모드 온',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}님, 업무 시작!`,
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '최선을 다해요',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}님, 최선을!`,
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: true },
  },
];
