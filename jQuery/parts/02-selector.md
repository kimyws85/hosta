# Part 2. 선택자 (Selector)

## 🎯 핵심: jQuery 선택자 = CSS 선택자

**jQuery 선택자는 CSS 선택자와 100% 동일합니다!**

jQuery를 배울 때 가장 먼저 알아야 할 핵심 개념은 바로 **선택자가 CSS와 완전히 동일하다**는 점입니다. 이미 CSS를 알고 있다면 jQuery 선택자는 새로 배울 필요가 없습니다. CSS에서 스타일을 지정할 때 사용하던 그 선택자를 `$()` 괄호 안에 그대로 넣기만 하면 됩니다.

예를 들어 CSS에서 `#header { color: red; }` 이렇게 스타일을 지정했다면, jQuery에서는 `$('#header')`로 그 요소를 선택할 수 있습니다. 선택자 문법이 완전히 동일하기 때문에 CSS를 알고 있다면 jQuery 선택자를 별도로 공부할 필요가 없습니다.

**CSS에서 사용하던 방식:**
```css
/* CSS에서 ID, Class, Tag 선택자 */
#header { color: red; }
.button { color: blue; }
div { color: green; }
```

**jQuery에서도 똑같이:**
```javascript
/* jQuery에서 - 선택자가 완전히 동일합니다 */
$('#header')    // CSS의 #header와 100% 동일
$('.button')    // CSS의 .button과 100% 동일
$('div')        // CSS의 div와 100% 동일
```

차이점은 단 하나입니다. CSS는 선택한 요소에 스타일을 적용하고, jQuery는 선택한 요소를 JavaScript로 조작할 수 있다는 것뿐입니다. 선택하는 방법은 완전히 동일합니다.

**기본 사용법:**
```javascript
$('CSS 선택자')  // CSS 선택자를 그대로 넣으면 됩니다
```

## 기본 선택자 (CSS와 동일)

기본 선택자는 CSS에서 가장 많이 사용하는 세 가지 선택자입니다. ID 선택자(`#`), Class 선택자(`.`), Tag 선택자입니다. 이 세 가지는 웹 개발에서 가장 기본이 되는 선택 방법이며, jQuery에서도 CSS와 완전히 동일하게 사용됩니다.

**CSS에서 사용하던 그대로:**
```javascript
$('#id')      // CSS: #id와 동일 - ID로 요소 선택
$('.class')   // CSS: .class와 동일 - Class로 요소 선택
$('tag')      // CSS: tag와 동일 - 태그 이름으로 선택
```

### ID, Class, Tag 선택자의 차이점

세 가지 선택자는 각각 다른 용도와 특징을 가지고 있습니다. ID는 페이지에서 **단 하나의 요소**를 식별할 때 사용하며, 가장 빠른 선택 방법입니다. Class는 **여러 요소를 그룹화**할 때 사용하며, 재사용성이 높습니다. Tag는 **모든 같은 타입의 요소**를 선택할 때 사용하지만, 범위가 넓어 주의가 필요합니다.

| 선택자 | CSS | jQuery | 설명 |
|--------|-----|--------|------|
| **ID** | `#header` | `$('#header')` | 유일한 요소 하나 (가장 빠름) |
| **Class** | `.button` | `$('.button')` | 같은 클래스의 모든 요소 |
| **Tag** | `div` | `$('div')` | 해당 태그의 모든 요소 |

### 실제 사용 예제

CSS에서 스타일을 지정하던 것과 완전히 동일한 선택자를 사용합니다. 단지 스타일 대신 jQuery 메서드로 JavaScript 동작을 추가할 수 있다는 차이만 있습니다.

**CSS에서 이렇게 스타일을 지정했다면:**
```css
#loginBtn { color: red; }
.card { border: 1px solid; }
p { line-height: 1.5; }
```

**jQuery에서는 이렇게 JavaScript로 조작합니다:**
```javascript
// 선택자는 완전히 동일하고, 메서드만 다릅니다
$('#loginBtn').css('color', 'red');      // ID 선택자로 버튼 선택
$('.card').css('border', '1px solid');   // Class 선택자로 카드들 선택
$('p').css('line-height', '1.5');        // Tag 선택자로 모든 p 선택
```

