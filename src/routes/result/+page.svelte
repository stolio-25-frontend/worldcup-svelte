<script lang="ts">
'use strict';

import type { Selection } from '$lib/models/selection';
import { page } from '$app/state';

$: winnerParsed = page.url.searchParams.get('=') || page.url.searchParams.get('winner');
$: winner = JSON.parse(winnerParsed || '{}') as Selection;
</script>

{#if winnerParsed}
<h2>Winner Selected</h2>
<div class="selection-card">
  {#if winner?.imagePath}
    <img src={winner.imagePath} alt={winner.name} class="selection-image" />
  {/if}
</div>
{:else}
  <h2>Internal Error</h2>
{/if}
