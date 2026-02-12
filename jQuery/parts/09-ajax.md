# Part 9. Ajax 통신

## 🎯 핵심: 페이지 새로고침 없이 서버와 통신

**Ajax = 비동기 JavaScript and XML (실제로는 주로 JSON 사용)**

페이지를 새로고침하지 않고 서버에서 데이터를 가져오거나 보낼 수 있습니다.

## Ajax란?

**전통적인 방식 (페이지 새로고침):**
```
사용자 클릭 → 서버 요청 → 페이지 전체 새로고침 → 데이터 표시
```

**Ajax 방식 (새로고침 없음):**
```
사용자 클릭 → 백그라운드에서 서버 요청 → 필요한 부분만 업데이트
```

## $.ajax() - 기본 메서드

### 기본 구조

```javascript
$.ajax({
    url: 'api/data',           // 요청 URL
    method: 'GET',             // HTTP 메서드 (GET, POST, PUT, DELETE)
    dataType: 'json',          // 응답 데이터 타입
    data: { id: 123 },         // 전송할 데이터
    success: function(data) {  // 성공 시
        console.log('성공:', data);
    },
    error: function(xhr, status, error) {  // 실패 시
        console.log('실패:', error);
    },
    complete: function() {     // 완료 시 (성공/실패 상관없이)
        console.log('요청 완료');
    }
});
```

### 주요 옵션

| 옵션 | 설명 | 예시 |
|------|------|------|
| `url` | 요청할 주소 | `'api/users'` |
| `method` | HTTP 메서드 | `'GET'`, `'POST'`, `'PUT'`, `'DELETE'` |
| `data` | 전송할 데이터 | `{ name: '홍길동' }` |
| `dataType` | 응답 데이터 타입 | `'json'`, `'html'`, `'text'`, `'xml'` |
| `contentType` | 요청 데이터 타입 | `'application/json'` |
| `timeout` | 타임아웃 (ms) | `5000` (5초) |
| `headers` | 추가 헤더 | `{ 'Authorization': 'Bearer token' }` |

## 단축 메서드

### $.get() - GET 요청

```javascript
// 기본 사용
$.get('api/users', function(data) {
    console.log('사용자 목록:', data);
});

// 파라미터 전달
$.get('api/users', { age: 25, city: 'Seoul' }, function(data) {
    console.log('필터된 사용자:', data);
});

// 위와 동일한 $.ajax() 방식
$.ajax({
    url: 'api/users',
    method: 'GET',
    data: { age: 25, city: 'Seoul' },
    success: function(data) {
        console.log('필터된 사용자:', data);
    }
});
```

### $.post() - POST 요청

```javascript
// 데이터 전송
$.post('api/users', {
    name: '홍길동',
    email: 'hong@example.com',
    age: 30
}, function(response) {
    console.log('등록 완료:', response);
});

// 위와 동일한 $.ajax() 방식
$.ajax({
    url: 'api/users',
    method: 'POST',
    data: { name: '홍길동', email: 'hong@example.com', age: 30 },
    success: function(response) {
        console.log('등록 완료:', response);
    }
});
```

### $.getJSON() - JSON 데이터 가져오기

```javascript
// JSON 전용 (dataType: 'json' 자동 설정)
$.getJSON('api/products', function(products) {
    products.forEach(function(product) {
        console.log(product.name, product.price);
    });
});
```

## Promise 스타일 (권장)

**jQuery 1.5+부터 지원하는 Promise 방식:**

### .done() / .fail() / .always()

```javascript
$.ajax({
    url: 'api/data',
    method: 'GET'
})
.done(function(data) {
    console.log('성공:', data);
})
.fail(function(xhr, status, error) {
    console.log('실패:', error);
})
.always(function() {
    console.log('요청 완료 (성공/실패 무관)');
});
```

### 여러 요청 동시 처리

```javascript
// 여러 Ajax 요청을 동시에 보내고 모두 완료되면 실행
$.when(
    $.get('api/users'),
    $.get('api/products'),
    $.get('api/orders')
)
.done(function(users, products, orders) {
    console.log('모든 데이터 로드 완료');
    console.log('사용자:', users[0]);
    console.log('상품:', products[0]);
    console.log('주문:', orders[0]);
})
.fail(function() {
    console.log('하나 이상 실패');
});
```

## 실전 예제

### 1. 사용자 목록 가져와서 렌더링

