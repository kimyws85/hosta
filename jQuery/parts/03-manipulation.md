# Part 3. DOM 조작

## 🎯 핵심: 요소의 내용/속성/스타일 변경하기

**DOM(Document Object Model) 조작은 웹 페이지를 동적으로 만드는 핵심 기술입니다.**

웹 페이지가 처음 로드되면 HTML 그대로 표시됩니다. 하지만 사용자가 버튼을 클릭하거나 폼에 입력하면, 페이지의 내용을 바꿔야 합니다. 이때 DOM 조작이 필요합니다.

예를 들어:
- 버튼을 클릭하면 텍스트가 "안녕하세요" → "반갑습니다"로 바뀝니다
- 체크박스를 선택하면 체크 표시가 나타납니다
- 리스트에 새로운 항목을 추가합니다
- 이미지의 주소(src)를 바꿔서 다른 이미지를 표시합니다

jQuery는 이런 DOM 조작을 Vanilla JavaScript보다 훨씬 간결하고 직관적으로 만들어줍니다.

## DOM 조작의 주요 작업

웹 개발에서 DOM을 조작할 때 주로 하는 작업은 다음과 같습니다:

1. **콘텐츠 변경** - 요소 안의 텍스트나 HTML을 바꾸기
2. **속성 변경** - 이미지의 src, 링크의 href 등을 바꾸기
3. **클래스 조작** - CSS 클래스를 추가/제거하여 스타일 변경
4. **스타일 직접 변경** - CSS 속성을 JavaScript로 직접 변경
5. **요소 추가/제거** - 새로운 요소를 만들거나 기존 요소를 삭제

jQuery는 각 작업마다 직관적인 메서드를 제공하며, **같은 메서드로 값을 가져오기도 하고 설정하기도 합니다** (파라미터 유무로 구분).

## 콘텐츠 조작

### text() - 순수 텍스트만 다루기

`text()` 메서드는 요소 안의 **순수 텍스트**만 가져오거나 설정합니다. HTML 태그는 무시하고 텍스트만 처리합니다.

**언제 사용하나요?**
- 사용자가 입력한 텍스트를 안전하게 표시할 때 (HTML 태그가 실행되지 않음)
- 제목, 레이블, 메시지 등 단순 텍스트를 바꿀 때
- XSS(크로스 사이트 스크립팅) 공격을 방지하고 싶을 때

**왜 중요한가요?**
사용자가 입력한 내용에 `<script>` 같은 태그가 있어도, `text()`를 사용하면 그대로 텍스트로 표시되어 안전합니다. 반면 `html()`을 사용하면 스크립트가 실행될 수 있습니다.

```javascript
// Vanilla JS - textContent 속성 사용
document.getElementById('myDiv').textContent = '새 텍스트';
let text = document.getElementById('myDiv').textContent;

// jQuery - text() 메서드로 간결하게
$('#myDiv').text('새 텍스트');  // 설정 (파라미터 있음)
let text = $('#myDiv').text();  // 가져오기 (파라미터 없음)

// HTML 태그는 무시됨
$('#myDiv').text('<strong>굵게</strong>');
// 결과: <strong>굵게</strong> (태그가 그대로 텍스트로 표시됨)
```

### html() - HTML 태그 포함하여 다루기

`html()` 메서드는 요소 안의 **HTML 전체**를 가져오거나 설정합니다. HTML 태그를 포함하여 처리합니다.

**언제 사용하나요?**
- 굵게, 이탤릭체, 링크 등 서식이 있는 내용을 표시할 때
- 서버에서 받은 HTML 코드를 그대로 넣을 때
- 동적으로 복잡한 HTML 구조를 만들 때

**주의사항:**
사용자 입력을 `html()`로 표시하면 XSS 공격에 취약해질 수 있습니다. 신뢰할 수 있는 HTML만 사용하세요.

```javascript
// Vanilla JS - innerHTML 속성 사용
document.getElementById('myDiv').innerHTML = '<strong>굵게</strong>';
let html = document.getElementById('myDiv').innerHTML;

// jQuery - html() 메서드로 간결하게
$('#myDiv').html('<strong>굵게</strong>');  // 설정
let html = $('#myDiv').html();  // 가져오기

// HTML 태그가 실제로 적용됨
$('#myDiv').html('<em>기울임</em> <strong>굵게</strong>');
// 결과: 기울임 굵게 (실제 HTML로 렌더링됨)
```

