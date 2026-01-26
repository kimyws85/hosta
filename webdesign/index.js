/* ========================================
   인덱스 페이지 JavaScript
   웹 디자인 교육 과정 메인
======================================== */

$(document).ready(function () {

    /* ========================================
       Week 데이터 정의
       - 추가/수정/삭제가 용이하도록 배열로 관리
       - 새로운 week 추가 시 이 배열만 수정하면 됨
    ======================================== */
    var weekData = [
        { num: 1, title: '웹을 판단의 집합으로 인식하기' },
        { num: 2, title: 'Week 2' },
        { num: 3, title: 'Week 3' },
        { num: 4, title: 'Week 4' },
        { num: 5, title: 'Week 5' },
        { num: 6, title: 'Week 6' },
        { num: 7, title: 'Week 7' },
        { num: 8, title: 'Week 8' },
        { num: 9, title: 'Week 9' },
        { num: 10, title: 'Week 10' },
        { num: 11, title: 'Week 11' },
        { num: 12, title: 'Week 12' },
        { num: 13, title: 'Week 13' },
        { num: 14, title: 'Week 14' },
        { num: 15, title: 'Week 15' },
        { num: 16, title: 'Week 16' },
        { num: 17, title: 'Week 17' },
        { num: 18, title: 'Week 18' },
        { num: 19, title: 'Week 19' },
        { num: 20, title: 'Week 20' },
        { num: 21, title: 'Week 21' },
        { num: 22, title: 'Week 22' },
        { num: 23, title: 'Week 23' },
        { num: 24, title: 'Week 24' },
        { num: 25, title: 'Week 25' }
    ];

    /* ========================================
       Week 메뉴 생성
    ======================================== */
    function generateWeekMenu() {
        var $weekList = $('#weekList');
        var menuHtml = '';

        weekData.forEach(function (week) {
            menuHtml += '<li class="week-item" data-week="' + week.num + '">';
            menuHtml += '    <span class="week-number">' + week.num + '</span>';
            menuHtml += '    <span class="week-label">Week ' + week.num + '</span>';
            menuHtml += '</li>';
        });

        $weekList.html(menuHtml);
    }

    /* ========================================
       빠른 선택 버튼 생성
       - 처음 5개 week만 표시
    ======================================== */
    function generateQuickButtons() {
        var $quickButtons = $('#quickButtons');
        var buttonsHtml = '';

        // 처음 5개만 빠른 선택 버튼으로 표시
        for (var i = 0; i < Math.min(25, weekData.length); i++) {
            var week = weekData[i];
            buttonsHtml += '<button class="quick-btn" data-week="' + week.num + '">Week ' + week.num + '</button>';
        }

        $quickButtons.html(buttonsHtml);
    }

    /* ========================================
       Week 페이지 로드
    ======================================== */
    function loadWeek(weekNum) {
        var $iframe = $('#weekFrame');
        var $welcome = $('#welcomeScreen');
        var $currentWeek = $('#currentWeek');

        // iframe에 week 페이지 로드
        $iframe.attr('src', 'week' + weekNum + '.html');
        $iframe.addClass('active');
        $welcome.addClass('hidden');

        // 현재 week 표시 업데이트
        $currentWeek.html('<i class="fa-solid fa-book-open"></i> Week ' + weekNum);

        // 메뉴 활성화 상태 업데이트
        $('.week-item').removeClass('active');
        $('.week-item[data-week="' + weekNum + '"]').addClass('active');

        // 모바일에서 사이드바 닫기
        closeSidebar();

        // URL 해시 업데이트 (뒤로가기 지원)
        history.pushState({ week: weekNum }, '', '#week' + weekNum);
    }

    /* ========================================
       사이드바 토글 (모바일)
    ======================================== */
    function openSidebar() {
        $('.sidebar').addClass('open');
        $('body').append('<div class="sidebar-overlay active"></div>');
    }

    function closeSidebar() {
        $('.sidebar').removeClass('open');
        $('.sidebar-overlay').remove();
    }

    /* ========================================
       이벤트 바인딩
    ======================================== */

    // Week 메뉴 클릭
    $(document).on('click', '.week-item', function () {
        var weekNum = $(this).data('week');
        loadWeek(weekNum);
    });

    // 빠른 선택 버튼 클릭
    $(document).on('click', '.quick-btn', function () {
        var weekNum = $(this).data('week');
        loadWeek(weekNum);
    });

    // 메뉴 토글 버튼 (모바일)
    $('#menuToggle').on('click', function () {
        if ($('.sidebar').hasClass('open')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    // 오버레이 클릭 시 사이드바 닫기
    $(document).on('click', '.sidebar-overlay', function () {
        closeSidebar();
    });

    // 브라우저 뒤로가기/앞으로가기 지원
    $(window).on('popstate', function (e) {
        var state = e.originalEvent.state;
        if (state && state.week) {
            loadWeek(state.week);
        } else {
            // 초기 화면으로
            $('#weekFrame').removeClass('active').attr('src', '');
            $('#welcomeScreen').removeClass('hidden');
            $('#currentWeek').html('<span>Week를 선택하세요</span>');
            $('.week-item').removeClass('active');
        }
    });

    /* ========================================
       초기화
    ======================================== */
    function init() {
        // 메뉴 생성
        generateWeekMenu();
        generateQuickButtons();

        // URL 해시 확인하여 해당 week 로드
        var hash = window.location.hash;
        if (hash && hash.startsWith('#week')) {
            var weekNum = parseInt(hash.replace('#week', ''));
            if (weekNum >= 1 && weekNum <= weekData.length) {
                loadWeek(weekNum);
            }
        }
    }

    // 초기화 실행
    init();

});
