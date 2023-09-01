import { APIKEY, BASEURL } from '$env/static/private';
import type { SelectableGenre,Genre } from "./types";
import type { PageServerLoad } from './$types';

const ENDPOINT = "genre/movie/list"

export const load = (async({fetch}) => {
    const res =  await fetch(BASEURL+ENDPOINT+'?api_key='+APIKEY)
    const data = await res.json()
    const genres:SelectableGenre[] = data.genres?.map((genre:Genre)=>{return {...genre,selected:false}})
    
    return {genres}
    
}) satisfies PageServerLoad;
