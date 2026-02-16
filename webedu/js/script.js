/* ===================================
   JavaScript 가이드 스크립트
   - Swiper, 스크롤, 네비게이션 등
=================================== */

document.addEventListener('DOMContentLoaded', function() {

    /* -----------------------------------
       Swiper 초기화
    ----------------------------------- */
    const quickNavSwiper = new Swiper('.quick-nav-swiper', {
        // 슬라이드 설정
        slidesPerView: 1,
        spaceBetween: 16,

        // 페이지네이션
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        // 반응형 설정
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 16
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 24
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 24
            }
        },

        // 자동 재생
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },

        // 루프
        loop: true
    });


    /* -----------------------------------
       진행률 표시 바
    ----------------------------------- */
    const progressFill = document.querySelector('.progress-fill');

    if (progressFill) {
        window.addEventListener('scroll', function() {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressFill.style.width = scrolled + '%';
        });
    }


    /* -----------------------------------
       네비게이션 활성화
    ----------------------------------- */
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    // 스크롤 시 현재 섹션 감지
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // 모든 링크 비활성화
                navLinks.forEach(link => link.classList.remove('active'));

                // 현재 섹션 링크 활성화
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    // 스크롤 이벤트 (쓰로틀링 적용)
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                updateActiveNav();
                scrollTimeout = null;
            }, 100);
        }
    });

    // 초기 실행
    updateActiveNav();


    /* -----------------------------------
       모바일 메뉴 토글
    ----------------------------------- */
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('mobile-open');

            // 아이콘 변경
            const icon = this.querySelector('i');
            if (mainNav.classList.contains('mobile-open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // 네비게이션 링크 클릭 시 메뉴 닫기
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('mobile-open');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }


    /* -----------------------------------
       스크롤 탑 버튼
    ----------------------------------- */
    const scrollTopBtn = document.querySelector('.scroll-top-btn');

    if (scrollTopBtn) {
        // 스크롤 시 버튼 표시/숨김
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        // 클릭 시 맨 위로 스크롤
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    /* -----------------------------------
       스크롤 애니메이션 (비활성화)
       - 필요 시 CSS와 함께 활성화
    ----------------------------------- */
    // const animateElements = document.querySelectorAll('.content-section');
    // animateElements.forEach(el => el.classList.add('animate'));


    /* -----------------------------------
       부드러운 스크롤 (앵커 링크)
    ----------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    /* -----------------------------------
       퀵 카드 호버 효과
    ----------------------------------- */
    const quickCards = document.querySelectorAll('.quick-card');

    quickCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Swiper 자동 재생 일시 중지
            if (quickNavSwiper.autoplay) {
                quickNavSwiper.autoplay.stop();
            }
        });

        card.addEventListener('mouseleave', function() {
            // Swiper 자동 재생 재개
            if (quickNavSwiper.autoplay) {
                quickNavSwiper.autoplay.start();
            }
        });
    });


    /* -----------------------------------
       헤더 스크롤 효과
    ----------------------------------- */
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;

        // 스크롤 방향에 따른 헤더 스타일 변경
        if (currentScrollY > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }
    });


    /* -----------------------------------
       코드 블록 복사 기능
    ----------------------------------- */
    const codeBlocks = document.querySelectorAll('.code-block');

    codeBlocks.forEach(block => {
        const header = block.querySelector('.code-header');
        if (header) {
            // 복사 버튼 추가
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn';
            copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>';
            copyBtn.title = '코드 복사';
            header.appendChild(copyBtn);

            // 복사 기능
            copyBtn.addEventListener('click', function() {
                const code = block.querySelector('code').textContent;
                navigator.clipboard.writeText(code).then(() => {
                    copyBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
                    setTimeout(() => {
                        copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>';
                    }, 2000);
                });
            });
        }
    });


    /* -----------------------------------
       키보드 네비게이션
    ----------------------------------- */
    document.addEventListener('keydown', function(e) {
        // ESC 키로 모바일 메뉴 닫기
        if (e.key === 'Escape' && mainNav && mainNav.classList.contains('mobile-open')) {
            mainNav.classList.remove('mobile-open');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }

        // Home 키로 맨 위로
        if (e.key === 'Home' && !e.ctrlKey) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // End 키로 맨 아래로
        if (e.key === 'End' && !e.ctrlKey) {
            e.preventDefault();
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        }
    });


    /* -----------------------------------
       타이핑 효과 (히어로 텍스트)
    ----------------------------------- */
    const heroTitle = document.querySelector('.hero-title');

    if (heroTitle && window.innerWidth > 768) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '3px solid var(--primary)';

        let charIndex = 0;

        function typeText() {
            if (charIndex < originalText.length) {
                heroTitle.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 80);
            } else {
                // 타이핑 완료 후 커서 깜빡임
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 500);
            }
        }

        // 페이지 로드 후 약간의 딜레이 후 타이핑 시작
        setTimeout(typeText, 500);
    }


    /* -----------------------------------
       복사 버튼 스타일 추가
    ----------------------------------- */
    const style = document.createElement('style');
    style.textContent = `
        .copy-btn {
            background: transparent;
            border: none;
            color: #888;
            cursor: pointer;
            padding: 4px 8px;
            border-radius: 4px;
            transition: all 0.2s ease;
        }

        .copy-btn:hover {
            background: rgba(255, 255, 255, 0.1);
            color: #F7DF1E;
        }

        .copy-btn .fa-check {
            color: #10b981;
        }

        /* 섹션 애니메이션 */
        .content-section.animate {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .content-section.animate.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);


    /* -----------------------------------
       콘솔 환영 메시지
    ----------------------------------- */
    console.log(
        '%cJavaScript Guide',
        'color: #F7DF1E; font-size: 24px; font-weight: bold; background: #323330; padding: 10px 20px; border-radius: 5px;'
    );
    console.log(
        '%c자바스크립트의 모든 것을 담은 종합 학습 자료입니다.',
        'color: #888; font-size: 14px;'
    );

});
