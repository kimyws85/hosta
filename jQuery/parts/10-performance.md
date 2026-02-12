# Part 10. 성능 최적화 & 팁

## 1. 선택자 최적화

선택자는 jQuery 성능의 핵심입니다. 브라우저가 DOM에서 요소를 찾는 방식에 따라 성능 차이가 크게 발생합니다.

### 1.1 ID 선택자가 가장 빠름

ID 선택자는 브라우저의 네이티브 `getElementById()`를 사용하므로 가장 빠릅니다.

```javascript
// ⚡ 가장 빠름 - 네이티브 getElementById() 사용
$('#myId')

// 🐌 느림 - 복잡한 선택자 체인
$('.container .content #myId')

// 🐌 매우 느림 - 전체 DOM 탐색
$('div#myId')
```

**성능 순서:**
```javascript
$('#id')              // 가장 빠름 ⚡⚡⚡
$('.class')           // 빠름 ⚡⚡
$('tag')              // 보통 ⚡
$('[attribute]')      // 느림 🐌
$(':visible')         // 매우 느림 🐌🐌
```

### 1.2 선택자를 구체적으로

```javascript
// 나쁜 예 - 전체 DOM 탐색
$('.button')

// 좋은 예 - 컨텍스트 제한
$('.button', '#toolbar')
// 또는
$('#toolbar').find('.button')
```

### 1.3 오른쪽에서 왼쪽으로 읽힘

jQuery는 선택자를 오른쪽에서 왼쪽으로 읽습니다. 가장 오른쪽(키 선택자)을 구체적으로 만드세요.

```javascript
// 나쁜 예 - '.content'가 먼저 모두 찾아짐
$('.content span')

// 좋은 예 - '.highlight'가 먼저 찾아짐 (더 적음)
$('.highlight', '.content')
```

## 2. DOM 조작 최적화

DOM 조작은 비용이 많이 듭니다. 리플로우(reflow)와 리페인트(repaint)를 최소화해야 합니다.

### 2.1 한 번에 조작하기

```javascript
// 나쁜 예 - 여러 번 DOM 조작
for (let i = 0; i < 100; i++) {
    $('#list').append('<li>Item ' + i + '</li>');  // 100번 리플로우!
}

// 좋은 예 1 - 문자열로 한 번에
let html = '';
for (let i = 0; i < 100; i++) {
    html += '<li>Item ' + i + '</li>';
}
$('#list').append(html);  // 1번만 리플로우

// 좋은 예 2 - DocumentFragment 사용
let $fragment = $(document.createDocumentFragment());
for (let i = 0; i < 100; i++) {
    $fragment.append('<li>Item ' + i + '</li>');
}
$('#list').append($fragment);
```

### 2.2 Detach를 이용한 대량 조작

많은 조작을 할 때는 요소를 DOM에서 분리하고, 조작 후 다시 붙입니다.

```javascript
// DOM에서 분리
let $list = $('#myList').detach();

// 대량 조작 (리플로우 없음)
for (let i = 0; i < 1000; i++) {
    $list.append('<li>Item ' + i + '</li>');
}

// 다시 붙이기 (1번만 리플로우)
$('#container').append($list);
```

### 2.3 CSS 클래스로 스타일 변경

```javascript
// 나쁜 예 - 여러 번 스타일 변경
$('#box')
    .css('width', '100px')
    .css('height', '100px')
    .css('background', 'red')
    .css('border', '1px solid black');  // 4번 리플로우

// 좋은 예 - CSS 클래스 하나로
$('#box').addClass('highlight');  // 1번만 리플로우
```

```css
.highlight {
    width: 100px;
    height: 100px;
    background: red;
    border: 1px solid black;
}
```

## 3. 캐싱 활용

같은 요소를 반복해서 선택하는 것은 낭비입니다.

### 3.1 변수에 캐싱

```javascript
// 나쁜 예 - 3번 선택
$('#myDiv').addClass('active');
$('#myDiv').css('color', 'red');
$('#myDiv').fadeIn();

// 좋은 예 - 1번만 선택
let $myDiv = $('#myDiv');
$myDiv.addClass('active');
$myDiv.css('color', 'red');
$myDiv.fadeIn();

// 더 좋은 예 - 체이닝
$('#myDiv')
    .addClass('active')
    .css('color', 'red')
    .fadeIn();
```

### 3.2 this 캐싱

이벤트 핸들러 내에서 `$(this)`를 여러 번 사용할 때:

