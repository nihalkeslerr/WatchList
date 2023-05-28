import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import MovieCard from "./MovieCard";

function Watched() {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Movies Watched</h1>
          <div className="count-pill">
            {watched.length} {watched.length < 2 ? "Movies" : "Movie"}
          </div>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie, i) => (
              <MovieCard key={i} movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">
            You Don't Have A Movie You Want To Watch Yet On Your List!
          </h2>
        )}
      </div>
    </div>
  );
}

export default Watched;
