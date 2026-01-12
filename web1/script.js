$(document).ready(function() {

    // ==================== 네비게이션 ==================== //

    // 햄버거 메뉴 토글
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.nav-menu').toggleClass('active');
    });

    // 네비게이션 링크 클릭 시 메뉴 닫기
    $('.nav-menu a').click(function() {
        $('.hamburger').removeClass('active');
        $('.nav-menu').removeClass('active');
    });

    // 스크롤 시 헤더 스타일 변경
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });


    // ==================== 히어로 섹션 애니메이션 ==================== //

    // 페이지 로드 시 히어로 섹션 애니메이션
    if ($('.hero').length) {
        setTimeout(function() {
            $('.hero .fade-in').addClass('visible');
        }, 100);
    }


    // ==================== 스크롤 애니메이션 ==================== //

    // IntersectionObserver를 사용한 스크롤 애니메이션
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('visible');
            }
        });
    }, observerOptions);

    // 관찰할 요소들 선택
    $('.course-card, .category-card, .stat-card, .faq-item, .feature-card, .value-card, .instructor-card').each(function() {
        $(this).addClass('fade-in');
        observer.observe(this);
    });


    // ==================== 카테고리 카드 호버 효과 ==================== //

    $('.category-card, .category-card-large').hover(
        function() {
            $(this).find('.category-icon, .category-icon-large').css('transform', 'scale(1.2) rotate(5deg)');
        },
        function() {
            $(this).find('.category-icon, .category-icon-large').css('transform', 'scale(1) rotate(0deg)');
        }
    );

    $('.category-icon, .category-icon-large').css('transition', 'transform 0.3s ease');


    // ==================== 통계 카운터 애니메이션 ==================== //

    let statsAnimated = false;

    function animateStats() {
        if (statsAnimated) return;

        $('.stat-number').each(function() {
            const $this = $(this);
            const target = parseInt($this.attr('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const counter = setInterval(function() {
                current += step;
                if (current >= target) {
                    $this.text(target.toLocaleString());
                    clearInterval(counter);
                } else {
                    $this.text(Math.floor(current).toLocaleString());
                }
            }, 16);
        });

        statsAnimated = true;
    }

    // 통계 섹션이 보이면 애니메이션 시작
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
            }
        });
    }, { threshold: 0.5 });

    if ($('.stats').length) {
        statsObserver.observe($('.stats')[0]);
    }


    // ==================== FAQ 아코디언 ==================== //

    $('.faq-question').click(function() {
        const $item = $(this).parent('.faq-item');
        const isActive = $item.hasClass('active');

        // 모든 FAQ 아이템 닫기
        $('.faq-item').removeClass('active');
        $('.faq-answer').slideUp(300);

        // 클릭한 아이템이 활성화되지 않았다면 열기
        if (!isActive) {
            $item.addClass('active');
            $item.find('.faq-answer').slideDown(300);
        }
    });


    // ==================== FAQ 탭 필터 (faq.html) ==================== //

    $('.faq-tab').click(function() {
        const category = $(this).data('tab');

        // 탭 활성화
        $('.faq-tab').removeClass('active');
        $(this).addClass('active');

        // FAQ 아이템 필터링
        if (category === 'all') {
            $('.faq-item').fadeIn(300);
        } else {
            $('.faq-item').hide();
            $('.faq-item[data-category="' + category + '"]').fadeIn(300);
        }

        // 모든 아이템 닫기
        $('.faq-item').removeClass('active');
        $('.faq-answer').slideUp(300);
    });


    // ==================== 필터 기능 (courses.html) ==================== //

    $('.filter-btn').click(function() {
        const level = $(this).data('filter');

        // 버튼 활성화
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        // 강의 카드 필터링
        if (level === 'all') {
            $('.course-card').fadeIn(300);
        } else {
            $('.course-card').hide();
            $('.course-card[data-level="' + level + '"]').fadeIn(300);
        }
    });


    // ==================== 검색 기능 (courses.html) ==================== //

    $('#searchInput').on('keyup', function() {
        const searchText = $(this).val().toLowerCase();

        $('.course-card').each(function() {
            const courseTitle = $(this).find('h3').text().toLowerCase();
            const courseDesc = $(this).find('p').text().toLowerCase();

            if (courseTitle.includes(searchText) || courseDesc.includes(searchText)) {
                $(this).fadeIn(300);
            } else {
                $(this).fadeOut(300);
            }
        });
    });


    // ==================== 수강신청 버튼 ==================== //

    $('.btn-enroll').click(function(e) {
        e.stopPropagation();
        const courseName = $(this).closest('.course-card').find('h3').text();

        // 애니메이션 효과
        $(this).html('<span>✓</span> 추가됨');
        $(this).css('background', 'var(--success-color)');

        // 알림 표시
        showNotification(`"${courseName}" 장바구니에 추가되었습니다!`);

        // 3초 후 원래대로
        const btnElement = $(this);
        setTimeout(() => {
            btnElement.html('수강신청');
            btnElement.css('background', '');
        }, 3000);
    });

    // 알림 함수
    function showNotification(message) {
        const notification = $(`
            <div class="notification" style="
                position: fixed;
                top: 100px;
                right: 20px;
                background: var(--success-color);
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.3);
                z-index: 3000;
                animation: slideInRight 0.3s ease;
            ">
                ${message}
            </div>
        `);

        $('body').append(notification);

        setTimeout(function() {
            notification.fadeOut(function() {
                $(this).remove();
            });
        }, 3000);
    }

    // 알림 애니메이션 CSS 추가
    if (!$('#notification-style').length) {
        $('head').append(`
            <style id="notification-style">
                @keyframes slideInRight {
                    from {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            </style>
        `);
    }


    // ==================== 로그인 모달 ==================== //

    // 로그인 버튼 클릭
    $('#loginBtn, #startBtn').click(function() {
        $('#loginModal').addClass('show');
        $('body').css('overflow', 'hidden');
    });

    // 모달 닫기 버튼
    $('.close').click(function() {
        $('#loginModal').removeClass('show');
        $('body').css('overflow', '');
    });

    // 모달 배경 클릭 시 닫기
    $('#loginModal').click(function(e) {
        if ($(e.target).is('#loginModal')) {
            $(this).removeClass('show');
            $('body').css('overflow', '');
        }
    });

    // ESC 키로 모달 닫기
    $(document).keydown(function(e) {
        if (e.key === 'Escape') {
            $('#loginModal').removeClass('show');
            $('body').css('overflow', '');
        }
    });

    // 로그인 폼 제출
    $('.login-form').submit(function(e) {
        e.preventDefault();
        const email = $('#email').val();
        const password = $('#password').val();

        // 간단한 유효성 검사
        if (email && password) {
            // 로딩 애니메이션
            const submitBtn = $(this).find('button[type="submit"]');
            const originalText = submitBtn.text();
            submitBtn.text('로그인 중...').prop('disabled', true);

            // 시뮬레이션 (실제로는 서버 요청)
            setTimeout(function() {
                $('#loginModal').removeClass('show');
                $('body').css('overflow', '');
                showNotification('로그인 성공!');
                $('#email, #password').val('');
                submitBtn.text(originalText).prop('disabled', false);
            }, 1500);
        }
    });

    // 입력 필드 포커스 애니메이션
    $('.form-group input').focus(function() {
        $(this).parent('.form-group').find('label').css({
            'color': 'var(--primary-color)',
            'transform': 'scale(1.05)'
        });
    }).blur(function() {
        $(this).parent('.form-group').find('label').css({
            'color': '',
            'transform': ''
        });
    });

    $('.form-group label').css('transition', 'all 0.3s ease');


    // ==================== Scroll to Top 버튼 ==================== //

    // 스크롤 위치에 따라 버튼 표시/숨김
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#scrollTop').addClass('show');
        } else {
            $('#scrollTop').removeClass('show');
        }
    });

    // 버튼 클릭 시 상단으로 스크롤
    $('#scrollTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });


    // ==================== 강의 카드 클릭 효과 ==================== //

    $('.course-card').click(function() {
        const courseName = $(this).find('h3').text();

        // 펄스 애니메이션
        $(this).css('animation', 'pulse 0.3s');

        setTimeout(() => {
            $(this).css('animation', '');
        }, 300);

        console.log(`선택된 강의: ${courseName}`);
    });

    // 펄스 애니메이션 CSS 추가
    if (!$('#pulse-style').length) {
        $('head').append(`
            <style id="pulse-style">
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.02); }
                }
            </style>
        `);
    }


    // ==================== 로딩 애니메이션 ==================== //

    // 페이지 로드 완료 시
    $(window).on('load', function() {
        $('body').css('opacity', '0');
        $('body').animate({ opacity: 1 }, 300);
    });


    // ==================== 랜덤 색상 강의 카드 배경 ==================== //

    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    ];

    $('.course-image').each(function(index) {
        $(this).css('background', gradients[index % gradients.length]);
    });


    // ==================== 터치 스와이프 지원 (모바일) ==================== //

    let touchStartX = 0;
    let touchEndX = 0;

    $(document).on('touchstart', '.course-card', function(e) {
        touchStartX = e.originalEvent.touches[0].clientX;
    });

    $(document).on('touchend', '.course-card', function(e) {
        touchEndX = e.originalEvent.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        if (Math.abs(touchEndX - touchStartX) > swipeThreshold) {
            // 스와이프 감지됨
            console.log('스와이프 감지');
        }
    }


    // ==================== 카테고리 카드 클릭 ==================== //

    $('.category-card, .category-card-large').click(function() {
        // 링크가 있으면 그것을 따르고, 없으면 courses.html로 이동
        const link = $(this).find('a').attr('href') || $(this).find('.btn-category').attr('href');
        if (link && !$(this).find('.btn-category').length) {
            window.location.href = link || 'courses.html';
        }
    });

    // 카테고리 내부의 버튼 클릭 시 이벤트 전파 방지
    $('.btn-category').click(function(e) {
        e.stopPropagation();
    });


    // ==================== 학습 경로 버튼 ==================== //

    $('.btn-path').click(function() {
        const pathName = $(this).closest('.path-card').find('h3').text();
        showNotification(`${pathName} 학습 경로를 시작합니다!`);

        // 실제로는 courses.html로 이동하거나 필터링된 강의 목록 표시
        setTimeout(function() {
            window.location.href = 'courses.html';
        }, 1500);
    });


    // ==================== 연락하기 버튼 ==================== //

    $('.btn-contact').click(function() {
        showNotification('실시간 채팅을 시작합니다...');
    });


    // ==================== 디버그 정보 (개발용) ==================== //

    console.log('%c코딩마스터 웹사이트', 'color: #6366f1; font-size: 24px; font-weight: bold;');
    console.log('%c페이지가 성공적으로 로드되었습니다!', 'color: #10b981; font-size: 14px;');
    console.log('jQuery 버전:', $.fn.jquery);
    console.log('현재 페이지:', window.location.pathname);

});
