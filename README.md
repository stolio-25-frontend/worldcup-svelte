# 월드컵 게임 예제

## 코드 구조

- `src`
  - `lib`
    - `components`: 스벨트 컴포넌트
      - [`SelectionCard.svelte`](./src/lib/components/SelectionCard.svelte): 선택 화면에서 각 선택 항목 표시 담당
      - [`SelectionView.svelte`](./src/lib/components/SelectionView.svelte): 선택 화면의 레이아웃
    - `definitions`
      - [`exceptions.ts`](./src/lib/definitions/exceptions.ts): 발생시킬 예외 정의
      - [`selecting.ts`](./src/lib/definitions/selecting.ts)
      - [`selectionsRegistry.ts`](./src/lib/definitions/selectionsRegistry.ts): 월드컵 게임에서 사용할 선택 후보군 데이터
    - `images`: 이미지 파일
    - `includes`: 레이아웃 스벨트 컴포넌트
      - [`GameView.svelte`](./src/lib/includes/GameView.svelte): 게임 화면 레이아웃; 게임 매니저와 화면을 연결
    - `models`: 데이터 모델(구조) 정의
      - [`selection.ts`](./src/lib/models/selection.ts): 선택 화면에서 각 선택 항목의 데이터 구조
      - [`selectionGame.ts`](./src/lib/models/selectionGame.ts): 월드컵 게임의 게임 매니저; 이 클래스의 객체만으로도 터미널 환경에서 게임을 수행할 수 있음
    - `routes`: 페이지 라우트

## 노트

- 스벨트 컴포넌트는 파스칼 표기법으로 표기: `SelectionCard.svelte`, `SelectionView.svelte`
- 타입스크립트 코드 파일은 카멜 표기법으로 표기: `exceptions.ts`, `selecting.ts`, `selectionsRegistry.ts`
- 타입스크립트 타입은 파스칼 표기법으로 표기: `Selection`, `SelectionGame`

<br />

- 타입스크랩트의 클래스 상에서 `private` 필드는 언더스코어(`_`)로 시작: `_selections`, `_currentSelection`

<br />

- HTML 코드에 바로 사용되는 문자열은 큰따옴표(`"`)로 감싸고, 스벨트 컴포넌트와 타입스크립트 코드에서 사용되는 문자열은 작은따옴표(`'`)로 감싼다.

## 권장하는 읽는 순서

1. [`src/routes/+page.svelte`](./src/routes/+page.svelte): 진입점
2. [`src/lib/includes/GameView.svelte`](./src/lib/includes/GameView.svelte): 게임 화면 레이아웃(`routes/+page.svelte`에서 사용)
3. [`src/lib/models/selectionGame.ts`](./src/lib/models/selectionGame.ts): 게임 매니저
4. [`src/lib/definitions/selectionsRegistry.ts`](./src/lib/definitions/selectionsRegistry.ts), [`src/lib/models/selection.ts`](./src/lib/models/selection.ts): 데이터 파일 및 데이터 파일이 갖는 데이터 구조
5. [`src/lib/components/SelectionView.svelte`](./src/lib/components/SelectionView.svelte): 게임 상에서의 선택 화면 레이아웃
6. [`src/lib/components/SelectionCard.svelte`](./src/lib/components/SelectionCard.svelte): 선택 화면에서 각 선택 항목을 표시하는 컴포넌트
7. [`src/routes/result/+page.svelte`](./src/routes/result/+page.svelte): 결과 화면
