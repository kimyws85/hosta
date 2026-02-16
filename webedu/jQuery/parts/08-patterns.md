# Part 8. 실전 프로젝트 패턴

## 🎯 핵심: 실무에서 자주 사용하는 UI 패턴 마스터하기

**웹 개발에서 반복적으로 나타나는 UI 패턴들을 jQuery로 쉽게 구현할 수 있습니다.**

이 섹션에서는 실제 프로젝트에서 즉시 사용할 수 있는 검증된 패턴들을 다룹니다.

## 1. 탭 메뉴

탭은 여러 콘텐츠를 공간 효율적으로 표시하는 가장 기본적인 UI 패턴입니다. 화면 공간을 절약하면서 관련된 여러 정보를 체계적으로 구조화할 수 있습니다.

**사용 사례:** 제품 상세 페이지(상세정보/리뷰/문의), 대시보드, 설정 페이지

**왜 탭을 사용할까?**
- 한 화면에 많은 정보를 담을 때 스크롤 없이 구조화
- 사용자가 원하는 정보만 선택해서 볼 수 있음
- 페이지 전환 없이 콘텐츠만 교체하여 빠른 UX 제공

**작동 방식:**
1. 탭 버튼에 `data-tab` 속성으로 연결할 콘텐츠 ID 지정
2. 버튼 클릭 시 모든 탭 버튼/콘텐츠를 비활성화
3. 클릭한 탭만 `active` 클래스 추가하고 해당 콘텐츠 표시
4. fadeIn 효과로 부드럽게 전환

### 기본 탭 구현

```javascript
// 기본 탭 전환
$('.tab-button').click(function() {
    let tabId = $(this).data('tab');

    // 모든 탭 버튼과 콘텐츠 비활성화
    $('.tab-button').removeClass('active');
    $('.tab-content').hide();

    // 선택한 탭만 활성화
    $(this).addClass('active');
    $('#' + tabId).fadeIn(300);
});

// URL 해시와 연동
$(window).on('hashchange', function() {
    let hash = window.location.hash.substring(1);
    if (hash) {
        $('.tab-button[data-tab="' + hash + '"]').click();
    }
});

// 초기 로드 시 해시 체크
$(function() {
    if (window.location.hash) {
        $(window).trigger('hashchange');
    }
});
```

**코드 동작 설명:**
1. **탭 버튼 클릭 이벤트**: `data-tab` 속성에서 표시할 콘텐츠 ID를 읽어옴
2. **전체 비활성화**: 모든 탭 버튼의 `active` 클래스 제거, 모든 콘텐츠 숨김
3. **선택 활성화**: 클릭한 버튼에만 `active` 추가, 해당 콘텐츠만 fadeIn으로 표시
4. **URL 해시 연동**: `#review`처럼 URL에 현재 탭 상태 저장, 링크 공유 가능
5. **hashchange 이벤트**: URL 해시가 바뀌면 해당 탭 자동 선택 (뒤로가기 지원)

### 고급 탭 - 히스토리 지원
```javascript
let TabManager = {
    init: function() {
        let self = this;

        $('.tab-button').click(function(e) {
            e.preventDefault();
            let tabId = $(this).data('tab');
            self.showTab(tabId);

            // URL 업데이트 (히스토리에 추가)
            history.pushState({ tab: tabId }, '', '#' + tabId);
        });

        // 뒤로가기/앞으로가기 지원
        $(window).on('popstate', function(e) {
            if (e.originalEvent.state && e.originalEvent.state.tab) {
                self.showTab(e.originalEvent.state.tab, false);
            }
        });
    },

    showTab: function(tabId, updateHistory) {
        $('.tab-button').removeClass('active');
        $('.tab-button[data-tab="' + tabId + '"]').addClass('active');

        $('.tab-content').hide();
        $('#' + tabId).fadeIn(300);
    }
};

TabManager.init();
```

**코드 동작 설명:**
1. **init()**: 탭 버튼 클릭 이벤트와 popstate(뒤로가기) 이벤트 등록
2. **showTab()**: 탭 전환 로직을 별도 메서드로 분리하여 재사용
3. **history.pushState()**: 브라우저 히스토리에 탭 상태 저장 (뒤로가기 시 탭 복원)
4. **popstate 이벤트**: 뒤로가기/앞으로가기 시 저장된 탭 상태로 복원
5. **updateHistory 파라미터**: 히스토리 중복 방지 (뒤로가기로 복원 시 히스토리 추가 안 함)

**장점:**
- 뒤로가기 버튼으로 이전 탭 복원 가능
- URL 공유 시 현재 탭 상태 유지
- SPA(Single Page Application)처럼 동작

## 2. 아코디언 메뉴

아코디언은 수직 공간을 효율적으로 사용하는 UI 패턴입니다. 여러 섹션 중 하나 또는 일부만 펼쳐서 보여줍니다.

**사용 사례:** FAQ, 사이드바 메뉴, 긴 폼 섹션

**왜 아코디언을 사용할까?**
- 많은 콘텐츠를 한 페이지에 담으면서도 깔끔하게 정리
- 사용자가 필요한 부분만 펼쳐서 볼 수 있어 스크롤 감소
- 모바일에서 특히 유용 (제한된 화면 공간)

**작동 방식:**
1. 헤더를 클릭하면 바로 다음 형제 요소(콘텐츠)를 찾음
2. slideToggle()로 펼치거나 접음 (애니메이션)
3. active 클래스로 현재 열린 항목 표시 (아이콘 회전 등)

### 다중 열림 가능한 아코디언

