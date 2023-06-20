<script lang="ts">
  import type { PostView } from '../client/types/PostView';
  import dayjs from 'dayjs';

  import relativeTime from 'dayjs/plugin/relativeTime.js';
  import getLocalUrl from '$lib/helpers/getLocalUrl';

  import ConditionalWrapper from '$lib/helpers/ConditionalWrapper.svelte';
  import PostVote from './PostVote.svelte';
  import SvelteMarkdown from 'svelte-markdown';

  dayjs.extend(relativeTime);

  export let post: PostView;
  export let link = false;
  export let outsideCommunity = false;
</script>

<div class="mb-3 border rounded-md overflow-hidden">
  <ConditionalWrapper href={`/p/${post.post.id}`} {link}>
    <div class="content p-2">
      <h1 class="font-semibold text-lg">{post.post.name}</h1>
      {#if post.post.thumbnail_url}
        <img src={post.post.thumbnail_url} alt="Thumbnail" style="width: 100%" />
      {/if}
      {#if post.post.body}
        {#if link}
          <div class="prose dark:prose-invert">
            <SvelteMarkdown
              source={post.post.body.split('\n\n')[0]}
            />{#if post.post.body.split('\n\n').length > 1}<p>
                <a href={`/p/${post.post.id}`}>Read more</a>
              </p>{/if}
          </div>
        {:else}
          <div class="prose dark:prose-invert"><SvelteMarkdown source={post.post.body} /></div>
        {/if}
      {/if}
    </div>
  </ConditionalWrapper>
  {#if post.post.url}
    <a
      href={post.post.url}
      class="p-2 border-t bg-gray-50 dark:bg-transparent border-t pt-3 text-sm block"
    >
      Source: <span class="border-posta-red border-b"
        >{post.post.url.length > 60 ? post.post.url.substring(0, 60) + '…' : post.post.url}</span
      >
    </a>
  {/if}
  <div class="p-2 flex items-center justify-between border-t pt-3 text-sm">
    <div>
      <p>
        by
        <a href={`/u/${post.creator.id}`} class="underline hover:no-underline">
          {post.creator.name}
        </a>
        {#if outsideCommunity}
          to
          <a href={getLocalUrl(post.community)} class="underline hover:no-underline">
            {post.community.title}
          </a>
        {/if}
      </p>
      <ul class="flex items-center gap-2 mt-2">
        <li class="flex gap-1">
          <img src="/up.svg" alt="Vote count" />
          {post.counts.score}
        </li>
        <li class="flex gap-1"><img src="/comment.svg" alt="Downvote" /> {post.counts.comments}</li>
        <li class="flex gap-1">
          <img src="/time.svg" alt={post.counts.published} />
          {dayjs().to(dayjs(post.counts.published))}
        </li>
      </ul>
    </div>
    <PostVote id={post.post.id} vote={post.my_vote} />
  </div>
</div>
