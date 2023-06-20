import api from '$lib/api/index.js';

export async function load({ cookies }) {
  const jwt = cookies.get('jwt');
  if (!jwt) {
    return await api.getCommunities();
  }
  return await api.getCommunities(jwt);
}
