import api from '$lib/api';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const email = data.get('username_or_email')?.toString() || '';
    if (email === '') {
      return fail(400, { email, missing: true });
    }
    const pass = data.get('password')?.toString() || '';
    let res;
    try {
      res = await api.login(email, pass);
    } catch (e) {
      console.log('error: ', e);
      return fail(400, { email, incorrect: true });
    }
    if (res.jwt !== undefined) {
      cookies.set('jwt', res.jwt, { maxAge: 60 * 60 * 24 * 30 });
      throw redirect(302, '/');
    }
    return fail(400, { email, incorrect: true });
  },
};
