import React from "react";
import MovieControls from "./MovieControls";

function MovieCard({ movie,type }) {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      {movie.poster_path ? ( //resmi olmayan filmler için güzel bir görüntü
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`${movie.poster_path}`}
        />
      ) : (
        <div className="filler-poster"></div>
          )}
          <MovieControls movie={ movie} type={type} />
    </div>
  );
}

export default MovieCard;
