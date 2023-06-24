<script lang="ts">
  import type { CommentView } from '../../client/types/CommentView';
  import SvelteMarkdown from 'svelte-markdown';
  import Reply from './Reply.svelte';

  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime.js';
  dayjs.extend(relativeTime);

  export let comment: CommentView;
  $: replyVisible = false;
</script>

<div class="mb-4">
  <div>
    <a href={`/u/${comment.creator.id}`} class="underline hover:no-underline"
      >{comment.creator.name}</a
    >
    {dayjs().to(dayjs(comment.counts.published))}
  </div>
  <SvelteMarkdown source={comment.comment.content} />
  <ul class="flex items-center gap-2 mt-2">
    <li class="flex gap-1">
      <img src="/up.svg" alt="Vote count" />
      {comment.counts.score}
      <img src="/down.svg" alt="Vote count" />
    </li>
    <li class="flex gap-1">
      <button
        on:click={() => {
          replyVisible = !replyVisible;
        }}
        class="flex gap-1 items-center"
      >
        <img src="/comment.svg" alt="Comment" /> Reply
      </button>
    </li>
  </ul>
  {#if replyVisible}<Reply {comment} />{/if}
</div>
