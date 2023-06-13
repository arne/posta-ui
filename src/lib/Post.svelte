<script lang="ts">
	import type { PostView } from 'lemmy-js-client';
	export let post: PostView;
	console.log(post);
</script>

<div class="post">
	<div class="content">
		<h1>{post.post.name}</h1>

		{#if post.post.thumbnail_url}
			<img src={post.post.thumbnail_url} alt="Thumbnail" style="width: 100%" />
		{/if}
		{#if post.post.body}
			<p>{post.post.body}</p>
		{/if}
	</div>
	<div class="meta flex -space-between">
		<div>
			<p>by {post.creator.name}</p>
			<ul class="details flex">
				<li>
					<img src="/up.svg" alt="Vote count" />
					{post.counts.score}
				</li>
				<li><img src="/comment.svg" alt="Downvote" /> {post.counts.comments}</li>
				<li><img src="/time.svg" alt="Post time" /> 12h ago</li>
			</ul>
		</div>
		<div class="vote">
			<a href="#up"><img src="/up.svg" alt="Upvote" /></a>
			<a href="#up"><img src="/down.svg" alt="Downvote" /></a>
		</div>
	</div>
</div>

<style>
	p {
		margin: 0.25rem 0 0;
	}
	h1 {
		font-size: 1rem;
		margin: 0.25rem 0;
		line-height: 1.5;
		font-weight: 600;
	}
	.post {
		border: thin solid #e0e5e9;
		border-radius: 0.25rem;
		width: 100%;
		margin-bottom: 1rem;
	}
	.content {
		padding: 0.5rem;
	}
	.meta {
		border-top: thin solid #e0e5e9;
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
	}
	.details {
		list-style: none;
		padding: 0;
		margin: 0;
		margin-top: 0.5rem;
	}
	.details li {
		margin-right: 0.5rem;
	}
	.vote a {
		padding: 0.5rem 0.75rem;
		background-color: #f6f6f6;
		border-radius: 0.5rem;
	}
</style>
