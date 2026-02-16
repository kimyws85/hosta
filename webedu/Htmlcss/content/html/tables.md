# <i class="fas fa-table"></i> 테이블(Table)

:::info
<i class="fas fa-info-circle"></i> <strong>테이블이란?</strong>

행(Row)과 열(Column) 구조로 데이터를 표현하는 HTML 요소입니다.  
“정렬된 데이터”, “비교 가능한 정보”, “숫자 기반 자료”를 표현할 때 사용합니다.
:::

## <i class="fas fa-book"></i> 테이블을 사용하는 기준

- 일정표
- 성적표
- 매출 데이터
- 통계 자료
- 비교 표

:::warning
<i class="fas fa-exclamation-triangle"></i> <strong>주의</strong>

<ul>
  <li>레이아웃을 만들기 위해 table을 사용하지 않습니다.</li>
  <li>테이블은 “데이터 표현” 전용입니다.</li>
</ul>
:::

## <i class="fas fa-layer-group"></i> 기본 구조

```html
<table>
  <tr>
    <th>이름</th>
    <th>나이</th>
  </tr>
  <tr>
    <td>홍길동</td>
    <td>25</td>
  </tr>
</table>
```

- `<table>` : 테이블 전체
- `<tr>` : 행 (Table Row)
- `<th>` : 제목 셀 (Table Header)
- `<td>` : 데이터 셀 (Table Data)

## <i class="fas fa-sitemap"></i> 구조 확장 요소

### `<thead>` / `<tbody>` / `<tfoot>`

```html
<table>
  <thead>
    <tr>
      <th>이름</th>
      <th>점수</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>홍길동</td>
      <td>90</td>
    </tr>
    <tr>
      <td>이순신</td>
      <td>95</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td>평균</td>
      <td>92.5</td>
    </tr>
  </tfoot>
</table>
```

- `thead` : 제목 영역
- `tbody` : 본문 데이터
- `tfoot` : 합계/요약

:::tip
<i class="fas fa-lightbulb"></i> <strong>왜 나누는가?</strong>

<ul>
  <li>구조를 명확히 하기 위함입니다.</li>
  <li>대규모 데이터에서 스크롤/고정 헤더 구현에 유리합니다.</li>
</ul>
:::

## <i class="fas fa-arrows-left-right"></i> 셀 병합

### 가로 병합 `colspan`

```html
<tr>
  <td colspan="2">전체 합계</td>
</tr>
```

### 세로 병합 `rowspan`

```html
<tr>
  <td rowspan="2">홍길동</td>
  <td>90</td>
</tr>
<tr>
  <td>85</td>
</tr>
```

:::warning
<i class="fas fa-exclamation-triangle"></i> <strong>병합 주의</strong>

<ul>
  <li>병합은 구조 복잡도를 증가시킵니다.</li>
  <li>데이터 의미가 흐트러지지 않도록 설계해야 합니다.</li>
</ul>
:::

## <i class="fas fa-universal-access"></i> 접근성 강화

### `scope` 속성

```html
<th scope="col">이름</th>
<th scope="row">홍길동</th>
```

- `scope="col"` : 열 제목
- `scope="row"` : 행 제목

스크린 리더가 셀과 제목을 연결합니다.

### `caption` (표 제목)

```html
<table>
  <caption>2026년 1분기 매출 현황</caption>
</table>
```

:::tip
<i class="fas fa-check-circle"></i> <strong>좋은 테이블 설계</strong>

<ul>
  <li>caption을 포함합니다.</li>
  <li>th를 정확히 사용합니다.</li>
  <li>의미 없는 빈 셀을 만들지 않습니다.</li>
</ul>
:::

## <i class="fas fa-check-circle"></i> 실전 예제

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>성적표</title>
</head>
<body>

  <h1>학생 성적표</h1>

  <table border="1">
    <caption>2026년 1학기 성적</caption>

    <thead>
      <tr>
        <th scope="col">이름</th>
        <th scope="col">국어</th>
        <th scope="col">영어</th>
        <th scope="col">수학</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <th scope="row">홍길동</th>
        <td>90</td>
        <td>85</td>
        <td>88</td>
      </tr>

      <tr>
        <th scope="row">이순신</th>
        <td>95</td>
        <td>92</td>
        <td>94</td>
      </tr>
    </tbody>

    <tfoot>
      <tr>
        <th scope="row">평균</th>
        <td>92.5</td>
        <td>88.5</td>
        <td>91</td>
      </tr>
    </tfoot>

  </table>

</body>
</html>
```

## 시맨틱 관점에서의 테이블

- table은 “레이아웃”이 아니라 “데이터 구조”입니다.
- section/article 안에 들어갈 수 있습니다.
- main 내부의 핵심 데이터로 사용됩니다.
- 의미 기반 설계가 중요합니다.

테이블은 단순히 칸을 만드는 태그가 아니라  
**정보를 정렬하고 비교하게 만드는 구조 도구**입니다.
