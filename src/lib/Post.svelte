<script lang="ts">
	import type { PostView } from 'lemmy-js-client';
	import relativeDate from '$lib/helpers/relativeDate.js';
	import ConditionalWrapper from '$lib/helpers/ConditionalWrapper.svelte';

	import SvelteMarkdown from 'svelte-markdown';
	export let post: PostView;
	export let link = false;
</script>

<div class="p-3 mb-3 border-gray-200 border rounded-md overflow-hidden">
	<ConditionalWrapper href={`/post/${post.post.id}`} class="no-show" {link}>
		<div class="content">
			<h1 class="font-semibold text-lg mb-3">{post.post.name}</h1>
			{#if post.post.thumbnail_url}
				<img src={post.post.thumbnail_url} alt="Thumbnail" style="width: 100%" />
			{/if}
			{#if post.post.body}
				<div class="prose"><SvelteMarkdown source={post.post.body} /></div>
			{/if}
		</div>
	</ConditionalWrapper>

	<div class="flex items-center justify-between border-t border-gray-200 mt-3 pt-3 text-sm">
		<div>
			<p>by {post.creator.name}</p>
			<ul class="flex items-center gap-4 mt-2">
				<li class="flex gap-2">
					<img src="/up.svg" alt="Vote count" />
					{post.counts.score}
				</li>
				<li class="flex gap-2"><img src="/comment.svg" alt="Downvote" /> {post.counts.comments}</li>
				<li class="flex gap-2">
					<img src="/time.svg" alt={post.counts.published} />
					{relativeDate(post.counts.published)}
				</li>
			</ul>
		</div>

		<div class="flex gap-2">
			<a href="#up" class="bg-amber-100 block px-4 py-3 rounded-lg"
				><img src="/up.svg" alt="Upvote" /></a
			>
			<a href="#down" class="bg-amber-100 block px-4 py-3 rounded-lg"
				><img src="/down.svg" alt="Downvote" /></a
			>
		</div>
	</div>
</div>
