<script lang="ts">
	import { findSolutions } from "$lib/thing";
	import type { Thing } from "$lib/thing";
	import type { Snapshot } from "./$types";
	import Condinput from "./condinput.svelte";

	let cond1: Thing = $state([0, 0, 0]);
	let cond2: Thing = $state([0, 0, 0]);
	let cond3: Thing = $state([0, 0, 0]);
	let cond4: Thing = $state([0, 0, 0]);
	let cond5: Thing = $state([0, 0, 0]);

	let solutions: Thing[] = $derived.by(() => {
		return findSolutions(cond1, cond2, cond3, cond4, cond5);
	});

	export const snapshot: Snapshot<Thing[]> = {
		capture: () => [cond1, cond2, cond3, cond4, cond5],
		restore: (data) => {
			console.log("restoring from data ", data);
			[cond1, cond2, cond3, cond4, cond5] = data;
		},
	};
</script>

<title>The Thing</title>

<div class="grid bg-white md:min-h-screen md:place-items-center md:bg-slate-100 md:p-8">
	<div
		class="flex w-screen max-w-screen-md flex-col gap-4 p-8 text-slate-700 md:rounded-xl md:bg-white md:shadow-lg"
	>
		<h1 class="text-2xl font-bold text-slate-900">The Thing</h1>

		<Condinput id="cond1" label="One Number Is Correct But Wrongly Placed" bind:value={cond1} />
		<Condinput id="cond2" label="Two Numbers Are Correct But Wrongly Placed" bind:value={cond2} />
		<Condinput id="cond3" label="One Number is Correct And Well Placed" bind:value={cond3} />
		<Condinput id="cond4" label="One Number is Correct But Wrongly Placed" bind:value={cond4} />
		<Condinput id="cond5" label="Nothing Is Correct" bind:value={cond5} />

		<h3 class="text-lg font-bold text-slate-900">Solutions</h3>
		{#if solutions.length > 0}
			<ul class="flex flex-wrap gap-2">
				{#each solutions as sol}
					<li>{sol.join("")}</li>
				{/each}
			</ul>
		{:else}
			<p>No solutions found.</p>
		{/if}
	</div>
</div>
