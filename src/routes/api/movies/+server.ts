import { apiKey, baseUrl } from "../../../env";
import type { RequestHandler } from "./$types";

const ENDPOINT = "discover"

export const GET = (async({url,fetch}) => {
    const res = await fetch(baseUrl+ENDPOINT+'/movie?api_key='+apiKey+url.search.replace("?","&"));
    const data = await res.json();

    const body = JSON.stringify(data)
    const resp = new Response(body)
    
    return resp
}) satisfies RequestHandler;
