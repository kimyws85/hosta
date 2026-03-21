# 언어 수업자료 HTML 작성 가이드

이 프로젝트는 언어 강의 내용을 웹 페이지로 제공하는 단일 HTML 파일(`index.html`) + CSS(`css/style.css`) 구조다.
새로운 섹션·토픽·내용을 추가할 때 아래 컴포넌트 규칙을 그대로 따른다.

---

## 1. 전체 페이지 구조

```
헤더 (.header)
네비게이션 (.day-nav)
  └─ 버튼 (.day-nav__btn)   ← data-target="section-xxx" 으로 섹션 ID 지정
메인 (.main)
  └─ 섹션 (.day-section#section-xxx)
       └─ 섹션 헤더 (.day-section__header)
       └─ 토픽 (.topic) × N
            └─ 토픽 헤더 (.topic__header, onclick="toggleTopic(this)")
            └─ 토픽 바디 (.topic__body)
                 └─ 콘텐츠 블록들 (아래 2번 참고)
```

---

## 2. 컴포넌트 모음

### 2-1. 섹션 (day-section)

```html
<section class="day-section" id="section-xxx">
  <div class="day-section__header">
    <span class="day-section__badge"><i class="fa-solid fa-아이콘"></i> 섹션 제목</span>
    <span class="day-section__date">부제 or 날짜</span>
  </div>
  <!-- 토픽들 -->
</section>
```

- `id="section-xxx"` 는 nav 버튼의 `data-target` 값과 일치해야 한다.

---

### 2-2. 토픽 (topic) — 접기/펼치기 가능

```html
<div class="topic">
  <div class="topic__header" onclick="toggleTopic(this)">
    <i class="fa-solid fa-아이콘"></i>
    <span class="topic__title">토픽 제목</span>
    <i class="fa-solid fa-chevron-down topic__toggle"></i>
  </div>
  <div class="topic__body">
    <!-- 여기에 콘텐츠 블록 -->
  </div>
</div>
```

---

### 2-3. 개념 박스 (concept-box)

배경지식·정의·핵심 요약을 담는 파란 계열 박스.

```html
<div class="concept-box">
  <p><span class="keyword">용어</span> : 설명 텍스트</p>
  <p><span class="keyword">용어2</span> : 설명 텍스트</p>
</div>
```

- 강조 단어: `<span class="keyword">단어</span>` (굵게)
- 인라인 강조: `<span class="highlight">단어</span>` (파란 배경)

---

### 2-4. 코드 블록 (code-block)

다크 배경의 코드 예제 블록. 복사 버튼 자동 포함.

```html
<div class="code-block">
  <div class="code-block__header">
    <i class="fa-solid fa-file-code"></i> 블록 제목(예: printf 예제)
  </div>
  <pre>코드 내용</pre>
</div>
```

#### 구문 강조 span 클래스 (pre 안에서 사용)

| 클래스 | 색상 | 용도 |
|--------|------|------|
| `.pp` | 노란색 | 전처리 지시어 (`#include`, `#define`) |
| `.kw` | 분홍색 | 키워드 (`int`, `if`, `return`, `void` 등) |
| `.fn` | 보라색 | 함수 이름 (`printf`, `scanf`, `main` 등) |
| `.str` | 하늘색 | 문자열·문자 리터럴 (`"hello"`, `'A'`) |
| `.num` | 청록색 | 숫자 리터럴 (`0`, `3.14`, `10`) |
| `.cm` | 회색 이탤릭 | 주석 (`// ...`, `/* ... */`) |

**예시:**

```html
<pre><span class="pp">#include</span> <span class="str">&lt;stdio.h&gt;</span>

<span class="kw">int</span> <span class="fn">main</span>(<span class="kw">void</span>) {
    <span class="fn">printf</span>(<span class="str">"hello\n"</span>);
    <span class="kw">return</span> <span class="num">0</span>;
}</pre>
```

- HTML 특수문자 처리: `<` → `&lt;`, `>` → `&gt;`, `&` → `&amp;`, `→` → `&rarr;`

---

### 2-5. 실행 결과 블록 (output-block)

녹색 계열 박스. 코드 블록 바로 아래에 붙인다.

```html
<div class="output-block">
  <div class="output-block__label">실행 결과</div>출력 내용 (줄바꿈 그대로)
</div>
```

---

### 2-6. 소제목 (sub-title)

토픽 바디 내 세부 항목을 구분하는 인라인 타이틀.

```html
<p class="sub-title"><i class="fa-solid fa-circle"></i> 소제목 텍스트</p>
```

