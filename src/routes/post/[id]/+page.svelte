<script>
	import Post from '$lib/Post.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	export let data;
</script>

<div class="flex gap-6">
	<div class="flex-auto w-64">
		<Post post={data.post_view} />
	</div>
	<div>
		<section class="w-80 border border-gray-200 rounded-md p-3 prose">
			<h1 class="text-xl font-bold">{data.community_view.community.title}</h1>

			{#if data.community_view.community.description}
				<div class=""><SvelteMarkdown source={data.community_view.community.description} /></div>
			{/if}
		</section>
	</div>
</div>
