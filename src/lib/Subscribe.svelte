<script lang="ts">
  import Button from './button/Button.svelte';
  import { Plus, Minus } from 'lucide-svelte';
  export let redirect: string;
  export let communityId: number;
  export let subscribed: string;
</script>

<form action={`/c/${communityId}?/updatesub`} method="POST">
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
