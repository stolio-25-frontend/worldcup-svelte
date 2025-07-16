<script lang="ts">
'use strict';

import type { Selection } from '$lib/models/selection';
import SelectionCard from "./SelectionCard.svelte";
import { Selecting } from '$lib/definitions/selecting';

interface Props {
  selectionLeft: Selection;
  selectionRight: Selection;
  onSelected: (selecting: Selecting) => void;
}

let {
  selectionLeft = $bindable<Selection>(),
  selectionRight = $bindable<Selection>(),
  onSelected
}: Props = $props();

$inspect(selectionLeft, selectionRight);

const postSelectionHandler = () => {}

const selectionHandler = (selecting: Selecting) => {
  postSelectionHandler();
  onSelected(selecting);
};
</script>

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
