# <i class="fas fa-code"></i> HTML 기초

:::info
<i class="fas fa-info-circle"></i> **HTML이란?**

**HTML**(HyperText Markup Language)은 웹 페이지의 구조를 만드는 마크업 언어입니다.
웹 개발의 가장 기본이 되는 언어로, 콘텐츠의 의미와 구조를 정의합니다.
:::

---

## <i class="fas fa-file-code"></i> HTML 문서 구조

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>페이지 제목</title>
</head>
<body>
  <!-- 내용이 여기에 들어갑니다 -->
</body>
</html>
```

**구성 요소:**
- `<!DOCTYPE html>` - HTML5 문서 선언
- `<html>` - 문서의 루트 요소
- `<head>` - 메타데이터 영역
- `<body>` - 실제 콘텐츠 영역

---

## <i class="fas fa-heading"></i> 기본 태그

### <i class="fas fa-text-height"></i> 제목 태그

```html
<h1>가장 중요한 제목</h1>
<h2>두 번째 제목</h2>
<h3>세 번째 제목</h3>
<h4>네 번째 제목</h4>
<h5>다섯 번째 제목</h5>
<h6>여섯 번째 제목</h6>
```

:::tip
<i class="fas fa-lightbulb"></i> **제목 태그 사용 원칙**

- 페이지당 `<h1>`은 하나만 사용
- 순서대로 사용 (h1 → h2 → h3)
- SEO와 접근성에 중요!
:::

---

### <i class="fas fa-paragraph"></i> 텍스트 태그

```html
<!-- 문단 -->
<p>이것은 문단입니다.</p>

<!-- 줄바꿈 -->
<br>

<!-- 수평선 -->
<hr>

<!-- 강조 -->
<strong>굵은 텍스트 (중요)</strong>
<b>굵은 텍스트 (스타일)</b>

<em>기울임 텍스트 (강조)</em>
<i>기울임 텍스트 (스타일)</i>

<!-- 기타 -->
<mark>형광펜 효과</mark>
<small>작은 텍스트</small>
<del>삭제된 텍스트</del>
<ins>삽입된 텍스트</ins>
```

---

### <i class="fas fa-link"></i> 링크와 이미지

```html
<!-- 링크 -->
<a href="https://example.com">외부 링크</a>
<a href="/page.html">내부 링크</a>
<a href="#section">페이지 내 이동</a>
<a href="mailto:email@example.com">이메일</a>
<a href="tel:010-1234-5678">전화</a>

<!-- 새 창에서 열기 -->
<a href="https://example.com" target="_blank">새 창</a>

<!-- 이미지 -->
<img src="image.jpg" alt="이미지 설명">
<img src="image.jpg" alt="이미지" width="300" height="200">
```

:::warning
<i class="fas fa-exclamation-triangle"></i> **이미지 alt 속성 필수!**

- 이미지가 로드되지 않을 때 표시
- 스크린 리더가 읽음 (접근성)
- SEO에 도움
:::

---

### <i class="fas fa-list"></i> 리스트

```html
<!-- 순서 없는 리스트 -->
<ul>
  <li>항목 1</li>
  <li>항목 2</li>
  <li>항목 3</li>
</ul>

<!-- 순서 있는 리스트 -->
<ol>
  <li>첫 번째</li>
  <li>두 번째</li>
  <li>세 번째</li>
</ol>

<!-- 정의 리스트 -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

---

## <i class="fas fa-cube"></i> 컨테이너 태그

```html
<!-- 블록 컨테이너 (의미 없음) -->
<div>
  <p>내용</p>
</div>

<!-- 인라인 컨테이너 (의미 없음) -->
<span>텍스트</span>
```

:::tip
<i class="fas fa-code"></i> **div vs span**

| 태그 | 타입 | 용도 |
|------|------|------|
| `<div>` | Block | 큰 영역 그룹화 |
| `<span>` | Inline | 텍스트 일부 스타일링 |
:::

---

## <i class="fas fa-check-circle"></i> 실전 예제

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML 기초 예제</title>
</head>
<body>
  <h1>내 첫 웹페이지</h1>

  <p>안녕하세요! <strong>HTML</strong>을 배우고 있습니다.</p>

  <h2>배우고 있는 것들</h2>
  <ul>
    <li>HTML 태그</li>
    <li>문서 구조</li>
    <li>시맨틱 태그</li>
  </ul>

  <h2>유용한 링크</h2>
  <p>
    <a href="https://developer.mozilla.org" target="_blank">MDN 문서</a>
  </p>

  <hr>

  <p><small>© 2024 My Website</small></p>
</body>
</html>
```

---

## <i class="fas fa-brain"></i> 핵심 정리

1. **문서 구조**: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
2. **제목**: `<h1>` ~ `<h6>` (순서대로 사용)
3. **텍스트**: `<p>`, `<strong>`, `<em>`
4. **링크**: `<a href="">`, `target="_blank"`
5. **이미지**: `<img src="" alt="">` (alt 필수!)
6. **리스트**: `<ul>`, `<ol>`, `<li>`
7. **컨테이너**: `<div>` (block), `<span>` (inline)

---

## <i class="fas fa-arrow-right"></i> 다음 단계

- **[시맨틱 태그](semantic)** - 의미 있는 HTML
- **[폼](forms)** - 사용자 입력
- **[테이블](tables)** - 표 만들기
