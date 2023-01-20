<script lang="ts">
	import { browser } from '$app/environment';
	import type { PageData } from './$types';

	import GenrePicker from './GenrePicker.svelte';
	import { shuffleArray } from './random';
	import type { Movie, SelectableGenre } from './types';
    
    let loading = false;
    
    export let data:PageData
    let selectedGenres:SelectableGenre[] = [];

    $: if(browser && selectedGenres){pageNum=1;fetchMovies()}
    $: if(browser && pageNum){fetchMovies()}

    let movies:Movie[] = [];
    //TODO: 'pageNum' nunca debería superar el 'total_pages' que viene de la query
    let pageNum:number = 1;

    async function fetchMovies(){
        loading = true;
        fetch("/api/movies?with_genres="+selectedGenres.map(genre=>genre.id).join(",")+`&page=${pageNum}`)
        .then(res=>{
            res.json()
            .then(data=>{
                loading = false;
                const {results:rawMovies, page} = data
                movies = shuffleArray(rawMovies)
                pageNum = page
            })
        })
        .catch(err=>{loading=false})
    }

    async function nextPage(){
        pageNum
    }
</script>

<style>
    .main{
        margin-top:2em;
    }
    .pager:hover{
        cursor: pointer;
    }
</style>

<div class="main">
    <GenrePicker genres="{data.genres}" bind:selectedGenres/>
    <h4>
        {#if pageNum>1}
        <span class="pager" on:click={()=>{pageNum--}} on:keydown> 👈</span>
        {/if}
        Page: {pageNum}
        <span class="pager" on:click={()=>{pageNum++}} on:keydown> 👉</span>
    </h4>
    {#if loading}
        <span aria-busy="true"></span>
    {:else}
    <ul>
        {#each movies as movie}
        <li>
            {movie.title}
        </li>    
        {/each}
    </ul>
    {/if}
</div>
