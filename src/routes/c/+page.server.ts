import api from '$lib/api/index.js';
import { error } from '@sveltejs/kit';

export async function load() {
  return await api.getCommunities();
}
