# <i class="fas fa-graduation-cap"></i> HTML/CSS 학습 가이드

HTML과 CSS를 배우는 초보자를 위한 완벽한 가이드입니다.
**마크다운 기반**으로 작성되어 읽기 쉽고, **실전 예제**가 풍부합니다.

## <i class="fas fa-star"></i> 주요 특징

- <i class="fas fa-book"></i> **체계적인 학습**: 기초부터 고급까지 단계별 학습
- <i class="fas fa-code"></i> **풍부한 예제**: 실무에 바로 적용 가능한 코드
- <i class="fas fa-mobile-alt"></i> **반응형 디자인**: 모바일/태블릿/데스크탑 모두 지원
- <i class="fas fa-lightbulb"></i> **시각적 설명**: 다이어그램과 아이콘으로 이해하기 쉽게
- <i class="fas fa-search"></i> **빠른 검색**: 단일 페이지 구조로 Ctrl+F 검색 가능

---

## <i class="fas fa-folder-open"></i> 프로젝트 구조

```
Htmlcss/
├── index.html                  # 메인 페이지
├── README.md                   # 프로젝트 문서
│
├── css/                        # 스타일시트
│   └── style.css              # 통합 스타일
│
├── js/                         # JavaScript
│   └── app.js                 # 마크다운 로더
│
└── content/                    # 마크다운 콘텐츠
    ├── html/                   # HTML 섹션
    │   ├── basic.md           # 기초 HTML
    │   ├── semantic.md        # 시맨틱 태그
    │   ├── forms.md           # 폼
    │   └── tables.md          # 테이블
    │
    ├── css/                    # CSS 섹션
    │   ├── selectors.md       # 선택자
    │   ├── box-model.md       # 박스 모델
    │   ├── flexbox.md         # Flexbox
    │   └── grid.md            # Grid
    │
    ├── layout/                 # 레이아웃 섹션
    │   ├── position.md        # 위치 지정
    │   └── responsive.md      # 반응형
    │
    ├── styling/                # 스타일링 섹션
    │   ├── colors.md          # 색상
    │   ├── typography.md      # 타이포그래피
    │   └── animations.md      # 애니메이션
    │
    └── advanced/               # 고급 섹션
        ├── transform.md       # Transform
        ├── transition.md      # Transition
        └── variables.md       # CSS 변수
```

---

## <i class="fas fa-book-open"></i> 콘텐츠 구성

### <i class="fab fa-html5"></i> HTML (4개)
- **기초 HTML**: 문서 구조, 기본 태그, 링크, 이미지, 리스트
- **시맨틱 태그**: header, nav, main, article, section, footer, aside
- **폼**: input, select, textarea, button, validation
- **테이블**: table, thead, tbody, tr, td, 복잡한 테이블

### <i class="fab fa-css3-alt"></i> CSS (4개)
- **선택자**: 클래스, ID, 속성, 가상 클래스, 가상 요소, 우선순위
- **박스 모델**: margin, padding, border, box-sizing, margin collapsing
- **Flexbox**: 1차원 레이아웃, 정렬, 순서, 반응형 그리드
- **Grid**: 2차원 레이아웃, 그리드 영역, 반응형

### <i class="fas fa-th-large"></i> 레이아웃 (2개)
- **위치 지정**: static, relative, absolute, fixed, sticky, z-index
- **반응형**: 미디어 쿼리, 모바일 퍼스트, 브레이크포인트

### <i class="fas fa-palette"></i> 스타일링 (3개)
- **색상**: HEX, RGB, HSL, 투명도, 그라데이션, 다크 모드
- **타이포그래피**: font, text, line-height, letter-spacing, 웹 폰트
- **애니메이션**: @keyframes, animation, timing-function

### <i class="fas fa-rocket"></i> 고급 (3개)
- **Transform**: translate, scale, rotate, skew, 3D
- **Transition**: 전환 효과, timing-function, 성능 최적화
- **CSS 변수**: Custom Properties, 테마 관리, 반응형 변수

