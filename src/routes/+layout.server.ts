import api from '$lib/api';
import type { LayoutServerLoadEvent } from './$types';

export async function load({ cookies }: LayoutServerLoadEvent) {
  const jwt = cookies.get('jwt');
  const site = await api.getSite(jwt || '');

  return site.my_user?.local_user_view;
}
