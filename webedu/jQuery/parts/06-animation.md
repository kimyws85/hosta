# Part 6. 애니메이션 & 효과

## 🎯 핵심: 부드러운 UI 전환으로 사용자 경험 향상

**애니메이션은 정적인 웹 페이지를 생동감 있게 만듭니다.**

갑자기 요소가 나타나거나 사라지면 사용자는 혼란스러울 수 있습니다. 하지만 부드러운 애니메이션을 사용하면:
- 사용자의 주의를 끌 수 있습니다
- 변화를 자연스럽게 느끼게 합니다
- 전문적이고 세련된 느낌을 줍니다
- 사용자 경험(UX)이 크게 향상됩니다

예를 들어:
- 알림 메시지가 천천히 나타났다가 사라집니다
- 메뉴가 슬라이드로 부드럽게 펼쳐집니다
- 이미지 갤러리에서 사진이 페이드 효과로 전환됩니다
- 모달이 부드럽게 나타나고 배경이 어두워집니다

jQuery는 CSS transition보다 간편하고, Vanilla JavaScript보다 훨씬 쉽게 애니메이션을 구현할 수 있게 해줍니다.

## 기본 효과 - show/hide/toggle

### show() / hide() - 표시/숨김

`show()`와 `hide()`는 요소를 보이거나 숨기는 가장 기본적인 메서드입니다.

**언제 사용하나요?**
- 요소를 즉시 또는 천천히 나타내고 싶을 때
- 숨겨진 콘텐츠를 보여줄 때
- 조건에 따라 UI를 표시/숨김

**작동 방식:**
- `hide()` → `display: none` 설정
- `show()` → 원래의 display 값으로 복원 (block, inline 등)
- 속도를 지정하면 width, height, opacity를 동시에 애니메이션

```javascript
// Vanilla JS - 즉시 실행만 가능
element.style.display = 'block';
element.style.display = 'none';

// jQuery - 즉시 실행
$('#div').show();   // display: block (또는 원래 값)
$('#div').hide();   // display: none

// 애니메이션과 함께
$('#div').show('slow');  // 천천히 나타남 (600ms)
$('#div').hide('fast');  // 빠르게 사라짐 (200ms)
$('#div').show(1000);    // 1초 동안 나타남
```

**속도 옵션:**
| 값 | 시간 | 용도 |
|----|------|------|
| `'slow'` | 600ms | 느리고 부드러운 효과 |
| `'fast'` | 200ms | 빠르고 간결한 효과 |
| 숫자 | 밀리초 | 정확한 시간 제어 (1000 = 1초) |

### toggle() - 표시/숨김 전환

`toggle()`은 현재 상태를 확인하여 **보이면 숨기고, 숨겨져 있으면 보여줍니다**. 버튼 하나로 표시/숨김을 반복할 때 매우 유용합니다.

**언제 사용하나요?**
- "더보기/접기" 버튼
- 메뉴 열기/닫기
- FAQ 아코디언
- 모바일 메뉴 토글

```javascript
// Vanilla JS - 조건문 필요
if (element.style.display === 'none') {
    element.style.display = 'block';
} else {
    element.style.display = 'none';
}

// jQuery - 한 줄로 해결
$('#div').toggle();        // 즉시 전환
$('#div').toggle('slow');  // 애니메이션과 함께 전환

// 실전 예제: 더보기 버튼
$('#moreBtn').click(function() {
    $('#content').toggle('slow');
    $(this).text($('#content').is(':visible') ? '접기' : '더보기');
});
```

## Fade 효과 - 투명도 변화

Fade 효과는 **투명도(opacity)만 변화**시킵니다. 매우 부드럽고 자연스러워서 가장 많이 사용되는 효과입니다.

**언제 사용하나요?**
- 모달 열기/닫기
- 알림 메시지 표시
- 이미지 갤러리 전환
- 부드러운 등장/퇴장 효과

**show/hide와의 차이:**
- `show/hide` → width, height, opacity 모두 변화 (더 역동적)
- `fadeIn/fadeOut` → opacity만 변화 (더 부드러움)

### fadeIn() / fadeOut() - 페이드 인/아웃

