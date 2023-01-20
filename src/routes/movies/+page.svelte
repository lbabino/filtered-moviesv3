<script lang="ts">
    //@ts-ignore
    import RangeSlider from "svelte-range-slider-pips";
    import debounce from "just-debounce-it";

    import type { PageData } from './$types';
	import type { MovieSchema, SelectableGenre } from './types';

	import { browser } from '$app/environment';

	import GenrePicker from './GenrePicker.svelte';
    import Movie from './Movie.svelte';
	import { shuffleArray } from './random';
    
    let loading = false;
    
    let minYear = 1910;
    let maxYear = 2023;
    let years=[minYear,maxYear];
    let runtimes=[0,500];
    
    export let data:PageData
    let selectedGenres:SelectableGenre[] = [];

    $: if(browser && selectedGenres){pageNum=1;fetchMovies()}
    $: if(browser && pageNum){fetchMovies()}
    let movies:MovieSchema[] = [];
    //TODO: 'pageNum' nunca debería superar el 'total_pages' que viene de la query
    let pageNum:number = 1;

    async function fetchMovies(){
        loading = true;
        
        const genresQuery = `with_genres=${selectedGenres.map(genre=>genre.id).join(",")}`
        const pageQuery = `page=${pageNum}`
        const dateQuery = `release_date.gte=${years[0]}&release_date.lte=${years[1]}`
        const runtimeQuery = `with_runtime.gte=${runtimes[0]}`
        const query = [genresQuery,pageQuery,dateQuery,runtimeQuery].join("&")

        fetch(`/api/movies?${query}`)
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

<div class="main">
    {#if browser}
    <h4>Years ({years[0]+"-"+years[1]})</h4>
    <div class="slider">
        <RangeSlider on:stop={debounce(()=>fetchMovies(),500)} bind:values={years} range pushy min={1910} max={2023}/>
    </div>
    <h4 class="runtime-header">Runtime ({runtimes[0]+"mins."+"-"+runtimes[1]+"mins."})</h4>
    <i>(Disabled because of broken API)</i>
    <div class="disabled">
    <RangeSlider disabled bind:values={runtimes} range pushy float min={0} max={500}/>
    </div>
    {/if}
    <h4>Genres</h4>
    <GenrePicker genres="{data.genres}" bind:selectedGenres/>
    <h4>
        {#if pageNum>1}
        <span class="pager" on:click={()=>{pageNum--}} on:keydown> 👈</span>
        {/if}
        Page: {pageNum}
        <span class="pager" on:click={()=>{pageNum++}} on:keydown> 👉</span>
    </h4>
    <ul class="movies">
    {#if loading}
        <span aria-busy="true"></span>
    {:else}
        {#each movies as movie}
        <Movie {movie}/> 
        {/each}
    {/if}
    </ul>
</div>

<style>
    i{
        margin-top:0;
        font-size: 0.7rem;
        filter:brightness(45%)
    }
    .runtime-header{
        margin-bottom:0;
        filter:brightness(30%)
    }
    .disabled{
        filter:brightness(20%)
    }
    .slider{
        cursor:pointer !important;
    }
    .slider:hover{
        cursor:pointer !important;
    }
    .main{
        margin-top:2em;
    }
    .pager:hover{
        cursor: pointer;
    }
    .movies{
        text-align: center;
    }
</style>