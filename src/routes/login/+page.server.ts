import api from '$lib/api';
import type { Actions } from './$types';

export const actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();
    try {
      const res = await api.login(
        data.get('username_or_email')?.toString() || '',
        data.get('password')?.toString() || ''
      );
      if (res.jwt !== undefined) {
        cookies.set('jwt', res.jwt);
        return { success: true };
      }
    } catch (e) {
      return { success: false, error: e };
    }
    return { success: false };
  },
} satisfies Actions;
