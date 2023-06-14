import { LemmyHttp } from 'lemmy-js-client';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	if (typeof params.id !== 'string') {
		throw error(420, 'Enhance your calm');
	}
	const id = parseInt(params.id);
	const client: LemmyHttp = new LemmyHttp('http://localhost:8536');
	const results = await client.getPost({ id: id });
	return results;
}