```javascript
function loadUsers() {
    $.get('api/users')
        .done(function(users) {
            $('#userList').empty();  // 기존 목록 비우기

            users.forEach(function(user) {
                let html = `
                    <div class="user-card">
                        <h3>${user.name}</h3>
                        <p>${user.email}</p>
                        <button class="delete-btn" data-id="${user.id}">삭제</button>
                    </div>
                `;
                $('#userList').append(html);
            });
        })
        .fail(function() {
            alert('사용자 목록을 불러오지 못했습니다.');
        });
}

// 페이지 로드 시 실행
$(function() {
    loadUsers();
});
```

### 2. 폼 데이터 전송

```javascript
$('#userForm').submit(function(e) {
    e.preventDefault();  // 기본 폼 제출 막기

    // 폼 데이터 수집
    let formData = {
        name: $('#name').val(),
        email: $('#email').val(),
        age: $('#age').val()
    };

    // 서버로 전송
    $.post('api/users', formData)
        .done(function(response) {
            alert('등록 완료!');
            $('#userForm')[0].reset();  // 폼 초기화
            loadUsers();  // 목록 새로고침
        })
        .fail(function(xhr) {
            alert('등록 실패: ' + xhr.responseJSON.message);
        });
});
```

### 3. 실시간 검색

```javascript
let searchTimer;

$('#searchInput').on('input', function() {
    let keyword = $(this).val();

    // 이전 타이머 취소 (디바운싱)
    clearTimeout(searchTimer);

    // 300ms 후 검색 실행
    searchTimer = setTimeout(function() {
        if (keyword.length < 2) {
            $('#searchResults').empty();
            return;
        }

        $.get('api/search', { q: keyword })
            .done(function(results) {
                $('#searchResults').empty();

                if (results.length === 0) {
                    $('#searchResults').html('<p>결과 없음</p>');
                    return;
                }

                results.forEach(function(item) {
                    $('#searchResults').append(`
                        <div class="result-item">${item.title}</div>
                    `);
                });
            });
    }, 300);
});
```

### 4. 로딩 스피너

```javascript
// Ajax 요청 시작 전 (전역)
$(document).ajaxStart(function() {
    $('#loading').show();
});

// Ajax 요청 완료 후 (전역)
$(document).ajaxStop(function() {
    $('#loading').hide();
});

// 또는 개별 요청에서
function loadData() {
    $('#loading').show();

    $.get('api/data')
        .done(function(data) {
            // 데이터 처리
        })
        .always(function() {
            $('#loading').hide();
        });
}
```

### 5. 삭제 기능

```javascript
// 이벤트 위임 사용 (동적 요소)
$('#userList').on('click', '.delete-btn', function() {
    let userId = $(this).data('id');
    let $card = $(this).closest('.user-card');

    if (!confirm('정말 삭제하시겠습니까?')) return;

    $.ajax({
        url: 'api/users/' + userId,
        method: 'DELETE'
    })
    .done(function() {
        $card.fadeOut(300, function() {
            $(this).remove();
        });
        alert('삭제 완료');
    })
    .fail(function() {
        alert('삭제 실패');
    });
});
```

### 6. 수정 기능

```javascript
$('#userList').on('click', '.edit-btn', function() {
    let userId = $(this).data('id');

    // 기존 데이터 가져오기
    $.get('api/users/' + userId)
        .done(function(user) {
            // 폼에 데이터 채우기
            $('#userId').val(user.id);
            $('#name').val(user.name);
            $('#email').val(user.email);
            $('#age').val(user.age);

            // 모달 열기
            $('#editModal').fadeIn();
        });
});

// 수정 저장
$('#editForm').submit(function(e) {
    e.preventDefault();

    let userId = $('#userId').val();
    let formData = {
        name: $('#name').val(),
        email: $('#email').val(),
        age: $('#age').val()
    };

    $.ajax({
        url: 'api/users/' + userId,
        method: 'PUT',
        data: formData
    })
    .done(function() {
        alert('수정 완료');
        $('#editModal').fadeOut();
        loadUsers();
    })
    .fail(function() {
        alert('수정 실패');
    });
});
```

### 7. JSON 데이터 전송

```javascript
// Content-Type을 application/json으로 설정
$.ajax({
    url: 'api/users',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
        name: '홍길동',
        email: 'hong@example.com',
        age: 30
    }),
    success: function(response) {
        console.log('등록 완료:', response);
    }
});
```

### 8. 헤더 추가 (인증)

```javascript
// 토큰 인증
$.ajax({
    url: 'api/protected-data',
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
    success: function(data) {
        console.log('보호된 데이터:', data);
    },
    error: function(xhr) {
        if (xhr.status === 401) {
            alert('로그인이 필요합니다');
            window.location.href = '/login';
        }
    }
});
```

### 9. 무한 스크롤