```javascript
// 즉시
$('#div').fadeIn();

// 천천히
$('#div').fadeIn('slow');

// 정확한 시간 (1초)
$('#div').fadeOut(1000);

// 콜백 함수 - 애니메이션 완료 후 실행
$('#div').fadeOut(500, function() {
    console.log('페이드 아웃 완료!');
    $(this).remove();  // 완전히 제거
});
```

### fadeToggle() - 페이드 전환

```javascript
// 보이면 fadeOut, 숨겨져 있으면 fadeIn
$('#div').fadeToggle();

// 실전 예제: 알림 메시지
$('#showAlert').click(function() {
    $('#alert').fadeToggle(300);
});
```

### fadeTo() - 특정 투명도로 변경

`fadeTo()`는 **완전히 숨기거나 보이는 것이 아니라, 특정 투명도로 조정**합니다.

**언제 사용하나요?**
- 비활성 상태 표시 (50% 투명도)
- 배경 어둡게 (overlay)
- 강조/비강조 효과

```javascript
// 0.5 투명도로 (50% 반투명)
$('#div').fadeTo('slow', 0.5);

// 완전 불투명으로
$('#div').fadeTo(1000, 1);

// 거의 투명하게 (10%)
$('#div').fadeTo('fast', 0.1);

// 실전 예제: 비활성 상태 표시
$('#disableBtn').click(function() {
    $('#form').fadeTo(300, 0.5);
    $('#form :input').prop('disabled', true);
});
```

## Slide 효과 - 높이 변화

Slide 효과는 **height만 변화**시킵니다. 콘텐츠가 위에서 아래로 펼쳐지거나 접히는 느낌을 줍니다.

**언제 사용하나요?**
- 아코디언 메뉴
- 드롭다운 콘텐츠
- FAQ 섹션
- 모바일 메뉴

**특징:**
- 자연스러운 "접기/펼치기" 효과
- 콘텐츠의 길이에 따라 자동으로 높이 계산
- 아코디언 UI에 최적

### slideDown() / slideUp() - 슬라이드 다운/업

```javascript
// 아래로 펼침
$('#div').slideDown();

// 위로 접힘
$('#div').slideUp();

// 천천히 펼침
$('#div').slideDown('slow');

// 실전 예제: 아코디언
$('.accordion-header').click(function() {
    // 클릭한 것만 펼침
    $(this).next('.accordion-content').slideDown();

    // 다른 것은 모두 접음
    $('.accordion-content').not($(this).next()).slideUp();
});
```

### slideToggle() - 슬라이드 전환

```javascript
// 펼쳐져 있으면 접고, 접혀 있으면 펼침
$('#div').slideToggle();

// 실전 예제: FAQ
$('.faq-question').click(function() {
    $(this).next('.faq-answer').slideToggle(300);
});
```

## 효과 메서드 비교

각 효과는 서로 다른 CSS 속성을 애니메이션합니다. 상황에 맞게 선택하세요:

| 메서드 | 변화 속성 | 효과 특징 | 주요 사용처 |
|--------|----------|----------|------------|
| `show/hide` | width, height, opacity | 전체적인 변화 | 일반적인 표시/숨김 |
| `fadeIn/fadeOut` | opacity만 | 부드러운 등장/퇴장 | 모달, 알림, 이미지 전환 |
| `slideDown/slideUp` | height만 | 접기/펼치기 | 아코디언, 드롭다운, FAQ |

**선택 가이드:**
- **가장 부드러운 효과** → `fadeIn/fadeOut`
- **접기/펼치기 느낌** → `slideDown/slideUp`
- **전체적인 효과** → `show/hide`

## 커스텀 애니메이션 - animate()

`animate()`는 **숫자로 표현되는 CSS 속성**을 자유롭게 애니메이션할 수 있는 강력한 메서드입니다.

**언제 사용하나요?**
- 기본 효과로 불가능한 커스텀 애니메이션
- 위치 이동 (left, top)
- 크기 변경 (width, height)
- 여백 조정 (margin, padding)
- 여러 속성을 동시에 애니메이션

### 기본 사용법

```javascript
// 위치와 투명도 동시에 애니메이션
$('#div').animate({
    left: '250px',
    opacity: 0.5,
    width: '500px'
}, 1000);

// 상대값 사용 (현재 값에서 증감)
$('#div').animate({
    left: '+=50px',   // 현재 위치에서 +50px
    top: '-=20px',    // 현재 위치에서 -20px
    fontSize: '20px'  // camelCase 사용
}, 'slow');

// 순차 애니메이션 (체이닝)
$('#div')
    .animate({ left: '200px' }, 500)
    .animate({ top: '100px' }, 500)
    .animate({ opacity: 0.5 }, 500);
```

