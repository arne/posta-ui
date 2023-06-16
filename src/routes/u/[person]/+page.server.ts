import { LemmyHttp } from 'lemmy-js-client';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	if (typeof params.person !== 'string') {
		throw error(420, 'Enhance your calm');
	}
	const person_id = parseInt(params.person);
	const client: LemmyHttp = new LemmyHttp('https://posta.no');
	const results = await client.getPersonDetails({ person_id });

	return results;
}
