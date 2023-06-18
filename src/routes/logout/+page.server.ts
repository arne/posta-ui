import { Cookies, redirect } from '@sveltejs/kit';

export async function load({ cookies }: { cookies: Cookies }) {
  cookies.set('jwt', '');
  return redirect(301, '/');
}
