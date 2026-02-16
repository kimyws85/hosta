// ============================================
// HTML/CSS 학습 가이드 - 마크다운 로더
// ============================================

class ContentLoader {
  constructor() {
    this.currentContent = null;
    this.init();
  }

  // 초기화
  init() {
    // marked.js 설정
    if (typeof marked !== 'undefined') {
      marked.use({
        breaks: true,
        gfm: true
      });
    }

    // URL 해시 변경 감지
    window.addEventListener('hashchange', () => this.loadFromHash());

    // 네비게이션 링크 클릭 이벤트
    document.querySelectorAll('.sidebar a[data-content]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const contentPath = link.dataset.content;
        this.loadContent(contentPath);

        // URL 해시 업데이트
        const hash = contentPath.replace('content/', '').replace('.md', '');
        window.location.hash = hash;
      });
    });

    // 초기 콘텐츠 로드
    this.loadFromHash();
  }

  // URL 해시에서 콘텐츠 로드
  loadFromHash() {
    const hash = window.location.hash.slice(1); // # 제거

    if (hash) {
      const contentPath = `content/${hash}.md`;
      this.loadContent(contentPath);
    } else {
      // 기본 콘텐츠 로드
      this.loadContent('content/html/basic.md');
    }
  }

  // 마크다운 파일 로드
  async loadContent(path) {
    try {
      const response = await fetch(path);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const markdown = await response.text();
      this.renderMarkdown(markdown);

      // 페이지 상단으로 스크롤
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error) {
      console.error('콘텐츠 로드 실패:', error);
      this.showError(path, error);
    }
  }

  // 마크다운 렌더링
  renderMarkdown(markdown) {
    if (typeof marked === 'undefined') {
      console.error('Marked.js가 로드되지 않았습니다!');
      return;
    }

    // 커스텀 문법 처리 (:::info, :::tip, :::warning)
    markdown = this.processCustomBlocks(markdown);

    // 마크다운 → HTML 변환
    let html = marked.parse(markdown);

    // 메인 콘텐츠에 삽입
    const main = document.querySelector('main');
    main.innerHTML = `<div class="content-section">${html}</div>`;

    // Prism.js로 코드 하이라이팅
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll();
    }

    // 페이지 내부 링크 처리
    this.setupInternalLinks();
  }

  // 커스텀 블록 처리 (:::info, :::tip, :::warning)
  processCustomBlocks(markdown) {
    // :::info ... ::: → <div class="info">...</div>
    // 줄 전체가 ::: 인 경우만 닫는 태그로 인식
    markdown = markdown.replace(
      /^:::info$[\r\n]+([\s\S]*?)^:::$/gm,
      '<div class="info">$1</div>'
    );

    // :::tip ... ::: → <div class="tip">...</div>
    markdown = markdown.replace(
      /^:::tip$[\r\n]+([\s\S]*?)^:::$/gm,
      '<div class="tip">$1</div>'
    );

    // :::warning ... ::: → <div class="warning">...</div>
    markdown = markdown.replace(
      /^:::warning$[\r\n]+([\s\S]*?)^:::$/gm,
      '<div class="warning">$1</div>'
    );

    return markdown;
  }

  // 페이지 내부 링크 클릭 처리
  setupInternalLinks() {
    document.querySelectorAll('main a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);

        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // 에러 표시
  showError(path, error) {
    const main = document.querySelector('main');
    main.innerHTML = `
      <div class="content-section">
        <h1><i class="fas fa-exclamation-triangle"></i> 콘텐츠 로드 실패</h1>
        <div class="warning">
          <p><strong>파일을 찾을 수 없습니다:</strong> ${path}</p>
          <p><strong>오류:</strong> ${error.message}</p>
          <p>사이드바에서 다른 메뉴를 선택해보세요.</p>
        </div>
      </div>
    `;
  }
}

// DOM이 로드되면 실행
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.contentLoader = new ContentLoader();
  });
} else {
  window.contentLoader = new ContentLoader();
}
