# Part 5. 이벤트 처리

## 🎯 핵심: 사용자와 상호작용하는 웹 만들기

**이벤트(Event)는 웹 페이지가 사용자와 소통하는 방법입니다.**

웹 페이지는 단순히 정보를 보여주는 것을 넘어, 사용자의 행동에 반응해야 합니다. 버튼을 클릭하면 무언가가 일어나고, 텍스트를 입력하면 실시간으로 검색 결과가 나타나며, 마우스를 올리면 툴팁이 표시됩니다. 이 모든 것이 **이벤트 처리**입니다.

**이벤트란?**
- **클릭, 입력, 마우스 이동, 키보드 입력** 등 브라우저에서 일어나는 모든 행동
- 브라우저가 "이런 일이 일어났어요!"라고 알려주는 알림
- JavaScript는 이 알림을 듣고 원하는 코드를 실행

**이벤트 처리의 3요소:**
1. **대상** - 어떤 요소에 이벤트가 일어났나? (예: 버튼, 입력창)
2. **이벤트 종류** - 무슨 일이 일어났나? (예: 클릭, 입력)
3. **핸들러** - 그 일이 일어났을 때 무엇을 할까? (실행할 함수)

jQuery는 이벤트 처리를 Vanilla JavaScript보다 훨씬 간결하고 강력하게 만들어줍니다. 특히 **동적으로 생성된 요소**에도 쉽게 이벤트를 붙일 수 있습니다.

## 기본 이벤트 핸들러

### click() - 클릭 이벤트

클릭은 웹에서 가장 기본적이고 중요한 상호작용입니다. 버튼, 링크, 이미지 등 거의 모든 요소에 사용됩니다.

**언제 사용하나요?**
- 버튼 클릭 시 폼 제출
- 링크 클릭 시 특별한 동작 수행 (기본 동작 막고)
- 이미지 클릭 시 확대 보기
- 메뉴 항목 클릭 시 페이지 전환

```javascript
// Vanilla JS - addEventListener 사용
document.getElementById('btn').addEventListener('click', function() {
    alert('클릭!');
});

// jQuery - 훨씬 짧고 간결
$('#btn').click(function() {
    alert('클릭!');
});

// on() 메서드 사용 (권장 - 더 유연함)
$('#btn').on('click', function() {
    alert('클릭!');
});
```

**왜 on()이 권장되나요?**
- `.click()`보다 유연함 (네임스페이스, 이벤트 위임 등)
- 여러 이벤트를 한 번에 처리 가능
- 동적 요소에 이벤트 위임 가능
- 현대적인 jQuery 코드 스타일

### on() 메서드 - 통합 이벤트 핸들러

`on()`은 **모든 이벤트를 처리할 수 있는 통합 메서드**입니다. jQuery의 이벤트 핸들링 핵심입니다.

**왜 on()을 사용하나요?**
- 하나의 메서드로 모든 이벤트 처리
- 여러 이벤트를 한 번에 바인딩
- 이벤트 위임으로 동적 요소 처리
- 네임스페이스로 이벤트 관리

```javascript
// 단일 이벤트
$('#btn').on('click', function() {
    console.log('클릭됨');
});

// 여러 이벤트에 같은 핸들러 (공백으로 구분)
$('#input').on('focus blur', function() {
    console.log('포커스 변경');
});

// 여러 이벤트에 다른 핸들러 (객체 전달)
$('#input').on({
    focus: function() {
        console.log('포커스 획득');
        $(this).addClass('focused');
    },
    blur: function() {
        console.log('포커스 상실');
        $(this).removeClass('focused');
    },
    keyup: function() {
        console.log('키 입력:', $(this).val());
    }
});
```

## 주요 이벤트 종류

웹 개발에서 자주 사용하는 이벤트들을 카테고리별로 알아봅시다.

### 마우스 이벤트

마우스는 웹에서 가장 기본적인 입력 장치입니다. 다양한 마우스 동작을 감지할 수 있습니다.

