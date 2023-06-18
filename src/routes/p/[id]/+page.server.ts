import api from '$lib/api/index.js';
import { error, Cookies } from '@sveltejs/kit';

export async function load({ params, cookies }: { params: { id: string }; cookies: Cookies }) {
  if (typeof params.id !== 'string') {
    throw error(420, 'Enhance your calm');
  }
  const id = parseInt(params.id);
  const jwt = cookies.get('jwt') || '';

  return { response: await Promise.all([api.getPostById(id, jwt), api.getCommentsById(id)]), id };
}
