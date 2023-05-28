import React, { useContext, useState } from "react";
import ResultCard from "./ResultCard";
import mainImage from "../Assets/mainİmage.jpeg"

function Add() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  console.log(results);

  function onChange(e) {
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          //Anlatımdaki projede bu yüzde hata veriyordu ama bu projede hata vermedi, Ben yine de ekledim.
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  }
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img src={mainImage} />
          <div className="titles">
            <h1>Welcome To Movie Heaven</h1>
            <h2>
              Millions of movies, TV shows and people to discover.
              <br /> Discover now.
            </h2>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              onChange={onChange}
              placeholder="Search for movie and TV series."
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie, i) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Add;
