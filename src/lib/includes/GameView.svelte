<!-- 스크립트 선언부 -->
<script lang="ts">
'use strict';

import SelectionView from '$lib/components/SelectionView.svelte';
import { WinnerSelectedException } from '$lib/definitions/exceptions';
import type { Selecting } from '$lib/definitions/selecting';
import { SelectionsRegistryProgrammingLanguages } from '$lib/definitions/selectionsRegistry';
import { SelectionGame } from '$lib/models/selectionGame';

import { goto } from '$app/navigation';
import { onMount } from 'svelte';

let game = new SelectionGame(
  SelectionsRegistryProgrammingLanguages.registered
);

let selectionLeft = $state(game.currentCandidates.at(0));
let selectionRight = $state(game.currentCandidates.at(1));

$inspect(selectionLeft, selectionRight);

const init = () => {
}

const onSelected = (selecting: Selecting) => {
  try {
    game.selectInCurrentCandidates(selecting);
  } catch (exception) {
    if (exception instanceof WinnerSelectedException) {
      goto(`/result?winner=${encodeURIComponent(JSON.stringify(exception.winner!))}`);
    }
  }

  selectionLeft = game.currentCandidates.at(0);
  selectionRight = game.currentCandidates.at(1);
}

onMount(init);
</script>

<!-- 스타일 선언부 -->
<!-- (없음) -->

<!-- HTML 템플릿 -->
<SelectionView
  bind:selectionLeft={
    selectionLeft!
    /*
     * bind: https://svelte.dev/docs/svelte/bind
     * 변수명!: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
     */
  }
  bind:selectionRight={selectionRight!}
  onSelected={onSelected}
/>