이처럼 선택자 부분(`#loginBtn`, `.card`, `p`)은 CSS와 100% 동일하며, 뒤에 붙는 `.css()` 같은 메서드만 jQuery의 기능입니다.

### 여러 선택자를 동시에 사용하는 방법

CSS에서 여러 요소에 같은 스타일을 적용하고 싶을 때 쉼표(`,`)로 선택자를 구분했던 것을 기억하시나요? jQuery에서도 완전히 동일합니다. 쉼표로 구분하면 여러 선택자를 한 번에 선택할 수 있습니다.

**CSS에서 여러 선택자 사용:**
```css
/* h1, h2, h3에 모두 같은 폰트 적용 */
h1, h2, h3 { font-family: Arial; }
```

**jQuery에서도 똑같이 쉼표로 구분:**
```javascript
/* 선택자 구분 방법이 CSS와 100% 동일합니다 */
$('h1, h2, h3').css('font-family', 'Arial');

// 다른 예제들
$('div, p, .myClass')  // div 또는 p 또는 .myClass 선택 (CSS와 동일)
$('input, textarea, select').addClass('form-control');  // 폼 요소들 한 번에 선택
```

이렇게 쉼표로 구분하면 여러 종류의 요소를 한 번에 선택해서 같은 작업을 적용할 수 있습니다. 이것도 CSS의 문법과 완전히 동일합니다.

## Vanilla JS vs jQuery 비교

Vanilla JavaScript(순수 자바스크립트)로도 요소를 선택할 수 있지만, 문법이 길고 복잡합니다. 반면 jQuery는 CSS 선택자를 그대로 사용하기 때문에 훨씬 간결하고 직관적입니다. 특히 Vanilla JS는 `getElementById`, `querySelector`, `querySelectorAll` 등 여러 메서드를 상황에 맞게 골라 써야 하지만, jQuery는 모두 `$()`로 통일되어 있어 편리합니다.

**Vanilla JS - 길고 복잡합니다:**
```javascript
// 각각 다른 메서드를 사용해야 함
document.getElementById('myId')           // ID는 getElementById
document.querySelector('.myClass')        // Class나 복잡한 선택자는 querySelector
document.querySelectorAll('div')          // 여러 요소는 querySelectorAll
```

**jQuery - 짧고 통일된 문법:**
```javascript
// 모두 $()로 통일되어 있어 간단합니다
$('#myId')       // ID 선택
$('.myClass')    // Class 선택
$('div')         // Tag 선택
```

이처럼 jQuery는 모든 선택을 `$()`라는 하나의 함수로 처리하기 때문에 기억하기도 쉽고 코드도 간결해집니다.

## 계층 선택자 (CSS와 동일)

계층 선택자는 HTML의 부모-자식-형제 관계를 이용해서 요소를 선택하는 방법입니다. CSS에서 자주 사용하던 공백(` `), 큰 화살표(`>`), 플러스(`+`), 물결표(`~`) 등의 조합 선택자가 모두 그대로 동작합니다. 이것도 CSS와 100% 동일한 문법입니다.

예를 들어 CSS에서 `.menu li`라고 쓰면 .menu 안의 모든 li를 선택했던 것처럼, jQuery에서도 `$('.menu li')`라고 쓰면 완전히 동일하게 동작합니다.

**CSS에서 사용하던 계층 선택자:**

| CSS | jQuery | 설명 |
|-----|--------|------|
| `div p` | `$('div p')` | div 안의 모든 p (자손 선택자) |
| `div > p` | `$('div > p')` | div의 직계 자식 p만 (자식 선택자) |
| `h2 + p` | `$('h2 + p')` | h2 바로 다음 p (인접 형제 선택자) |
| `h2 ~ p` | `$('h2 ~ p')` | h2 이후 모든 p (일반 형제 선택자) |

### 자손 선택자 (공백)

공백으로 연결된 선택자는 "앞 요소 안에 있는 모든 뒷 요소"를 선택합니다. 깊이는 상관없이 내부에만 있으면 모두 선택됩니다. CSS에서 가장 많이 사용하는 선택자 중 하나입니다.

