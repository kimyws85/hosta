# <i class="fas fa-magic"></i> CSS Transform

:::info
<i class="fas fa-info-circle"></i> **Transform이란?**

요소를 이동, 회전, 크기 조절, 기울이기 등으로 변형시키는 CSS 속성입니다.
레이아웃에 영향을 주지 않고 시각적 효과만 적용됩니다.
:::

---

## <i class="fas fa-arrows-alt"></i> 이동 (Translate)

```css
.element {
  transform: translateX(100px);                /* X축으로 100px */
  transform: translateY(50px);                 /* Y축으로 50px */
  transform: translate(100px, 50px);           /* X, Y 동시 */
}
```

---

## <i class="fas fa-expand"></i> 크기 조절 (Scale)

```css
.element {
  transform: scaleX(1.5);                      /* X축 1.5배 */
  transform: scaleY(0.5);                      /* Y축 0.5배 */
  transform: scale(1.5);                       /* 전체 1.5배 */
  transform: scale(2, 0.5);                    /* X:2배, Y:0.5배 */
}
```

---

## <i class="fas fa-sync"></i> 회전 (Rotate)

```css
.element {
  transform: rotate(45deg);                    /* 45도 회전 */
  transform: rotate(-90deg);                   /* -90도 */
  transform: rotate(180deg);                   /* 180도 */
}
```

---

## <i class="fas fa-sliders-h"></i> 기울이기 (Skew)

```css
.element {
  transform: skewX(20deg);                     /* X축 기울임 */
  transform: skewY(10deg);                     /* Y축 기울임 */
  transform: skew(20deg, 10deg);               /* X, Y 동시 */
}
```

---

## <i class="fas fa-layer-group"></i> 여러 변형 조합

```css
.element {
  transform: translate(50px, 100px) rotate(45deg) scale(1.5);
}
```

:::warning
<i class="fas fa-exclamation-triangle"></i> **순서 중요!**

`translate(100px, 0) rotate(45deg)` ≠ `rotate(45deg) translate(100px, 0)`

변형은 **오른쪽부터 왼쪽**으로 적용됩니다!
:::

---

## <i class="fas fa-crosshairs"></i> transform-origin

변형 기준점 설정

```css
.element {
  transform-origin: center center;             /* 기본값 */
  transform-origin: top left;                  /* 왼쪽 상단 */
  transform-origin: bottom right;              /* 오른쪽 하단 */
  transform-origin: 50% 50%;                   /* 중앙 */
  transform-origin: 0 0;                       /* 왼쪽 상단 */
}

/* 회전 기준점 변경 예시 */
.rotate-corner {
  transform-origin: top left;
  transform: rotate(45deg);
}
```

---

## <i class="fas fa-cube"></i> 3D Transform

```css
.element {
  /* 3D 이동 */
  transform: translateZ(100px);
  transform: translate3d(50px, 100px, 200px);

  /* 3D 회전 */
  transform: rotateX(45deg);                   /* X축 회전 */
  transform: rotateY(45deg);                   /* Y축 회전 */
  transform: rotateZ(45deg);                   /* Z축 회전 */

  /* 3D 크기 */
  transform: scale3d(1, 1, 2);
}

/* 3D 공간 설정 */
.parent {
  perspective: 1000px;                         /* 원근감 */
  perspective-origin: center;
}

.child {
  transform-style: preserve-3d;                /* 3D 유지 */
}
```

---

## <i class="fas fa-rocket"></i> 실전 예제

### <i class="fas fa-mouse-pointer"></i> 호버 확대

```css
.card {
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}
```

---

### <i class="fas fa-sync-alt"></i> 회전 로고

```css
.logo {
  transition: transform 0.3s;
}

.logo:hover {
  transform: rotate(360deg);
}
```

---

### <i class="fas fa-arrow-up"></i> 떠오르는 버튼

```css
.button {
  transition: transform 0.3s;
}

.button:hover {
  transform: translateY(-5px);
}
```

---

### <i class="fas fa-layer-group"></i> 3D 카드 뒤집기

```html
<div class="card-container">
  <div class="card">
    <div class="card-front">Front</div>
    <div class="card-back">Back</div>
  </div>
</div>
```

```css
.card-container {
  perspective: 1000px;
}

.card {
  width: 300px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card:hover {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
}
```

---

## <i class="fas fa-brain"></i> 핵심 정리

### 2D 변형:
1. `translate` - 이동
2. `scale` - 크기
3. `rotate` - 회전
4. `skew` - 기울이기

### 중요 속성:
- `transform-origin` - 기준점
- `transition` - 부드러운 변형
- `perspective` - 3D 원근감

### 성능:
- `transform`은 **GPU 가속** (빠름)
- 레이아웃에 영향 없음 (리플로우 없음)

---

## <i class="fas fa-arrow-right"></i> 다음 단계

- **[Transition](transition)** - 전환 효과
- **[Animation](../styling/animations)** - 애니메이션
- **[Flexbox](../css/flexbox)** - 레이아웃
