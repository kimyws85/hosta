# Part 1. jQuery 기초

## 🎯 jQuery란?

**jQuery = JavaScript를 쉽게 쓰게 해주는 라이브러리**

jQuery는 2006년에 존 레식(John Resig)이 만든 JavaScript 라이브러리입니다. "Write less, do more"(적게 쓰고, 많이 하라)라는 모토로, 복잡한 JavaScript 코드를 간단하게 만들어주는 것이 목표입니다.

웹 개발을 할 때 순수 JavaScript(Vanilla JS)로 작성하면 코드가 길고 복잡해집니다. 특히 DOM 조작, 이벤트 처리, 애니메이션 등을 구현할 때 많은 코드가 필요합니다. jQuery는 이런 반복적이고 복잡한 작업을 몇 줄의 간단한 코드로 해결할 수 있게 해줍니다.

**왜 jQuery를 사용할까요?**

1. **코드가 짧아집니다** - Vanilla JS보다 훨씬 간결한 문법
2. **브라우저 호환성** - 구형 브라우저까지 자동으로 대응
3. **배우기 쉽습니다** - CSS 선택자를 그대로 사용
4. **풍부한 기능** - DOM 조작, 이벤트, 애니메이션, Ajax 모두 지원

**실제 코드 비교 - Vanilla JS vs jQuery:**

Vanilla JavaScript로 요소를 선택하고 스타일을 변경하려면 긴 메서드 이름과 여러 줄의 코드가 필요합니다. 하지만 jQuery는 같은 작업을 한 줄로 끝낼 수 있습니다.

```javascript
// Vanilla JS - 길고 복잡합니다
document.getElementById('myId').style.color = 'red';

let elements = document.querySelectorAll('.myClass');
elements.forEach(function(el) {
    el.style.display = 'none';
});

// jQuery - 짧고 간단합니다
$('#myId').css('color', 'red');
$('.myClass').hide();
```

위 예제를 보면 Vanilla JS는 `document.getElementById`, `querySelectorAll`, `forEach` 등 여러 메서드를 조합해야 하지만, jQuery는 `$()` 하나로 선택하고 `.css()`, `.hide()` 같은 직관적인 메서드로 조작할 수 있습니다.

## 설치 방법

jQuery를 사용하려면 먼저 프로젝트에 jQuery 라이브러리를 추가해야 합니다. 두 가지 방법이 있습니다: CDN을 통한 간편한 방법과 npm을 통한 프로젝트 관리 방법입니다.

### CDN (가장 간단)

CDN(Content Delivery Network)은 jQuery 파일을 다운로드 없이 인터넷을 통해 바로 사용하는 방법입니다. HTML 파일에 `<script>` 태그 하나만 추가하면 바로 jQuery를 사용할 수 있어서 가장 간편합니다.

**장점:**
- 다운로드나 설치 필요 없음
- CDN 서버가 빠르고 안정적
- 사용자가 이미 캐시에 jQuery를 가지고 있을 수 있음 (로딩 속도 향상)

**HTML 파일에 추가하는 방법:**

`<script>` 태그는 `</body>` 태그 바로 위에 추가하는 것이 좋습니다. 이렇게 하면 HTML이 모두 로드된 후 jQuery가 실행되어 에러를 방지할 수 있습니다.

```html
<!DOCTYPE html>
<html>
<head>
    <title>jQuery 예제</title>
</head>
<body>
    <h1>Hello jQuery</h1>

    <!-- body 끝에 jQuery 추가 (권장) -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script>
        // 여기서부터 jQuery 사용 가능
        $('h1').css('color', 'blue');
    </script>
</body>
</html>
```

**왜 body 끝에 추가할까요?**

만약 `<head>` 태그 안에 jQuery를 넣으면, HTML 요소들이 아직 로드되지 않은 상태에서 jQuery 코드가 실행될 수 있습니다. 그러면 요소를 찾지 못해 에러가 발생합니다. `</body>` 바로 위에 넣으면 모든 HTML이 로드된 후 실행되므로 안전합니다.

### npm (프로젝트에서)

