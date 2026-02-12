# jQuery 학습 가이드

JavaScript를 배운 사람들을 위한 jQuery 확장 학습 자료

## 📁 프로젝트 구조

```
jQuery/
├── index.html          # 메인 뷰어 페이지
├── style.css           # 스타일시트
├── script.js           # md 파일 로더 및 UI 스크립트
├── README.md           # 프로젝트 설명 (이 파일)
└── parts/              # 각 파트별 md 파일들
    ├── 01-basic.md
    ├── 02-selector.md
    ├── 03-manipulation.md
    ├── 04-event.md
    ├── 05-animation.md
    ├── 06-ajax.md
    ├── 07-dom-create.md
    ├── 08-patterns.md
    ├── 09-traversal.md
    └── 10-performance.md
```

## 📚 콘텐츠 구성

**Part 1. jQuery 기초**
- jQuery 소개 및 설치
- $(document).ready()
- Vanilla JS vs jQuery 비교

**Part 2. 선택자 (Selector)**
- 기본 선택자 (ID, Class, Tag)
- 속성 선택자, 필터 선택자

**Part 3. DOM 조작**
- text(), html(), val()
- 속성 조작, 클래스 조작, CSS 조작

**Part 4. 이벤트 처리**
- click, on 메서드
- 이벤트 위임
- preventDefault, stopPropagation

**Part 5. 애니메이션 & 효과**
- show, hide, toggle
- fade, slide 효과
- animate() 커스텀 애니메이션

**Part 6. Ajax 통신**
- $.ajax() 기본 사용법
- $.get(), $.post()
- JSON 데이터 처리

**Part 7. DOM 생성 및 삭제**
- append, prepend
- remove, empty
- clone

**Part 8. 실전 프로젝트 패턴**
- 탭 메뉴, 아코디언
- 모달 팝업, 슬라이더
- 실시간 검색 필터

**Part 9. DOM 탐색 (Traversal)**
- parent, children, find
- siblings, next, prev
- filter, eq

**Part 10. 성능 최적화**
- 선택자 최적화
- 캐싱 활용
- 이벤트 위임

## 💻 사용 방법

1. `index.html` 파일을 브라우저로 열기
2. 왼쪽 사이드바에서 원하는 파트 클릭
3. 각 파트의 내용이 한 페이지에 모두 표시됨
4. 코드 예제를 복사해서 바로 사용 가능

## 🎨 주요 기능

### 디자인
- **애플 스타일 UI**: 부드럽고 깔끔한 디자인
- **블러 효과**: 헤더/사이드바 backdrop-filter 적용
- **플랫 레이아웃**: 모든 파트가 한 페이지에 표시
- **반응형**: 모바일/데스크탑 지원

### 인터랙티브
- **구문 강조**: Highlight.js로 코드 색상 표시 (애플 스타일 커스텀)
- **복사 버튼**: 코드 블록 hover 시 복사 버튼 표시
- **사이드바 네비게이션**: 부드러운 스크롤 이동
- **스크롤 탑 버튼**: 400px 이상 스크롤 시 표시

### 폰트
- **본문**: Pretendard (애플 스타일 한글 폰트)
- **코드**: JetBrains Mono (읽기 좋은 모노스페이스 폰트)

## 🛠 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, backdrop-filter, 부드러운 애니메이션
- **JavaScript**: Vanilla JS
- **marked.js**: 마크다운 파싱
- **Highlight.js**: 구문 강조
- **Pretendard**: 한글 폰트
- **JetBrains Mono**: 코드 폰트
- **Font Awesome**: 아이콘

## ✏️ 콘텐츠 업데이트 방법

### 기존 파트 수정
1. `parts/` 폴더의 원하는 `.md` 파일 열기
2. 마크다운 문법으로 내용 추가/수정
3. 저장 후 브라우저 새로고침

### 새 파트 추가
1. `parts/` 폴더에 새 `.md` 파일 생성 (예: `11-plugin.md`)
2. `script.js`의 `mdFiles` 배열에 추가:
   ```javascript
   { file: '11-plugin.md', title: 'Part 11. 플러그인' }
   ```
3. 저장 후 브라우저 새로고침

## 📝 마크다운 작성 가이드

### 코드 블록
```markdown
\```javascript
$('#myDiv').addClass('active');
\```
```

### 제목 구조
```markdown
# Part 제목 (h1)
## 대주제 (h2)
### 소주제 (h3)
```

### 강조
- `**굵게**` → **굵게**
- `*기울임*` → *기울임*
- `` `인라인 코드` `` → `인라인 코드`

## 🎯 학습 대상

- JavaScript 기초를 배운 개발자
- DOM 조작을 더 쉽게 하고 싶은 사람
- jQuery를 빠르게 익히고 싶은 사람

## 📱 반응형 중단점

- 모바일: ~ 768px (사이드바 숨김)
- 데스크탑: 768px ~ (사이드바 표시)

## 🚀 확장 가능성

이 프로젝트는 확장을 염두에 두고 설계되었습니다:

✅ **새 파트 추가 쉬움**: md 파일 생성 + script.js에 1줄 추가
✅ **독립적인 파트**: 각 md 파일이 독립적으로 관리됨
✅ **마크다운 기반**: 쉽게 작성하고 수정 가능
✅ **자동 렌더링**: 파일만 추가하면 자동으로 페이지에 표시
✅ **버전 관리 용이**: Git으로 변경사항 추적 쉬움

## 🎨 디자인 특징

### 애플 스타일 디자인 시스템
- **색상**: #1d1d1f (텍스트), #007AFF (강조), #fafafa (배경)
- **타이포그래피**: Pretendard 폰트, 적절한 letter-spacing
- **그림자**: 부드러운 box-shadow (rgba 사용)
- **블러**: backdrop-filter로 유리 효과
- **둥근 모서리**: 18px (사이드바), 20px (콘텐츠)
- **여백**: 충분한 padding으로 읽기 편한 레이아웃

### 코드 블록 스타일
- **구문 강조**: 키워드(보라), 함수(파랑), 문자열(빨강) 등
- **복사 버튼**: hover 시 나타나는 우아한 UI
- **폰트**: JetBrains Mono (가독성 최고)

## 📖 업데이트 히스토리

- **2026-02-11**:
  - 초기 구성 완료 (Part 1~10 기본 구조)
  - 애플 스타일 디자인 적용
  - 구문 강조 및 복사 버튼 추가
  - Pretendard & JetBrains Mono 폰트 적용

---

**💡 이 프로젝트는 계속 업데이트됩니다. 언제든지 새로운 내용을 추가하세요!**