### val() - 폼 요소의 값 다루기

`val()` 메서드는 `<input>`, `<select>`, `<textarea>` 같은 **폼 요소의 값**을 가져오거나 설정합니다.

**언제 사용하나요?**
- 사용자가 입력한 값을 가져올 때
- 프로그램적으로 input 값을 채울 때 (예: 자동완성)
- 폼 검증(validation) 시 입력값을 확인할 때
- 폼 초기화 시 값을 비울 때

**왜 text()나 html()이 아닌 val()을 쓰나요?**
폼 요소는 `.value` 속성에 값을 저장합니다. `text()`나 `html()`로는 폼 값을 제대로 가져올 수 없습니다.

```javascript
// Vanilla JS - value 속성 사용
document.getElementById('myInput').value = '새 값';
let value = document.getElementById('myInput').value;

// jQuery - val() 메서드로 간결하게
$('#myInput').val('새 값');  // 설정
let value = $('#myInput').val();  // 가져오기

// select 요소도 동일하게 작동
$('#country').val('KR');  // <option value="KR">을 선택

// 폼 초기화 예시
$('input[type="text"]').val('');  // 모든 텍스트 input 비우기
```

### 콘텐츠 메서드 비교

각 메서드는 목적이 다릅니다. 상황에 맞게 사용하세요:

| jQuery | Vanilla JS | 용도 | 안전성 |
|--------|-----------|------|--------|
| `.text()` | `.textContent` | 순수 텍스트만 (HTML 무시) | ✅ 안전 (XSS 방지) |
| `.html()` | `.innerHTML` | HTML 태그 포함 | ⚠️ 주의 (신뢰된 HTML만) |
| `.val()` | `.value` | input/select/textarea 값 | ✅ 안전 |

**실무 팁:**
- 사용자 입력 → 항상 `.text()` 사용
- 서버에서 받은 안전한 HTML → `.html()` 사용
- 폼 데이터 → `.val()` 사용

## 속성(Attribute) 조작

HTML 요소는 다양한 속성(attribute)을 가집니다. `<img src="...">`, `<a href="...">`, `<input type="...">` 등에서 src, href, type이 속성입니다.

### attr() - HTML 속성 다루기

`attr()` 메서드는 HTML의 **속성**을 가져오거나 설정합니다. HTML 코드에서 볼 수 있는 모든 속성에 사용합니다.

**언제 사용하나요?**
- 이미지의 src를 바꿀 때
- 링크의 href를 바꿀 때
- 요소의 id, class, title, data-* 속성을 다룰 때
- 커스텀 속성을 추가하거나 가져올 때

```javascript
// Vanilla JS
let src = element.getAttribute('src');
element.setAttribute('src', 'image.jpg');

// jQuery - 더 간결
let src = $('img').attr('src');  // 가져오기
$('img').attr('src', 'image.jpg');  // 설정

// 여러 속성을 한 번에 설정 (객체 전달)
$('img').attr({
    'src': 'image.jpg',
    'alt': '이미지 설명',
    'width': '300'
});

// 링크 주소 바꾸기
$('a').attr('href', 'https://example.com');

// title 속성 추가 (마우스 오버 시 툴팁)
$('#myDiv').attr('title', '이 영역을 클릭하세요');
```

### prop() - JavaScript 프로퍼티 다루기

`prop()` 메서드는 JavaScript 객체의 **프로퍼티**를 다룹니다. HTML 속성과는 다릅니다.

**attr()과 prop()의 핵심 차이:**
- `attr()` → HTML 코드에 보이는 속성 (문자열)
- `prop()` → JavaScript 객체의 현재 상태 (boolean, number 등)

**언제 prop()을 사용하나요?**
- `checked` (체크박스, 라디오버튼)
- `disabled` (비활성화 상태)
- `selected` (select 옵션)
- `readonly` (읽기 전용)

이런 속성들은 **true/false** 값을 가지므로 `prop()`을 사용해야 합니다.

