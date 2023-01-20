import type { PageLoad } from "./$types";
import { baseUrl,apiKey } from "../../env";
import type { SelectableGenre,Genre } from "./types";

const ENDPOINT = "genre/movie/list"

export const load = (async({fetch}) => {
    const res =  await fetch(baseUrl+ENDPOINT+'?api_key='+apiKey)
    const data = await res.json()
    const genres:SelectableGenre[] = data.genres?.map((genre:Genre)=>{return {...genre,selected:false}})
    
    return {genres}
    
}) satisfies PageLoad;
