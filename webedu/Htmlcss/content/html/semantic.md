# <i class="fas fa-code"></i> 시맨틱 태그

:::info
<i class="fas fa-info-circle"></i> <strong>시맨틱 태그란?</strong>

의미(Semantic)를 가지는 HTML 태그입니다.  
구조만 나누는 것이 아니라, 해당 영역의 역할을 명확하게 정의합니다.
:::

## <i class="fas fa-book"></i> 시맨틱 태그를 쓰는 이유

### <i class="fa-solid fa-circle-dot"></i> SEO (검색 엔진 최적화)

- **구조 인식:** 검색 엔진은 `<main>`, `<article>`, `<nav>` 같은 태그를 통해 페이지 구조를 파악합니다.
- **핵심 콘텐츠 식별:** `<main>`과 `<article>` 안의 콘텐츠를 중심 내용으로 인식합니다.
- **부가 콘텐츠 분리:** `<aside>`, `<footer>` 영역은 보조 정보로 판단합니다.
- **검색 결과 품질 향상:** 의미 있는 구조는 검색 결과 노출 품질을 높입니다.
- **크롤링 효율:** 불필요한 영역을 제외하고 핵심 영역을 우선 수집합니다.

:::tip
<i class="fas fa-lightbulb"></i> SEO 핵심

<ul>
  <li>div로만 구성된 페이지보다 의미 있는 태그가 있는 페이지가 구조 해석에 유리합니다.</li>
  <li>검색 엔진은 단순 디자인이 아니라 “정보 구조”를 분석합니다.</li>
</ul>
:::


### <i class="fa-solid fa-circle-dot"></i> 접근성 (Accessibility)

- **랜드마크 역할:** `<header>`, `<nav>`, `<main>`은 스크린 리더에서 이동 가능한 구조로 인식됩니다.
- **빠른 탐색:** 사용자는 “메인 영역으로 이동”, “네비게이션으로 이동” 같은 기능을 사용할 수 있습니다.
- **보조 기술 친화적:** 장애인 보조 기기와의 호환성이 높아집니다.
- **의미 기반 낭독:** 단순 div 구조보다 콘텐츠 의미 전달이 정확합니다.

:::warning
<i class="fas fa-exclamation-triangle"></i> 접근성 주의

<ul>
  <li>시맨틱 태그를 사용하지 않으면 스크린 리더는 단순한 박스로 인식합니다.</li>
  <li>접근성은 선택이 아니라 기본 설계 기준입니다.</li>
</ul>
:::

### <i class="fa-solid fa-circle-dot"></i> 유지보수 (Maintainability)

- **역할 중심 설계:** 클래스명이 아니라 태그 자체가 역할을 설명합니다.
- **코드 가독성 향상:** 다른 개발자가 구조를 즉시 이해할 수 있습니다.
- **협업 효율 증가:** 프론트엔드/백엔드/디자이너 간 구조 인식이 일치합니다.
- **리팩토링 안정성:** 레이아웃 변경 시 의미 구조는 유지됩니다.


### <i class="fa-solid fa-circle-dot"></i> 확장성과 구조 안정성

- **대규모 프로젝트에 적합:** 콘텐츠가 많아질수록 구조 분리가 중요해집니다.
- **컴포넌트 설계에 유리:** React, Vue 등 프레임워크에서도 의미 기반 구조가 유지됩니다.
- **정보 아키텍처 표현:** 문서의 논리 구조를 코드 레벨에서 표현합니다.


### <i class="fa-solid fa-circle-dot"></i> div 구조와 비교

#### ❌ 의미 없는 구조

```html
<div class="header"></div>
<div class="menu"></div>
<div class="content"></div>
<div class="sidebar"></div>
<div class="footer"></div>
```

#### ✅ 의미 있는 구조

```html
<header></header>
<nav></nav>
<main></main>
<aside></aside>
<footer></footer>
```

### <i class="fa-solid fa-circle-dot"></i> 정리

- 시맨틱 태그는 단순한 “문법”이 아니라 **설계 방식**입니다.
- HTML은 디자인 도구가 아니라 **정보 구조를 정의하는 언어**입니다.
- 잘 설계된 구조는 SEO, 접근성, 유지보수, 확장성 모두에 영향을 줍니다.

---

## <i class="fas fa-layer-group"></i> 주요 시맨틱 태그

