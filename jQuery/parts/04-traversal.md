# Part 4. DOM 탐색 (Traversal)

## 🎯 핵심: DOM 트리를 자유자재로 탐색하기

**DOM 탐색은 현재 요소를 기준으로 다른 요소를 찾는 기술입니다.**

웹 페이지의 HTML은 트리 구조로 되어 있습니다. jQuery는 이 트리를 쉽게 탐색할 수 있는 메서드들을 제공합니다.

**왜 중요한가요?**
- 이벤트가 발생한 요소의 부모나 형제를 찾을 때
- 복잡한 HTML 구조에서 특정 요소를 찾을 때
- 선택자만으로는 찾기 어려운 요소에 접근할 때

## DOM 트리 구조

HTML의 계층 구조를 이해하는 것이 중요합니다.

```html
<div id="grandparent" class="container">      <!-- 조상 -->
    <div id="parent" class="wrapper">         <!-- 부모 -->
        <div id="prev-sibling">이전 형제</div> <!-- 이전 형제 -->
        <div id="target">                      <!-- 현재 요소 -->
            <span id="child">자식</span>       <!-- 자식 -->
        </div>
        <div id="next-sibling">다음 형제</div> <!-- 다음 형제 -->
    </div>
</div>
```

## 부모 탐색

### parent() - 직계 부모

바로 위의 부모 요소 하나만 선택합니다.

```javascript
// 직계 부모
$('#child').parent();  // #target

// 특정 선택자와 일치하는 부모만
$('#child').parent('.wrapper');  // 없음 (직계 부모가 아님)

// 실전 예제: 버튼의 부모 div에 클래스 추가
$('.btn').click(function() {
    $(this).parent().addClass('active');
});
```

### parents() - 모든 조상

현재 요소의 모든 조상 요소들을 선택합니다.

```javascript
// 모든 조상
$('#child').parents();  // #target, #parent, #grandparent, body, html

// 특정 조건의 조상만
$('#child').parents('.container');  // #grandparent

// 첫 번째 조상만
$('#child').parents().first();

// 실전 예제: 가장 가까운 .card 찾기
$('.delete-btn').click(function() {
    $(this).parents('.card').first().remove();
});
```

### closest() - 가장 가까운 조상 (자신 포함)

자신을 포함하여 조건에 맞는 가장 가까운 조상을 찾습니다.

```javascript
// 자신 포함하여 가장 가까운 .container
$('#child').closest('.container');  // #grandparent

// 자신이 조건에 맞으면 자신 반환
$('#target').closest('#target');  // #target (자기 자신)

// 실전 예제: 폼 찾기
$('input').blur(function() {
    let $form = $(this).closest('form');
    validateForm($form);
});

// 실전 예제: 리스트 항목 삭제
$('.delete-btn').click(function() {
    $(this).closest('li').remove();
});
```

**parent() vs parents() vs closest():**

| 메서드 | 범위 | 자신 포함 | 반환 |
|--------|------|----------|------|
| `parent()` | 직계 부모만 | ❌ | 1개 또는 0개 |
| `parents()` | 모든 조상 | ❌ | 여러 개 |
| `closest()` | 조건에 맞는 가장 가까운 조상 | ✅ | 1개 또는 0개 |

**언제 무엇을 사용?**
- **바로 위 부모** → `parent()`
- **특정 조건의 조상** → `closest()` (가장 자주 사용)
- **모든 조상 탐색** → `parents()`

## 자식 탐색

### children() - 직계 자식

바로 아래 자식 요소들만 선택합니다.

```javascript
// 모든 직계 자식
$('#parent').children();  // #prev-sibling, #target, #next-sibling

// 특정 조건의 자식만
$('#parent').children('.active');

// 실전 예제: 메뉴 항목들
$('#menu').children('li').addClass('menu-item');
```

### find() - 모든 자손

하위의 모든 자손 요소를 선택합니다.

```javascript
// 모든 자손 중 span
$('#parent').find('span');  // #child

// 여러 레벨 아래도 찾음
$('#grandparent').find('#child');  // 찾음

// 실전 예제: 카드 안의 버튼들
$('.card').each(function() {
    $(this).find('button').prop('disabled', true);
});
```

**children() vs find():**

| 메서드 | 범위 | 선택자 |
|--------|------|--------|
| `children()` | 직계 자식만 | 선택적 |
| `find()` | 모든 자손 | 필수 |

```javascript
// children - 한 레벨만
$('#parent').children('div');  // #prev-sibling, #target, #next-sibling

// find - 모든 하위
$('#parent').find('div');  // #prev-sibling, #target, #next-sibling

// find는 더 깊이 탐색
$('#parent').children('span');  // 없음 (직계 자식이 아님)
$('#parent').find('span');     // #child (자손 중에 있음)
```

## 형제 탐색

### siblings() - 모든 형제

