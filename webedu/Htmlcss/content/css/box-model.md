# <i class="fas fa-box"></i> CSS 박스 모델 (Box Model)

:::info
<i class="fas fa-info-circle"></i> **박스 모델이란?**

모든 HTML 요소는 **박스(Box)** 형태로 렌더링됩니다.
박스 모델은 이 박스의 크기와 간격을 계산하는 핵심 원리입니다.
CSS 레이아웃의 **가장 기본이 되는 개념**입니다.
:::

---

## <i class="fas fa-layer-group"></i> 박스 모델의 구성

모든 박스는 4개의 영역으로 구성됩니다:

```
┌─────────────────────────────────────┐
│         Margin (외부 여백)           │
│  ┌───────────────────────────────┐  │
│  │    Border (테두리)             │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │   Padding (내부 여백)    │  │  │
│  │  │  ┌───────────────────┐  │  │  │
│  │  │  │   Content (내용)   │  │  │  │
│  │  │  │                   │  │  │  │
│  │  │  └───────────────────┘  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### <i class="fas fa-square"></i> 1. Content (내용)

- 실제 콘텐츠가 표시되는 영역
- 텍스트, 이미지 등이 들어가는 공간
- `width`, `height`로 크기 지정

```css
.box {
  width: 300px;
  height: 200px;
}
```

---

### <i class="fas fa-compress-arrows-alt"></i> 2. Padding (내부 여백)

- 콘텐츠와 테두리 사이의 안쪽 여백
- 배경색이 적용되는 영역
- 요소 내부 간격 조절

```css
.box {
  padding: 20px;                    /* 상하좌우 모두 20px */
  padding: 10px 20px;               /* 상하 10px, 좌우 20px */
  padding: 10px 20px 30px;          /* 상 10px, 좌우 20px, 하 30px */
  padding: 10px 20px 30px 40px;     /* 상 우 하 좌 (시계방향) */
}

/* 개별 지정 */
.box {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
}
```

:::tip
<i class="fas fa-clock"></i> **시계방향 순서 기억법**

`padding: 10px 20px 30px 40px;`

**12시부터 시계방향**: 상(12시) → 우(3시) → 하(6시) → 좌(9시)
:::

---

### <i class="fas fa-border-style"></i> 3. Border (테두리)

- 요소의 경계선
- 두께, 스타일, 색상 지정 가능

```css
.box {
  border: 2px solid #0071e3;        /* 두께 스타일 색상 */
}

/* 개별 속성 */
.box {
  border-width: 2px;
  border-style: solid;               /* solid, dashed, dotted, double */
  border-color: #0071e3;
}

/* 각 면 개별 지정 */
.box {
  border-top: 1px solid red;
  border-right: 2px dashed blue;
  border-bottom: 3px dotted green;
  border-left: 4px double orange;
}
```

**테두리 스타일:**

```css
.solid { border-style: solid; }     /* ━━━━━ 실선 */
.dashed { border-style: dashed; }   /* ┄┄┄┄┄ 점선 */
.dotted { border-style: dotted; }   /* ····· 점 */
.double { border-style: double; }   /* ══════ 이중선 */
.groove { border-style: groove; }   /* 홈 */
.ridge { border-style: ridge; }     /* 융기 */
.inset { border-style: inset; }     /* 안쪽 */
.outset { border-style: outset; }   /* 바깥쪽 */
```

---

### <i class="fas fa-arrows-alt"></i> 4. Margin (외부 여백)

- 요소와 다른 요소 사이의 바깥 여백
- 배경색이 적용되지 않음
- 요소 간 간격 조절

```css
.box {
  margin: 20px;                     /* 상하좌우 모두 20px */
  margin: 10px 20px;                /* 상하 10px, 좌우 20px */
  margin: 10px 20px 30px 40px;      /* 상 우 하 좌 */
}

