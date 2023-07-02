<script lang="ts">
  import '../app.css';

  import { Button } from '$lib/button';
  import DarkMode from '$lib/DarkMode.svelte';

  export let data;
</script>

<header class="border-b mb-4">
  <nav>
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-4">
      <div class="relative z-10 flex items-center gap-4">
        <a href="/" class="flex gap-2">
          <img src="/p.svg" alt="Posta logo" />
          <span class="text-xl font-bold">Posta</span>
        </a>
        <div class="hidden lg:flex lg:gap-3">
          <Button href="/c" variant="outline">Communities</Button>
        </div>
      </div>
      <div class="flex items-center gap-3">
        {#if data.person}
          <Button href="/u">{data.person.name}</Button>
          <form method="POST" action="/?/logout">
            <Button type="submit" variant="outline">Logout</Button>
          </form>
        {:else}
          <Button href="/login" variant="outline">Login</Button>
          <Button href="/register">Register</Button>
        {/if}
        <DarkMode />
      </div>
    </div>
  </nav>
</header>

<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
  <slot />
</div>
