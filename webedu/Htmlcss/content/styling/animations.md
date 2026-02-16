# <i class="fas fa-play-circle"></i> CSS 애니메이션

:::info
<i class="fas fa-info-circle"></i> **애니메이션이란?**

CSS로 요소에 동적인 움직임을 부여하는 기술입니다.
JavaScript 없이도 부드러운 애니메이션 효과를 만들 수 있습니다.
:::

---

## <i class="fas fa-film"></i> @keyframes

애니메이션 동작 정의

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 또는 */
@keyframes slideIn {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
```

---

## <i class="fas fa-cog"></i> animation 속성

```css
.element {
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;

  /* 단축 */
  animation: fadeIn 1s ease 0s 1 normal forwards;
}
```

---

## <i class="fas fa-rocket"></i> 실전 예제

### <i class="fas fa-eye"></i> 페이드 인

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 0.5s ease;
}
```

---

### <i class="fas fa-arrow-right"></i> 슬라이드 인

```css
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in {
  animation: slideInRight 0.6s ease-out;
}
```

---

### <i class="fas fa-sync"></i> 회전

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  animation: spin 1s linear infinite;
}
```

---

### <i class="fas fa-heartbeat"></i> 펄스 (맥박)

```css
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.pulse {
  animation: pulse 1s ease-in-out infinite;
}
```

---

### <i class="fas fa-bell"></i> 흔들기

```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80% { transform: translateX(10px); }
}

.shake {
  animation: shake 0.5s;
}
```

---

## <i class="fas fa-clock"></i> animation-timing-function

```css
.element {
  animation-timing-function: linear;           /* 일정 속도 */
  animation-timing-function: ease;             /* 천천히-빠르게-천천히 */
  animation-timing-function: ease-in;          /* 천천히 시작 */
  animation-timing-function: ease-out;         /* 천천히 끝 */
  animation-timing-function: ease-in-out;      /* 양쪽 천천히 */
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);  /* 커스텀 */
}
```

---

## <i class="fas fa-repeat"></i> 반복 설정

```css
.element {
  animation-iteration-count: 1;                /* 1번 */
  animation-iteration-count: 3;                /* 3번 */
  animation-iteration-count: infinite;         /* 무한 */

  animation-direction: normal;                 /* 정방향 */
  animation-direction: reverse;                /* 역방향 */
  animation-direction: alternate;              /* 왕복 */
}
```

---

## <i class="fas fa-pause"></i> animation-fill-mode

```css
.element {
  animation-fill-mode: none;                   /* 기본 */
  animation-fill-mode: forwards;               /* 끝 상태 유지 */
  animation-fill-mode: backwards;              /* 시작 상태 대기 */
  animation-fill-mode: both;                   /* 둘 다 */
}
```

---

## <i class="fas fa-lightbulb"></i> 활용 팁

### 1. 로딩 스피너

```css
@keyframes rotate {
  to { transform: rotate(360deg); }
}

.loader {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #0071e3;
  border-radius: 50%;
  animation: rotate 1s linear infinite;
}
```

---

### 2. 버튼 호버 효과

```css
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.button:hover {
  animation: bounce 0.5s;
}
```

---

### 3. 알림 배지

```css
@keyframes ping {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.badge::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: red;
  animation: ping 1s ease-out infinite;
}
```

---

## <i class="fas fa-brain"></i> 핵심 정리

### 필수 속성:
1. `@keyframes` - 애니메이션 정의
2. `animation-name` - 이름
3. `animation-duration` - 지속 시간
4. `animation-timing-function` - 속도 곡선

### 자주 쓰는 패턴:
- 페이드 인: `opacity 0 → 1`
- 슬라이드: `translateX/Y`
- 회전: `rotate(360deg)`
- 크기 변화: `scale()`

### 성능 팁:
- `transform`, `opacity`만 애니메이션 (GPU 가속)
- `width`, `height`, `margin` 등은 피하기

---

## <i class="fas fa-arrow-right"></i> 다음 단계

- **[Transform](../advanced/transform)** - 변형 효과
- **[Transition](../advanced/transition)** - 전환 효과
- **[Flexbox](../css/flexbox)** - 레이아웃