```css
/* CSS에서 이렇게 쓰던 걸 */
.menu li { color: red; }        /* .menu 안의 모든 li */
.menu > li { color: blue; }     /* .menu의 직계 자식 li만 */
h2 + p { font-size: 18px; }     /* h2 바로 다음 p */
```

**jQuery에서도 완전히 똑같이 사용:**
```javascript
/* 선택자 문법이 CSS와 100% 동일합니다 */
$('.menu li').css('color', 'red');        // .menu 안의 모든 li
$('.menu > li').css('color', 'blue');     // .menu의 직계 자식 li만
$('h2 + p').css('font-size', '18px');     // h2 바로 다음 p
```

### 직계 자식 선택자 (>)

큰 화살표(`>`)는 "바로 아래 한 단계의 자식"만 선택합니다. 손자, 증손자는 선택되지 않습니다. 중첩된 메뉴 구조에서 상위 메뉴만 선택하고 싶을 때 유용합니다.

```javascript
// .menu의 직계 자식 li만 선택 (하위 메뉴의 li는 제외)
$('.menu > li')

// .container의 바로 아래 div만 선택
$('.container > div')
```

### 인접 형제 선택자 (+)

플러스(`+`)는 "바로 다음에 오는 형제 요소 하나"만 선택합니다. 제목 바로 다음의 첫 문단에만 특별한 스타일을 주고 싶을 때 사용합니다.

```javascript
// h2 바로 다음의 p만 선택 (그 다음 p들은 제외)
$('h2 + p')

// label 바로 다음 input 선택
$('label + input')
```

### 일반 형제 선택자 (~)

물결표(`~`)는 "이후에 오는 모든 형제 요소"를 선택합니다. 특정 요소 뒤에 오는 모든 같은 타입 요소에 스타일을 적용하고 싶을 때 사용합니다.

```javascript
// h2 이후의 모든 p 선택 (바로 다음뿐만 아니라 모두)
$('h2 ~ p')

// .divider 이후의 모든 li 선택
$('.divider ~ li')
```

## 속성 선택자 (CSS와 동일)

속성 선택자는 HTML 요소의 속성(attribute) 값을 기준으로 요소를 선택하는 방법입니다. `type`, `href`, `data-*` 같은 속성을 이용해서 선택할 수 있습니다. 이것도 CSS 속성 선택자와 완전히 동일한 문법을 사용합니다.

예를 들어 `input[type="text"]`는 type 속성이 "text"인 input을 선택합니다. 이 문법은 CSS에서 사용하던 것과 100% 동일합니다.

**CSS에서 사용하던 속성 선택자:**

| CSS | jQuery | 설명 |
|-----|--------|------|
| `[type="text"]` | `$('[type="text"]')` | type이 "text"인 요소 |
| `[href^="http"]` | `$('[href^="http"]')` | href가 http로 시작하는 요소 |
| `[href$=".pdf"]` | `$('[href$=".pdf"]')` | href가 .pdf로 끝나는 요소 |
| `[class*="btn"]` | `$('[class*="btn"]')` | class에 btn이 포함된 요소 |

### 속성 선택자의 다양한 패턴

속성 선택자는 정확히 일치하는 것뿐만 아니라, "~로 시작", "~로 끝남", "~를 포함" 같은 패턴 매칭도 가능합니다. 이 문법은 정규식과 비슷하지만 더 간단합니다.

- `[attr^="value"]` : value로 **시작**하는 것 (^는 시작을 의미)
- `[attr$="value"]` : value로 **끝나는** 것 ($는 끝을 의미)
- `[attr*="value"]` : value를 **포함**하는 것 (*는 포함을 의미)

**CSS에서 이렇게 사용했다면:**
```css
/* CSS 속성 선택자 */
input[type="text"] { border: 1px solid; }    /* type이 정확히 text */
a[href^="http"] { color: blue; }             /* href가 http로 시작 */
a[href$=".pdf"] { color: red; }              /* href가 .pdf로 끝남 */
```