```javascript
// 기본 아코디언 (다중 열림 가능)
$('.accordion-header').click(function() {
    $(this).next('.accordion-content').slideToggle(300);
    $(this).toggleClass('active');
});

**코드 동작 설명:**
- **next()**: 클릭한 헤더 바로 다음 요소(콘텐츠)를 선택
- **slideToggle()**: 접혀있으면 펼치고, 펼쳐있으면 접음
- **toggleClass('active')**: 클릭할 때마다 active 클래스 토글 (CSS로 아이콘 변경 가능)
- 여러 섹션을 동시에 열 수 있음

### 하나만 열리는 아코디언 (Exclusive)

```javascript
// 하나만 열리는 아코디언
$('.accordion-header').click(function() {
    let $content = $(this).next('.accordion-content');
    let isActive = $(this).hasClass('active');

    // 모든 항목 닫기
    $('.accordion-content').slideUp(300);
    $('.accordion-header').removeClass('active');

    // 클릭한 항목이 닫혀있었으면 열기
    if (!isActive) {
        $content.slideDown(300);
        $(this).addClass('active');
    }
});

// 애니메이션 아이콘 회전
$('.accordion-header').click(function() {
    $(this).find('.icon').toggleClass('rotated');
});
```

**코드 동작 설명:**
1. **isActive 체크**: 현재 클릭한 항목이 이미 열려있는지 확인
2. **전체 닫기**: 먼저 모든 콘텐츠를 slideUp으로 접고 active 클래스 제거
3. **조건부 열기**: 닫혀있던 항목이면 slideDown으로 펼침
4. **아이콘 회전**: CSS transition과 함께 사용하여 화살표 회전 효과
5. **한 번에 하나만**: FAQ처럼 하나씩만 보여주고 싶을 때 사용

## 3. 모달/팝업

모달은 사용자의 주의가 필요한 콘텐츠를 표시하는 오버레이 창입니다. 현재 페이지를 어둡게 만들고 그 위에 콘텐츠를 띄워 집중을 유도합니다.

**사용 사례:** 로그인/회원가입, 이미지 확대, 확인 다이얼로그, 동영상 재생

**왜 모달을 사용할까?**
- 중요한 정보나 입력을 받을 때 사용자 집중 유도
- 페이지 이동 없이 작업 완료 (로그인, 폼 작성 등)
- 임시 콘텐츠 표시 (이미지 크게 보기, 동영상 재생)
- 페이지 맥락을 유지하면서 추가 정보 제공

**작동 방식:**
1. 모달 열기: fadeIn으로 부드럽게 표시, body에 스크롤 방지 클래스 추가
2. ESC 키 지원: 키보드로도 닫을 수 있어 접근성 향상
3. 오버레이 클릭: 바깥 영역 클릭 시 모달 닫기
4. 모달 내부 클릭: stopPropagation()으로 닫힘 방지

```javascript
let Modal = {
    open: function(modalId) {
        let $modal = $('#' + modalId);

        $modal.fadeIn(300);
        $('body').addClass('modal-open');  // 스크롤 방지

        // ESC 키로 닫기
        $(document).on('keydown.modal', function(e) {
            if (e.key === 'Escape') {
                Modal.close(modalId);
            }
        });
    },

    close: function(modalId) {
        let $modal = $('#' + modalId);

        $modal.fadeOut(300);
        $('body').removeClass('modal-open');

        // 이벤트 제거
        $(document).off('keydown.modal');
    }
};

// 열기 버튼
$('.open-modal').click(function() {
    let target = $(this).data('target');
    Modal.open(target);
});

// 닫기 버튼
$(document).on('click', '.close-modal', function() {
    let modalId = $(this).closest('.modal').attr('id');
    Modal.close(modalId);
});

// 오버레이 클릭 시 닫기
$(document).on('click', '.modal-overlay', function() {
    let modalId = $(this).closest('.modal').attr('id');
    Modal.close(modalId);
});

// 모달 내부 클릭 시 닫히지 않게
$('.modal-content').click(function(e) {
    e.stopPropagation();
});
```

**코드 동작 설명:**
1. **Modal.open()**: 모달 ID를 받아서 해당 모달을 fadeIn으로 표시
2. **body.modal-open**: CSS로 `overflow: hidden`을 적용하여 배경 스크롤 방지
3. **keydown.modal**: 네임스페이스를 사용하여 ESC 키 이벤트 등록 (나중에 제거 용이)
4. **Modal.close()**: fadeOut으로 숨기고, 이벤트 리스너 제거, 스크롤 복원
5. **data-target**: 버튼에 열 모달 ID를 지정하여 재사용 가능
6. **closest('.modal')**: 이벤트 위임으로 동적으로 생성된 모달도 처리
7. **stopPropagation()**: 모달 내부 클릭 시 오버레이 클릭 이벤트 전파 차단

### 확인 다이얼로그 (Confirm Dialog)
```javascript
function confirm(message, onConfirm, onCancel) {
    let $dialog = $(`
        <div class="modal" id="confirmDialog">
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <p>${message}</p>
                <button class="btn-confirm">확인</button>
                <button class="btn-cancel">취소</button>
            </div>
        </div>
    `).appendTo('body');

    $dialog.fadeIn(300);

    $dialog.find('.btn-confirm').click(function() {
        $dialog.fadeOut(300, function() {
            $(this).remove();
        });
        if (onConfirm) onConfirm();
    });

    $dialog.find('.btn-cancel').click(function() {
        $dialog.fadeOut(300, function() {
            $(this).remove();
        });
        if (onCancel) onCancel();
    });
}