```javascript
$('#div').click(function() { });      // 클릭 (가장 기본)
$('#div').dblclick(function() { });   // 더블클릭
$('#div').mouseenter(function() { }); // 마우스가 요소 안으로 진입
$('#div').mouseleave(function() { }); // 마우스가 요소 밖으로 떠남
$('#div').mouseover(function() { });  // 마우스 올림 (자식 요소도 포함, 버블링)
$('#div').mouseout(function() { });   // 마우스 벗어남 (자식 요소도 포함, 버블링)
$('#div').mousemove(function() { });  // 마우스 이동 중
$('#div').mousedown(function() { });  // 마우스 버튼 누름
$('#div').mouseup(function() { });    // 마우스 버튼 뗌
```

**mouseenter/leave vs mouseover/out 차이:**
- `mouseenter/mouseleave` → 자식 요소 무시 (추천)
- `mouseover/mouseout` → 자식 요소에서도 발생 (버블링)

### hover() - 마우스 올림/떠남 간편 처리

`hover()`는 마우스를 올렸을 때와 뗐을 때를 동시에 처리하는 편리한 메서드입니다.

**언제 사용하나요?**
- 드롭다운 메뉴
- 툴팁 표시/숨김
- 이미지 효과 (밝기, 확대 등)
- 버튼 하이라이트

```javascript
// Vanilla JS - 두 이벤트를 각각 등록
element.addEventListener('mouseenter', function() {
    this.style.background = 'yellow';
});
element.addEventListener('mouseleave', function() {
    this.style.background = '';
});

// jQuery - 한 번에 처리
$('#div').hover(
    function() {
        // 마우스 올렸을 때
        $(this).css('background', 'yellow');
    },
    function() {
        // 마우스 떼었을 때
        $(this).css('background', '');
    }
);

// 함수를 하나만 전달하면 enter/leave 모두 실행
$('#div').hover(function() {
    $(this).toggleClass('hover');  // 올리면 추가, 떼면 제거
});
```

### 키보드 이벤트

키보드 입력을 감지하여 검색, 단축키, 폼 검증 등을 구현합니다.

**주요 키보드 이벤트:**
- `keydown` → 키를 누르는 순간 (가장 빠름, 모든 키 감지)
- `keyup` → 키를 떼는 순간 (실제 입력 후)
- `keypress` → 문자 입력 시만 (Deprecated, 사용 권장 안 함)

```javascript
// keydown - 키를 누르는 순간
$('#input').keydown(function(e) {
    console.log('키 누름:', e.key);
});

// keyup - 키를 떼는 순간
$('#input').keyup(function(e) {
    console.log('키 뗌:', e.key);
    console.log('현재 값:', $(this).val());
});

// 특정 키 감지
$('#input').keydown(function(e) {
    // Enter 키
    if (e.key === 'Enter') {
        console.log('엔터 키!');
        $(this).closest('form').submit();
    }

    // Ctrl+S (저장 단축키)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();  // 브라우저 기본 저장 막기
        console.log('Ctrl+S 눌림 - 저장 실행');
        save();
    }

    // ESC (취소)
    if (e.key === 'Escape') {
        $('.modal').hide();
    }
});
```

**실무 팁:**
- 실시간 검색 → `keyup` 또는 `input` 이벤트
- 단축키 → `keydown`
- 폼 검증 → `keyup` 또는 `change`

### 폼 이벤트

폼은 사용자 입력을 받는 핵심 요소입니다. 다양한 폼 이벤트로 사용자 경험을 개선할 수 있습니다.

```javascript
$('#input').focus(function() { });    // 포커스 받음 (커서가 들어옴)
$('#input').blur(function() { });     // 포커스 잃음 (커서가 나감)
$('#input').change(function() { });   // 값 변경됨 (포커스 잃을 때 발생)
$('#input').on('input', function() { }); // 값 변경됨 (실시간)
$('#form').submit(function() { });    // 폼 제출
$(':checkbox').change(function() { }); // 체크박스 상태 변경
$('select').change(function() { });    // 선택 옵션 변경
```