```javascript
// Vanilla JS
checkbox.checked = true;
input.disabled = false;

// jQuery
$(':checkbox').prop('checked', true);  // 체크
$(':checkbox').prop('checked', false);  // 체크 해제
$('input').prop('disabled', true);  // 비활성화
$('input').prop('disabled', false);  // 활성화

// select의 selected 옵션
$('option:first').prop('selected', true);
```

### attr() vs prop() - 언제 무엇을 사용할까?

이 차이는 많은 초보자가 헷갈려하는 부분입니다. 명확한 규칙을 알아두세요:

```html
<input type="checkbox" checked>
```

```javascript
// attr() - HTML 속성 (문자열 "checked")
$('input').attr('checked');  // "checked" 또는 undefined

// prop() - JavaScript 프로퍼티 (boolean)
$('input').prop('checked');  // true 또는 false
```

**HTML에 처음 작성된 상태:**
- `attr('checked')` → HTML에 `checked` 속성이 있으면 "checked", 없으면 undefined

**현재 실제 체크 상태:**
- `prop('checked')` → 지금 체크되어 있으면 true, 아니면 false

**사용자가 체크박스를 클릭하면:**
- `attr('checked')` → 변하지 않음 (HTML 원본 유지)
- `prop('checked')` → 변함 (현재 상태 반영)

**명확한 규칙:**

| 속성 | 사용 메서드 | 값 타입 |
|------|------------|---------|
| `checked` | ✅ `prop()` | boolean |
| `disabled` | ✅ `prop()` | boolean |
| `selected` | ✅ `prop()` | boolean |
| `readonly` | ✅ `prop()` | boolean |
| `src` | ✅ `attr()` | string |
| `href` | ✅ `attr()` | string |
| `id` | ✅ `attr()` | string |
| `class` | ✅ `attr()` | string |
| `data-*` | ✅ `attr()` 또는 `data()` | string |

**실무 팁:**
- **Boolean 값 (true/false)** → `prop()` 사용
- **문자열 값** → `attr()` 사용

## 클래스 조작

CSS 클래스를 추가/제거하는 것은 웹 개발에서 **가장 흔한 DOM 조작** 중 하나입니다.

**왜 클래스를 자주 조작하나요?**
- CSS 파일에 스타일을 정의해두고, JavaScript는 클래스만 붙였다 뗐다 합니다
- 이 방식이 스타일과 로직을 분리하는 **모범 사례**입니다
- 여러 스타일을 한 번에 적용하거나 제거할 수 있습니다

예를 들어, 버튼을 클릭하면 메뉴가 나타나게 하려면:
1. CSS에 `.show { display: block; }` 정의
2. JavaScript에서 메뉴에 `.show` 클래스 추가

이렇게 하면 스타일은 CSS에, 동작은 JavaScript에 분리됩니다.

```javascript
// Vanilla JS - classList API 사용
element.classList.add('active');
element.classList.remove('active');
element.classList.toggle('active');
let hasClass = element.classList.contains('active');

// jQuery - 더 짧고 간결
$('#myDiv').addClass('active');       // 클래스 추가
$('#myDiv').removeClass('active');    // 클래스 제거
$('#myDiv').toggleClass('active');    // 있으면 제거, 없으면 추가
let hasClass = $('#myDiv').hasClass('active');  // true/false 반환
```

### 여러 클래스 한 번에 조작

실무에서는 여러 클래스를 동시에 다뤄야 할 때가 많습니다. jQuery는 이를 매우 쉽게 만들어줍니다.

```javascript
// 여러 클래스 추가 (공백으로 구분)
$('#myDiv').addClass('class1 class2 class3');

// 여러 클래스 제거
$('#myDiv').removeClass('class1 class2');

// 모든 클래스 제거
$('#myDiv').removeClass();

// 조건부 토글
$('#myDiv').toggleClass('active', true);   // 무조건 추가
$('#myDiv').toggleClass('active', false);  // 무조건 제거

// 실용 예제: 탭 전환
$('.tab').removeClass('active');  // 모든 탭 비활성화
$(this).addClass('active');       // 클릭한 탭만 활성화
```

