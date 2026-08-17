(function () {
  "use strict";

  // 모든 단원을 순서대로 펼친 목록 (상세 화면 이전/다음 단원 이동용)
  const FLAT_UNITS = [];
  CURRICULUM.forEach((subject, sIdx) => {
    subject.units.forEach((unit, uIdx) => {
      FLAT_UNITS.push({ subjectIdx: sIdx, unitIdx: uIdx });
    });
  });

  const state = {
    view: "toc", // "toc" | "units" | "detail"
    subjectIdx: null,
    unitIdx: null
  };

  const el = {
    totalBadge: document.getElementById("total-badge"),
    breadcrumb: document.getElementById("breadcrumb"),
    views: {
      toc: document.getElementById("view-toc"),
      units: document.getElementById("view-units"),
      detail: document.getElementById("view-detail")
    },
    tocList: document.getElementById("toc-list"),
    unitsList: document.getElementById("units-list"),
    detailSubject: document.getElementById("detail-subject"),
    detailTitle: document.getElementById("detail-title"),
    detailHourBadge: document.getElementById("detail-hour-badge"),
    sectionNav: document.getElementById("section-nav"),
    detailBody: document.getElementById("detail-body"),
    btnPrevUnit: document.getElementById("btn-prev-unit"),
    btnNextUnit: document.getElementById("btn-next-unit")
  };

  const BLOCK_TYPE_META = {
    goals: { label: "학습 목표", icon: "🎯" },
    concept: { label: "핵심 개념", icon: "💡" },
    law: { label: "법·규정 주의", icon: "⚖️" },
    checklist: { label: "체크리스트", icon: "✅" },
    case: { label: "실무 사례", icon: "📌" }
  };

  // 예전 스키마(section/example)로 남아있는 단원도 깨지지 않도록 매핑
  function normalizeBlockType(type) {
    if (type === "section") return "concept";
    if (type === "example") return "case";
    return BLOCK_TYPE_META[type] ? type : "concept";
  }

  let sectionObserver = null;

  function showView(name) {
    state.view = name;
    Object.keys(el.views).forEach((key) => {
      el.views[key].classList.toggle("active", key === name);
    });
    renderBreadcrumb();
  }

  function goToToc() {
    state.subjectIdx = null;
    state.unitIdx = null;
    showView("toc");
  }

  function goToUnits(subjectIdx) {
    state.subjectIdx = subjectIdx;
    state.unitIdx = null;
    showView("units");
    renderUnits();
  }

  function goToDetail(subjectIdx, unitIdx) {
    state.subjectIdx = subjectIdx;
    state.unitIdx = unitIdx;
    showView("detail");
    renderDetail();
  }

  function renderBreadcrumb() {
    const parts = [];
    parts.push(
      state.view === "toc"
        ? `<span class="current">목차</span>`
        : `<button type="button" data-nav="toc">목차</button>`
    );

    if (state.subjectIdx !== null) {
      const subject = CURRICULUM[state.subjectIdx];
      parts.push(`<span class="sep">›</span>`);
      parts.push(
        state.view === "units"
          ? `<span class="current">${subject.subject}</span>`
          : `<button type="button" data-nav="units">${subject.subject}</button>`
      );
    }

    if (state.view === "detail" && state.unitIdx !== null) {
      const unit = CURRICULUM[state.subjectIdx].units[state.unitIdx];
      parts.push(`<span class="sep">›</span>`);
      parts.push(`<span class="current">${unit.name}</span>`);
    }

    el.breadcrumb.innerHTML = parts.join("");
    el.breadcrumb.querySelectorAll("button[data-nav]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.dataset.nav === "toc") goToToc();
        if (btn.dataset.nav === "units") goToUnits(state.subjectIdx);
      });
    });
  }

  function renderToc() {
    el.totalBadge.textContent = `총 ${TOTAL_HOURS}시간`;

    el.tocList.innerHTML = CURRICULUM.map((subject, idx) => `
      <div class="card" data-subject="${idx}">
        <div class="card-main">
          <span class="card-no">${subject.no}</span>
          <div>
            <div class="card-title">${subject.subject}</div>
            <div class="card-sub">단원 ${subject.units.length}개</div>
          </div>
        </div>
        <span class="hour-badge">${subject.hours}시간</span>
      </div>
    `).join("");

    el.tocList.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        goToUnits(Number(card.dataset.subject));
      });
    });
  }

  function renderUnits() {
    const subject = CURRICULUM[state.subjectIdx];

    el.unitsList.innerHTML = subject.units.map((unit, idx) => `
      <div class="card" data-unit="${idx}">
        <div class="card-main">
          <span class="card-no">${idx + 1}</span>
          <div>
            <div class="card-title">${unit.name}</div>
          </div>
        </div>
        <div style="display:flex; gap:8px; align-items:center;">
          ${unit.teacher ? `<span class="teacher-badge">${unit.teacher}</span>` : ""}
          <span class="hour-badge">${unit.hours}시간</span>
        </div>
      </div>
    `).join("");

    el.unitsList.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        goToDetail(state.subjectIdx, Number(card.dataset.unit));
      });
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // 재귀 아코디언 노드 렌더링. depth 0(최상위)만 타입 배지/아이콘을 달고,
  // 하위(depth 1+)는 들여쓰기 + 얇은 트리 라인으로만 깊이를 표시한다.
  function renderNode(node, depth, topIndex) {
    const type = depth === 0 ? normalizeBlockType(node.type) : null;
    const meta = type ? BLOCK_TYPE_META[type] : null;
    const hasChildren = Array.isArray(node.children) && node.children.length > 0;
    const hasItems = Array.isArray(node.items) && node.items.length > 0;
    const isCollapsible = hasChildren || (depth > 0 && hasItems);

    const description = node.description
      ? `<p class="acc-desc">${escapeHtml(node.description)}</p>`
      : "";
    const itemsHtml = hasItems
      ? `<ul class="acc-items">${node.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
      : "";
    const childrenHtml = hasChildren
      ? node.children.map((child) => renderNode(child, depth + 1)).join("")
      : "";

    const headInner = `
      ${isCollapsible ? `<span class="acc-chevron" aria-hidden="true">▸</span>` : ""}
      ${meta ? `<span class="acc-icon" aria-hidden="true">${meta.icon}</span>` : ""}
      <span class="acc-title">${escapeHtml(node.title || "")}</span>
      ${meta ? `<span class="acc-badge">${meta.label}</span>` : ""}
    `;

    const idAttr = depth === 0 ? ` id="content-block-${topIndex}"` : "";
    const typeClass = type ? ` acc-type-${type}` : "";

    if (!isCollapsible) {
      // 펼칠 하위 내용이 없는 최상위 블록(예: 학습 목표) — 접기 없이 항상 펼쳐진 카드로 표시
      return `
        <div class="acc-node acc-depth-${depth}${typeClass} acc-static"${idAttr}>
          <div class="acc-head acc-head-static">${headInner}</div>
          <div class="acc-body">${description}${itemsHtml}</div>
        </div>
      `;
    }

    return `
      <details class="acc-node acc-depth-${depth}${typeClass}"${idAttr}>
        <summary class="acc-head">${headInner}</summary>
        <div class="acc-body">
          ${description}
          ${itemsHtml}
          ${childrenHtml}
        </div>
      </details>
    `;
  }

  function renderContentBlock(block, index) {
    return renderNode(block, 0, index);
  }

  function renderSectionNav(blocks) {
    if (sectionObserver) {
      sectionObserver.disconnect();
      sectionObserver = null;
    }

    if (!blocks || blocks.length === 0) {
      el.sectionNav.innerHTML = "";
      el.sectionNav.hidden = true;
      return;
    }

    el.sectionNav.hidden = false;
    el.sectionNav.innerHTML = blocks
      .map(
        (block, index) =>
          `<button type="button" class="section-nav-pill" data-target="content-block-${index}" title="${escapeHtml(
            block.title || ""
          )}">${escapeHtml(block.title || "")}</button>`
      )
      .join("");

    const pills = Array.from(el.sectionNav.querySelectorAll(".section-nav-pill"));
    pills.forEach((pill) => {
      pill.addEventListener("click", () => {
        const target = document.getElementById(pill.dataset.target);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const pill = el.sectionNav.querySelector(`[data-target="${entry.target.id}"]`);
          if (!pill) return;
          pills.forEach((p) => p.classList.remove("active"));
          pill.classList.add("active");
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    blocks.forEach((_, index) => {
      const target = document.getElementById(`content-block-${index}`);
      if (target) sectionObserver.observe(target);
    });

    if (pills[0]) pills[0].classList.add("active");
  }

  function renderDetail() {
    const subject = CURRICULUM[state.subjectIdx];
    const unit = subject.units[state.unitIdx];

    el.detailSubject.textContent = `${subject.subject} · ${state.unitIdx + 1}/${subject.units.length} 단원`;
    el.detailTitle.textContent = unit.name;
    el.detailHourBadge.textContent = `${unit.hours}시간`;

    if (!unit.content || unit.content.length === 0) {
      el.detailBody.innerHTML = `<div class="content-empty">아직 등록된 수업 내용이 없습니다.</div>`;
      renderSectionNav(null);
    } else {
      el.detailBody.innerHTML = `<div class="content-list">${unit.content
        .map(renderContentBlock)
        .join("")}</div>`;
      renderSectionNav(unit.content);
    }

    const flatIdx = FLAT_UNITS.findIndex(
      (f) => f.subjectIdx === state.subjectIdx && f.unitIdx === state.unitIdx
    );
    const prev = flatIdx > 0 ? FLAT_UNITS[flatIdx - 1] : null;
    const next = flatIdx < FLAT_UNITS.length - 1 ? FLAT_UNITS[flatIdx + 1] : null;

    el.btnPrevUnit.disabled = !prev;
    el.btnPrevUnit.textContent = prev
      ? `← ${CURRICULUM[prev.subjectIdx].units[prev.unitIdx].name}`
      : "← 이전 단원 없음";
    el.btnPrevUnit.onclick = prev ? () => goToDetail(prev.subjectIdx, prev.unitIdx) : null;

    el.btnNextUnit.disabled = !next;
    el.btnNextUnit.textContent = next
      ? `${CURRICULUM[next.subjectIdx].units[next.unitIdx].name} →`
      : "다음 단원 없음 →";
    el.btnNextUnit.onclick = next ? () => goToDetail(next.subjectIdx, next.unitIdx) : null;
  }

  renderToc();
  goToToc();
})();
