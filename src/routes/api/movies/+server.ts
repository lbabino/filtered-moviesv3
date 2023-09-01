import { APIKEY, BASEURL } from '$env/static/private';
import type { RequestHandler } from "./$types";

const ENDPOINT = "discover"

export const GET = (async({url,fetch}) => {
    const res = await fetch(BASEURL+ENDPOINT+'/movie?api_key='+APIKEY+url.search.replace("?","&"));
    const data = await res.json();
    const body = JSON.stringify(data)
    
    return new Response(body)

}) satisfies RequestHandler;
