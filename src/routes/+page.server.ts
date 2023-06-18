import api from '$lib/api';
import { Cookies } from '@sveltejs/kit';

export async function load({ cookies }: { cookies: Cookies }) {
  const jwt = cookies.get('jwt');

  return await api.getPostsForFrontpage(jwt);
}