### 애니메이션 가능한 속성

**중요: 숫자로 표현되는 CSS 속성만 애니메이션 가능합니다.**

✅ **가능한 속성:**
- 위치: `left`, `right`, `top`, `bottom`
- 크기: `width`, `height`, `maxWidth`, `minHeight`
- 여백: `margin`, `marginTop`, `padding`, `paddingLeft`
- 테두리: `borderWidth`, `borderTopWidth`
- 투명도: `opacity`
- 폰트: `fontSize`, `lineHeight`, `letterSpacing`

❌ **불가능한 속성** (숫자가 아님):
- 색상: `color`, `backgroundColor`, `borderColor`
  - jQuery UI 또는 별도 플러그인 필요
- 변형: `transform` (회전, 확대 등)
- 폰트: `fontFamily`, `fontWeight`

```javascript
// ✅ 가능 - 모두 숫자 값
$('#div').animate({
    width: '300px',
    height: '200px',
    opacity: 0.5,
    marginLeft: '50px',
    fontSize: '24px'
}, 1000);

// ❌ 불가능 - 숫자가 아님
$('#div').animate({
    color: 'red',              // 안 됨
    backgroundColor: 'blue'    // 안 됨
});

// ✅ 대신 CSS로 처리
$('#div').css({
    color: 'red',
    backgroundColor: 'blue'
});
```

## 체이닝 - 순차 애니메이션

jQuery의 강력한 기능인 **체이닝**으로 여러 애니메이션을 순차적으로 실행할 수 있습니다.

**작동 방식:**
- 각 애니메이션은 **이전 애니메이션이 끝난 후** 시작됩니다
- 대기열(queue)에 저장되어 순서대로 실행됩니다
- 부드러운 연속 효과를 만들 수 있습니다

```javascript
// 순차 실행: 슬라이드 업 → 대기 → 페이드 인 → 이동
$('#div')
    .slideUp(300)       // 1. 슬라이드 업 (300ms)
    .delay(500)         // 2. 0.5초 대기
    .fadeIn(400)        // 3. 페이드 인 (400ms)
    .animate({          // 4. 왼쪽으로 이동 (600ms)
        left: '200px'
    }, 600);

// 총 소요 시간: 300 + 500 + 400 + 600 = 1800ms
```

### delay() - 지연

`delay()`는 애니메이션 사이에 **대기 시간**을 추가합니다.

**언제 사용하나요?**
- 효과 사이에 잠깐 멈춤
- 순서대로 나타나는 요소들
- 타이밍 조절

```javascript
// 숨김 → 1초 대기 → 페이드 인
$('#div')
    .hide()
    .delay(1000)  // 1초 대기
    .fadeIn();

// 실전 예제: 순차 등장
$('.item').each(function(index) {
    $(this)
        .hide()
        .delay(index * 200)  // 각각 0ms, 200ms, 400ms...
        .fadeIn(300);
});
```

## 애니메이션 제어

### stop() - 애니메이션 중단

애니메이션을 **즉시 중단**합니다. 사용자가 빠르게 여러 번 클릭할 때 애니메이션이 쌓이는 것을 방지합니다.

**왜 필요한가요?**
- 버튼을 빠르게 여러 번 클릭하면 애니메이션이 대기열에 쌓입니다
- 사용자가 기다려야 하는 불편함 발생
- `stop()`으로 이전 애니메이션을 중단하고 새로 시작

```javascript
// 현재 애니메이션만 중단
$('#div').stop();

// 모든 대기열의 애니메이션 중단
$('#div').stop(true);

// 중단하고 최종 상태로 즉시 이동
$('#div').stop(true, true);

// 실전 예제: hover 시 애니메이션 쌓임 방지
$('#div').hover(
    function() {
        $(this).stop(true, true).animate({ opacity: 0.5 }, 200);
    },
    function() {
        $(this).stop(true, true).animate({ opacity: 1 }, 200);
    }
);
```

