import api from '$lib/api/index.js';
import type { ServerLoadEvent } from '@sveltejs/kit';

export async function load({ cookies }: ServerLoadEvent) {
  const jwt = cookies.get('jwt');
  if (!jwt) {
    return await api.getCommunities();
  }
  return await api.getCommunities(jwt);
}
