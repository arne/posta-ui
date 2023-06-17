<script>
  import Post from '$lib/Post.svelte';
  export let data;
  const [person, posts] = [data.person_view.person, data.posts];
</script>

<div class="flex gap-6">
  <main class="flex-auto w-64">
    {#each data.posts as post}
      <Post {post} link />
    {/each}
  </main>

  <section class="w-80">
    <div class="h-28 overflow-hidden">
      {#if person.banner}
        <img src={person.banner} alt="Banner" class="w-full rounded-tl-md rounded-tr-md" />
      {:else}
        <div class="bg-yellow-100 h-28 w-full rounded-tl-md rounded-tr-md" />
      {/if}
    </div>
    <div class="relative">
      <div
        class="w-20 h-20 sm:w-32 sm:h-32 bg-white rounded-full absolute sm:-top-16 -top-8 sm:left-4 left-2"
      >
        {#if person.avatar}
          <img
            src={person.avatar}
            class="w-20 h-20 sm:w-32 sm:h-32 rounded-full text-left p-1"
            alt={person.name}
          />
        {:else}
          <div class="bg-red-100 w-full h-full rounded-full" />
        {/if}
      </div>
    </div>

    <div class="border border-gray-200 border-t-0 rounded-bl-md rounded-br-md p-2 pt-18">
      <div class="text-2xl font-bold">
        {person.display_name || person.name}
      </div>
      @{person.name}

      {#if person.bio}
        <p>{person.bio}</p>
      {/if}

      <ul>
        <li>{person.published}</li>
      </ul>
    </div>
  </section>
</div>
