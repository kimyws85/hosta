// ==================== DOM 로드 완료 후 실행 ==================== //
document.addEventListener('DOMContentLoaded', function() {

    // ==================== 네비게이션 토글 ==================== //
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // 메뉴 링크 클릭 시 메뉴 닫기
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // ==================== Fullpage.js 초기화 (index.html에서만) ==================== //
    if (document.getElementById('fullpage')) {
        new fullpage('#fullpage', {
            // 네비게이션
            menu: '.nav-menu',
            anchors: ['home', 'about', 'technologies', 'services', 'contact'],
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['Home', 'About', 'Technologies', 'Services', 'Contact'],
            showActiveTooltip: true,

            // 스크롤
            scrollingSpeed: 700,
            autoScrolling: true,
            scrollBar: false,
            easing: 'easeInOutCubic',

            // 디자인
            sectionsColor: [],
            verticalCentered: true,

            // 반응형
            responsiveWidth: 768,

            // 콜백
            afterLoad: function(origin, destination, direction) {
                // 섹션 로드 후 애니메이션
                const section = destination.item;
                section.classList.add('active');
            },

            onLeave: function(origin, destination, direction) {
                // 섹션 떠날 때
            }
        });
    }

    // ==================== Swiper 초기화 ==================== //
    if (document.querySelector('.tech-swiper')) {
        const techSwiper = new Swiper('.tech-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    }

    // ==================== Contact Form ==================== //
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // 간단한 알림
            alert('메시지가 전송되었습니다! (데모)');
            contactForm.reset();
        });
    }

    // ==================== 포트폴리오 필터 (portfolio.html) ==================== //
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 활성 버튼 변경
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                // 아이템 필터링
                portfolioItems.forEach(item => {
                    if (filterValue === 'all') {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        const category = item.getAttribute('data-category');
                        if (category === filterValue) {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'scale(1)';
                            }, 10);
                        } else {
                            item.style.opacity = '0';
                            item.style.transform = 'scale(0.8)';
                            setTimeout(() => {
                                item.style.display = 'none';
                            }, 300);
                        }
                    }
                });
            });
        });

        // 초기 스타일 설정
        portfolioItems.forEach(item => {
            item.style.transition = 'all 0.3s ease';
        });
    }

    // ==================== JavaScript 데모 (javascript.html) ==================== //
    const changeColorBtn = document.getElementById('changeColorBtn');
    const addItemBtn = document.getElementById('addItemBtn');
    const animateBtn = document.getElementById('animateBtn');
    const demoBox = document.getElementById('demoBox');
    const demoList = document.getElementById('demoList');

    // 색상 변경
    if (changeColorBtn) {
        changeColorBtn.addEventListener('click', function() {
            const colors = ['#667eea', '#f093fb', '#4facfe', '#43e97b', '#fa709a'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            demoBox.style.backgroundColor = randomColor;
            demoBox.style.color = 'white';
            demoBox.textContent = '색상이 변경되었습니다!';
        });
    }

    // 아이템 추가
    if (addItemBtn) {
        let itemCount = 0;
        addItemBtn.addEventListener('click', function() {
            itemCount++;
            const li = document.createElement('li');
            li.textContent = `아이템 ${itemCount}`;
            demoList.appendChild(li);
        });
    }

    // 애니메이션
    if (animateBtn) {
        animateBtn.addEventListener('click', function() {
            demoBox.style.animation = 'none';
            setTimeout(() => {
                demoBox.style.animation = 'bounce 0.5s ease';
            }, 10);

            setTimeout(() => {
                demoBox.style.animation = '';
            }, 500);
        });

        // Bounce 애니메이션 CSS 추가
        if (!document.getElementById('bounce-style')) {
            const style = document.createElement('style');
            style.id = 'bounce-style';
            style.textContent = `
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-30px); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // ==================== 스크롤 애니메이션 (서브페이지) ==================== //
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 애니메이션 대상 요소들
    document.querySelectorAll('.content-block, .feature-item, .service-card, .portfolio-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // ==================== 부드러운 스크롤 ==================== //
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==================== 네비게이션 스크롤 효과 ==================== //
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // ==================== 페이지 로드 애니메이션 ==================== //
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    // ==================== 통계 카운터 애니메이션 ==================== //
    const statItems = document.querySelectorAll('.stat-item h4');
    let counted = false;

    function countUp(element) {
        const target = element.textContent.replace(/[^0-9]/g, '');
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = element.textContent.replace(/[0-9]/g, '') + target;
                clearInterval(timer);
            } else {
                element.textContent = element.textContent.replace(/[0-9]/g, '') + Math.floor(current);
            }
        }, 16);
    }

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !counted) {
                statItems.forEach(countUp);
                counted = true;
            }
        });
    }, { threshold: 0.5 });

    const aboutSection = document.querySelector('.section-about');
    if (aboutSection) {
        statsObserver.observe(aboutSection);
    }

    // ==================== 웹 디자인 페이지 - 색상 팔레트 생성기 ==================== //
    const baseColorInput = document.getElementById('baseColor');
    const generatePaletteBtn = document.getElementById('generatePalette');
    const generatedPaletteDiv = document.getElementById('generatedPalette');

    if (generatePaletteBtn) {
        // 초기 팔레트 생성
        generateColorPalette('#667eea');

        generatePaletteBtn.addEventListener('click', function() {
            const baseColor = baseColorInput.value;
            generateColorPalette(baseColor);
        });

        baseColorInput.addEventListener('change', function() {
            generateColorPalette(this.value);
        });
    }

    function generateColorPalette(baseColor) {
        // HEX를 RGB로 변환
        const hexToRgb = (hex) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        };

        // RGB를 HEX로 변환
        const rgbToHex = (r, g, b) => {
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        };

        // RGB를 HSL로 변환
        const rgbToHsl = (r, g, b) => {
            r /= 255;
            g /= 255;
            b /= 255;
            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            let h, s, l = (max + min) / 2;

            if (max === min) {
                h = s = 0;
            } else {
                const d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
                    case g: h = ((b - r) / d + 2) / 6; break;
                    case b: h = ((r - g) / d + 4) / 6; break;
                }
            }
            return { h: h * 360, s: s * 100, l: l * 100 };
        };

        // HSL을 RGB로 변환
        const hslToRgb = (h, s, l) => {
            h /= 360;
            s /= 100;
            l /= 100;
            let r, g, b;

            if (s === 0) {
                r = g = b = l;
            } else {
                const hue2rgb = (p, q, t) => {
                    if (t < 0) t += 1;
                    if (t > 1) t -= 1;
                    if (t < 1/6) return p + (q - p) * 6 * t;
                    if (t < 1/2) return q;
                    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                    return p;
                };
                const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                const p = 2 * l - q;
                r = hue2rgb(p, q, h + 1/3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1/3);
            }
            return {
                r: Math.round(r * 255),
                g: Math.round(g * 255),
                b: Math.round(b * 255)
            };
        };

        const rgb = hexToRgb(baseColor);
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

        // 5가지 색상 생성 (더 어두운 색 2개, 기본색, 더 밝은 색 2개)
        const colors = [];

        // Darker shades
        for (let i = 2; i >= 1; i--) {
            const newL = Math.max(hsl.l - (i * 15), 10);
            const newRgb = hslToRgb(hsl.h, hsl.s, newL);
            colors.push(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
        }

        // Base color
        colors.push(baseColor);

        // Lighter shades
        for (let i = 1; i <= 2; i++) {
            const newL = Math.min(hsl.l + (i * 15), 90);
            const newRgb = hslToRgb(hsl.h, hsl.s, newL);
            colors.push(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
        }

        // 팔레트 HTML 생성
        generatedPaletteDiv.innerHTML = colors.map((color, index) => {
            const labels = ['Dark 2', 'Dark 1', 'Base', 'Light 1', 'Light 2'];
            return `
                <div class="generated-color" style="background-color: ${color};">
                    <div>${labels[index]}</div>
                    <span>${color}</span>
                </div>
            `;
        }).join('');
    }

    // ==================== 로드 완료 로그 ==================== //
    console.log('%cSBS Web', 'color: #667eea; font-size: 24px; font-weight: bold;');
    console.log('%c페이지가 로드되었습니다!', 'color: #4facfe; font-size: 14px;');

});

// ==================== 리사이즈 핸들러 ==================== //
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // 리사이즈 후 처리
        console.log('Window resized');
    }, 250);
});