**jQuery에서도 완전히 똑같이:**
```javascript
/* 선택자가 CSS와 100% 동일합니다 */
$('input[type="text"]').css('border', '1px solid');
$('a[href^="http"]').css('color', 'blue');
$('a[href$=".pdf"]').css('color', 'red');

// 실전 활용 예제
$('a[href^="http"]').attr('target', '_blank');  // 외부 링크는 새 탭에서 열기
$('input[required]').addClass('error');          // required 속성 있는 필드에 에러 클래스
$('img[src$=".jpg"]').addClass('jpg-image');     // jpg 이미지에만 클래스 추가
```

이렇게 속성 선택자를 사용하면 클래스나 ID가 없는 요소도 속성값으로 쉽게 선택할 수 있습니다.

## 필터 선택자

필터 선택자는 일부는 CSS에도 있고, 일부는 jQuery만의 독특한 기능입니다. CSS에 있는 것은 완전히 동일하게 사용하고, jQuery 전용 필터는 더 간편한 단축 문법을 제공합니다.

**필터 선택자의 종류:**
- **위치 기반**: 첫 번째, 마지막, n번째 등 순서로 선택
- **상태 기반**: 보이기/숨김, 체크/비체크, 활성/비활성 등
- **콘텐츠 기반**: 빈 요소, 특정 텍스트 포함, 자식 요소 유무 등

### 위치 기반 필터 (CSS에도 있음)

위치 기반 필터는 요소의 순서(인덱스)를 기준으로 선택합니다. CSS에도 `:first-child`, `:last-child`, `:nth-child()` 같은 것들이 있는데, jQuery는 이것들을 더 짧게 쓸 수 있는 단축 문법도 제공합니다.

예를 들어 CSS의 `:first-child`를 jQuery에서는 `:first`로 더 짧게 쓸 수 있습니다. 기능은 완전히 동일하지만 타이핑이 줄어듭니다.

| CSS | jQuery | 설명 |
|-----|--------|------|
| `:first-child` | `$('li:first')` | 첫 번째 요소 |
| `:last-child` | `$('li:last')` | 마지막 요소 |
| - | `$('li:eq(2)')` | 3번째 요소 (0부터 시작, jQuery 전용) |
| `:nth-child(even)` | `$('li:even')` | 짝수 번째 (0,2,4...) |
| `:nth-child(odd)` | `$('li:odd')` | 홀수 번째 (1,3,5...) |

**CSS에 있는 것은 그대로 사용 가능:**
```javascript
$('li:first-child')  // CSS의 :first-child와 동일하게 사용 가능
$('li:last-child')   // CSS의 :last-child와 동일
```

**jQuery만의 더 짧은 문법도 제공:**
```javascript
$('li:first')  // :first-child보다 짧게
$('li:last')   // :last-child보다 짧게
$('li:eq(2)')  // 3번째 li (인덱스는 0부터 시작)
$('li:even')   // 짝수 번째 (0,2,4...) - 테이블 줄무늬 효과에 유용
$('li:odd')    // 홀수 번째 (1,3,5...)
```

**실전 활용 - 테이블 줄무늬 효과:**
```javascript
// 짝수 행과 홀수 행에 다른 배경색을 적용해서 가독성 향상
$('table tr:even').css('background', '#f9f9f9');  // 짝수 행 회색
$('table tr:odd').css('background', '#ffffff');   // 홀수 행 흰색
```

### 상태 기반 필터 (CSS에도 있음)

상태 기반 필터는 요소의 현재 상태를 기준으로 선택합니다. 폼 요소의 체크 여부, 활성화 여부, 또는 요소의 표시/숨김 상태 등을 기준으로 선택할 수 있습니다.

`:checked`, `:disabled`, `:enabled` 같은 것들은 CSS에도 있지만, `:visible`과 `:hidden`은 jQuery만의 독특한 필터입니다. CSS에는 요소가 보이는지 숨겨져 있는지를 선택하는 방법이 없지만, jQuery는 이것을 쉽게 할 수 있습니다.

| CSS | jQuery | 설명 |
|-----|--------|------|
| `:checked` | `$(':checked')` | 체크된 체크박스/라디오 |
| `:disabled` | `$(':disabled')` | 비활성화된 요소 |
| `:enabled` | `$(':enabled')` | 활성화된 요소 |
| - | `$(':visible')` | 보이는 요소 (jQuery 전용) |
| - | `$(':hidden')` | 숨겨진 요소 (jQuery 전용) |

