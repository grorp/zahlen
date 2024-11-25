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

<div class="flex flex-col">
	<label for={id}>{label}</label>
	<input {id} type="tel" bind:value={text} maxlength={ThingLength} />
	{#if !valid}
		<p>Input invalid, three digits required.</p>
	{/if}
</div>
