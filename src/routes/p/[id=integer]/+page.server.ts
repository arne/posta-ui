import api from '$lib/api/index.js';
import { CreateComment } from '../../../client/index.js';
import { Cookies, redirect } from '@sveltejs/kit';

export async function load({ params, cookies }) {
  const id = parseInt(params.id);
  const jwt = cookies.get('jwt') || '';

  return {
    response: await Promise.all([api.getPostById(id, jwt), api.getCommentsById(id)]),
    id,
  };
}

async function vote(value: number, cookies: Cookies, req: Request) {
  const jwt = cookies.get('jwt') || '';
  if (jwt === '') throw redirect(302, '/login');
  const url = new URL(req.url);
  const id = parseInt(url.pathname.split('/').pop() || '0');
  api.voteOnPostById(id, jwt, value);
}

export const actions = {
  upvote: async ({ cookies, request }) => {
    await vote(1, cookies, request);
  },
  zero: async ({ cookies, request }) => {
    await vote(0, cookies, request);
  },
  downvote: async ({ cookies, request }) => {
    await vote(-1, cookies, request);
  },
  comment: async ({ cookies, request }) => {
    const auth = cookies.get('jwt') || ''
    const data = await request.formData()

    const res = Object.fromEntries(data)
    res.auth = auth
    res.post_id = parseInt(res.post_id)
    if (res.parent_id) { res.parent_id = parseInt(res.parent_id) }
    if (auth === '') throw new Error("Not authenticated")
    return await api.addComment(res)
  }
};
