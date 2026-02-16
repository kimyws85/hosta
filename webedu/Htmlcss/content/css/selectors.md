# <i class="fas fa-code"></i> CSS 선택자(Selector)

:::info
<i class="fas fa-info-circle"></i> **선택자란?**

HTML 문서에서 "어떤 요소를 스타일링할 것인지" 지정하는 문법입니다.
CSS는 디자인 언어가 아니라 **선택 → 적용 → 우선순위**의 규칙 기반 시스템입니다.
:::

---

## <i class="fas fa-layer-group"></i> 기본 선택자

기본 선택자는 CSS의 출발점입니다.
모든 복잡한 선택자도 결국 이 세 가지에서 확장됩니다.

### <i class="fas fa-tag"></i> 태그 선택자

```css
p {
  color: blue;
}
```

**특징:**
- 모든 `<p>` 요소에 적용됩니다.
- 문서 구조 자체를 기준으로 선택합니다.
- 범위가 넓기 때문에 전역 스타일에 자주 사용됩니다.

**실무 예제:**

```css
body {
  font-family: 'Pretendard', sans-serif;
  line-height: 1.6;
}

h1, h2, h3 {
  font-weight: 700;
  letter-spacing: -0.03em;
}

a {
  text-decoration: none;
  color: inherit;
}
```

:::tip
<i class="fas fa-lightbulb"></i> **사용 기준**

- 리셋 CSS (normalize, reset)
- 기본 타이포그래피 설정
- 전역 공통 스타일 (body, html, a 등)
- 의미론적 요소 기본 스타일 (h1~h6, p, ul 등)
:::

---

### <i class="fas fa-cubes"></i> 클래스 선택자

```css
.box {
  background: yellow;
  padding: 20px;
}
```

```html
<div class="box"></div>
<section class="box"></section>
<article class="box"></article>
```

**특징:**
- 가장 많이 사용하는 선택자입니다.
- 재사용 가능한 디자인 단위입니다.
- 여러 요소에 동시에 적용할 수 있습니다.
- 여러 클래스를 조합할 수 있습니다.

**클래스 조합 예제:**

```html
<button class="btn btn-primary btn-large">확인</button>
```

```css
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  background: #0071e3;
  color: white;
}

.btn-large {
  font-size: 18px;
  padding: 15px 30px;
}
```

:::tip
<i class="fas fa-puzzle-piece"></i> **설계 원칙 (BEM, OOCSS)**

**BEM (Block Element Modifier):**
```css
.card { }           /* Block */
.card__title { }    /* Element */
.card--featured { } /* Modifier */
```

**OOCSS (Object-Oriented CSS):**
```css
.media { }         /* 구조 */
.media-img { }     /* 구조 */
.theme-dark { }    /* 스킨 */
```

스타일링은 클래스 기반으로 설계하는 것이 유지보수에 유리합니다.
:::

---

### <i class="fas fa-hashtag"></i> 아이디 선택자

```css
#main {
  width: 1200px;
  margin: 0 auto;
}
```

```html
<div id="main"></div>
```

**특징:**
- 한 페이지에서 **단 하나**만 존재해야 합니다.
- 특정 영역을 명확히 지정할 때 사용합니다.
- 우선순위(specificity)가 클래스보다 높습니다.
- 주로 JavaScript 선택이나 앵커 링크에 사용합니다.

**실무 사용 예:**

```css
/* 레이아웃 주요 영역 */
#header { }
#navigation { }
#main-content { }
#footer { }

/* JavaScript 대상 */
#modal-overlay { }
#search-form { }
```

:::warning
<i class="fas fa-exclamation-triangle"></i> **아이디 선택자 사용 주의**



- CSS 스타일링에는 가급적 클래스를 사용하세요.
- 아이디는 JavaScript 선택이나 앵커 링크용으로 남겨두는 것이 좋습니다.
- 우선순위가 높아서 나중에 스타일 덮어쓰기가 어려워집니다.
- 재사용이 불가능합니다.



**나쁜 예:**
```css
#main-button { background: red; }
#main-button:hover { background: blue; }
```

**좋은 예:**
```css
.btn-primary { background: red; }
.btn-primary:hover { background: blue; }
```

:::

---

### <i class="fas fa-asterisk"></i> 전체 선택자

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