### 실시간 입력 감지 - change vs input

이 차이는 매우 중요합니다. 사용자 경험에 큰 영향을 줍니다.

```javascript
// change - 값이 변경되고 포커스를 잃을 때만 발생
$('#input').change(function() {
    console.log('최종 값:', $(this).val());
});
// 사용 예: 폼 제출 전 최종 검증

// input - 값이 변경될 때마다 즉시 발생 (권장)
$('#input').on('input', function() {
    console.log('실시간:', $(this).val());
});
// 사용 예: 실시간 검색, 글자 수 카운트

// keyup - 키보드 입력 시만 발생
$('#input').keyup(function() {
    console.log('키 입력:', $(this).val());
});
// 주의: 붙여넣기(Ctrl+V)는 감지 못 함!
```

**언제 무엇을 사용할까?**
- **실시간 검색** → `input` (권장)
- **글자 수 카운트** → `input`
- **자동완성** → `input` + 디바운싱
- **최종 검증** → `change` 또는 `blur`

## 이벤트 위임 (Event Delegation)

이벤트 위임은 jQuery 이벤트 처리에서 **가장 중요한 개념** 중 하나입니다.

### 문제: 동적 요소에 이벤트가 안 붙음

웹 앱에서는 버튼, 리스트 항목 등을 JavaScript로 동적으로 추가하는 경우가 많습니다. 하지만 일반적인 방법으로는 이벤트가 붙지 않습니다.

```javascript
// ❌ 문제 상황: 나중에 추가된 버튼은 클릭 이벤트가 없음
$('.btn').click(function() {
    console.log('클릭');
});

// 페이지 로드 후 버튼 동적 추가
$('body').append('<button class="btn">새 버튼</button>');
// 이 버튼을 클릭해도 아무 일도 일어나지 않음!
```

**왜 그럴까요?**
- `$('.btn').click()`는 **현재 페이지에 있는 버튼**에만 이벤트를 붙입니다
- 나중에 추가된 버튼은 이벤트가 없습니다
- 새 버튼마다 다시 `.click()`을 호출해야 하는데, 이는 번거롭고 비효율적입니다

### 해결: 이벤트 위임

이벤트 위임은 **부모 요소가 자식의 이벤트를 대신 처리**하는 방식입니다.

```javascript
// ✅ 해결: 이벤트 위임 사용
$(document).on('click', '.btn', function() {
    console.log('클릭');
});

// 또는 가까운 부모 요소에 (성능상 더 좋음)
$('#container').on('click', '.btn', function() {
    console.log('클릭');
});

// 이제 언제든 추가되는 버튼도 자동으로 작동!
$('body').append('<button class="btn">새 버튼</button>');
```

**작동 원리:**
1. 이벤트는 **버블링**됩니다 (자식 → 부모 → 조상으로 전파)
2. 부모(`#container` 또는 `document`)가 이벤트를 받습니다
3. 실제로 클릭된 요소가 `.btn`인지 확인합니다
4. 맞으면 핸들러를 실행합니다

**장점:**
- 동적으로 추가된 요소도 자동으로 작동
- 메모리 효율적 (이벤트 핸들러 하나만 필요)
- 성능 향상 (많은 요소에 개별 이벤트 붙이지 않음)

### 실전 예제: 동적 할 일 목록

```javascript
// 이벤트 위임으로 삭제 버튼 처리
$('#todoList').on('click', '.delete-btn', function() {
    $(this).parent('li').remove();
});

// 항목 추가
$('#addBtn').click(function() {
    let todo = $('#todoInput').val();

    if (todo) {
        $('#todoList').append(`
            <li>
                ${todo}
                <button class="delete-btn">삭제</button>
            </li>
        `);

        $('#todoInput').val('');
    }
});

// 삭제 버튼에 별도로 이벤트를 붙이지 않아도
// 이벤트 위임 덕분에 자동으로 작동합니다!
```