npm(Node Package Manager)을 사용하는 프로젝트라면 jQuery를 패키지로 설치할 수 있습니다. React, Vue, Webpack 같은 모던 프론트엔드 환경에서는 이 방법을 사용합니다.

**설치 명령어:**

터미널에서 프로젝트 폴더로 이동한 후 다음 명령어를 실행합니다.

```bash
npm install jquery
```

이 명령어는 `node_modules` 폴더에 jQuery를 설치하고, `package.json`의 의존성 목록에 추가합니다.

**JavaScript 파일에서 사용:**

ES6 모듈 방식으로 jQuery를 import해서 사용할 수 있습니다.

```javascript
// ES6 모듈로 jQuery 가져오기
import $ from 'jquery';

// 이제 $ 사용 가능
$('h1').css('color', 'blue');
```

또는 CommonJS 방식으로도 사용할 수 있습니다.

```javascript
// CommonJS 방식
const $ = require('jquery');
```

## $(document).ready() - 시작점

jQuery 코드를 작성할 때 가장 먼저 알아야 할 개념이 `$(document).ready()`입니다. 이것은 "DOM이 완전히 로드되면 실행하라"는 의미입니다.

**왜 필요한가?**

HTML 문서는 위에서 아래로 순차적으로 로드됩니다. 만약 `<script>` 태그가 `<head>` 안에 있거나, HTML 요소보다 먼저 실행되면 jQuery 코드가 아직 존재하지 않는 요소를 찾으려고 해서 에러가 발생합니다. `$(document).ready()`를 사용하면 HTML이 모두 로드될 때까지 기다렸다가 코드를 실행하므로 안전합니다.

**Vanilla JS에서는 이렇게 작성합니다:**

Vanilla JavaScript에서 DOM이 로드되길 기다리려면 `DOMContentLoaded` 이벤트를 사용해야 합니다. 문법이 길고 기억하기 어렵습니다.

```javascript
// Vanilla JS - 길고 복잡합니다
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM 준비 완료');
    // 여기서 DOM 조작 코드 실행
});
```

**jQuery에서는 훨씬 간단합니다:**

jQuery는 `$(document).ready()`라는 명확한 메서드를 제공합니다. 읽기만 해도 무슨 의미인지 바로 알 수 있습니다.

```javascript
// jQuery - 명확하고 간단합니다
$(document).ready(function() {
    console.log('DOM 준비 완료');
    // 여기서 jQuery 코드 실행
});
```

**더 짧은 축약 버전:**

jQuery는 더 짧게 쓸 수 있는 축약 문법도 제공합니다. `$(function() { })` 형태로 쓸 수 있으며, 기능은 완전히 동일합니다. 실무에서는 이 축약 버전을 더 많이 사용합니다.

```javascript
// 축약 버전 - 실무에서 가장 많이 사용
$(function() {
    console.log('DOM 준비 완료');
    // 모든 jQuery 코드는 이 안에 작성
});
```

**실전 예제:**

```javascript
$(function() {
    // DOM이 준비되면 실행됩니다
    $('#welcome').text('환영합니다!');
    $('.button').click(function() {
        alert('버튼 클릭!');
    });
});
```

이렇게 `$(function() { })`로 감싸면 HTML이 모두 로드된 후 실행되므로, `#welcome`이나 `.button` 요소를 안전하게 찾을 수 있습니다.

## $ 함수 - jQuery의 핵심

jQuery의 모든 기능은 `$` 기호(또는 `jQuery`)로 시작합니다. 이 `$`는 함수이며, 용도에 따라 세 가지 다른 방식으로 사용됩니다.

**$ 함수의 세 가지 용도:**

1. **선택자로 사용** - 요소 찾기 (가장 많이 사용)
2. **HTML 생성** - 새 요소 만들기
3. **함수 실행** - DOM 준비 대기

### 1. 선택자로 사용 (가장 많이 씀)

`$()` 괄호 안에 CSS 선택자를 넣으면 해당 요소를 찾아서 jQuery 객체로 반환합니다. 이것이 jQuery의 가장 기본적이고 많이 사용하는 방법입니다.

**CSS 선택자를 그대로 사용합니다:**

