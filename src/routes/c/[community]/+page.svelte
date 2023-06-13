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
	<div>
		<article class="card">
			<h1>Welcome to Posta</h1>
			<p>
				Posta is a client for Lemmy, trying to build a user friendly way of browsing the fediverse.
			</p>
		</article>
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 640px 304px;
		grid-gap: 16px; /* Optional: Adds a gap between the containers */
	}
	h1 {
		font-weight: 600;
	}
</style>
