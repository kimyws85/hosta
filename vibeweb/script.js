/* ===== 웹 바이브 — script.js ===== */

/* ===== 스크롤 시 네비 스타일 변경 ===== */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

/* ===== 스크롤 시 카드 페이드인 애니메이션 ===== */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// 애니메이션 적용할 요소들
const animateTargets = document.querySelectorAll(
  '.timeline-card, .warning-card, .claude-card, .prompt-step, .career-card'
);

animateTargets.forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

/* ===== FAQ 토글 ===== */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    // 모두 닫기
    document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
    // 클릭한 것만 열기 (이미 열려있으면 닫기)
    if (!isOpen) item.classList.add('open');
  });
});

/* ===== 네비 링크 클릭 시 부드러운 스크롤 ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ===== 웹 기술 스택 탭 전환 ===== */
document.querySelectorAll('.stack-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    document.querySelectorAll('.stack-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.stack-panel').forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    const panel = document.getElementById('tab-' + target);
    if (panel) panel.classList.add('active');
  });
});
