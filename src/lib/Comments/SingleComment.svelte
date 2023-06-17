<script lang="ts">
  import type { CommentView } from 'lemmy-js-client';
  import SvelteMarkdown from 'svelte-markdown';
  import relativeDate from '$lib/helpers/relativeDate.js';

  export let comment: CommentView;
</script>

<div class="mb-4">
  <div>
    <a href={`/u/${comment.creator.id}`} class="underline hover:no-underline"
      >{comment.creator.name}</a
    >
    {relativeDate(comment.counts.published)}
  </div>
  <SvelteMarkdown source={comment.comment.content} />
  <ul class="flex items-center gap-2 mt-2">
    <li class="flex gap-1">
      <img src="/up.svg" alt="Vote count" />
      {comment.counts.score}
      <img src="/down.svg" alt="Vote count" />
    </li>
    <li class="flex gap-1"><img src="/comment.svg" alt="Comment" /> Reply</li>
  </ul>
</div>
