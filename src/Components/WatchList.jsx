import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import MovieCard from './MovieCard';


function WatchList() {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">
            Movie to Watch
          </h1>
            <div className="count-pill">
          {watchlist.length} {watchlist.length<2 ? "Movies" : "Movie"}
        </div>
        </div>
      
        {
          watchlist.length > 0 ? (
            <div className="movie-grid">
              {
                watchlist.map((movie) => (
                  <MovieCard movie={ movie} type="watchlist" />
                ))
              }
            </div>
          ) :
            <h2 className="no-movies">You Don't Have A Movie You Want To Watch Yet On Your List!</h2>
        }
      </div>
    </div>
  )
}

export default WatchList