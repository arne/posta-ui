import api from '$lib/api';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
  cookies.set('jwt', '');
  throw redirect('301', '/');
};