**파라미터:**
- `stop(clearQueue, jumpToEnd)`
- `clearQueue` (boolean) → 대기열의 모든 애니메이션 중단 여부
- `jumpToEnd` (boolean) → 현재 애니메이션을 최종 상태로 즉시 완료 여부

**일반적인 사용:**
- `stop(true, true)` → 가장 자주 사용 (모든 애니메이션 중단하고 최종 상태로)

### finish() - 즉시 완료

모든 애니메이션을 **최종 상태로 즉시 완료**합니다.

```javascript
// 모든 애니메이션을 즉시 완료
$('#div').finish();

// 실전 예제: 스킵 버튼
$('#skipBtn').click(function() {
    $('.animated').finish();  // 모든 애니메이션 즉시 완료
});
```

## 콜백 함수

**콜백 함수**는 애니메이션이 완료된 후 실행됩니다. 순차 작업을 구현할 때 필수입니다.

**언제 사용하나요?**
- 애니메이션 완료 후 요소 제거
- 다음 단계 실행
- 완료 메시지 표시
- 데이터 로드

```javascript
// 페이드 아웃 후 제거
$('#div').fadeOut(1000, function() {
    console.log('페이드 아웃 완료!');
    $(this).remove();  // 완료 후 DOM에서 제거
});

// 슬라이드 다운 후 클래스 추가
$('#div').slideDown('slow', function() {
    console.log('슬라이드 완료!');
    $(this).addClass('active');
});

// 여러 요소의 콜백 주의점
$('div').fadeOut(1000, function() {
    // ⚠️ 각 div마다 콜백이 실행됨!
    console.log('완료');
});
// div가 3개면 "완료"가 3번 출력됨
```

## 실전 예제

### 1. 아코디언 메뉴

아코디언은 하나의 섹션만 열리고 나머지는 자동으로 닫히는 UI 패턴입니다. FAQ, 메뉴, 설정 패널 등에서 자주 사용됩니다.

**작동 방식:**
- 헤더를 클릭하면 해당 콘텐츠가 slideToggle로 펼쳐지거나 접힙니다
- 다른 모든 콘텐츠는 slideUp으로 닫힙니다
- active 클래스로 현재 열린 항목을 표시합니다

```javascript
$('.accordion-header').click(function() {
    let $content = $(this).next('.accordion-content');

    // 다른 항목들 모두 닫기
    $('.accordion-content').not($content).slideUp(300);
    $('.accordion-header').not(this).removeClass('active');

    // 클릭한 항목 토글
    $content.slideToggle(300);
    $(this).toggleClass('active');
});
```

### 2. 모달 부드럽게 열기/닫기

모달은 사용자의 집중이 필요한 콘텐츠를 보여주는 오버레이 창입니다. fadeIn/fadeOut으로 부드럽게 등장시킵니다.

**작동 방식:**
- 버튼의 data-target 속성으로 어떤 모달을 열지 지정
- 오버레이(배경)와 모달을 동시에 fadeIn
- 닫기 버튼이나 오버레이 클릭 시 fadeOut

```javascript
// 열기
$('.open-modal').click(function() {
    let target = $(this).data('target');

    // 오버레이와 모달 동시에 페이드 인
    $('.modal-overlay').fadeIn(300);
    $('#' + target).fadeIn(300);
});

// 닫기
$('.close-modal, .modal-overlay').click(function() {
    $('.modal-overlay').fadeOut(300);
    $('.modal').fadeOut(300);
});
```

### 3. 알림 메시지 (자동 사라짐)

사용자에게 피드백을 주는 토스트 알림입니다. 일정 시간 후 자동으로 사라집니다.

**작동 방식:**
- 동적으로 알림 요소를 생성하여 body에 추가
- fadeIn으로 등장 → delay로 3초 대기 → fadeOut으로 퇴장
- 애니메이션 완료 후 remove()로 DOM에서 제거 (메모리 관리)

```javascript
function showNotification(message, type) {
    let $notification = $('<div class="notification"></div>')
        .addClass(type)  // 'success', 'error', 'info'
        .text(message)
        .appendTo('body')
        .hide()          // 처음에 숨김
        .fadeIn(300)     // 페이드 인
        .delay(3000)     // 3초 대기
        .fadeOut(300, function() {
            $(this).remove();  // 완료 후 제거
        });
}

// 사용
showNotification('저장되었습니다!', 'success');
showNotification('오류가 발생했습니다.', 'error');
```