### `<header>` - 상단(머리말) 영역

```html
<header>
  <h1>My Website</h1>
  <p>웹 개발 학습 공간</p>
</header>
```

- 페이지 전체의 머리말이 될 수도 있고
- `article` 내부의 글 머리말이 될 수도 있습니다.
- 로고, 제목, 설명, 검색창 등이 들어갈 수 있습니다.

:::tip
<i class="fas fa-lightbulb"></i> 구조 이해

<ul>
  <li>페이지 최상단 header는 “사이트 정체성”을 나타냅니다.</li>
  <li>article 내부 header는 “글 정보”를 나타냅니다.</li>
</ul>
:::


### `<nav>` - 주요 탐색 메뉴

```html
<nav>
  <ul>
    <li><a href="#home">홈</a></li>
    <li><a href="#posts">글</a></li>
    <li><a href="#contact">문의</a></li>
  </ul>
</nav>
```

- 사이트의 주요 이동 경로를 정의합니다.
- 보통 상단 메뉴, 사이드 카테고리 메뉴에 사용합니다.

:::warning
<i class="fas fa-exclamation-triangle"></i> <strong>주의</strong>

<ul>
  <li>모든 링크를 nav에 넣지 않습니다.</li>
  <li>푸터의 저작권 링크는 nav가 아닙니다.</li>
  <li>단순 버튼 그룹도 nav가 아닙니다.</li>
</ul>
:::


### `<main>` - 핵심 본문 영역

```html
<main>
  <h2>오늘의 강의</h2>
  <p>이 영역은 페이지의 핵심 콘텐츠입니다.</p>
</main>
```

- 검색 엔진이 가장 중요하게 인식하는 영역입니다.
- 사용자가 이 페이지에 방문한 “주 목적” 콘텐츠가 들어갑니다.

:::warning
<i class="fas fa-exclamation-triangle"></i> <strong>규칙</strong>

<ul>
  <li>main은 한 페이지에 하나만 사용합니다.</li>
  <li>header, footer, nav는 main 밖에 두는 것이 일반적입니다.</li>
</ul>
:::


### `<section>` - 주제 단위 묶음

```html
<section>
  <h2>HTML 기초</h2>
  <p>HTML은 웹의 구조를 정의하는 언어입니다.</p>
</section>
```

- 하나의 “주제(Topic)”를 구성할 때 사용합니다.
- 문서의 목차 단위라고 생각하면 이해가 쉽습니다.

:::tip
<i class="fas fa-lightbulb"></i> <strong>사용 기준</strong>

<ul>
  <li>section은 의미 있는 주제 단위일 때 사용합니다.</li>
  <li>보통 제목(h2~h6)을 포함합니다.</li>
  <li>단순 레이아웃용 묶음이라면 div를 사용합니다.</li>
</ul>
:::


### `<article>` - 독립 콘텐츠

```html
<article>
  <h3>시맨틱 태그 정리</h3>
  <p>이 콘텐츠는 단독으로 배포되어도 의미가 성립합니다.</p>
  <footer>작성일: 2026-02-13</footer>
</article>
```

- 블로그 글
- 뉴스 기사
- 게시판 글
- 카드형 콘텐츠

:::tip
<i class="fas fa-check-circle"></i> 구분 기준

<ul>
  <li>이 콘텐츠를 RSS로 배포해도 성립하는가?</li>
  <li>이 블록만 따로 공유해도 의미가 유지되는가?</li>
</ul>

→ 그렇다면 article입니다.
:::


### `<aside>` - 보조 콘텐츠

```html
<aside>
  <h3>관련 글</h3>
  <ul>
    <li><a href="#">CSS 기초</a></li>
    <li><a href="#">JavaScript 입문</a></li>
  </ul>
</aside>
```

- 메인 콘텐츠를 보조하는 영역입니다.
- 광고, 프로필, 추천 글, 태그 목록 등이 들어갑니다.

:::tip
<i class="fas fa-lightbulb"></i> 구조 이해

<ul>
  <li>aside는 main과 같은 레벨에 있을 수도 있고</li>
  <li>article 내부에 들어갈 수도 있습니다.</li>
</ul>
:::


### `<footer>` - 하단 정보 영역

```html
<footer>
  <p>© 2026 My Website</p>
  <p>이메일: info@example.com</p>
</footer>
```

