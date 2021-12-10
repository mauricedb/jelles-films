<script>
	import MovieCard from './movie-card.svelte';
	let searchedText = 'good';
	let movieArray = [];

	async function goSearch() {
		const response = await fetch(`search-movies.json?searchedText=${searchedText}`);
		const body = await response.json();
		movieArray = body.results;
	}

	function sortByPopular() {
		movieArray = movieArray.sort(function (a, b) {
			return b.popularity-a.popularity;
		});
	}
	function sortByDate() {
		movieArray = movieArray.sort(function (a, b) {
			return b.release_date.localeCompare(a.release_date);
		});
	}
	function sortByRating() {
		movieArray = movieArray.sort(function (a, b) {
			return b.vote_average-a.vote_average;
		});
	}
	function sortByTitle() {
		movieArray = movieArray.sort(function (a, b) {
			return a.title.localeCompare(b.title);
		});
	}
</script>

<h1>Search movies</h1>

<form on:submit|preventDefault={goSearch} class="search">
	<input type="search" bind:value={searchedText} /><button type="submit">search</button>
</form>

{#if movieArray.length}
<div class='mt-3'>
	<button class='btn btn-light' on:click={sortByDate}>Datum</button>
	<button class='btn btn-light' on:click={sortByPopular}>Populariteit</button>
	<button class='btn btn-light' on:click={sortByRating}>Rating</button>
	<button class='btn btn-light' on:click={sortByTitle}>Titel</button>
</div>
{/if}

<div class="card-group">
	{#each movieArray as movieObject}<MovieCard {movieObject} />{/each}
</div>

<style>
	.search {
		display: flex;
		flex-direction: row;
	}
	.search input {
		flex-grow: 1;
	}
	.card-group {
		justify-content: space-around;
	}
</style>
