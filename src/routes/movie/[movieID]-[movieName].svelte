<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export async function load({ page, fetch }) {
		const { movieID } = page.params;
		const response = await fetch(`${movieID}.json`);
		const body = await response.json();
		const { movie } = body;

		return {
			props: { movie }
		};
	}
</script>

<script>
	export let movie;
</script>

<form>
	<h1>{movie.title}</h1>
	<label>
		<span> Title: </span>
		<input type="text" bind:value={movie.title} />
	</label>
	<label>
		<span> Overview: </span>
		<textarea type="text" bind:value={movie.overview} rows="5" />
	</label>
</form>
<pre>{JSON.stringify(movie,null, 2)}</pre>

<style>
	label {
		display: flex;
		padding-bottom: 1rem;
	}

	label > span {
		flex-basis: 6rem;
	}

	label > input {
		flex-grow: 1;
	}

	label > textarea {
		flex-grow: 1;
	}
</style>