### 4. 탭 전환 효과

여러 콘텐츠를 탭으로 구분하여 보여주는 UI입니다. 클릭한 탭의 콘텐츠만 표시됩니다.

**작동 방식:**
- data-target으로 표시할 콘텐츠 ID 지정
- 모든 탭 버튼의 active 클래스 제거 후 클릭한 것만 추가
- 모든 콘텐츠를 fadeOut 후 선택한 것만 fadeIn
- 또는 더 간단하게 hide() 후 fadeIn()

```javascript
$('.tab-btn').click(function() {
    let target = $(this).data('target');

    // 버튼 활성화
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');

    // 모든 탭 콘텐츠 페이드 아웃
    $('.tab-content').fadeOut(200, function() {
        // 모두 사라진 후 선택한 탭만 페이드 인
        if ($(this).attr('id') === target) {
            $(this).fadeIn(300);
        }
    });
});

// 또는 더 간단하게
$('.tab-btn').click(function() {
    let target = $(this).data('target');

    $('.tab-btn').removeClass('active');
    $(this).addClass('active');

    $('.tab-content').hide();
    $('#' + target).fadeIn(300);
});
```

### 5. 이미지 갤러리 (페이드 효과)

썸네일을 클릭하면 큰 이미지로 전환되는 갤러리입니다. 페이드 효과로 부드럽게 전환됩니다.

**작동 방식:**
- 썸네일의 data-full-image 속성에 큰 이미지 URL 저장
- 현재 이미지를 fadeOut
- 완료 후 콜백에서 src 변경 후 fadeIn
- 깜빡임 없이 자연스러운 전환

```javascript
$('.thumbnail').click(function() {
    let newSrc = $(this).data('full-image');

    $('#mainImage')
        .fadeOut(200, function() {
            // 페이드 아웃 완료 후 이미지 변경
            $(this).attr('src', newSrc).fadeIn(300);
        });
});
```

### 6. 드롭다운 메뉴

클릭하면 메뉴가 펼쳐지고, 바깥을 클릭하면 자동으로 닫히는 드롭다운입니다.

**작동 방식:**
- 토글 버튼 클릭 시 stopPropagation()으로 document 클릭 방지
- 다른 메뉴는 닫고 클릭한 메뉴만 slideToggle
- stop(true, true)로 애니메이션 쌓임 방지
- document 클릭 시 모든 메뉴 닫기

```javascript
$('.dropdown-toggle').click(function(e) {
    e.stopPropagation();

    let $menu = $(this).next('.dropdown-menu');

    // 다른 메뉴 닫기
    $('.dropdown-menu').not($menu).slideUp('fast');

    // 클릭한 메뉴 토글
    $menu.stop(true, true).slideToggle('fast');
});

// 바깥 클릭 시 모든 메뉴 닫기
$(document).click(function() {
    $('.dropdown-menu').slideUp('fast');
});

// 메뉴 내부 클릭 시 닫히지 않게
$('.dropdown-menu').click(function(e) {
    e.stopPropagation();
});
```

### 7. 로딩 스피너

데이터를 불러오는 동안 로딩 표시를 보여줍니다. 사용자에게 진행 상황을 알려줍니다.

**작동 방식:**
- Ajax 요청 시작 전 fadeIn으로 스피너 표시
- complete 콜백에서 fadeOut (성공/실패 무관)
- 사용자가 기다리고 있음을 인지하게 함

```javascript
function showLoading() {
    $('#loading').fadeIn(200);
}

function hideLoading() {
    $('#loading').fadeOut(200);
}

// 사용 예: Ajax와 함께
showLoading();

$.ajax({
    url: '/api/data',
    method: 'GET',
    success: function(data) {
        // 데이터 처리
        renderData(data);
    },
    error: function() {
        alert('데이터 로드 실패');
    },
    complete: function() {
        // 성공/실패 무관하게 항상 실행
        hideLoading();
    }
});
```

### 8. 부드러운 스크롤

페이지 내 링크를 클릭하면 해당 섹션으로 부드럽게 스크롤됩니다. 사용자 경험을 크게 향상시킵니다.

**작동 방식:**
- href가 #으로 시작하는 링크를 선택
- preventDefault()로 기본 점프 동작 막기
- scrollTop을 animate()로 부드럽게 변경
- html과 body 모두 지정 (브라우저 호환성)