```javascript
let page = 1;
let loading = false;

$(window).scroll(function() {
    // 하단 100px 이내 & 로딩 중이 아닐 때
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100 && !loading) {
        loadMore();
    }
});

function loadMore() {
    loading = true;
    $('#loading').show();

    $.get('api/posts', { page: page })
        .done(function(posts) {
            if (posts.length === 0) {
                $('#loading').text('더 이상 게시물이 없습니다');
                return;
            }

            posts.forEach(function(post) {
                $('#postList').append(`
                    <div class="post">
                        <h3>${post.title}</h3>
                        <p>${post.content}</p>
                    </div>
                `);
            });

            page++;
        })
        .always(function() {
            loading = false;
            $('#loading').hide();
        });
}
```

### 10. 파일 업로드

```javascript
$('#fileInput').change(function() {
    let formData = new FormData();
    formData.append('file', this.files[0]);

    $.ajax({
        url: 'api/upload',
        method: 'POST',
        data: formData,
        processData: false,  // 중요!
        contentType: false,  // 중요!
        success: function(response) {
            console.log('업로드 완료:', response.url);
            $('#preview').attr('src', response.url);
        },
        error: function() {
            alert('업로드 실패');
        }
    });
});
```

## 전역 설정

### $.ajaxSetup() - 기본 설정

```javascript
// 모든 Ajax 요청에 적용되는 기본 설정
$.ajaxSetup({
    timeout: 10000,  // 10초 타임아웃
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    error: function(xhr) {
        if (xhr.status === 401) {
            alert('로그인이 필요합니다');
            window.location.href = '/login';
        }
    }
});
```

### 전역 이벤트

```javascript
// 모든 Ajax 시작 시
$(document).ajaxStart(function() {
    $('#globalLoading').show();
});

// 모든 Ajax 완료 시
$(document).ajaxStop(function() {
    $('#globalLoading').hide();
});

// 모든 Ajax 성공 시
$(document).ajaxSuccess(function(event, xhr, settings) {
    console.log('요청 성공:', settings.url);
});

// 모든 Ajax 실패 시
$(document).ajaxError(function(event, xhr, settings, error) {
    console.log('요청 실패:', settings.url, error);
});
```

## 에러 처리

### HTTP 상태 코드별 처리

```javascript
$.ajax({
    url: 'api/data',
    method: 'GET'
})
.fail(function(xhr) {
    switch(xhr.status) {
        case 400:
            alert('잘못된 요청입니다');
            break;
        case 401:
            alert('로그인이 필요합니다');
            window.location.href = '/login';
            break;
        case 403:
            alert('권한이 없습니다');
            break;
        case 404:
            alert('데이터를 찾을 수 없습니다');
            break;
        case 500:
            alert('서버 오류가 발생했습니다');
            break;
        default:
            alert('알 수 없는 오류: ' + xhr.status);
    }
});
```

## $.ajax() vs Fetch API

| 기준 | jQuery Ajax | Fetch API |
|------|-------------|-----------|
| 크기 | jQuery 필요 (30KB+) | 네이티브 (0KB) |
| 문법 | 옵션 객체 | Promise 기반 |
| 브라우저 | 모든 브라우저 | IE 미지원 |
| 타임아웃 | 내장 지원 | 수동 구현 필요 |
| 자동 JSON | dataType: 'json' | .json() 필요 |
| 에러 처리 | HTTP 에러도 fail() | HTTP 에러는 catch 안 됨 |

```javascript
// jQuery Ajax
$.ajax({
    url: 'api/data',
    method: 'GET',
    dataType: 'json',
    timeout: 5000
})
.done(function(data) { })
.fail(function() { });

// Fetch API
fetch('api/data', {
    method: 'GET'
})
.then(response => {
    if (!response.ok) throw new Error('HTTP error');
    return response.json();
})
.then(data => { })
.catch(error => { });
```

## 디버깅 팁

```javascript
// 요청 내용 확인
$.ajax({
    url: 'api/data',
    method: 'POST',
    data: { name: 'test' },
    beforeSend: function(xhr, settings) {
        console.log('요청 URL:', settings.url);
        console.log('요청 데이터:', settings.data);
        console.log('요청 헤더:', xhr.getAllResponseHeaders());
    }
});

// 응답 내용 확인
$.ajax({
    url: 'api/data'
})
.done(function(data, textStatus, xhr) {
    console.log('응답 데이터:', data);
    console.log('응답 상태:', textStatus);
    console.log('XHR 객체:', xhr);
    console.log('응답 헤더:', xhr.getAllResponseHeaders());
});
```

---
**핵심: Ajax는 페이지 새로고침 없이 서버와 통신하는 기술**
