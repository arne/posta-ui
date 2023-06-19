import api from '$lib/api';
import { redirect } from '@sveltejs/kit';

import type { Actions, PageServerLoadEvent } from './$types';

export async function load({ cookies }: PageServerLoadEvent) {
  const jwt = cookies.get('jwt');

  return await api.getPostsForFrontpage(jwt);
}

export const actions = {
  logout: async ({ cookies }) => {
    cookies.delete('jwt');
    redirect(303, '/');
  },
} satisfies Actions;