// 사용
$('.delete-btn').click(function() {
    confirm('정말 삭제하시겠습니까?', function() {
        // 삭제 로직
        console.log('삭제됨');
    });
});
```

**코드 동작 설명:**
1. **동적 생성**: 템플릿 리터럴로 모달 HTML을 동적으로 생성하여 body에 추가
2. **콜백 함수**: 확인/취소 시 실행할 함수를 파라미터로 받음 (유연성)
3. **fadeOut 콜백**: 애니메이션 완료 후 DOM에서 제거하여 메모리 관리
4. **재사용**: `confirm()` 함수를 여러 곳에서 재사용 가능
5. **window.confirm 대체**: 브라우저 기본 confirm보다 디자인 자유도가 높음

## 4. 이미지 슬라이더/캐러셀

이미지를 순서대로 넘기며 보여주는 UI입니다. 제한된 공간에 여러 이미지를 효과적으로 표시할 수 있습니다.

**사용 사례:** 상품 이미지, 배너, 갤러리

**왜 슬라이더를 사용할까?**
- 여러 이미지를 같은 공간에 보여주어 화면 절약
- 자동 재생으로 사용자 개입 없이 콘텐츠 순환
- 인디케이터로 현재 위치와 전체 개수 파악
- 이전/다음 버튼으로 사용자가 원하는 속도로 탐색

**작동 방식:**
1. 모든 슬라이드를 숨기고 현재 인덱스의 슬라이드만 표시
2. next/prev 버튼으로 인덱스 증감 (순환: 마지막 → 첫 번째)
3. 인디케이터 클릭으로 특정 슬라이드로 직접 이동
4. 자동 재생: setInterval로 일정 시간마다 다음 슬라이드로 전환
5. 호버 시 일시정지: 사용자가 보고 있을 때 넘어가지 않음

```javascript
let Slider = {
    currentSlide: 0,
    $slides: null,
    slideCount: 0,
    auto: null,

    init: function(container, options) {
        this.$slides = $(container).find('.slide');
        this.slideCount = this.$slides.length;
        this.options = $.extend({
            autoPlay: true,
            interval: 3000,
            loop: true
        }, options);

        this.showSlide(0);

        // 버튼 이벤트
        $(container).find('.next-btn').click(() => this.next());
        $(container).find('.prev-btn').click(() => this.prev());

        // 인디케이터
        this.createIndicators(container);

        // 자동 재생
        if (this.options.autoPlay) {
            this.startAutoPlay();

            // 마우스 오버 시 일시정지
            $(container).hover(
                () => this.stopAutoPlay(),
                () => this.startAutoPlay()
            );
        }
    },

    showSlide: function(index) {
        this.$slides.hide().eq(index).fadeIn(500);
        this.currentSlide = index;

        // 인디케이터 업데이트
        $('.indicator').removeClass('active')
            .eq(index).addClass('active');
    },

    next: function() {
        let nextIndex = (this.currentSlide + 1) % this.slideCount;
        this.showSlide(nextIndex);
    },

    prev: function() {
        let prevIndex = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
        this.showSlide(prevIndex);
    },

    createIndicators: function(container) {
        let $indicators = $('<div class="indicators"></div>');

        for (let i = 0; i < this.slideCount; i++) {
            $('<span>')
                .addClass('indicator')
                .attr('data-index', i)
                .click((e) => {
                    let index = $(e.target).data('index');
                    this.showSlide(index);
                })
                .appendTo($indicators);
        }

        $(container).append($indicators);
    },

    startAutoPlay: function() {
        this.auto = setInterval(() => this.next(), this.options.interval);
    },

    stopAutoPlay: function() {
        clearInterval(this.auto);
    }
};

// 사용
Slider.init('.slider-container', {
    autoPlay: true,
    interval: 4000
});
```

**코드 동작 설명:**
1. **init()**: 슬라이드 요소들을 캐싱하고, 옵션 병합, 이벤트 바인딩
2. **$.extend()**: 기본 옵션과 사용자 옵션을 병합 (오버라이드 가능)
3. **showSlide()**: 모든 슬라이드 숨기고 지정된 인덱스만 fadeIn
4. **next/prev()**: 나머지 연산자(%)로 순환 구현 (0 → 마지막, 마지막 → 0)
5. **createIndicators()**: 슬라이드 개수만큼 동그라미 생성, 클릭 이벤트 등록
6. **startAutoPlay()**: setInterval로 자동 재생, clearInterval로 중지
7. **hover 이벤트**: 마우스 올리면 멈추고, 떠나면 다시 재생
8. **화살표 함수**: `() => this`로 메서드 내 this 바인딩 유지

## 5. 드롭다운 메뉴

클릭 시 펼쳐지는 메뉴입니다. 복잡한 네비게이션이나 옵션을 숨겼다가 필요할 때만 보여줍니다.

**사용 사례:** 네비게이션 메뉴, 설정 메뉴, 필터

**왜 드롭다운을 사용할까?**
- 화면 공간 절약 (메뉴를 평소에는 숨김)
- 계층 구조 표현 (메인 메뉴 → 서브 메뉴)
- 사용자가 필요할 때만 펼쳐서 확인
- 모바일에서 특히 유용 (제한된 화면)

**작동 방식:**
1. 토글 버튼 클릭 시 stopPropagation()으로 document 클릭 이벤트 방지
2. 다른 열린 드롭다운은 모두 닫고, 클릭한 것만 slideToggle
3. document 클릭 시 모든 드롭다운 닫기 (바깥 클릭 감지)
4. 메뉴 내부 클릭 시 stopPropagation()으로 닫히지 않게 방지
5. stop(true, true)로 애니메이션 큐 쌓임 방지

```javascript
// 기본 드롭다운
$('.dropdown-toggle').click(function(e) {
    e.stopPropagation();

    let $menu = $(this).next('.dropdown-menu');
    let wasOpen = $menu.is(':visible');

    // 모든 드롭다운 닫기
    $('.dropdown-menu').slideUp('fast');

    // 클릭한 드롭다운 토글
    if (!wasOpen) {
        $menu.stop(true, true).slideDown('fast');
    }
});

