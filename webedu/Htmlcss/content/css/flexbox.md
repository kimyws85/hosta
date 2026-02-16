# <i class="fas fa-arrows-alt-h"></i> CSS Flexbox

:::info
<i class="fas fa-info-circle"></i> **Flexbox란?**

**Flexible Box Layout**의 약자로, **1차원 레이아웃**(한 방향)을 쉽게 만드는 CSS 모듈입니다.
복잡한 float나 position 없이, 요소를 정렬하고 공간을 분배할 수 있습니다.

**왜 Flexbox를 쓸까요?**
- <i class="fas fa-bullseye"></i> **간단한 중앙 정렬**: 세로/가로 중앙 정렬이 한 줄로 가능
- <i class="fas fa-mobile-alt"></i> **반응형**: 화면 크기에 따라 자동 조절
- <i class="fas fa-random"></i> **순서 변경**: HTML 수정 없이 순서 변경
- <i class="fas fa-ruler-horizontal"></i> **공간 분배**: 남은 공간을 자동으로 채움
:::

---

## <i class="fas fa-sitemap"></i> Flexbox 개념 이해

### <i class="fas fa-layer-group"></i> 기본 구조

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

```css
.container {
  display: flex;  /* Flexbox 활성화! */
}
```

**결과**: 자식 요소들이 가로로 나열됩니다.

---

### <i class="fas fa-book"></i> 핵심 용어

```
┌─────────────────────────────────────────────┐
│          Flex Container (부모)              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐     │
│  │ Item 1  │  │ Item 2  │  │ Item 3  │ ← Flex Items (자식)
│  └─────────┘  └─────────┘  └─────────┘     │
│  ←────────────────────────────────────→     │
│          Main Axis (주축)                   │
└─────────────────────────────────────────────┘
        ↑
   Cross Axis
    (교차축)
```

1. **Flex Container** - `display: flex`가 적용된 부모 요소
2. **Flex Items** - Container의 직계 자식 요소들
3. **Main Axis (주축)** - 아이템이 배치되는 방향 (기본: 가로 →)
4. **Cross Axis (교차축)** - 주축에 수직인 방향 (기본: 세로 ↓)

:::tip
<i class="fas fa-lightbulb"></i> **핵심 포인트**

- `justify-content` → **주축** 방향 정렬
- `align-items` → **교차축** 방향 정렬
- `flex-direction`으로 주축 방향 변경 가능
:::

---

## <i class="fas fa-compass"></i> 주축 방향 (flex-direction)

주축의 방향을 결정합니다.

```css
.container {
  flex-direction: row;              /* → 가로 (기본) */
  flex-direction: row-reverse;      /* ← 가로 역방향 */
  flex-direction: column;           /* ↓ 세로 */
  flex-direction: column-reverse;   /* ↑ 세로 역방향 */
}
```

### <i class="fas fa-arrow-right"></i> row (기본값)

```css
.container {
  display: flex;
  flex-direction: row;
}
```

```
┌──────────────────────────────────┐
│ [Item 1] [Item 2] [Item 3]  →   │
└──────────────────────────────────┘
```

---

### <i class="fas fa-arrow-down"></i> column

```css
.container {
  display: flex;
  flex-direction: column;
}
```

```
┌──────────┐
│ [Item 1] │
│    ↓     │
│ [Item 2] │
│    ↓     │
│ [Item 3] │
└──────────┘
```

:::warning
<i class="fas fa-exclamation-triangle"></i> **주의!**

`flex-direction`을 바꾸면 **주축과 교차축이 바뀝니다**!

- `row`: 주축 = 가로, 교차축 = 세로
- `column`: 주축 = 세로, 교차축 = 가로
:::

---

## <i class="fas fa-arrows-alt-h"></i> 주축 정렬 (justify-content)

**주축** 방향으로 아이템을 정렬합니다.

```css
.container {
  display: flex;
  justify-content: flex-start;      /* 시작점 (기본) */
}
```

### <i class="fas fa-th"></i> 모든 값 비교

```css
/* 1. flex-start (기본) */
justify-content: flex-start;
/* [1][2][3]              */

/* 2. flex-end */
justify-content: flex-end;
/*               [1][2][3] */

/* 3. center */
justify-content: center;
/*        [1][2][3]        */

/* 4. space-between */
justify-content: space-between;
/* [1]      [2]      [3]   */

/* 5. space-around */
justify-content: space-around;
/*  [1]    [2]    [3]      */
/* 양쪽 여백 = 사이 간격의 절반 */

/* 6. space-evenly */
justify-content: space-evenly;
/*   [1]    [2]    [3]     */
/* 모든 간격이 동일 */
```