## 이벤트 객체 (Event Object)

이벤트 핸들러는 **이벤트 객체(e)**를 받습니다. 이 객체에는 이벤트에 대한 모든 정보가 들어있습니다.

```javascript
$('#div').click(function(e) {  // e (또는 event)
    // 이벤트 타입
    console.log(e.type);  // 'click'

    // 실제로 클릭된 요소 (DOM 객체)
    console.log(e.target);

    // 이벤트 핸들러가 붙은 요소 (DOM 객체)
    console.log(e.currentTarget);

    // this는 e.currentTarget과 동일 (DOM 객체)
    console.log(this);

    // jQuery 객체로 변환
    console.log($(this));

    // 마우스 좌표
    console.log('X:', e.pageX, 'Y:', e.pageY);

    // 마우스 버튼 (1: 왼쪽, 2: 중간, 3: 오른쪽)
    console.log('버튼:', e.which);

    // 키보드 키
    console.log('키:', e.key);

    // 수정자 키 (Ctrl, Alt, Shift)
    console.log('Ctrl:', e.ctrlKey, 'Alt:', e.altKey, 'Shift:', e.shiftKey);
});
```

### target vs currentTarget - 중요한 차이

이 차이를 이해하는 것이 이벤트 위임의 핵심입니다.

```html
<div id="parent">
    <button id="child">버튼</button>
</div>
```

```javascript
$('#parent').click(function(e) {
    // target: 실제로 클릭된 요소
    console.log(e.target);  // <button id="child">
    console.log(e.target.id);  // "child"

    // currentTarget: 이벤트 핸들러가 붙은 요소
    console.log(e.currentTarget);  // <div id="parent">
    console.log(e.currentTarget.id);  // "parent"

    // this는 currentTarget과 동일
    console.log(this);  // <div id="parent">
    console.log(this.id);  // "parent"

    // jQuery 객체로 사용
    console.log($(this).attr('id'));  // "parent"
});
```

**실무 활용:**
```javascript
// 이벤트 위임에서 클릭된 실제 버튼 찾기
$('#list').on('click', '.item', function(e) {
    // this 또는 e.currentTarget: 클릭된 .item
    // e.target: 실제로 클릭된 요소 (버튼, 아이콘 등)

    console.log('클릭된 항목:', $(this).text());

    // 버튼만 반응하게 하려면
    if ($(e.target).is('.delete-btn')) {
        $(this).remove();
    }
});
```

## preventDefault() - 기본 동작 막기

브라우저는 특정 요소에 기본 동작이 있습니다. `preventDefault()`로 이를 막을 수 있습니다.

**언제 사용하나요?**
- 링크 클릭 시 페이지 이동 막기
- 폼 제출 막고 Ajax로 처리
- 우클릭 메뉴 막기
- 드래그 앤 드롭 커스터마이징

```javascript
// 링크 이동 막기
$('a').click(function(e) {
    e.preventDefault();
    console.log('링크 이동하지 않음');

    // 대신 커스텀 동작 수행
    let url = $(this).attr('href');
    loadContent(url);  // Ajax로 콘텐츠 로드
});

// 폼 제출 막고 검증 후 처리
$('#form').submit(function(e) {
    e.preventDefault();  // 폼 제출 막기

    // 검증
    if (!validate()) {
        alert('입력값을 확인하세요');
        return;
    }

    // 검증 통과 시 Ajax로 제출
    $.ajax({
        url: '/api/submit',
        method: 'POST',
        data: $(this).serialize(),
        success: function(response) {
            alert('제출 완료!');
        }
    });
});

// 우클릭 메뉴 막기
$(document).contextmenu(function(e) {
    e.preventDefault();
    console.log('우클릭 방지됨');

    // 커스텀 컨텍스트 메뉴 표시
    showCustomMenu(e.pageX, e.pageY);
});
```

