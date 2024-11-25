<script lang="ts">
	import { findSolutions } from "$lib/thing";
	import type { Thing } from "$lib/thing";
	import Condinput from "./condinput.svelte";

	let cond1: Thing = $state([0, 0, 0]);
	let cond2: Thing = $state([0, 0, 0]);
	let cond3: Thing = $state([0, 0, 0]);
	let cond4: Thing = $state([0, 0, 0]);
	let cond5: Thing = $state([0, 0, 0]);

	let solutions: Thing[] = $derived.by(() => {
		return findSolutions(cond1, cond2, cond3, cond4, cond5);
	});
</script>

<div>
	<h1>Solver</h1>

	<Condinput id="cond1" label="One Number Is Correct But Wrongly Placed" bind:value={cond1} />
	<Condinput id="cond2" label="Two Numbers Are Correct But Wrongly Placed" bind:value={cond2} />
	<Condinput id="cond3" label="One Number is Correct And Well Placed" bind:value={cond3} />
	<Condinput id="cond4" label="One Number is Correct But Wrongly Placed" bind:value={cond4} />
	<Condinput id="cond5" label="Nothing Is Correct" bind:value={cond5} />

	<h3>Solutions</h3>
	{#if solutions.length > 0}
		<ul>
			{#each solutions as sol}
				<li>{sol.join("")}</li>
			{/each}
		</ul>
	{:else}
		<p>No solutions found.</p>
	{/if}
</div>
