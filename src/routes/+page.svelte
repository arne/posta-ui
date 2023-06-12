<script>
	import Post from '$lib/Post.svelte';
</script>

<div class="grid">
	<div class="posts">
		<Post />
		<Post />
		<Post />
		<Post />
	</div>
	<div>Yolo</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 640px 304px;
		grid-gap: 16px; /* Optional: Adds a gap between the containers */
	}
</style>
