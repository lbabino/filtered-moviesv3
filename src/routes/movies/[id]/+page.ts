import { apiKey, baseUrl } from '../../../env';
import type { MovieDetailsSchema } from '../types';
import type { PageLoad } from './$types';
export const load: PageLoad = async ({ params, fetch }) => {
	const res = await fetch(`${baseUrl}movie/${params.id}?api_key=${apiKey}`);
	const movie = (await res.json()) as MovieDetailsSchema;

	return { movie };
};