CSS를 알고 있다면 이미 jQuery 선택자를 알고 있는 것입니다. CSS에서 사용하던 `#id`, `.class`, `tag` 등을 그대로 `$()` 안에 넣으면 됩니다.

```javascript
$('선택자')  // CSS 선택자로 요소 선택

$('#id')        // ID로 선택 - CSS의 #id와 동일
$('.class')     // Class로 선택 - CSS의 .class와 동일
$('div')        // Tag로 선택 - CSS의 div와 동일
```

**실전 예제:**

```javascript
// ID로 로그인 버튼 선택
$('#loginBtn').click(function() {
    console.log('로그인 버튼 클릭됨');
});

// Class로 모든 카드 선택
$('.card').hover(function() {
    $(this).addClass('hover');
});

// Tag로 모든 링크 선택
$('a').attr('target', '_blank');  // 모든 링크를 새 탭에서 열기
```

### 2. HTML 생성

`$()` 괄호 안에 HTML 문자열을 넣으면 새로운 요소를 생성합니다. 문자열이 `<`로 시작하면 jQuery는 이것을 HTML로 인식하고 새 요소를 만듭니다.

**새 요소 만들기:**

JavaScript에서 `document.createElement`를 사용하는 대신, jQuery는 HTML 문자열로 바로 요소를 만들 수 있어 훨씬 직관적입니다.

```javascript
// HTML 문자열을 jQuery 객체로 변환
let $newDiv = $('<div>새 요소</div>');
let $newP = $('<p class="text">문단</p>');
let $newBtn = $('<button id="myBtn">클릭</button>');
```

**생성 후 바로 페이지에 추가:**

생성한 요소를 바로 페이지에 추가할 수도 있습니다. `.append()`, `.prepend()` 같은 메서드로 원하는 위치에 삽입합니다.

```javascript
// body에 새 div 추가
$('body').append('<div class="new">추가된 div</div>');

// 리스트에 새 항목 추가
$('#todoList').append('<li>새로운 할 일</li>');

// 컨테이너 맨 앞에 제목 추가
$('#container').prepend('<h2>제목</h2>');
```

**복잡한 HTML도 가능:**

