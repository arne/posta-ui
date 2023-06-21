<script lang="ts">
  import { enhance } from '$app/forms';
  import Button from './button/Button.svelte';
  import { Plus, Minus } from 'lucide-svelte';

  export let redirect: string;
  export let communityId: number;
  export let subscribed: string;

  import type { SubmitFunction } from '@sveltejs/kit';

  const subscribe: SubmitFunction = ({ formData }) => {
    const form = Object.fromEntries(formData) as {
      redirect: string;
    };
    return async ({ result, update }) => {
      if (result.type === 'success') {
        await update();
      }
      if (result.type === 'redirect') {
        console.log('You must be logged in to subscribe');
      }
    };
  };
</script>

<form action={`/c/${communityId}?/updatesub`} method="POST" use:enhance={subscribe}>
  <input type="hidden" name="communityId" value={communityId} />
  <input type="hidden" name="subscribe" value={subscribed === 'NotSubscribed'} />
  <input type="hidden" name="redirect" value={redirect} />
  <Button type="submit" variant="subscribe">
    {#if subscribed === 'Subscribed'}
      <Minus class="mr-2 h-4 w-4" />
      Unsubscribe
    {:else if subscribed === 'Pending'}
      <Minus class="mr-2 h-4 w-4" />
      Cancel pending subscription
    {:else}
      <Plus class="mr-2 h-4 w-4" />
      Subscribe
    {/if}
  </Button>
</form>
