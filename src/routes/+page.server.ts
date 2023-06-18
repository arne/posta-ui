import api from '$lib/api';
import { Cookies } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export async function load({ cookies }: { cookies: Cookies }) {
  const jwt = cookies.get('jwt');

  return await api.getPostsForFrontpage(jwt);
}

export const actions = {
  logout: async ({ cookies }) => {
    cookies.delete('jwt');
    redirect(303, '/');
  },
} satisfies Actions;
