import api from '$lib/api';
import type { Cookies } from '@sveltejs/kit';

export async function load({ cookies }: { cookies: Cookies }) {
  const jwt = cookies.get('jwt');
  const site = await api.getSite(jwt || '');

  return site.my_user?.local_user_view;
}
