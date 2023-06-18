import api from '$lib/api/index.js';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
  const jwt = cookies.get('jwt');
  const site = await api.getSite(jwt || '');
  if (!site.my_user?.local_user_view) {
    return redirect(303, '/login');
  }
  return site.my_user.local_user_view;
}