```javascript
// 페이지 내 앵커 링크 부드럽게 스크롤
$('a[href^="#"]').click(function(e) {
    e.preventDefault();

    let target = $(this).attr('href');

    if (target === '#') return;

    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 800);  // 0.8초 동안 스크롤
});

// 맨 위로 버튼
$('#toTop').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 600);
});
```

### 9. 요소 흔들기 효과

입력 오류 시 폼을 좌우로 흔들어 사용자의 주의를 끕니다. 모바일 앱에서 자주 보는 효과입니다.

**작동 방식:**
- positions 배열로 좌우 이동 패턴 정의
- 재귀 함수로 순차적으로 애니메이션
- position: relative 필요 (left 속성 사용)
- 로그인 실패, 검증 오류 등에 활용

```javascript
function shake($element) {
    let positions = [0, -10, 10, -10, 10, -5, 5, 0];
    let duration = 50;
    let index = 0;

    function shakeStep() {
        if (index < positions.length) {
            $element.animate({
                left: positions[index] + 'px'
            }, duration, shakeStep);
            index++;
        } else {
            $element.css('left', '0');
        }
    }

    // 요소가 position: relative여야 함
    if ($element.css('position') === 'static') {
        $element.css('position', 'relative');
    }

    shakeStep();
}

// 사용 예: 로그인 실패 시
$('#loginForm').submit(function(e) {
    e.preventDefault();

    if (!validate()) {
        shake($('#loginForm'));
        alert('아이디 또는 비밀번호를 확인하세요');
    }
});
```

### 10. 순차 페이드 인

여러 요소가 순서대로 하나씩 나타나는 효과입니다. 리스트, 카드 등을 우아하게 표시합니다.

**작동 방식:**
- each()로 각 요소를 순회
- index에 따라 delay 시간 다르게 설정
- 첫 번째는 즉시, 두 번째는 100ms 후, 세 번째는 200ms 후...
- 동적인 등장 효과로 사용자 경험 향상

```javascript
// 리스트 항목을 하나씩 페이드 인
$('.item').hide().each(function(index) {
    $(this).delay(index * 100).fadeIn(300);
});

// 또는 함수로
function fadeInSequential(selector, delay) {
    $(selector).hide().each(function(index) {
        $(this).delay(index * delay).fadeIn(300);
    });
}

// 사용
fadeInSequential('.card', 150);
```

## easing - 애니메이션 가속도

**Easing**은 애니메이션의 **속도 변화 패턴**입니다. 일정한 속도가 아니라 가속/감속을 조절합니다.

**기본 easing (jQuery 내장):**
- `linear` → 일정한 속도
- `swing` → 시작/끝 느림, 중간 빠름 (기본값)

**jQuery UI 필요 (더 많은 옵션):**
- `easeInQuad`, `easeOutQuad`, `easeInOutQuad`
- `easeInCubic`, `easeOutCubic`, `easeInOutCubic`
- 등 30개 이상의 easing 함수

```javascript
// 기본 easing
$('#div').animate({
    left: '200px'
}, 1000, 'linear');  // 일정한 속도

$('#div').animate({
    left: '200px'
}, 1000, 'swing');   // 시작/끝 느림 (기본값)

// jQuery UI 필요
$('#div').animate({
    left: '200px'
}, 1000, 'easeInOutQuad');  // 부드러운 가속/감속
```

## 큐(Queue) 관리

jQuery는 애니메이션을 **큐(대기열)**에 저장하여 순차 실행합니다.

```javascript
// 큐에 함수 추가
$('#div').queue(function(next) {
    $(this).css('background', 'red');
    next();  // 다음 애니메이션 실행 (중요!)
});

// 큐 비우기
$('#div').clearQueue();

// 큐 내용 확인
let queue = $('#div').queue();
console.log('대기 중인 애니메이션:', queue.length);

// 실전 예제: 커스텀 큐
$('#div')
    .animate({ left: '100px' }, 500)
    .queue(function(next) {
        console.log('첫 번째 애니메이션 완료');
        $(this).addClass('highlight');
        next();
    })
    .animate({ top: '100px' }, 500)
    .queue(function(next) {
        console.log('두 번째 애니메이션 완료');
        $(this).removeClass('highlight');
        next();
    });
```

