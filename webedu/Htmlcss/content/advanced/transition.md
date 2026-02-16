# <i class="fas fa-exchange-alt"></i> CSS Transition

:::info
<i class="fas fa-info-circle"></i> **Transition이란?**

CSS 속성 변화를 부드럽게 만드는 효과입니다.
:hover, :focus 등 상태 변화 시 자연스러운 애니메이션을 적용할 수 있습니다.
:::

---

## <i class="fas fa-cog"></i> transition 속성

```css
.element {
  transition-property: all;                    /* 변화할 속성 */
  transition-duration: 0.3s;                   /* 지속 시간 */
  transition-timing-function: ease;            /* 속도 곡선 */
  transition-delay: 0s;                        /* 지연 시간 */

  /* 단축 */
  transition: all 0.3s ease 0s;
}
```

---

## <i class="fas fa-list"></i> transition-property

```css
.element {
  transition-property: all;                    /* 모든 속성 */
  transition-property: background;             /* 특정 속성 */
  transition-property: transform, opacity;     /* 여러 속성 */
}
```

---

## <i class="fas fa-clock"></i> timing-function

```css
.element {
  transition-timing-function: linear;          /* 일정 속도 */
  transition-timing-function: ease;            /* 기본 (천천-빠름-천천) */
  transition-timing-function: ease-in;         /* 천천히 시작 */
  transition-timing-function: ease-out;        /* 천천히 끝 */
  transition-timing-function: ease-in-out;     /* 양쪽 천천히 */
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## <i class="fas fa-rocket"></i> 실전 예제

### <i class="fas fa-square"></i> 버튼 호버

```css
.button {
  background: #0071e3;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background: #005bb5;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
```

---

### <i class="fas fa-link"></i> 링크 밑줄

```css
a {
  color: #0071e3;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s ease;
}

a:hover {
  border-bottom-color: #0071e3;
}
```

---

### <i class="fas fa-image"></i> 이미지 확대

```css
.image-container {
  overflow: hidden;
  border-radius: 12px;
}

.image-container img {
  display: block;
  width: 100%;
  transition: transform 0.5s ease;
}

.image-container:hover img {
  transform: scale(1.1);
}
```

---

### <i class="fas fa-window-maximize"></i> 카드 효과

```css
.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}
```

---

### <i class="fas fa-bars"></i> 햄버거 메뉴

```css
.hamburger {
  width: 30px;
  height: 3px;
  background: #333;
  transition: all 0.3s ease;
}

.hamburger.active {
  transform: rotate(45deg);
  background: red;
}
```

---

### <i class="fas fa-fill"></i> 배경 색상 전환

```css
.box {
  background: linear-gradient(to right, #667eea 0%, #764ba2 100%);
  background-size: 200% 100%;
  background-position: left;
  transition: background-position 0.5s ease;
}

.box:hover {
  background-position: right;
}
```

---

## <i class="fas fa-lightbulb"></i> 성능 최적화

### ✅ 빠른 속성 (권장)

```css
.fast {
  transition: transform 0.3s, opacity 0.3s;
}
```

- `transform` (이동, 회전, 크기)
- `opacity` (투명도)
- **GPU 가속** 사용

### ❌ 느린 속성 (피하기)

```css
.slow {
  transition: width 0.3s, height 0.3s, margin 0.3s;
}
```

- `width`, `height`
- `margin`, `padding`
- `top`, `left`
- **리플로우 발생** (느림)

---

## <i class="fas fa-pause"></i> transition vs animation

| 특징 | Transition | Animation |
|------|-----------|-----------|
| 사용 시기 | 상태 변화 (hover 등) | 자동 재생 |
| 제어 | 시작 → 끝 | 세밀한 제어 (keyframes) |
| 반복 | 1회 | 무한 가능 |
| 예시 | 버튼 호버 | 로딩 스피너 |

---

## <i class="fas fa-brain"></i> 핵심 정리

### 기본 구문:
```css
transition: property duration timing-function delay;
```

### 권장 설정:
- 지속 시간: `0.2s ~ 0.5s` (빠른 상호작용)
- timing-function: `ease-out` (자연스러움)
- 속성: `transform`, `opacity` (성능)

### 자주 쓰는 패턴:
```css
/* 기본 */
transition: all 0.3s ease;

/* 성능 최적화 */
transition: transform 0.3s ease, opacity 0.3s ease;

/* 지연 효과 */
transition: all 0.3s ease 0.1s;
```

---

## <i class="fas fa-arrow-right"></i> 다음 단계

- **[Transform](transform)** - 변형 효과
- **[Animation](../styling/animations)** - 키프레임 애니메이션
- **[Flexbox](../css/flexbox)** - 레이아웃
