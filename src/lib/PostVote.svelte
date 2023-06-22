<script lang="ts">
  import type { SubmitFunction } from '@sveltejs/kit';

  import { Button } from '$lib/button';
  import { ArrowUp, ArrowDown } from 'lucide-svelte';
  import { enhance } from '$app/forms';

  export let id: number;
  export let vote: number | undefined;

  $: v = vote || 0;

  const voteAction: SubmitFunction = ({ action }) => {
    const choice = action.search.split('/')[1];
    v = choice == 'zero' ? 0 : choice == 'upvote' ? 1 : -1;
    return async ({ result }) => {
      if (result.type === 'success') {
      } else {
        v = 0;
      }
    };
  };
</script>

<form class="flex gap-1" method="POST" use:enhance={voteAction}>
  <input type="hidden" name="id" value={id} />
  <Button
    variant={v === 1 ? 'active' : 'icon'}
    size="icon"
    formaction={v !== 1 ? `/p/${id}?/upvote` : `/p/${id}?/zero`}
  >
    <ArrowUp class="h-6 w-6" />
  </Button>

  <Button
    variant={v === -1 ? 'active' : 'icon'}
    size="icon"
    formaction={v !== -1 ? `/p/${id}?/downvote` : `/p/${id}?/zero`}
  >
    <ArrowDown class="h-6 w-6" />
  </Button>
</form>
