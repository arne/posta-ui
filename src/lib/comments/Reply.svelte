<script lang="ts">
  import Button from '$lib/button/Button.svelte';
  import autosize from 'svelte-autosize';

  export let postId: number;
  export let commentId: number | undefined = undefined;
</script>

<form action={`/p/${postId}?/comment`} method="POST">
  <input type="hidden" name="post_id" value={postId} />
  {#if commentId}<input type="hidden" name="parent_id" value={commentId} />{/if}
  <!-- Needs to set padding outside tanilwind due to component -->
  <textarea
    class="border rounded w-full resize-none focus:outline-none focus:border-posta-red"
    style="padding: 0.5rem;"
    name="content"
    use:autosize
  />
  <Button type="submit">
    {#if commentId}Reply{:else}Post comment{/if}
  </Button>
</form>
