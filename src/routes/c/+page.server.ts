import api from '$lib/api/index.js';

export async function load() {
  return await api.getCommunities();
}