여러 줄의 복잡한 HTML도 문자열로 만들 수 있습니다. 템플릿 리터럴(백틱 `)을 사용하면 더 깔끔하게 작성할 수 있습니다.

```javascript
// 복잡한 HTML 생성
let userCard = `
    <div class="user-card">
        <img src="avatar.jpg" alt="User">
        <h3>홍길동</h3>
        <p>이메일: hong@example.com</p>
        <button class="delete-btn">삭제</button>
    </div>
`;

$('#userList').append(userCard);
```

### 3. 함수 실행 (ready)

`$()` 괄호 안에 함수를 넣으면 DOM이 준비되면 그 함수를 실행합니다. 이것은 `$(document).ready()`의 축약 버전입니다.

**가장 짧은 문법:**

```javascript
$(function() {
    // DOM 준비되면 여기 실행
    console.log('시작!');
});
```

이것은 다음과 완전히 동일합니다:

```javascript
$(document).ready(function() {
    console.log('시작!');
});
```

실무에서는 짧은 버전인 `$(function() { })`을 더 많이 사용합니다.

## jQuery 객체 vs DOM 요소

jQuery를 사용할 때 꼭 이해해야 할 중요한 개념입니다. jQuery 객체와 DOM 요소는 서로 다르며, 사용할 수 있는 메서드도 다릅니다.

**jQuery 객체란?**

`$()`로 선택하면 DOM 요소를 jQuery 객체로 "감싸서" 반환합니다. 이 jQuery 객체는 `.hide()`, `.css()`, `.addClass()` 같은 jQuery 메서드를 사용할 수 있습니다.

**DOM 요소란?**

`document.getElementById()` 같은 Vanilla JS 메서드로 선택하면 순수 DOM 요소를 반환합니다. 이것은 `.innerHTML`, `.style` 같은 DOM 프로퍼티는 사용할 수 있지만, jQuery 메서드는 사용할 수 없습니다.

**중요한 차이점:**

```javascript
// jQuery 객체 - jQuery 메서드 사용 가능
let $div = $('#myDiv');  // jQuery 객체 (변수명에 $를 붙이는 관례)
$div.hide();  // ✅ jQuery 메서드 사용 가능
$div.css('color', 'red');  // ✅ jQuery 메서드
$div.innerHTML = 'test';  // ❌ DOM 프로퍼티는 사용 불가

// DOM 요소 - DOM 메서드만 사용 가능
let div = document.getElementById('myDiv');  // 순수 DOM 요소
div.style.display = 'none';  // ✅ DOM 프로퍼티 사용 가능
div.innerHTML = 'test';  // ✅ DOM 프로퍼티
div.hide();  // ❌ jQuery 메서드는 사용 불가 (에러 발생)
```

### 변환 방법

때로는 jQuery 객체를 DOM 요소로, 또는 그 반대로 변환해야 할 때가 있습니다.

**jQuery 객체 → DOM 요소:**

jQuery 객체는 배열처럼 인덱스로 접근하면 순수 DOM 요소를 얻을 수 있습니다. `[0]`을 붙이거나 `.get(0)` 메서드를 사용합니다.

```javascript
// jQuery 객체에서 DOM 요소 꺼내기
let $div = $('#myDiv');  // jQuery 객체
let dom = $div[0];  // DOM 요소 (첫 번째 요소)
// 또는
let dom = $div.get(0);  // 같은 결과

// 이제 DOM 프로퍼티 사용 가능
dom.innerHTML = 'Hello';
dom.style.color = 'blue';
```

**DOM 요소 → jQuery 객체:**

순수 DOM 요소를 `$()`로 감싸면 jQuery 객체가 됩니다.

```javascript
// DOM 요소를 jQuery 객체로 변환
let dom = document.getElementById('myDiv');  // DOM 요소
let $div = $(dom);  // jQuery 객체로 변환

// 이제 jQuery 메서드 사용 가능
$div.hide();
$div.fadeIn();
```

**언제 변환이 필요한가?**

- 외부 라이브러리가 DOM 요소를 반환할 때
- jQuery 메서드와 DOM 프로퍼티를 함께 사용해야 할 때
- 성능상 DOM에 직접 접근해야 할 때

## 체이닝 (Chaining)

체이닝은 jQuery의 가장 강력한 기능 중 하나입니다. 여러 메서드를 `.`으로 연결해서 연속으로 실행할 수 있습니다. 이렇게 하면 코드가 짧아지고 가독성도 좋아집니다.

**왜 체이닝이 가능한가?**

대부분의 jQuery 메서드는 작업을 수행한 후 자기 자신(jQuery 객체)을 반환합니다. 그래서 메서드를 계속 연결할 수 있습니다.

**체이닝 없이 쓰면 반복적입니다:**

같은 요소를 여러 번 선택하는 것은 비효율적이고 코드도 길어집니다.

```javascript
// 나쁜 예 - 같은 요소를 세 번 선택 (비효율)
$('#myDiv').css('color', 'red');
$('#myDiv').addClass('active');
$('#myDiv').fadeIn();
```

**체이닝으로 한 줄로:**

메서드를 `.`으로 연결하면 한 번만 선택하고 여러 작업을 연속으로 수행할 수 있습니다.

```javascript
// 좋은 예 - 한 번만 선택하고 체이닝
$('#myDiv')
    .css('color', 'red')
    .addClass('active')
    .fadeIn();
```

**체이닝의 장점:**

1. **코드가 짧아집니다** - 선택자 반복 불필요
2. **성능이 좋습니다** - DOM 선택을 한 번만 수행
3. **가독성이 좋습니다** - 연속된 동작을 명확히 표현

**복잡한 체이닝 예제:**

여러 단계의 작업을 연결해서 수행할 수 있습니다. 애니메이션, 스타일 변경, 클래스 추가 등을 모두 연결 가능합니다.

```javascript
$('#myDiv')
    .hide()                    // 1. 숨기기
    .css('color', 'blue')      // 2. 색상 변경
    .addClass('highlight')     // 3. 클래스 추가
    .fadeIn(1000)             // 4. 페이드 인 (1초)
    .delay(500)               // 5. 0.5초 대기
    .slideUp();               // 6. 슬라이드 업
```

## Vanilla JS vs jQuery 비교

실제 작업에서 Vanilla JavaScript와 jQuery가 얼마나 다른지 비교해보겠습니다.

**요소 선택:**

| 작업 | Vanilla JS | jQuery |
|------|-----------|--------|
| 요소 선택 | `document.querySelector('#id')` | `$('#id')` |
| 여러 요소 | `document.querySelectorAll('.class')` | `$('.class')` |
| 클래스 추가 | `element.classList.add('active')` | `$el.addClass('active')` |
| 숨기기 | `element.style.display = 'none'` | `$el.hide()` |
| 이벤트 | `element.addEventListener('click', fn)` | `$el.click(fn)` |
| 반복 | `elements.forEach(fn)` | `$els.each(fn)` |

**실전 예제 비교:**

"모든 버튼을 찾아서 클릭 시 텍스트를 변경"하는 작업을 두 방식으로 비교해보겠습니다.

```javascript
// Vanilla JS - 길고 복잡합니다
let buttons = document.querySelectorAll('.button');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        this.textContent = '클릭됨';
        this.classList.add('clicked');
    });
});

