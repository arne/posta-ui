import api from '$lib/api';
import { redirect } from '@sveltejs/kit';

export const actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();
    let res;
    try {
      res = await api.login(
        data.get('username_or_email')?.toString() || '',
        data.get('password')?.toString() || ''
      );
    } catch (e) {
      console.log('error: ', e);
      return { success: false, error: e };
    }
    if (res.jwt !== undefined) {
      cookies.set('jwt', res.jwt, { maxAge: 60 * 60 * 24 * 30 });
      throw redirect(302, '/');
    }
    return { success: false };
  },
};