**특징:**
- 모든 요소를 선택합니다.
- CSS 리셋에 주로 사용됩니다.

**실무 리셋 예제:**

```css
* {
  box-sizing: border-box;
}

*::before,
*::after {
  box-sizing: border-box;
}

/* 또는 특정 컨테이너 내부만 */
.container * {
  margin: 0;
  padding: 0;
}
```

:::warning
<i class="fas fa-tachometer-alt"></i> **성능 주의**

- 전체 선택자는 모든 요소를 순회하므로 성능에 영향을 줄 수 있습니다.
- 필요한 경우에만 제한적으로 사용하세요.
- 대규모 프로젝트에서는 normalize.css나 reset.css 사용을 권장합니다.
:::

---

## <i class="fas fa-chart-bar"></i> 우선순위 (Specificity)

CSS는 "나중에 나온 규칙이 이긴다"가 전부가 아니라,
**우선순위(Specificity)** 라는 점수 체계로 어떤 규칙이 이길지 먼저 결정합니다.

```css
p { color: blue; }      /* 태그: 1점 */
.box { color: red; }    /* 클래스: 10점 */
#main { color: green; } /* 아이디: 100점 */
```

### <i class="fas fa-calculator"></i> 우선순위 점수 계산

| 선택자 유형 | 점수 | 예시 |
|------------|------|------|
| 인라인 스타일 | 1000 | `<div style="color: red">` |
| 아이디 | 100 | `#header` |
| 클래스, 속성, 가상클래스 | 10 | `.btn`, `[type="text"]`, `:hover` |
| 태그, 가상요소 | 1 | `div`, `p`, `::before` |
| 전체 선택자 | 0 | `*` |

### <i class="fas fa-chart-line"></i> 조합 선택자 점수 계산

```css
/* 1점 */
p { }

/* 10점 */
.box { }

/* 100점 */
#main { }

/* 11점 (10 + 1) */
p.box { }
.box p { }

/* 101점 (100 + 1) */
#main p { }

/* 21점 (10 + 10 + 1) */
.wrap .box p { }

/* 111점 (100 + 10 + 1) */
#main .box p { }

/* 120점 (100 + 10 + 10) */
#main .header .title { }
```

### <i class="fas fa-equals"></i> 같은 점수일 때

우선순위 점수가 동일하면 **"나중에 선언된 규칙"** 이 이깁니다.

```css
.box { color: red; }
.box { color: blue; }  /* 같은 10점이지만, 나중에 선언되어 blue 적용 */
```

### <i class="fas fa-exclamation"></i> !important

```css
p {
  color: blue !important; /* 모든 우선순위를 무시하고 강제 적용 */
}
```

**!important의 위험성:**
- 우선순위 체계를 무너뜨립니다.
- 디버깅을 어렵게 만듭니다.
- !important를 덮어쓰려면 또 다른 !important가 필요합니다.
- CSS 설계가 잘못되었다는 신호입니다.

:::warning
<i class="fas fa-ban"></i> **안티 패턴**

```css
/* ❌ 나쁜 예 */
#main .header .nav .menu .item {
  color: blue;
}

.item {
  color: red !important;
}
```

```css
/* ✅ 좋은 예 */
.nav-item {
  color: blue;
}

.nav-item--active {
  color: red;
}
```

**원칙:**
- 아이디는 JavaScript용으로만 사용
- 선택자는 3단계 이내로 유지
- !important는 최후의 수단 (override 라이브러리 스타일 등)
- 클래스 기반 설계 유지
:::

---

## <i class="fas fa-sitemap"></i> 결합 선택자

결합 선택자는 "구조 관계"를 기준으로 요소를 선택합니다.
단순히 태그를 고르는 것이 아니라, **HTML 계층 구조를 해석해서 선택**하는 방식입니다.

### <i class="fas fa-project-diagram"></i> 자손 선택자 (공백)

```css
div p {
  color: red;
}
```

**의미:**
- div 안에 있는 **모든 p** (깊이 제한 없음)
- 손자, 증손자까지 모두 포함

```html
<div>
  <p>선택됨</p>
  <section>
    <p>이것도 선택됨</p>
    <article>
      <p>이것도 선택됨</p>
    </article>
  </section>
</div>
```

**실무 예제:**

