import { APIKEY, BASEURL } from '$env/static/private';
import type { MovieDetailsSchema } from '../types';
import type {PageServerLoad} from './$types';

export const load = (async ({params,fetch}) => {
    const res = await fetch(`${BASEURL}movie/${params.id}?api_key=${APIKEY}`);
    const movie =  await res.json() as MovieDetailsSchema;

    return {movie};
}) satisfies PageServerLoad;