자신을 제외한 모든 형제 요소를 선택합니다.

```javascript
// 모든 형제
$('#target').siblings();  // #prev-sibling, #next-sibling

// 특정 조건의 형제만
$('#target').siblings('.active');

// 실전 예제: 탭 전환
$('.tab-btn').click(function() {
    $(this).addClass('active')
        .siblings().removeClass('active');
});
```

### next() / prev() - 다음/이전 형제

바로 다음 또는 이전 형제 요소 하나만 선택합니다.

```javascript
// 다음 형제
$('#target').next();  // #next-sibling

// 이전 형제
$('#target').prev();  // #prev-sibling

// 특정 조건의 다음 형제
$('#target').next('.highlight');

// 실전 예제: 아코디언
$('.accordion-header').click(function() {
    $(this).next('.accordion-content').slideToggle();
});
```

### nextAll() / prevAll() - 모든 다음/이전 형제

이후 또는 이전의 모든 형제 요소들을 선택합니다.

```javascript
// 이후의 모든 형제
$('#target').nextAll();

// 이전의 모든 형제
$('#target').prevAll();

// 특정 조건 필터
$('#target').nextAll('.item');

// 실전 예제: 선택한 항목 이후 모두 숨기기
$('.item').click(function() {
    $(this).nextAll().hide();
});
```

### nextUntil() / prevUntil() - 특정 요소까지의 형제

특정 요소를 만날 때까지의 형제들을 선택합니다.

```javascript
// #start부터 #end 전까지
$('#start').nextUntil('#end');

// 실전 예제: 섹션 범위 선택
$('.section-start').nextUntil('.section-end').addClass('section-content');
```

## 필터링 및 검색

### filter() - 조건에 맞는 것만

선택된 요소 중 조건에 맞는 것만 걸러냅니다.

```javascript
// 클래스로 필터
$('li').filter('.active');

// 함수로 필터
$('li').filter(function(index) {
    return $(this).data('priority') > 5;
});

// 실전 예제: 짝수 번째만
$('tr').filter(':even').addClass('stripe');
```

### not() - 조건에 맞지 않는 것

선택된 요소 중 조건에 맞지 않는 것만 선택합니다.

```javascript
// 특정 클래스 제외
$('div').not('.exclude');

// 특정 요소 제외
$('.item').not($(this));

// 실전 예제: 클릭한 것 제외 모두 숨기기
$('.panel').click(function() {
    $('.panel').not(this).hide();
});
```

### is() - 조건 확인

요소가 조건에 맞는지 true/false로 반환합니다.

```javascript
// 클래스 확인
if ($('#myDiv').is('.active')) {
    console.log('활성 상태');
}

// 보이는지 확인
if ($('#modal').is(':visible')) {
    console.log('모달 표시 중');
}

// 실전 예제: 조건부 처리
$('button').click(function() {
    if ($(this).is('.disabled')) {
        return;  // 비활성화면 무시
    }
    // 처리
});
```

### has() - 특정 자손을 가진 요소

특정 자손 요소를 포함하는 것만 선택합니다.

```javascript
// img를 포함하는 div만
$('div').has('img');

// 실전 예제: 자식이 있는 항목만 표시
$('li').has('ul').addClass('has-submenu');
```

## 인덱스 및 범위 선택

### eq() - 인덱스로 선택

특정 인덱스의 요소 하나만 선택합니다.

```javascript
// 3번째 요소 (0부터 시작)
$('li').eq(2);

// 음수는 뒤에서부터
$('li').eq(-1);  // 마지막 요소

// 실전 예제: 특정 슬라이드 표시
function showSlide(index) {
    $('.slide').hide().eq(index).fadeIn();
}
```

### first() / last() - 첫번째/마지막

```javascript
// 첫 번째
$('li').first();  // $('li').eq(0)와 동일

// 마지막
$('li').last();  // $('li').eq(-1)와 동일

// 실전 예제
$('menu li').first().addClass('first');
$('menu li').last().addClass('last');
```

### slice() - 범위 선택

특정 범위의 요소들을 선택합니다.

```javascript
// 2번째부터 4번째까지 (2, 3, 4)
$('li').slice(2, 5);

// 2번째부터 끝까지
$('li').slice(2);

// 실전 예제: 처음 5개만 표시
$('.item').slice(5).hide();

$('.show-more').click(function() {
    $('.item:hidden').slice(0, 5).fadeIn();
});
```

## 연쇄 탐색 (Chaining)

여러 탐색 메서드를 연결하여 사용할 수 있습니다.

```javascript
// 부모의 이전 형제의 자식
$('#start')
    .parent()
    .prev()
    .children('.target');

// 조상 찾고 그 안의 특정 요소
$('.btn')
    .closest('.card')
    .find('.title')
    .text('새 제목');

// 실전 예제: 복잡한 탐색
$('.delete-btn').click(function() {
    $(this)
        .closest('.item')      // 항목 찾기
        .siblings('.item')     // 형제 항목들
        .removeClass('active'); // 비활성화
});
```