```css
.article p {
  line-height: 1.8;
  margin-bottom: 1rem;
}

.sidebar a {
  display: block;
  padding: 0.5rem 1rem;
}
```

:::tip
<i class="fas fa-lightbulb"></i> **언제 사용하나요?**

- 특정 영역 내부 전체에 타이포그래피 적용
- 컴포넌트 내부 모든 링크 스타일링
- 컨테이너 내부 전체 요소 제어

**주의:** 범위가 넓어서 의도치 않은 곳까지 스타일이 적용될 수 있습니다.
:::

---

### <i class="fas fa-level-down-alt"></i> 자식 선택자 (>)

```css
div > p {
  color: green;
}
```

**의미:**
- div의 **직계 자식 p만** 선택
- 한 단계 아래까지만 적용

```html
<div>
  <p>선택됨</p>
  <section>
    <p>선택 안됨</p>
  </section>
</div>
```

**실무 예제:**

```css
.menu > li {
  display: inline-block;
}

.container > .section {
  margin-bottom: 2rem;
}

.card > h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
```

:::tip
<i class="fas fa-shield-alt"></i> **안정성**

자손 선택자보다 안전합니다!

```css
/* ❌ 위험: 모든 하위 li에 적용 */
.menu li {
  display: inline-block;
}

/* ✅ 안전: 바로 아래 li만 적용 */
.menu > li {
  display: inline-block;
}
```

:::

---

### <i class="fas fa-arrow-right"></i> 인접 형제 선택자 (+)

```css
h2 + p {
  color: orange;
  font-size: 1.1em;
}
```

**의미:**
- h2 **바로 다음**에 오는 p **하나만** 선택
- 중간에 다른 요소가 있으면 적용 안됨

```html
<h2>제목</h2>
<p>선택됨 (리드 문장)</p>
<p>선택 안됨</p>

<h2>제목</h2>
<div></div>
<p>선택 안됨 (중간에 div가 끼어 있음)</p>
```

**실무 활용:**

```css
/* 제목 바로 아래 리드 문장 강조 */
h2 + p {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 2rem;
}

/* 라벨 바로 다음 input */
label + input {
  margin-top: 0.5rem;
}

/* 체크박스 체크 시 라벨 스타일 */
input[type="checkbox"]:checked + label {
  font-weight: bold;
  color: #0071e3;
}
```

:::tip
<i class="fas fa-magic"></i> **CSS만으로 토글 만들기**

```html
<input type="checkbox" id="toggle" class="toggle-input">
<label for="toggle" class="toggle-label">메뉴 열기</label>
<div class="toggle-content">숨겨진 내용</div>
```

```css
.toggle-input {
  display: none;
}

.toggle-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s;
}

.toggle-input:checked + .toggle-label {
  color: blue;
}

.toggle-input:checked ~ .toggle-content {
  max-height: 500px;
}
```

:::

---

### <i class="fas fa-arrows-alt-h"></i> 일반 형제 선택자 (~)

```css
h2 ~ p {
  color: purple;
}
```

**의미:**
- h2 **뒤에 오는** 모든 p 선택
- 같은 부모 아래에 있어야 함

```html
<h2>제목</h2>
<p>선택됨</p>
<p>선택됨</p>
<div></div>
<p>선택됨</p>

<section>
  <p>선택 안됨 (다른 부모)</p>
</section>
```

**실무 활용:**

```css
/* 제목 이후 모든 문단 */
h2 ~ p {
  text-indent: 1em;
}

/* 체크 후 모든 형제 요소 */
input:checked ~ .option {
  opacity: 0.5;
}
```

:::tip
<i class="fas fa-code"></i> **+ vs ~**

| 선택자 | 선택 범위 | 사용 시기 |
|--------|----------|----------|
| `+` | 바로 다음 하나 | 특정 요소 바로 다음만 스타일링 |
| `~` | 뒤에 있는 전체 | 특정 요소 이후 모든 형제 스타일링 |

:::

---

## <i class="fas fa-code-compare"></i> 결합 선택자 실전 비교

```html
<div class="wrap">
  <h2>제목</h2>
  <p>문단1</p>
  <p>문단2</p>
  <section>
    <p>문단3</p>
  </section>
</div>
```

### <i class="fas fa-table"></i> 선택 결과 비교

