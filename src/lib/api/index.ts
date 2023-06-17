import { PUBLIC_API_URL } from '$env/static/public';
import { LemmyHttp } from 'lemmy-js-client';

const client: LemmyHttp = new LemmyHttp(PUBLIC_API_URL);

const api = {
  getPostById: async (id: number) => await client.getPost({ id }),
  getAnonFrontpagePosts: async () => await client.getPosts({ limit: 10 }),
  getCommunities: async () => await client.listCommunities({ limit: 50 }),
  getPersonDetails: async (person_id: number) => await client.getPersonDetails({ person_id }),
  getCommentsById: async (post_id: number) => await client.getComments({ post_id, max_depth: 10 }),
};

export default api;
