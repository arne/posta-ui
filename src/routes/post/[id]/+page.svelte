<script>
	import Post from '$lib/Post.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	export let data;
</script>

<div class="grid">
	<div class="posts">
		<Post post={data.post_view} />
	</div>
	<div>
		<article class="card">
			<h1>{data.community_view.community.title}</h1>
			{#if data.community_view.community.description}
				<div class="md"><SvelteMarkdown source={data.community_view.community.description} /></div>
			{/if}
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