---

## <i class="fas fa-play"></i> 사용 방법

### <i class="fas fa-desktop"></i> 로컬에서 실행

1. **파일 다운로드**
   ```bash
   git clone https://github.com/yourusername/htmlcss-guide.git
   cd htmlcss-guide
   ```

2. **브라우저로 열기**
   - `index.html` 파일을 더블클릭
   - 또는 로컬 서버 실행:
   ```bash
   # Python
   python -m http.server 8000

   # Node.js
   npx serve

   # VS Code
   Live Server 확장 설치 후 Go Live
   ```

3. **학습 시작**
   - 왼쪽 사이드바에서 원하는 주제 선택
   - 내용을 읽고 예제 코드 실습
   - Ctrl+F로 키워드 검색

---

## <i class="fas fa-mobile-alt"></i> 반응형 지원

### <i class="fas fa-tablet-alt"></i> 데스크탑 (768px 이상)
- 사이드바 항상 표시
- 넓은 콘텐츠 영역
- 햄버거 버튼 숨김

### <i class="fas fa-mobile"></i> 모바일 (767px 이하)
- 사이드바 슬라이드 메뉴
- 고정 햄버거 버튼
- 터치 친화적 UI

---

## <i class="fas fa-tools"></i> 기술 스택

### <i class="fas fa-code"></i> 핵심
- **HTML5**: 시맨틱 마크업, details/summary
- **CSS3**: Flexbox, Grid, CSS Variables, Backdrop Filter
- **JavaScript**: 마크다운 로더, 네비게이션

### <i class="fas fa-book"></i> 라이브러리
- **Marked.js**: 마크다운 파싱
- **Prism.js**: 코드 하이라이팅
- **Font Awesome**: 아이콘

### <i class="fas fa-paint-brush"></i> 디자인
- **시스템 폰트**: -apple-system, BlinkMacSystemFont, Segoe UI
- **애플 스타일**: 미니멀, 블러 효과, 부드러운 애니메이션

---

## <i class="fas fa-edit"></i> 콘텐츠 추가 방법

### 1. 새 마크다운 파일 생성

`content/{카테고리}/` 폴더에 `.md` 파일 생성

```markdown
# <i class="fas fa-icon"></i> 제목

:::info
<i class="fas fa-info-circle"></i> **설명**

핵심 내용 요약
:::

---

## <i class="fas fa-section"></i> 섹션 제목

내용 작성...

```css
.example {
  property: value;
}
```

:::tip
<i class="fas fa-lightbulb"></i> **팁**

유용한 정보
:::
```

### 2. index.html에 링크 추가

```html
<aside class="sidebar">
  <details>
    <summary>
      <i class="fas fa-chevron-right"></i>
      <i class="fas fa-category-icon"></i> 카테고리
    </summary>
    <a href="#new-topic" data-content="content/category/new-topic.md">새 주제</a>
  </details>
</aside>
```

### 3. 커스텀 블록

```markdown
:::info
정보 블록 (파란색)
:::

:::tip
팁 블록 (초록색)
:::

:::warning
경고 블록 (주황색)
:::
```

---

## <i class="fas fa-paint-roller"></i> 스타일 커스터마이징

### CSS 변수 수정 (style.css)

```css
:root {
  /* 색상 */
  --primary: #0071e3;
  --text: #1d1d1f;
  --bg: #ffffff;

  /* 간격 */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;

  /* 폰트 */
  --font-size-base: 16px;
  --font-size-lg: 18px;
}
```

### 다크 모드 지원

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #1d1d1f;
    --text: #f5f5f7;
  }
}
```

---

## <i class="fas fa-globe"></i> 배포 방법

### <i class="fab fa-github"></i> GitHub Pages

1. GitHub 저장소 생성
2. 코드 푸시
3. Settings → Pages → Source: main branch
4. `https://username.github.io/repository/` 에서 확인

