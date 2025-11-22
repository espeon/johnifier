import { GreetingDefinition } from '../types';

// Korean battery level-aware greetings
export const batteryGreetings: GreetingDefinition[] = [
  // Low battery (0-20%)
  {
    text: ({ battery }) => `낮은 전력 모드 (${battery}%)이지만 높은 바이브`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: ({ battery }) => `${battery}%로 거의 다 떨어짐`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: '곧 충전하세요, 레전드',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 15,
  },
  {
    text: ({ battery }) => `배터리 ${battery}%, 바이브 100%`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 20,
  },
  {
    text: ({ name, battery }) => `${name}님, ${battery}%... 위험하게 살아요`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery <= 15,
  },

  // Medium-low (21-50%)
  {
    text: ({ battery }) => `${battery}%로 반쯤 왔어요`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 20 && battery <= 50,
  },
  {
    text: '중간 배터리, 완전한 잠재력',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery > 30 && battery <= 50,
  },

  // High battery (80-100%)
  {
    text: ({ battery }) => `완전 충전 (${battery}%), 완전 준비`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80,
  },
  {
    text: ({ battery }) => `전력 레벨: ${battery}%`,
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 80,
  },
  {
    text: '완전 충전되어 준비 완료',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 95,
  },
  {
    text: ({ name }) => `${name}님, 충전되고 위험`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery >= 90,
  },
  {
    text: '배터리: 최대. 에너지: 무한.',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery !== null && battery !== undefined && battery === 100,
  },

  // Exactly 69% (nice)
  {
    text: '나이스한 배터리 레벨',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 69,
  },
  {
    text: ({ name }) => `${name}님... 나이스 (69%)`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: true },
    dynamic: ({ battery }) => battery === 69,
  },

  // Exactly 42% (answer to everything)
  {
    text: '배터리 42%: 모든 것의 답',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, hasName: false },
    dynamic: ({ battery }) => battery === 42,
  },
];
