# Part 7. DOM 생성 및 조작 심화

## 🎯 핵심: 동적으로 요소를 생성하고 관리하기

**실제 웹 앱에서는 HTML을 미리 작성하지 않고, JavaScript로 동적으로 생성하는 경우가 많습니다.**

예를 들어:
- Ajax로 받은 데이터를 화면에 표시
- 사용자가 추가한 항목을 리스트에 추가
- 템플릿 복제로 같은 구조 반복
- 조건에 따라 다른 UI 생성

jQuery는 요소 생성과 조작을 매우 간편하게 만들어줍니다.

## HTML 문자열로 요소 생성

### 기본 생성 방법

jQuery는 HTML 문자열을 전달하면 자동으로 요소를 생성합니다.

```javascript
// 간단한 요소 생성
let $div = $('<div>');
let $p = $('<p>안녕하세요</p>');
let $img = $('<img src="image.jpg" alt="이미지">');

// 복잡한 구조도 가능
let $card = $(`
    <div class="card">
        <img src="image.jpg" alt="상품">
        <h3>상품명</h3>
        <p class="price">₩10,000</p>
        <button class="buy-btn">구매하기</button>
    </div>
`);

// DOM에 추가
$('body').append($card);
```

**주의사항:**
- 백틱(\` \`)을 사용하면 여러 줄 HTML 작성 가능
- 생성만 하고 추가하지 않으면 메모리에만 존재 (화면에 안 보임)
- append(), prepend() 등으로 DOM에 추가해야 화면에 표시

### 속성과 함께 생성

```javascript
// 메서드 체이닝으로 속성 추가
let $link = $('<a>')
    .attr('href', 'https://example.com')
    .attr('target', '_blank')
    .text('링크 텍스트')
    .addClass('external-link');

// 객체로 한 번에 설정
let $input = $('<input>', {
    type: 'text',
    name: 'username',
    placeholder: '이름을 입력하세요',
    class: 'form-input',
    value: '기본값'
});

// 이벤트도 함께 설정
let $button = $('<button>', {
    text: '클릭',
    class: 'btn btn-primary',
    click: function() {
        alert('버튼 클릭!');
    }
});
```

## 요소 추가 위치별 메서드

### append() vs appendTo()

두 메서드는 같은 결과지만 **주체와 대상이 반대**입니다.

```javascript
// append(): 부모에 자식을 추가
$('#container').append($div);
$('#container').append('<p>새 문단</p>');

// appendTo(): 자식이 부모로 이동
$div.appendTo('#container');
$('<p>새 문단</p>').appendTo('#container');

// 체이닝 시 차이
$('#container')
    .append('<p>첫 번째</p>')
    .append('<p>두 번째</p>')  // container 계속 사용
    .addClass('filled');

$('<p>내용</p>')
    .appendTo('#container')
    .addClass('highlight')  // 추가된 p 사용
    .click(function() { });
```

**언제 무엇을 사용?**
- **부모가 중요** → `append()` (부모를 계속 체이닝)
- **추가되는 요소가 중요** → `appendTo()` (추가된 요소를 계속 체이닝)

### 위치별 추가 메서드 전체

```javascript
let $target = $('#target');
let $new = $('<div>새 요소</div>');

// 내부 (자식으로)
$target.append($new);   // 내부 맨 끝에
$target.prepend($new);  // 내부 맨 앞에

// 외부 (형제로)
$target.after($new);    // 타겟 바로 뒤에
$target.before($new);   // 타겟 바로 앞에

// 반대 버전 (대상이 앞으로)
$new.appendTo($target);
$new.prependTo($target);
$new.insertAfter($target);
$new.insertBefore($target);
```

**시각화:**
```html
<!-- before -->
<div id="target">
    <!-- prepend -->
    기존 내용
    <!-- append -->
</div>
<!-- after -->
```

## 요소 제거 메서드

### remove() vs detach() vs empty()

세 메서드는 각각 다른 용도로 사용됩니다.

```javascript
// remove() - 완전히 제거 (이벤트도 함께)
$('#myDiv').remove();
// DOM에서 사라지고 이벤트 핸들러도 제거됨

// detach() - 분리 (나중에 재사용 가능, 이벤트 유지)
let $detached = $('#myDiv').detach();
// DOM에서만 제거, 변수에 보관
// 나중에 다시 추가 가능
$('#container').append($detached);  // 이벤트 핸들러 그대로

// empty() - 내부만 비우기
$('#myDiv').empty();
// div 자체는 남고 내부 내용만 삭제
```

**언제 무엇을 사용?**
- **완전 삭제** → `remove()`
- **임시 분리 후 재사용** → `detach()`
- **내용만 초기화** → `empty()`

### 조건부 제거

```javascript
// 특정 클래스만 제거
$('div').remove('.old');  // class="old"인 div만 제거

// 특정 조건의 요소 제거
$('li').filter(function() {
    return $(this).data('status') === 'deleted';
}).remove();

// 또는 직접 선택
$('li[data-status="deleted"]').remove();
```

## 요소 복제

### clone() - 요소 복사

요소를 복제하여 재사용할 수 있습니다.

```javascript
// 기본 복제 (이벤트 제외)
let $clone = $('#original').clone();
$('#container').append($clone);

// 이벤트까지 복제
let $cloneWithEvents = $('#original').clone(true);
$('#container').append($cloneWithEvents);

// 실전 예제: 템플릿 복제
$('.add-item').click(function() {
    let $template = $('.item-template').clone(true);
    $template
        .removeClass('item-template')
        .addClass('item')
        .show()  // 템플릿은 숨겨져 있음
        .appendTo('#item-list');
});
```

**clone(true) vs clone():**
- `clone()` → HTML만 복제 (이벤트 없음)
- `clone(true)` → HTML + 이벤트 핸들러 복제

## 동적 생성 패턴

### 1. 배열 데이터를 리스트로 변환

```javascript
let fruits = ['사과', '바나나', '딸기', '포도', '수박'];

// 방법 1: forEach
fruits.forEach(function(fruit) {
    $('#fruitList').append(`<li>${fruit}</li>`);
});

// 방법 2: map과 join (더 빠름)
let html = fruits.map(function(fruit) {
    return `<li>${fruit}</li>`;
}).join('');
$('#fruitList').html(html);

// 방법 3: 한 번에 생성 후 추가 (권장)
let $items = fruits.map(function(fruit) {
    return $('<li>').text(fruit);
});
$('#fruitList').append($items);
```

**성능 비교:**
- 방법 1 (forEach + append) → 느림 (매번 DOM 조작)
- 방법 2 (join + html) → 빠름 (한 번만 DOM 조작)
- 방법 3 (map + append) → 중간 (한 번에 추가)

### 2. Ajax 데이터를 카드로 표시

```javascript
$.get('/api/products', function(products) {
    let html = products.map(function(product) {
        return `
            <div class="product-card" data-id="${product.id}">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">₩${product.price.toLocaleString()}</p>
                <button class="cart-btn">장바구니</button>
            </div>
        `;
    }).join('');

    $('#productList').html(html);
});
```

### 3. 테이블 동적 생성

```javascript
function createTable(data) {
    let $table = $('<table>').addClass('data-table');

    // 헤더
    let $thead = $('<thead>');
    let $headerRow = $('<tr>');
    Object.keys(data[0]).forEach(function(key) {
        $headerRow.append($('<th>').text(key));
    });
    $thead.append($headerRow);
    $table.append($thead);

    // 본문
    let $tbody = $('<tbody>');
    data.forEach(function(row) {
        let $tr = $('<tr>');
        Object.values(row).forEach(function(value) {
            $tr.append($('<td>').text(value));
        });
        $tbody.append($tr);
    });
    $table.append($tbody);

    return $table;
}

// 사용
let users = [
    { id: 1, name: '홍길동', age: 30 },
    { id: 2, name: '김철수', age: 25 },
    { id: 3, name: '이영희', age: 28 }
];

$('#tableContainer').append(createTable(users));
```

### 4. 폼 동적 생성

```javascript
function createForm(fields) {
    let $form = $('<form>');

    fields.forEach(function(field) {
        let $group = $('<div>').addClass('form-group');

        // 라벨
        $group.append(
            $('<label>')
                .attr('for', field.name)
                .text(field.label)
        );

        // 입력 필드
        let $input = $('<input>', {
            type: field.type || 'text',
            name: field.name,
            id: field.name,
            placeholder: field.placeholder || '',
            required: field.required || false
        });
        $group.append($input);

        $form.append($group);
    });

    // 제출 버튼
    $form.append(
        $('<button>', {
            type: 'submit',
            text: '제출',
            class: 'btn-submit'
        })
    );

    return $form;
}

// 사용
let formFields = [
    { name: 'username', label: '사용자명', required: true },
    { name: 'email', label: '이메일', type: 'email', required: true },
    { name: 'age', label: '나이', type: 'number' }
];

$('#formContainer').append(createForm(formFields));
```

### 5. 템플릿 시스템

```javascript
// HTML 템플릿 (숨김)
<script type="text/template" id="user-template">
    <div class="user-card">
        <img src="{{avatar}}" alt="{{name}}">
        <h3>{{name}}</h3>
        <p>{{email}}</p>
        <button data-id="{{id}}">상세보기</button>
    </div>
</script>

// JavaScript
function renderTemplate(templateId, data) {
    let template = $('#' + templateId).html();

    // 간단한 템플릿 엔진
    Object.keys(data).forEach(function(key) {
        let regex = new RegExp('{{' + key + '}}', 'g');
        template = template.replace(regex, data[key]);
    });

    return $(template);
}

// 사용
let user = {
    id: 1,
    name: '홍길동',
    email: 'hong@example.com',
    avatar: 'avatar.jpg'
};

$('#userList').append(renderTemplate('user-template', user));
```

## 요소 교체 및 감싸기

### replaceWith() - 요소 교체

```javascript
// 단순 교체
$('#oldButton').replaceWith('<button id="newButton">새 버튼</button>');

// 여러 요소 교체
$('.old-item').replaceWith(function() {
    return '<div class="new-item">' + $(this).text() + '</div>';
});
```

### wrap() 계열 - 요소 감싸기

```javascript
// wrap() - 각각 감싸기
$('p').wrap('<div class="wrapper"></div>');
// <div class="wrapper"><p>...</p></div>
// <div class="wrapper"><p>...</p></div>

// wrapAll() - 모두 하나로 감싸기
$('p').wrapAll('<div class="container"></div>');
// <div class="container">
//   <p>...</p>
//   <p>...</p>
// </div>

// wrapInner() - 내부 내용 감싸기
$('div').wrapInner('<span></span>');
// <div><span>원래 내용</span></div>

// unwrap() - 감싼 것 제거
$('span').unwrap();  // span의 부모 제거
```

## 메모리 관리

### 이벤트 핸들러 제거

```javascript
// ❌ 나쁜 예 - 메모리 누수
$('.item').click(function() { });
$('.item').remove();  // DOM은 제거되지만 이벤트는 남음

// ✅ 좋은 예 1 - remove()는 자동으로 이벤트 제거
$('.item').remove();  // 이벤트도 함께 제거됨

// ✅ 좋은 예 2 - 명시적으로 제거
$('.item').off('click').remove();

// ✅ 좋은 예 3 - 이벤트 위임 사용 (권장)
$('#container').on('click', '.item', function() { });
// 동적 요소도 작동, 메모리 효율적
```

### DocumentFragment 활용 (성능)

```javascript
// ❌ 나쁜 예 - 매번 DOM 조작
for (let i = 0; i < 1000; i++) {
    $('#list').append('<li>Item ' + i + '</li>');
}

// ✅ 좋은 예 - 한 번에 추가
let html = '';
for (let i = 0; i < 1000; i++) {
    html += '<li>Item ' + i + '</li>';
}
$('#list').html(html);

// ✅ 더 좋은 예 - jQuery 객체 배열
let $items = [];
for (let i = 0; i < 1000; i++) {
    $items.push($('<li>').text('Item ' + i));
}
$('#list').append($items);
```

## 실전 예제

### 1. 동적 할 일 리스트

```javascript
let todoId = 0;

$('#addTodo').click(function() {
    let text = $('#todoInput').val().trim();

    if (text) {
        let $todo = $('<li>', {
            'data-id': ++todoId,
            'class': 'todo-item'
        });

        $todo.append(
            $('<span>').addClass('todo-text').text(text),
            $('<button>').addClass('complete-btn').text('완료'),
            $('<button>').addClass('delete-btn').text('삭제')
        );

        $('#todoList').append($todo);
        $('#todoInput').val('');
    }
});

// 이벤트 위임
$('#todoList').on('click', '.complete-btn', function() {
    $(this).closest('li').toggleClass('completed');
});

$('#todoList').on('click', '.delete-btn', function() {
    $(this).closest('li').fadeOut(300, function() {
        $(this).remove();
    });
});
```

### 2. 상품 카드 생성기

```javascript
function createProductCard(product) {
    return $('<div>', { class: 'product-card' })
        .append(
            $('<img>', {
                src: product.image,
                alt: product.name
            }),
            $('<h3>').text(product.name),
            $('<p>', { class: 'price' })
                .text('₩' + product.price.toLocaleString()),
            $('<p>', { class: 'description' })
                .text(product.description),
            $('<button>', {
                class: 'cart-btn',
                'data-id': product.id,
                text: '장바구니 담기'
            })
        );
}

// 사용
$.get('/api/products', function(products) {
    let $cards = products.map(createProductCard);
    $('#productGrid').empty().append($cards);
});
```

### 3. 댓글 시스템

```javascript
let comments = [];

$('#commentForm').submit(function(e) {
    e.preventDefault();

    let comment = {
        id: Date.now(),
        author: $('#authorName').val(),
        text: $('#commentText').val(),
        date: new Date()
    };

    comments.push(comment);
    renderComments();

    this.reset();
});

function renderComments() {
    let $commentList = $('#commentList').empty();

    comments.forEach(function(comment) {
        let $comment = $('<div>', {
            class: 'comment',
            'data-id': comment.id
        });

        $comment.append(
            $('<div>', { class: 'comment-header' })
                .append(
                    $('<strong>').text(comment.author),
                    $('<span>', { class: 'comment-date' })
                        .text(formatDate(comment.date))
                ),
            $('<p>', { class: 'comment-text' })
                .text(comment.text),
            $('<button>', {
                class: 'delete-comment',
                text: '삭제'
            })
        );

        $commentList.append($comment);
    });
}

$('#commentList').on('click', '.delete-comment', function() {
    let id = $(this).closest('.comment').data('id');
    comments = comments.filter(c => c.id !== id);
    renderComments();
});
```

## 성능 최적화 팁

```javascript
// ❌ 나쁜 예
$('#list').empty();
data.forEach(function(item) {
    $('#list').append('<li>' + item + '</li>');
});

// ✅ 좋은 예
let html = data.map(item => '<li>' + item + '</li>').join('');
$('#list').html(html);

// ❌ 나쁜 예 - DOM 조작 후 다시 조회
$('#container').append('<div id="newDiv"></div>');
$('#newDiv').addClass('active');  // 다시 조회

// ✅ 좋은 예 - 변수에 저장
let $newDiv = $('<div>', { id: 'newDiv', class: 'active' });
$('#container').append($newDiv);
// $newDiv 계속 사용 가능
```

---
**핵심: 요소를 효율적으로 생성하고, 이벤트 위임으로 동적 요소를 관리하세요**

**모범 사례:**
- 여러 요소는 한 번에 추가 (성능)
- 이벤트 위임으로 동적 요소 처리
- 불필요한 DOM 조회 최소화
- 메모리 누수 방지 (이벤트 제거)
