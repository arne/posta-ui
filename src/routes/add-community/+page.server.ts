import api from '$lib/api';

export const actions = {
  search: async ({ cookies, request }) => {
    cookies.delete('jwt');
    const auth = cookies.get('jwt');
    const form = await request.formData()
    const q = form.get('search') as string
    const res = await api.search({ auth, q });
    console.log(q)
    console.log(res)
    return res
  },
};
