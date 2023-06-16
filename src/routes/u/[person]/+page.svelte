<script>
	import Post from '$lib/Post.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	export let data;
</script>

<div class="flex gap-6">
	<main class="flex-auto w-64">
		{#each data.posts as post}
			<Post {post} link />
		{/each}
	</main>

	<section class="w-80 border border-gray-200 rounded-md p-3 prose">
		{#if data.person_view.person.banner}
			<img src={data.person_view.person.banner} alt="banner" class="w-20 h-10" />
		{/if}

		{#if data.person_view.person.avatar}
			<img
				src={data.person_view.person.avatar}
				alt={data.person_view.person.name}
				class="inline-block h-20 w-20 rounded-full"
			/>
		{/if}

		{data.person_view.person.name}

		{#if data.person_view.person.bio}
			<div class="prose">{data.person_view.person.bio}</div>
		{/if}

		<ul>
			<li>{data.person_view.person.published}</li>
		</ul>
	</section>
</div>
