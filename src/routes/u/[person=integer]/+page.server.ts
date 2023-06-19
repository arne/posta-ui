import api from '$lib/api/index.js';
import { ServerLoadEvent } from '@sveltejs/kit';

export async function load({ params }: ServerLoadEvent) {
  const person_id = parseInt(params.person || '0');

  return await api.getPersonDetails(person_id);
}
