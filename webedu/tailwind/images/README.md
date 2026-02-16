# VS Code 설정 가이드 스크린샷

이 폴더에는 Tailwind CSS IntelliSense 설정 가이드에 사용될 스크린샷 이미지를 저장합니다.

## 필요한 스크린샷 목록

### 1. vscode-extension-install.png
**촬영 내용**: VS Code 확장 마켓플레이스에서 "Tailwind CSS IntelliSense" 검색 화면

**촬영 방법**:
1. VS Code 실행
2. 좌측 사이드바에서 확장(Extensions) 아이콘 클릭 또는 `Ctrl+Shift+X` (Mac: `Cmd+Shift+X`)
3. 검색창에 "Tailwind CSS IntelliSense" 입력
4. Tailwind Labs의 공식 확장이 보이는 화면 캡처

**권장 크기**: 가로 800px 이상

---

### 2. vscode-settings.png
**촬영 내용**: VS Code settings.json 파일에 Tailwind 설정이 추가된 화면

**촬영 방법**:
1. VS Code에서 `Ctrl+,` (Mac: `Cmd+,`)로 설정 열기
2. 우측 상단의 파일 아이콘(Open Settings JSON) 클릭
3. settings.json에 다음 설정이 보이도록 편집:
```json
{
  "tailwindCSS.emmetCompletions": true,
  "tailwindCSS.includeLanguages": {
    "html": "html",
    "javascript": "javascript"
  },
  "editor.quickSuggestions": {
    "strings": true
  }
}
```
4. 설정이 잘 보이도록 화면 캡처

**권장 크기**: 가로 800px 이상

---

### 3. vscode-autocomplete-1.png
**촬영 내용**: HTML에서 "flex j" 입력 시 자동완성 목록이 나타나는 화면

**촬영 방법**:
1. VS Code에서 HTML 파일 생성
2. `<div class="flex j">` 까지 입력
3. 자동완성 드롭다운이 나타나는 순간 캡처 (justify-content, justify-items 등이 보여야 함)

**권장 크기**: 가로 600px 이상

**예시 코드**:
```html
<div class="flex j">
  <!-- 'j' 입력 시 자동완성 목록 표시 -->
</div>
```

---

### 4. vscode-hover-preview.png
**촬영 내용**: 클래스명 호버 시 CSS 미리보기 툴팁이 나타나는 화면

**촬영 방법**:
1. HTML 파일에 `<div class="flex justify-center items-center p-4 bg-blue-500">` 작성
2. "flex" 또는 "bg-blue-500" 같은 클래스명 위에 마우스 커서 올리기
3. CSS 속성이 보이는 툴팁 팝업 캡처 (예: `display: flex;` 또는 `background-color: #3b82f6;`)

**권장 크기**: 가로 600px 이상

---

### 5. vscode-color-preview.png
**촬영 내용**: 색상 클래스 옆에 컬러 칩이 표시되는 화면

**촬영 방법**:
1. HTML 파일에 다양한 색상 클래스 작성:
```html
<div class="bg-blue-500 text-white border-red-600">
  <p class="text-green-400">Hello Tailwind</p>
</div>
```
2. `bg-blue-500`, `text-white`, `border-red-600` 등의 클래스 앞에 작은 색상 칩(사각형)이 표시됨
3. 색상 칩이 명확히 보이도록 확대해서 캡처

**권장 크기**: 가로 600px 이상

---

## 촬영 팁

### 화면 캡처 도구
- **Windows**: `Win + Shift + S` (캡처 도구)
- **Mac**: `Cmd + Shift + 4` (영역 선택 캡처)
- **전문 도구**: ShareX, Snagit, Lightshot

### 이미지 최적화
- 형식: PNG (선명도 유지)
- 해상도: 1x 또는 2x (Retina)
- 파일 크기: 가능한 1MB 이하로 압축 (TinyPNG 등 이용)

### 가독성 높이기
- VS Code 테마: 밝은 테마 추천 (Light+ 또는 One Light)
- 폰트 크기: 설정에서 조금 크게 (14px 이상)
- 줌 레벨: 125% 정도 확대하면 더 명확함
- 불필요한 창 닫기: 다른 탭이나 사이드바 정리

---

## 스크린샷 추가 후

모든 이미지를 준비했다면, index.html의 placeholder를 실제 이미지로 교체하세요:

```html
<!-- 변경 전 (Placeholder) -->
<div class="screenshot-placeholder">
  <i class="fa-solid fa-image"></i>
  <div>스크린샷 위치: ...</div>
</div>

<!-- 변경 후 (실제 이미지) -->
<div class="screenshot-container">
  <img src="images/vscode-extension-install.png"
       alt="VS Code Tailwind CSS IntelliSense 확장 설치"
       class="screenshot">
</div>
```

---

**참고**: 모든 스크린샷은 선택사항이며, 없어도 가이드는 정상적으로 작동합니다. 이미지가 추가되면 사용자 경험이 더욱 향상됩니다.