```javascript
// 나쁜 예
$('.button').click(function() {
    $(this).addClass('clicked');
    $(this).siblings().removeClass('clicked');
    $(this).fadeOut().fadeIn();  // 3번 감싸짐
});

// 좋은 예
$('.button').click(function() {
    let $this = $(this);  // 1번만 감싸기
    $this.addClass('clicked');
    $this.siblings().removeClass('clicked');
    $this.fadeOut().fadeIn();
});
```

### 3.3 결과 캐싱

```javascript
// 나쁜 예 - 매번 길이 계산
for (let i = 0; i < $('.item').length; i++) {
    // ...
}

// 좋은 예 - 한 번만 계산
let $items = $('.item');
let itemCount = $items.length;
for (let i = 0; i < itemCount; i++) {
    // ...
}
```

## 4. 이벤트 최적화

### 4.1 이벤트 위임 (Event Delegation)

동적으로 추가되는 요소나 많은 요소에 이벤트를 붙일 때 필수입니다.

```javascript
// 나쁜 예 - 각 버튼마다 이벤트 핸들러 (메모리 낭비)
$('.button').click(function() {
    console.log('clicked');
});
// 100개 버튼 = 100개 핸들러

// 좋은 예 - 부모에 1개 핸들러만
$('#container').on('click', '.button', function() {
    console.log('clicked');
});
// 100개 버튼 = 1개 핸들러
```

**이벤트 위임의 장점:**
- 메모리 절약
- 동적 요소 자동 처리
- 이벤트 핸들러 관리 용이

### 4.2 네임스페이스로 이벤트 관리

```javascript
// 네임스페이스로 구분
$('#modal').on('click.modal', '.close', function() {
    // 모달 닫기
});

$('#modal').on('keydown.modal', function(e) {
    if (e.key === 'Escape') {
        // ESC로 닫기
    }
});

// 특정 네임스페이스만 제거
$('#modal').off('.modal');
```

### 4.3 불필요한 이벤트 제거

```javascript
// SPA에서 페이지 전환 시
function cleanupPage() {
    // 이벤트 제거
    $('#oldContent').off();

    // 타이머 제거
    clearInterval(autoScrollTimer);
    clearTimeout(hideTooltipTimer);
}
```

### 4.4 디바운스와 쓰로틀

빈번한 이벤트(resize, scroll, input)는 제어가 필요합니다.

```javascript
// 디바운스 - 마지막 호출만 실행
function debounce(func, wait) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(context, args);
        }, wait);
    };
}

// 검색 입력에 적용
$('#search').on('input', debounce(function() {
    // API 호출
    searchAPI($(this).val());
}, 300));  // 300ms 후 실행
```

```javascript
// 쓰로틀 - 일정 간격으로만 실행
function throttle(func, wait) {
    let timeout;
    return function() {
        if (!timeout) {
            timeout = setTimeout(function() {
                timeout = null;
                func.apply(this, arguments);
            }, wait);
        }
    };
}

// 스크롤에 적용
$(window).on('scroll', throttle(function() {
    // 스크롤 위치 확인
    checkScrollPosition();
}, 100));  // 100ms마다 최대 1번
```

## 5. 애니메이션 성능

### 5.1 CSS3 애니메이션 사용

가능하면 jQuery 애니메이션보다 CSS3를 사용하세요. GPU 가속을 받습니다.

```javascript
// 느림 - jQuery 애니메이션
$('#box').animate({
    left: '100px',
    top: '100px'
}, 500);

// 빠름 - CSS transition
$('#box').addClass('moved');
```

```css
#box {
    transition: transform 0.5s ease;
}

#box.moved {
    transform: translate(100px, 100px);  /* GPU 가속 */
}
```

### 5.2 transform 사용

`left`, `top` 대신 `transform`을 사용하면 리플로우를 피할 수 있습니다.

```javascript
// 나쁜 예 - 리플로우 발생
$('#box').animate({
    left: '+=100px'
});

// 좋은 예 - transform 사용
let currentX = 0;
$('#box').click(function() {
    currentX += 100;
    $(this).css('transform', 'translateX(' + currentX + 'px)');
});
```

### 5.3 requestAnimationFrame 사용

부드러운 애니메이션을 위해:

```javascript
function smoothScroll(target) {
    let start = $(window).scrollTop();
    let end = $(target).offset().top;
    let distance = end - start;
    let duration = 1000;
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let progress = Math.min(timeElapsed / duration, 1);

        window.scrollTo(0, start + distance * easeInOutQuad(progress));

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animation);
}
```

## 6. Ajax 최적화

### 6.1 요청 캐싱

