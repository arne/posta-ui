<script lang="ts">
  import Post from '$lib/Post.svelte';
  import Card from '$lib/Card.svelte';
  import SvelteMarkdown from 'svelte-markdown';
  import Subscribe from '$lib/Subscribe.svelte';

  export let data;
  const [community, subscribed, slug] = [
    data.content.posts[0].community,
    data.content.posts[0].subscribed,
    data.slug,
  ];
</script>

<svelte:head>
  <title>Posta.no: {community.title}</title>
</svelte:head>
<div class="flex gap-6">
  <main class="flex-auto w-64">
    {#each data.content.posts as post}
      <Post {post} link />
    {/each}
  </main>

  <section class="w-80">
    <Card title={community.title}>
      {#if community.description}
        <div class=""><SvelteMarkdown source={community.description} /></div>
      {/if}

      <Subscribe redirect={`/c/${slug}`} communityId={community.id} {subscribed} />

      <!-- 
      <Button variant="copy">
        <Link class="mr-2 h-4 w-4" />
        Copy link
      </Button> -->
    </Card>
  </section>
</div>
