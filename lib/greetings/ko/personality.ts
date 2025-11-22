import { GreetingDefinition } from '../types';

// Korean motivational, personality, creative/fun, and productivity/work greetings
export const personalityGreetings: GreetingDefinition[] = [
  // === MOTIVATIONAL GREETINGS ===
  {
    text: '오늘은 당신의 날',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '할 수 있어요!',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '전설을 만들어봐요',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '위대함이 기다려요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '멈출 수 없는 에너지',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '주인공 기운',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '레벨업 시간',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '당신이 바로 그 순간',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '아무것도 당신을 막을 수 없어요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '남다른 사람',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}님, 멈출 수 없어요`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}님, 진짜 전설`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `오늘 세상은 ${name}님이 필요해요`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name}님, 마법을 만들어봐요`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },

  // === PERSONALITY GREETINGS ===
  {
    text: '최고 바이브 모드',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '엘리트 인증 완료',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '그냥 남다름',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '너무 멋져서 문제',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '인증된 분위기',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '완벽하게 불완벽',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}님, 하나뿐인`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `인증된 ${name} 순간`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `${name} 우월`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },
  {
    text: ({ name }) => `최고 ${name} 성능`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },

  // === CREATIVE/FUN GREETINGS ===
  {
    text: '우수함 속에 무료 임대',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '생각 없이 바이브만',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '완벽한 바이브 감지',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '비교 불가 에너지',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '카페인과 꿈으로 작동',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '좋은 바이브 보내요',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '최대 여유 달성',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '진짜 아이코닉',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '완벽 에너지',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
  },
  {
    text: '잠은 임시, 영광은 영원',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 0 && hour < 5,
  },
  {
    text: ({ name }) => `${name}님이 바이브 체크 통과`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
  },

  // === PRODUCTIVITY/WORK GREETINGS ===
  {
    text: '일어나서 달려요',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: false, variant: 'creative' },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '생산성 언락',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '몰입 상태 활성화',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '최대 효율 모드',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '출시 모드: 참여',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '실현 중',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: '마감 크러셔 모드',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: false, variant: 'creative' },
  },
  {
    text: ({ name }) => `${name}님 비스트 모드`,
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}님, 지배할 시간`,
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: true },
  },
  {
    text: ({ name }) => `생산성 프로: ${name}`,
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: true },
  },
  {
    text: '평일 허슬 모드',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, hasName: false, variant: 'creative' },
    dynamic: ({ day }) => day !== undefined && day >= 1 && day <= 5,
  },
];