// 바깥 클릭 시 닫기
$(document).click(function() {
    $('.dropdown-menu').slideUp('fast');
});

// 메뉴 내부 클릭 시 닫히지 않게
$('.dropdown-menu').click(function(e) {
    e.stopPropagation();
});

// 메뉴 항목 선택 시 처리
$('.dropdown-menu a').click(function() {
    let value = $(this).data('value');
    let text = $(this).text();

    $(this).closest('.dropdown')
        .find('.dropdown-toggle')
        .text(text);

    $('.dropdown-menu').slideUp('fast');

    // 선택 이벤트 발생
    $(this).closest('.dropdown').trigger('select', [value, text]);
});
```

**코드 동작 설명:**
1. **e.stopPropagation()**: 토글 버튼 클릭이 document로 전파되는 것 방지
2. **wasOpen 체크**: 현재 메뉴가 이미 열려있는지 확인 (토글 동작)
3. **전체 닫기**: 다른 열린 드롭다운 모두 slideUp (한 번에 하나만 열림)
4. **stop(true, true)**: 빠르게 클릭 시 애니메이션 큐 쌓이는 것 방지
5. **document 클릭**: 바깥 클릭 시 모든 메뉴 닫기 (전역 이벤트)
6. **메뉴 내부 stopPropagation**: 메뉴 안 클릭은 document로 전파 안 됨
7. **trigger('select')**: 커스텀 이벤트로 외부에서 선택 감지 가능

## 6. 툴팁

마우스 오버 시 설명을 보여주는 작은 팝업입니다. 추가 정보를 제공하면서도 UI를 복잡하게 만들지 않습니다.

**사용 사례:** 아이콘 설명, 축약된 텍스트 전체 보기, 도움말

**왜 툴팁을 사용할까?**
- 아이콘이나 축약어의 의미를 명확하게 전달
- 화면을 복잡하게 하지 않으면서 추가 정보 제공
- 사용자가 필요할 때만 표시 (호버 시)
- 접근성 향상 (설명이 필요한 UI 요소에 도움말 제공)

**작동 방식:**
1. 툴팁용 div를 하나만 생성하여 body에 추가 (재사용)
2. `data-tooltip` 속성을 가진 요소에 mouseenter 이벤트 위임
3. 마우스 오버 시 요소의 위치를 계산하여 툴팁 표시
4. 마우스 떠나면 fadeOut으로 숨김
5. 위치 계산: 요소 중앙 위쪽에 표시

```javascript
let Tooltip = {
    $tooltip: null,

    init: function() {
        // 툴팁 요소 생성
        this.$tooltip = $('<div class="tooltip"></div>')
            .appendTo('body')
            .hide();

        // 이벤트 바인딩
        $(document).on('mouseenter', '[data-tooltip]', (e) => {
            this.show(e.currentTarget);
        });

        $(document).on('mouseleave', '[data-tooltip]', () => {
            this.hide();
        });
    },

    show: function(element) {
        let text = $(element).data('tooltip');
        let pos = $(element).offset();

        this.$tooltip
            .text(text)
            .css({
                left: pos.left + $(element).outerWidth() / 2,
                top: pos.top - this.$tooltip.outerHeight() - 10
            })
            .fadeIn(200);
    },

    hide: function() {
        this.$tooltip.fadeOut(200);
    }
};

Tooltip.init();

// HTML 사용
// <button data-tooltip="이 버튼을 클릭하세요">버튼</button>
```

**코드 동작 설명:**
1. **하나의 툴팁**: 모든 요소가 하나의 툴팁 div를 공유 (메모리 효율적)
2. **이벤트 위임**: `[data-tooltip]` 속성을 가진 모든 요소에 자동 적용
3. **offset()**: 요소의 절대 위치를 픽셀 단위로 계산
4. **위치 계산**: 요소 중앙(width/2) + 위쪽(top - height - 10px)
5. **동적 적용**: 나중에 추가된 요소도 자동으로 동작 (이벤트 위임)
6. **HTML 속성**: `data-tooltip` 속성만 추가하면 즉시 작동

## 7. 무한 스크롤

스크롤 시 자동으로 다음 페이지를 로드합니다. 페이지네이션 없이 연속적으로 콘텐츠를 탐색할 수 있습니다.

**사용 사례:** 뉴스 피드, 상품 목록, 검색 결과

**왜 무한 스크롤을 사용할까?**
- 끊김 없는 콘텐츠 탐색 (페이지 번호 클릭 불필요)
- 모바일에서 특히 편리 (스크롤만으로 탐색)
- 사용자 참여도 향상 (계속 스크롤하게 만듦)
- SNS 피드처럼 지속적으로 콘텐츠 소비하는 서비스에 적합

**작동 방식:**
1. 스크롤 이벤트 감지: 사용자가 페이지 하단 근처에 도달했는지 체크
2. threshold: 하단에서 얼마나 가까워졌을 때 로드할지 지정 (예: 200px 전)
3. loading 플래그: 로딩 중일 때 중복 요청 방지
4. hasMore 플래그: 더 이상 로드할 데이터가 없으면 중지
5. 콜백으로 데이터 받아서 컨테이너에 추가

```javascript
let InfiniteScroll = {
    page: 1,
    loading: false,
    hasMore: true,

    init: function(options) {
        this.options = $.extend({
            container: '#content',
            threshold: 200,
            loadMore: function(page, callback) { }
        }, options);

        $(window).scroll(() => this.checkScroll());
    },

    checkScroll: function() {
        if (this.loading || !this.hasMore) return;

        let scrollTop = $(window).scrollTop();
        let windowHeight = $(window).height();
        let docHeight = $(document).height();

        if (scrollTop + windowHeight > docHeight - this.options.threshold) {
            this.loadMore();
        }
    },

    loadMore: function() {
        this.loading = true;
        this.showLoading();

        this.page++;

        this.options.loadMore(this.page, (data, hasMore) => {
            this.hideLoading();
            this.loading = false;
            this.hasMore = hasMore;

            if (data && data.length > 0) {
                $(this.options.container).append(data);
            }
        });
    },

    showLoading: function() {
        if (!$('#loading-spinner').length) {
            $('<div id="loading-spinner">로딩 중...</div>')
                .appendTo(this.options.container);
        }
    },

    hideLoading: function() {
        $('#loading-spinner').remove();
    }
};

