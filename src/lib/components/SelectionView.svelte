<!-- 스크립트 선언부 -->
<script lang="ts">
'use strict';

import type { Selection } from '$lib/models/selection';
import SelectionCard from "./SelectionCard.svelte";
import { Selecting } from '$lib/definitions/selecting';

/**
 * 아래의 Props 인터페이스, $bindable<Selection>() 등은 다음의 페이지를 참조할것:
 * - https://svelte.dev/docs/svelte/$props#Type-safety
 * - https://svelte.dev/docs/svelte/$bindable
 */

interface Props {
  selectionLeft: Selection;
  selectionRight: Selection;

  /*
   * 항목 선택 시의 이벤트 핸들러
   * 부모 컴포넌트에 데이터를 전달하기 위해 사용
   * 
   * 이 코드에서는 게임 매니저(SelectionGame 클래스) 인스턴스가 이 페이지에 없고
   * 상위 단계의 코드에서 관리되는 것이 의도되었으므로, 게임 매니저 인스턴스가 관리되는 단계까지
   * 데이터를 전달하는 방법으로 이와 같은 구현을 사용함.
   * 
   * 게임 매니저를 사용하는 상위 단계 코드에서 이벤트 핸들러를 구현하여 이 코드의 프로퍼티로 전달함
   */
  onSelected: (selecting: Selecting) => void;
}

let {
  selectionLeft = $bindable<Selection>(),
  selectionRight = $bindable<Selection>(),
  onSelected
}: Props = $props();

/**
 * $inspect는 디버그에 사용할 수 있음
 * - https://svelte.dev/docs/svelte/$inspect
 */
$inspect(selectionLeft, selectionRight);

const postSelectionHandler = () => {
  /**
   * 구현되지 않음:
   * 월드컵 게임 화면 상에서 항목을 선택한 경우에,
   * 그 뒤 1초간 선택 항목을 확대하는 로직을 추가하기 위해 생성함.
   */
}

const selectionHandler = (selecting: Selecting) => {
  postSelectionHandler();
  onSelected(selecting);
};
</script>

<!-- 스타일 선언부 -->
<style>
  .selections-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 1rem;
  }
  .selections-grid {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }
</style>

<!-- HTML 템플릿 -->
<div class="selections-view">
  <div class="selections-grid">
    <a
      class="selection-wrapper"
      onclick={() => selectionHandler(Selecting.First)}
      href={'#'}
      aria-label={`Select ${selectionLeft.name}`}
    >
      <SelectionCard selection={selectionLeft} />
    </a>
    <a
      class="selection-wrapper"
      onclick={() => selectionHandler(Selecting.Second)}
      href={'#'}
      aria-label={`Select ${selectionRight.name}`}
    >
      <SelectionCard selection={selectionRight} />
    </a>
  </div>
</div>
