<script lang="ts">
  import Post from '$lib/Post.svelte';
  import Card from '$lib/Card.svelte';
  export let data;
</script>

<svelte:head>
  <title>Posta.no: Frontpage</title>
</svelte:head>

<div class="flex gap-6">
  <main class="flex-auto w-64">
    {#each data.posts as post}
      <Post {post} link outsideCommunity />
    {/each}
  </main>

  <section class="w-80">
    <Card title="Welcome to Posta">
      <p>
        Posta is a client for Lemmy, trying to build a user friendly way of browsing the fediverse.
      </p>
    </Card>
  </section>
</div>