**실무 패턴:**
```javascript
// ❌ 나쁜 예 - CSS를 직접 조작
$('#menu').css({
    'display': 'block',
    'opacity': '1',
    'transform': 'translateY(0)'
});

// ✅ 좋은 예 - 클래스로 처리
$('#menu').addClass('open');
// CSS 파일에 .open { display: block; opacity: 1; transform: translateY(0); }
```

## CSS 직접 조작

클래스로 처리하는 것이 권장되지만, **동적으로 계산된 값**이나 **일회성 스타일**은 `css()` 메서드로 직접 설정합니다.

**언제 css()를 사용하나요?**
- 사용자 입력에 따라 크기, 색상 등이 동적으로 바뀔 때
- 계산된 값 (예: 스크롤 위치에 따른 top 값)
- 애니메이션에서 중간 값 설정

**언제 클래스를 사용하나요?**
- 미리 정의된 스타일 세트를 적용할 때
- 여러 속성을 묶어서 관리할 때
- 유지보수를 쉽게 하고 싶을 때

### 단일 CSS 속성

```javascript
// Vanilla JS - style 속성 직접 조작
element.style.color = 'red';
element.style.fontSize = '20px';

// jQuery - css() 메서드 사용
$('#myDiv').css('color', 'red');
$('#myDiv').css('font-size', '20px');  // 하이픈(-) 그대로 사용 가능

// 또는 camelCase도 가능
$('#myDiv').css('fontSize', '20px');
```

### 여러 CSS 속성 한 번에

여러 스타일을 동시에 적용할 때는 **객체**를 전달하면 매우 편리합니다.

```javascript
// Vanilla JS - 하나씩 설정해야 함
element.style.color = 'red';
element.style.fontSize = '20px';
element.style.padding = '10px';
element.style.backgroundColor = '#f0f0f0';

// jQuery - 객체로 한 번에
$('#myDiv').css({
    'color': 'red',
    'font-size': '20px',
    'padding': '10px',
    'background-color': '#f0f0f0'
});

// 또는 camelCase 사용
$('#myDiv').css({
    color: 'red',
    fontSize: '20px',
    padding: '10px',
    backgroundColor: '#f0f0f0'
});
```

### CSS 값 가져오기

현재 적용된 CSS 값을 가져올 수도 있습니다. 계산된 최종 값을 반환합니다.

```javascript
// Vanilla JS - getComputedStyle 필요
let color = getComputedStyle(element).color;
let width = getComputedStyle(element).width;

// jQuery - 훨씬 간단
let color = $('#myDiv').css('color');
let width = $('#myDiv').css('width');  // "300px" 같은 문자열 반환

// 여러 값 가져오기
let styles = $('#myDiv').css(['color', 'font-size', 'padding']);
// 결과: {color: "rgb(255,0,0)", font-size: "20px", padding: "10px"}
```

**실무 예제: 동적 계산**
```javascript
// 스크롤에 따라 헤더 투명도 변경
$(window).scroll(function() {
    let scroll = $(this).scrollTop();
    let opacity = Math.max(0.5, 1 - scroll / 300);  // 0.5~1 사이
    $('#header').css('opacity', opacity);
});

// 윈도우 크기에 따라 사이드바 높이 조정
$(window).resize(function() {
    let windowHeight = $(window).height();
    $('#sidebar').css('height', windowHeight - 100);
});
```

## 요소 추가/제거

새로운 요소를 DOM에 추가하거나 기존 요소를 제거하는 것은 동적 웹 페이지의 핵심입니다.

**왜 요소를 동적으로 추가/제거하나요?**
- 사용자가 버튼을 클릭하면 리스트에 항목 추가
- Ajax로 데이터를 받아서 화면에 표시
- 필요 없는 요소 제거 (예: 알림 메시지 닫기)
- 페이지 구조를 동적으로 변경

### append() - 내부 끝에 추가

`append()`는 선택한 요소의 **자식으로, 맨 끝에** 추가합니다.

