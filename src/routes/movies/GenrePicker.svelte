<script lang="ts">
	import { browser } from "$app/environment";
	import type { SelectableGenre } from "./types";

    export let genres:SelectableGenre[];
    export let selectedGenres:SelectableGenre[];
    
    $: selectedGenres = genres.filter((genre) => genre.selected);
</script>

<div class="picker">
    <ul>
    {#each genres as genre}
        {#if !genre.selected}
        <li class="unselected" on:click={()=>{genre.selected=true}} on:keydown>{genre.name}</li>
        {:else}
        <li class="selected" on:click={()=>{genre.selected=false}} on:keydown>{genre.name}</li>
        {/if}
    {/each}
    </ul>
</div>

<style>
    li{
        list-style: none;
        display: inline-block;
        padding: 1em;
        margin: 0 10px 1em 10px;
        border-radius: 10%;
    }
    li:hover{
        filter: brightness(50%);
        cursor: pointer;
        transition: all 200ms;
    }
    .unselected{
        background-color: var(--secondary);
    }
    .selected{
        background-color: var(--contrast);
        color: black;
        transition: all 200ms;
    }
</style>
