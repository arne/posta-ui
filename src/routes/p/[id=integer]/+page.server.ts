import api from '$lib/api/index.js';
import { PageServerLoadEvent } from './$types';

export async function load({ params, cookies }: PageServerLoadEvent) {
  const id = parseInt(params.id);
  const jwt = cookies.get('jwt') || '';

  return {
    response: await Promise.all([api.getPostById(id, jwt), api.getCommentsById(id)]),
    id,
  };
}
