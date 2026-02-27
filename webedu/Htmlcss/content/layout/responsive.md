# <i class="fas fa-mobile-alt"></i> 반응형 웹 디자인

:::info
<i class="fas fa-info-circle"></i> **반응형이란?**

**Responsive Web Design**은 다양한 화면 크기(PC, 태블릿, 모바일)에 자동으로 최적화되는 웹 디자인입니다.
하나의 HTML/CSS로 모든 기기에 대응합니다.
:::

---

## <i class="fas fa-tv"></i> 기기별 레이아웃 비교

같은 사이트가 기기마다 다르게 보입니다:

<div class="device-showcase">
<div class="device-frame">
<div class="mock-phone">
<div class="mock-screen">
<div class="mock-topbar"></div>
<div class="mock-body">
<div class="mock-col"></div>
</div>
<div class="mock-footer"></div>
</div>
</div>
<div class="device-name">모바일</div>
<div class="device-px">~ 767px &nbsp;·&nbsp; 1열</div>
</div>
<div class="device-frame">
<div class="mock-tablet">
<div class="mock-screen">
<div class="mock-topbar"></div>
<div class="mock-body">
<div class="mock-col"></div>
<div class="mock-col"></div>
</div>
<div class="mock-footer"></div>
</div>
</div>
<div class="device-name">태블릿</div>
<div class="device-px">768 ~ 1023px &nbsp;·&nbsp; 2열</div>
</div>
<div class="device-frame">
<div class="mock-desktop">
<div class="mock-screen">
<div class="mock-topbar"></div>
<div class="mock-body">
<div class="mock-col-sm"></div>
<div class="mock-col-lg"></div>
<div class="mock-col"></div>
</div>
<div class="mock-footer"></div>
</div>
</div>
<div class="mock-stand"></div>
<div class="mock-foot"></div>
<div class="device-name">데스크톱</div>
<div class="device-px">1024px ~ &nbsp;·&nbsp; 사이드바 + 본문</div>
</div>
</div>

---

## <i class="fas fa-mobile"></i> Viewport 설정

**필수!** 모든 HTML에 추가해야 반응형이 작동합니다:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

| 속성 | 값 | 의미 |
|------|-----|------|
| `width` | `device-width` | 기기 실제 너비 사용 |
| `initial-scale` | `1.0` | 초기 확대 비율 1배 |
| `maximum-scale` | `1.0` | 최대 확대 제한 (접근성 ↓) |
| `user-scalable` | `no` | 핀치줌 비활성 (비권장) |

:::warning
<i class="fas fa-exclamation-triangle"></i> **viewport 없으면?**

viewport 메타 태그가 없으면 모바일 브라우저가 데스크톱 크기(보통 980px)로 렌더링 후 축소해서 보여줍니다.
반응형 CSS가 전혀 작동하지 않습니다. 반드시 추가하세요!
:::

---

## <i class="fas fa-desktop"></i> 미디어 쿼리 기본 (Media Query)

```css
/* 기본 문법 */
@media (조건) {
  /* 조건에 해당할 때만 적용될 CSS */
}

/* 모바일 퍼스트 (기본 스타일 = 모바일) */
.container {
  padding: 10px;
  font-size: 14px;
}

/* 태블릿 (768px 이상) */
@media (min-width: 768px) {
  .container {
    padding: 20px;
    font-size: 16px;
  }
}

/* 데스크톱 (1024px 이상) */
@media (min-width: 1024px) {
  .container {
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
    font-size: 18px;
  }
}
```

---

## <i class="fas fa-ruler-horizontal"></i> 브레이크포인트 (Breakpoint)

<div class="bp-viz">
<div class="bp-viz-title"><i class="fas fa-arrows-alt-h"></i> &nbsp; 화면 너비별 구간</div>
<div class="bp-bar">
<div class="bp-seg bp-mobile">Mobile</div>
<div class="bp-seg bp-tablet">Tablet</div>
<div class="bp-seg bp-desktop">Desktop</div>
<div class="bp-seg bp-wide">Wide</div>
</div>
<div class="bp-legend">
<div class="bp-legend-item"><div class="bp-dot" style="background:#10b981;"></div>모바일 (~ 767px)</div>
<div class="bp-legend-item"><div class="bp-dot" style="background:#0071e3;"></div>태블릿 (768 ~ 1023px)</div>
<div class="bp-legend-item"><div class="bp-dot" style="background:#8b5cf6;"></div>데스크톱 (1024 ~ 1439px)</div>
<div class="bp-legend-item"><div class="bp-dot" style="background:#f59e0b;"></div>와이드 (1440px ~)</div>
</div>
</div>

```css
/* 모바일 (기본) */
/* @media 없이 기본 스타일로 작성 */

/* 태블릿 */
@media (min-width: 768px) and (max-width: 1023px) {
  /* 768px ~ 1023px */
}

/* 데스크톱 */
@media (min-width: 1024px) {
  /* 1024px ~ */
}

/* 대형 데스크톱 */
@media (min-width: 1440px) {
  /* 1440px ~ */
}
```

:::tip
<i class="fas fa-lightbulb"></i> **Bootstrap 5 브레이크포인트 참고**

- `sm`: 576px+ (소형 태블릿)
- `md`: 768px+ (태블릿)
- `lg`: 992px+ (데스크톱)
- `xl`: 1200px+ (와이드)
- `xxl`: 1400px+ (초광폭)
:::

---

## <i class="fas fa-mobile-alt"></i> Mobile First vs Desktop First

<div class="approach-compare">
<div class="approach-card mobile-first">
<div class="approach-title green"><i class="fas fa-check-circle"></i> Mobile First (권장)</div>
<div class="approach-flow">
<div class="flow-item"><div class="flow-dot green"></div><span class="flow-label">모바일 기본 스타일</span></div>
<div class="flow-line"></div>
<div class="flow-item"><div class="flow-dot blue"></div><span class="flow-label">768px+&nbsp;</span><span class="flow-query">min-width</span><span class="flow-label">&nbsp;→ 태블릿</span></div>
<div class="flow-line"></div>
<div class="flow-item"><div class="flow-dot purple"></div><span class="flow-label">1024px+&nbsp;</span><span class="flow-query">min-width</span><span class="flow-label">&nbsp;→ 데스크톱</span></div>
</div>
</div>
<div class="approach-card desktop-first">
<div class="approach-title orange"><i class="fas fa-desktop"></i> Desktop First</div>
<div class="approach-flow">
<div class="flow-item"><div class="flow-dot purple"></div><span class="flow-label">데스크톱 기본 스타일</span></div>
<div class="flow-line"></div>
<div class="flow-item"><div class="flow-dot blue"></div><span class="flow-label">1023px-&nbsp;</span><span class="flow-query">max-width</span><span class="flow-label">&nbsp;→ 태블릿</span></div>
<div class="flow-line"></div>
<div class="flow-item"><div class="flow-dot green"></div><span class="flow-label">767px-&nbsp;</span><span class="flow-query">max-width</span><span class="flow-label">&nbsp;→ 모바일</span></div>
</div>
</div>
</div>

