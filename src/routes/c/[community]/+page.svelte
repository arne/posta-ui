<script>
  import Post from '$lib/Post.svelte';
  import Card from '$lib/Card.svelte';
  import Button from '$lib/button/Button.svelte';
  import { Plus, Minus, Link } from 'lucide-svelte';
  import SvelteMarkdown from 'svelte-markdown';

  export let data;
  const [community, subscribed, slug] = [
    data.content.posts[0].community,
    data.content.posts[0].subscribed === 'Subscribed',
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

      <form action={`/c/${slug}?/updatesub`} method="POST">
        <input type="hidden" name="communityId" value={community.id} />
        <input type="hidden" name="subscribe" value={!subscribed} />
        <input type="hidden" name="redirect" value={`/c/${slug}`} />
        <Button type="submit" variant="subscribe">
          {#if subscribed}
            <Minus class="mr-2 h-4 w-4" />
            Unsubscribe
          {:else}
            <Plus class="mr-2 h-4 w-4" />
            Subscribe
          {/if}
        </Button>
      </form>
      <!-- 
      <Button variant="copy">
        <Link class="mr-2 h-4 w-4" />
        Copy link
      </Button> -->
    </Card>
  </section>
</div>
