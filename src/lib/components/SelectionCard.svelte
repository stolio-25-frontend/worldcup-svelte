<!-- 스크립트 선언부 -->
<script lang="ts">
'use strict';

import type { Selection } from '$lib/models/selection';


/**
 * 아래의 Props 인터페이스, $bindable<Selection>() 등은 다음의 페이지를 참조할것:
 * - https://svelte.dev/docs/svelte/$props#Type-safety
 * - https://svelte.dev/docs/svelte/$bindable
 */
interface Props {
  selection: Selection;
}

let {
  selection = $bindable<Selection>()
}: Props = $props();
</script>

<!-- 스타일 선언부 -->
<style>
.selection-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
}
.selection-image {
  max-width: 40vw;
  max-height: 80vh;
  height: 100%;
  object-fit: cover;
}
.selection-name {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}
</style>

<!-- HTML 템플릿 -->
<div class="selection-card">
  {#if selection?.imagePath}
    <img src={selection.imagePath} alt={selection.name} class="selection-image" />
  {/if}
  <h3 class="selection-name">{selection?.name}</h3>
  {#if selection?.description}
    <p class="selection-description">{selection.description}</p>
  {/if}
</div>
