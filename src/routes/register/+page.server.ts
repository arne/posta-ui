import api from '$lib/api';
import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

// Name has a default value just to display something in the form.
const schema = z.object({
  username: z.string().min(4).max(20),
  email: z.string().email(),
  password: z.string().min(8).max(100),
  password_verify: z.string().min(8).max(100),
  answer: z.string().min(10).max(200),
});

export const load = async () => {
  // Server API:
  const form = await superValidate(schema);

  // Always return { form } in load and form actions.
  return { form };
};

export const actions = {
  default: async ({ request, cookies }) => {
    const form = await superValidate(request, schema);
    if (!form.valid) {
      return fail(400, { form });
    }
    let res;
    try {
      console.log('About to register with', form.data);
      res = await api.register({
        email: form.data.email,
        show_nsfw: true,
        username: form.data.username,
        password: form.data.password,
        password_verify: form.data.password_verify,
        answer: form.data.answer,
      });
    } catch (e) {
      console.log('e ', e);
      fail(400, { form, e });
    }
    if (res?.jwt !== undefined) {
      cookies.set('jwt', res.jwt);
      throw redirect(302, '/');
    }
    return { form };
  },
};
