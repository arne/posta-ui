import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
  cookies.set('jwt', '');
  return redirect(301, '/');
}