// 사용
InfiniteScroll.init({
    container: '#postList',
    threshold: 300,
    loadMore: function(page, callback) {
        $.get('/api/posts?page=' + page, function(data) {
            let html = data.posts.map(post => `
                <div class="post">
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                </div>
            `).join('');

            callback(html, data.hasMore);
        });
    }
});
```

**코드 동작 설명:**
1. **checkScroll()**: 스크롤 위치를 계산하여 하단 근처인지 확인
2. **scrollTop + windowHeight**: 현재 보이는 화면의 최하단 위치
3. **docHeight - threshold**: 실제 페이지 끝에서 threshold만큼 전
4. **loading 플래그**: 로딩 중이면 추가 요청 차단 (중복 방지)
5. **hasMore 플래그**: 서버에서 더 이상 데이터 없음을 알려주면 중지
6. **page++**: 페이지 번호를 증가시켜 다음 데이터 요청
7. **콜백 패턴**: 비동기 데이터 로드 후 처리 (Promise 대신 콜백)
8. **append()**: 기존 콘텐츠 뒤에 새 콘텐츠 추가

## 8. 실시간 검색/필터

입력하는 즉시 결과를 필터링합니다. 사용자가 타이핑하면서 바로 결과를 볼 수 있어 빠른 피드백을 제공합니다.

**사용 사례:** 상품 검색, 사용자 검색, 데이터 테이블 필터

**왜 실시간 검색을 사용할까?**
- 즉각적인 피드백으로 사용자 경험 향상
- 검색 버튼 클릭 없이 타이핑만으로 결과 확인
- 철자 오류를 즉시 확인 가능
- 원하는 결과가 나올 때까지 키워드 조정 용이

**작동 방식:**
1. input 이벤트로 타이핑 감지
2. 디바운스: 타이핑 멈춘 후 delay만큼 대기 (연속 타이핑 시 요청 방지)
3. 최소 길이: minLength보다 짧으면 검색 안 함 (성능)
4. 각 항목의 텍스트와 키워드 비교하여 show/hide
5. 하이라이트: 일치하는 부분을 <mark> 태그로 강조
6. 결과 개수 표시: 필터링된 항목 수 업데이트

```javascript
let SearchFilter = {
    timer: null,

    init: function(inputSelector, itemSelector, options) {
        this.options = $.extend({
            delay: 300,
            minLength: 2,
            highlight: true
        }, options);

        $(inputSelector).on('input', (e) => {
            clearTimeout(this.timer);

            this.timer = setTimeout(() => {
                this.filter($(e.target).val(), itemSelector);
            }, this.options.delay);
        });
    },

    filter: function(keyword, itemSelector) {
        keyword = keyword.toLowerCase().trim();

        if (keyword.length < this.options.minLength) {
            $(itemSelector).show();
            return;
        }

        let visibleCount = 0;

        $(itemSelector).each((i, item) => {
            let $item = $(item);
            let text = $item.text().toLowerCase();

            if (text.includes(keyword)) {
                $item.show();
                visibleCount++;

                // 하이라이트
                if (this.options.highlight) {
                    this.highlightText($item, keyword);
                }
            } else {
                $item.hide();
            }
        });

        // 결과 개수 표시
        $('#resultCount').text(`${visibleCount}개 항목`);
    },

    highlightText: function($element, keyword) {
        let text = $element.text();
        let regex = new RegExp('(' + keyword + ')', 'gi');
        let highlighted = text.replace(regex, '<mark>$1</mark>');
        $element.html(highlighted);
    }
};