---

### 2-7. 테이블 (data-table)

```html
<div class="table-wrap">
  <table class="data-table">
    <thead>
      <tr><th>열1</th><th>열2</th></tr>
    </thead>
    <tbody>
      <tr><td><code>내용</code></td><td>설명</td></tr>
    </tbody>
  </table>
</div>
```

- 셀 안 인라인 코드: `<code>텍스트</code>`

---

### 2-8. 세팅 안내 박스 (setup-box)

초록 계열. 개발 환경 설정 등 절차 안내에 사용.

```html
<div class="setup-box">
  <div class="setup-box__title"><i class="fa-solid fa-wrench"></i> 제목</div>
  <p>설명 텍스트. <span class="highlight">강조</span></p>
  <div class="code-block">
    <pre>코드</pre>
  </div>
</div>
```

---

### 2-9. 연습문제 박스 (exercise)

**종류 3가지** — 클래스만 다르고 내부 구조는 동일.

| 종류 | 클래스 | 색상 | 용도 |
|------|--------|------|------|
| 기본 연습문제 | `exercise` | 노란색 | 일반 실습 |
| 응용문제 | `exercise--app exercise` | 보라색 | 심화 응용 |
| 종합문제 | `exercise--comp exercise` | 빨간색 | 전체 종합 |

```html
<!-- 기본 연습문제 -->
<div class="exercise">
  <div class="exercise__header"><i class="fa-solid fa-pen"></i> 연습문제</div>
  <div class="exercise__body">
    <div class="exercise__q">1. 문제 내용
2. 문제 내용</div>
  </div>
</div>

<!-- 응용문제 -->
<div class="exercise--app exercise">
  <div class="exercise__header"><i class="fa-solid fa-star"></i> 응용 - 제목</div>
  <div class="exercise__body">
    <div class="exercise__q">문제 내용</div>
  </div>
</div>

<!-- 종합문제 -->
<div class="exercise--comp exercise">
  <div class="exercise__header"><i class="fa-solid fa-fire"></i> 종합문제</div>
  <div class="exercise__body">
    <div class="exercise__q">문제 내용</div>
  </div>
</div>
```

- `exercise__q` 안은 줄바꿈을 그대로 쓰면 `white-space: pre-wrap` 으로 렌더링된다.

---

### 2-10. 보조 텍스트

- 일반 단락: `<p>내용</p>`
- 참고/주의 메모: `<p class="note">내용</p>` (회색 소문자)
- 인라인 강조: `<span class="highlight">강조</span>` (파란 배경 뱃지)
- 인라인 키워드: `<span class="keyword">키워드</span>` (굵게)

---

## 3. 네비게이션 버튼 추가 방법

`<nav class="day-nav" id="dayNav">` 안에 버튼 추가:

```html
<button class="day-nav__btn" data-target="section-새섹션ID">버튼 레이블</button>
```

---

## 4. 새 섹션 추가 체크리스트

1. `day-nav` 에 버튼 추가 (`data-target` 값 결정)
2. `<main>` 안에 `day-section` 추가 (`id` = 위 `data-target` 값)
3. 섹션 헤더(`day-section__header`) 작성
4. 토픽(`topic`) 추가, 각 토픽 바디에 컴포넌트 배치
5. 코드 예제는 구문 강조 span 적용
6. 연습문제는 난이도에 따라 `exercise` / `exercise--app` / `exercise--comp` 구분

---

## 5. 자주 쓰는 Font Awesome 아이콘

| 아이콘 클래스 | 용도 |
|--------------|------|
| `fa-solid fa-gear` | 설정·환경 |
| `fa-solid fa-book` | 개념·이론 |
| `fa-solid fa-file-code` | 코드 예제 |
| `fa-solid fa-terminal` | 실행·출력 |
| `fa-solid fa-pen` | 연습문제 |
| `fa-solid fa-star` | 응용문제 |
| `fa-solid fa-fire` | 종합문제 |
| `fa-solid fa-circle` | 소제목 bullet |
| `fa-solid fa-wrench` | 세팅 안내 |
| `fa-solid fa-shield-halved` | 보안·안전 |
| `fa-solid fa-memory` | 메모리 관련 |
| `fa-solid fa-database` | 자료형·데이터 |
| `fa-solid fa-code-branch` | 조건·분기 |
| `fa-solid fa-rotate` | 반복문 |
| `fa-solid fa-cubes` | 배열·구조체 |
| `fa-solid fa-location-dot` | 포인터·주소 |
| `fa-solid fa-puzzle-piece` | 함수 |