| 선택자 | 설명 | 문단1 | 문단2 | 문단3 |
|--------|------|-------|-------|-------|
| `.wrap p` | 후손 전체 | ✅ | ✅ | ✅ |
| `.wrap > p` | 직계 자식만 | ✅ | ✅ | ❌ |
| `h2 + p` | 바로 다음 하나 | ✅ | ❌ | ❌ |
| `h2 ~ p` | 뒤에 오는 형제 | ✅ | ✅ | ❌ |

### <i class="fas fa-lightbulb"></i> 점수와 범위

```css
p { }            /* 1점, 모든 p */
.wrap p { }      /* 11점, .wrap 내부 모든 p */
.wrap > p { }    /* 11점, .wrap 직계 자식 p만 */
```

**중요:** `.wrap p`와 `.wrap > p`는 **점수는 같지만 범위가 다릅니다!**

---

## <i class="fas fa-gem"></i> 결합 선택자의 본질

:::info
<i class="fas fa-brain"></i> **핵심 개념**

결합 선택자는 태그를 고르는 기술이 아니라
**요소 사이의 관계를 읽는 방식**입니다.
:::

### <i class="fas fa-arrows-alt"></i> 공백 - "전체를 본다"

```css
.container p { }
```

- 부모 아래 존재하는 모든 후손을 선택
- 범위가 넓고 영향력이 큼
- **전역 타이포그래피**에 적합

---

### <i class="fas fa-level-down-alt"></i> `>` - "한 단계만 본다"

```css
.container > p { }
```

- 직접 연결된 자식만 선택
- 관계를 명확히 제한
- **컴포넌트 설계**에 적합

---

### <i class="fas fa-arrow-right"></i> `+` - "바로 다음 하나"

```css
h2 + p { }
```

- 순서 기반 선택
- 단일 제어
- **특정 패턴**에 적합

---

### <i class="fas fa-arrows-alt-h"></i> `~` - "뒤쪽을 묶는다"

```css
h2 ~ p { }
```

- 이후 형제 그룹 선택
- 범위 제어
- **그룹 스타일링**에 적합

---

### <i class="fas fa-question-circle"></i> 핵심 질문

**어떤 선택자를 써야 할까?**

- <i class="fas fa-check"></i> **전체를 볼 것인가?** → 공백 (` `)
- <i class="fas fa-check"></i> **한 단계만 볼 것인가?** → `>`
- <i class="fas fa-check"></i> **하나만 제어할 것인가?** → `+`
- <i class="fas fa-check"></i> **뒤쪽을 묶을 것인가?** → `~`

:::tip
<i class="fas fa-star"></i> **결론**

CSS는 속성보다 먼저
**구조를 어떻게 해석할지 결정하는 언어**입니다.

결합 선택자를 잘 쓴다는 것은
CSS를 잘 안다는 뜻이 아니라,
**HTML 구조를 설계할 줄 안다는 뜻**입니다.

:::

---

## <i class="fas fa-filter"></i> 속성 선택자

HTML 속성을 기준으로 요소를 선택합니다.

### <i class="fas fa-equals"></i> 기본 문법

```css
/* 특정 속성이 있는 요소 */
[type] {
  border: 1px solid #ccc;
}

/* 특정 속성 값을 가진 요소 */
[type="text"] {
  border-color: blue;
}

/* 특정 값으로 시작하는 요소 */
[class^="btn-"] {
  padding: 10px 20px;
}

/* 특정 값으로 끝나는 요소 */
[src$=".png"] {
  image-rendering: crisp-edges;
}

/* 특정 값을 포함하는 요소 */
[href*="google"] {
  color: #4285f4;
}

/* 공백으로 구분된 값 중 하나 */
[class~="active"] {
  font-weight: bold;
}
```

### <i class="fas fa-code"></i> 실무 예제

```css
/* 폼 요소 스타일링 */
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
}

input[type="submit"],
input[type="button"] {
  cursor: pointer;
  background: #0071e3;
  color: white;
  border: none;
}

/* 외부 링크 표시 */
a[target="_blank"]::after {
  content: " ↗";
  font-size: 0.8em;
}

a[href^="http"]::before {
  content: "🔗 ";
}

/* 필수 입력 필드 */
input[required] {
  border-left: 3px solid #f00;
}

/* disabled 상태 */
input[disabled] {
  background: #f5f5f5;
  cursor: not-allowed;
}
```

