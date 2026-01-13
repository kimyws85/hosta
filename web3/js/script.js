$(document).ready(function() {

    // 헤더 스크롤 효과
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#header').css('box-shadow', '0 2px 10px rgba(0,0,0,0.1)');
        } else {
            $('#header').css('box-shadow', 'none');
        }
    });

    // 검색창 열기/닫기
    $('.search-btn').click(function() {
        $('.search-area').addClass('active');
        $('.search-area input').focus();
    });

    $('.close-search').click(function() {
        $('.search-area').removeClass('active');
        $('.search-area input').val('');
    });

    // 메인 비주얼 스와이퍼
    if ($('.mainSwiper').length) {
        const mainSwiper = new Swiper('.mainSwiper', {
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            speed: 800,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }
        });
    }

    // 제품 스와이퍼
    if ($('.productSwiper').length) {
        const productSwiper = new Swiper('.productSwiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            }
        });
    }

    // 리뷰 스와이퍼
    if ($('.reviewSwiper').length) {
        const reviewSwiper = new Swiper('.reviewSwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }
        });
    }

    // 제품 필터링
    $('.tab-btn').click(function() {
        const category = $(this).data('category');

        $('.tab-btn').removeClass('active');
        $(this).addClass('active');

        if (category === 'all') {
            $('.product-item').fadeIn(400);
        } else {
            $('.product-item').hide();
            $('.product-item[data-category="' + category + '"]').fadeIn(400);
        }
    });

    // 제품 상세보기 버튼
    $('.btn-detail').click(function(e) {
        e.preventDefault();
        alert('제품 상세 페이지로 이동합니다.');
    });

    // FAQ 아코디언
    $('.faq-question').click(function() {
        const $item = $(this).parent();
        const $answer = $item.find('.faq-answer');

        if ($item.hasClass('active')) {
            $item.removeClass('active');
            $answer.css('max-height', '0');
        } else {
            $('.faq-item').removeClass('active');
            $('.faq-answer').css('max-height', '0');

            $item.addClass('active');
            $answer.css('max-height', $answer[0].scrollHeight + 'px');
        }
    });

    // FAQ 카테고리 탭
    $('.faq-tab').click(function() {
        const category = $(this).data('category');

        $('.faq-tab').removeClass('active');
        $(this).addClass('active');

        $('.faq-list').hide();
        $('.faq-list[data-category="' + category + '"]').fadeIn(400);

        // 모든 FAQ 아이템 닫기
        $('.faq-item').removeClass('active');
        $('.faq-answer').css('max-height', '0');
    });

    // 리뷰 도움돼요 버튼
    $('.btn-helpful').click(function() {
        const $count = $(this).find('span');
        const currentCount = parseInt($count.text());
        $count.text(currentCount + 1);
        $(this).css('background', '#e0e0e0');
        $(this).prop('disabled', true);
    });

    // 리뷰 정렬
    $('#reviewSort').change(function() {
        const sortType = $(this).val();
        // 실제 구현에서는 AJAX로 정렬된 데이터를 가져오는 로직이 들어갑니다
        console.log('정렬 기준:', sortType);
    });

    // 문의하기 폼 제출
    $('.cs-form').submit(function(e) {
        e.preventDefault();

        const type = $(this).find('select').val();
        const email = $(this).find('input[type="email"]').val();
        const title = $(this).find('input[type="text"]').val();
        const content = $(this).find('textarea').val();

        if (!type) {
            alert('문의 유형을 선택해주세요.');
            return false;
        }

        if (!email) {
            alert('이메일을 입력해주세요.');
            return false;
        }

        if (!title) {
            alert('제목을 입력해주세요.');
            return false;
        }

        if (!content) {
            alert('문의 내용을 입력해주세요.');
            return false;
        }

        alert('문의가 접수되었습니다.\n빠른 시일 내에 답변 드리겠습니다.');

        // 폼 초기화
        $(this)[0].reset();
    });

    // 카카오톡 상담 버튼
    $('.btn-kakao').click(function() {
        alert('카카오톡 채널로 연결됩니다.\n실제 운영 시 카카오톡 채널 URL로 연결됩니다.');
    });

    // 리뷰 이미지 확대
    $('.review-images img').click(function() {
        const src = $(this).attr('src');
        const modal = $('<div class="image-modal"></div>');
        const img = $('<img src="' + src + '">');
        const close = $('<button class="modal-close">×</button>');

        modal.append(close).append(img);
        $('body').append(modal);

        // 모달 스타일 추가
        modal.css({
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'width': '100%',
            'height': '100%',
            'background': 'rgba(0,0,0,0.9)',
            'display': 'flex',
            'align-items': 'center',
            'justify-content': 'center',
            'z-index': '9999',
            'cursor': 'pointer'
        });

        img.css({
            'max-width': '90%',
            'max-height': '90%',
            'border-radius': '8px'
        });

        close.css({
            'position': 'absolute',
            'top': '30px',
            'right': '30px',
            'background': 'none',
            'border': 'none',
            'color': '#fff',
            'font-size': '50px',
            'cursor': 'pointer',
            'line-height': '1'
        });

        // 모달 닫기
        modal.click(function() {
            $(this).fadeOut(300, function() {
                $(this).remove();
            });
        });
    });

    // 부드러운 스크롤
    $('a[href^="#"]').click(function(e) {
        const target = $(this).attr('href');
        if (target !== '#' && $(target).length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(target).offset().top - 70
            }, 800);
        }
    });

    // 페이지 로드 애니메이션
    $('.category-item, .product-card, .value-item').each(function(index) {
        $(this).css({
            'opacity': '0',
            'transform': 'translateY(30px)'
        });

        $(this).delay(index * 100).animate({
            'opacity': '1'
        }, 600, function() {
            $(this).css('transform', 'translateY(0)');
        });
    });

    // 스크롤 애니메이션
    $(window).scroll(function() {
        $('.section-title').each(function() {
            const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < windowBottom - 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    });

    $('.section-title').css({
        'opacity': '0',
        'transform': 'translateY(30px)',
        'transition': 'all 0.6s ease'
    });

    // 피부 타입별 탭 전환
    $('.skin-tab').click(function() {
        const skinType = $(this).data('skin');

        $('.skin-tab').removeClass('active');
        $(this).addClass('active');

        $('.skin-products').removeClass('active');
        $('.skin-products[data-skin="' + skinType + '"]').addClass('active');
    });

    // 뉴스레터 구독
    $('.newsletter-form').submit(function(e) {
        e.preventDefault();
        const email = $(this).find('input[type="email"]').val();

        if (!email) {
            alert('이메일 주소를 입력해주세요.');
            return false;
        }

        alert('뉴스레터 구독이 완료되었습니다!\n' + email + '으로 소식을 보내드리겠습니다.');
        $(this)[0].reset();
    });

    // 피부 상담 버튼
    $('.btn-consultation').click(function(e) {
        e.preventDefault();
        alert('피부 상담 신청이 접수되었습니다.\n고객센터에서 연락드리겠습니다.');
    });

    // 리뷰 작성 버튼
    $('.btn-write-review').click(function(e) {
        e.preventDefault();
        alert('로그인이 필요한 서비스입니다.');
    });

    // 포토 리뷰 이미지 확대
    $('.photo-grid .photo-item img').click(function() {
        const src = $(this).attr('src');
        const modal = $('<div class="image-modal"></div>');
        const img = $('<img src="' + src + '">');
        const close = $('<button class="modal-close">×</button>');

        modal.append(close).append(img);
        $('body').append(modal);

        modal.css({
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'width': '100%',
            'height': '100%',
            'background': 'rgba(0,0,0,0.9)',
            'display': 'flex',
            'align-items': 'center',
            'justify-content': 'center',
            'z-index': '9999',
            'cursor': 'pointer'
        });

        img.css({
            'max-width': '90%',
            'max-height': '90%',
            'border-radius': '8px'
        });

        close.css({
            'position': 'absolute',
            'top': '30px',
            'right': '30px',
            'background': 'none',
            'border': 'none',
            'color': '#fff',
            'font-size': '50px',
            'cursor': 'pointer',
            'line-height': '1'
        });

        modal.click(function() {
            $(this).fadeOut(300, function() {
                $(this).remove();
            });
        });
    });

    // 인스타그램 피드 클릭
    $('.insta-item').click(function() {
        window.open('https://www.instagram.com/', '_blank');
    });

});