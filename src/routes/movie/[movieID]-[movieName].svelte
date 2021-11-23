
<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ params }) {
		return {
			props: {

			}
		};
	}
</script>

<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let movieID = $page.params.movieID;
	let movie = null

	const pi = 3.14;

	async function getMovie() {		
	const response = await fetch(`${movieID}.json`);

		const body = await response.json();
		movie = body.movie
	}

	onMount(getMovie);
</script>

<h1>{movie?.title}</h1>
<h2 class="rood">{$page.params.movieID}</h2>
{pi}

<style>
	.rood {
		color: red;
	}
</style>
