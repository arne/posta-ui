import api from '$lib/api/index.js';

export async function load({ params, cookies }) {
  const id = parseInt(params.id);
  const jwt = cookies.get('jwt') || '';

  return {
    response: await Promise.all([api.getPostById(id, jwt), api.getCommentsById(id)]),
    id,
  };
}
