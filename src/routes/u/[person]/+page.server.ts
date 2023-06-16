import api from '$lib/api/index.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  if (typeof params.person !== 'string') {
    throw error(420, 'Enhance your calm');
  }
  const person_id = parseInt(params.person);

  return await api.getPersonDetails(person_id);
}
