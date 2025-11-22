import { GreetingDefinition } from '../types';

// Korean tech/developer themed greetings (requires techOk=true)
export const techGreetings: GreetingDefinition[] = [
  // Casual tech greetings
  {
    text: 'Hello, World!',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'console.log("안녕하세요")',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '버그 감지 안됨... 아직',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: 'Git 오늘 준비',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '위대함 컴파일 중...',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '404: 수면을 찾을 수 없음',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '인생 디버깅 중, 하루에 하나씩',
    mood: 'casual',
    static: { language: 'ko', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '병합 충돌 해결됨',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '프로덕션 푸시 에너지',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '모든 테스트 통과',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: '제로 에러, 순수 바이브',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, techOk: true, hasName: false },
  },

  // Tech greetings with name
  {
    text: ({ name }) => `${name}.init()`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `환영합니다 ${name} // TODO: 멋지게`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `${name}: 로그인 성공`,
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: false, techOk: true, hasName: true },
  },

  // Work mode tech greetings
  {
    text: 'sudo 실현하기',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: 'npm run success',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: '미래 구축 중...',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, techOk: true, hasName: false },
  },
  {
    text: '10배 개발자 에너지',
    mood: 'professional',
    static: { language: 'ko', incognito: false, workMode: true, techOk: true, hasName: false },
  },

  // Playful tech greetings
  {
    text: '꿈을 살아요 (또는 디버깅)',
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, techOk: true, hasName: false },
  },
  {
    text: ({ name }) => `${name}님이 서버에 입장`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, techOk: true, hasName: true },
  },
  {
    text: ({ name }) => `업적 달성: ${name}님 등장`,
    mood: 'playful',
    static: { language: 'ko', incognito: false, workMode: false, techOk: true, hasName: true },
  },
];
