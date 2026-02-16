# <i class="fas fa-th"></i> CSS Grid

:::info
<i class="fas fa-info-circle"></i> **Grid란?**

**CSS Grid Layout**은 2차원(행과 열) 레이아웃 시스템입니다.
Flexbox가 1차원이라면, Grid는 행과 열을 동시에 제어할 수 있는 강력한 레이아웃 도구입니다.
:::

---

## <i class="fas fa-border-all"></i> Grid 기본 구조

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px 100px;
  gap: 10px;
}
```

**결과**: 3열 2행 그리드 (200px × 100px 셀, 10px 간격)

---

## <i class="fas fa-columns"></i> 열(Column) 정의

### <i class="fas fa-ruler-horizontal"></i> `grid-template-columns`

```css
/* 고정 크기 */
.grid {
  grid-template-columns: 200px 200px 200px;
}

/* 비율 (fr 단위) */
.grid {
  grid-template-columns: 1fr 1fr 1fr;          /* 균등 3분할 */
  grid-template-columns: 2fr 1fr 1fr;          /* 2:1:1 비율 */
}

/* 혼합 */
.grid {
  grid-template-columns: 200px 1fr 1fr;        /* 고정 + 가변 */
}

/* repeat() 함수 */
.grid {
  grid-template-columns: repeat(3, 1fr);       /* 1fr 3번 반복 */
  grid-template-columns: repeat(4, 200px);
}

/* auto-fit / auto-fill */
.grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

---

## <i class="fas fa-bars"></i> 행(Row) 정의

### <i class="fas fa-ruler-vertical"></i> `grid-template-rows`

```css
.grid {
  grid-template-rows: 100px 200px;             /* 고정 */
  grid-template-rows: 1fr 2fr;                 /* 비율 */
  grid-template-rows: repeat(3, 100px);        /* 반복 */
}

/* 자동 행 크기 */
.grid {
  grid-auto-rows: 150px;                       /* 추가 행 크기 */
  grid-auto-rows: minmax(100px, auto);         /* 최소/최대 */
}
```

---

## <i class="fas fa-grip-lines"></i> 간격(Gap)

```css
.grid {
  gap: 20px;                                   /* 행+열 */
  row-gap: 10px;                               /* 행 간격 */
  column-gap: 20px;                            /* 열 간격 */
}
```

---

## <i class="fas fa-arrows-alt"></i> 아이템 배치

### <i class="fas fa-border-style"></i> 영역 지정

```css
.item {
  /* 열 시작 ~ 끝 */
  grid-column: 1 / 3;                          /* 1열부터 3열 전까지 */
  grid-column: 1 / -1;                         /* 1열부터 끝까지 */
  grid-column: span 2;                         /* 2칸 차지 */

  /* 행 시작 ~ 끝 */
  grid-row: 1 / 3;
  grid-row: span 2;
}

/* 단축 */
.item {
  grid-area: 1 / 1 / 3 / 3;                    /* row-start / col-start / row-end / col-end */
}
```

---

## <i class="fas fa-map"></i> Grid Template Areas

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  gap: 10px;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.aside   { grid-area: aside; }
.footer  { grid-area: footer; }
```

---

## <i class="fas fa-align-center"></i> 정렬

### <i class="fas fa-arrows-alt-h"></i> 셀 내부 정렬

```css
.container {
  /* 가로 정렬 */
  justify-items: start;                        /* 시작 */
  justify-items: center;                       /* 가운데 */
  justify-items: end;                          /* 끝 */
  justify-items: stretch;                      /* 늘림 (기본) */

  /* 세로 정렬 */
  align-items: start;
  align-items: center;
  align-items: end;
  align-items: stretch;

  /* 단축 */
  place-items: center center;                  /* align justify */
}
```

### <i class="fas fa-expand-arrows-alt"></i> 그리드 전체 정렬

```css
.container {
  /* 가로 */
  justify-content: start;
  justify-content: center;
  justify-content: space-between;

  /* 세로 */
  align-content: start;
  align-content: center;
  align-content: space-between;

  /* 단축 */
  place-content: center center;
}
```

### <i class="fas fa-cube"></i> 개별 아이템 정렬

```css
.item {
  justify-self: center;
  align-self: center;
  place-self: center center;
}
```

---

## <i class="fas fa-rocket"></i> 실전 예제

### <i class="fas fa-th-large"></i> 1. 기본 그리드

```html
<div class="grid">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.item {
  padding: 40px;
  background: #0071e3;
  color: white;
  text-align: center;
  border-radius: 8px;
}
```

---

### <i class="fas fa-image"></i> 2. 반응형 카드 그리드

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.card {
  padding: 20px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 12px;
}
```