```css
/* ✅ Mobile First (min-width 사용) */
.nav { flex-direction: column; }        /* 모바일 기본 */

@media (min-width: 768px) {
  .nav { flex-direction: row; }         /* 큰 화면으로 확장 */
}

/* ⚠️ Desktop First (max-width 사용) */
.nav { flex-direction: row; }           /* 데스크톱 기본 */

@media (max-width: 767px) {
  .nav { flex-direction: column; }      /* 작은 화면으로 축소 */
}
```

:::tip
<i class="fas fa-lightbulb"></i> **Mobile First를 권장하는 이유**

- 전 세계 웹 트래픽의 60% 이상이 모바일
- 필수 기능부터 설계하는 점진적 향상(Progressive Enhancement)
- 코드가 더 간결하고 유지보수 쉬움
:::

---

## <i class="fas fa-text-height"></i> CSS 단위 완전 정복

반응형 디자인에서 올바른 단위 선택이 핵심입니다.

<div class="unit-compare">
<div class="unit-compare-title"><i class="fas fa-ruler"></i> &nbsp; CSS 단위 크기 비교 (기준: 16px 루트)</div>
<div class="unit-row">
<span class="unit-label">px</span>
<div class="unit-bar" style="width:64px;background:#374151;">64px</div>
<span class="unit-note">절대값 — 항상 동일한 크기</span>
</div>
<div class="unit-row">
<span class="unit-label">em</span>
<div class="unit-bar" style="width:96px;background:#0071e3;">1.5em</div>
<span class="unit-note">부모 font-size 기준 — 중첩 주의!</span>
</div>
<div class="unit-row">
<span class="unit-label">rem</span>
<div class="unit-bar" style="width:80px;background:#10b981;">1rem</div>
<span class="unit-note">html 루트 기준 — 일관성 보장 ✓</span>
</div>
<div class="unit-row">
<span class="unit-label">%</span>
<div class="unit-bar" style="width:140px;background:#8b5cf6;">70%</div>
<span class="unit-note">부모 요소 크기 기준 — 유동적 레이아웃에 적합</span>
</div>
<div class="unit-row">
<span class="unit-label">vw</span>
<div class="unit-bar" style="width:120px;background:#f59e0b;">50vw = 뷰포트 50%</div>
<span class="unit-note">뷰포트 너비 기준 — Hero 섹션에 활용</span>
</div>
<div class="unit-row">
<span class="unit-label">vh</span>
<div class="unit-bar" style="width:100px;background:#ef4444;">100vh = 전체 높이</div>
<span class="unit-note">뷰포트 높이 기준 — 전체 화면 레이아웃</span>
</div>
</div>

### 단위별 사용 가이드

```css
/* px - 테두리, 그림자, 아이콘 고정 크기 */
border: 1px solid #eee;
box-shadow: 0 4px 16px rgba(0,0,0,0.1);
border-radius: 8px;

/* rem - 폰트 크기, 간격 (권장) */
font-size: 1rem;          /* 16px */
padding: 1.5rem;          /* 24px */
margin-bottom: 2rem;      /* 32px */

/* em - 부모 기준 패딩/마진 (컴포넌트 내부) */
.button {
  font-size: 16px;
  padding: 0.75em 1.5em;  /* 폰트 크기에 비례 */
}

/* % - 너비, 유동 레이아웃 */
.sidebar { width: 30%; }
.main { width: 70%; }

/* vw/vh - 배경, 히어로 섹션 */
.hero {
  height: 100vh;          /* 전체 화면 높이 */
  width: 100vw;
}

/* clamp() - 반응형 폰트 크기 (최선책!) */
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
  /* 최소 24px, 뷰포트 4%, 최대 48px */
}
```

### em vs rem 핵심 차이

```css
/* ⚠️ em 중첩 문제 */
html { font-size: 16px; }

.parent {
  font-size: 1.5em;       /* 24px (16 × 1.5) */
}

.parent .child {
  font-size: 1.5em;       /* 36px! (24 × 1.5) 의도치 않은 확대 */
}

/* ✅ rem은 항상 루트 기준 */
.parent {
  font-size: 1.5rem;      /* 24px (항상 16 × 1.5) */
}

.parent .child {
  font-size: 1.5rem;      /* 24px (항상 16 × 1.5) */
}
```

---

## <i class="fas fa-filter"></i> 미디어 쿼리 고급

### 다양한 미디어 쿼리 타입

<div class="mq-types">
<div class="mq-type-card">
<div class="mq-type-name">min-width</div>
<div class="mq-type-desc">최솟값 이상 — Mobile First 핵심</div>
</div>
<div class="mq-type-card">
<div class="mq-type-name">max-width</div>
<div class="mq-type-desc">최댓값 이하 — Desktop First에서 사용</div>
</div>
<div class="mq-type-card">
<div class="mq-type-name">orientation</div>
<div class="mq-type-desc">portrait (세로) / landscape (가로)</div>
</div>
<div class="mq-type-card">
<div class="mq-type-name">prefers-color-scheme</div>
<div class="mq-type-desc">dark / light — 시스템 다크모드 감지</div>
</div>
<div class="mq-type-card">
<div class="mq-type-name">prefers-reduced-motion</div>
<div class="mq-type-desc">애니메이션 감소 설정 감지</div>
</div>
<div class="mq-type-card">
<div class="mq-type-name">hover</div>
<div class="mq-type-desc">마우스 호버 가능 여부 (터치 vs 마우스)</div>
</div>
</div>

```css
/* 화면 방향 */
@media (orientation: landscape) {
  .sidebar { width: 40%; }
}

@media (orientation: portrait) {
  .sidebar { display: none; }
}

/* 시스템 다크모드 자동 감지 */
@media (prefers-color-scheme: dark) {
  body {
    background: #000;
    color: #fff;
  }
}

/* 접근성 - 애니메이션 감소 요청 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* 터치 vs 마우스 구분 */
@media (hover: hover) {
  /* 마우스가 있는 기기만 hover 효과 */
  .btn:hover {
    transform: translateY(-2px);
  }
}

@media (hover: none) {
  /* 터치 기기 - hover 대신 :active 사용 */
  .btn:active {
    transform: scale(0.97);
  }
}

/* 고해상도 (레티나 디스플레이) */
@media (-webkit-min-device-pixel-ratio: 2),
       (min-resolution: 192dpi) {
  .logo {
    background-image: url('logo@2x.png');
    background-size: 100px 50px;
  }
}

/* 인쇄 */
@media print {
  .sidebar, .nav, .btn { display: none; }
  body { font-size: 12pt; color: black; }
  a::after { content: " (" attr(href) ")"; }
}

/* 복합 조건 */
@media (min-width: 768px) and (max-width: 1023px) {
  /* 태블릿만 */
}

@media (max-width: 767px), (orientation: portrait) {
  /* 모바일이거나 세로 방향 */
}
```

---

## <i class="fas fa-percentage"></i> 유동적 레이아웃

```css
/* Container 패턴 (가장 많이 쓰이는 패턴) */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(16px, 4vw, 48px);    /* 반응형 패딩 */
}

/* 유동 그리드 */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: clamp(12px, 3vw, 24px);
}

/* 비율 유지 */
.aspect-video {
  aspect-ratio: 16 / 9;                 /* 16:9 비율 자동 유지 */
  width: 100%;
  object-fit: cover;
}

/* calc() 활용 */
.sidebar { width: min(300px, 30%); }   /* 300px 또는 30% 중 작은 값 */
.main { width: max(400px, 60%); }      /* 400px 또는 60% 중 큰 값 */
```

