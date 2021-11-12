<script>
	import { page } from '$app/stores';
	let movieName = $page.params.movieName;

	const pi = 3.14;
</script>

<h1>{movieName}</h1>
<h2 class="rood">{$page.params.movieID}</h2>
{pi}

<style>
	.rood {
		color: red;
	}
</style>