:::tip
<i class="fas fa-magic"></i> **auto-fit의 마법**

`repeat(auto-fit, minmax(280px, 1fr))`

- 최소 280px로 자동으로 열 개수 조정
- 화면 크기에 따라 1열 ~ N열 자동 변환
- 미디어 쿼리 불필요!
:::

---

### <i class="fas fa-newspaper"></i> 3. 성배 레이아웃 (Holy Grail)

```html
<div class="layout">
  <header class="header">Header</header>
  <nav class="sidebar">Sidebar</nav>
  <main class="main">Main</main>
  <aside class="aside">Aside</aside>
  <footer class="footer">Footer</footer>
</div>
```

```css
.layout {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  gap: 10px;
  min-height: 100vh;
}

.header  { grid-area: header; background: #333; color: white; padding: 20px; }
.sidebar { grid-area: sidebar; background: #f5f5f5; }
.main    { grid-area: main; background: white; }
.aside   { grid-area: aside; background: #f5f5f5; }
.footer  { grid-area: footer; background: #333; color: white; padding: 20px; }
```

---

### <i class="fas fa-pause"></i> 4. 매거진 레이아웃

```html
<div class="magazine">
  <div class="feature">Featured</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```

```css
.magazine {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 15px;
}

.feature {
  grid-column: span 2;
  grid-row: span 2;
  background: #0071e3;
  color: white;
  font-size: 2em;
}

.item {
  background: #f5f5f5;
}
```

---

## <i class="fas fa-lightbulb"></i> 유용한 패턴

### <i class="fas fa-th"></i> 균등 그리드

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

---

### <i class="fas fa-mobile-alt"></i> 반응형 그리드 (미디어 쿼리 불필요)

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

---

### <i class="fas fa-border-all"></i> 고정 + 가변

```css
.grid {
  display: grid;
  grid-template-columns: 250px 1fr;            /* 사이드바 + 메인 */
  gap: 20px;
}
```

---

## <i class="fas fa-code-compare"></i> Grid vs Flexbox

| 특징 | Grid | Flexbox |
|------|------|---------|
| 차원 | 2차원 (행 + 열) | 1차원 (행 또는 열) |
| 용도 | 전체 페이지 레이아웃 | 컴포넌트 내부 정렬 |
| 정렬 | 행과 열 동시 제어 | 한 방향만 |
| 반응형 | auto-fit/auto-fill | flex-wrap |

:::tip
<i class="fas fa-balance-scale"></i> **언제 뭘 쓸까?**

- **Grid**: 페이지 전체 레이아웃, 복잡한 2차원 배치
- **Flexbox**: 네비게이션, 카드 내부, 버튼 그룹

**함께 사용**: Grid로 큰 틀, Flexbox로 내부 정렬
:::

---

## <i class="fas fa-brain"></i> 핵심 정리

### Container 속성:
1. `display: grid` - Grid 활성화
2. `grid-template-columns` - 열 정의
3. `grid-template-rows` - 행 정의
4. `grid-template-areas` - 영역 이름
5. `gap` - 간격
6. `justify-items`, `align-items` - 정렬

### Item 속성:
1. `grid-column`, `grid-row` - 영역 지정
2. `grid-area` - 영역 이름 또는 단축
3. `justify-self`, `align-self` - 개별 정렬

### 필수 개념:
- **fr 단위**: 비율 기반 크기
- **repeat()**: 반복 패턴
- **minmax()**: 최소/최대 크기
- **auto-fit**: 반응형 그리드

---

## <i class="fas fa-arrow-right"></i> 다음 단계

- **[Position](../layout/position)** - 위치 지정
- **[반응형](../layout/responsive)** - 미디어 쿼리
- **[Flexbox](flexbox)** - 1차원 레이아웃 복습