:::tip
<i class="fas fa-code"></i> **실전 활용**

```css
/* 헤더: 로고 왼쪽, 메뉴 오른쪽 */
.header {
  display: flex;
  justify-content: space-between;
}

/* 버튼 그룹 가운데 */
.button-group {
  display: flex;
  justify-content: center;
  gap: 10px;
}
```
:::

---

## <i class="fas fa-arrows-alt-v"></i> 교차축 정렬 (align-items)

**교차축** 방향으로 아이템을 정렬합니다 (한 줄).

```css
.container {
  display: flex;
  align-items: stretch;             /* 늘림 (기본) */
}
```

### <i class="fas fa-th"></i> 모든 값 비교

```
┌────────────────────────┐
│ stretch (기본)          │
│ ┌─────┐┌──────┐┌─────┐ │
│ │  1  ││   2  ││  3  │ │ ← 모두 같은 높이
│ └─────┘└──────┘└─────┘ │
└────────────────────────┘

┌────────────────────────┐
│ flex-start              │
│ ┌─────┐┌──────┐┌─────┐ │
│ │  1  ││   2  ││  3  │ │ ← 위 정렬
│ └─────┘└──────┘└─────┘ │
│                        │
└────────────────────────┘

┌────────────────────────┐
│                        │
│ ┌─────┐┌──────┐┌─────┐ │
│ │  1  ││   2  ││  3  │ │ ← 가운데 정렬
│ └─────┘└──────┘└─────┘ │
│ center                 │
└────────────────────────┘

┌────────────────────────┐
│                        │
│ ┌─────┐┌──────┐┌─────┐ │
│ │  1  ││   2  ││  3  │ │ ← 아래 정렬
│ └─────┘└──────┘└─────┘ │
│ flex-end               │
└────────────────────────┘
```

### <i class="fas fa-ruler-horizontal"></i> baseline

텍스트 기준선에 맞춰 정렬

```css
.container {
  display: flex;
  align-items: baseline;
}
```

```
┌────────────────────────┐
│ ┌───┐  ┌─────┐  ┌───┐  │
│ │Big│  │small│  │Big│  │ ← 텍스트 밑줄 맞춤
│ └───┘  └─────┘  └───┘  │
│   ───────────────────   │ ← Baseline
└────────────────────────┘
```

---

## <i class="fas fa-grip-lines"></i> 줄바꿈 (flex-wrap)

아이템이 한 줄에 다 안 들어갈 때 어떻게 할지 결정합니다.

```css
.container {
  display: flex;
  flex-wrap: nowrap;                /* 한 줄 (기본, 줄어듦) */
  flex-wrap: wrap;                  /* 여러 줄로 */
  flex-wrap: wrap-reverse;          /* 여러 줄 역방향 */
}
```

### <i class="fas fa-ban"></i> nowrap (기본)

```
┌──────────────────────────┐
│[1][2][3][4][5][6][7][8]  │ ← 한 줄에 다 우겨넣음 (줄어듦)
└──────────────────────────┘
```

### <i class="fas fa-check"></i> wrap

```
┌──────────────────────────┐
│[1][2][3][4][5]           │
│[6][7][8]                 │ ← 자동 줄바꿈
└──────────────────────────┘
```

---

## <i class="fas fa-layer-group"></i> 여러 줄 정렬 (align-content)

`flex-wrap: wrap`으로 여러 줄일 때, **줄들**을 교차축 방향으로 정렬합니다.

```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
```

:::warning
<i class="fas fa-exclamation-triangle"></i> **주의!**

`align-content`는 **여러 줄일 때만** 작동합니다.
한 줄이면 `align-items`를 사용하세요!
:::

```css
/* flex-start */
align-content: flex-start;
/* ┌──────────────┐
   │ [1][2][3]    │
   │ [4][5]       │
   │              │
   │              │
   └──────────────┘ */

/* center */
align-content: center;
/* ┌──────────────┐
   │              │
   │ [1][2][3]    │
   │ [4][5]       │
   │              │
   └──────────────┘ */

/* space-between */
align-content: space-between;
/* ┌──────────────┐
   │ [1][2][3]    │
   │              │
   │ [4][5]       │
   └──────────────┘ */
```

---

## <i class="fas fa-ruler"></i> 간격 (gap)

아이템 사이 간격을 설정합니다. (최신 기능, IE 미지원)

```css
.container {
  display: flex;
  gap: 20px;                        /* 행+열 모두 20px */
  row-gap: 10px;                    /* 행 간격 */
  column-gap: 20px;                 /* 열 간격 */
}
```

