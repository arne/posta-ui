<script>
  export let data;

  import relativeDate from '$lib/helpers/relativeDate';
  import getLocalUrl from '$lib/helpers/getLocalUrl';
</script>

<svelte:head>
  <title>Posta.no: Communities</title>
</svelte:head>

<div>
  <ul class="grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-4 xl:gap-x-4">
    {#each data.communities as community}
      <li class="overflow-hidden rounded-md border border-gray-200">
        <a
          href={community.community.local
            ? community.community.actor_id
            : getLocalUrl(community.community.actor_id)}
        >
          <div
            class="flex items-center gap-x-4 border-b border-gray-200 bg-gray-50 p-3 bg-[url('{community
              .community.banner}')]"
          >
            <img
              src={community.community.icon}
              alt={community.community.title}
              class="inline-block h-10 w-10 rounded-full"
            />
            <div class="text-sm font-medium leading-6 text-gray-900">
              {community.community.title}
            </div>
          </div>
        </a>
        <dl class="-my-3 divide-y divide-gray-200 px-2 py-4 text-sm leading-6">
          <div class="flex justify-between gap-x-4 py-1">
            <dt class="text-gray-500">Updated</dt>
            <dd class="text-gray-700">
              <time datetime={community.community.updated}
                >{community.community.updated
                  ? relativeDate(community.community.updated)
                  : relativeDate(community.community.published)}</time
              >
            </dd>
          </div>

          <div class="flex justify-between gap-x-4 py-1">
            <dt class="text-gray-500">Subscribers</dt>
            <dd class="flex items-start gap-x-2">
              <div class="font-medium text-gray-900">{community.counts.subscribers}</div>
            </dd>
          </div>

          <div class="flex justify-between gap-x-4 py-1">
            <dt class="text-gray-500">Posts</dt>
            <dd class="flex items-start gap-x-2">
              <div class="font-medium text-gray-900">{community.counts.posts}</div>
            </dd>
          </div>
        </dl>
      </li>
    {/each}
  </ul>
</div>
