export async function get({params}) {
    const {movieID} = params;

		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${movieID}?api_key=${
				import.meta.env.VITE_API_KEY
			}&language=en-US`
		);

		const movie = await response.json();
		
	return {
		body: {
			movie
		}
	};
}
