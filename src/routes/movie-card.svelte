<script>
	export let movieObject;
</script>

<div class="card m-3 movie-card">
	<img
		src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movieObject.poster_path}`}
		class="card-img-top"
		alt="..."
	/>
	<div class="card-body">
		<h5 class="card-title">{movieObject.title}</h5>
		<p class="card-text">{movieObject.release_date}</p>
		<a
			href={`/movie/${movieObject.id}-${movieObject.title.replaceAll(' ', '-')}`}
			class="btn btn-primary">Go somewhere</a
		>
	</div>
</div>

<style>
	.card.movie-card {
		flex-basis: 15rem;
		max-width: 15rem;
	}
</style>
