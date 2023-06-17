<script>
  import Post from '$lib/Post.svelte';
  import SingleComment from '$lib/Comments/SingleComment.svelte';
  import { Tabs, TabItem } from '$lib/tabs';
  import SvelteMarkdown from 'svelte-markdown';
  import { Globe, MessagesSquare, User, SquareStack } from 'lucide-svelte';
  export let data;
  // console.log(data.comments[0]);
</script>

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

  <section class="w-80 border border-gray-200 rounded-md p-3 prose">
    {#if data.person_view.person.banner}
      <img src={data.person_view.person.banner} alt="banner" class="w-20 h-10" />
    {/if}

    {#if data.person_view.person.avatar}
      <img
        src={data.person_view.person.avatar}
        alt={data.person_view.person.name}
        class="inline-block h-20 w-20 rounded-full"
      />
    {/if}

    {data.person_view.person.name}

    {#if data.person_view.person.bio}
      <div class="prose">{data.person_view.person.bio}</div>
    {/if}

    <ul>
      <li>{data.person_view.person.published}</li>
    </ul>
  </section>
</div>