- 페이지 전체의 마무리 정보
- 또는 article 내부의 작성 정보

:::tip
<i class="fas fa-check-circle"></i> footer 위치

<ul>
  <li>페이지 최하단 footer는 “사이트 정보”</li>
  <li>article 내부 footer는 “작성 정보”</li>
</ul>
:::

---

## 시맨틱 구조 흐름 요약 확장

```html
<header></header>
<nav></nav>
<main>
  <section>
    <article></article>
  </section>
  <aside></aside>
</main>
<footer></footer>
```

이 구조는 단순한 태그 나열이 아니라  
**사용자 인지 흐름과 동일한 정보 구조 설계 방식**입니다.

### <i class="fa-regular fa-circle-dot"></i> 정체성 (header)

- 사용자가 페이지에 들어왔을 때 가장 먼저 인식하는 영역입니다.
- 브랜드, 서비스 목적, 사이트 성격을 전달합니다.
- “이 사이트는 무엇인가?”에 대한 답입니다.


### <i class="fa-regular fa-circle-dot"></i> 이동 (nav)

- 사용자의 선택권을 제공합니다.
- 전체 정보 구조를 드러내는 지도 역할을 합니다.
- 정보 분류 체계가 노출되는 영역입니다.


### <i class="fa-regular fa-circle-dot"></i> 핵심 (main)

- 이 페이지의 존재 이유가 담긴 영역입니다.
- 사용자가 기대한 주요 콘텐츠가 위치합니다.
- 검색 엔진과 보조 기술이 가장 중요하게 인식합니다.


### <i class="fa-regular fa-circle-dot"></i> 주제 구분 (section)

- main 안에서 의미 있는 주제 단위로 콘텐츠를 분리합니다.
- 문서의 계층 구조를 형성합니다.
- 목차 개념과 유사합니다.


### <i class="fa-regular fa-circle-dot"></i> 독립 콘텐츠 (article)

- 단독으로 분리해도 의미가 유지되는 콘텐츠입니다.
- 블로그 글, 카드, 뉴스 기사 등이 해당됩니다.
- 여러 개가 반복 구조로 배치될 수 있습니다.


### <i class="fa-regular fa-circle-dot"></i> 보조 영역 (aside)

- 핵심 콘텐츠를 방해하지 않는 부가 정보입니다.
- 추천 글, 태그 목록, 광고, 작성자 정보 등이 포함됩니다.
- main과 병렬 구조로 존재합니다.


### <i class="fa-regular fa-circle-dot"></i> 종결 정보 (footer)

- 페이지의 마무리 영역입니다.
- 저작권, 연락처, 정책 링크 등 구조적 마감 역할을 합니다.


### 시맨틱 구조의 본질

시맨틱 구조는 “화면 배치 순서”가 아니라  
**의미 계층의 흐름**입니다.

- header → 존재 정의
- nav → 탐색 경로 제공
- main → 목적 수행
- section → 주제 분리
- article → 콘텐츠 단위화
- aside → 맥락 확장
- footer → 구조 종결

즉, HTML은 디자인 도구가 아니라  
**정보를 조직하는 설계 언어**입니다.
``


---

## <i class="fas fa-code"></i> 전체 시맨틱 구조 예제

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>시맨틱 태그 예제</title>
</head>
<body>

  <header>
    <h1>My Website</h1>
    <p>시맨틱 구조 연습 페이지</p>
  </header>

  <nav>
    <a href="#posts">글</a>
    <a href="#popular">인기</a>
    <a href="#contact">문의</a>
  </nav>

  <main>

    <section id="posts">
      <h2>최신 글</h2>

      <article>
        <header>
          <h3>HTML 시맨틱 태그</h3>
        </header>
        <p>시맨틱 태그는 의미를 가진 구조입니다.</p>
        <footer>
          <small>작성일: 2026-02-13</small>
        </footer>
      </article>

    </section>

    <aside id="popular">
      <h2>인기 글</h2>
      <ul>
        <li><a href="#">CSS Flexbox 정리</a></li>
        <li><a href="#">반응형 레이아웃 패턴</a></li>
      </ul>
    </aside>

    <section id="contact">
      <h2>문의</h2>
      <p>이메일: <a href="mailto:info@example.com">info@example.com</a></p>
    </section>

  </main>

  <footer>
    <p>© 2026 My Website</p>
  </footer>

</body>
</html>
```
