# <i class="fas fa-code"></i> 폼(Form)

:::info
<i class="fas fa-info-circle"></i> <strong>폼(Form)이란?</strong>

사용자 입력을 받아 서버로 전송하거나, 페이지 내부에서 데이터를 처리하기 위한 HTML 구조입니다.  
로그인, 회원가입, 검색, 결제, 문의, 설문처럼 “입력 → 검증 → 제출” 흐름을 만드는 기본 단위입니다.
:::

## <i class="fas fa-book"></i> 폼의 역할과 구조

- 사용자의 입력값을 수집합니다.
- 입력값을 브라우저 단계에서 1차 검증할 수 있습니다.
- 서버로 데이터를 전송하거나(JavaScript/서버), 프론트에서 상태로 관리할 수 있습니다.

```html
<form action="/submit" method="post">
  <label for="userId">아이디</label>
  <input type="text" id="userId" name="userId">

  <button type="submit">전송</button>
</form>
```

:::tip
<i class="fas fa-lightbulb"></i> <strong>폼의 핵심 구성</strong>

<ul>
  <li><code>form</code> : 입력을 감싸는 컨테이너</li>
  <li><code>name</code> : 서버로 전송되는 키(필수 수준)</li>
  <li><code>label</code> : 접근성/사용성의 기준</li>
  <li><code>button</code> : submit/reset/button 역할 구분</li>
</ul>
:::

## <i class="fas fa-file-code"></i> `<form>` 기본 속성

### `action`

```html
<form action="/submit">
```

- 폼 데이터를 보낼 URL입니다.
- 비워두면 현재 페이지로 제출됩니다.

### `method`

```html
<form method="get">
<form method="post">
```

- `get` : URL 쿼리스트링으로 전송(검색, 필터 등)
- `post` : 요청 본문(body)으로 전송(로그인, 회원가입 등)

:::warning
<i class="fas fa-exclamation-triangle"></i> <strong>주의</strong>

<ul>
  <li>비밀번호, 개인정보, 결제 데이터는 <code>get</code>을 쓰지 않습니다.</li>
  <li>검색/필터는 <code>get</code>이 자연스럽고 공유가 쉽습니다.</li>
</ul>
:::

### `autocomplete`

```html
<form autocomplete="on">
<form autocomplete="off">
```

- 브라우저 자동완성 허용 여부입니다.

### `novalidate`

```html
<form novalidate>
```

- HTML 기본 검증을 끄고, JS 검증만 쓰고 싶을 때 사용합니다.

## <i class="fas fa-keyboard"></i> `<label>` 과 접근성

label은 폼에서 사실상 “필수 설계 요소”입니다.

```html
<label for="email">이메일</label>
<input type="email" id="email" name="email">
```

- `for` 값과 `input id` 값이 같아야 연결됩니다.
- 클릭 영역이 넓어지고, 스크린 리더가 입력 목적을 정확히 읽습니다.

:::warning
<i class="fas fa-exclamation-triangle"></i> <strong>주의</strong>

<ul>
  <li>placeholder는 label을 대체하지 않습니다.</li>
  <li>label 없는 입력은 접근성/사용성 품질이 떨어집니다.</li>
</ul>
:::

## <i class="fas fa-font"></i> 입력 태그 기본: `<input>`

### `type="text"` 기본 텍스트

```html
<input type="text" name="username" placeholder="이름 입력">
```

### `type="password"` 비밀번호

```html
<input type="password" name="password" placeholder="비밀번호">
```

### `type="email"` 이메일

```html
<input type="email" name="email" placeholder="email@example.com">
```

### `type="tel"` 전화번호

```html
<input type="tel" name="tel" placeholder="010-1234-5678">
```

### `type="number"` 숫자

```html
<input type="number" name="age" min="1" max="120">
```

:::tip
<i class="fas fa-lightbulb"></i> <strong>입력 타입의 의미</strong>

<ul>
  <li>type은 단순 스타일이 아니라 입력 방식과 검증을 바꿉니다.</li>
  <li>모바일에서 키보드 레이아웃이 달라집니다(email, tel 등).</li>
