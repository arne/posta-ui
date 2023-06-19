import api from '$lib/api/index.js';
import { ServerLoadEvent, error, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export async function load({ cookies, params }: ServerLoadEvent) {
  const jwt = cookies.get('jwt');
  if (typeof params.community !== 'string') {
    throw error(420, 'Enhance your calm');
  }

  return {
    content: await api.getPostsByCommunityName(params.community, jwt),
    slug: params.community,
  };
}

export const actions = {
  updatesub: async ({ cookies, request }) => {
    const data = await request.formData();
    const subscribe = data.get('subscribe') === 'true';
    const community = data.get('communityId') as string;
    const redirecturl = data.get('redirect') as string;
    const jwt = cookies.get('jwt') || '';

    await api.unsubscribeFromCommunity(parseInt(community), jwt, subscribe);
    throw redirect(303, redirecturl);
  },
} satisfies Actions;