:::tip
<i class="fas fa-lightbulb"></i> **gap vs margin**

```css
/* ❌ margin 사용 (불편) */
.item {
  margin-right: 20px;
}
.item:last-child {
  margin-right: 0;  /* 마지막 제거 필요 */
}

/* ✅ gap 사용 (간편) */
.container {
  display: flex;
  gap: 20px;  /* 자동으로 사이 간격만 */
}
```
:::

---

## <i class="fas fa-cube"></i> Item 속성

### <i class="fas fa-expand-arrows-alt"></i> flex-grow (늘어나기)

**남은 공간**을 얼마나 차지할지 비율을 정합니다.

```css
.item {
  flex-grow: 0;                     /* 늘어나지 않음 (기본) */
  flex-grow: 1;                     /* 남은 공간 채우기 */
}
```

**예제:**

```html
<div class="container">
  <div class="item" style="flex-grow: 1;">1</div>
  <div class="item" style="flex-grow: 2;">2</div>
  <div class="item" style="flex-grow: 1;">1</div>
</div>
```

```
┌─────────────────────────────────┐
│ [   1   ][      2      ][   1   ]│
│   1:2:1 비율로 공간 분배         │
└─────────────────────────────────┘
```

:::tip
<i class="fas fa-calculator"></i> **계산 방법**

1. 전체 비율 합: 1 + 2 + 1 = 4
2. Item 1: 남은 공간의 1/4
3. Item 2: 남은 공간의 2/4 (절반)
4. Item 3: 남은 공간의 1/4
:::

---

### <i class="fas fa-compress-arrows-alt"></i> flex-shrink (줄어들기)

공간이 부족할 때 얼마나 줄어들지 비율을 정합니다.

```css
.item {
  flex-shrink: 1;                   /* 줄어듦 (기본) */
  flex-shrink: 0;                   /* 줄어들지 않음 */
}
```

**예제:**

```html
<div class="container" style="width: 400px;">
  <div class="item" style="width: 200px; flex-shrink: 1;">Shrink 1</div>
  <div class="item" style="width: 200px; flex-shrink: 2;">Shrink 2</div>
  <div class="item" style="width: 200px; flex-shrink: 0;">No Shrink</div>
</div>
```

**결과**: 공간 부족 시, "Shrink 2"가 "Shrink 1"보다 2배 더 줄어듦. "No Shrink"는 200px 유지.

---

### <i class="fas fa-ruler-horizontal"></i> flex-basis (기본 크기)

늘어나거나 줄어들기 **전** 기본 크기를 설정합니다.

```css
.item {
  flex-basis: auto;                 /* 콘텐츠 크기 (기본) */
  flex-basis: 200px;                /* 200px */
  flex-basis: 50%;                  /* 50% */
  flex-basis: 0;                    /* 0 (grow로만 결정) */
}
```

**width vs flex-basis:**

```css
/* width */
.item {
  width: 200px;  /* 고정 크기 */
}

/* flex-basis */
.item {
  flex-basis: 200px;  /* 기본 크기 (grow/shrink 가능) */
}
```

:::tip
<i class="fas fa-lightbulb"></i> **언제 뭘 쓸까?**

- **width**: Flexbox 아닐 때
- **flex-basis**: Flexbox일 때 (더 유연함)
:::

---

### <i class="fas fa-magic"></i> flex (단축 속성)

`flex-grow`, `flex-shrink`, `flex-basis`를 한 번에!

```css
.item {
  flex: 1;                          /* 1 1 0% */
  flex: 0 0 200px;                  /* grow shrink basis */
  flex: auto;                       /* 1 1 auto */
  flex: none;                       /* 0 0 auto */
}
```

### <i class="fas fa-list"></i> 자주 쓰는 패턴

```css
/* 1. 균등 분할 */
.item {
  flex: 1;  /* 모두 같은 크기 */
}

/* 2. 고정 크기 */
.sidebar {
  flex: 0 0 250px;  /* 250px 고정 */
}

.main {
  flex: 1;  /* 나머지 공간 */
}

/* 3. 콘텐츠 크기 */
.item {
  flex: 0 0 auto;  /* 내용만큼 */
}

/* 4. 최소 크기 보장 */
.item {
  flex: 1 1 200px;  /* 최소 200px */
}
```

---

### <i class="fas fa-user"></i> align-self (개별 정렬)

특정 아이템만 따로 정렬합니다.

