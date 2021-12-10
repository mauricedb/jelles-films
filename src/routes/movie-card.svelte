<script>
	export let movieObject;
</script>

<a
href={`/movie/${movieObject.id}-${movieObject.title.replaceAll(' ', '-')}`}
		class="btn text-decoration-none">
<div class="card m-3 movie-card shadow-lg rounded overflow-hidden">
	
	<img 
		src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movieObject.poster_path}`}
		class="card-img-top "
		alt="..."
	/>
	<div class="card-body">
		<h5 class="card-title">{movieObject.title}</h5>
		<p class="card-text">{movieObject.release_date}</p>
			</div>
</div>
</a>

<style>
	.card.movie-card {
		flex-basis: 15rem;
		max-width: 15rem;
		border : 0;
	}
</style>
