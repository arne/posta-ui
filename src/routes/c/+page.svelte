<script lang="ts">
  export let data;

  import { AlignJustify, LayoutGrid } from 'lucide-svelte';

  import Badge from '$lib/Badge.svelte';
  import { Button } from '$lib/button';

  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime.js';
  dayjs.extend(relativeTime);

  import getLocalUrl from '$lib/helpers/getLocalUrl';
</script>

<svelte:head>
  <title>Posta.no: Communities</title>
</svelte:head>

<div>
  <div class="flex justify-between py-2 mb-4 items-center border-b">
    <h1 class="text-xl">{`${data.communities.length} Posta communities`}</h1>
    <div>
      <Button variant="icon" size="icon">
        <AlignJustify class="h-6 w-6" />
      </Button>
      <Button variant="icon" size="icon">
        <LayoutGrid class="h-6 w-6" />
      </Button>
    </div>
  </div>

  <ul class="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-4">
    {#each data.communities as community}
      <li class="overflow-hidden rounded-md border">
        <a href={getLocalUrl(community.community)}>
          <div class="h-14 sm:h-28 overflow-hidden">
            {#if community.community.banner}
              <img
                src={`${community.community.banner}?format=webp&thumbnail=512`}
                alt="Banner"
                class="rounded-tl-md rounded-tr-md w-full h-full object-cover"
              />
            {:else}
              <div class="bg-blight-blue h-28 w-full rounded-tl-md rounded-tr-md" />
            {/if}
          </div>

          <div class="relative">
            <div
              class="w-14 h-14 bg-white rounded-full absolute sm:-top-10 -top-6 sm:left-2 left-2"
            >
              {#if community.community.icon}
                <img
                  src={community.community.icon}
                  alt={community.community.title}
                  class="inline-block h-14 w-14 rounded-full p-0.5"
                />
              {:else}
                <div class="bg-chill-army-green w-full h-full rounded-full" />
              {/if}
            </div>
          </div>

          <div class="p-2 pt-10 sm:pt-6">
            <h4 class="text-md font-medium">
              {community.community.title}
            </h4>

            <div class="flex gap-2">
              <div class="text-posta-red text-sm">
                !{getLocalUrl(community.community).substring(3)}
              </div>
            </div>

            <div class="my-3 gap-2">
              <Badge color="dark" class="font-bold">{`${community.counts.posts} posts`}</Badge>
              <Badge color="dark" class="font-bold"
                >{`${community.counts.subscribers} subscribers`}</Badge
              >
              <Badge color="dark" class="font-bold"
                >{`${community.counts.users_active_month} users/month`}</Badge
              >
            </div>

            <div>
              <time datetime={community.community.updated}>
                {`Updated ${
                  community.community.updated
                    ? dayjs().to(dayjs(community.community.updated))
                    : dayjs().to(dayjs(community.community.published))
                }`}
              </time>
            </div>
          </div>
        </a>
      </li>
    {/each}
  </ul>
</div>
