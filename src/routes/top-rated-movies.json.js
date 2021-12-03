export async function get() {
	const pages = [1, 2, 3, 4, 5];

	const resultPromises = pages.map(async (page) => {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${
				import.meta.env.VITE_API_KEY
			}&language=en-US&page=${page}`
		);

		const data = await response.json();
		return data.results;
	});

	const results = await Promise.all(resultPromises);
	const movies = results.flatMap((e) => e);

	return {
		body: {
			results: movies
		}
	};
}
