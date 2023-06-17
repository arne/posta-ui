import { PUBLIC_API_URL } from '$env/static/public';

function encodeGetParams<BodyType extends object>(p: BodyType): string {
  return Object.entries(p)
    .filter((kv) => !!kv[1])
    .map((kv) => kv.map(encodeURIComponent).join('='))
    .join('&');
}

const api = {
  get: async (url: string, options: any) => {
    const endpoint = `${PUBLIC_API_URL}/api/v3/${url}?${encodeGetParams(options.form)}`;
    console.log('Getting from ' + endpoint);
    const res = await fetch(endpoint, options);
    return res.json();
  },
  getPostById: async (id: number) => {
    return await api.get('post', { form: { id: id.toString() } });
  },
  getPostsForFrontpage: async () => {
    return await api.get('post/list', { form: { sort: 'Hot', limit: '10' } });
  }, //await client.getPosts({ limit: 10 }),
  getCommunities: async () => {
    return await api.get('community/list', { form: { limit: '50' } });
  }, //await client.listCommunities({ limit: 50 }),
  getPersonDetails: async (person_id: number) => {
    return await api.get('user', { form: { person_id: person_id.toString() } });
  },
  getCommentsById: async (post_id: number) => {
    return await api.get('comment/list', {
      form: { post_id: post_id.toString(), max_depth: '10' },
    });
  },
};

export default api;
