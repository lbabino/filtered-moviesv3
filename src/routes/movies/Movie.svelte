<script lang="ts">
    import {PUBLIC_BASEIMGURL, PUBLIC_FILESIZES} from '$env/static/public';
	import type { MovieSchema } from './types';

    export let movie:MovieSchema;
</script>

<h3>
    <u>{movie.title}</u> ({movie.release_date?.slice(0, 4)})({movie.original_language})
</h3>
<img
    on:keydown
    loading="lazy"
    width="300px"
    height="450px"
    src={`${PUBLIC_BASEIMGURL}/${PUBLIC_FILESIZES.split(",")[1]}/${movie.poster_path}`}
    alt={movie.title}
/>
<p>{movie.overview}</p>
<a href={'/movies/' + movie.id}><i>More details...</i></a>

<style>
</style>