// 사용
SearchFilter.init('#searchInput', '.searchable-item', {
    delay: 200,
    minLength: 1,
    highlight: true
});
```

**코드 동작 설명:**
1. **timer 변수**: 디바운스용 타이머 저장
2. **clearTimeout()**: 이전 타이머 취소 (연속 타이핑 시 마지막만 실행)
3. **setTimeout()**: delay만큼 대기 후 filter 실행
4. **toLowerCase()**: 대소문자 구분 없이 검색
5. **includes()**: 키워드가 텍스트에 포함되는지 확인
6. **정규표현식**: RegExp로 키워드를 감싸 대소문자 무시(gi)로 검색
7. **replace()**: 일치하는 부분을 <mark> 태그로 교체
8. **visibleCount**: 필터링 후 보이는 항목 수 카운트
9. **디바운스 효과**: 'hello' 타이핑 시 5번 검색이 아닌 1번만 실행

## 9. 폼 유효성 검사

사용자 입력을 검증하고 피드백을 제공합니다. 잘못된 입력을 사전에 방지하여 서버 부담을 줄이고 사용자 경험을 향상시킵니다.

**사용 사례:** 로그인/회원가입, 주문 폼, 설정 변경

**왜 폼 검증을 사용할까?**
- 서버 요청 전에 클라이언트에서 미리 검증 (서버 부담 감소)
- 즉각적인 피드백으로 사용자가 바로 수정 가능
- 잘못된 데이터 제출 방지
- 일관된 데이터 형식 보장 (이메일, 전화번호 등)

**작동 방식:**
1. 실시간 검증: blur 이벤트로 입력 필드를 벗어날 때 검증
2. 제출 시 검증: submit 이벤트로 전체 폼 검증
3. 규칙 기반: required, minLength, pattern, custom 등 다양한 검증 규칙
4. 에러 표시: 잘못된 입력 시 빨간 테두리 + 에러 메시지
5. 검증 통과: 모든 필드가 유효해야 폼 제출 허용

```javascript
let FormValidator = {
    rules: {},
    errors: {},

    init: function(formSelector, rules) {
        this.rules = rules;
        let $form = $(formSelector);

        // 실시간 검증
        $form.find(':input').on('blur', (e) => {
            this.validateField($(e.target));
        });

        // 제출 시 전체 검증
        $form.submit((e) => {
            e.preventDefault();

            if (this.validateForm($form)) {
                // 검증 통과
                console.log('폼 제출:', $form.serialize());
                // Ajax 전송 등
            }
        });
    },

    validateField: function($field) {
        let name = $field.attr('name');
        let value = $field.val().trim();
        let rule = this.rules[name];

        if (!rule) return true;

        let error = null;

        // 필수 체크
        if (rule.required && !value) {
            error = rule.messages.required || '필수 항목입니다';
        }

        // 최소 길이
        else if (rule.minLength && value.length < rule.minLength) {
            error = rule.messages.minLength ||
                `최소 ${rule.minLength}자 이상 입력하세요`;
        }

        // 패턴 검사
        else if (rule.pattern && !rule.pattern.test(value)) {
            error = rule.messages.pattern || '올바른 형식이 아닙니다';
        }

        // 커스텀 검증
        else if (rule.custom && !rule.custom(value)) {
            error = rule.messages.custom || '유효하지 않은 값입니다';
        }

        this.showError($field, error);
        return !error;
    },

    validateForm: function($form) {
        this.errors = {};
        let isValid = true;

        $form.find(':input[name]').each((i, field) => {
            if (!this.validateField($(field))) {
                isValid = false;
            }
        });

        return isValid;
    },

    showError: function($field, error) {
        let $group = $field.closest('.form-group');
        let $error = $group.find('.error-message');

        if (error) {
            $field.addClass('error');

            if (!$error.length) {
                $error = $('<span class="error-message"></span>')
                    .appendTo($group);
            }

            $error.text(error).show();
        } else {
            $field.removeClass('error');
            $error.remove();
        }
    }
};

// 사용
FormValidator.init('#registrationForm', {
    username: {
        required: true,
        minLength: 4,
        pattern: /^[a-zA-Z0-9_]+$/,
        messages: {
            required: '사용자명을 입력하세요',
            minLength: '4자 이상 입력하세요',
            pattern: '영문, 숫자, 밑줄만 사용 가능합니다'
        }
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        messages: {
            required: '이메일을 입력하세요',
            pattern: '올바른 이메일 형식이 아닙니다'
        }
    },
    password: {
        required: true,
        minLength: 8,
        custom: function(value) {
            return /[A-Z]/.test(value) && /[0-9]/.test(value);
        },
        messages: {
            required: '비밀번호를 입력하세요',
            minLength: '8자 이상 입력하세요',
            custom: '대문자와 숫자를 포함해야 합니다'
        }
    }
});
```

**코드 동작 설명:**
1. **rules 객체**: 각 필드명을 키로 검증 규칙 정의
2. **blur 이벤트**: 포커스를 잃을 때 실시간 검증 (입력 중엔 방해 안 함)
3. **e.preventDefault()**: 폼 제출 기본 동작 차단, 검증 후 수동 제출
4. **validateField()**: 단일 필드 검증 (required → minLength → pattern → custom 순)
5. **validateForm()**: 모든 필드 순회하며 검증, 하나라도 실패하면 false
6. **showError()**: 에러 메시지 동적 생성 및 표시, 유효하면 제거
7. **정규표현식**: `/^[a-zA-Z0-9_]+$/`로 허용 문자 검증
8. **custom 함수**: 복잡한 검증 로직 (대문자+숫자 포함 등)
9. **$.extend()**: 기본 메시지와 사용자 메시지 병합

## 10. 자동완성

입력 시 추천 검색어를 보여줍니다. 사용자가 전체를 타이핑하지 않아도 원하는 항목을 빠르게 찾을 수 있습니다.

**사용 사례:** 검색창, 주소 입력, 태그 입력

**왜 자동완성을 사용할까?**
- 타이핑 시간 절약 (몇 글자만 입력 후 선택)
- 오타 방지 (추천 목록에서 선택)
- 검색 가능한 항목 미리 보기
- 모바일에서 특히 유용 (타이핑 어려움)

**작동 방식:**
1. input 이벤트로 타이핑 감지, 디바운스로 성능 최적화
2. 최소 글자 수 도달 시 서버나 로컬 데이터에서 검색
3. 결과를 <ul><li> 형태로 동적 생성하여 입력란 아래 표시
4. 키보드 화살표로 항목 선택, Enter로 확정
5. ESC 키나 바깥 클릭으로 목록 닫기
6. 선택한 값을 입력란에 채우고 목록 숨김

```javascript
let Autocomplete = {
    timer: null,
    $results: null,
    selectedIndex: -1,

    init: function(inputSelector, options) {
        this.options = $.extend({
            minLength: 2,
            delay: 300,
            source: function(keyword, callback) { }
        }, options);

        let $input = $(inputSelector);

        // 결과 목록 생성
        this.$results = $('<ul class="autocomplete-results"></ul>')
            .insertAfter($input)
            .hide();

        // 입력 이벤트
        $input.on('input', (e) => {
            clearTimeout(this.timer);
            let keyword = $(e.target).val().trim();

            if (keyword.length < this.options.minLength) {
                this.hide();
                return;
            }

            this.timer = setTimeout(() => {
                this.search(keyword);
            }, this.options.delay);
        });

        // 키보드 네비게이션
        $input.on('keydown', (e) => this.handleKeyboard(e));

        // 바깥 클릭 시 닫기
        $(document).click(() => this.hide());

        $input.click((e) => e.stopPropagation());
        this.$results.click((e) => e.stopPropagation());
    },

    search: function(keyword) {
        this.options.source(keyword, (data) => {
            this.showResults(data);
        });
    },

    showResults: function(items) {
        this.$results.empty();

        if (items.length === 0) {
            this.hide();
            return;
        }

        items.forEach((item, index) => {
            $('<li>')
                .text(item)
                .attr('data-index', index)
                .click(() => this.select(item))
                .appendTo(this.$results);
        });

        this.$results.show();
        this.selectedIndex = -1;
    },

    select: function(value) {
        $(this.options.inputSelector).val(value);
        this.hide();
    },

    hide: function() {
        this.$results.hide();
    },

    handleKeyboard: function(e) {
        let $items = this.$results.find('li');

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.selectedIndex = Math.min(this.selectedIndex + 1, $items.length - 1);
            this.highlightItem();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
            this.highlightItem();
        } else if (e.key === 'Enter' && this.selectedIndex >= 0) {
            e.preventDefault();
            let value = $items.eq(this.selectedIndex).text();
            this.select(value);
        } else if (e.key === 'Escape') {
            this.hide();
        }
    },

    highlightItem: function() {
        this.$results.find('li').removeClass('selected');

        if (this.selectedIndex >= 0) {
            this.$results.find('li').eq(this.selectedIndex).addClass('selected');
        }
    }
};