## 탐색 종료 및 되돌리기

### end() - 이전 선택으로 복귀

체이닝 중 이전 선택 상태로 돌아갑니다.

```javascript
$('#start')
    .find('.child')
    .addClass('highlight')
    .end()  // #start로 돌아감
    .find('.other')
    .addClass('other-highlight');

// 실전 예제
$('.card')
    .find('.title')
    .text('제목')
    .end()
    .find('.content')
    .text('내용');
```

### addBack() - 이전 선택 추가

현재 선택에 이전 선택을 추가합니다.

```javascript
$('#start')
    .find('span')
    .addBack()  // #start와 span 모두 선택
    .addClass('highlight');
```

## 실전 예제

### 1. 동적 네비게이션

```javascript
// 현재 페이지 메뉴 활성화
$('.nav a').each(function() {
    if ($(this).attr('href') === window.location.pathname) {
        $(this).addClass('active')
            .closest('li')
            .addClass('active');
    }
});
```

### 2. 폼 그룹 에러 표시

```javascript
$('input').on('invalid', function(e) {
    e.preventDefault();

    $(this)
        .addClass('error')
        .closest('.form-group')
        .addClass('has-error')
        .find('.error-message')
        .text(this.validationMessage);
});
```

### 3. 테이블 행 선택

```javascript
$('table tbody tr').click(function() {
    // 클릭한 행 활성화
    $(this).addClass('selected')
        .siblings().removeClass('selected');

    // 행의 데이터 가져오기
    let data = {
        id: $(this).find('td').eq(0).text(),
        name: $(this).find('td').eq(1).text(),
        email: $(this).find('td').eq(2).text()
    };

    console.log(data);
});
```

### 4. 중첩 메뉴 토글

```javascript
$('.menu-item').has('ul').addClass('has-submenu');

$('.has-submenu > a').click(function(e) {
    e.preventDefault();

    $(this)
        .next('ul')
        .slideToggle()
        .end()
        .parent()
        .toggleClass('open')
        .siblings()
        .removeClass('open')
        .find('ul')
        .slideUp();
});
```

### 5. 체크박스 그룹 제어

```javascript
// 전체 선택/해제
$('.select-all').change(function() {
    let isChecked = $(this).prop('checked');

    $(this)
        .closest('table')
        .find('tbody :checkbox')
        .prop('checked', isChecked);
});

// 개별 체크박스 변경 시 전체 선택 업데이트
$('tbody :checkbox').change(function() {
    let $table = $(this).closest('table');
    let total = $table.find('tbody :checkbox').length;
    let checked = $table.find('tbody :checkbox:checked').length;

    $table.find('.select-all').prop('checked', total === checked);
});
```

## 성능 팁

```javascript
// ❌ 나쁜 예 - 반복적인 DOM 탐색
$('#parent').find('.child').addClass('active');
$('#parent').find('.child').css('color', 'red');
$('#parent').find('.child').fadeIn();

// ✅ 좋은 예 - 한 번만 탐색 후 캐싱
let $child = $('#parent').find('.child');
$child.addClass('active');
$child.css('color', 'red');
$child.fadeIn();

// ✅ 더 좋은 예 - 체이닝
$('#parent')
    .find('.child')
    .addClass('active')
    .css('color', 'red')
    .fadeIn();
```

## 탐색 메서드 총정리

### 부모 방향
- `parent()` - 직계 부모
- `parents()` - 모든 조상
- `closest()` - 가장 가까운 조상 (자신 포함) ⭐ 가장 자주 사용

### 자식 방향
- `children()` - 직계 자식
- `find()` - 모든 자손 ⭐ 가장 자주 사용

### 형제 방향
- `siblings()` - 모든 형제
- `next()` / `prev()` - 다음/이전 형제 ⭐ 자주 사용
- `nextAll()` / `prevAll()` - 모든 다음/이전 형제
- `nextUntil()` / `prevUntil()` - 특정 요소까지

### 필터링
- `filter()` - 조건에 맞는 것만
- `not()` - 조건에 맞지 않는 것
- `is()` - 조건 확인 (boolean)
- `has()` - 특정 자손 포함

### 인덱스
- `eq()` - 특정 인덱스
- `first()` / `last()` - 첫/마지막
- `slice()` - 범위 선택

---
**핵심: closest()와 find()를 마스터하면 대부분의 탐색을 해결할 수 있습니다**

**모범 사례:**
- 복잡한 선택자 대신 탐색 메서드 조합 사용
- 같은 요소를 여러 번 탐색하지 말고 변수에 캐싱
- 체이닝으로 코드 간결하게 유지
- 가장 가까운 조상 찾기 → `closest()`
- 하위 요소 찾기 → `find()`
