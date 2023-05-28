import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

function ResultCard({ movie }) {
  const { addMovieToWatchList, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  const WathedstoredMovie = watched.find((f) => f.id === movie.id);
    const WatchListstoredMovie = watchlist.find((f) => f.id === movie.id)? true : WathedstoredMovie ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? ( //resmi olmayan filmler için güzel bir görüntü
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`${movie.poster_path}`}
            s
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
          <h4 className="release-date">
            IMDB: <b>{movie.vote_average ? movie.vote_average : "-"}</b>
          </h4>
        </div>
        <div className="controls">
          <button
            disabled={WatchListstoredMovie}
            className="btn"
            onClick={() => addMovieToWatchList(movie)}
          >
            Add to WatchList
          </button>
          <button
            disabled={WathedstoredMovie}
            className="btn"
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