## stopPropagation() - 이벤트 전파 막기

이벤트는 **버블링**으로 인해 자식 → 부모 → 조상으로 전파됩니다. `stopPropagation()`으로 이를 막을 수 있습니다.

**언제 사용하나요?**
- 부모의 이벤트와 충돌할 때
- 드롭다운 메뉴 (메뉴 내부 클릭 시 닫히지 않게)
- 모달 내부 클릭 시 모달 닫기 방지

```javascript
// 버블링 예제
$('#parent').click(function() {
    console.log('부모 클릭');
});

$('#child').click(function(e) {
    console.log('자식 클릭');
    e.stopPropagation();  // 부모로 전파 안 됨
});

// 자식을 클릭하면 "자식 클릭"만 출력
// 부모를 클릭하면 "부모 클릭"만 출력
```

### 실전 예제: 드롭다운 메뉴

```javascript
// 드롭다운 토글
$('.dropdown-btn').click(function(e) {
    e.stopPropagation();  // document 클릭 이벤트 막기
    $(this).next('.dropdown-menu').toggle();
});

// 메뉴 내부 클릭 시 닫히지 않게
$('.dropdown-menu').click(function(e) {
    e.stopPropagation();
});

// 바깥 클릭 시 모든 드롭다운 닫기
$(document).click(function() {
    $('.dropdown-menu').hide();
});
```

### return false - preventDefault + stopPropagation

`return false`는 두 가지를 동시에 수행합니다.

```javascript
$('a').click(function(e) {
    // 방법 1: 개별 호출 (명시적, 권장)
    e.preventDefault();
    e.stopPropagation();

    // 방법 2: return false (간단하지만 덜 명시적)
    return false;
});
```

**권장:**
- 명확성을 위해 `e.preventDefault()`와 `e.stopPropagation()`을 개별로 사용
- 정확히 무엇을 막고 있는지 알 수 있음

## 이벤트 제거

### off() - 이벤트 제거

이벤트가 더 이상 필요 없을 때 제거하여 메모리 절약과 의도치 않은 동작을 방지합니다.

```javascript
// 모든 클릭 이벤트 제거
$('#btn').off('click');

// 특정 핸들러만 제거 (함수명 필요)
function handleClick() {
    console.log('클릭');
}

$('#btn').on('click', handleClick);
$('#btn').off('click', handleClick);  // 이 핸들러만 제거

// 모든 이벤트 제거
$('#btn').off();

// 위임된 이벤트 제거
$('#parent').off('click', '.child');

// 네임스페이스로 특정 이벤트만 제거
$('#btn').on('click.myPlugin', function() { });
$('#btn').off('click.myPlugin');  // 이 네임스페이스만 제거
```

### one() - 한 번만 실행

이벤트를 한 번만 실행하고 자동으로 제거합니다.

**언제 사용하나요?**
- 최초 1회만 실행되어야 하는 작업
- 중복 실행 방지
- 일회성 알림, 튜토리얼

```javascript
// 첫 클릭만 실행하고 자동 제거
$('#btn').one('click', function() {
    console.log('첫 클릭만 실행됨');
    alert('환영합니다! 이 메시지는 한 번만 표시됩니다.');
});

// 두 번째 클릭부터는 아무 일도 일어나지 않음

// 실용 예제: 튜토리얼
$('#feature').one('mouseenter', function() {
    showTooltip('이 기능을 사용해보세요!');
});
```

## trigger() - 이벤트 강제 실행

프로그램적으로 이벤트를 발생시킬 수 있습니다.

**언제 사용하나요?**
- 사용자 동작을 시뮬레이션
- 폼 자동 제출
- 커스텀 이벤트 발생