같은 데이터를 반복 요청하지 않기:

```javascript
let cache = {};

function getData(url) {
    if (cache[url]) {
        // 캐시된 데이터 사용
        return $.Deferred().resolve(cache[url]).promise();
    }

    return $.ajax({
        url: url,
        cache: true
    }).done(function(data) {
        cache[url] = data;
    });
}

// 사용
getData('/api/users').done(function(data) {
    console.log(data);  // 첫 번째는 Ajax, 두 번째부터는 캐시
});
```

### 6.2 요청 중복 방지

```javascript
let currentRequest = null;

function search(keyword) {
    // 이전 요청 취소
    if (currentRequest) {
        currentRequest.abort();
    }

    currentRequest = $.ajax({
        url: '/api/search',
        data: { q: keyword }
    }).done(function(results) {
        displayResults(results);
    }).always(function() {
        currentRequest = null;
    });
}
```

### 6.3 배치 요청

```javascript
// 나쁜 예 - 10번 요청
for (let i = 0; i < 10; i++) {
    $.get('/api/item/' + i);
}

// 좋은 예 - 1번 요청
$.post('/api/items/batch', {
    ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}).done(function(items) {
    // 모든 아이템 처리
});
```

## 7. 메모리 누수 방지

### 7.1 이벤트 핸들러 정리

```javascript
// 나쁜 예 - 이벤트가 계속 쌓임
function showModal() {
    let $modal = $('#modal');
    $modal.on('click', '.close', function() {
        $modal.hide();
    });
    $modal.show();
}
// 10번 호출하면 10개 핸들러가 붙음

// 좋은 예 1 - off() 후 on()
function showModal() {
    let $modal = $('#modal');
    $modal.off('click', '.close');  // 기존 제거
    $modal.on('click', '.close', function() {
        $modal.hide();
    });
    $modal.show();
}

// 좋은 예 2 - one() 사용
function showModal() {
    let $modal = $('#modal');
    $modal.one('click', '.close', function() {  // 1번만 실행
        $modal.hide();
    });
    $modal.show();
}
```

### 7.2 순환 참조 피하기

```javascript
// 나쁜 예 - 순환 참조
let $element = $('#myElement');
$element.data('self', $element);  // 메모리 누수 가능

// 좋은 예 - 필요한 데이터만 저장
let $element = $('#myElement');
$element.data('id', $element.attr('id'));
```

### 7.3 큰 데이터 정리

```javascript
// 페이지 떠날 때 정리
$(window).on('beforeunload', function() {
    // 데이터 제거
    $('.item').removeData();

    // 이벤트 제거
    $(document).off();

    // 큰 객체 정리
    largeDataArray = null;
    cache = {};
});
```

## 8. jQuery 크기 줄이기

### 8.1 커스텀 빌드

사용하지 않는 모듈 제외:

```bash
# Ajax와 효과만 제외한 빌드
npm install
grunt custom:-ajax,-effects
```

### 8.2 Slim 버전 사용

Ajax와 effects가 필요 없다면:

```html
<!-- 일반 버전: 87KB -->
<script src="jquery-3.6.0.min.js"></script>

<!-- Slim 버전: 71KB -->
<script src="jquery-3.6.0.slim.min.js"></script>
```

## 9. Vanilla JS로 전환 고려

간단한 작업은 Vanilla JS가 훨씬 빠릅니다.

### 9.1 선택과 조작

```javascript
// jQuery: 선택
$('#myId')
$('.myClass')
$('div')

// Vanilla JS: 더 빠름
document.getElementById('myId')
document.getElementsByClassName('myClass')
document.querySelectorAll('div')

// jQuery: 텍스트 변경
$('#myId').text('Hello');

// Vanilla JS: 훨씬 빠름
document.getElementById('myId').textContent = 'Hello';
```

### 9.2 이벤트

```javascript
// jQuery
$('#button').on('click', function() {
    console.log('clicked');
});

// Vanilla JS
document.getElementById('button').addEventListener('click', function() {
    console.log('clicked');
});
```

### 9.3 클래스 조작

```javascript
// jQuery
$('#myDiv').addClass('active');
$('#myDiv').removeClass('inactive');
$('#myDiv').toggleClass('visible');

// Vanilla JS (IE10+)
let el = document.getElementById('myDiv');
el.classList.add('active');
el.classList.remove('inactive');
el.classList.toggle('visible');
```

### 9.4 Ajax

```javascript
// jQuery
$.get('/api/data', function(data) {
    console.log(data);
});

// Vanilla JS (Fetch API)
fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log(data));
```

