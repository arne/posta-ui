import api from '$lib/api';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
  const jwt = cookies.get('jwt');

  return await api.getPostsForFrontpage(jwt);
}

export const actions = {
  logout: async ({ cookies }) => {
    cookies.delete('jwt');
    redirect(303, '/');
  },
};
