$(document).ready(function() {

    // 코딩 데모 데이터
    const demoSteps = {
        1: {
            title: 'Step 1: HTML 구조 작성',
            description: '웹 페이지의 기본 구조를 HTML로 작성합니다. HTML은 콘텐츠의 구조와 의미를 정의합니다.',
            code: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>나의 첫 웹페이지</title>
</head>
<body>
    <header>
        <h1>안녕하세요!</h1>
        <nav>
            <a href="#home">홈</a>
            <a href="#about">소개</a>
            <a href="#contact">연락처</a>
        </nav>
    </header>

    <main>
        <section id="home">
            <h2>환영합니다</h2>
            <p>이것은 나의 첫 웹페이지입니다.</p>
        </section>

        <section id="about">
            <h2>소개</h2>
            <p>저는 웹 개발을 배우고 있습니다.</p>
        </section>

        <section id="contact">
            <h2>연락처</h2>
            <p>이메일: hello@example.com</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 나의 웹사이트</p>
    </footer>
</body>
</html>`,
            lang: 'html'
        },
        2: {
            title: 'Step 2: CSS 스타일 적용',
            description: 'CSS로 웹 페이지를 아름답게 꾸밉니다. 색상, 레이아웃, 글꼴 등을 지정합니다.',
            code: `/* 기본 스타일 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* 헤더 스타일 */
header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem;
    text-align: center;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

nav {
    margin-top: 1rem;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background 0.3s;
}

nav a:hover {
    background: rgba(255,255,255,0.2);
}

/* 메인 콘텐츠 */
main {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 2rem;
}

section {
    margin-bottom: 3rem;
    padding: 2rem;
    background: #f8f9fa;
    border-radius: 10px;
}

section h2 {
    color: #667eea;
    margin-bottom: 1rem;
}

/* 푸터 */
footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 1.5rem;
    margin-top: 3rem;
}`,
            lang: 'css'
        },
        3: {
            title: 'Step 3: JavaScript 인터랙션 추가',
            description: 'JavaScript로 웹 페이지에 동적인 기능을 추가합니다. 사용자와 상호작용할 수 있게 만듭니다.',
            code: `// 페이지 로드 완료 시 실행
document.addEventListener('DOMContentLoaded', function() {

    // 헤더 애니메이션
    const header = document.querySelector('header');
    header.style.opacity = '0';

    setTimeout(function() {
        header.style.transition = 'opacity 1s';
        header.style.opacity = '1';
    }, 100);

    // 네비게이션 클릭 이벤트
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

                // 섹션 강조 효과
                targetSection.style.transform = 'scale(1.02)';
                setTimeout(function() {
                    targetSection.style.transition = 'transform 0.3s';
                    targetSection.style.transform = 'scale(1)';
                }, 300);
            }
        });
    });

    // 환영 메시지
    setTimeout(function() {
        alert('웹 개발의 세계에 오신 것을 환영합니다!');
    }, 2000);

    console.log('페이지가 성공적으로 로드되었습니다!');
});`,
            lang: 'js'
        },
        4: {
            title: 'Step 4: 완성된 웹페이지',
            description: 'HTML, CSS, JavaScript가 모두 결합된 완성된 웹 페이지입니다. 클릭하고 상호작용해보세요!',
            code: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>나의 첫 웹페이지</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                 color: white; padding: 2rem; text-align: center; }
        header h1 { font-size: 2.5rem; margin-bottom: 1rem; }
        nav { margin-top: 1rem; }
        nav a { color: white; text-decoration: none; margin: 0 1rem;
                padding: 0.5rem 1rem; border-radius: 5px; transition: background 0.3s; }
        nav a:hover { background: rgba(255,255,255,0.2); }
        main { max-width: 800px; margin: 2rem auto; padding: 0 2rem; }
        section { margin-bottom: 3rem; padding: 2rem; background: #f8f9fa;
                  border-radius: 10px; transition: transform 0.3s; }
        section h2 { color: #667eea; margin-bottom: 1rem; }
        footer { background: #333; color: white; text-align: center;
                 padding: 1.5rem; margin-top: 3rem; }
    </style>
</head>
<body>
    <header>
        <h1>안녕하세요!</h1>
        <nav>
            <a href="#home">홈</a>
            <a href="#about">소개</a>
            <a href="#contact">연락처</a>
        </nav>
    </header>
    <main>
        <section id="home">
            <h2>환영합니다</h2>
            <p>이것은 나의 첫 웹페이지입니다.</p>
        </section>
        <section id="about">
            <h2>소개</h2>
            <p>저는 웹 개발을 배우고 있습니다.</p>
        </section>
        <section id="contact">
            <h2>연락처</h2>
            <p>이메일: hello@example.com</p>
        </section>
    </main>
    <footer><p>&copy; 2026 나의 웹사이트</p></footer>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const header = document.querySelector('header');
            header.style.opacity = '0';
            setTimeout(function() {
                header.style.transition = 'opacity 1s';
                header.style.opacity = '1';
            }, 100);
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(function(link) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                        targetSection.style.transform = 'scale(1.02)';
                        setTimeout(function() {
                            targetSection.style.transition = 'transform 0.3s';
                            targetSection.style.transform = 'scale(1)';
                        }, 300);
                    }
                });
            });
        });
    </script>
</body>
</html>`,
            lang: 'html'
        }
    };

    // 상태 변수
    let currentStep = 1;
    let isPlaying = false;
    let typingInterval = null;
    let currentCharIndex = 0;
    let typingSpeed = 50; // 기본 속도 (ms per character)

    // DOM 요소
    const $codeDisplay = $('#codeDisplay');
    const $lineCount = $('#lineCount');
    const $previewFrame = $('#previewFrame')[0];
    const $stepTitle = $('#stepTitle');
    const $stepDesc = $('#stepDesc');
    const $playBtn = $('#playBtn');
    const $pauseBtn = $('#pauseBtn');
    const $resetBtn = $('#resetBtn');
    const $speedSelect = $('#speedSelect');

    // 초기화
    init();

    function init() {
        loadStep(currentStep);
        updateStepDescription(currentStep);
    }

    // 단계 로드
    function loadStep(step) {
        const stepData = demoSteps[step];
        if (!stepData) return;

        currentStep = step;
        currentCharIndex = 0;
        $codeDisplay.text('');
        $('#lineCount').text('1');

        // 탭 활성화
        $('.editor-tab').removeClass('active');
        $(`.editor-tab[data-lang="${stepData.lang}"]`).addClass('active');

        // 단계 버튼 활성화
        $('.step-btn').removeClass('active');
        $(`.step-btn[data-step="${step}"]`).addClass('active');

        updateStepDescription(step);
    }

    // 단계 설명 업데이트
    function updateStepDescription(step) {
        const stepData = demoSteps[step];
        if (!stepData) return;

        $stepTitle.text(stepData.title);
        $stepDesc.text(stepData.description);
    }

    // 타이핑 시작
    function startTyping() {
        if (isPlaying) return;

        isPlaying = true;
        $playBtn.hide();
        $pauseBtn.show();

        const stepData = demoSteps[currentStep];
        const code = stepData.code;

        typingInterval = setInterval(function() {
            if (currentCharIndex < code.length) {
                const char = code[currentCharIndex];
                $codeDisplay.text($codeDisplay.text() + char);
                currentCharIndex++;

                // 줄 수 업데이트
                const lines = $codeDisplay.text().split('\n').length;
                $('#lineCount').text(lines);

                // 라이브 프리뷰 업데이트 (단계 4만)
                if (currentStep === 4) {
                    updatePreview();
                } else {
                    updatePreviewByStep();
                }

                // 스크롤 자동 조정
                const codeContent = $('.code-content')[0];
                if (codeContent) {
                    codeContent.scrollTop = codeContent.scrollHeight;
                }

            } else {
                // 타이핑 완료
                pauseTyping();
            }
        }, typingSpeed);
    }

    // 타이핑 일시정지
    function pauseTyping() {
        isPlaying = false;
        $playBtn.show();
        $pauseBtn.hide();
        if (typingInterval) {
            clearInterval(typingInterval);
            typingInterval = null;
        }
    }

    // 타이핑 리셋
    function resetTyping() {
        pauseTyping();
        loadStep(currentStep);
        // 프리뷰 초기화
        if ($previewFrame) {
            $previewFrame.srcdoc = '';
        }
    }

    // 프리뷰 업데이트 (단계별)
    function updatePreviewByStep() {
        if (!$previewFrame) return;

        let htmlContent = '';

        if (currentStep === 1) {
            // HTML만
            htmlContent = $codeDisplay.text();
        } else if (currentStep === 2) {
            // HTML + CSS
            htmlContent = demoSteps[1].code.replace('</head>',
                `<style>${$codeDisplay.text()}</style></head>`);
        } else if (currentStep === 3) {
            // HTML + CSS + JS
            const fullCSS = demoSteps[2].code;
            htmlContent = demoSteps[1].code.replace('</head>',
                `<style>${fullCSS}</style></head>`).replace('</body>',
                `<script>${$codeDisplay.text()}<\/script></body>`);
        }

        $previewFrame.srcdoc = htmlContent;
    }

    // 프리뷰 업데이트 (완성 버전)
    function updatePreview() {
        if (!$previewFrame) return;
        const content = $codeDisplay.text();
        $previewFrame.srcdoc = content;
    }

    // 속도 변경
    function updateSpeed(speed) {
        typingSpeed = 50 / parseFloat(speed);
        if (isPlaying) {
            pauseTyping();
            startTyping();
        }
    }

    // 이벤트 리스너
    $playBtn.click(function() {
        startTyping();
    });

    $pauseBtn.click(function() {
        pauseTyping();
    });

    $resetBtn.click(function() {
        resetTyping();
    });

    $speedSelect.change(function() {
        const speed = $(this).val();
        updateSpeed(speed);
    });

    // 단계 버튼 클릭
    $('.step-btn').click(function() {
        const step = parseInt($(this).data('step'));
        pauseTyping();
        loadStep(step);
    });

    // 에디터 탭 클릭 (현재 단계에 따라 자동 전환)
    $('.editor-tab').click(function() {
        const lang = $(this).data('lang');

        // 언어에 따라 적절한 단계로 이동
        if (lang === 'html') {
            loadStep(1);
        } else if (lang === 'css') {
            loadStep(2);
        } else if (lang === 'js') {
            loadStep(3);
        }

        pauseTyping();
    });

    // CTA 버튼 이벤트
    $('#startBtnCTA').click(function() {
        $('#loginModal').addClass('show');
        $('body').css('overflow', 'hidden');
    });

    // 페이지 로드 시 자동 재생 (선택사항)
    setTimeout(function() {
        // 자동으로 시작하려면 아래 주석 해제
        // startTyping();
    }, 1000);

    console.log('코딩 데모가 로드되었습니다!');

});
