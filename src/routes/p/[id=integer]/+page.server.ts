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

async function vote(value: number, cookies: Cookies, req: Request, type = 'post') {
  const form = await req.formData();
  const id: number = parseInt(form.get('id') as unknown as string);
  const jwt = cookies.get('jwt') || '';
  if (jwt === '') throw redirect(302, '/login');
  if (type === 'post') await api.voteOnPostById(id, jwt, value);
  if (type === 'comment') console.log(await api.voteOnCommentById(id, jwt, value));
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
    const auth = cookies.get('jwt') || '';
    const data = await request.formData();

    const res = Object.fromEntries(data);
    res.auth = auth;
    if (auth === '') throw new Error('Not authenticated');
    return await api.addComment({
      content: res.content.toString(),
      post_id: parseInt(res.post_id.toString()),
      parent_id: res.parent_id === undefined ? undefined : parseInt(res.parent_id.toString()),
      auth,
    });
  },
  ucomment: async ({ cookies, request }) => {
    await vote(1, cookies, request, 'comment');
  },
  zcomment: async ({ cookies, request }) => {
    await vote(0, cookies, request, 'comment');
  },
  dcomment: async ({ cookies, request }) => {
    await vote(-1, cookies, request, 'comment');
  },
};
