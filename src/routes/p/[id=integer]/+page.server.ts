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
    const post_id = data.get('post_id') as number | null
    const parent_id = data.get('parent_id') as number | null
    const content = data.get('content') as string
    if (!post_id) return
    const response: CreateComment = { auth, post_id, content }
    response.parent_id = parent_id || 0
    return await api.addComment(response)
  }
};
