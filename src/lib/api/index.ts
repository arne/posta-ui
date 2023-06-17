import { PUBLIC_API_URL } from '$env/static/public';
import { LemmyHttp } from '../../client/http';

const client: LemmyHttp = new LemmyHttp(PUBLIC_API_URL);

const api = {
  getPostById: async (id: number) => await client.getPost({ id }),
  getPostsByCommunityName: async (community_name: string) =>
    await client.getPosts({ community_name }),
  getPostsForFrontpage: async () => await client.getPosts({ limit: 20, sort: 'Hot' }),
  getCommunities: async () => await client.listCommunities({ limit: 50 }),
  getPersonDetails: async (person_id: number) => await client.getPersonDetails({ person_id }),
  getCommentsById: async (post_id: number) => await client.getComments({ post_id, max_depth: 10 }),
};

export default api;