// 사용
Autocomplete.init('#searchInput', {
    minLength: 2,
    delay: 300,
    source: function(keyword, callback) {
        $.get('/api/autocomplete', { q: keyword }, function(data) {
            callback(data);
        });
    }
});
```

**코드 동작 설명:**
1. **$results 생성**: 입력란 바로 아래 결과 목록 삽입 (위치 자동)
2. **input 이벤트**: 타이핑할 때마다 발생 (change는 포커스 잃을 때만)
3. **clearTimeout()**: 디바운스 - 타이핑 멈춘 후에만 검색
4. **minLength**: 1~2글자는 결과가 너무 많으므로 제한
5. **source 콜백**: 외부에서 데이터 제공 방법 정의 (Ajax, 로컬 배열 등)
6. **키보드 네비게이션**: ArrowDown/Up으로 선택, Enter로 확정
7. **selectedIndex**: 현재 선택된 항목 추적 (0부터 시작, -1은 미선택)
8. **stopPropagation()**: 입력란/목록 클릭이 document로 전파 안 되게
9. **addClass('selected')**: CSS로 선택된 항목 하이라이트
10. **이벤트 위임 X**: 결과 목록은 동적이지만 this.$results에 직접 바인딩

## 11. 이미지 Lazy Loading

화면에 보이는 이미지만 로드하여 성능을 향상시킵니다. 페이지 로딩 속도를 크게 개선할 수 있습니다.

**사용 사례:** 이미지 많은 페이지, 상품 목록, 갤러리

**왜 Lazy Loading을 사용할까?**
- 초기 페이지 로딩 속도 향상 (모든 이미지를 한 번에 로드 안 함)
- 데이터 사용량 절약 (사용자가 스크롤하지 않은 이미지는 안 받음)
- 서버 부담 감소 (한 번에 많은 이미지 요청 안 함)
- 모바일 사용자에게 특히 중요 (느린 네트워크)

**작동 방식:**
1. HTML에서 실제 이미지는 `data-src`에, 플레이스홀더는 `src`에 넣음
2. 스크롤/리사이즈 시 화면에 보이는 이미지 확인
3. 뷰포트에 들어온 이미지의 `src`를 `data-src` 값으로 변경 (로드 시작)
4. `data-src` 제거하여 재확인 방지
5. 200px 여유: 이미지가 화면에 나타나기 전에 미리 로드

```javascript
let LazyLoad = {
    init: function() {
        this.loadVisibleImages();

        $(window).on('scroll resize', $.proxy(this.loadVisibleImages, this));
    },

    loadVisibleImages: function() {
        $('img[data-src]').each(function() {
            if (LazyLoad.isInViewport(this)) {
                let $img = $(this);
                $img.attr('src', $img.data('src'))
                    .removeAttr('data-src')
                    .addClass('loaded');
            }
        });
    },

    isInViewport: function(element) {
        let rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= $(window).height() + 200 &&
            rect.right <= $(window).width()
        );
    }
};

LazyLoad.init();

