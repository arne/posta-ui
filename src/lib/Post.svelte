<script lang="ts">
	import type { PostView } from 'lemmy-js-client';
	import relativeDate from '$lib/helpers/relativeDate.js';
	import ConditionalWrapper from '$lib/helpers/ConditionalWrapper.svelte';

	import SvelteMarkdown from 'svelte-markdown';
	export let post: PostView;
	export let link = false;
</script>

<div class="mb-3 border-gray-200 border rounded-md overflow-hidden">
	<ConditionalWrapper href={`/p/${post.post.id}`} class="no-show" {link}>
		<div class="content p-2">
			<h1 class="font-semibold text-lg">{post.post.name}</h1>
			{#if post.post.thumbnail_url}
				<img src={post.post.thumbnail_url} alt="Thumbnail" style="width: 100%" />
			{/if}
			{#if post.post.body}
				<div class="prose"><SvelteMarkdown source={post.post.body} /></div>
			{/if}
		</div>
	</ConditionalWrapper>

	<div class="p-2 flex items-center justify-between border-t border-gray-200 pt-3 text-sm">
		<div>
			<p>by {post.creator.name}</p>
			<ul class="flex items-center gap-2 mt-2">
				<li class="flex gap-1">
					<img src="/up.svg" alt="Vote count" />
					{post.counts.score}
				</li>
				<li class="flex gap-1"><img src="/comment.svg" alt="Downvote" /> {post.counts.comments}</li>
				<li class="flex gap-1">
					<img src="/time.svg" alt={post.counts.published} />
					{relativeDate(post.counts.published)}
				</li>
			</ul>
		</div>

		<div class="flex gap-1">
			<a href="#up" class="border-gray-100 border block px-4 py-3 rounded-lg"
				><img src="/up.svg" alt="Upvote" /></a
			>
			<a href="#down" class="border-gray-100 border block px-4 py-3 rounded-lg"
				><img src="/down.svg" alt="Downvote" /></a
			>
		</div>
	</div>
</div>