:::tip
<i class="fas fa-lightbulb"></i> **속성 선택자 패턴**

| 선택자 | 의미 | 예시 |
|--------|------|------|
| `[attr]` | 속성 존재 | `[disabled]` |
| `[attr="value"]` | 정확히 일치 | `[type="text"]` |
| `[attr^="value"]` | ~로 시작 | `[class^="btn-"]` |
| `[attr$="value"]` | ~로 끝남 | `[src$=".jpg"]` |
| `[attr*="value"]` | ~를 포함 | `[href*="google"]` |
| `[attr~="value"]` | 공백 분리 단어 | `[class~="active"]` |
| `[attr\|="value"]` | 하이픈 분리 | `[lang\|="en"]` |

:::

---

## <i class="fas fa-hand-pointer"></i> 가상 클래스 (Pseudo-class)

요소의 **상태**에 따라 선택합니다.

### <i class="fas fa-mouse-pointer"></i> 사용자 동작

```css
/* 마우스 호버 */
button:hover {
  background: #005bb5;
  transform: translateY(-2px);
}

/* 포커스 */
input:focus {
  outline: 2px solid #0071e3;
  outline-offset: 2px;
}

/* 활성화 (클릭 중) */
button:active {
  transform: translateY(0);
}
```

### <i class="fas fa-check-square"></i> 폼 상태

```css
/* 체크된 상태 */
input[type="checkbox"]:checked {
  accent-color: #0071e3;
}

/* 비활성화 */
input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 유효성 검사 */
input:valid {
  border-color: green;
}

input:invalid {
  border-color: red;
}

/* 필수 필드 */
input:required::after {
  content: " *";
  color: red;
}
```

### <i class="fas fa-list-ol"></i> 구조 선택

```css
/* 첫 번째 자식 */
li:first-child {
  margin-top: 0;
}

/* 마지막 자식 */
li:last-child {
  margin-bottom: 0;
}

/* n번째 자식 */
li:nth-child(2) {
  color: red;
}

/* 홀수 번째 */
tr:nth-child(odd) {
  background: #f5f5f5;
}

/* 짝수 번째 */
tr:nth-child(even) {
  background: white;
}

/* 3의 배수 */
li:nth-child(3n) {
  font-weight: bold;
}

/* 뒤에서 n번째 */
li:nth-last-child(2) {
  color: orange;
}
```

### <i class="fas fa-link"></i> 링크 상태

```css
/* 방문 전 */
a:link {
  color: #0071e3;
}

/* 방문 후 */
a:visited {
  color: #551a8b;
}

/* 현재 활성 링크 */
a:active {
  color: #c00;
}
```

### <i class="fas fa-ban"></i> 부정 선택

```css
/* p가 아닌 요소 */
:not(p) {
  margin: 0;
}

/* .special 클래스가 없는 li */
li:not(.special) {
  opacity: 0.7;
}

/* 비어있지 않은 요소만 */
div:not(:empty) {
  padding: 20px;
}
```

### <i class="fas fa-code"></i> 실전 활용

```css
/* 카드 호버 효과 */
.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* 테이블 행 호버 */
tbody tr:hover {
  background: #f0f7ff;
}

/* 메뉴 활성 상태 */
.nav-link.active,
.nav-link:hover {
  color: #0071e3;
  border-bottom: 2px solid #0071e3;
}

/* 토글 스위치 */
.toggle:checked + .slider {
  background: #0071e3;
}

.toggle:checked + .slider::before {
  transform: translateX(20px);
}
```

:::tip
<i class="fas fa-magic"></i> **가상 클래스로 인터랙션 만들기**

HTML 구조를 바꾸지 않고 상태 기반으로 스타일을 제어할 수 있습니다!

```css
/* Accordion (아코디언) */
.accordion-input:checked ~ .accordion-content {
  max-height: 500px;
}

/* Tabs (탭) */
.tab-input:checked + .tab-label {
  background: white;
  border-bottom-color: white;
}

/* Dropdown (드롭다운) */
.dropdown:hover .dropdown-menu {
  display: block;
}
```

:::

---

## <i class="fas fa-magic"></i> 가상 요소 (Pseudo-element)

HTML에 **실제로 존재하지 않는** 요소를 CSS로 생성합니다.

### <i class="fas fa-plus"></i> 기본 사용법