```javascript
// 클릭 이벤트 강제 실행
$('#btn').trigger('click');

// 또는 짧게
$('#btn').click();  // 파라미터 없으면 trigger와 동일

// 폼 제출 트리거
$('#form').trigger('submit');

// 커스텀 이벤트 정의 및 발생
$('#div').on('dataLoaded', function(e, data, status) {
    console.log('데이터 로드됨:', data, status);
});

// 커스텀 이벤트 발생 (추가 파라미터 전달)
$('#div').trigger('dataLoaded', [{name: 'John'}, 'success']);
```

## 실전 예제

### 1. 실시간 검색

```javascript
let searchTimer;

$('#searchInput').on('input', function() {
    let keyword = $(this).val().toLowerCase();

    // 디바운싱 (300ms 후 실행)
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function() {
        // 검색 수행
        $('.item').each(function() {
            let text = $(this).text().toLowerCase();
            if (text.includes(keyword)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

        // 결과 개수 표시
        let count = $('.item:visible').length;
        $('#resultCount').text(count + '개 항목');
    }, 300);
});
```

### 2. 폼 검증

```javascript
$('#loginForm').submit(function(e) {
    e.preventDefault();  // 제출 막기

    let id = $('#userId').val().trim();
    let pw = $('#userPw').val();
    let isValid = true;

    // 아이디 검증
    if (id === '') {
        alert('아이디를 입력하세요');
        $('#userId').focus().addClass('error');
        isValid = false;
    } else if (id.length < 4) {
        alert('아이디는 4자 이상이어야 합니다');
        $('#userId').focus().addClass('error');
        isValid = false;
    }

    // 비밀번호 검증
    if (isValid && pw.length < 6) {
        alert('비밀번호는 6자 이상이어야 합니다');
        $('#userPw').focus().addClass('error');
        return false;
    }

    // 검증 통과 시
    if (isValid) {
        // Ajax로 로그인 처리
        $.ajax({
            url: '/api/login',
            method: 'POST',
            data: { id: id, pw: pw },
            success: function(response) {
                window.location.href = '/dashboard';
            },
            error: function() {
                alert('로그인 실패');
            }
        });
    }
});

// 입력 시 에러 스타일 제거
$('#userId, #userPw').on('input', function() {
    $(this).removeClass('error');
});
```

### 3. 모달 열기/닫기

```javascript
// 모달 열기
$('.open-modal').click(function() {
    let target = $(this).data('target');
    $('#' + target).fadeIn(300);
    $('body').addClass('modal-open');  // 스크롤 방지
});

// 모달 닫기 (이벤트 위임)
$(document).on('click', '.close-modal', function() {
    $(this).closest('.modal').fadeOut(300);
    $('body').removeClass('modal-open');
});

// 오버레이 클릭 시 닫기
$(document).on('click', '.modal-overlay', function() {
    $(this).parent('.modal').fadeOut(300);
    $('body').removeClass('modal-open');
});

// 모달 내부 클릭 시 닫히지 않게
$('.modal-content').click(function(e) {
    e.stopPropagation();
});

// ESC 키로 닫기
$(document).keydown(function(e) {
    if (e.key === 'Escape') {
        $('.modal:visible').fadeOut(300);
        $('body').removeClass('modal-open');
    }
});
```

### 4. 무한 스크롤

```javascript
let page = 1;
let loading = false;
let hasMore = true;

$(window).scroll(function() {
    // 스크롤이 하단 200px 이내 & 로딩 중이 아닐 때
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 200 && !loading && hasMore) {
        loadMore();
    }
});

function loadMore() {
    loading = true;
    $('#loading').show();

    $.get('/api/items', { page: page }, function(data) {
        if (data.length === 0) {
            hasMore = false;
            $('#loading').text('더 이상 항목이 없습니다');
        } else {
            data.forEach(function(item) {
                $('#itemList').append(`
                    <div class="item">
                        <h3>${item.title}</h3>
                        <p>${item.content}</p>
                    </div>
                `);
            });
            page++;
        }
    })
    .always(function() {
        loading = false;
        $('#loading').hide();
    });
}
```