**언제 Vanilla JS를 사용할까?**
- 단순한 DOM 조작 (ID로 찾기, 텍스트 변경 등)
- 모던 브라우저만 지원할 때
- 번들 크기가 중요할 때
- 성능이 매우 중요한 부분

**언제 jQuery를 사용할까?**
- 복잡한 선택자와 탐색
- 크로스 브라우저 호환성이 필요할 때
- 애니메이션과 효과가 많을 때
- 기존 jQuery 플러그인을 사용할 때

## 10. 체이닝 활용

메서드 체이닝은 코드를 간결하게 하고, 선택을 1번만 하므로 효율적입니다.

```javascript
// 나쁜 예 - 반복 선택
let $div = $('#myDiv');
$div.addClass('active');
$div.css('color', 'red');
$div.fadeIn(300);
$div.html('Hello');

// 좋은 예 - 체이닝
$('#myDiv')
    .addClass('active')
    .css('color', 'red')
    .fadeIn(300)
    .html('Hello');
```

### end()로 체인 복귀

```javascript
$('#list')
    .find('li')              // li 요소들 선택
        .addClass('item')     // li에 클래스 추가
        .filter(':even')      // 짝수만
            .addClass('even') // even 클래스 추가
        .end()                // filter 이전으로 (모든 li)
    .end()                    // find 이전으로 (#list)
    .addClass('processed');   // #list에 클래스 추가
```

## 11. 성능 측정과 프로파일링

### 11.1 성능 측정

```javascript
// 시간 측정
console.time('operation');

// 측정할 코드
for (let i = 0; i < 10000; i++) {
    $('#list').append('<li>Item</li>');
}

console.timeEnd('operation');  // operation: 234.56ms
```

### 11.2 선택자 성능 비교

```javascript
function testSelector(selector, iterations) {
    let start = performance.now();

    for (let i = 0; i < iterations; i++) {
        $(selector);
    }

    let end = performance.now();
    console.log(selector + ': ' + (end - start).toFixed(2) + 'ms');
}

testSelector('#myId', 10000);           // #myId: 12.34ms
testSelector('.myClass', 10000);        // .myClass: 45.67ms
testSelector('div.myClass', 10000);     // div.myClass: 89.12ms
testSelector('[data-id="123"]', 10000); // [data-id="123"]: 234.56ms
```

### 11.3 크롬 DevTools 활용

```javascript
// Performance 탭에서 기록
// 1. F12 → Performance 탭
// 2. 녹화 시작
// 3. 작업 수행
// 4. 녹화 중지
// 5. 분석: Scripting, Rendering, Painting 시간 확인
```

## 12. 실전 성능 패턴

### 예제 1: 대량 리스트 렌더링

```javascript
// 10,000개 아이템을 효율적으로 렌더링
function renderLargeList(items) {
    let html = [];
    let chunkSize = 100;
    let currentChunk = 0;

    function renderChunk() {
        let start = currentChunk * chunkSize;
        let end = Math.min(start + chunkSize, items.length);

        for (let i = start; i < end; i++) {
            html.push('<li>' + items[i].name + '</li>');
        }

        currentChunk++;

        if (end < items.length) {
            // 다음 청크를 비동기로
            setTimeout(renderChunk, 0);
        } else {
            // 완료 - 한 번에 DOM 추가
            $('#list').html(html.join(''));
        }
    }

    renderChunk();
}
```

### 예제 2: 가상 스크롤 (Virtual Scroll)

```javascript
// 보이는 영역의 아이템만 렌더링
let VirtualScroll = {
    itemHeight: 50,
    visibleItems: 20,
    totalItems: 10000,
    scrollTop: 0,

    init: function() {
        let $container = $('#scrollContainer');
        let totalHeight = this.totalItems * this.itemHeight;

        // 전체 높이 설정
        $container.height(totalHeight);

        // 스크롤 이벤트
        $container.on('scroll', $.proxy(this.onScroll, this));

        // 초기 렌더링
        this.render();
    },

    onScroll: function(e) {
        this.scrollTop = $(e.target).scrollTop();
        this.render();
    },

    render: function() {
        let firstIndex = Math.floor(this.scrollTop / this.itemHeight);
        let lastIndex = firstIndex + this.visibleItems;

        let html = [];
        for (let i = firstIndex; i < lastIndex; i++) {
            if (i < this.totalItems) {
                let top = i * this.itemHeight;
                html.push(
                    '<div class="item" style="position:absolute;top:' + top + 'px">' +
                        'Item ' + i +
                    '</div>'
                );
            }
        }

        $('#scrollContent').html(html.join(''));
    }
};

VirtualScroll.init();
```

