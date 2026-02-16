# <i class="fas fa-mobile-alt"></i> 반응형 웹 디자인

:::info
<i class="fas fa-info-circle"></i> **반응형이란?**

**Responsive Web Design**은 다양한 화면 크기(PC, 태블릿, 모바일)에 자동으로 최적화되는 웹 디자인입니다.
하나의 HTML/CSS로 모든 기기에 대응합니다.
:::

---

## <i class="fas fa-mobile"></i> Viewport 설정

**필수!** 모든 HTML에 추가:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- `width=device-width` - 기기 화면 너비 사용
- `initial-scale=1.0` - 초기 확대 비율 1배

---

## <i class="fas fa-desktop"></i> 미디어 쿼리 (Media Query)

```css
/* 모바일 퍼스트 (기본 스타일 = 모바일) */
.container {
  padding: 10px;
}

/* 태블릿 (768px 이상) */
@media (min-width: 768px) {
  .container {
    padding: 20px;
  }
}

/* 데스크톱 (1024px 이상) */
@media (min-width: 1024px) {
  .container {
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

---

## <i class="fas fa-ruler-horizontal"></i> 브레이크포인트 (Breakpoint)

```css
/* 모바일 */
@media (max-width: 767px) {
  /* ~ 767px */
}

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

**일반적인 기준:**
- 모바일: ~ 767px
- 태블릿: 768px ~ 1023px
- 데스크톱: 1024px ~

---

## <i class="fas fa="mobile-alt"></i> Mobile First vs Desktop First

### <i class="fas fa-mobile"></i> Mobile First (권장)

```css
/* 기본 = 모바일 */
.element {
  font-size: 14px;
}

/* 큰 화면으로 확장 */
@media (min-width: 768px) {
  .element {
    font-size: 16px;
  }
}
```

### <i class="fas fa-desktop"></i> Desktop First

```css
/* 기본 = 데스크톱 */
.element {
  font-size: 18px;
}

/* 작은 화면으로 축소 */
@media (max-width: 767px) {
  .element {
    font-size: 14px;
  }
}
```

:::tip
<i class="fas fa-lightbulb"></i> **Mobile First를 권장하는 이유**

- 모바일 트래픽이 더 많음
- 필수 기능 우선 설계
- 점진적 향상(Progressive Enhancement)
:::

---

## <i class="fas fa-percentage"></i> 유동적 레이아웃

### 고정 크기 ❌

```css
.container {
  width: 1200px;                               /* 작은 화면에서 깨짐 */
}
```

### 유동 크기 ✅

```css
.container {
  width: 100%;
  max-width: 1200px;                           /* 최대 1200px */
  padding: 0 20px;
  margin: 0 auto;
}
```

---

## <i class="fas fa-images"></i> 반응형 이미지

```css
/* 기본 */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* srcset 사용 (HTML) */
<img
  src="image-400.jpg"
  srcset="
    image-400.jpg 400w,
    image-800.jpg 800w,
    image-1200.jpg 1200w
  "
  sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
  alt="Responsive Image">

/* picture 태그 */
<picture>
  <source media="(min-width: 1024px)" srcset="desktop.jpg">
  <source media="(min-width: 768px)" srcset="tablet.jpg">
  <img src="mobile.jpg" alt="Image">
</picture>
```

---

## <i class="fas fa-th"></i> 반응형 그리드

### CSS Grid (자동 반응형)

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
```

### Flexbox + 미디어 쿼리

```css
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.item {
  flex: 1 1 100%;                              /* 모바일: 1열 */
}

@media (min-width: 768px) {
  .item {
    flex: 1 1 calc(50% - 10px);               /* 태블릿: 2열 */
  }
}

@media (min-width: 1024px) {
  .item {
    flex: 1 1 calc(33.333% - 14px);           /* 데스크톱: 3열 */
  }
}
```

---

## <i class="fas fa-font"></i> 반응형 타이포그래피

### 고정 크기

```css
h1 {
  font-size: 16px;
}

@media (min-width: 768px) {
  h1 {
    font-size: 24px;
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: 32px;
  }
}
```

### Viewport 단위 (고급)

```css
h1 {
  font-size: clamp(24px, 5vw, 48px);           /* 최소 24px, 최대 48px */
}
```

---

## <i class="fas fa-rocket"></i> 실전 예제

### <i class="fas fa-bars"></i> 반응형 네비게이션

```html
<nav class="nav">
  <div class="logo">Logo</div>
  <button class="menu-toggle">☰</button>
  <ul class="menu">
    <li><a href="#">홈</a></li>
    <li><a href="#">소개</a></li>
    <li><a href="#">서비스</a></li>
    <li><a href="#">연락</a></li>
  </ul>
</nav>
```

```css
/* 모바일 */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.menu-toggle {
  display: block;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.menu {
  display: none;                               /* 모바일: 숨김 */
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background: white;
  flex-direction: column;
}

.menu.active {
  display: flex;                               /* 열림 */
}

/* 데스크톱 (768px 이상) */
@media (min-width: 768px) {
  .menu-toggle {
    display: none;                             /* 햄버거 숨김 */
  }

  .menu {
    display: flex !important;                  /* 항상 표시 */
    position: static;
    flex-direction: row;
    gap: 30px;
  }
}
```

---

### <i class="fas fa-th-large"></i> 카드 레이아웃

```css
.card-container {
  display: grid;
  gap: 20px;
  padding: 20px;
}

/* 모바일: 1열 */
.card-container {
  grid-template-columns: 1fr;
}

/* 태블릿: 2열 */
@media (min-width: 768px) {
  .card-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 데스크톱: 3열 */
@media (min-width: 1024px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

---

## <i class="fas fa-lightbulb"></i> 반응형 디자인 팁

### 1. Container 패턴

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 40px;
  }
}
```

### 2. 숨기기/보이기

```css
/* 모바일에서만 보이기 */
.mobile-only {
  display: block;
}

@media (min-width: 768px) {
  .mobile-only {
    display: none;
  }
}

/* 데스크톱에서만 보이기 */
.desktop-only {
  display: none;
}

@media (min-width: 768px) {
  .desktop-only {
    display: block;
  }
}
```

### 3. Touch-friendly 크기

```css
/* 터치 영역 최소 44×44px */
button, a {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 20px;
}
```

---

## <i class="fas fa-brain"></i> 핵심 정리

### 필수 요소:
1. **Viewport 메타 태그** - 모든 페이지에 추가
2. **유동적 레이아웃** - %, max-width 사용
3. **미디어 쿼리** - 브레이크포인트별 스타일
4. **반응형 이미지** - max-width: 100%
5. **Mobile First** - 모바일 기본, 확장

### 브레이크포인트:
- 모바일: ~ 767px
- 태블릿: 768px ~ 1023px
- 데스크톱: 1024px ~

### 자주 쓰는 패턴:
- Container: `max-width + padding + margin: auto`
- Grid: `repeat(auto-fit, minmax(280px, 1fr))`
- 이미지: `max-width: 100%; height: auto;`

---

## <i class="fas fa-arrow-right"></i> 다음 단계

- **[Flexbox](../css/flexbox)** - 유연한 레이아웃
- **[Grid](../css/grid)** - 2차원 레이아웃
- **[CSS 변수](../advanced/variables)** - 테마 관리