### 5. 엔터키로 제출

```javascript
$('#searchInput').keydown(function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();  // 폼 제출 막기 (form 안에 있으면)
        $('#searchBtn').click();  // 검색 버튼 클릭 트리거
    }
});

// 또는 폼 전체에
$('#searchForm').submit(function(e) {
    e.preventDefault();
    let keyword = $('#searchInput').val();
    search(keyword);
});
```

### 6. 더블클릭 방지

```javascript
$('#submitBtn').click(function() {
    let $btn = $(this);

    // 이미 처리 중이면 무시
    if ($btn.prop('disabled')) {
        return;
    }

    // 버튼 비활성화
    $btn.prop('disabled', true).text('처리 중...');

    // 작업 수행
    $.ajax({
        url: '/api/submit',
        method: 'POST',
        data: { /* 데이터 */ },
        success: function(response) {
            $btn.text('완료!');
            setTimeout(function() {
                $btn.prop('disabled', false).text('제출');
            }, 2000);
        },
        error: function() {
            alert('오류 발생');
            $btn.prop('disabled', false).text('다시 시도');
        }
    });
});
```

### 7. 글자 수 카운터

```javascript
let maxLength = 200;

$('#textarea').on('input', function() {
    let length = $(this).val().length;
    let remaining = maxLength - length;

    $('#charCount').text(length + ' / ' + maxLength);

    // 글자 수 초과 시
    if (remaining < 0) {
        $('#charCount').addClass('error');
        $(this).val($(this).val().substring(0, maxLength));
    } else if (remaining < 20) {
        $('#charCount').addClass('warning');
    } else {
        $('#charCount').removeClass('error warning');
    }
});
```

## 이벤트 네임스페이스

네임스페이스로 같은 이벤트를 구분하여 관리할 수 있습니다.

**언제 사용하나요?**
- 플러그인 개발 시
- 특정 이벤트만 제거하고 싶을 때
- 여러 모듈이 같은 요소를 사용할 때

```javascript
// 네임스페이스로 구분
$('#div').on('click.plugin1', function() {
    console.log('플러그인 1');
});

$('#div').on('click.plugin2', function() {
    console.log('플러그인 2');
});

$('#div').on('click', function() {
    console.log('일반 클릭');
});

// plugin1 네임스페이스만 제거
$('#div').off('click.plugin1');

// 일반 클릭과 plugin2는 그대로 작동
$('#div').click();
// 출력: "플러그인 2", "일반 클릭"

// 모든 click 이벤트 제거
$('#div').off('click');
```

## Vanilla JS vs jQuery 비교

| 작업 | Vanilla JS | jQuery |
|------|-----------|--------|
| 클릭 이벤트 | `el.addEventListener('click', fn)` | `$el.click(fn)` 또는 `$el.on('click', fn)` |
| 이벤트 제거 | `el.removeEventListener('click', fn)` | `$el.off('click', fn)` |
| 이벤트 위임 | 수동 구현 필요 | `$(parent).on('click', '.child', fn)` |
| 한 번만 실행 | 수동으로 제거 필요 | `$el.one('click', fn)` |
| 기본 동작 막기 | `e.preventDefault()` | `e.preventDefault()` (동일) |
| 전파 막기 | `e.stopPropagation()` | `e.stopPropagation()` (동일) |
| hover 효과 | 두 이벤트 등록 | `$el.hover(fnIn, fnOut)` |

---
**핵심: 동적 요소는 이벤트 위임 필수! on() 메서드를 기본으로 사용하세요.**

**모범 사례:**
- 이벤트 핸들러는 `on()` 사용 (단축 메서드보다 유연)
- 동적 요소는 항상 이벤트 위임 사용
- 실시간 입력 감지는 `input` 이벤트
- 불필요한 이벤트는 `off()`로 제거하여 메모리 관리
