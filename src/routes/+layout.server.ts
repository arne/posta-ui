import api from '$lib/api';

export async function load({ cookies }) {
  const jwt = cookies.get('jwt');
  const site = await api.getSite(jwt || '');

  return site.my_user?.local_user_view;
}
