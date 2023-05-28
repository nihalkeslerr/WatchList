import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext();

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const RemoveMovieFromWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVİE_FROM_WATCHLIST", payload: id });
  }

  const addMovieToWatchedFromWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED_FROM_WATCHLIST", payload: movie });
    
  }
  const RemoveMovieFromWatched = (id) => {
    dispatch({ type: "REMOVE_MOVİE_FROM_WATCHED", payload: id });
  }
  const moveToWatchlist = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  }

  console.log(state);

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchList,
        addMovieToWatched,
        RemoveMovieFromWatchList,
        addMovieToWatchedFromWatchlist,
        RemoveMovieFromWatched,
        moveToWatchlist,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
