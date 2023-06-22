<script lang="ts">
  import type { CommentView } from '../../client/types/CommentView';
  import CommentVote from './CommentVote.svelte';
  import SvelteMarkdown from 'svelte-markdown';
  import Reply from './Reply.svelte';

  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime.js';
  dayjs.extend(relativeTime);

  export let comment: CommentView;
  $: showReply = false;
</script>

<div class="mb-4">
  <div>
    <a href={`/u/${comment.creator.id}`} class="underline hover:no-underline"
      >{comment.creator.name}</a
    >
    {dayjs().to(dayjs(comment.counts.published))}
  </div>
  <div class="prose dark:prose-invert"><SvelteMarkdown source={comment.comment.content} /></div>
  <ul class="flex items-center gap-2 mt-2">
    <li class="flex gap-1">
      <CommentVote {comment} />
    </li>
    <li class="flex gap-1">
      <button class="flex gap-1 items-center" on:click={() => (showReply = !showReply)}>
        <img src="/comment.svg" alt="Comment" /> Reply
      </button>
    </li>
  </ul>
  {#if showReply} <Reply commentId={comment.comment.id} postId={comment.post.id} />{/if}
</div>
