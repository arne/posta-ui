<script>
  import Post from '$lib/Post.svelte';
  import Card from '$lib/Card.svelte';
  import SvelteMarkdown from 'svelte-markdown';
  export let data;
</script>

<div class="flex gap-6">
  <div class="flex-auto w-64">
    <Post post={data.post_view} />
  </div>
  <div>
    <section class="w-80">
      <Card title={data.community_view.community.title}>
        {#if data.community_view.community.description}
          <div class=""><SvelteMarkdown source={data.community_view.community.description} /></div>
        {/if}
      </Card>
    </section>
  </div>
</div>
