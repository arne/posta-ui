import api from '$lib/api';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
  register: async ({ cookies, request }) => {
    const data = await request.formData();
    let res;
    const username = data.get('username')?.toString() || '';
    const email = data.get('username_or_email')?.toString() || '';
    if (email === '') {
      return fail(400, { email, missing: true });
    }
    const password = data.get('password')?.toString() || '';
    if (password === '') {
      return fail(400, { password, missing: true });
    }
    const password_verify = data.get('password_verify')?.toString() || '';
    if (password_verify !== password) {
      return fail(400, { password_verify, verify_no_match: true });
    }
    const answer = data.get('answer')?.toString() || '';
    try {
      res = await api.register({
        email: email,
        show_nsfw: true,
        username: username,
        password: password,
        password_verify: password_verify,
        answer: answer,
      });
    } catch (e) {
      console.log('error: ', e);
      return { success: false, error: e };
    }
    if (res.jwt !== undefined) {
      cookies.set('jwt', res.jwt);
      throw redirect(302, '/');
    }
    return { success: false };
  },
} satisfies Actions;
