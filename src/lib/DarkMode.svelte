<script lang="ts">
  import { cn } from '$lib/helpers/cn';
  import { Moon, Sun } from 'lucide-svelte';

  export let btnClass: string =
    'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5';
  export let size: 'sm' | 'md' | 'lg' = 'md';

  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const toggleTheme = () => {
    const isDark = window.document.documentElement.classList.toggle('dark');
    localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
  };
</script>

<svelte:head>
  <script>
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? window.document.documentElement.classList.add('dark')
      : window.document.documentElement.classList.remove('dark');
  </script>
</svelte:head>

<button
  on:click={toggleTheme}
  aria-label="Dark mode"
  type="button"
  {...$$restProps}
  class={cn(btnClass, $$props.class)}
>
  <span class="hidden dark:block">
    <slot name="lightIcon">
      <Sun class={sizes[size]} />
    </slot>
  </span>
  <span class="block dark:hidden">
    <slot name="darkIcon">
      <Moon class={sizes[size]} />
    </slot>
  </span>
</button>