---

## <i class="fas fa-images"></i> 반응형 이미지

```css
/* 기본 반응형 이미지 */
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

```html
<!-- srcset: 화면 크기별 다른 해상도 이미지 -->
<img
  src="image-800.jpg"
  srcset="
    image-400.jpg  400w,
    image-800.jpg  800w,
    image-1200.jpg 1200w
  "
  sizes="
    (max-width: 600px) 100vw,
    (max-width: 1200px) 50vw,
    800px
  "
  alt="반응형 이미지"
  width="800" height="600"
  loading="lazy">

<!-- picture: 기기별 완전히 다른 이미지 (아트 디렉션) -->
<picture>
  <source media="(min-width: 1024px)" srcset="hero-desktop.webp" type="image/webp">
  <source media="(min-width: 768px)" srcset="hero-tablet.webp" type="image/webp">
  <source srcset="hero-mobile.webp" type="image/webp">
  <img src="hero-mobile.jpg" alt="Hero 이미지" loading="lazy">
</picture>
```

:::tip
<i class="fas fa-lightbulb"></i> **이미지 최적화 체크리스트**

- `width`/`height` 속성 명시 → CLS(레이아웃 이동) 방지
- `loading="lazy"` → 화면에 보일 때만 로드
- WebP 포맷 사용 → JPEG 대비 30% 용량 감소
- `aspect-ratio` 설정 → 빈 공간 미리 확보
:::

---

## <i class="fas fa-th"></i> 반응형 그리드

### 열 변화 시각화

<div class="layout-evo">
<div class="layout-step">
<div class="step-badge mobile">모바일</div>
<div class="step-cols">
<div class="step-col"></div>
</div>
<div class="step-desc">1열 · ~ 767px</div>
</div>
<div class="layout-step">
<div class="step-badge tablet">태블릿</div>
<div class="step-cols">
<div class="step-col"></div>
<div class="step-col"></div>
</div>
<div class="step-desc">2열 · 768px+</div>
</div>
<div class="layout-step">
<div class="step-badge desktop">데스크톱</div>
<div class="step-cols">
<div class="step-col"></div>
<div class="step-col"></div>
<div class="step-col"></div>
</div>
<div class="step-desc">3열 · 1024px+</div>
</div>
<div class="layout-step">
<div class="step-badge wide">와이드</div>
<div class="step-cols">
<div class="step-col"></div>
<div class="step-col"></div>
<div class="step-col"></div>
<div class="step-col"></div>
</div>
<div class="step-desc">4열 · 1440px+</div>
</div>
</div>

```css
/* CSS Grid - 자동 반응형 (미디어쿼리 불필요!) */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

/* Flexbox - 미디어쿼리로 제어 */
.flex-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.flex-grid > * {
  flex: 1 1 100%;                        /* 모바일: 1열 */
}

@media (min-width: 640px) {
  .flex-grid > * { flex-basis: calc(50% - 10px); }  /* 2열 */
}

@media (min-width: 1024px) {
  .flex-grid > * { flex-basis: calc(33.333% - 14px); } /* 3열 */
}

@media (min-width: 1440px) {
  .flex-grid > * { flex-basis: calc(25% - 15px); }  /* 4열 */
}
```

---

## <i class="fas fa-font"></i> 반응형 타이포그래피

```css
/* 방법 1: 미디어쿼리 */
h1 { font-size: 1.75rem; }   /* 28px 모바일 */

@media (min-width: 768px)  { h1 { font-size: 2.5rem; } }   /* 40px */
@media (min-width: 1024px) { h1 { font-size: 3rem; } }     /* 48px */

/* 방법 2: clamp() - 권장 */
h1 { font-size: clamp(1.75rem, 4vw + 0.5rem, 3.5rem); }
h2 { font-size: clamp(1.25rem, 3vw + 0.25rem, 2.5rem); }
h3 { font-size: clamp(1.1rem, 2vw + 0.25rem, 1.75rem); }
p  { font-size: clamp(1rem, 1.5vw + 0.25rem, 1.125rem); }

/* 방법 3: 유동 타이포그래피 스케일 */
:root {
  --type-scale: clamp(14px, 2vw, 18px);
}

body { font-size: var(--type-scale); }
h1 { font-size: calc(var(--type-scale) * 2.5); }
h2 { font-size: calc(var(--type-scale) * 2); }
h3 { font-size: calc(var(--type-scale) * 1.5); }
```

---

## <i class="fas fa-puzzle-piece"></i> 10가지 실전 레이아웃 패턴

---

### 패턴 1. <i class="fas fa-crown"></i> Holy Grail 레이아웃

헤더 + 왼쪽 사이드바 + 본문 + 오른쪽 사이드바 + 푸터

<div class="grid-named-compare">
<div class="grid-named-box">
<div class="grid-named-title">데스크톱 (1024px+)</div>
<div class="grid-viz-desktop">
<div class="gv-h">Header</div>
<div class="gv-s">Sidebar</div>
<div class="gv-m">Main Content</div>
<div class="gv-f">Footer</div>
</div>
</div>
<div class="grid-named-box">
<div class="grid-named-title">모바일 (~ 767px)</div>
<div class="grid-viz-mobile">
<div class="gv-h">Header</div>
<div class="gv-m">Main Content</div>
<div class="gv-s">Sidebar (아래로)</div>
<div class="gv-f">Footer</div>
</div>
</div>
</div>

```html
<div class="holy-grail">
  <header class="hg-header">Header</header>
  <nav class="hg-sidebar">Sidebar</nav>
  <main class="hg-main">Main Content</main>
  <footer class="hg-footer">Footer</footer>
</div>
```

```css
.holy-grail {
  display: grid;
  min-height: 100vh;
  /* 모바일: 세로 쌓기 */
  grid-template-areas:
    "header"
    "main"
    "sidebar"
    "footer";
  grid-template-rows: auto 1fr auto auto;
}

.hg-header { grid-area: header; background: #0071e3; color: white; padding: 20px; }
.hg-sidebar { grid-area: sidebar; background: #f3f4f6; padding: 20px; }
.hg-main   { grid-area: main; padding: 20px; }
.hg-footer { grid-area: footer; background: #374151; color: white; padding: 20px; }

/* 데스크톱: 3열 */
@media (min-width: 1024px) {
  .holy-grail {
    grid-template-areas:
      "header  header  header"
      "sidebar main    main"
      "footer  footer  footer";
    grid-template-columns: 240px 1fr;
    grid-template-rows: auto 1fr auto;
  }
}
```

---

### 패턴 2. <i class="fas fa-th-large"></i> Card Grid (자동 반응형)

```css
/* 미디어쿼리 없이도 자동으로 반응합니다! */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: clamp(12px, 3vw, 24px);
  padding: clamp(16px, 4vw, 40px);
}

.card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  transition: transform 0.2s ease;
}

.card:hover { transform: translateY(-4px); }

/* 카드 내부 이미지 비율 고정 */
.card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
}
```

---

### 패턴 3. <i class="fas fa-table"></i> 반응형 테이블

모바일에서 테이블 → 카드 형태로 변환:

```html
<table class="responsive-table">
  <thead>
    <tr>
      <th>이름</th>
      <th>직책</th>
      <th>이메일</th>
      <th>상태</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="이름">홍길동</td>
      <td data-label="직책">개발자</td>
      <td data-label="이메일">hong@example.com</td>
      <td data-label="상태">활성</td>
    </tr>
  </tbody>
