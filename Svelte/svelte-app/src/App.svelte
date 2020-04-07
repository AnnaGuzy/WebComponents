<script>
	import MyElement from './MyElement.svelte';

	function handleMessage(event) {
		alert(event.detail);
	}
</script>

<MyElement on:buttonPressed={handleMessage} title = "Batman" details = "Director: Christopher Nolan, Year: 2008"/>