import api from '$lib/api/index.js';
import { error } from '@sveltejs/kit';

export async function load({ params }: { params: { community: string } }) {
  if (typeof params.community !== 'string') {
    throw error(420, 'Enhance your calm');
  }

  return await api.getPostsByCommunityName(params.community);
}
