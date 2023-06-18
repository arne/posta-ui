<script>
  import Post from '$lib/Post.svelte';
  import Card from '$lib/Card.svelte';
  import { Button } from '$lib/button';
  import { Plus, Minus } from 'lucide-svelte';
  import CommentsView from '$lib/Comments/index.svelte';
  import SvelteMarkdown from 'svelte-markdown';
  import Subscribe from '$lib/Subscribe.svelte';
  export let data;
  const [post, comments] = data.response;
  const subscribed = post.community_view.subscribed;
</script>

<svelte:head>
  <title>Posta.no: {post.post_view.post.name}</title>
</svelte:head>

<div class="flex gap-6">
  <div class="flex-auto w-64">
    <Post post={post.post_view} />
    {#if comments.comments.length > 0}
      <div class="p-2">
        <h2 class="text-m font-medium mb-2">Comments({comments.comments.length}):</h2>
        <CommentsView comments={comments.comments} />
      </div>
    {:else}
      <div class="p-2">
        <h2 class="text-m font-medium mb-2">No comment.</h2>
      </div>
    {/if}
  </div>
  <div>
    <section class="w-80">
      <Card title={post.community_view.community.title}>
        {#if post.community_view.community.description}
          <div class=""><SvelteMarkdown source={post.community_view.community.description} /></div>
        {/if}

        <Subscribe
          redirect={`/p/${data.id}`}
          communityId={post.community_view.community.id}
          {subscribed}
        />
      </Card>
    </section>
  </div>
</div>