## 성능 팁

애니메이션은 리소스를 많이 사용합니다. 성능을 고려한 코드를 작성하세요.

```javascript
// ❌ 나쁜 예 - 여러 요소를 하나씩
$('.item').each(function() {
    $(this).fadeIn(300);
});

// ✅ 좋은 예 - 한 번에
$('.item').fadeIn(300);

// ❌ 나쁜 예 - 복잡한 애니메이션 남발
$('#div').animate({
    left: '+=5px',
    top: '+=5px'
}, 50);  // 너무 짧은 시간

// ✅ 좋은 예 - 적절한 시간과 간격
$('#div').animate({
    left: '+=50px',
    top: '+=50px'
}, 300);

// ❌ 나쁜 예 - stop() 없이 hover
$('#div').hover(
    function() { $(this).animate({ opacity: 0.5 }, 200); },
    function() { $(this).animate({ opacity: 1 }, 200); }
);

// ✅ 좋은 예 - stop()으로 쌓임 방지
$('#div').hover(
    function() { $(this).stop(true, true).animate({ opacity: 0.5 }, 200); },
    function() { $(this).stop(true, true).animate({ opacity: 1 }, 200); }
);
```

**성능 개선 팁:**
1. **stop() 사용** - hover 등에서 애니메이션 쌓임 방지
2. **적절한 시간** - 너무 짧거나 긴 애니메이션 피하기
3. **CSS transition 고려** - 단순한 효과는 CSS가 더 빠름
4. **과도한 사용 금지** - 꼭 필요한 곳에만 사용

## CSS vs jQuery 애니메이션

상황에 따라 적절한 방법을 선택하세요.

| 기준 | jQuery | CSS Transition/Animation |
|------|--------|--------------------------|
| 성능 | 보통 | ✅ 빠름 (GPU 가속) |
| 제어 | ✅ 쉬움 (콜백, 중단) | 어려움 (JavaScript 필요) |
| 복잡도 | ✅ 복잡한 것 가능 | 단순한 것만 |
| 브라우저 호환 | ✅ 모든 브라우저 | IE10+ (최신 브라우저) |
| 동적 값 | ✅ JavaScript로 계산 | 미리 정의 필요 |
| 디버깅 | 쉬움 | 어려움 |

**권장 사용:**
- **단순한 전환** (hover, 클래스 변경) → CSS transition
- **복잡한 제어 필요** (순차 실행, 콜백) → jQuery
- **동적 값** (스크롤 위치 등) → jQuery
- **최고 성능** → CSS

**CSS 예제:**
```css
/* CSS로 hover 효과 */
.button {
    opacity: 1;
    transition: opacity 0.3s ease;
}

.button:hover {
    opacity: 0.5;
}
```

```javascript
// jQuery로 같은 효과 (더 복잡)
$('.button').hover(
    function() { $(this).stop(true, true).animate({ opacity: 0.5 }, 300); },
    function() { $(this).stop(true, true).animate({ opacity: 1 }, 300); }
);

// ✅ 권장: CSS로 하고 클래스만 토글
$('.button').hover(
    function() { $(this).addClass('hover'); },
    function() { $(this).removeClass('hover'); }
);
```

## Vanilla JS vs jQuery 비교

| 작업 | Vanilla JS | jQuery |
|------|-----------|--------|
| 숨기기 | `el.style.display = 'none'` | `$el.hide()` |
| 페이드 인 | CSS/keyframes 필요 | `$el.fadeIn()` |
| 슬라이드 | 복잡한 계산 필요 | `$el.slideDown()` |
| 커스텀 애니메이션 | `requestAnimationFrame` 사용 | `$el.animate()` |
| 콜백 | `transitionend` 이벤트 | 파라미터로 전달 |
| 순차 실행 | Promise 체이닝 | 메서드 체이닝 |

---
**핵심: 간단한 효과는 CSS, 복잡한 제어는 jQuery**

**모범 사례:**
- 항상 `stop(true, true)`로 애니메이션 쌓임 방지
- 콜백 함수로 순차 작업 구현
- 과도한 애니메이션 사용 금지 (사용자 경험 저해)
- 성능 고려 - CSS transition과 적절히 병용
- 적절한 타이밍 (200-400ms 권장)