**CSS와 동일한 필터:**
```javascript
$(':checked')   // 체크된 체크박스나 라디오 버튼 선택
$(':disabled')  // disabled 속성이 있는 비활성화된 필드 선택
$(':enabled')   // disabled가 없는 활성화된 필드 선택
```

**jQuery 전용 필터 (CSS에는 없음):**
```javascript
$('div:visible')  // 현재 화면에 보이는 div만 선택 (display:none이 아닌 것)
$('div:hidden')   // 현재 숨겨진 div만 선택 (display:none인 것)
```

**실전 활용 예제:**
```javascript
// 체크된 체크박스의 개수 확인
let checkedCount = $(':checkbox:checked').length;
console.log('체크된 항목:', checkedCount + '개');

// 선택된 라디오 버튼의 값 가져오기
let selectedValue = $(':radio[name="gender"]:checked').val();
console.log('선택된 성별:', selectedValue);

// 보이는 모달만 닫기 (여러 모달 중 열려있는 것만)
$('.modal:visible').fadeOut();
```

### 콘텐츠 기반 필터

콘텐츠 기반 필터는 요소의 내용(텍스트, 자식 요소)을 기준으로 선택합니다. 빈 요소, 특정 텍스트를 포함한 요소, 특정 자식을 가진 요소 등을 선택할 수 있습니다.

`:empty`와 `:not()`은 CSS에도 있지만, `:has()`와 `:contains()`는 jQuery만의 특별한 필터입니다. 특히 `:contains()`는 특정 텍스트를 포함한 요소를 찾을 때 매우 유용합니다.

| CSS | jQuery | 설명 |
|-----|--------|------|
| `:empty` | `$('td:empty')` | 빈 요소 (자식도 텍스트도 없음) |
| `:not(sel)` | `$('div:not(.active)')` | 특정 선택자를 제외 |
| - | `$('div:has(img)')` | 특정 자식 요소를 포함 (jQuery 전용) |
| - | `$('li:contains("텍스트")')` | 특정 텍스트 포함 (jQuery 전용) |

**CSS와 동일한 필터:**
```javascript
$('td:empty').text('-');           // 빈 테이블 셀에 "-" 표시
$('div:not(.active)').hide();      // active 클래스가 없는 div 숨기기
```

**jQuery 전용 필터 (CSS에는 없음):**
```javascript
$('.card:has(img)').addClass('has-image');  // img를 포함한 카드에 클래스 추가
$('li:contains("중요")').css('color', 'red'); // "중요"라는 텍스트가 있는 li를 빨간색으로
```

**실전 활용 - 검색 기능:**
```javascript
// 검색어를 입력하면 해당 텍스트를 포함한 항목만 표시
$('#searchInput').on('input', function() {
    let keyword = $(this).val().toLowerCase();

    $('.item').hide();  // 모든 항목 숨김
    $('.item:contains("' + keyword + '")').show();  // 검색어 포함 항목만 표시
});
```

이렇게 `:contains()`를 사용하면 텍스트 검색 기능을 매우 쉽게 구현할 수 있습니다.

## 폼 선택자 (jQuery 단축 문법)

폼 요소는 웹에서 가장 자주 다루는 요소입니다. jQuery는 폼 요소를 선택할 때 타이핑을 줄일 수 있는 단축 문법을 제공합니다. `input[type="text"]`처럼 길게 쓰는 대신 `:text`로 짧게 쓸 수 있습니다.

이것은 jQuery만의 편의 기능이며, 완전한 속성 선택자 대신 더 간편한 방법을 제공합니다. 기능은 완전히 동일하지만 타이핑이 줄어듭니다.

**완전한 속성 선택자 vs jQuery 단축 문법:**

| 전체 버전 (속성 선택자) | jQuery 단축 | 설명 |
|------------------------|-------------|------|
| `input[type="text"]` | `:text` | 텍스트 입력 필드 |
| `input[type="password"]` | `:password` | 비밀번호 필드 |
| `input[type="checkbox"]` | `:checkbox` | 체크박스 |
| `input[type="radio"]` | `:radio` | 라디오 버튼 |
| `input[type="submit"]` | `:submit` | 제출 버튼 |