```javascript
// Vanilla JS
let newDiv = document.createElement('div');
newDiv.textContent = '새 요소';
container.appendChild(newDiv);

// jQuery - 훨씬 간단
$('#container').append('<div>새 요소</div>');

// HTML 문자열을 바로 추가 가능
$('#list').append('<li>새 항목</li>');

// jQuery 객체도 추가 가능
let $newDiv = $('<div>').text('새 요소').addClass('item');
$('#container').append($newDiv);

// 여러 요소 한 번에
$('#list').append('<li>항목1</li><li>항목2</li><li>항목3</li>');
```

### appendTo() - append의 반대 순서

`appendTo()`는 `append()`와 같지만, **주체와 대상이 반대**입니다. 어떤 것이 더 읽기 좋은지에 따라 선택하세요.

```javascript
// append: 컨테이너에 요소를 추가
$('#container').append('<div>새 요소</div>');

// appendTo: 요소를 컨테이너에 추가 (순서만 반대)
$('<div>새 요소</div>').appendTo('#container');

// 둘은 완전히 동일한 결과
```

### prepend() - 내부 시작에 추가

`prepend()`는 선택한 요소의 **자식으로, 맨 앞에** 추가합니다.

```javascript
// 리스트 맨 앞에 추가
$('#list').prepend('<li>첫 번째 항목</li>');

// 결과:
// <ul id="list">
//   <li>첫 번째 항목</li>  ← 새로 추가됨
//   <li>기존 항목 1</li>
//   <li>기존 항목 2</li>
// </ul>
```

### after() / before() - 외부에 추가

`after()`와 `before()`는 **형제 요소**로 추가합니다 (부모-자식 관계가 아님).

```javascript
// after() - 선택한 요소 바로 뒤에 추가
$('#myDiv').after('<div>뒤에 추가</div>');

// before() - 선택한 요소 바로 앞에 추가
$('#myDiv').before('<div>앞에 추가</div>');

// 결과:
// <div>앞에 추가</div>     ← before
// <div id="myDiv">원본</div>
// <div>뒤에 추가</div>     ← after
```

### 위치별 추가 메서드 정리

어디에 추가하느냐에 따라 메서드를 선택합니다:

| 메서드 | 위치 | 관계 | 예시 |
|--------|------|------|------|
| `.append()` | 내부 끝 | 자식 | `$('#box').append('<p>끝</p>')` |
| `.prepend()` | 내부 시작 | 자식 | `$('#box').prepend('<p>시작</p>')` |
| `.after()` | 외부 뒤 | 형제 | `$('#box').after('<div>뒤</div>')` |
| `.before()` | 외부 앞 | 형제 | `$('#box').before('<div>앞</div>')` |

**시각적 이해:**
```html
<!-- before: 형제로 앞에 -->
<div id="box">
  <!-- prepend: 자식으로 맨 앞에 -->
  기존 내용
  <!-- append: 자식으로 맨 뒤에 -->
</div>
<!-- after: 형제로 뒤에 -->
```

### 요소 제거

더 이상 필요 없는 요소는 DOM에서 제거해야 합니다.

```javascript
// Vanilla JS
element.remove();
element.innerHTML = '';

// jQuery
$('#myDiv').remove();  // 요소 자체를 완전히 제거 (이벤트 핸들러도 제거)
$('#myDiv').empty();   // 내부 내용만 비우기 (요소 자체는 남음)

// 선택적 제거 - 조건에 맞는 것만 제거
$('div').remove('.old');  // div 중에서 class="old"인 것만 제거
$('li').remove(':contains("삭제")');  // "삭제"라는 텍스트가 있는 li만 제거
```

**remove() vs empty() 차이:**
```html
<!-- 원본 -->
<div id="container">
  <p>내용 1</p>
  <p>내용 2</p>
</div>

<script>
// empty() 사용
$('#container').empty();
// 결과: <div id="container"></div>  (내용만 사라짐)

// remove() 사용
$('#container').remove();
// 결과: (아무것도 없음 - div 자체가 사라짐)
</script>
```

### 요소 복사

기존 요소를 복사하여 재사용할 수 있습니다.

```javascript
// 요소 복사
let $copy = $('#myDiv').clone();
$('#container').append($copy);

// 이벤트 핸들러까지 복사
let $copy = $('#myDiv').clone(true);  // true: 이벤트도 함께 복사

// 실용 예제: 템플릿 복사
$('#addBtn').click(function() {
    let $template = $('.item-template').clone();
    $template.removeClass('template').appendTo('#item-list');
});
```

