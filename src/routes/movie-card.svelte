<script>
	export let movieObject;
</script>

<div class="card m-3">
	<img src={movieObject.img} class="card-img-top" alt="..." />
	<div class="card-body">
		<h5 class="card-title">{movieObject.name}</h5>
		<p class="card-text">{movieObject.releaseDate}</p>
		<a
			href={`/movie/${movieObject.id}-${movieObject.name.replaceAll(' ', '-')}`}
			class="btn btn-primary">Go somewhere</a
		>
	</div>
</div>

<style>
	.card {
		flex-basis: 15rem;
		max-width: 15rem;
	}
</style>
