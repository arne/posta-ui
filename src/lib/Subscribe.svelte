<script lang="ts">
  import { enhance } from '$app/forms';
  import Button from './button/Button.svelte';
  import { Plus, Minus } from 'lucide-svelte';
  import { invalidate } from '$app/navigation';

  export let redirect: string;
  export let communityId: number;
  export let subscribed: string;

  import type { SubmitFunction } from '@sveltejs/kit';

  const subscribe: SubmitFunction = ({ formData, formElement, action }) => {
    console.log(formData, formElement, action);
    const test = Object.fromEntries(formData) as {
      communityId: string;
      subscribe: string;
      redirect: string;
    };
    console.log(test);
    console.log(test.redirect);

    return async ({ result, update }) => {
      switch (result.type) {
        case 'success':
          console.log('yo');
          break;
        default:
          break;
      }

      await invalidate(test.redirect);
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
