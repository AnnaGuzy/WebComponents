<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let title;
	export let details;
	
	function onClicked() {
		dispatch('buttonPressed', details);
	}
</script>

<h1>{title}</h1>
<button on:click={onClicked}>
	Details
</button>