// HTML: <img data-src="real-image.jpg" src="placeholder.jpg">
```

**코드 동작 설명:**
1. **loadVisibleImages()**: `data-src` 속성을 가진 모든 이미지 순회
2. **isInViewport()**: getBoundingClientRect()로 뷰포트 내 위치 확인
3. **rect.bottom <= windowHeight + 200**: 화면 하단에서 200px 전에 로드 시작
4. **attr('src', data-src)**: 실제 이미지 URL을 src에 설정 (브라우저가 로드 시작)
5. **removeAttr('data-src')**: 제거하여 다시 확인 안 되게 (중복 로드 방지)
6. **addClass('loaded')**: CSS로 로딩 완료 효과 (페이드 인 등)
7. **scroll/resize 이벤트**: 스크롤하거나 창 크기 변경 시 다시 확인
8. **$.proxy()**: this 바인딩 유지하며 메서드 전달
9. **플레이스홀더**: 작은 용량의 이미지나 그레이 박스로 레이아웃 유지

**개선점:**
- IntersectionObserver API 사용하면 성능 더 좋음 (스크롤 이벤트 불필요)
- 쓰로틀링 적용하여 스크롤 이벤트 호출 횟수 제한

## 12. 별점 시스템

사용자가 별점을 매길 수 있는 UI입니다. 제품 리뷰, 평가, 만족도 조사 등에 직관적인 인터페이스를 제공합니다.

**사용 사례:** 상품 리뷰, 영화/음악 평가, 서비스 만족도, 숙소 평점

**왜 별점 시스템을 사용할까?**
- 직관적: 숫자보다 별 아이콘이 이해하기 쉬움
- 빠른 입력: 클릭 한 번으로 평가 완료
- 시각적 피드백: 현재 점수를 한눈에 파악
- 일관성: 많은 서비스에서 사용하는 익숙한 UI

**작동 방식:**
1. 컨테이너에 1~5점까지 별 아이콘 동적 생성
2. 마우스 오버 시 해당 별까지 하이라이트 (미리보기)
3. 마우스 떠나면 현재 저장된 평점으로 복원
4. 클릭 시 평점 확정, data-rating에 저장
5. rate 이벤트 발생시켜 외부에서 처리 (서버 전송 등)

```javascript
let Rating = {
    init: function(selector) {
        $(selector).each(function() {
            let $container = $(this);
            let rating = $container.data('rating') || 0;

            // 별 생성
            for (let i = 1; i <= 5; i++) {
                $('<span class="star" data-value="' + i + '">★</span>')
                    .appendTo($container);
            }

            Rating.setRating($container, rating);

            // 이벤트
            $container.on('mouseenter', '.star', function() {
                let value = $(this).data('value');
                Rating.highlight($container, value);
            });

            $container.on('mouseleave', function() {
                let rating = $container.data('rating');
                Rating.highlight($container, rating);
            });

            $container.on('click', '.star', function() {
                let value = $(this).data('value');
                Rating.setRating($container, value);

                // 이벤트 발생
                $container.trigger('rate', [value]);
            });
        });
    },

    setRating: function($container, value) {
        $container.data('rating', value);
        Rating.highlight($container, value);
    },

    highlight: function($container, value) {
        $container.find('.star').each(function() {
            if ($(this).data('value') <= value) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }
};

// 사용
Rating.init('.rating');

$('.rating').on('rate', function(e, value) {
    console.log('별점:', value);
    // 서버에 전송
});
```

**코드 동작 설명:**
1. **init()**: 클래스 선택자로 여러 별점 컨테이너 한 번에 초기화
2. **별 생성**: 1~5까지 루프 돌며 span.star 동적 생성, data-value로 점수 저장
3. **data-rating**: 초기 평점 읽어오기 (서버에서 받은 기존 평점)
4. **mouseenter**: 호버한 별의 value를 읽어 그만큼 하이라이트
5. **mouseleave**: 마우스 떠나면 저장된 평점으로 되돌림 (미리보기 취소)
6. **click**: 클릭 시 평점 확정, setRating()으로 저장
7. **trigger('rate')**: 커스텀 이벤트 발생, 외부에서 listen하여 서버 전송
8. **highlight()**: value 이하의 별만 active 클래스 추가 (CSS로 색상 변경)
9. **each()**: 여러 별점 컨테이너 각각 독립적으로 동작

**CSS 예시:**
```css
.star {
    color: #ddd;
    cursor: pointer;
    font-size: 24px;
    transition: color 0.2s;
}

.star.active {
    color: #ffd700; /* 금색 */
}

.star:hover {
    transform: scale(1.2);
}
```

---

## 패턴 활용 팁

### 재사용 가능하게 작성하기
각 패턴을 객체나 함수로 캡슐화하여 여러 곳에서 재사용하세요.

```javascript
// 나쁜 예 - 하드코딩
$('#modal1').fadeIn();

// 좋은 예 - 재사용 가능
Modal.open('modal1');
Modal.open('modal2');
```

### 옵션으로 커스터마이징
$.extend()로 기본 옵션과 사용자 옵션을 병합하세요.

```javascript
let defaults = { speed: 300, autoPlay: true };
let options = $.extend({}, defaults, userOptions);
```

### 이벤트 위임 활용
동적으로 추가되는 요소도 처리할 수 있도록 이벤트 위임을 사용하세요.

```javascript
// 나쁜 예
$('.button').click(handler);

// 좋은 예 - 나중에 추가된 .button도 동작
$(document).on('click', '.button', handler);
```

### 메모리 관리
사용이 끝난 요소는 remove()하고, 이벤트는 off()로 제거하세요.

```javascript
Modal.close = function(id) {
    $('#' + id).fadeOut(300, function() {
        $(this).remove();  // DOM에서 제거
    });
    $(document).off('keydown.modal');  // 이벤트 제거
};
```

### 접근성 고려
키보드 네비게이션(Tab, Enter, ESC)과 aria 속성을 추가하세요.

```javascript
// ESC 키 지원
$(document).on('keydown', function(e) {
    if (e.key === 'Escape') {
        Modal.close();
    }
});

// aria 속성
$modal.attr({
    'role': 'dialog',
    'aria-modal': 'true',
    'aria-labelledby': 'modalTitle'
});
```

---

**핵심: 검증된 패턴을 이해하고 프로젝트에 적용하세요**

**모범 사례:**
- 패턴은 필요에 맞게 커스터마이징
- 재사용 가능한 객체/함수로 구조화
- 이벤트 위임으로 동적 요소 처리
- 옵션 시스템으로 유연성 제공
- 메모리 누수 방지 (이벤트 제거, DOM 정리)
- 키보드 네비게이션으로 접근성 향상
- 사용자 경험(UX)을 최우선으로 고려
