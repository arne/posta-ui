import { LemmyHttp } from 'lemmy-js-client';

const client: LemmyHttp = new LemmyHttp('http://localhost:8536');
const results = await client.getPosts({ limit: 10 });
export async function load() {
	return results;
}
