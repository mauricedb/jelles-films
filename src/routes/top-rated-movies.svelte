<script>
	import { onMount } from 'svelte';
	import MovieCard from './movie-card.svelte';

	let movieArray = [];

	async function getMovies() {
		const response = await fetch('/top-rated-movies.json');

		const data = await response.json();

		movieArray = data.results;
	}

	onMount(getMovies);
</script>

<header>
	<h1>top rated movies</h1>
</header>

<div class="card-group">
	{#each movieArray as movieObject}<MovieCard {movieObject} />{/each}
</div>
