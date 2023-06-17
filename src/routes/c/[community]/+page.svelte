<script>
  import Post from '$lib/Post.svelte';
  import Card from '$lib/Card.svelte';
  import Button from '$lib/button/Button.svelte';
  import { Plus, Link } from 'lucide-svelte';
  import SvelteMarkdown from 'svelte-markdown';

  export let data;
  const community = data.posts[0].community;
</script>

<div class="flex gap-6">
  <main class="flex-auto w-64">
    {#each data.posts as post}
      <Post {post} link />
    {/each}
  </main>

  <section class="w-80">
    <Card title={community.title}>
      {#if community.description}
        <div class=""><SvelteMarkdown source={community.description} /></div>
      {/if}

      <Button variant="subscribe">
        <Plus class="mr-2 h-4 w-4" />
        Subscribe
      </Button>

      <Button variant="copy">
        <Link class="mr-2 h-4 w-4" />
        Copy link
      </Button>
    </Card>
  </section>
</div>