```css
/* 앞에 추가 */
h2::before {
  content: "★ ";
  color: gold;
}

/* 뒤에 추가 */
h2::after {
  content: " ✓";
  color: green;
}

/* 첫 글자 */
p::first-letter {
  font-size: 2em;
  font-weight: bold;
  float: left;
  margin-right: 5px;
}

/* 첫 줄 */
p::first-line {
  font-weight: bold;
  color: #333;
}

/* 선택된 텍스트 */
::selection {
  background: #0071e3;
  color: white;
}
```

### <i class="fas fa-palette"></i> 실무 활용

**아이콘 추가:**

```css
/* 외부 링크 아이콘 */
a[href^="http"]::after {
  content: " ↗";
  font-size: 0.8em;
  vertical-align: super;
}

/* PDF 링크 아이콘 */
a[href$=".pdf"]::before {
  content: "📄 ";
}

/* 필수 입력 표시 */
label[for]:required::after {
  content: " *";
  color: red;
}
```

**장식 요소:**

```css
/* 구분선 */
h2::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 1.2em;
  background: #0071e3;
  margin-right: 10px;
  vertical-align: middle;
}

/* 인용 부호 */
blockquote::before {
  content: """;
  font-size: 4em;
  color: #ccc;
  line-height: 0.1em;
  margin-right: 0.2em;
  vertical-align: -0.4em;
}

blockquote::after {
  content: """;
  font-size: 4em;
  color: #ccc;
}
```

**도형 생성:**

```css
/* 말풍선 꼬리 */
.tooltip::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid black;
}

/* 체크 마크 */
.checked::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 5px;
  border-left: 2px solid #0071e3;
  border-bottom: 2px solid #0071e3;
  transform: rotate(-45deg);
  margin-right: 5px;
}
```

**클리어픽스 (레이아웃):**

```css
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

:::warning
<i class="fas fa-exclamation-triangle"></i> **주의사항**

- `content` 속성이 **필수**입니다 (빈 문자열이라도 필요).
- `<img>`, `<input>` 같은 대체 요소에는 사용할 수 없습니다.
- 가상 요소는 DOM에 존재하지 않아 JavaScript로 접근할 수 없습니다.
- 접근성 도구(스크린 리더)에서 읽히지 않으므로 중요한 내용은 넣지 마세요.

```css
/* ❌ 나쁜 예 */
button::after {
  content: "클릭하세요"; /* 스크린 리더가 읽지 못함 */
}

