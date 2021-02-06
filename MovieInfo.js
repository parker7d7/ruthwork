import React from 'react';
const MovieInfo = props => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div>
					<img src={movie.Poster} alt="movie"></img>
				</div>
			))}
		</>
	);
};

export default MovieInfo;

// <div className="column">
// 	<h1>Title: {props.movie.Title}</h1>
// 	<h2>Year: {props.movie.Year}</h2>
// 	<img src={props.movie.Poster} alt={props.movie.Title} />
// 	<h3>Genre: {props.movie.Genre}</h3>
// 	<h4>Plot: {props.movie.Plot}</h4>
// </div>
