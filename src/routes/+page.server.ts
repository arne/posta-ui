import api from '$lib/api';

export async function load() {
  return await api.getAnonFrontpagePosts();
}
