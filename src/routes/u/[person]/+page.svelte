<script>
  import Post from '$lib/Post.svelte';
  import SingleComment from '$lib/Comments/SingleComment.svelte';
  import { Tabs, TabItem } from '$lib/tabs';
  import SvelteMarkdown from 'svelte-markdown';
  import { Globe, MessagesSquare, User, SquareStack } from 'lucide-svelte';

  export let data;
  const [person, posts] = [data.person_view.person, data.posts];
</script>

<svelte:head>
  <title>Posta.no: {person.name}</title>
</svelte:head>

<div class="flex gap-6">
  <main class="flex-auto w-64">
    <Tabs style="underline">
      <TabItem open>
        <div slot="title" class="flex items-center gap-2">
          <Globe class="h-6 w-6" />
          Overview
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400">Overview</p>
      </TabItem>
      <TabItem>
        <div slot="title" class="flex items-center gap-2">
          <SquareStack class="h-6 w-6" />
          Posts
        </div>
        {#each data.posts as post}
          <Post {post} link />
        {/each}
      </TabItem>
      <TabItem>
        <div slot="title" class="flex items-center gap-2">
          <MessagesSquare class="h-6 w-6" />
          Comments
        </div>
        {#each data.comments as comment}
          <div id={`#${comment.comment.id}`} class="mb-4 pb-2 border-b">
            <h3 class="font-bold mb-3">{comment.post.name}</h3>
            <SingleComment {comment} />
          </div>
        {/each}
      </TabItem>
      <TabItem>
        <div slot="title" class="flex items-center gap-2">
          <User class="h-6 w-6" />
          Profile
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400">Profile</p>
      </TabItem>
    </Tabs>
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
        <div class="prose"><SvelteMarkdown source={person.bio} /></div>
      {/if}

      <ul>
        <li>{person.published}</li>
      </ul>
    </div>
  </section>
</div>