**긴 버전 (속성 선택자):**
```javascript
// 속성 선택자를 사용하면 이렇게 길어집니다
$('input[type="checkbox"]').prop('checked', true);
$('input[type="text"]').val('');
$('input[type="radio"][name="gender"]').change(function() { });
```

**짧은 버전 (jQuery 단축 문법):**
```javascript
// jQuery 단축 문법을 사용하면 훨씬 짧아집니다
$(':checkbox').prop('checked', true);  // 모든 체크박스 체크
$(':text').val('');                    // 모든 텍스트 필드 초기화
$(':radio[name="gender"]').change(function() { });  // 특정 라디오 버튼
```

둘 다 완전히 동일하게 동작하지만, 단축 문법이 더 짧고 읽기 쉽습니다.

**실전 활용 예제들:**
```javascript
// 모든 텍스트 필드 초기화
$(':text').val('');

// 체크된 체크박스 개수 확인
let count = $(':checkbox:checked').length;
console.log('체크된 항목: ' + count + '개');

// 선택된 라디오 버튼 값 가져오기
let gender = $(':radio[name="gender"]:checked').val();
console.log('선택된 성별: ' + gender);

// 비밀번호 필드가 비어있는지 확인
if ($(':password').val() === '') {
    alert('비밀번호를 입력하세요');
}
```

### 실전 폼 처리 예제

실무에서 자주 사용하는 폼 처리 패턴들입니다. 폼 초기화, 검증, 전체 선택/해제 등의 기능을 jQuery 선택자로 간단하게 구현할 수 있습니다.

**폼 초기화 - 모든 입력 필드를 빈 상태로:**
```javascript
// 특정 폼의 모든 텍스트 입력과 비밀번호 입력을 초기화
$('#myForm :text, :password').val('');

// 모든 체크박스와 라디오 버튼의 체크 해제
$('#myForm :checkbox, :radio').prop('checked', false);
```

**폼 검증 - 필수 입력 필드 확인:**
```javascript
// required 속성이 있는 모든 입력 필드를 확인
$(':input[required]').each(function() {
    if ($(this).val() === '') {
        $(this).addClass('error');  // 빈 필드에 에러 클래스 추가
        alert($(this).attr('name') + '을(를) 입력하세요');
    }
});
```

**전체 선택/해제 - 체크박스 일괄 처리:**
```javascript
// "전체 선택" 체크박스의 상태에 따라 모든 체크박스 제어
$('#selectAll').change(function() {
    let isChecked = $(this).is(':checked');  // 전체 선택 체크박스가 체크되었는지
    $(':checkbox').prop('checked', isChecked);  // 모든 체크박스를 같은 상태로
});
```

이렇게 jQuery의 폼 선택자를 사용하면 복잡한 폼 처리도 몇 줄로 간단하게 구현할 수 있습니다.

## 성능 팁

선택자를 사용할 때 성능을 고려하는 것이 중요합니다. 특히 같은 요소를 여러 번 선택하는 것은 비효율적입니다. 한 번 선택한 요소는 변수에 저장(캐싱)해서 재사용하는 것이 좋습니다.

**선택자 속도 비교:**
- ID 선택자(`#id`) : **가장 빠름** - 브라우저가 해시맵으로 관리
- Class 선택자(`.class`) : 빠름
- Tag 선택자(`div`) : 보통
- 복잡한 선택자 : 느림

**빠른 선택자 - ID 선택자:**
```javascript
$('#myId')  // 가장 빠른 선택 방법
```

**느린 선택자 - 복잡한 조합:**
```javascript
$('div ul li.active a[href]')  // 너무 복잡하면 느려집니다
```

**개선 방법 - 범위를 좁혀서 선택:**
```javascript
// 전체 문서가 아니라 특정 영역 안에서만 찾으면 훨씬 빠름
$('#menu').find('li.active a')
```