// jQuery - 짧고 간단합니다
$('.button').click(function() {
    $(this).text('클릭됨').addClass('clicked');
});
```

jQuery가 훨씬 짧고 읽기 쉽다는 것을 알 수 있습니다.

## 핵심 개념

### 1. jQuery는 배열처럼 동작

jQuery 객체는 내부적으로 선택된 요소들을 배열처럼 저장합니다. `.length`로 개수를 확인하고, `[인덱스]`로 접근할 수 있습니다.

```javascript
let $divs = $('div');  // 모든 div 선택
console.log($divs.length);  // div 개수 출력
console.log($divs[0]);  // 첫 번째 div (DOM 요소)
console.log($divs[1]);  // 두 번째 div (DOM 요소)
```

### 2. 존재하지 않아도 에러 없음

jQuery의 큰 장점 중 하나는 요소가 없어도 에러가 발생하지 않는다는 것입니다. 이것은 안전한 코드 작성을 도와줍니다.

```javascript
// Vanilla JS - 요소가 없으면 에러 발생
let el = document.querySelector('.not-exist');
el.style.color = 'red';  // ❌ TypeError: Cannot read property 'style' of null

// jQuery - 요소가 없어도 에러 없음 (안전)
$('.not-exist').css('color', 'red');  // ✅ 아무 일도 안 일어남 (에러 없음)
```

하지만 의도한 동작이 실행되지 않을 수 있으므로, 중요한 경우에는 존재 여부를 확인하는 것이 좋습니다.

### 3. 존재 여부 확인

jQuery 객체의 `.length` 프로퍼티로 선택된 요소의 개수를 확인할 수 있습니다. 0이면 요소가 없는 것입니다.

```javascript
// length로 존재 여부 확인
if ($('.myClass').length > 0) {
    console.log('요소가 존재합니다');
    $('.myClass').show();
} else {
    console.log('요소가 없습니다');
}