## 요소 교체 및 감싸기

### replaceWith() - 요소 완전히 교체

기존 요소를 새로운 요소로 완전히 바꿉니다.

```javascript
// Vanilla JS
let newElement = document.createElement('div');
element.replaceWith(newElement);

// jQuery
$('#oldDiv').replaceWith('<div id="newDiv">새로운 내용</div>');

// 여러 요소를 한 번에 교체
$('.old-item').replaceWith('<div class="new-item">새 항목</div>');
```

### wrap() - 요소 감싸기

기존 요소를 다른 요소로 감쌀 수 있습니다. 레이아웃 구조를 동적으로 만들 때 유용합니다.

```javascript
// 모든 p를 div로 감싸기
$('p').wrap('<div class="wrapper"></div>');

// 결과:
// <div class="wrapper"><p>내용 1</p></div>
// <div class="wrapper"><p>내용 2</p></div>

// wrapAll() - 모든 요소를 하나의 부모로 감싸기
$('p').wrapAll('<div class="container"></div>');

// 결과:
// <div class="container">
//   <p>내용 1</p>
//   <p>내용 2</p>
// </div>

// wrapInner() - 내부 내용만 감싸기
$('#myDiv').wrapInner('<span></span>');
// 결과: <div id="myDiv"><span>원래 내용</span></div>
```

## 데이터 속성 (data-*)

HTML5에서는 `data-*` 속성으로 요소에 커스텀 데이터를 저장할 수 있습니다. jQuery는 이를 매우 편리하게 다룰 수 있게 해줍니다.

**왜 data 속성을 사용하나요?**
- 요소에 추가 정보를 저장 (예: 사용자 ID, 제품 번호)
- JavaScript에서 쉽게 접근
- HTML 표준을 따르는 방법
- 전역 변수를 줄여서 코드를 깔끔하게 유지

```html
<div id="user" data-id="123" data-name="홍길동" data-age="30"></div>
```

```javascript
// Vanilla JS - dataset 객체 사용
element.dataset.id;      // "123"
element.dataset.name;    // "홍길동"
element.dataset.age;     // "30"

// jQuery - data() 메서드로 더 편리하게
$('#user').data('id');     // "123"
$('#user').data('name');   // "홍길동"
$('#user').data('age');    // "30"

// 값 설정
$('#user').data('email', 'hong@example.com');

// 모든 data 속성 가져오기
let allData = $('#user').data();
// 결과: {id: "123", name: "홍길동", age: "30", email: "hong@example.com"}
```

**실무 예제:**
```javascript
// 삭제 버튼에 항목 ID 저장
$('#itemList').append('<button class="delete" data-id="' + itemId + '">삭제</button>');

// 클릭 시 ID 가져오기
$('.delete').click(function() {
    let itemId = $(this).data('id');
    deleteItem(itemId);
});
```

## 실전 예제

실무에서 자주 사용하는 DOM 조작 패턴들입니다.

### 1. 입력값 검증 후 표시

```javascript
$('#submitBtn').click(function() {
    let name = $('#nameInput').val();

    if (name === '') {
        // 입력이 없으면 에러 표시
        $('#nameInput').addClass('error');
        $('#message').text('이름을 입력하세요').css('color', 'red');
    } else {
        // 입력이 있으면 환영 메시지
        $('#nameInput').removeClass('error');
        $('#message').text('환영합니다, ' + name + '님!').css('color', 'green');
    }
});
```

### 2. 리스트 항목 동적 추가/제거

```javascript
// 추가 버튼
$('#addBtn').click(function() {
    let text = $('#itemInput').val();

    if (text) {
        // 새 항목 추가
        $('#itemList').append(`
            <li>
                ${text}
                <button class="delete">삭제</button>
            </li>
        `);

        // 입력창 비우기
        $('#itemInput').val('');
    }
});

// 삭제 버튼 (이벤트 위임 - 동적 요소에 필수)
$('#itemList').on('click', '.delete', function() {
    $(this).parent('li').remove();
});
```