```css
.item {
  align-self: auto;                 /* 부모 따름 (기본) */
  align-self: flex-start;
  align-self: flex-end;
  align-self: center;
  align-self: stretch;
}
```

**예제:**

```html
<div class="container" style="display: flex; height: 200px;">
  <div class="item">Normal</div>
  <div class="item" style="align-self: flex-start;">Top</div>
  <div class="item" style="align-self: center;">Middle</div>
  <div class="item" style="align-self: flex-end;">Bottom</div>
</div>
```

---

### <i class="fas fa-sort-amount-down"></i> order (순서 변경)

HTML 순서와 다르게 표시 순서를 변경합니다.

```css
.item {
  order: 0;                         /* 기본 */
}
```

**예제:**

```html
<div class="container">
  <div class="item" style="order: 2;">A (2nd)</div>
  <div class="item" style="order: 1;">B (1st)</div>
  <div class="item" style="order: 3;">C (3rd)</div>
</div>
```

**결과**: B → A → C 순서로 표시

:::tip
<i class="fas fa-mobile"></i> **반응형 활용**

```css
/* 모바일: 메뉴를 헤더 아래로 */
@media (max-width: 767px) {
  .header {
    display: flex;
    flex-direction: column;
  }

  .logo { order: 1; }
  .menu { order: 3; }
  .search { order: 2; }
}
```
:::

---

## <i class="fas fa-rocket"></i> 실전 예제

### <i class="fas fa-bars"></i> 1. 헤더 (로고 + 메뉴)

```html
<header class="header">
  <div class="logo">Logo</div>
  <nav class="nav">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
</header>
```

```css
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav {
  display: flex;
  gap: 30px;
}

.nav a {
  text-decoration: none;
  color: #333;
}
```

---

### <i class="fas fa-align-center"></i> 2. 완벽한 중앙 정렬

```html
<div class="center">
  <div class="card">
    <h2>로그인</h2>
    <p>환영합니다!</p>
  </div>
</div>
```

```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card {
  padding: 40px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}
```

---

### <i class="fas fa-th"></i> 3. 반응형 카드 그리드

```html
<div class="card-grid">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
</div>
```

```css
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 40px;
}

.card {
  flex: 1 1 280px;                  /* 최소 280px */
  padding: 24px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
```

---

### <i class="fas fa-columns"></i> 4. 사이드바 레이아웃

```html
<div class="app">
  <aside class="sidebar">
    <h3>Menu</h3>
    <nav>
      <a href="#">Dashboard</a>
      <a href="#">Users</a>
      <a href="#">Settings</a>
    </nav>
  </aside>
  <main class="main">
    <h1>Content</h1>
    <p>Main content area...</p>
  </main>
</div>
```

```css
.app {
  display: flex;
  gap: 20px;
  min-height: 100vh;
}

.sidebar {
  flex: 0 0 250px;                  /* 250px 고정 */
  padding: 20px;
  background: #2c3e50;
  color: white;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.sidebar a {
  padding: 10px;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.3s;
}

.sidebar a:hover {
  background: rgba(255, 255, 255, 0.1);
}

.main {
  flex: 1;                          /* 나머지 공간 */
  padding: 40px;
}
```

---

### <i class="fas fa-shoe-prints"></i> 5. 푸터 (여러 컬럼)

```html
<footer class="footer">
  <div class="footer-section">
    <h4>Company</h4>
    <a href="#">About</a>
    <a href="#">Careers</a>
  </div>
  <div class="footer-section">
    <h4>Support</h4>
    <a href="#">Help Center</a>
    <a href="#">Contact</a>
  </div>
  <div class="footer-section">
    <h4>Social</h4>
    <a href="#">Twitter</a>
    <a href="#">GitHub</a>
  </div>
</footer>
```

```css
.footer {
  display: flex;
  justify-content: space-around;
  padding: 60px 40px;
  background: #1a1a1a;
  color: white;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-section h4 {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
}

.footer-section a {
  color: #999;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: white;
}
```

---

### <i class="fas fa-mb-alt"></i> 6. 폼 레이아웃

```html
<form class="form">
  <div class="form-row">
    <input type="text" placeholder="First Name">
    <input type="text" placeholder="Last Name">
  </div>
  <input type="email" placeholder="Email">
  <div class="form-actions">
    <button type="button" class="btn-secondary">Cancel</button>
    <button type="submit" class="btn-primary">Submit</button>
  </div>
</form>
```