// 간단히 (0은 false, 그 외는 true)
if ($('.myClass').length) {
    $('.myClass').show();
}
```

## this vs $(this)

이벤트 핸들러에서 자주 사용하는 중요한 개념입니다. `this`와 `$(this)`는 다릅니다.

**this는 DOM 요소:**

이벤트 핸들러 안에서 `this`는 순수 DOM 요소를 가리킵니다. 따라서 DOM 프로퍼티는 사용할 수 있지만 jQuery 메서드는 사용할 수 없습니다.

**$(this)는 jQuery 객체:**

`this`를 `$()`로 감싸면 jQuery 객체가 되어 jQuery 메서드를 사용할 수 있습니다.

```javascript
$('.button').click(function() {
    // this는 DOM 요소
    console.log(this.innerHTML);  // ✅ DOM 프로퍼티 사용 가능
    this.style.color = 'red';  // ✅ DOM 프로퍼티

    // $(this)는 jQuery 객체
    $(this).hide();  // ✅ jQuery 메서드 사용 가능
    $(this).addClass('clicked');  // ✅ jQuery 메서드
    $(this).fadeOut();  // ✅ jQuery 메서드
});
```

**실전 예제 - 클릭한 버튼만 변경:**

```javascript
// 여러 버튼 중 클릭한 것만 처리
$('.button').click(function() {
    // 다른 버튼에서 active 제거
    $('.button').removeClass('active');

    // 클릭한 버튼만 active 추가
    $(this).addClass('active');

    // 클릭한 버튼의 텍스트 가져오기
    let text = $(this).text();
    console.log('클릭된 버튼:', text);
});
```

## 실전 예제

### 버튼 클릭 시 div 보이기/숨기기

가장 기본적인 jQuery 사용 예제입니다. 버튼을 클릭하면 div의 표시/숨김을 토글합니다.

```javascript
$(function() {
    $('#toggleBtn').click(function() {
        $('#myDiv').toggle();  // 보이면 숨기고, 숨겨져있으면 보이기
    });
});
```

### 입력값 가져와서 표시

폼에서 사용자가 입력한 값을 가져와서 다른 곳에 표시하는 예제입니다.

```javascript
$(function() {
    $('#submitBtn').click(function() {
        // input에서 값 가져오기
        let text = $('#myInput').val();

        // 결과 영역에 표시
        $('#result').text('입력하신 내용: ' + text);

        // input 초기화
        $('#myInput').val('');
    });
});
```

### 리스트 아이템 클릭 시 활성화

메뉴나 탭에서 자주 사용하는 패턴입니다. 클릭한 항목만 활성화하고 나머지는 비활성화합니다.

```javascript
$(function() {
    $('.menu-item').click(function() {
        // 모든 항목에서 active 클래스 제거
        $('.menu-item').removeClass('active');

        // 클릭한 항목만 active 클래스 추가
        $(this).addClass('active');
    });
});
```

## 자주 쓰는 패턴

### 캐싱 (성능 향상)

같은 요소를 여러 번 사용할 때는 변수에 저장해서 재사용하는 것이 효율적입니다. 이것을 "캐싱"이라고 합니다.

```javascript
// 나쁜 예 - 매번 DOM에서 선택 (비효율)
$('#myDiv').css('color', 'red');
$('#myDiv').css('font-size', '20px');
$('#myDiv').addClass('active');

// 좋은 예 - 한 번만 선택하고 재사용 (효율적)
let $myDiv = $('#myDiv');  // 변수에 저장 (캐싱)
$myDiv.css('color', 'red');
$myDiv.css('font-size', '20px');
$myDiv.addClass('active');

// 더 좋은 예 - 체이닝 사용 (가장 효율적)
$('#myDiv')
    .css('color', 'red')
    .css('font-size', '20px')
    .addClass('active');
```

### jQuery 변수명에 $ 붙이기 (컨벤션)

jQuery 객체를 저장하는 변수명 앞에 `$`를 붙이는 것은 널리 사용되는 관례입니다. 이렇게 하면 코드를 읽을 때 jQuery 객체인지 DOM 요소인지 한눈에 구분할 수 있습니다.

```javascript
// 권장 - jQuery 객체임을 명확히 표시
let $button = $('#myButton');  // jQuery 객체
let $items = $('.item');        // jQuery 객체
let $nav = $('#navigation');    // jQuery 객체

// DOM 요소는 $ 없이
let button = document.getElementById('myButton');  // DOM 요소
let div = document.querySelector('.myDiv');        // DOM 요소
```

## 디버깅 팁

jQuery 코드가 예상대로 작동하지 않을 때 확인할 수 있는 방법들입니다.

```javascript
// 선택된 요소 개수 확인
console.log($('.myClass').length);  // 0이면 요소가 없는 것

// 선택된 jQuery 객체 자체를 출력
console.log($('.myClass'));  // 콘솔에서 요소 확인 가능

// DOM 요소로 확인
console.log($('.myClass')[0]);  // 첫 번째 DOM 요소

// 여러 요소를 하나씩 확인
$('.myClass').each(function(index) {
    console.log(index, this);  // 인덱스와 DOM 요소 출력
});
```

---
**핵심: jQuery = Vanilla JS를 짧고 쉽게 만드는 라이브러리**
