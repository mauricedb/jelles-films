<script>
	import MovieCard from './movie-card.svelte';

	let movieArray = [
		{
			id: 1,
			name: 'Burn the Stage: The Movie',
			releaseDate: 'nov 15 2018',
			img: 'https://www.themoviedb.org/t/p/w220_and_h330_face/pJKy1yvnKh8UjcuYeG3Rt35xHFA.jpg'
		},
		{
			id: 2,
			name: 'Dilwale Dulhania Le Jayenge',
			releaseDate: 'nov 15 2018',
			img: 'https://www.themoviedb.org/t/p/w220_and_h330_face/2CAL2433ZeIihfX1Hb2139CX0pW.jpg'
		},
		{
			id: 3,
			name: 'The Shawshank Redemption',
			releaseDate: 'nov 15 2018',
			img: 'https://www.themoviedb.org/t/p/w220_and_h330_face/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'
		},
		{
			id: 3,
			name: 'The Shawshank Redemption',
			releaseDate: 'nov 15 2018',
			img: 'https://www.themoviedb.org/t/p/w220_and_h330_face/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'
		}
	];
</script>

<header>
	<h1>top rated movies</h1>
</header>

<div class="card-group">
	{#each movieArray as movieObject}<MovieCard {movieObject} />{/each}
</div>
