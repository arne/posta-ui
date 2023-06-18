<script>
  export let data;

  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime.js';
  dayjs.extend(relativeTime);

  import getLocalUrl from '$lib/helpers/getLocalUrl';

  /*
  {
    community: {
      id: 16,
      name: 'posta',
      title: 'Posta',
      description: 'Community for discussions about this Lemmy instance.',
      removed: false,
      published: '2023-06-11T15:20:53.056486',
      updated: '2023-06-11T16:55:49.345379',
      deleted: false,
      nsfw: false,
      actor_id: 'https://posta.no/c/posta',
      local: true,
      icon: 'https://posta.no/pictrs/image/542e7893-f4de-452c-a364-91cf0e68160a.jpeg',
      banner: 'https://posta.no/pictrs/image/ca0c521b-40d3-4a2b-adef-a2513ac6865c.png',
      hidden: false,
      posting_restricted_to_mods: false,
      instance_id: 1
    },
    subscribed: 'NotSubscribed',
    blocked: false,
    counts: {
      id: 10,
      community_id: 16,
      subscribers: 2,
      posts: 1,
      comments: 2,
      published: '2023-06-11T15:20:53.056486',
      users_active_day: 1,
      users_active_week: 3,
      users_active_month: 3,
      users_active_half_year: 3,
      hot_rank: 1
    }
  }
  */
</script>

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
                  ? dayjs().to(dayjs(community.community.updated))
                  : dayjs().to(dayjs(community.community.published))}</time
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
