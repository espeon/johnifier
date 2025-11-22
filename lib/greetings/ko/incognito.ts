import { GreetingDefinition } from '../types';

// Korean incognito/privacy mode greetings (no names, mysterious vibes)
export const incognitoGreetings: GreetingDefinition[] = [
  // Morning incognito
  {
    text: '좋은 아침, 신비로운 방문자',
    mood: 'mysterious',
    static: { language: 'ko', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '스텔스 모드: 아침 에디션',
    mood: 'playful',
    static: { language: 'ko', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '그림자가 오늘 아침 당신을 환영',
    mood: 'mysterious',
    static: { language: 'ko', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },
  {
    text: '익명과 카페인',
    mood: 'playful',
    static: { language: 'ko', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 5 && hour < 12,
  },

  // Afternoon incognito
  {
    text: '좋은 오후, 유령',
    mood: 'mysterious',
    static: { language: 'ko', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '시크릿 모드: 활성화',
    mood: 'professional',
    static: { language: 'ko', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '레이더 아래에서 작동 중',
    mood: 'mysterious',
    static: { language: 'ko', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },
  {
    text: '쿠키 없음, 흔적 없음, 문제 없음',
    mood: 'playful',
    static: { language: 'ko', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 12 && hour < 18,
  },

  // Evening incognito
  {
    text: '좋은 저녁, 팬텀',
    mood: 'mysterious',
    static: { language: 'ko', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '야간 모드 + 시크릿 = 최고 스텔스',
    mood: 'playful',
    static: { language: 'ko', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '밤이 이름 없는 자를 보호',
    mood: 'mysterious',
    static: { language: 'ko', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },
  {
    text: '보이지 않는 브라우징 시간',
    mood: 'casual',
    static: { language: 'ko', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && hour >= 18 && hour < 24,
  },

  // Late night incognito
  {
    text: '누구세요? (말하지 않을게요)',
    mood: 'mysterious',
    static: { language: 'ko', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: '새벽 3시 시크릿 에너지',
    mood: 'playful',
    static: { language: 'ko', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },
  {
    text: '마녀의 시간은 이름을 모름',
    mood: 'mysterious',
    static: { language: 'ko', incognito: true, workMode: false },
    dynamic: ({ hour }) => hour !== undefined && (hour >= 0 && hour < 5),
  },

  // General incognito (any time)
  {
    text: '환영합니다, 신비로운 방문자',
    mood: 'mysterious',
    static: { language: 'ko', incognito: true, workMode: false },
  },
  {
    text: '당신의 비밀은 안전합니다',
    mood: 'mysterious',
    static: { language: 'ko', incognito: true, workMode: false },
  },
  {
    text: '안녕하세요, 익명의 방문자',
    mood: 'casual',
    static: { language: 'ko', incognito: true, workMode: false },
  },
  {
    text: '안녕하세요, 디지털 유령',
    mood: 'playful',
    static: { language: 'ko', incognito: true, workMode: false },
  },
  {
    text: '쉿... 당신이 여기 있었다는 걸 기억하지 않을게요',
    mood: 'playful',
    static: { language: 'ko', incognito: true, workMode: false },
  },
  {
    text: '그림자 속에서 브라우징',
    mood: 'mysterious',
    static: { language: 'ko', incognito: true, workMode: false },
  },
  {
    text: '기록 없음, 흔적 없음',
    mood: 'professional',
    static: { language: 'ko', incognito: true, workMode: false },
  },
  {
    text: '프라이버시 모드 참여',
    mood: 'professional',
    static: { language: 'ko', incognito: true, workMode: false },
  },
  {
    text: '공허가 당신을 인정',
    mood: 'mysterious',
    static: { language: 'ko', incognito: true, workMode: false },
  },
  {
    text: '여기서 일어난 일은... 어디에도 남지 않음',
    mood: 'playful',
    static: { language: 'ko', incognito: true, workMode: false },
  },

  // Work mode + incognito
  {
    text: '전문적. 프라이빗. 완벽.',
    mood: 'professional',
    static: { language: 'ko', incognito: true, workMode: true },
  },
  {
    text: '스텔스 생산성 모드',
    mood: 'professional',
    static: { language: 'ko', incognito: true, workMode: true },
  },
  {
    text: '기밀 작업 세션 시작',
    mood: 'professional',
    static: { language: 'ko', incognito: true, workMode: true },
  },
];