### 3. 탭 메뉴 구현

```javascript
$('.tab-btn').click(function() {
    // 모든 탭 비활성화
    $('.tab-btn').removeClass('active');
    $('.tab-content').hide();

    // 클릭한 탭만 활성화
    $(this).addClass('active');
    let target = $(this).data('target');  // data-target 속성 값
    $('#' + target).show();
});
```

### 4. 이미지 미리보기

```javascript
$(':file').change(function() {
    let file = this.files[0];

    if (file) {
        let reader = new FileReader();

        reader.onload = function(e) {
            // 이미지 src 변경하고 표시
            $('#preview').attr('src', e.target.result).show();
        };

        reader.readAsDataURL(file);
    }
});
```

### 5. 전체 선택/해제

```javascript
// "전체 선택" 체크박스
$('#selectAll').change(function() {
    let isChecked = $(this).prop('checked');

    // 모든 체크박스를 같은 상태로
    $(':checkbox').prop('checked', isChecked);
});

// 개별 체크박스 변경 시 "전체 선택" 업데이트
$('.item-checkbox').change(function() {
    let total = $('.item-checkbox').length;
    let checked = $('.item-checkbox:checked').length;

    $('#selectAll').prop('checked', total === checked);
});
```

## 메서드 체이닝 활용

jQuery의 강력한 기능 중 하나는 **체이닝**입니다. 여러 작업을 한 줄로 연결할 수 있습니다.

```javascript
// 여러 작업을 순차적으로
$('#myDiv')
    .addClass('active')           // 클래스 추가
    .css('color', 'red')          // 색상 변경
    .text('변경된 텍스트')         // 텍스트 변경
    .fadeIn();                    // 페이드인 효과

// 복잡한 체이닝 예제
$('#notification')
    .text('저장되었습니다')
    .addClass('success')
    .fadeIn(300)
    .delay(2000)
    .fadeOut(300, function() {
        $(this).removeClass('success');
    });
```

## 자주 하는 실수와 해결법

### 실수 1: checked를 attr()로 설정

```javascript
// ❌ 잘못된 방법 - 작동하지 않을 수 있음
$(':checkbox').attr('checked', true);

// ✅ 올바른 방법 - prop() 사용
$(':checkbox').prop('checked', true);
```

### 실수 2: 여러 요소에 같은 텍스트

```javascript
// ❌ 모든 li가 "항목 1"이 됨
$('li').text('항목 1');

// ✅ 각각 다른 텍스트 - each() 사용
$('li').each(function(index) {
    $(this).text('항목 ' + (index + 1));
});
```

### 실수 3: 동적 요소에 이벤트 바인딩

```javascript
// ❌ 나중에 추가된 요소는 작동 안 함
$('.delete').click(function() { ... });

// ✅ 이벤트 위임 사용
$(document).on('click', '.delete', function() { ... });
```

## Vanilla JS vs jQuery 비교

| 작업 | Vanilla JS | jQuery |
|------|-----------|--------|
| 텍스트 설정 | `el.textContent = 'text'` | `$el.text('text')` |
| HTML 설정 | `el.innerHTML = '<b>html</b>'` | `$el.html('<b>html</b>')` |
| 값 설정 | `input.value = 'value'` | `$input.val('value')` |
| 속성 설정 | `el.setAttribute('src', 'url')` | `$el.attr('src', 'url')` |
| 체크 설정 | `checkbox.checked = true` | `$cb.prop('checked', true)` |
| 클래스 추가 | `el.classList.add('class')` | `$el.addClass('class')` |
| CSS 설정 | `el.style.color = 'red'` | `$el.css('color', 'red')` |
| 요소 추가 | `parent.appendChild(child)` | `$parent.append(child)` |
| 요소 제거 | `el.remove()` | `$el.remove()` |

---
**핵심: 같은 메서드로 가져오기/설정하기 (파라미터 유무로 구분)**

**모범 사례:**
- 스타일 변경 → 클래스 사용 (css() 직접 사용 최소화)
- Boolean 속성 → prop() 사용
- 사용자 입력 표시 → text() 사용 (XSS 방지)
- 동적 요소 → 이벤트 위임 사용
