export async function get({query}) {
    const searchedText = query.get('searchedText');


		const response = await fetch(
			`https://api.themoviedb.org/3/search/movie?query=${searchedText}&api_key=${
				import.meta.env.VITE_API_KEY
			}&language=en-US`
		);

		
	return {
		body: 
			await response.json()
		};
}