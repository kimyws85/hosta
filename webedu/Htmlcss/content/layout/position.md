# <i class="fas fa-map-pin"></i> CSS Position

:::info
<i class="fas fa-info-circle"></i> **Position이란?**

요소를 문서 흐름에서 어떻게 배치할지 결정하는 CSS 속성입니다.
일반적인 흐름을 벗어나 특정 위치에 요소를 고정하거나 이동시킬 수 있습니다.
:::

---

## <i class="fas fa-list"></i> Position 속성 종류

```css
.element {
  position: static;                            /* 기본값 */
  position: relative;                          /* 상대 위치 */
  position: absolute;                          /* 절대 위치 */
  position: fixed;                             /* 고정 위치 */
  position: sticky;                            /* 스크롤 고정 */
}
```

---

## <i class="fas fa-circle-dot"></i> `static` (기본값)

일반적인 문서 흐름

```css
.element {
  position: static;                            /* 기본 */
  /* top, left, right, bottom 적용 안됨 */
}
```

- 모든 요소의 기본값
- 위치 이동 불가능
- `top`, `left`, `right`, `bottom` 무시됨

---

## <i class="fas fa-arrows-alt"></i> `relative` (상대 위치)

원래 위치 기준으로 이동

```css
.element {
  position: relative;
  top: 20px;                                   /* 아래로 20px */
  left: 30px;                                  /* 오른쪽으로 30px */
}
```

**특징:**
- 원래 자리는 그대로 유지 (다른 요소에 영향 없음)
- `top`, `left`, `right`, `bottom`으로 이동
- **자식의 absolute 위치 기준**이 됨

:::tip
<i class="fas fa-lightbulb"></i> **relative의 주요 용도**

실제로 요소를 이동시키기보다는, **자식 요소의 absolute 기준점**으로 주로 사용됩니다!
:::

---

## <i class="fas fa-crosshairs"></i> `absolute` (절대 위치)

가장 가까운 `position` 부모 기준

```css
.parent {
  position: relative;                          /* 기준점 */
}

.child {
  position: absolute;
  top: 0;
  right: 0;
}
```

**특징:**
- 문서 흐름에서 제거됨 (다른 요소가 빈 공간 채움)
- 가장 가까운 `position: relative/absolute/fixed` 부모 기준
- 부모가 없으면 `<body>` 기준

### <i class="fas fa-code"></i> 실전 예제

```html
<div class="card">
  <img src="image.jpg" alt="Image">
  <span class="badge">NEW</span>
</div>
```

```css
.card {
  position: relative;                          /* 기준점 */
  width: 300px;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
}
```

---

## <i class="fas fa-thumbtack"></i> `fixed` (고정 위치)

뷰포트(화면) 기준으로 고정

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 100;
}
```

**특징:**
- 스크롤해도 항상 같은 위치
- 뷰포트(브라우저 창) 기준
- 문서 흐름에서 제거됨

### <i class="fas fa-code"></i> 활용 예

```css
/* 상단 고정 헤더 */
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

/* 우하단 플로팅 버튼 */
.floating-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #0071e3;
  z-index: 999;
}
```

---

## <i class="fas fa-sticky-note"></i> `sticky` (스크롤 고정)

스크롤 시 특정 위치에 고정

```css
.nav {
  position: sticky;
  top: 0;                                      /* 상단에 닿으면 고정 */
  background: white;
  z-index: 10;
}
```

**특징:**
- 스크롤하다가 지정 위치에 도달하면 고정
- `top`, `bottom` 값 필수
- 문서 흐름 유지 (공간 차지)

---

## <i class="fas fa-layer-group"></i> z-index (쌓임 순서)

```css
.element {
  position: relative;                          /* position 필수 */
  z-index: 10;                                 /* 높을수록 위 */
}
```

**규칙:**
- 숫자가 클수록 위에 표시
- `position: static`에는 적용 안됨
- 음수도 가능: `z-index: -1;`

:::warning
<i class="fas fa-exclamation-triangle"></i> **z-index 주의사항**

- `position`이 `static`이 아니어야 작동
- 부모-자식 관계에서는 부모의 z-index가 우선
- 1000, 9999 같은 큰 값보다는 10, 20 단위로 관리
:::

---

## <i class="fas fa-rocket"></i> 실전 예제

### <i class="fas fa-window-maximize"></i> 1. 모달 창

```html
<div class="modal-overlay">
  <div class="modal">
    <h2>모달 제목</h2>
    <p>내용...</p>
    <button>닫기</button>
  </div>
</div>
```

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  position: relative;
  background: white;
  padding: 40px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  z-index: 1001;
}
```

---

### <i class="fas fa-bars"></i> 2. 고정 네비게이션

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

/* 헤더 높이만큼 body에 padding */
body {
  padding-top: 60px;
}
```

---

### <i class="fas fa-image"></i> 3. 카드 배지

```css
.card {
  position: relative;
  width: 300px;
  border-radius: 12px;
  overflow: hidden;
}

.card img {
  width: 100%;
  display: block;
}

.badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #ff3b30;
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}
```

---

### <i class="fas fa-arrow-up"></i> 4. 맨 위로 버튼

```css
.scroll-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: #0071e3;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 999;
  transition: all 0.3s;
}

.scroll-top:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}
```

---

## <i class="fas fa-brain"></i> 핵심 정리

| Position | 기준 | 문서 흐름 | 주요 용도 |
|----------|------|----------|----------|
| `static` | - | 유지 | 기본값 |
| `relative` | 원래 위치 | 유지 | absolute 기준점 |
| `absolute` | 부모 | 제거 | 배지, 오버레이 |
| `fixed` | 뷰포트 | 제거 | 고정 헤더, 버튼 |
| `sticky` | 뷰포트 | 유지 | 스크롤 네비게이션 |

### 자주 쓰는 패턴:
1. **부모-자식 배치**: 부모 `relative`, 자식 `absolute`
2. **고정 헤더**: `position: fixed; top: 0;`
3. **모달**: `position: fixed;` + `z-index`
4. **스크롤 네비**: `position: sticky;`

---

## <i class="fas fa-arrow-right"></i> 다음 단계

- **[반응형](responsive)** - 미디어 쿼리
- **[Flexbox](../css/flexbox)** - 정렬과 배치
- **[Transform](../advanced/transform)** - 변형 효과
