import api from '$lib/api/index.js';
import { error } from '@sveltejs/kit';

export async function load({ params }: { params: { id: string } }) {
  if (typeof params.id !== 'string') {
    throw error(420, 'Enhance your calm');
  }
  const id = parseInt(params.id);

  return { response: await Promise.all([api.getPostById(id), api.getCommentsById(id)]) };
}
