<script lang="ts">
'use strict';

import SelectionView from '$lib/components/SelectionView.svelte';
import { WinnerSelectedException } from '$lib/definitions/exceptions';
import type { Selecting } from '$lib/definitions/selecting';
import { SelectionsRegistryProgrammingLanguages } from '$lib/definitions/selectionsRegistry';
import { SelectionGame } from '$lib/models/selectionGame';
import type { Selection } from '$lib/models/selection';

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

<SelectionView
  bind:selectionLeft={selectionLeft}
  bind:selectionRight={selectionRight}
  onSelected={onSelected}
/>