</table>
```

```css
.responsive-table {
  width: 100%;
  border-collapse: collapse;
}

/* 모바일: 카드 형태 */
@media (max-width: 767px) {
  .responsive-table thead { display: none; }   /* 헤더 숨김 */

  .responsive-table tr {
    display: block;
    margin-bottom: 16px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    overflow: hidden;
  }

  .responsive-table td {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid #f3f4f6;
  }

  .responsive-table td::before {
    content: attr(data-label);              /* data-label 값을 라벨로 */
    font-weight: 700;
    color: #6b7280;
    font-size: 0.85em;
  }

  .responsive-table tr:last-child td:last-child {
    border-bottom: none;
  }
}
```

---

### 패턴 4. <i class="fas fa-toggle-on"></i> Tab → Accordion 변환

데스크톱: 탭, 모바일: 아코디언으로 자동 전환

```html
<div class="tab-accordion">
  <!-- 탭 헤더 (데스크톱에서만 표시) -->
  <div class="tab-headers">
    <button class="tab-btn active" data-tab="1">소개</button>
    <button class="tab-btn" data-tab="2">기능</button>
    <button class="tab-btn" data-tab="3">요금</button>
  </div>

  <!-- 패널들 (모바일: 아코디언) -->
  <div class="tab-panel" data-panel="1">
    <button class="accordion-btn">소개</button>
    <div class="panel-content">소개 내용...</div>
  </div>

  <div class="tab-panel" data-panel="2">
    <button class="accordion-btn">기능</button>
    <div class="panel-content">기능 내용...</div>
  </div>
</div>
```

```css
/* 데스크톱: 탭 방식 */
.accordion-btn { display: none; }         /* 아코디언 버튼 숨김 */

.tab-headers {
  display: flex;
  border-bottom: 2px solid #e5e7eb;
}

.tab-btn {
  padding: 12px 24px;
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 600;
}

.tab-btn.active {
  border-bottom: 2px solid #0071e3;
  color: #0071e3;
}

/* 모바일: 아코디언 방식 */
@media (max-width: 767px) {
  .tab-headers { display: none; }          /* 탭 헤더 숨김 */

  .accordion-btn {
    display: flex;
    width: 100%;
    padding: 16px;
    justify-content: space-between;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    background: none;
    cursor: pointer;
    margin-bottom: 4px;
    font-weight: 700;
  }

  .panel-content {
    padding: 16px;
    display: none;
  }

  .tab-panel.open .panel-content { display: block; }
}
```

---

### 패턴 5. <i class="fas fa-image"></i> Masonry 이미지 갤러리

```html
<div class="masonry-gallery">
  <img src="photo1.jpg" alt="">
  <img src="photo2.jpg" alt="">
  <img src="photo3.jpg" alt="">
  <!-- ... -->
</div>
```

```css
.masonry-gallery {
  columns: 1;                              /* 모바일: 1열 */
  column-gap: 12px;
}

.masonry-gallery img {
  width: 100%;
  margin-bottom: 12px;
  border-radius: 8px;
  break-inside: avoid;                     /* 이미지 열 사이 분리 방지 */
  display: block;
}

@media (min-width: 640px) {
  .masonry-gallery { columns: 2; }        /* 태블릿: 2열 */
}

@media (min-width: 1024px) {
  .masonry-gallery { columns: 3; }        /* 데스크톱: 3열 */
}

@media (min-width: 1440px) {
  .masonry-gallery { columns: 4; }        /* 와이드: 4열 */
}
```

---

### 패턴 6. <i class="fas fa-wpforms"></i> 반응형 폼 레이아웃

```css
.form-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;             /* 모바일: 1열 */
}

@media (min-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr 1fr;       /* 데스크톱: 2열 */
  }

  /* 전체 너비를 차지해야 하는 필드 */
  .form-full {
    grid-column: 1 / -1;                  /* 모든 열 차지 */
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-weight: 600;
  font-size: 0.875rem;
  color: #374151;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 44px;                       /* 터치 최소 크기 */
  transition: border-color 0.2s;
}

.form-group input:focus {
  outline: none;
  border-color: #0071e3;
  box-shadow: 0 0 0 3px rgba(0,113,227,0.15);
}
```

---

### 패턴 7. <i class="fas fa-image"></i> Full Hero 섹션

```css
.hero {
  min-height: 100svh;                     /* svh: 모바일 주소창 제외 */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: clamp(40px, 8vw, 80px) clamp(16px, 4vw, 48px);
  background:
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('hero.jpg') center/cover no-repeat;
}

.hero-title {
  font-size: clamp(2rem, 6vw, 4.5rem);
  font-weight: 900;
  color: white;
  line-height: 1.15;
  margin-bottom: clamp(16px, 3vw, 24px);
}

.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  color: rgba(255,255,255,0.85);
  max-width: 600px;
  margin: 0 auto clamp(24px, 4vw, 40px);
}

.hero-cta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.hero-btn {
  padding: clamp(12px, 2vw, 16px) clamp(24px, 4vw, 36px);
  border-radius: 9999px;
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  font-weight: 700;
  min-width: 140px;
  text-decoration: none;
}
```

---

### 패턴 8. <i class="fas fa-sticky-note"></i> Sticky 네비게이션

```css
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0,0,0,0.08);
  transition: box-shadow 0.2s;
}

.nav.scrolled {
  box-shadow: 0 2px 20px rgba(0,0,0,0.12);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(16px, 4vw, 40px);
  height: 60px;
}

/* 모바일 햄버거 */
@media (max-width: 767px) {
  .nav-links { display: none; }
  .nav-links.open { display: flex; flex-direction: column; }
}
```

```javascript
// 스크롤 감지로 그림자 추가
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('scrolled', window.scrollY > 20);
});
```

---

### 패턴 9. <i class="fas fa-clone"></i> 반응형 모달

```html
<div class="modal-overlay" id="modal">
  <div class="modal-box">
    <button class="modal-close">×</button>
    <div class="modal-content">모달 내용</div>
  </div>
</div>
```

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.modal-box {
  background: white;
  border-radius: 16px;
  padding: clamp(20px, 4vw, 40px);
  width: 100%;
  max-width: 600px;                        /* 최대 600px */
  max-height: 90vh;                        /* 화면의 90% */
  overflow-y: auto;
  transform: scale(0.9);
  transition: transform 0.3s ease;
  position: relative;
}

.modal-overlay.active .modal-box {
  transform: scale(1);
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: #f3f4f6;
  cursor: pointer;
  font-size: 18px;
}
```

---

### 패턴 10. <i class="fas fa-video"></i> 반응형 동영상 임베드

```html
<div class="video-wrapper">
  <iframe src="https://www.youtube.com/embed/..." allowfullscreen></iframe>
</div>
```

