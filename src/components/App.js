import React, { useState, useEffect } from 'react';
import MovieInfo from './MovieInfo';


const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	return (
		<div className='MovieInfo'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} 
		</div>
				//tried to create a new search method, but I didn't get it figured out in time, but looking at the hint I think I should have made a form onSubmit
	)
};

export default App;