/* 개별 지정 */
.box {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  margin-left: 40px;
}
```

**중앙 정렬:**

```css
.container {
  width: 800px;
  margin: 0 auto;  /* 좌우 여백을 자동으로 계산하여 중앙 정렬 */
}
```

---

## <i class="fas fa-calculator"></i> 박스 크기 계산

### <i class="fas fa-expand"></i> 기본 계산 방식 (content-box)

**전체 너비** = width + padding-left + padding-right + border-left + border-right

**전체 높이** = height + padding-top + padding-bottom + border-top + border-bottom

```css
.box {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

**계산:**
- **Content 너비**: 300px
- **Padding**: 20px × 2 = 40px
- **Border**: 5px × 2 = 10px
- **실제 보이는 너비**: 300 + 40 + 10 = **350px**
- **Margin은 제외** (요소 간 간격일 뿐)

:::warning
<i class="fas fa-exclamation-triangle"></i> **주의!**

`width: 300px`로 설정해도 실제 화면에 그려지는 크기는 **350px**입니다!
이것이 전통적인 박스 모델의 가장 큰 문제점입니다.
:::

---

## <i class="fas fa-magic"></i> box-sizing 속성

### <i class="fas fa-question-circle"></i> 문제 상황

```css
.box1 {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  /* 실제 너비: 350px (300 + 40 + 10) */
}

.box2 {
  width: 300px;
  padding: 30px;
  border: 10px solid black;
  /* 실제 너비: 380px (300 + 60 + 20) */
}
```

**같은 width인데 실제 크기가 다릅니다!** 😱

### <i class="fas fa-check-circle"></i> 해결책: box-sizing

```css
* {
  box-sizing: border-box;
}
```

**두 가지 방식:**

| 속성 | 의미 | width에 포함되는 것 |
|------|------|-------------------|
| `content-box` | 기본값 | Content만 |
| `border-box` | 개선된 방식 | Content + Padding + Border |

### <i class="fas fa-box-open"></i> content-box (기본값)

```css
.box {
  box-sizing: content-box;  /* 기본값 */
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}
```

**실제 너비:** 350px = 300(content) + 40(padding) + 10(border)

---

### <i class="fas fa-check-square"></i> border-box (권장!)

```css
.box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}
```

**실제 너비:** 300px (전체)
**Content 너비:** 300 - 40 - 10 = 250px (자동 계산)

:::tip
<i class="fas fa-star"></i> **모든 프로젝트에 필수!**

```css
/* 모든 요소에 적용 */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

이렇게 설정하면:
- `width: 300px` = 실제로 300px
- Padding이나 Border를 추가해도 전체 크기 유지
- 레이아웃 계산이 훨씬 쉬워집니다!
:::

---

## <i class="fas fa-compress"></i> Margin Collapsing (마진 상쇄)

**세로 방향 마진**이 만날 때 **겹쳐지는(상쇄되는)** 현상입니다.

### <i class="fas fa-arrows-alt-v"></i> 기본 현상

```html
<div class="box1">Box 1</div>
<div class="box2">Box 2</div>
```

```css
.box1 {
  margin-bottom: 30px;
}

.box2 {
  margin-top: 20px;
}
```

**예상:** 30px + 20px = 50px 간격?
**실제:** **30px** (더 큰 값으로 상쇄됨)

### <i class="fas fa-list"></i> 마진 상쇄가 발생하는 경우

#### 1. 인접한 형제 요소

```html
<div style="margin-bottom: 40px;">Box 1</div>
<div style="margin-top: 30px;">Box 2</div>
<!-- 실제 간격: 40px (큰 값 적용) -->
```

---

#### 2. 부모-자식 요소 (border/padding 없을 때)

```html
<div class="parent">
  <div class="child">Child</div>
</div>
```

```css
.parent {
  margin-top: 20px;
}

.child {
  margin-top: 30px;
}
```

**결과:** 부모의 margin이 30px로 상쇄됨 (자식의 margin이 부모 밖으로 돌출)

**해결 방법:**

```css
.parent {
  padding-top: 1px;  /* 또는 */
  border-top: 1px solid transparent;
}
```

---

#### 3. 빈 요소

```css
.empty {
  margin-top: 20px;
  margin-bottom: 30px;
  /* 내용이 없으면 자기 자신의 margin끼리도 상쇄 */
  /* 실제로는 30px만 적용됨 */
}
```

### <i class="fas fa-ban"></i> 마진 상쇄가 일어나지 않는 경우

- **좌우(horizontal) 마진** (좌우는 절대 상쇄 안됨!)
- **Flexbox** 내부 아이템
- **Grid** 내부 아이템
- **Float** 요소
- **절대 위치(absolute)** 요소
- **인라인 블록(inline-block)** 요소

:::tip
<i class="fas fa-lightbulb"></i> **마진 상쇄 해결법**

```css
/* 1. Padding 사용 */
.box {
  padding: 20px 0;  /* margin 대신 */
}

/* 2. Border 추가 */
.box {
  border-top: 1px solid transparent;
}

/* 3. Flexbox 사용 (추천!) */
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;  /* 마진 상쇄 없이 간격 조절 */
}
```

:::

---

## <i class="fas fa-ruler-combined"></i> 실전 예제

### <i class="fas fa-square"></i> 카드 컴포넌트

```html
<div class="card">
  <img src="image.jpg" alt="Image">
  <div class="card-content">
    <h3>제목</h3>
    <p>내용입니다.</p>
  </div>
