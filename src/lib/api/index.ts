import type { CreateComment } from '../../client/types/CreateComment';

import { PUBLIC_API_URL } from '$env/static/public';
import { LemmyHttp } from '../../client/http';
import { Register } from '../../client/types/Register';

const client: LemmyHttp = new LemmyHttp(PUBLIC_API_URL || 'https://posta.no');

const api = {
  addComment: async (obj: CreateComment) => {
    return await client.createComment(obj)
  },
  getCommentsById: async (post_id: number) => await client.getComments({ post_id, max_depth: 10 }),
  getCommunities: async (auth = '') => await client.listCommunities({ limit: 50, auth }),
  getPersonDetails: async (person_id: number) => await client.getPersonDetails({ person_id }), 
  getPostById: async (id: number, auth: string) => await client.getPost({ id, auth }),
  getPostsByCommunityName: async (community_name: string, jwt = '') =>
    await client.getPosts({ community_name, auth: jwt }),
  getPostsForFrontpage: async (jwt: string | undefined) => {
    if (jwt) {
      return await client.getPosts({ auth: jwt, limit: 40, sort: 'Active', type_: 'Subscribed' });
    }
    return await client.getPosts({ limit: 40, sort: 'Active' });
  },
  getSite: async (jwt: string) => await client.getSite({ auth: jwt }),
  login: async (user: string, password: string) =>
    await client.login({ username_or_email: user, password: password }),
  register: async (form: Register) => await client.register(form),
  unsubscribeFromCommunity: async (community_id: number, auth: string, subscribe: boolean) =>
    await client.followCommunity({ community_id, follow: subscribe, auth }),
  voteOnCommentById: async (comment_id: number, auth: string, score: number) =>
    await client.likeComment({ comment_id, score, auth }),
  voteOnPostById: async (post_id: number, auth: string, score: number) =>
    await client.likePost({ post_id, score, auth }),
};

export default api;
