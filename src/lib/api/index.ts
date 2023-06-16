import { PUBLIC_API_URL } from '$env/static/public';
import { LemmyHttp } from 'lemmy-js-client';

const client: LemmyHttp = new LemmyHttp(PUBLIC_API_URL);

const api = {
  getPostById: async (id: number) => await client.getPost({ id }),
  getAnonFrontpagePosts: async () => await client.getPosts({ limit: 10 }),
  getPersonDetails: async (person_id: number) => await client.getPersonDetails({ person_id }),
};

export default api;