```css
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 500px;
  padding: 30px;
  background: white;
  border-radius: 12px;
}

.form-row {
  display: flex;
  gap: 12px;
}

input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 8px;
}

button {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background: #0071e3;
  color: white;
}

.btn-primary:hover {
  background: #005bb5;
}

.btn-secondary {
  background: #f5f5f5;
  color: #333;
}
```

---

## <i class="fas fa-bug"></i> 흔한 문제와 해결

### <i class="fas fa-question"></i> 1. 아이템이 줄어들지 않아요

```css
/* ❌ 문제 */
.item {
  min-width: 200px;  /* min-width가 flex를 막음 */
}

/* ✅ 해결 */
.item {
  flex: 1 1 200px;  /* flex-basis 사용 */
  min-width: 0;     /* 또는 min-width 제거 */
}
```

---

### <i class="fas fa-question"></i> 2. 텍스트가 넘칩니다

```css
/* ❌ 문제 */
.item {
  flex: 1;
}
/* 긴 텍스트가 넘침 */

/* ✅ 해결 */
.item {
  flex: 1;
  min-width: 0;          /* 중요! */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

---

### <i class="fas fa-question"></i> 3. 높이가 안 맞아요

```css
/* ❌ 문제 */
.container {
  display: flex;
  height: 100vh;
}
.item {
  height: 100%;  /* 작동 안함 */
}

/* ✅ 해결 */
.item {
  align-self: stretch;  /* 기본값 */
  /* 또는 */
  flex: 1;
}
```

---

### <i class="fas fa-question"></i> 4. 마지막 줄 정렬이 이상해요

```css
/* ❌ 문제: 마지막 줄이 stretch됨 */
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* ✅ 해결 1: gap 사용 */
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.item {
  flex: 0 0 calc(33.333% - 14px);
}

/* ✅ 해결 2: 가짜 아이템 추가 */
.container::after {
  content: "";
  flex: 0 0 30%;
}
```

---

## <i class="fas fa-mobile-alt"></i> 반응형 Flexbox

```css
/* 기본: 모바일 (세로 스택) */
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 태블릿: 2열 */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .item {
    flex: 0 0 calc(50% - 10px);
  }
}

/* 데스크톱: 3열 */
@media (min-width: 1024px) {
  .item {
    flex: 0 0 calc(33.333% - 14px);
  }
}
```

---

## <i class="fas fa-brain"></i> 핵심 정리

### Container 속성 (부모):

| 속성 | 용도 | 주요 값 |
|------|------|---------|
| `display: flex` | Flexbox 활성화 | `flex`, `inline-flex` |
| `flex-direction` | 주축 방향 | `row`, `column` |
| `justify-content` | 주축 정렬 | `center`, `space-between` |
| `align-items` | 교차축 정렬 (한 줄) | `center`, `stretch` |
| `flex-wrap` | 줄바꿈 | `wrap`, `nowrap` |
| `align-content` | 교차축 정렬 (여러 줄) | `flex-start`, `center` |
| `gap` | 간격 | `20px`, `1rem` |

### Item 속성 (자식):

| 속성 | 용도 | 주요 값 |
|------|------|---------|
| `flex` | 크기 조절 | `1`, `0 0 250px` |
| `flex-grow` | 늘어나기 | `0`, `1` |
| `flex-shrink` | 줄어들기 | `0`, `1` |
| `flex-basis` | 기본 크기 | `auto`, `200px` |
| `align-self` | 개별 정렬 | `center`, `flex-start` |
| `order` | 순서 변경 | `0`, `1`, `-1` |

### 자주 쓰는 패턴:

```css
/* 중앙 정렬 */
display: flex;
justify-content: center;
align-items: center;

/* 균등 분할 */
.item { flex: 1; }

/* 고정 + 가변 */
.sidebar { flex: 0 0 250px; }
.main { flex: 1; }

/* 양 끝 정렬 */
justify-content: space-between;
align-items: center;

/* 반응형 그리드 */
display: flex;
flex-wrap: wrap;
gap: 20px;
```

---

## <i class="fas fa-arrow-right"></i> 다음 단계

Flexbox를 마스터했다면:

- **[Grid](grid)** - 2차원 레이아웃 (Flexbox보다 강력)
- **[Position](../layout/position)** - 절대/고정 위치
- **[반응형](../layout/responsive)** - 미디어 쿼리와 조합

:::tip
<i class="fas fa-star"></i> **Flexbox vs Grid 선택**

- **Flexbox**: 1차원 (네비게이션, 버튼 그룹, 카드 내부)
- **Grid**: 2차원 (페이지 레이아웃, 복잡한 그리드)

**함께 사용하세요!** Grid로 큰 틀, Flexbox로 내부 정렬
:::
