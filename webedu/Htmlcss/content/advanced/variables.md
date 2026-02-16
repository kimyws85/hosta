# <i class="fas fa-code"></i> CSS 변수 (Custom Properties)

:::info
<i class="fas fa-info-circle"></i> **CSS 변수란?**

CSS에서 재사용 가능한 값을 저장하는 기능입니다.
색상, 크기, 간격 등을 변수로 정의하여 일관성 있고 유지보수하기 쉬운 코드를 작성할 수 있습니다.
:::

---

## <i class="fas fa-play"></i> 기본 사용법

### 선언

```css
:root {
  --primary-color: #0071e3;
  --secondary-color: #1d1d1f;
  --spacing: 16px;
}
```

### 사용

```css
.button {
  background: var(--primary-color);
  padding: var(--spacing);
}
```

---

## <i class="fas fa-globe"></i> :root vs 선택자

### `:root` (전역 변수)

```css
:root {
  --primary: #0071e3;
}

/* 모든 곳에서 사용 가능 */
.button {
  background: var(--primary);
}
```

### 선택자 (지역 변수)

```css
.dark-theme {
  --primary: #5ba3ff;
  --bg: #1d1d1f;
}

.dark-theme .button {
  background: var(--primary);       /* #5ba3ff */
}
```

---

## <i class="fas fa-paint-brush"></i> 기본값 설정

```css
.element {
  /* 변수가 없으면 #333 사용 */
  color: var(--text-color, #333);

  /* 여러 단계 fallback */
  color: var(--custom-color, var(--default-color, black));
}
```

---

## <i class="fas fa-rocket"></i> 실전 예제

### <i class="fas fa-palette"></i> 컬러 시스템

```css
:root {
  /* 주요 색상 */
  --primary: #0071e3;
  --primary-light: #5ba3ff;
  --primary-dark: #0051a8;

  --secondary: #1d1d1f;
  --accent: #ff3b30;

  /* 그레이스케일 */
  --gray-50: #fafafa;
  --gray-100: #f5f5f7;
  --gray-200: #e8e8ed;
  --gray-300: #d2d2d7;
  --gray-400: #86868b;
  --gray-500: #6e6e73;
  --gray-600: #515154;
  --gray-700: #3a3a3c;
  --gray-800: #2c2c2e;
  --gray-900: #1d1d1f;

  /* 시맨틱 색상 */
  --success: #34c759;
  --warning: #ff9500;
  --error: #ff3b30;
  --info: #007aff;

  /* 배경/텍스트 */
  --bg: white;
  --text: var(--gray-900);
}
```

---

### <i class="fas fa-ruler"></i> 간격 시스템

```css
:root {
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
}

.card {
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}
```

---

### <i class="fas fa-font"></i> 타이포그래피

```css
:root {
  /* 글꼴 크기 */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 30px;
  --text-4xl: 36px;

  /* 글꼴 굵기 */
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* 줄 간격 */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-loose: 1.75;
}

h1 {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
}
```

---

### <i class="fas fa-moon"></i> 다크 모드

```css
:root {
  --bg: white;
  --text: #1d1d1f;
  --card-bg: #f5f5f7;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #1d1d1f;
    --text: #f5f5f7;
    --card-bg: #2c2c2e;
  }
}

/* 또는 클래스 기반 */
.dark-mode {
  --bg: #1d1d1f;
  --text: #f5f5f7;
  --card-bg: #2c2c2e;
}

body {
  background: var(--bg);
  color: var(--text);
}

.card {
  background: var(--card-bg);
}
```

---

### <i class="fas fa-ruler-combined"></i> 반응형 간격

```css
:root {
  --container-padding: 20px;
}

@media (min-width: 768px) {
  :root {
    --container-padding: 40px;
  }
}

@media (min-width: 1024px) {
  :root {
    --container-padding: 60px;
  }
}

.container {
  padding: 0 var(--container-padding);
}
```

---

## <i class="fas fa-lightbulb"></i> 고급 활용

### calc()와 조합

```css
:root {
  --base-size: 16px;
  --double: calc(var(--base-size) * 2);       /* 32px */
  --half: calc(var(--base-size) / 2);         /* 8px */
}
```

### JavaScript로 변경

```javascript
// 변수 읽기
const root = document.documentElement;
const primary = getComputedStyle(root).getPropertyValue('--primary');

// 변수 변경
root.style.setProperty('--primary', '#ff0000');
```

---

## <i class="fas fa-brain"></i> 핵심 정리

### 선언:
```css
:root {
  --변수명: 값;
}
```

### 사용:
```css
.element {
  속성: var(--변수명);
  속성: var(--변수명, 기본값);
}
```

### 장점:
1. **재사용성** - 한 곳에서 관리
2. **일관성** - 통일된 디자인
3. **유지보수** - 쉬운 수정
4. **다크 모드** - 테마 전환
5. **JavaScript 연동** - 동적 변경

### 명명 규칙:
- `--primary`, `--secondary` (색상)
- `--spacing-md`, `--spacing-lg` (간격)
- `--text-base`, `--text-xl` (크기)
- `--font-bold`, `--font-normal` (굵기)

---

## <i class="fas fa-arrow-right"></i> 다음 단계

- **[색상](../styling/colors)** - 색상 활용
- **[반응형](../layout/responsive)** - 반응형 변수
- **[Flexbox](../css/flexbox)** - 레이아웃
