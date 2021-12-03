<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export async function load({ page, fetch }) {
		const response = await fetch('/top-rated-movies.json');
		const body = await response.json();

		return {
			props: { movieArray: body.results }
		};
	}
</script>

<script>
	import MovieCard from './movie-card.svelte';

	export let movieArray = [];
</script>

<h1>top rated movies</h1>

<div class="card-group">
	{#each movieArray as movieObject}<MovieCard {movieObject} />{/each}
</div>

<style>
	.card-group {
		justify-content: space-around;
	}
</style>
