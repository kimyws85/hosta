/* ========================================
   Week 2 JavaScript
   웹을 판단의 집합으로 인식하기
======================================== */

$(document).ready(function () {

    /* ========================================
       스크롤 진행률 표시
    ======================================== */
    function updateProgressBar() {
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height() - $(window).height();
        var progress = (scrollTop / docHeight) * 100;
        $('.progress-fill').css('width', progress + '%');
    }

    $(window).on('scroll', updateProgressBar);

    /* ========================================
       섹션 페이드인 애니메이션
    ======================================== */
    function checkSectionVisibility() {
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();

        $('.content-section').each(function () {
            var sectionTop = $(this).offset().top;
            var triggerPoint = scrollTop + windowHeight * 0.85;

            if (sectionTop < triggerPoint) {
                $(this).addClass('visible');
            }
        });
    }

    // 초기 로드 시 체크
    checkSectionVisibility();

    // 스크롤 시 체크
    $(window).on('scroll', checkSectionVisibility);

    /* ========================================
       네비게이션 활성화 상태 업데이트
    ======================================== */
    function updateActiveNav() {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        // 현재 보이는 섹션 찾기
        var currentSection = '';

        $('.content-section').each(function () {
            var sectionTop = $(this).offset().top - 150;
            var sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
                currentSection = $(this).attr('id');
            }
        });

        // 네비게이션 활성화 상태 업데이트
        if (currentSection) {
            $('.nav-item').removeClass('active');
            $('.nav-item[data-section="' + currentSection + '"]').addClass('active');
        }
    }

    $(window).on('scroll', updateActiveNav);

    /* ========================================
       네비게이션 클릭 시 부드러운 스크롤
    ======================================== */
    // 커스텀 이징 함수 추가 (easeInOutCubic - 자연스러운 가감속)
    $.easing.easeInOutQuart = function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    };


    $('.nav-item').on('click', function (e) {
        e.preventDefault();

        var targetSection = $(this).data('section');
        var targetOffset = $('#' + targetSection).offset().top - 80;

        // linear: 일정한 속도로 이동
        $('html, body').stop().animate({
            scrollTop: targetOffset
        }, 1500, 'linear');

        // 활성화 상태 업데이트
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });

    /* ========================================
       요소 카드 호버 효과
    ======================================== */
    $('.element-card').on('mouseenter', function () {
        $(this).find('.element-visual').css({
            'transform': 'scale(1.1) rotate(5deg)'
        });
    }).on('mouseleave', function () {
        $(this).find('.element-visual').css({
            'transform': 'scale(1) rotate(0deg)'
        });
    });

    /* ========================================
       프로세스 아이템 순차 애니메이션
    ======================================== */
    function animateProcessFlow() {
        var processFlow = $('.process-flow');

        if (processFlow.length === 0) return;

        var flowTop = processFlow.offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scrollTop + windowHeight * 0.8 > flowTop && !processFlow.hasClass('animated')) {
            processFlow.addClass('animated');

            $('.process-item').each(function (index) {
                var item = $(this);
                setTimeout(function () {
                    item.css({
                        'opacity': '1',
                        'transform': 'translateY(0)'
                    });
                }, index * 200);
            });

            $('.process-connector').each(function (index) {
                var connector = $(this);
                setTimeout(function () {
                    connector.css('opacity', '1');
                }, index * 200 + 100);
            });
        }
    }

    // 초기 상태 설정
    $('.process-item').css({
        'opacity': '0',
        'transform': 'translateY(20px)',
        'transition': 'all 0.5s ease'
    });

    $('.process-connector').css({
        'opacity': '0',
        'transition': 'opacity 0.3s ease'
    });

    $(window).on('scroll', animateProcessFlow);

    /* ========================================
       단계 카드 순차 표시
    ======================================== */
    function animateStepCards() {
        $('.step-card').each(function (index) {
            var card = $(this);
            var cardTop = card.offset().top;
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scrollTop + windowHeight * 0.85 > cardTop && !card.hasClass('animated')) {
                setTimeout(function () {
                    card.addClass('animated').css({
                        'opacity': '1',
                        'transform': 'translateX(0)'
                    });
                }, index * 150);
            }
        });
    }

    // 초기 상태 설정
    $('.step-card').css({
        'opacity': '0',
        'transform': 'translateX(-30px)',
        'transition': 'all 0.6s ease'
    });

    $(window).on('scroll', animateStepCards);

    /* ========================================
       비교 카드 애니메이션
    ======================================== */
    function animateCompareCards() {
        var compareContainer = $('.compare-container');

        if (compareContainer.length === 0) return;

        var containerTop = compareContainer.offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scrollTop + windowHeight * 0.8 > containerTop && !compareContainer.hasClass('animated')) {
            compareContainer.addClass('animated');

            $('.compare-card.wrong').css({
                'opacity': '1',
                'transform': 'translateX(0)'
            });

            setTimeout(function () {
                $('.compare-arrow').css('opacity', '1');
            }, 300);

            setTimeout(function () {
                $('.compare-card.right').css({
                    'opacity': '1',
                    'transform': 'translateX(0)'
                });
            }, 500);
        }
    }

    // 초기 상태 설정
    $('.compare-card.wrong').css({
        'opacity': '0',
        'transform': 'translateX(-30px)',
        'transition': 'all 0.5s ease'
    });

    $('.compare-card.right').css({
        'opacity': '0',
        'transform': 'translateX(30px)',
        'transition': 'all 0.5s ease'
    });

    $('.compare-arrow').css({
        'opacity': '0',
        'transition': 'opacity 0.3s ease'
    });

    $(window).on('scroll', animateCompareCards);

    /* ========================================
       액션 그리드 아이템 애니메이션
    ======================================== */
    function animateActionItems() {
        var actionGrid = $('.action-grid');

        if (actionGrid.length === 0) return;

        var gridTop = actionGrid.offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scrollTop + windowHeight * 0.8 > gridTop && !actionGrid.hasClass('animated')) {
            actionGrid.addClass('animated');

            $('.action-item').each(function (index) {
                var item = $(this);
                setTimeout(function () {
                    item.css({
                        'opacity': '1',
                        'transform': 'translateY(0)'
                    });
                }, index * 150);
            });
        }
    }

    // 초기 상태 설정
    $('.action-item').css({
        'opacity': '0',
        'transform': 'translateY(20px)',
        'transition': 'all 0.5s ease'
    });

    $(window).on('scroll', animateActionItems);

    /* ========================================
       하이라이트 박스 펄스 효과
    ======================================== */
    function pulseHighlightBox() {
        $('.highlight-box').each(function () {
            var box = $(this);
            var boxTop = box.offset().top;
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scrollTop + windowHeight * 0.7 > boxTop && !box.hasClass('pulsed')) {
                box.addClass('pulsed');
                box.find('.highlight-icon').css({
                    'animation': 'pulse 0.6s ease'
                });
            }
        });
    }

    $(window).on('scroll', pulseHighlightBox);

    /* ========================================
       키 포인트 강조 효과
    ======================================== */
    function highlightKeyPoints() {
        $('.key-point').each(function () {
            var point = $(this);
            var pointTop = point.offset().top;
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scrollTop + windowHeight * 0.75 > pointTop && !point.hasClass('highlighted')) {
                point.addClass('highlighted');
                point.css({
                    'animation': 'slideInUp 0.6s ease'
                });
            }
        });
    }

    $(window).on('scroll', highlightKeyPoints);

    /* ========================================
       상태 태그 순차 표시
    ======================================== */
    function animateStateTags() {
        var userStates = $('.user-states');

        if (userStates.length === 0) return;

        var statesTop = userStates.offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scrollTop + windowHeight * 0.8 > statesTop && !userStates.hasClass('animated')) {
            userStates.addClass('animated');

            $('.state-tag').each(function (index) {
                var tag = $(this);
                setTimeout(function () {
                    tag.css({
                        'opacity': '1',
                        'transform': 'scale(1)'
                    });
                }, index * 100);
            });
        }
    }

    // 초기 상태 설정
    $('.state-tag').css({
        'opacity': '0',
        'transform': 'scale(0.8)',
        'transition': 'all 0.3s ease'
    });

    $(window).on('scroll', animateStateTags);

    /* ========================================
       결론 섹션 애니메이션
    ======================================== */
    function animateConclusionSection() {
        var conclusion = $('.conclusion-section');

        if (conclusion.length === 0) return;

        var conclusionTop = conclusion.offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scrollTop + windowHeight * 0.7 > conclusionTop && !conclusion.hasClass('animated')) {
            conclusion.addClass('animated');

            // 아이콘 애니메이션
            $('.conclusion-icon').css({
                'animation': 'bounceIn 0.8s ease'
            });

            // 대비 아이템 순차 표시
            setTimeout(function () {
                $('.contrast-item').each(function (index) {
                    var item = $(this);
                    setTimeout(function () {
                        item.css({
                            'opacity': '1',
                            'transform': 'translateY(0)'
                        });
                    }, index * 200);
                });
            }, 400);

            // 최종 질문 표시
            setTimeout(function () {
                $('.final-question').css({
                    'opacity': '1',
                    'transform': 'scale(1)'
                });
            }, 800);
        }
    }

    // 초기 상태 설정
    $('.contrast-item').css({
        'opacity': '0',
        'transform': 'translateY(20px)',
        'transition': 'all 0.5s ease'
    });

    $('.final-question').css({
        'opacity': '0',
        'transform': 'scale(0.95)',
        'transition': 'all 0.5s ease'
    });

    $(window).on('scroll', animateConclusionSection);

    /* ========================================
       숫자 카운트 애니메이션 (질문 번호)
    ======================================== */
    function animateQuestionNumbers() {
        var questionList = $('.question-list');

        if (questionList.length === 0) return;

        var listTop = questionList.offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scrollTop + windowHeight * 0.8 > listTop && !questionList.hasClass('animated')) {
            questionList.addClass('animated');

            $('.question-item').each(function (index) {
                var item = $(this);
                setTimeout(function () {
                    item.css({
                        'opacity': '1',
                        'transform': 'translateX(0)'
                    });
                }, index * 150);
            });
        }
    }

    // 초기 상태 설정
    $('.question-item').css({
        'opacity': '0',
        'transform': 'translateX(-20px)',
        'transition': 'all 0.4s ease'
    });

    $(window).on('scroll', animateQuestionNumbers);

    /* ========================================
       CSS 애니메이션 키프레임 추가
    ======================================== */
    var styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }

        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes bounceIn {
            0% {
                opacity: 0;
                transform: scale(0.3);
            }
            50% {
                transform: scale(1.05);
            }
            70% {
                transform: scale(0.9);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }

        .element-visual {
            transition: transform 0.3s ease;
        }
    `;
    document.head.appendChild(styleSheet);

    /* ========================================
       초기 애니메이션 실행
    ======================================== */
    // 페이지 로드 시 약간의 딜레이 후 애니메이션 시작
    setTimeout(function () {
        checkSectionVisibility();
        animateProcessFlow();
        animateStepCards();
        animateCompareCards();
        animateActionItems();
        animateStateTags();
        animateConclusionSection();
        animateQuestionNumbers();
    }, 100);

});
