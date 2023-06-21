import api from '$lib/api/index.js';
import { Cookies, error, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export async function load({
  cookies,
  params,
}: {
  params: { community: string };
  cookies: Cookies;
}) {
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
    // const redirecturl = data.get('redirect') as string;
    const jwt = cookies.get('jwt') || '';
    if (jwt === '') throw redirect(302, '/login');
    await api.unsubscribeFromCommunity(parseInt(community), jwt, subscribe);
  },
} satisfies Actions;
