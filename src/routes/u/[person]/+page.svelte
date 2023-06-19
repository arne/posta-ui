<script lang="ts">
  import Post from '$lib/Post.svelte';
  import SingleComment from '$lib/Comments/SingleComment.svelte';
  import { Tabs, TabItem } from '$lib/tabs';
  import Badge from '$lib/Badge.svelte';

  import SvelteMarkdown from 'svelte-markdown';
  import { Cake, Globe, MessagesSquare, SquareStack } from 'lucide-svelte';

  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime.js';
  dayjs.extend(relativeTime);

  export let data;
  const [person, comments, counts, posts] = [
    data.person_view.person,
    data.comments,
    data.person_view.counts,
    data.posts,
  ];
</script>

<svelte:head>
  <title>Posta.no: {person.name}</title>
</svelte:head>

<div class="flex flex-col gap-6 md:flex-row">
  <main class="flex-auto md:w-64 order-2 md:order-1">
    <Tabs style="underline">
      <TabItem open>
        <div slot="title" class="flex items-center gap-2">
          <Globe class="h-4 w-4" />
          Overview
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400">Overview</p>
      </TabItem>
      <TabItem>
        <div slot="title" class="flex items-center gap-2">
          <SquareStack class="h-4 w-4" />
          Posts
        </div>
        {#each posts as post}
          <Post {post} link outsideCommunity />
        {/each}
      </TabItem>
      <TabItem>
        <div slot="title" class="flex items-center gap-2">
          <MessagesSquare class="h-4 w-4" />
          Comments
        </div>
        {#each comments as comment}
          <div id={`#${comment.comment.id}`} class="mb-4 pb-2 border-b">
            <a href={comment.post.ap_id}><h3 class="font-bold mb-3">{comment.post.name}</h3></a>
            <SingleComment {comment} />
          </div>
        {/each}
      </TabItem>
    </Tabs>
  </main>

  <section class="md:w-80 order-1 md:order-2">
    <div class="h-12 sm:h-32 overflow-hidden">
      {#if person.banner}
        <img
          src={`${person.banner}?format=webp&thumbnail=512`}
          alt="Banner"
          class="rounded-tl-md rounded-tr-md w-full h-full object-cover"
        />
      {:else}
        <div class="bg-chill-army-green h-32 w-full rounded-tl-md rounded-tr-md" />
      {/if}
    </div>
    <div class="relative">
      <div
        class="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full absolute sm:-top-10 -top-6 sm:left-2 left-2"
      >
        {#if person.avatar}
          <img
            src={`${person.avatar}?format=webp&thumbnail=200`}
            class="w-20 h-20 sm:w-24 sm:h-24 rounded-full text-left p-0.5"
            alt={person.name}
          />
        {:else}
          <div class="bg-blight-blue w-full h-full rounded-full" />
        {/if}
      </div>
    </div>

    <div class="border border-t-0 rounded-bl-md rounded-br-md p-2 pt-16">
      <h4 class="text-xl font-medium">
        {person.display_name || person.name}
      </h4>

      <div class="flex gap-2">
        <div class="text-posta-red text-sm">
          @{person.name}
        </div>

        {#if person.admin}
          <Badge color="dark" class="font-bold">admin</Badge>
        {/if}
      </div>

      {#if person.bio}
        <div class="mt-3"><SvelteMarkdown source={person.bio} /></div>
      {/if}

      <div class="my-3 flex gap-2">
        <Badge color="dark" class="font-bold">{`${counts.post_count} posts`}</Badge>
        <Badge color="dark" class="font-bold">{`${counts.comment_count} comments`}</Badge>
      </div>

      <div>{`Joined ${dayjs().to(dayjs(person.published))}`}</div>

      <div class="flex items-center gap-1">
        <Cake class="w-5 h-5 hover:text-yellow-700" />
        {`Cake day: ${dayjs(person.published).format('MMM DD, YYYY')}`}
      </div>
    </div>
  </section>
</div>
