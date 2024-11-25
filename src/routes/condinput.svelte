<script lang="ts">
	import { ThingLength, type Thing } from "$lib/thing";

	let { id, label, value = $bindable() }: { id: string; label: string; value: Thing } = $props();

	let text = $state(value.join(""));
	let valid = $state(true);

	$effect(() => {
		if (/^[0-9][0-9][0-9]$/.test(text)) {
			value = text.split("").map((c) => parseInt(c, 10)) as Thing;
			valid = true;
		} else {
			valid = false;
		}
	});
</script>

<div class="flex flex-col gap-1">
	<label for={id}>{label}</label>
	<input
		{id}
		type="tel"
		bind:value={text}
		maxlength={ThingLength}
		class="rounded-md border-2 border-slate-200 p-2 outline-blue-500"
	/>
	{#if !valid}
		<p class="text-sm text-red-600">Invalid input. Please enter three digits.</p>
	{/if}
</div>
