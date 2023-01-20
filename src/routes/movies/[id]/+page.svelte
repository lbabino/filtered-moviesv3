<script lang="ts">
	import { baseImgUrl, filesizes } from '../../../env';
import type {MovieDetailsSchema} from '../types'
import type { PageData } from './$types';

export let data:PageData;
const {movie} = data

function formatMoney(number: number) {
		return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}
</script>
<div class="movie-detail-container">
    <div class="title-tag">
        <h2>{movie.title}</h2>
        <i>{movie.tagline}</i>
    </div>
    <div class="image-container">
        <img
        src={`${baseImgUrl}/${filesizes[1]}/${movie.poster_path}`}
        alt={movie.title + 'movie poster'}
        />
    </div>
    
    <div class="details">
        <p>{movie.overview}</p>
        <p><b>Release date: </b>{movie.release_date}</p>
        <p><b>Runtime: </b>{movie.runtime} minutes</p>
        <p><b>Budget: </b>{movie.budget ? formatMoney(movie.budget) : 'unkwnown'}</p>
        <p><b>Revenue: </b>{movie.revenue ? formatMoney(movie.revenue) : 'unkwnown'}</p>
        <p><b>Status: </b>{movie.status}</p>
        <!-- <p>
            <b>Production companies: </b>{movie.production_companies
                .map((company) => company.name)
                .join(', ')}
            </p>
            <p>
        <b>Production countries: </b>{movie.production_countries
            .map((countries) => countries.name)
            .join(', ')}
        </p> -->
        <p><b>Vote average: </b>{movie.vote_average} ( {movie.vote_count} votes)</p>
        <!-- <p><b>Genres: </b>{movie.genres.map((genre) => genre.name).join(', ')}/</p> -->
    </div>
</div>
    
<style>
        img {
		margin-bottom: 2em;
		margin-top: 0;
		width: 400px;
	}
	h2 {
		margin-bottom: 0;
	}
	.title-tag {
		margin-bottom: 2em;
	}
	.details {
		padding-bottom: 2em;
	}
	@media only screen and (max-width: 600px) {
		.details {
			text-align: left;
		}
	}
	@media only screen and (min-width: 600px) {
		.details {
			text-align: left;
			max-width: 50ch;
			margin: 0 auto;
		}
	}
    .movie-detail-container{
        text-align: center;
    }
</style>