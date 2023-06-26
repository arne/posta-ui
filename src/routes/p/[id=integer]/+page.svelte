<script>
  import Post from '$lib/Post.svelte';
  import Reply from '$lib/comments/Reply.svelte';
  import Card from '$lib/Card.svelte';
  import CommentsView from '$lib/comments/index.svelte';
  import SvelteMarkdown from 'svelte-markdown';
  import Subscribe from '$lib/Subscribe.svelte';
  export let data;
  $: [post, comments] = data.response;
  $: subscribed = data.response[0].community_view.subscribed;
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
        <div class="mb-2"><Reply postId={post.post_view.post.id} /></div>
        <CommentsView comments={comments.comments} />
      </div>
    {:else}
      <div class="p-2">
        <h2 class="text-m font-medium mb-2">No comment.</h2>
        <Reply postId={post.post_view.post.id} />
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