/* ✅ 좋은 예 */
button::after {
  content: ""; /* 장식용 */
  /* ... 아이콘이나 도형 */
}
```

:::

---

## <i class="fas fa-rocket"></i> 실전 예제

### <i class="fas fa-newspaper"></i> 블로그 카드 컴포넌트

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS 선택자 실전</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Pretendard', -apple-system, sans-serif;
      background: #f5f5f5;
      padding: 40px 20px;
    }

    /* 컨테이너 */
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    /* 카드 그리드 */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px;
    }

    /* 카드 */
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

    /* 카드 이미지 */
    .card > img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    /* 카드 내용 */
    .card-content {
      padding: 20px;
    }

    /* 카드 제목 */
    .card-content > h3 {
      font-size: 1.25rem;
      margin-bottom: 12px;
      color: #333;
    }

    /* 카드 제목 앞 아이콘 */
    .card-content > h3::before {
      content: "📌 ";
    }

    /* 카드 설명 */
    .card-content > p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 16px;
    }

    /* 카드 첫 문장 강조 */
    .card-content > p::first-line {
      font-weight: 600;
      color: #333;
    }

    /* 카드 태그 */
    .card-tags {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .card-tags > span {
      background: #e3f2fd;
      color: #1976d2;
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 0.875rem;
    }

    /* 첫 번째 태그 강조 */
    .card-tags > span:first-child {
      background: #1976d2;
      color: white;
    }

    /* Featured 카드 */
    .card[data-featured="true"] {
      border: 2px solid #0071e3;
    }

    .card[data-featured="true"]::before {
      content: "⭐ Featured";
      display: block;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 8px 20px;
      font-weight: bold;
      font-size: 0.875rem;
    }

    /* 링크 */
    .card a {
      color: #0071e3;
      text-decoration: none;
      font-weight: 500;
    }

    .card a:hover {
      text-decoration: underline;
    }

    /* 외부 링크 아이콘 */
    .card a[href^="http"]::after {
      content: " ↗";
      font-size: 0.75em;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 style="margin-bottom: 30px; text-align: center;">CSS 선택자 마스터하기</h1>

    <div class="card-grid">
      <!-- Featured 카드 -->
      <article class="card" data-featured="true">
        <img src="https://via.placeholder.com/300x200/667eea/ffffff?text=Featured" alt="Featured">
        <div class="card-content">
          <h3>CSS 선택자 완벽 가이드</h3>
          <p>CSS 선택자의 모든 것을 배워보세요. 기본부터 고급 기술까지 단계별로 학습합니다.</p>
          <div class="card-tags">
            <span>필수</span>
            <span>CSS</span>
            <span>초급</span>
          </div>
          <p style="margin-top: 12px;">
            <a href="https://example.com/guide">자세히 보기</a>
          </p>
        </div>
      </article>

      <!-- 일반 카드들 -->
      <article class="card">
        <img src="https://via.placeholder.com/300x200/42a5f5/ffffff?text=Selectors" alt="Selectors">
        <div class="card-content">
          <h3>기본 선택자</h3>
          <p>태그, 클래스, 아이디 선택자를 활용한 기본적인 스타일링 방법을 배웁니다.</p>
          <div class="card-tags">
            <span>기초</span>
            <span>필수</span>
          </div>
        </div>
      </article>

      <article class="card">
        <img src="https://via.placeholder.com/300x200/66bb6a/ffffff?text=Combinators" alt="Combinators">
        <div class="card-content">
          <h3>결합 선택자</h3>
          <p>HTML 구조를 읽는 방법. 자손, 자식, 형제 선택자의 차이를 명확히 이해합니다.</p>
          <div class="card-tags">
            <span>중급</span>
            <span>구조</span>
          </div>
        </div>
      </article>

      <article class="card">
        <img src="https://via.placeholder.com/300x200/ffa726/ffffff?text=Pseudo" alt="Pseudo">
        <div class="card-content">
          <h3>가상 클래스 & 요소</h3>
          <p>상태 기반 스타일링과 가상 요소를 활용한 고급 디자인 테크닉.</p>
          <div class="card-tags">
            <span>고급</span>
            <span>인터랙션</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</body>
</html>
```

---

## <i class="fas fa-brain"></i> 선택자의 본질

CSS 선택자는 디자인 문법이 아니라
**HTML 구조를 해석하는 규칙 언어**입니다.

### <i class="fas fa-question-circle"></i> 선택자 설계 3대 질문

1. **어떤 구조를 선택할 것인가?**
   - 전체? 일부? 특정 위치?

2. **어떤 상태를 선택할 것인가?**
   - 호버? 클릭? 체크?

3. **우선순위를 어떻게 설계할 것인가?**
   - 낮게 유지? 특정 부분만 높게?

:::tip
<i class="fas fa-star"></i> **CSS 실력의 척도**

CSS의 실력은 **"속성을 얼마나 많이 아는가"** 가 아니라
**"선택자를 얼마나 잘 설계하는가"** 입니다.

좋은 선택자 설계는:
- 유지보수가 쉽고
- 우선순위가 낮으며
- 재사용이 가능하고
- 의도가 명확합니다
:::

---

## <i class="fas fa-graduation-cap"></i> 학습 정리

### <i class="fas fa-check-double"></i> 핵심 개념

- ✅ **기본 선택자**: 태그, 클래스, 아이디, 전체
- ✅ **우선순위**: 점수 체계 이해 (1, 10, 100, 1000)
- ✅ **결합 선택자**: 공백, >, +, ~
- ✅ **속성 선택자**: [attr], [attr="value"], [attr^="value"]
- ✅ **가상 클래스**: :hover, :focus, :nth-child()
- ✅ **가상 요소**: ::before, ::after, ::first-letter

### <i class="fas fa-lightbulb"></i> 실무 원칙

1. **클래스 중심 설계** - 아이디는 JavaScript용
2. **낮은 우선순위 유지** - 3단계 이내
3. **의미있는 이름** - BEM, OOCSS 방법론
4. **!important 지양** - 설계 개선으로 해결
5. **가상 요소 활용** - HTML 간결하게 유지


