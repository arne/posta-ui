<script lang="ts">
  import type { SubmitFunction } from '@sveltejs/kit';

  import { Button } from '$lib/button';
  import { ArrowUp, ArrowDown } from 'lucide-svelte';
  import { enhance } from '$app/forms';

  export let id: number;
  export let vote = 0;

  const voteAction: SubmitFunction = () => {
    return async ({ result, update }) => {
      if (result.type === 'success') {
        await update();
      }
    };
  };
</script>

<form class="flex gap-1" method="POST" use:enhance={voteAction}>
  <Button
    variant={vote === 1 ? 'active' : 'icon'}
    size="icon"
    formaction={vote !== 1 ? `/p/${id}?/upvote` : `/p/${id}?/zero`}
  >
    <ArrowUp class="h-6 w-6" />
  </Button>

  <Button
    variant={vote === -1 ? 'active' : 'icon'}
    size="icon"
    formaction={vote !== -1 ? `/p/${id}?/downvote` : `/p/${id}?/zero`}
  >
    <ArrowDown class="h-6 w-6" />
  </Button>
</form>
