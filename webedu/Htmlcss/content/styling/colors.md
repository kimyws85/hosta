# <i class="fas fa-palette"></i> CSS 색상

:::info
<i class="fas fa-info-circle"></i> **CSS 색상이란?**

CSS에서 색상을 표현하는 다양한 방법과 활용 기법을 배웁니다.
텍스트, 배경, 테두리 등 모든 요소에 색상을 적용할 수 있습니다.
:::

---

## <i class="fas fa-hashtag"></i> 색상 표현 방식

### 1. <i class="fas fa-tag"></i> 색상 이름

```css
.element {
  color: red;
  background: blue;
  border-color: green;
}
```

**장점**: 간단하고 직관적
**단점**: 제한적 (140여 개)

---

### 2. <i class="fas fa-code"></i> HEX (16진수)

```css
.element {
  color: #ff0000;                              /* 빨강 */
  color: #00ff00;                              /* 초록 */
  color: #0000ff;                              /* 파랑 */
  color: #000;                                 /* 단축형 #000000 */
  color: #fff;                                 /* 단축형 #ffffff */
}
```

**형식**: `#RRGGBB` (Red, Green, Blue)
**범위**: 00 ~ FF (0 ~ 255)

---

### 3. <i class="fas fa-paint-brush"></i> RGB

```css
.element {
  color: rgb(255, 0, 0);                       /* 빨강 */
  color: rgb(0, 255, 0);                       /* 초록 */
  color: rgb(0, 0, 255);                       /* 파랑 */
}
```

**형식**: `rgb(red, green, blue)`
**범위**: 0 ~ 255

---

### 4. <i class="fas fa-adjust"></i> RGBA (투명도)

```css
.element {
  background: rgba(255, 0, 0, 0.5);            /* 반투명 빨강 */
  background: rgba(0, 0, 0, 0.8);              /* 80% 불투명 검정 */
}
```

**형식**: `rgba(red, green, blue, alpha)`
**alpha 범위**: 0 (투명) ~ 1 (불투명)

---

### 5. <i class="fas fa-circle-notch"></i> HSL

```css
.element {
  color: hsl(0, 100%, 50%);                    /* 빨강 */
  color: hsl(120, 100%, 50%);                  /* 초록 */
  color: hsl(240, 100%, 50%);                  /* 파랑 */
}
```

**형식**: `hsl(hue, saturation, lightness)`
- **Hue (색조)**: 0 ~ 360 (색상환 각도)
- **Saturation (채도)**: 0% ~ 100% (선명도)
- **Lightness (명도)**: 0% (검정) ~ 100% (흰색)

---

### 6. <i class="fas fa-circle-half-stroke"></i> HSLA (투명도)

```css
.element {
  background: hsla(0, 100%, 50%, 0.5);         /* 반투명 빨강 */
}
```

---

## <i class="fas fa-swatchbook"></i> 색상 속성

```css
.element {
  /* 텍스트 색상 */
  color: #333;

  /* 배경 색상 */
  background-color: #f5f5f5;

  /* 테두리 색상 */
  border-color: #ddd;

  /* 그림자 색상 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
```

---

## <i class="fas fa-magic"></i> 특별한 값

### `currentColor`

부모의 color 값 상속

```css
.icon {
  color: red;
  border: 2px solid currentColor;              /* 빨간 테두리 */
}
```

### `transparent`

완전 투명

```css
.element {
  background: transparent;
  border: 1px solid transparent;
}
```

---

## <i class="fas fa-rocket"></i> 실전 예제

### <i class="fas fa-palette"></i> 컬러 팔레트

```css
:root {
  /* 주요 색상 */
  --primary: #0071e3;
  --secondary: #1d1d1f;
  --accent: #ff3b30;

  /* 그레이스케일 */
  --gray-100: #f5f5f7;
  --gray-200: #e8e8ed;
  --gray-300: #d2d2d7;
  --gray-400: #86868b;
  --gray-500: #6e6e73;

  /* 시스템 색상 */
  --success: #34c759;
  --warning: #ff9500;
  --error: #ff3b30;
  --info: #007aff;
}

/* 사용 */
.button {
  background: var(--primary);
  color: white;
}
```

---

### <i class="fas fa-moon"></i> 다크 모드

```css
:root {
  --bg: white;
  --text: #1d1d1f;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #1d1d1f;
    --text: #f5f5f7;
  }
}

body {
  background: var(--bg);
  color: var(--text);
}
```

---

### <i class="fas fa-layer-group"></i> 그라데이션

```css
/* 선형 그라데이션 */
.gradient-linear {
  background: linear-gradient(to right, #667eea, #764ba2);
}

/* 방사형 그라데이션 */
.gradient-radial {
  background: radial-gradient(circle, #667eea, #764ba2);
}

/* 여러 색상 */
.gradient-multi {
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 50%,
    #f093fb 100%
  );
}
```

---

## <i class="fas fa-lightbulb"></i> 색상 활용 팁

### 1. 색상 대비 (접근성)

```css
/* ✅ 좋은 대비 */
.good {
  background: #0071e3;
  color: white;                                /* 4.5:1 이상 */
}

/* ❌ 나쁜 대비 */
.bad {
  background: #e8e8ed;
  color: #f5f5f7;                              /* 대비가 낮음 */
}
```

:::tip
<i class="fas fa-universal-access"></i> **접근성 기준 (WCAG)**

- 일반 텍스트: 4.5:1 이상
- 큰 텍스트: 3:1 이상
:::

---

### 2. 색상 체계

```css
/* 일관성 있는 색상 사용 */
:root {
  --primary: #0071e3;
  --primary-light: #5ba3ff;
  --primary-dark: #0051a8;

  --secondary: #1d1d1f;
  --secondary-light: #424245;
  --secondary-dark: #000000;
}
```

---

### 3. 투명도 활용

```css
/* 오버레이 */
.overlay {
  background: rgba(0, 0, 0, 0.5);
}

/* 유리 효과 */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

/* 그림자 */
.card {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
```

---

## <i class="fas fa-brain"></i> 핵심 정리

### 표현 방식:
1. **HEX**: `#ff0000` (가장 흔함)
2. **RGB**: `rgb(255, 0, 0)`
3. **RGBA**: `rgba(255, 0, 0, 0.5)` (투명도)
4. **HSL**: `hsl(0, 100%, 50%)` (직관적)

### 속성:
- `color` - 텍스트 색상
- `background-color` - 배경 색상
- `border-color` - 테두리 색상

### 추천 방법:
- **CSS 변수** 사용 (--primary)
- **일관된 팔레트** 구성
- **접근성** 고려 (대비 4.5:1 이상)

---

## <i class="fas fa-arrow-right"></i> 다음 단계

- **[타이포그래피](typography)** - 글꼴과 텍스트
- **[CSS 변수](../advanced/variables)** - 색상 관리
- **[반응형](../layout/responsive)** - 다크 모드