</div>
```

```css
* {
  box-sizing: border-box;
}

.card {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;  /* 이미지 아래 여백 제거 */
}

.card-content {
  padding: 20px;
}

.card-content h3 {
  margin: 0 0 10px 0;
  font-size: 1.2rem;
}

.card-content p {
  margin: 0;
  color: #666;
}
```

**핵심:**
- `box-sizing: border-box` → width가 정확히 300px
- `margin: 0` → 불필요한 마진 제거
- `padding: 20px` → 내부 여백으로 간격 조절

---

### <i class="fas fa-columns"></i> 2단 레이아웃

```html
<div class="container">
  <aside class="sidebar">Sidebar</aside>
  <main class="main-content">Main</main>
</div>
```

```css
* {
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.sidebar {
  width: 300px;
  float: left;
  padding: 20px;
  background: #f5f5f5;
  border: 1px solid #ddd;
}

.main-content {
  width: calc(100% - 320px);  /* 300px + 20px 간격 */
  float: left;
  margin-left: 20px;
  padding: 20px;
  background: white;
  border: 1px solid #ddd;
}

/* 또는 Flexbox 사용 (권장) */
.container {
  display: flex;
  gap: 20px;  /* 간격 */
}

.sidebar {
  width: 300px;
  padding: 20px;
  background: #f5f5f5;
  border: 1px solid #ddd;
}

.main-content {
  flex: 1;  /* 남은 공간 채우기 */
  padding: 20px;
  background: white;
  border: 1px solid #ddd;
}
```

---

### <i class="fas fa-mobile-alt"></i> 버튼 디자인

```css
.btn {
  /* 박스 크기 */
  display: inline-block;
  padding: 12px 24px;

  /* 테두리 */
  border: 2px solid #0071e3;
  border-radius: 6px;

  /* 여백 */
  margin: 10px;

  /* 스타일 */
  background: #0071e3;
  color: white;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;
}

.btn:hover {
  background: #005bb5;
  border-color: #005bb5;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: #0071e3;
}

.btn-outline:hover {
  background: #0071e3;
  color: white;
}
```

---

## <i class="fas fa-percentage"></i> 반응형 박스 모델

### <i class="fas fa-expand-arrows-alt"></i> 백분율 사용

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;  /* 좌우 여백 */
}

.box {
  width: 50%;  /* 부모의 50% */
  padding: 5%;  /* 부모 너비의 5% */
}
```

:::warning
<i class="fas fa-info-circle"></i> **백분율 계산 기준**

- **width, margin, padding**: 부모 요소의 **너비(width)** 기준
- **height**: 부모 요소의 **높이(height)** 기준 (부모에 명시적 높이 필요)
- Padding의 top/bottom도 **부모 너비** 기준! (높이 아님)
:::

---

### <i class="fas fa-mobile"></i> 모바일 대응

```css
* {
  box-sizing: border-box;
}

.card {
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
}

/* 태블릿 */
@media (min-width: 768px) {
  .card {
    width: calc(50% - 10px);  /* 2열 */
    float: left;
    margin-right: 20px;
  }

  .card:nth-child(2n) {
    margin-right: 0;
  }
}

/* 데스크톱 */
@media (min-width: 1024px) {
  .card {
    width: calc(33.333% - 14px);  /* 3열 */
  }

  .card:nth-child(2n) {
    margin-right: 20px;
  }

  .card:nth-child(3n) {
    margin-right: 0;
  }
}

/* 또는 Grid 사용 (훨씬 간단!) */
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.card {
  padding: 20px;
  border: 1px solid #ddd;
}
```

---

## <i class="fas fa-tools"></i> 유용한 테크닉

### <i class="fas fa-compress-alt"></i> 1. 음수 Margin

```css
.overlap {
  margin-top: -20px;  /* 위로 20px 겹치기 */
}

.card img {
  margin-bottom: -5px;  /* 이미지 하단 여백 제거 */
}
```

**활용 예:**

```css
/* 이미지 카드에서 텍스트 올리기 */
.card {
  position: relative;
}

.card-text {
  position: relative;
  margin-top: -50px;
  background: white;
  padding: 20px;
  border-radius: 8px;
}
```

---

### <i class="fas fa-equals"></i> 2. Padding과 배경색

```css
.highlight {
  background: yellow;
  padding: 5px 10px;  /* 배경색이 padding 영역까지 적용 */
}

/* 줄바꿈되는 텍스트에서 깔끔한 효과 */
.tag {
  display: inline;
  background: #0071e3;
  color: white;
  padding: 2px 8px;
  border-radius: 3px;
  box-decoration-break: clone;  /* 줄바꿈 시에도 padding 유지 */
}
```

---

### <i class="fas fa-ruler-horizontal"></i> 3. calc() 활용

```css
.box {
  width: calc(100% - 40px);  /* 전체 너비에서 40px 제외 */
  padding: 20px;
}

.grid-item {
  width: calc(33.333% - 20px);  /* 3열 그리드에서 간격 고려 */
  margin-right: 30px;
}

.sidebar {
  width: 300px;
}

.main {
  width: calc(100% - 320px);  /* 사이드바 너비 + 간격 */
}
```

---

### <i class="fas fa-arrows-alt-h"></i> 4. 간격 통일

```css
/* CSS 변수 사용 */
:root {
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
}

.card {
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}

.button {
  padding: var(--spacing-sm) var(--spacing-md);
}
```

---

## <i class="fas fa-bug"></i> 흔한 문제와 해결

### <i class="fas fa-question"></i> 1. 이미지 아래 여백

**문제:**
```html
<div class="box">
  <img src="image.jpg">
</div>
```

```css
.box {
  border: 1px solid red;
}
/* 이미지 아래에 의문의 여백 발생! */
```

**원인:** 이미지가 inline 요소라 baseline 아래 공간이 생김

**해결:**
```css
img {
  display: block;  /* 해결 1 */
  /* 또는 */
  vertical-align: bottom;  /* 해결 2 */
}
```

---

### <i class="fas fa-question"></i> 2. 요소가 튀어나감

**문제:**
```css
.parent {
  width: 300px;
}

.child {
  width: 100%;
  padding: 20px;
  border: 5px solid black;
  /* 350px이 되어 부모 밖으로 튀어나감! */
}
```

**해결:**
```css
* {
  box-sizing: border-box;
}
```

---

### <i class="fas fa-question"></i> 3. Margin이 먹히지 않음

**문제:**
```css
.inline-element {
  display: inline;
  margin-top: 20px;  /* 적용 안됨! */
  margin-bottom: 20px;  /* 적용 안됨! */
}
```

**원인:** inline 요소는 상하 margin이 적용되지 않음

**해결:**
```css
.inline-element {
  display: inline-block;  /* 또는 block */
  margin-top: 20px;
  margin-bottom: 20px;
}
```

---

### <i class="fas fa-question"></i> 4. 100% 높이가 안됨

**문제:**
```css
.box {
  height: 100%;  /* 적용 안됨! */
}
```

**원인:** 부모에 명시적 높이가 없음

**해결:**
```css
html, body {
  height: 100%;
}

.parent {
  height: 100%;
}

.box {
  height: 100%;  /* 이제 작동 */
}

/* 또는 viewport 단위 사용 */
.box {
  height: 100vh;  /* viewport height */
}
```

---

## <i class="fas fa-check-circle"></i> 실전 완성 예제

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>박스 모델 실전</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, sans-serif;
      background: #f5f5f5;
      padding: 40px 20px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 24px;
      margin-bottom: 40px;
    }

    .card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .card-image {
      width: 100%;
      height: 180px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 48px;
    }

    .card-content {
      padding: 20px;
    }

    .card-title {
      margin: 0 0 12px 0;
      font-size: 1.25rem;
      color: #333;
    }

    .card-text {
      margin: 0 0 16px 0;
      color: #666;
      line-height: 1.6;
    }

    .card-footer {
      padding: 16px 20px;
      border-top: 1px solid #eee;
      background: #fafafa;
    }

    .btn {
      display: inline-block;
      padding: 10px 20px;
      background: #0071e3;
      color: white;
      border: 2px solid #0071e3;
      border-radius: 6px;
      text-decoration: none;
      transition: all 0.3s;
    }

    .btn:hover {
      background: #005bb5;
      border-color: #005bb5;
      transform: translateY(-2px);
    }

    /* 박스 모델 시각화 */
    .box-demo {
      margin: 40px auto;
      padding: 30px;
      max-width: 600px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
    }

    .demo-box {
      margin: 40px;
      padding: 30px;
      border: 5px solid #0071e3;
      background: #e3f2fd;
      text-align: center;
      font-weight: bold;
      color: #0071e3;
    }

    .demo-info {
      margin-top: 20px;
      padding: 16px;
      background: #f5f5f5;
      border-radius: 8px;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      line-height: 1.8;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 style="text-align: center; margin-bottom: 40px; color: #333;">
      📦 박스 모델 실전 예제
    </h1>

    <!-- 카드 그리드 -->
    <div class="card-grid">
      <div class="card">
        <div class="card-image">📦</div>
        <div class="card-content">
          <h3 class="card-title">Content (내용)</h3>
          <p class="card-text">실제 콘텐츠가 표시되는 영역입니다. width와 height로 크기를 지정합니다.</p>
        </div>
        <div class="card-footer">
          <a href="#" class="btn">자세히 보기</a>
        </div>
      </div>

      <div class="card">
        <div class="card-image">🎨</div>
        <div class="card-content">
          <h3 class="card-title">Padding (내부 여백)</h3>
          <p class="card-text">콘텐츠와 테두리 사이의 안쪽 여백입니다. 배경색이 적용됩니다.</p>
        </div>
        <div class="card-footer">
          <a href="#" class="btn">자세히 보기</a>
        </div>
      </div>

      <div class="card">
        <div class="card-image">🔲</div>
        <div class="card-content">
          <h3 class="card-title">Border (테두리)</h3>
          <p class="card-text">요소의 경계선입니다. 두께, 스타일, 색상을 지정할 수 있습니다.</p>
        </div>
        <div class="card-footer">
          <a href="#" class="btn">자세히 보기</a>
        </div>
      </div>

      <div class="card">
        <div class="card-image">↔️</div>
        <div class="card-content">
          <h3 class="card-title">Margin (외부 여백)</h3>
          <p class="card-text">요소와 다른 요소 사이의 바깥 여백입니다. 배경색이 적용되지 않습니다.</p>
        </div>
        <div class="card-footer">
          <a href="#" class="btn">자세히 보기</a>
        </div>
      </div>
    </div>

    <!-- 박스 모델 시각화 -->
    <div class="box-demo">
      <h2 style="text-align: center; margin-bottom: 20px;">박스 모델 시각화</h2>

      <div class="demo-box">
        CONTENT
      </div>

      <div class="demo-info">
        <strong>📐 크기 계산:</strong><br>
        • Content: 내부 텍스트 영역<br>
        • Padding: 30px (상하좌우)<br>
        • Border: 5px solid (상하좌우)<br>
        • Margin: 40px (상하좌우)<br>
        <br>
        <strong>✅ box-sizing: border-box 적용됨</strong><br>
        → 전체 크기가 일정하게 유지됩니다!
      </div>
    </div>
  </div>
</body>
</html>
```

---

## <i class="fas fa-brain"></i> 핵심 정리

### <i class="fas fa-check-double"></i> 필수 개념

1. **박스 구성**: Content → Padding → Border → Margin
2. **box-sizing: border-box** 모든 프로젝트에 필수
3. **마진 상쇄**: 세로 방향 마진끼리 겹침
4. **계산**: width = 전체 너비 (border-box 기준)

### <i class="fas fa-star"></i> 모든 프로젝트 시작 시

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

### <i class="fas fa-lightbulb"></i> 실무 팁

- **간격 조절**: Margin (요소 간) vs Padding (요소 내부)
- **중앙 정렬**: `margin: 0 auto;`
- **음수 마진**: 요소 겹치기 가능
- **calc()**: 복잡한 크기 계산

### <i class="fas fa-exclamation-triangle"></i> 주의사항

- inline 요소는 상하 margin 적용 안됨
- 백분율 padding/margin은 부모 **너비** 기준
- 마진 상쇄는 세로 방향만
- 이미지 아래 여백은 `display: block`으로 해결

---

## <i class="fas fa-arrow-right"></i> 다음 단계

박스 모델을 이해했다면 다음 주제로 넘어가세요:

- **[Flexbox](flexbox)** - 1차원 레이아웃
- **[Grid](grid)** - 2차원 레이아웃
- **[Position](../layout/position)** - 요소 배치
- **[Display](display)** - 요소 표시 방식