```css
/* 16:9 비율 유지 */
.video-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;                   /* 현대적 방법 */
}

.video-wrapper iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: none;
}

/* 구형 브라우저 대응 */
.video-wrapper-legacy {
  position: relative;
  padding-bottom: 56.25%;               /* 9/16 = 56.25% */
  height: 0;
  overflow: hidden;
}
```

---

## <i class="fas fa-rocket"></i> 실전 프로젝트

---

### 프로젝트 1. <i class="fas fa-shopping-cart"></i> 쇼핑몰 상품 목록 페이지

<div class="device-showcase">
<div class="device-frame">
<div class="mock-phone">
<div class="mock-screen">
<div class="mock-topbar"></div>
<div class="mock-body">
<div class="mock-cards">
<div class="mock-card-full"></div>
<div class="mock-card-item"></div>
<div class="mock-card-item"></div>
<div class="mock-card-item"></div>
<div class="mock-card-item"></div>
</div>
</div>
<div class="mock-footer"></div>
</div>
</div>
<div class="device-name">모바일</div>
<div class="device-px">1열 카드</div>
</div>
<div class="device-frame">
<div class="mock-tablet">
<div class="mock-screen">
<div class="mock-topbar"></div>
<div class="mock-body">
<div class="mock-cards">
<div class="mock-card-full"></div>
<div class="mock-card-item"></div>
<div class="mock-card-item"></div>
<div class="mock-card-item"></div>
<div class="mock-card-item"></div>
</div>
</div>
<div class="mock-footer"></div>
</div>
</div>
<div class="device-name">태블릿</div>
<div class="device-px">2열 카드</div>
</div>
<div class="device-frame">
<div class="mock-desktop">
<div class="mock-screen">
<div class="mock-topbar"></div>
<div class="mock-body">
<div class="mock-col-sm"></div>
<div class="mock-cards">
<div class="mock-card-item"></div>
<div class="mock-card-item"></div>
<div class="mock-card-item"></div>
<div class="mock-card-item"></div>
<div class="mock-card-item"></div>
<div class="mock-card-item"></div>
</div>
</div>
<div class="mock-footer"></div>
</div>
</div>
<div class="mock-stand"></div>
<div class="mock-foot"></div>
<div class="device-name">데스크톱</div>
<div class="device-px">필터 + 3열</div>
</div>
</div>

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>쇼핑몰</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    /* 헤더 */
    .shop-header {
      position: sticky; top: 0; z-index: 100;
      background: white;
      border-bottom: 1px solid #e5e7eb;
      padding: 0 clamp(16px, 4vw, 40px);
      height: 60px;
      display: flex; align-items: center; justify-content: space-between;
    }

    /* 레이아웃 */
    .shop-layout {
      max-width: 1400px; margin: 0 auto;
      padding: clamp(16px, 3vw, 32px);
    }

    /* 필터 사이드바 */
    .filter-panel {
      display: none;
    }

    /* 상품 그리드 */
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(260px, 100%), 1fr));
      gap: 20px;
    }

    /* 상품 카드 */
    .product-card {
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      overflow: hidden;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .product-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0,0,0,0.1);
    }
    .product-img {
      width: 100%; aspect-ratio: 1; object-fit: cover;
      background: #f3f4f6;
    }
    .product-info { padding: 16px; }
    .product-name { font-weight: 700; margin-bottom: 6px; }
    .product-price {
      font-size: 1.2rem; font-weight: 800;
      color: #0071e3;
    }

    /* 태블릿 (768px+) */
    @media (min-width: 768px) {
      .shop-layout { display: grid; gap: 24px; }
    }

    /* 데스크톱 (1024px+) */
    @media (min-width: 1024px) {
      .shop-layout {
        grid-template-columns: 240px 1fr;
      }

      .filter-panel {
        display: block;
        position: sticky; top: 80px;
        height: fit-content;
        padding: 20px;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
      }

      .filter-title {
        font-weight: 800; margin-bottom: 16px;
      }

      .filter-group { margin-bottom: 20px; }
      .filter-group-title { font-weight: 700; font-size: 0.875rem; margin-bottom: 8px; }
    }
  </style>
</head>
<body>
  <header class="shop-header">
    <span style="font-weight:800;font-size:1.2rem;">SHOP</span>
    <nav style="display:flex;gap:20px;">
      <a href="#">장바구니</a>
      <a href="#">마이페이지</a>
    </nav>
  </header>

  <div class="shop-layout">
    <!-- 필터 사이드바 (데스크톱만) -->
    <aside class="filter-panel">
      <div class="filter-title">필터</div>
      <div class="filter-group">
        <div class="filter-group-title">카테고리</div>
        <label><input type="checkbox"> 상의</label><br>
        <label><input type="checkbox"> 하의</label><br>
        <label><input type="checkbox"> 신발</label>
      </div>
      <div class="filter-group">
        <div class="filter-group-title">가격대</div>
        <input type="range" min="0" max="100000" style="width:100%">
      </div>
    </aside>

    <!-- 상품 그리드 -->
    <main>
      <div class="product-grid">
        <div class="product-card">
          <div class="product-img"></div>
          <div class="product-info">
            <div class="product-name">상품명 A</div>
            <div class="product-price">₩29,000</div>
          </div>
        </div>
        <!-- 상품 카드 반복... -->
      </div>
    </main>
  </div>
</body>
</html>
```

---

### 프로젝트 2. <i class="fas fa-blog"></i> 블로그 레이아웃

<div class="device-showcase">
<div class="device-frame">
<div class="mock-phone">
<div class="mock-screen">
<div class="mock-topbar"></div>
<div class="mock-body">
<div class="mock-content-main">
<div class="mock-text-line"></div>
<div class="mock-text-line med"></div>
<div class="mock-text-line short"></div>
<div class="mock-text-line"></div>
<div class="mock-text-line med"></div>
</div>
</div>
<div class="mock-footer"></div>
</div>
</div>
<div class="device-name">모바일</div>
<div class="device-px">단일 컬럼</div>
</div>
<div class="device-frame">
<div class="mock-desktop">
<div class="mock-screen">
<div class="mock-topbar"></div>
<div class="mock-body" style="gap:4px;">
<div class="mock-sidebar-layout" style="width:100%;gap:4px;">
<div class="mock-content-main" style="flex:2;">
<div class="mock-text-line"></div>
<div class="mock-text-line med"></div>
<div class="mock-text-line short"></div>
</div>
<div class="mock-nav-side" style="width:35%;">
<div class="mock-nav-link"></div>
<div class="mock-nav-link"></div>
<div class="mock-nav-link"></div>
</div>
</div>
</div>
<div class="mock-footer"></div>
</div>
</div>
<div class="mock-stand"></div>
<div class="mock-foot"></div>
<div class="device-name">데스크톱</div>
<div class="device-px">본문 + 사이드바</div>
</div>
</div>

```css
/* 블로그 레이아웃 */
.blog-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: clamp(16px, 4vw, 40px);
}

/* 모바일: 단일 컬럼 */
.blog-layout {
  display: grid;
  gap: 32px;
}

/* 데스크톱: 본문 + 사이드바 */
@media (min-width: 900px) {
  .blog-layout {
    grid-template-columns: 1fr 300px;
    align-items: start;
  }

  .blog-sidebar {
    position: sticky;
    top: 80px;
  }
}

/* 글 내용 */
.blog-post {
  line-height: 1.9;
}

