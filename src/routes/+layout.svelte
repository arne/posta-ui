<script>
  import '../app.css';
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
      <div class="flex items-center gap-2">
        <a
          href="/login"
          class="inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80 hidden md:block"
          >Login</a
        >
        <a
          href="/register"
          class="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 hidden md:block"
          >Register</a
        >
      </div>
    </div>
  </nav>
</header>

<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
  <slot />
</div>
