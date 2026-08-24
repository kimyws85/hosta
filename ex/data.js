// 교과목 편성표 데이터 (총 510시간)
// content: 강사가 이후 단원별로 채워 넣을 실제 수업 내용 (지금은 빈 틀)
// 각 교과목의 units(단원) 데이터는 용량이 커서 content/content-{no}.js 파일로 분리되어 있다.
// index.html이 content-1.js ~ content-8.js를 data.js보다 먼저 로드해 SUBJECT_N_UNITS 전역 변수를 채워둔다.
const CURRICULUM = [
  {
    no: 1,
    subject: "AI 기본 및 활용",
    hours: 6,
    units: SUBJECT_1_UNITS
  },
  {
    no: 2,
    subject: "콘텐츠 트렌드 분석 및 영상 기획",
    hours: 70,
    units: SUBJECT_2_UNITS
  },
  {
    no: 3,
    subject: "영상 콘텐츠 소스 제작 및 관리",
    hours: 70,
    units: SUBJECT_3_UNITS
  },
  {
    no: 4,
    subject: "AI 기반 영상 제작 실습",
    hours: 98,
    units: SUBJECT_4_UNITS
  },
  {
    no: 5,
    subject: "HITL 기반 영상 품질 검증 및 마케팅 최적화",
    hours: 49,
    units: SUBJECT_5_UNITS
  },
  {
    no: 6,
    subject: "콘텐츠 운영, 문서화 및 협업",
    hours: 28,
    units: SUBJECT_6_UNITS
  },
  {
    no: 7,
    subject: "AI 기반 SNS 마케팅 영상콘텐츠 제작 프로젝트",
    hours: 158,
    units: SUBJECT_7_UNITS
  },
  {
    no: 8,
    subject: "재량교과",
    hours: 31,
    units: SUBJECT_8_UNITS
  }
];

const TOTAL_HOURS = CURRICULUM.reduce((sum, s) => sum + s.hours, 0);