**캐싱 - 변수에 저장해서 재사용:**
```javascript
// 나쁜 예 - 같은 요소를 세 번 선택 (비효율)
$('#menu').find('li').addClass('item');
$('#menu').find('a').attr('target', '_blank');
$('#menu').css('display', 'block');

// 좋은 예 - 한 번만 선택하고 변수에 저장 (효율적)
let $menu = $('#menu');  // 한 번만 선택
$menu.find('li').addClass('item');
$menu.find('a').attr('target', '_blank');
$menu.css('display', 'block');
```

특히 반복문 안에서 선택자를 사용할 때는 반드시 캐싱해야 합니다.

## 자주 하는 실수

jQuery를 처음 사용할 때 자주 하는 실수들과 해결 방법입니다.

**실수 1: 존재하지 않는 요소에 메서드 실행**

jQuery는 요소가 없어도 에러가 나지 않지만, 아무 일도 일어나지 않습니다. 따라서 요소가 존재하는지 확인하는 것이 좋습니다.

```javascript
// ❌ 나쁜 예 - 요소가 없어도 에러는 안 나지만 아무 일도 안 일어남
$('.not-exist').hide();  // 요소가 없으면 그냥 무시됨

// ✅ 좋은 예 - 존재 여부를 먼저 확인
if ($('.my-element').length) {  // length가 0보다 크면 존재
    $('.my-element').hide();
}
```

**실수 2: 반복문에서 매번 선택자 실행**

반복문 안에서 같은 선택자를 계속 실행하면 매우 비효율적입니다. 반복문 밖에서 한 번만 선택하고 변수에 저장해야 합니다.

```javascript
// ❌ 나쁜 예 - 100번 선택 (매우 비효율)
for (let i = 0; i < 100; i++) {
    $('#result').append('<li>' + i + '</li>');  // 매번 #result를 찾음
}

// ✅ 좋은 예 - 한 번만 선택 (효율적)
let $result = $('#result');  // 한 번만 선택
for (let i = 0; i < 100; i++) {
    $result.append('<li>' + i + '</li>');
}

// ✅ 더 좋은 예 - HTML을 미리 만들고 한 번에 추가 (가장 효율적)
let html = '';
for (let i = 0; i < 100; i++) {
    html += '<li>' + i + '</li>';
}
$('#result').append(html);  // 한 번만 DOM 조작
```

## 치트시트 (빠른 참조)

자주 사용하는 선택자들을 한눈에 볼 수 있도록 정리한 치트시트입니다. CSS에서 사용하던 선택자를 `$()` 안에 그대로 넣으면 됩니다.

```javascript
// ===== 기본 선택자 (CSS와 100% 동일) =====
$('#id')              // CSS: #id
$('.class')           // CSS: .class
$('tag')              // CSS: tag
$('div, p')           // CSS: div, p (여러 선택자)

// ===== 계층 선택자 (CSS와 100% 동일) =====
$('div p')            // CSS: div p (자손)
$('div > p')          // CSS: div > p (직계 자식)
$('h2 + p')           // CSS: h2 + p (바로 다음 형제)
$('h2 ~ p')           // CSS: h2 ~ p (이후 모든 형제)

// ===== 속성 선택자 (CSS와 100% 동일) =====
$('[type="text"]')    // CSS: [type="text"]
$('[href^="http"]')   // CSS: [href^="http"] (시작)
$('[href$=".pdf"]')   // CSS: [href$=".pdf"] (끝)
$('[class*="btn"]')   // CSS: [class*="btn"] (포함)

// ===== 필터 (일부 CSS, 일부 jQuery) =====
$('li:first')         // jQuery 전용 (더 짧은 버전)
$('li:last')          // jQuery 전용 (더 짧은 버전)
$('li:eq(2)')         // jQuery 전용 (3번째 요소)
$(':visible')         // jQuery 전용 (보이는 요소)
$(':checked')         // CSS: :checked

// ===== 폼 선택자 (jQuery 단축 문법) =====
$(':text')            // input[type="text"]
$(':checkbox')        // input[type="checkbox"]
$(':radio')           // input[type="radio"]
$(':password')        // input[type="password"]
$(':submit')          // input[type="submit"]
```

---
**핵심: jQuery 선택자 = CSS 선택자 + 일부 편의 기능**
