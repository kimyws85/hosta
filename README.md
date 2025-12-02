# UI Test Project

React + Vite + MUI를 사용한 16개 UI 요소 테스트 프로젝트

## 프로젝트 구조

```
ui_test/
├── src/
│   ├── components/
│   │   ├── sections/      # 섹션별 컴포넌트
│   │   │   └── Section.jsx
│   │   └── ui/            # 개별 UI 요소 컴포넌트
│   ├── styles/            # CSS 스타일
│   │   └── section.css
│   ├── App.jsx            # 메인 앱
│   ├── main.jsx           # 진입점
│   └── theme.js           # MUI 테마
├── package.json
└── README.md
```

## 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

### 3. 빌드
```bash
npm run build
```

## 새 섹션 추가 방법

### 1단계: 섹션 컴포넌트 생성

`src/components/sections/` 폴더에 새 파일 생성:

```jsx
// src/components/sections/Section01.jsx
import Section from './Section';
import { Button } from '@mui/material';

function Section01() {
  return (
    <Section
      title="Section 01: 버튼 예제"
      description="MUI Button 컴포넌트 사용 예제"
    >
      <Button variant="contained" color="primary">
        클릭하세요
      </Button>
    </Section>
  );
}

export default Section01;
```

### 2단계: App.jsx에 추가

```jsx
import Section01 from './components/sections/Section01';

function App() {
  return (
    <Container maxWidth="lg">
      {/* ... */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Section01 />
        {/* 다음 섹션들... */}
      </Box>
    </Container>
  );
}
```

## Section 컴포넌트 사용법

Section 컴포넌트는 다음 props를 받습니다:

- `title` (필수): 섹션 제목
- `description` (선택): 섹션 설명
- `children`: 섹션에 표시할 UI 요소

```jsx
<Section
  title="섹션 제목"
  description="섹션 설명 (선택사항)"
>
  {/* UI 요소들 */}
</Section>
```

## 16개 섹션 계획

1. Section 01: 버튼 (Button)
2. Section 02: 텍스트 필드 (TextField)
3. Section 03: 카드 (Card)
4. Section 04: 다이얼로그 (Dialog)
5. Section 05: 스낵바 (Snackbar)
6. Section 06: 그리드 (Grid)
7. Section 07: 탭 (Tabs)
8. Section 08: 아코디언 (Accordion)
9. Section 09: 체크박스/라디오 (Checkbox/Radio)
10. Section 10: 셀렉트 (Select)
11. Section 11: 슬라이더 (Slider)
12. Section 12: 테이블 (Table)
13. Section 13: 페이지네이션 (Pagination)
14. Section 14: 칩 (Chip)
15. Section 15: 아바타 (Avatar)
16. Section 16: 브레드크럼 (Breadcrumbs)

## 기술 스택

- **React** 19.2.0
- **Vite** 7.2.4
- **MUI** 7.3.5
- **Emotion** (스타일링)

## 주요 패키지

```json
{
  "@mui/material": "^7.3.5",
  "@mui/icons-material": "^7.3.5",
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.1"
}
```
