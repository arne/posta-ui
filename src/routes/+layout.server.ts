import api from '$lib/api';
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
  const jwt = cookies.get('jwt');
  const site = await api.getSite(jwt || '');
  console.log(site.my_user?.local_user_view.local_user.id);
  return { site };
}) satisfies PageServerLoad;