.blog-post h1 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 900;
  margin-bottom: 16px;
}

.blog-post p {
  margin-bottom: 1.5rem;
  font-size: clamp(1rem, 1.5vw, 1.1rem);
}

.blog-post img {
  width: 100%;
  border-radius: 12px;
  margin: 24px 0;
}

/* 목차 (사이드바) */
.toc {
  padding: 20px;
  background: #f9fafb;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
}

.toc-title {
  font-weight: 800;
  margin-bottom: 12px;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.toc-link {
  display: block;
  padding: 6px 0;
  color: #6b7280;
  text-decoration: none;
  font-size: 0.875rem;
  border-left: 2px solid transparent;
  padding-left: 12px;
  transition: all 0.2s;
}

.toc-link:hover, .toc-link.active {
  color: #0071e3;
  border-left-color: #0071e3;
}
```

---

### 프로젝트 3. <i class="fas fa-bullhorn"></i> SaaS 랜딩 페이지

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SaaS 서비스</title>
</head>
<body>

  <!-- Hero 섹션 -->
  <section class="hero">
    <div class="hero-content">
      <h1>더 빠른 성장을 위한<br>올인원 플랫폼</h1>
      <p>수천 개의 기업이 신뢰하는 솔루션으로 업무 효율을 3배 높이세요.</p>
      <div class="hero-buttons">
        <a href="#" class="btn-primary">무료로 시작하기</a>
        <a href="#" class="btn-secondary">데모 보기</a>
      </div>
    </div>
  </section>

  <!-- 기능 그리드 -->
  <section class="features">
    <h2>왜 우리를 선택할까요?</h2>
    <div class="features-grid">
      <div class="feature-card">
        <i class="fas fa-bolt"></i>
        <h3>빠른 속도</h3>
        <p>99.9% 업타임과 초고속 응답 속도.</p>
      </div>
      <!-- ... -->
    </div>
  </section>

  <!-- 가격표 -->
  <section class="pricing">
    <h2>투명한 요금제</h2>
    <div class="pricing-grid">
      <div class="plan-card">
        <div class="plan-name">무료</div>
        <div class="plan-price">₩0</div>
        <ul class="plan-features">
          <li>기본 기능</li>
          <li>1GB 저장공간</li>
          <li>3개 프로젝트</li>
        </ul>
        <a href="#" class="plan-btn">시작하기</a>
      </div>
      <div class="plan-card featured">
        <div class="plan-badge">인기</div>
        <div class="plan-name">프로</div>
        <div class="plan-price">₩29,000<span>/월</span></div>
        <ul class="plan-features">
          <li>모든 기능</li>
          <li>100GB 저장공간</li>
          <li>무제한 프로젝트</li>
        </ul>
        <a href="#" class="plan-btn">시작하기</a>
      </div>
    </div>
  </section>

</body>
</html>
```

```css
/* === HERO === */
.hero {
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 60px);
  background: linear-gradient(135deg, #0071e3 0%, #5856d6 100%);
}

.hero h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 900;
  color: white;
  line-height: 1.2;
  margin-bottom: clamp(16px, 3vw, 24px);
}

.hero p {
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: rgba(255,255,255,0.85);
  max-width: 560px;
  margin: 0 auto clamp(24px, 4vw, 40px);
}

.hero-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-primary {
  padding: 14px 32px; border-radius: 9999px;
  background: white; color: #0071e3;
  font-weight: 800; text-decoration: none;
}

.btn-secondary {
  padding: 14px 32px; border-radius: 9999px;
  border: 2px solid rgba(255,255,255,0.6); color: white;
  font-weight: 700; text-decoration: none;
}

/* === FEATURES === */
.features {
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 60px);
  text-align: center;
  max-width: 1200px; margin: 0 auto;
}

.features h2 {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  margin-bottom: clamp(24px, 4vw, 48px);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr));
  gap: 24px;
  text-align: left;
}

.feature-card {
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.08);
}

.feature-card i {
  font-size: 1.8rem;
  color: #0071e3;
  margin-bottom: 12px;
}

/* === PRICING === */
.pricing {
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 60px);
  text-align: center;
  background: #f9fafb;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;
}

.plan-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  padding: 32px 24px;
  position: relative;
}

.plan-card.featured {
  border-color: #0071e3;
  border-width: 2px;
  transform: scale(1.02);
}

.plan-badge {
  position: absolute; top: -14px; left: 50%;
  transform: translateX(-50%);
  background: #0071e3; color: white;
  padding: 4px 16px; border-radius: 9999px;
  font-size: 0.8rem; font-weight: 800;
}

.plan-name { font-weight: 700; font-size: 1.1rem; margin-bottom: 8px; }
.plan-price {
  font-size: 2.5rem; font-weight: 900;
  color: #0071e3; margin-bottom: 24px;
}
.plan-price span { font-size: 1rem; font-weight: 400; color: #6b7280; }

.plan-features { list-style: none; text-align: left; margin-bottom: 24px; }
.plan-features li {
  padding: 8px 0; border-bottom: 1px solid #f3f4f6;
  font-size: 0.9rem;
}
.plan-features li::before { content: "✓ "; color: #10b981; font-weight: 800; }

.plan-btn {
  display: block; padding: 12px;
  background: #0071e3; color: white;
  border-radius: 10px; text-decoration: none;
  font-weight: 700; text-align: center;
}
```

---

## <i class="fas fa-th"></i> CSS Grid 고급 반응형

### Named Grid Areas (이름 있는 영역)

<div class="grid-named-compare">
<div class="grid-named-box">
<div class="grid-named-title">데스크톱 레이아웃</div>
<div class="grid-viz-desktop">
<div class="gv-h">header</div>
<div class="gv-s">sidebar</div>
<div class="gv-m">main</div>
<div class="gv-f">footer</div>
</div>
</div>
<div class="grid-named-box">
<div class="grid-named-title">모바일 레이아웃</div>
<div class="grid-viz-mobile">
<div class="gv-h">header</div>
<div class="gv-m">main</div>
<div class="gv-s">sidebar</div>
<div class="gv-f">footer</div>
</div>
</div>
</div>

```css
.layout {
  display: grid;
  /* 모바일: 세로 쌓기 */
  grid-template-areas:
    "header"
    "main"
    "sidebar"
    "footer";
  grid-template-rows: auto 1fr auto auto;
  min-height: 100vh;
}

/* 태블릿: 사이드바 추가 */
@media (min-width: 768px) {
  .layout {
    grid-template-areas:
      "header  header"
      "sidebar main"
      "footer  footer";
    grid-template-columns: 220px 1fr;
    grid-template-rows: auto 1fr auto;
  }
}

/* 데스크톱: 양쪽 사이드바 */
@media (min-width: 1200px) {
  .layout {
    grid-template-areas:
      "header  header   header"
      "sidebar main     aside"
      "footer  footer   footer";
    grid-template-columns: 200px 1fr 200px;
  }
}

/* 영역 지정 */
.site-header  { grid-area: header; }
.site-sidebar { grid-area: sidebar; }
.site-main    { grid-area: main; }
.site-aside   { grid-area: aside; }
.site-footer  { grid-area: footer; }
```

---

### auto-fill vs auto-fit 차이

<div class="autofill-compare">
<div class="autofill-box">
<div class="autofill-label">auto-fill (빈 트랙 유지)</div>
<div class="autofill-content">
<div class="autofill-grid-fill">
<div class="autofill-item">1</div>
<div class="autofill-item">2</div>
<div class="autofill-item">3</div>
</div>
</div>
</div>
<div class="autofill-box">
<div class="autofill-label">auto-fit (빈 트랙 축소)</div>
<div class="autofill-content">
<div class="autofill-grid-fit">
<div class="autofill-item">1</div>
<div class="autofill-item">2</div>
<div class="autofill-item">3</div>
</div>
</div>
</div>
</div>

```css
/* auto-fill: 빈 컬럼 자리가 남아있음 */
.grid-fill {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  /* 공간이 600px이면 3개 컬럼 공간 확보 (아이템이 2개여도) */
}

/* auto-fit: 아이템이 공간을 채움 */
.grid-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* 공간이 600px에 아이템이 2개면 각 300px씩 */
}
```

:::tip
<i class="fas fa-lightbulb"></i> **언제 무엇을?**

- **auto-fit**: 아이템이 화면을 꽉 채워야 할 때 (카드 그리드, 기능 소개)
- **auto-fill**: 고정 크기 아이템이 왼쪽 정렬되어야 할 때 (태그 목록, 아이콘 그리드)
:::

---

### minmax() 활용법

```css
/* 기본 사용 */
grid-template-columns: repeat(3, minmax(0, 1fr));
/* 0이 최솟값: Flexbox의 min-content 기본값 문제 해결 */

/* 반응형 컬럼 */
grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
/* min() 사용: 컨테이너가 300px보다 작으면 100% */

/* 고정 사이드바 + 유동 본문 */
grid-template-columns: minmax(200px, 280px) 1fr;

/* 최대 4열, 최소 1열 */
grid-template-columns: repeat(auto-fit, minmax(max(200px, 25% - 18px), 1fr));
```

---

## <i class="fas fa-cube"></i> Container Queries (2023+)

미디어쿼리는 **뷰포트** 기준, 컨테이너쿼리는 **부모 요소** 기준입니다.

<div class="cq-compare">
<div class="cq-box">
<div class="cq-title"><i class="fas fa-expand"></i> 컨테이너가 넓을 때</div>
<div class="cq-container-wide">
<div class="cq-card cq-card-h">카드 A</div>
<div class="cq-card cq-card-h">카드 B</div>
</div>
<div class="cq-label">→ 2열 가로 레이아웃</div>
</div>
<div class="cq-box">
<div class="cq-title"><i class="fas fa-compress"></i> 컨테이너가 좁을 때</div>
<div class="cq-container-narrow">
<div class="cq-card cq-card-v">카드 A</div>
<div class="cq-card cq-card-v">카드 B</div>
</div>
<div class="cq-label">→ 세로 쌓기</div>
</div>
</div>

```css
/* 1단계: 컨테이너 정의 */
.card-wrapper {
  container-type: inline-size;             /* 너비 기준 */
  container-name: card-container;         /* 선택적 이름 */
}

/* 2단계: 컨테이너 기준으로 스타일 */
@container card-container (min-width: 400px) {
  .card-inner {
    display: grid;
    grid-template-columns: 120px 1fr;    /* 넓으면 가로 */
  }

  .card-image { border-radius: 8px 0 0 8px; }
}

@container card-container (max-width: 399px) {
  .card-inner {
    flex-direction: column;              /* 좁으면 세로 */
  }
}

/* 실전: 사이드바와 메인의 같은 컴포넌트가 다르게 보임 */
.sidebar .product-card,
.main .product-card {
  /* HTML/CSS 동일! 컨테이너 크기만 달라도 자동 대응 */
}
```

:::tip
<i class="fas fa-lightbulb"></i> **미디어쿼리 vs 컨테이너쿼리**

- **미디어쿼리**: 레이아웃 전체 구조 변경에 적합 (헤더, 그리드 열 수)
- **컨테이너쿼리**: 재사용 컴포넌트 내부 스타일에 적합 (카드, 위젯)

컨테이너쿼리는 Chrome 105+, Safari 16+, Firefox 110+ 지원.
:::

---

## <i class="fas fa-tachometer-alt"></i> 성능 최적화

<div class="perf-cards">
<div class="perf-card green">
<div class="perf-metric">LCP</div>
<div class="perf-name">Largest Contentful Paint</div>
<div class="perf-desc">가장 큰 콘텐츠가 렌더링되는 시간. 2.5초 이하 목표. Hero 이미지 최적화가 핵심.</div>
</div>
<div class="perf-card blue">
<div class="perf-metric">CLS</div>
<div class="perf-name">Cumulative Layout Shift</div>
<div class="perf-desc">레이아웃이 예기치 않게 이동하는 정도. 0.1 이하 목표. 이미지/광고 크기 명시 필요.</div>
</div>
<div class="perf-card purple">
<div class="perf-metric">INP</div>
<div class="perf-name">Interaction to Next Paint</div>
<div class="perf-desc">사용자 입력에 반응하는 시간. 200ms 이하 목표. JS 최소화, 이벤트 최적화.</div>
</div>
</div>

```html
<!-- ✅ CLS 방지: width/height 속성 명시 -->
<img src="hero.jpg" alt="" width="1200" height="630" loading="lazy">

<!-- ✅ aspect-ratio로 빈 공간 예약 -->
<style>
  .banner { aspect-ratio: 16/9; background: #f3f4f6; }
</style>
<div class="banner">
  <img src="banner.jpg" style="width:100%;height:100%;object-fit:cover;">
</div>

<!-- ✅ 폰트 로딩 최적화 -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preload" href="font.woff2" as="font" crossorigin>

<style>
  @font-face {
    font-display: swap;    /* FOUT 허용 (FOIT 방지) */
  }
</style>

<!-- ✅ 중요한 CSS 인라인 처리 -->
<style>
  /* 첫 화면에 필요한 최소한의 CSS만 인라인 */
  body { margin: 0; font-family: system-ui, sans-serif; }
  .hero { /* ... */ }
</style>

<!-- 나머지 CSS는 비동기 로드 -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

---

## <i class="fas fa-bug"></i> 흔한 반응형 버그 & 해결

<div class="bug-cards">
<div class="bug-card">
<div class="bug-card-title"><i class="fas fa-arrows-alt-h"></i> 가로 스크롤 발생</div>
<div class="bug-card-body">
어딘가에 min-width나 width가 뷰포트보다 크게 설정된 경우.
<div class="bug-fix">
overflow-x: hidden을 body에 추가하거나, Chrome DevTools에서 가로 스크롤 원인 요소를 찾아 수정.
</div>
</div>
</div>
<div class="bug-card">
<div class="bug-card-title"><i class="fas fa-expand"></i> 100vw가 스크롤바 포함</div>
<div class="bug-card-body">
width: 100vw는 세로 스크롤바 너비까지 포함해서 가로 스크롤 발생.
<div class="bug-fix">
width: 100% 사용 (부모 기준) 또는 width: 100vw; overflow-x: hidden 조합.
</div>
</div>
</div>
<div class="bug-card">
<div class="bug-card-title"><i class="fas fa-arrows-alt-v"></i> Flex 아이템 줄어들지 않음</div>
<div class="bug-card-body">
Flexbox 아이템이 min-width: auto 기본값 때문에 내용 크기 이하로 줄어들지 않음.
<div class="bug-fix">
flex 아이템에 min-width: 0 또는 overflow: hidden 추가.
</div>
</div>
</div>
<div class="bug-card">
<div class="bug-card-title"><i class="fas fa-mobile-alt"></i> 모바일에서 폰트 자동 확대</div>
<div class="bug-card-body">
iOS Safari가 특정 상황에서 폰트를 자동 확대함.
<div class="bug-fix">
-webkit-text-size-adjust: 100%를 html에 추가.
</div>
</div>
</div>
<div class="bug-card">
<div class="bug-card-title"><i class="fas fa-image"></i> 이미지 컨테이너 넘침</div>
<div class="bug-card-body">
width: 100%를 설정해도 이미지가 부모 바깥으로 삐져나옴.
<div class="bug-fix">
img에 display: block과 max-width: 100%를 함께 사용.
</div>
</div>
</div>
<div class="bug-card">
<div class="bug-card-title"><i class="fas fa-window-maximize"></i> iOS 주소창 100vh 문제</div>
<div class="bug-card-body">
iOS Safari에서 100vh가 주소창을 포함한 높이라 컨텐츠가 잘림.
<div class="bug-fix">
min-height: 100svh (Small Viewport Height) 사용. CSS 변수로 --vh 직접 계산도 가능.
</div>
</div>
</div>
</div>

```css
/* 반응형 버그 수정 모음 */

/* 1. 가로 스크롤 방지 */
html, body {
  overflow-x: hidden;
  max-width: 100%;
}

/* 2. Flex 아이템 축소 허용 */
.flex-item {
  min-width: 0;                           /* 또는 overflow: hidden */
}

/* 3. iOS 폰트 자동 확대 방지 */
html {
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

/* 4. 이미지 기본 설정 */
img, video, iframe, svg {
  max-width: 100%;
  height: auto;
  display: block;
}

/* 5. iOS 100vh 대응 */
.full-screen {
  min-height: 100svh;                     /* 최신 방법 */
}

/* 6. 터치 스크롤 개선 */
.scrollable {
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

/* 7. 버튼/링크 터치 영역 확보 */
.btn, nav a {
  min-height: 44px;
  min-width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* 8. 폰 노치(Notch) 대응 */
body {
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  padding-bottom: env(safe-area-inset-bottom);
}
```

---

## <i class="fas fa-tools"></i> DevTools로 반응형 테스트

### Chrome DevTools 사용법

```
F12 (또는 Ctrl+Shift+I) → 반응형 모드 열기: Ctrl+Shift+M (Mac: Cmd+Shift+M)
```

| 기능 | 단축키 / 방법 |
|------|--------------|
| 반응형 모드 토글 | `Ctrl+Shift+M` |
| 기기 선택 | 상단 드롭다운에서 iPhone, iPad 등 선택 |
| 커스텀 크기 | 너비/높이 직접 입력 |
| DPR 변경 | Device Pixel Ratio 드롭다운 |
| 미디어쿼리 시각화 | 상단의 점선 바 확인 |
| 네트워크 제한 | Network 탭 → Throttling → Slow 3G |

### 반응형 CSS 디버깅 방법

```javascript
// 현재 활성 미디어쿼리 확인
window.matchMedia('(min-width: 768px)').matches   // true/false

// 브레이크포인트 감지
const breakpoints = {
  mobile:  window.matchMedia('(max-width: 767px)'),
  tablet:  window.matchMedia('(min-width: 768px) and (max-width: 1023px)'),
  desktop: window.matchMedia('(min-width: 1024px)'),
};

Object.entries(breakpoints).forEach(([name, mq]) => {
  if (mq.matches) console.log(`현재: ${name}`);
});

// 뷰포트 크기 실시간 표시 (개발용)
const indicator = document.createElement('div');
indicator.style.cssText = `
  position: fixed; bottom: 20px; right: 20px;
  background: rgba(0,0,0,0.7); color: white;
  padding: 6px 12px; border-radius: 6px; font-size: 13px;
  font-family: monospace; z-index: 9999;
`;
document.body.appendChild(indicator);

function updateSize() {
  indicator.textContent = `${window.innerWidth} × ${window.innerHeight}`;
}
window.addEventListener('resize', updateSize);
updateSize();
```

### CSS 디버깅 팁

```css
/* 모든 요소에 외곽선 표시 (레이아웃 파악용) */
* { outline: 1px solid rgba(255, 0, 0, 0.3) !important; }

/* 오버플로우 원인 찾기 */
* {
  max-width: 100% !important;
  box-sizing: border-box !important;
}

/* 특정 브레이크포인트 시각적 표시 */
body::after {
  content: "모바일";
  position: fixed; bottom: 0; left: 0;
  padding: 4px 8px; font-size: 12px;
  background: #10b981; color: white;
}

@media (min-width: 768px) {
  body::after { content: "태블릿"; background: #0071e3; }
}

@media (min-width: 1024px) {
  body::after { content: "데스크톱"; background: #8b5cf6; }
}
```

---

## <i class="fas fa-brain"></i> 핵심 정리

### 체크리스트

| 항목 | 확인 |
|------|------|
| `<meta name="viewport">` 추가 | 필수 |
| 이미지에 `max-width: 100%` | 필수 |
| 이미지에 `width`/`height` 속성 | CLS 방지 |
| Mobile First (`min-width`) 사용 | 권장 |
| 폰트에 `clamp()` 사용 | 권장 |
| 터치 영역 44px 이상 | 필수 |
| `100svh` 사용 (iOS 대응) | 권장 |
| `env(safe-area-inset-*)` | 노치 폰 대응 |
| DevTools로 여러 기기 테스트 | 필수 |

### 브레이크포인트 기준:
- 모바일: ~ 767px
- 태블릿: 768px ~ 1023px
- 데스크톱: 1024px ~
- 와이드: 1440px ~

### 핵심 패턴 레퍼런스:

```css
/* Container 기본 */
.container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 clamp(16px,4vw,48px); }

/* 자동 반응형 그리드 */
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(280px,100%), 1fr)); gap: 24px; }

/* 반응형 폰트 */
.title { font-size: clamp(1.5rem, 4vw, 3rem); }

/* 이미지 */
img { max-width: 100%; height: auto; display: block; }

/* 풀스크린 */
.hero { min-height: 100svh; }

/* 터치 버튼 */
.btn { min-height: 44px; padding: 12px 24px; }
```

:::tip
<i class="fas fa-tools"></i> **개발 도구 활용**

Chrome DevTools (F12) → `Ctrl+Shift+M`으로 반응형 모드 진입.
iPhone SE(375px), iPad(768px), Desktop(1440px) 세 가지를 반드시 테스트하세요!
:::

---

## <i class="fas fa-arrow-right"></i> 다음 단계

- **[Flexbox](../css/flexbox)** - 유연한 1차원 레이아웃
- **[Grid](../css/grid)** - 강력한 2차원 레이아웃
- **[CSS 변수](../advanced/variables)** - 테마 관리로 다크모드 대응
- **[Transform](../advanced/transform)** - 애니메이션과 변형
