<script lang="ts">
  import type { CommentView } from '../../client/types/CommentView';
  import type { SubmitFunction } from '@sveltejs/kit';

  import { ArrowUp } from 'lucide-svelte';
  import { ArrowDown } from 'lucide-svelte';
  import { enhance } from '$app/forms';

  export let comment: CommentView;
  $: myVote = comment.my_vote || 0;
  const votes = comment.counts.upvotes - comment.counts.downvotes - (comment.my_vote || 0);

  const voteAction: SubmitFunction = ({ action }) => {
    const choice = action.search.split('/')[1];
    return async ({ result }) => {
      if (result.type === 'success') {
        myVote = choice == 'zcomment' ? 0 : choice == 'ucomment' ? 1 : -1;
      } else if (result.type === 'redirect') {
        console.log('You must be logged in to vote');
      }
    };
  };
</script>

<form method="POST" use:enhance={voteAction}>
  <input type="hidden" name="id" value={comment.comment.id} />
  <button
    class={myVote === 1 ? 'text-posta-red' : 'text-xs'}
    formaction={`/p/${comment.post.id}?/${myVote !== 1 ? 'u' : 'z'}comment`}
  >
    <ArrowUp class="h-3 w-3" />
  </button>
  {votes + myVote}
  <button
    class={myVote === -1 ? 'text-posta-red' : 'text-xs'}
    formaction={`/p/${comment.post.id}?/${myVote !== -1 ? 'd' : 'z'}comment`}
  >
    <ArrowDown class="h-3 w-3" />
  </button>
</form>