### 예제 3: 이미지 Lazy Loading 최적화

```javascript
// IntersectionObserver를 사용한 효율적인 Lazy Loading
let LazyLoad = {
    observer: null,

    init: function() {
        // IntersectionObserver 지원 확인
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(
                this.onIntersection.bind(this),
                { rootMargin: '50px' }  // 50px 전에 로드
            );

            // 모든 lazy 이미지 관찰
            $('img[data-src]').each(function() {
                LazyLoad.observer.observe(this);
            });
        } else {
            // 폴백: 스크롤 이벤트 (쓰로틀 적용)
            $(window).on('scroll', this.throttle(this.checkImages, 200));
            this.checkImages();
        }
    },

    onIntersection: function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                let $img = $(entry.target);
                $img.attr('src', $img.data('src'));
                $img.removeAttr('data-src');
                LazyLoad.observer.unobserve(entry.target);
            }
        });
    },

    checkImages: function() {
        let windowHeight = $(window).height();
        let scrollTop = $(window).scrollTop();

        $('img[data-src]').each(function() {
            let $img = $(this);
            let imgTop = $img.offset().top;

            if (imgTop < scrollTop + windowHeight + 50) {
                $img.attr('src', $img.data('src'));
                $img.removeAttr('data-src');
            }
        });
    },

    throttle: function(func, wait) {
        let timeout;
        return function() {
            if (!timeout) {
                timeout = setTimeout(function() {
                    timeout = null;
                    func();
                }, wait);
            }
        };
    }
};

LazyLoad.init();
```

## 13. 성능 최적화 체크리스트

### 선택자
- [ ] ID 선택자를 최대한 활용
- [ ] 복잡한 선택자 체인 피하기
- [ ] 컨텍스트를 지정하여 범위 좁히기
- [ ] 선택 결과를 변수에 캐싱

### DOM 조작
- [ ] 대량 조작 시 한 번에 처리 (문자열 연결 또는 fragment)
- [ ] detach() 활용하여 DOM에서 분리 후 조작
- [ ] CSS 클래스로 스타일 변경
- [ ] 리플로우/리페인트 최소화

### 이벤트
- [ ] 이벤트 위임 사용
- [ ] 불필요한 이벤트 핸들러 제거
- [ ] 디바운스/쓰로틀 적용 (scroll, resize, input)
- [ ] 네임스페이스로 이벤트 관리

### 애니메이션
- [ ] CSS3 transition/transform 우선 사용
- [ ] GPU 가속 활용 (transform, opacity)
- [ ] requestAnimationFrame 사용
- [ ] 동시 애니메이션 최소화

### Ajax
- [ ] 요청 결과 캐싱
- [ ] 중복 요청 방지
- [ ] 배치 요청으로 통합
- [ ] 압축 및 최소화된 응답

### 메모리
- [ ] 이벤트 핸들러 정리
- [ ] 사용하지 않는 데이터 제거
- [ ] 순환 참조 피하기
- [ ] 큰 객체는 null로 초기화

### 코드
- [ ] 메서드 체이닝 활용
- [ ] 반복문 내 선택자 사용 금지
- [ ] 간단한 작업은 Vanilla JS 고려
- [ ] jQuery Slim 또는 커스텀 빌드 검토

## 14. 성능 목표 가이드

### 응답 시간 기준
- **50ms 이하**: 즉각 반응 (클릭, 호버)
- **100ms 이하**: 빠르다고 느낌 (애니메이션 시작)
- **300ms 이하**: 약간 지연 감지 (페이지 전환)
- **1000ms 이하**: 허용 가능 (복잡한 작업)
- **1000ms 이상**: 로딩 표시 필요

### 최적화 우선순위
1. **첫 화면 렌더링** - 가장 중요
2. **사용자 인터랙션** - 클릭, 입력 반응
3. **애니메이션 부드러움** - 60fps 목표
4. **백그라운드 작업** - Ajax, 계산

### 프로파일링 도구
- Chrome DevTools Performance
- Lighthouse
- WebPageTest
- jQuery Audit 플러그인

---

jQuery는 편리하지만 무분별하게 사용하면 성능 문제가 발생합니다. 선택자 최적화, DOM 조작 최소화, 이벤트 위임, 캐싱 등의 기법을 적절히 활용하면 빠르고 효율적인 웹 애플리케이션을 만들 수 있습니다.
