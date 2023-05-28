import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

function MovieControls({ movie, type }) {
  const { RemoveMovieFromWatchList, addMovieToWatchedFromWatchlist,RemoveMovieFromWatched,moveToWatchlist } =
    useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => addMovieToWatchedFromWatchlist(movie)}
          >
            <i className="fa-fw far fa-eye"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => RemoveMovieFromWatchList(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
       {type === "watched" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => moveToWatchlist(movie)}
          >
            <i className="fa-fw far fa-eye-slash"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => RemoveMovieFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
}

export default MovieControls;
