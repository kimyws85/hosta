# <i class="fas fa-font"></i> CSS 타이포그래피

:::info
<i class="fas fa-info-circle"></i> **타이포그래피란?**

웹에서 텍스트를 아름답고 읽기 쉽게 만드는 기술입니다.
글꼴, 크기, 간격, 정렬 등을 제어하여 콘텐츠의 가독성과 시각적 매력을 높입니다.
:::

---

## <i class="fas fa-text-height"></i> 기본 속성

### <i class="fas fa-font"></i> `font-family`

```css
.element {
  font-family: "Helvetica Neue", Arial, sans-serif;
}

/* 시스템 폰트 */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
```

**글꼴 스택** (우선순위):
1. 사용자 PC에 설치된 순서대로 적용
2. 마지막은 `serif`, `sans-serif`, `monospace` 등 기본 계열

---

### <i class="fas fa-text-width"></i> `font-size`

```css
.text {
  font-size: 16px;                             /* 픽셀 */
  font-size: 1rem;                             /* 루트 기준 */
  font-size: 1.5em;                            /* 부모 기준 */
  font-size: 100%;                             /* 부모의 100% */
}
```

---

### <i class="fas fa-bold"></i> `font-weight`

```css
.text {
  font-weight: normal;                         /* 400 */
  font-weight: bold;                           /* 700 */
  font-weight: 300;                            /* Light */
  font-weight: 500;                            /* Medium */
  font-weight: 600;                            /* Semi-bold */
  font-weight: 900;                            /* Black */
}
```

---

### <i class="fas fa-italic"></i> `font-style`

```css
.text {
  font-style: normal;
  font-style: italic;
  font-style: oblique;
}
```

---

### <i class="fas fa-align-left"></i> `text-align`

```css
.text {
  text-align: left;
  text-align: center;
  text-align: right;
  text-align: justify;                         /* 양쪽 정렬 */
}
```

---

### <i class="fas fa-underline"></i> `text-decoration`

```css
.text {
  text-decoration: none;                       /* 제거 */
  text-decoration: underline;                  /* 밑줄 */
  text-decoration: overline;                   /* 윗줄 */
  text-decoration: line-through;               /* 취소선 */
}

/* 스타일 추가 */
a {
  text-decoration: underline wavy red;
}
```

---

### <i class="fas fa-text-slash"></i> `text-transform`

```css
.text {
  text-transform: none;
  text-transform: uppercase;                   /* 대문자 */
  text-transform: lowercase;                   /* 소문자 */
  text-transform: capitalize;                  /* 첫 글자만 대문자 */
}
```

---

## <i class="fas fa-ruler-vertical"></i> 간격 조정

### <i class="fas fa-arrows-alt-v"></i> `line-height`

```css
.text {
  line-height: 1.5;                            /* 배수 (권장) */
  line-height: 24px;                           /* 픽셀 */
  line-height: 150%;                           /* 퍼센트 */
}
```

:::tip
<i class="fas fa-lightbulb"></i> **가독성 권장값**

- 본문 텍스트: `line-height: 1.5 ~ 1.8`
- 제목: `line-height: 1.2 ~ 1.4`
:::

---

### <i class="fas fa-arrows-alt-h"></i> `letter-spacing`

```css
.text {
  letter-spacing: normal;
  letter-spacing: 0.05em;                      /* 넓게 */
  letter-spacing: -0.02em;                     /* 좁게 */
}
```

---

### <i class="fas fa-indent"></i> `word-spacing`

```css
.text {
  word-spacing: normal;
  word-spacing: 5px;
}
```

---

## <i class="fas fa-ellipsis-h"></i> 텍스트 오버플로

### 한 줄 말줄임

```css
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### 여러 줄 말줄임 (Webkit)

```css
.multi-line-truncate {
  display: -webkit-box;
  -webkit-line-clamp: 3;                       /* 3줄 */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

---

## <i class="fas fa-download"></i> 웹 폰트

### Google Fonts

```html
<!-- HTML head에 추가 -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
```

```css
body {
  font-family: 'Roboto', sans-serif;
}
```

### @font-face (커스텀 폰트)

```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('/fonts/custom-font.woff2') format('woff2'),
       url('/fonts/custom-font.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: 'MyCustomFont', sans-serif;
}
```

---

## <i class="fas fa-rocket"></i> 실전 예제

### <i class="fas fa-newspaper"></i> 블로그 타이포그래피

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.3;
  margin: 2rem 0 1rem;
}

p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

a {
  color: #0071e3;
  text-decoration: underline;
  text-underline-offset: 3px;
}

blockquote {
  font-size: 1.25rem;
  font-style: italic;
  border-left: 4px solid #0071e3;
  padding-left: 1.5rem;
  margin: 2rem 0;
  color: #666;
}
```

---

## <i class="fas fa-brain"></i> 핵심 정리

### 기본 속성:
1. `font-family` - 글꼴
2. `font-size` - 크기
3. `font-weight` - 굵기 (400, 700)
4. `line-height` - 줄 간격 (1.5~1.8)
5. `color` - 텍스트 색상

### 가독성 팁:
- 본문: 16px, line-height 1.6~1.8
- 제목: 굵게, line-height 1.2~1.4
- 명암비: 4.5:1 이상
- 줄 길이: 50~75자

### 말줄임:
- 한 줄: `white-space: nowrap` + `text-overflow: ellipsis`
- 여러 줄: `-webkit-line-clamp`

---

## <i class="fas fa-arrow-right"></i> 다음 단계

- **[색상](colors)** - 텍스트 색상
- **[반응형](../layout/responsive)** - 반응형 타이포그래피
- **[애니메이션](animations)** - 텍스트 효과
