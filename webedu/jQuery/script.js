// 📁 parts 폴더의 모든 md 파일 목록 (확장 시 여기에 추가)
const mdFiles = [
    { file: '01-basic.md', title: 'Part 1. jQuery 기초' },
    { file: '02-selector.md', title: 'Part 2. 선택자' },
    { file: '03-manipulation.md', title: 'Part 3. DOM 조작' },
    { file: '04-traversal.md', title: 'Part 4. DOM 탐색' },
    { file: '05-event.md', title: 'Part 5. 이벤트 처리' },
    { file: '06-animation.md', title: 'Part 6. 애니메이션 & 효과' },
    { file: '07-dom-create.md', title: 'Part 7. DOM 생성 및 삭제' },
    { file: '08-patterns.md', title: 'Part 8. 실전 프로젝트 패턴' },
    { file: '09-ajax.md', title: 'Part 9. Ajax 통신' },
    { file: '10-performance.md', title: 'Part 10. 성능 최적화' },
];

// 네비게이션 생성
function createNavigation() {
    const navList = document.getElementById('nav-list');
    mdFiles.forEach((item, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#part' + (index + 1);
        a.textContent = item.title;
        a.dataset.file = item.file;
        li.appendChild(a);
        navList.appendChild(li);
    });
}

// 모든 md 파일 로드 및 렌더링
async function loadAllContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<p>콘텐츠를 불러오는 중...</p>';

    let allContent = '';

    for (let i = 0; i < mdFiles.length; i++) {
        const item = mdFiles[i];
        try {
            const response = await fetch('parts/' + item.file);
            const markdown = await response.text();
            const html = marked.parse(markdown);
            allContent += `
                <section id="part${i + 1}" class="part-section">
                    ${html}
                </section>
            `;
        } catch (error) {
            console.error(`${item.file} 로드 실패:`, error);
            allContent += `
                <section id="part${i + 1}" class="part-section">
                    <h1>${item.title}</h1>
                    <p style="color: red;">⚠️ 파일을 불러올 수 없습니다.</p>
                </section>
            `;
        }
    }

    contentDiv.innerHTML = allContent;

    // 구문 강조 적용
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });

    // 복사 버튼 추가
    addCopyButtons();
}

// 복사 버튼 추가
function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre');

    codeBlocks.forEach((pre) => {
        // 이미 버튼이 있으면 건너뛰기
        if (pre.querySelector('.copy-btn')) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper';

        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.innerHTML = '<i class="far fa-copy"></i>';
        copyBtn.title = '코드 복사';

        // pre를 wrapper로 감싸기
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);
        wrapper.appendChild(copyBtn);

        // 복사 버튼 클릭 이벤트
        copyBtn.addEventListener('click', async () => {
            const code = pre.querySelector('code').textContent;

            try {
                await navigator.clipboard.writeText(code);

                // 성공 피드백
                copyBtn.innerHTML = '<i class="fas fa-check"></i>';
                copyBtn.classList.add('copied');

                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="far fa-copy"></i>';
                    copyBtn.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('복사 실패:', err);
                copyBtn.innerHTML = '<i class="fas fa-times"></i>';

                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="far fa-copy"></i>';
                }, 2000);
            }
        });
    });
}

// 스크롤 탑 버튼
function initScrollTop() {
    const scrollBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    });
}

// 네비게이션 활성화 및 스무스 스크롤
function initNavActive() {
    const navLinks = document.querySelectorAll('.sidebar a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // 활성화 상태 변경
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // 모바일 메뉴 닫기
            closeMobileMenu();

            // 바로이동 스크롤 (헤더 높이 140px 오프셋)
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 140;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'instant'
                });
            }
        });
    });
}

// 모바일 메뉴 토글
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('mobile-overlay');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
    }
}

// 모바일 메뉴 닫기
function closeMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('mobile-overlay');

    if (menuBtn) menuBtn.classList.remove('active');
    if (sidebar) sidebar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    createNavigation();
    loadAllContent();
    initScrollTop();
    initNavActive();
    initMobileMenu();
});