### <i class="fas fa-bolt"></i> Netlify

1. Netlify에 저장소 연결
2. Build settings:
   - Build command: (없음)
   - Publish directory: `/`
3. 자동 배포

### <i class="fas fa-server"></i> Vercel

```bash
npm install -g vercel
vercel
```

---

## <i class="fas fa-users"></i> 학습 대상

- <i class="fas fa-seedling"></i> **초보자**: HTML/CSS를 처음 배우는 사람
- <i class="fas fa-chart-line"></i> **중급자**: 기초는 알지만 체계적으로 정리하고 싶은 사람
- <i class="fas fa-briefcase"></i> **실무자**: 빠른 참조가 필요한 개발자
- <i class="fas fa-graduation-cap"></i> **학생**: 과제나 프로젝트에 활용

---

## <i class="fas fa-bug"></i> 문제 해결

### 마크다운이 렌더링 안됨
- 브라우저 개발자 도구(F12) → Console 확인
- `marked.js` 로드 확인
- 파일 경로 확인

### 코드 하이라이팅 안됨
- `prism.js` 로드 확인
- 언어 지정 확인: ` ```css ` (공백 없이)

### 햄버거 메뉴 안 열림
- JavaScript 에러 확인
- `app.js` 로드 확인

---

## <i class="fas fa-file-code"></i> 파일 크기

| 파일 | 크기 | 설명 |
|------|------|------|
| index.html | ~5KB | 메인 페이지 |
| css/style.css | ~40KB | 통합 스타일 |
| js/app.js | ~3KB | 마크다운 로더 |
| content/**/*.md | ~500KB | 전체 콘텐츠 |

**전체 크기**: 약 550KB (외부 라이브러리 제외)

---

## <i class="fas fa-link"></i> 유용한 링크

- <i class="fas fa-book"></i> [MDN Web Docs](https://developer.mozilla.org/)
- <i class="fas fa-graduation-cap"></i> [CSS-Tricks](https://css-tricks.com/)
- <i class="fas fa-check"></i> [Can I Use](https://caniuse.com/)
- <i class="fas fa-rocket"></i> [Web.dev](https://web.dev/)

---

## <i class="fas fa-history"></i> 업데이트 히스토리

### v3.0.0 (2026-02-13)
- <i class="fas fa-file-alt"></i> **마크다운 기반**: 읽기 쉽고 수정 간편
- <i class="fas fa-folder"></i> **카테고리 구조**: content/ 폴더 계층 구조
- <i class="fas fa-code"></i> **통합 스타일**: 단일 CSS 파일
- <i class="fas fa-mobile"></i> **햄버거 메뉴**: 모바일 네비게이션
- <i class="fas fa-paint-brush"></i> **커스텀 블록**: :::info, :::tip, :::warning

### v2.0.0 (이전)
- 순수 HTML/CSS 구조
- parts/ 폴더 구조
- manifest.json 관리

### v1.0.0 (초기)
- jQuery + marked.js
- 번호 기반 파일명

---

## <i class="fas fa-heart"></i> 기여 방법

### 콘텐츠 개선
1. 오타 수정
2. 예제 추가
3. 설명 보완
4. 새 주제 추가

### 코드 개선
1. 성능 최적화
2. 접근성 개선
3. 반응형 개선
4. 버그 수정

### 디자인 개선
1. UI/UX 개선
2. 애니메이션 추가
3. 다크 모드 개선

---

## <i class="fas fa-balance-scale"></i> 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능

---

## <i class="fas fa-envelope"></i> 문의

- <i class="fab fa-github"></i> GitHub Issues
- <i class="fas fa-envelope"></i> Email: your@email.com

---

<div align="center">

**<i class="fas fa-star"></i> 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!**

**<i class="fas fa-rocket"></i> HTML/CSS 학습을 즐겁게!**

</div>