</ul>
:::

## <i class="fas fa-sliders"></i> 자주 쓰는 속성들

### `name` (전송 키)

```html
<input type="text" name="userId">
```

### `value` (초기값)

```html
<input type="text" name="userId" value="hong">
```

### `placeholder` (힌트)

```html
<input type="text" placeholder="아이디를 입력하세요">
```

### `required` (필수)

```html
<input type="text" name="userId" required>
```

### `minlength` / `maxlength`

```html
<input type="text" name="userId" minlength="4" maxlength="12">
```

### `pattern` (정규식 검증)

```html
<input type="text" name="userId" pattern="[a-zA-Z0-9]{4,12}">
```

:::warning
<i class="fas fa-exclamation-triangle"></i> <strong>pattern 주의</strong>

<ul>
  <li>정규식은 사용자 경험을 망치기 쉬워서 “필요할 때만” 사용합니다.</li>
  <li>에러 메시지/가이드가 없으면 사용자는 왜 실패했는지 모릅니다.</li>
</ul>
:::

## <i class="fas fa-list-check"></i> 선택 입력: 체크박스/라디오

### 체크박스 (복수 선택)

```html
<label>
  <input type="checkbox" name="agree" value="yes">
  약관에 동의합니다
</label>
```

### 라디오 (단일 선택)

```html
<label>
  <input type="radio" name="gender" value="m">
  남성
</label>

<label>
  <input type="radio" name="gender" value="f">
  여성
</label>
```

:::tip
<i class="fas fa-lightbulb"></i> <strong>라디오 핵심</strong>

<ul>
  <li>같은 그룹은 <code>name</code>이 동일해야 단일 선택이 됩니다.</li>
</ul>
:::

## <i class="fas fa-align-left"></i> 여러 줄 입력: `<textarea>`

```html
<label for="msg">메시지</label>
<textarea id="msg" name="msg" rows="5" placeholder="문의 내용을 입력하세요"></textarea>
```

## <i class="fas fa-square-caret-down"></i> 선택 목록: `<select>`

```html
<label for="job">직업</label>
<select id="job" name="job">
  <option value="">선택하세요</option>
  <option value="student">학생</option>
  <option value="dev">개발자</option>
  <option value="designer">디자이너</option>
</select>
```

:::warning
<i class="fas fa-exclamation-triangle"></i> <strong>주의</strong>

<ul>
  <li>기본값 선택 유도는 빈 값 옵션을 두는 방식이 안전합니다.</li>
</ul>
:::

## <i class="fas fa-toggle-on"></i> 버튼: `<button>` 타입 구분

```html
<button type="submit">제출</button>
<button type="reset">초기화</button>
<button type="button">일반 버튼</button>
```

:::warning
<i class="fas fa-exclamation-triangle"></i> <strong>중요</strong>

<ul>
  <li>button은 기본이 submit이라서, 일반 버튼이면 <code>type="button"</code>을 꼭 지정합니다.</li>
</ul>
:::

## <i class="fas fa-check-circle"></i> 실전 예제: 로그인 폼

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>로그인 폼</title>
</head>
<body>

  <h1>로그인</h1>

  <form action="/login" method="post">
    <div>
      <label for="id">아이디</label>
      <input type="text" id="id" name="id" required minlength="4" maxlength="12">
    </div>

    <div>
      <label for="pw">비밀번호</label>
      <input type="password" id="pw" name="pw" required minlength="8">
    </div>

    <div>
      <label>
        <input type="checkbox" name="remember" value="1">
        로그인 상태 유지
      </label>
    </div>

    <button type="submit">로그인</button>
  </form>

</body>
</html>
```

:::tip
<i class="fas fa-graduation-cap"></i> <strong>다음 단계</strong>

<ul>
  <li>폼 검증 UX: 오류 메시지 설계, 실시간 검증</li>
  <li>fieldset/legend: 설문/옵션 그룹 구조화</li>
  <li>접근성: aria-describedby, 에러 연결 방식</li>
</ul>
:::
