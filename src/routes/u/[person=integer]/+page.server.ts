import api from '$lib/api/index.js';

export async function load({ params }) {
  const person_id = parseInt(params.person || '0');

  return await api.getPersonDetails(person_id);
}
