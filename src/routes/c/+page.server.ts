import api from '$lib/api/index.js';
import type { Cookies } from '@sveltejs/kit';

export async function load({ cookies }: { cookies: Cookies }) {
  const jwt = cookies.get('jwt');
  if (!jwt) {
    return await api.getCommunities();
  }
  return await api.getCommunities(jwt);
}
