<script>
	import Post from '$lib/Post.svelte';
	export let data;
</script>

<div class="flex gap-6">
	<main class="flex-auto w-64">
		{#each data.posts as post}
			<Post {post} link />
		{/each}
	</main>

	<section class="w-80">
		<div class=" border border-gray-200 rounded-md p-3 prose">
			<div class="text-xl font-bold">Welcome to Posta</div>
			<p>
				Posta is a client for Lemmy, trying to build a user friendly way of browsing the fediverse.
			</p>
		</div>
	</section>
</div>
