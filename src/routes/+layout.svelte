<script>
  import '../app.css';

  import { Button } from '$lib/button';
  import DarkMode from '$lib/DarkMode.svelte';
</script>

<header class="border-gray-200 border-b mb-4">
  <nav>
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-4">
      <div class="relative z-10 flex items-center gap-4">
        <a href="/" class="flex gap-2">
          <img src="/p.svg" alt="Posta logo" />
          <span class="text-xl font-bold">Posta</span>
        </a>
        <div class="hidden lg:flex lg:gap-3">
          <a
            class="relative -mx-3 -my-2 rounded-lg px-3 pt-3 py-2 text-m text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
            href="/c"><span class="relative z-10">Communities</span></a
          >
        </div>
      </div>
      <div class="flex items-center gap-3">
        <Button href="/login" variant="outline">Login</Button>
        <Button href="/register">Register</Button>
        <DarkMode />
      </div>
    </div>
  </nav>
</header>

<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
  <slot />
</div>
