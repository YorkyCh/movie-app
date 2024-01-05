import React, { useEffect, useState } from "react";

const Search = ({ gridCol, setMovies }) => {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      if (movie.length < 3) return;
      const response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=be79c82d&s=${movie}`
      );
      const data = await response.json();
      setMovies(data.Search);
    };

    if (movie !== "") {
      fetchMovies();
    }
  }, [movie, setMovies]);

  return (
    <input
      placeholder="Search"
      className={`${gridCol} w-[40%] text-center mx-12 rounded-xl h-20 mt-12 bg-inherit text-2xl border-indigo-300 text-indigo-400 font-serif border-2 shadow-md shadow-indigo-400`}
      onChange={(e) => setMovie(e.target.value)}
    />
  );
};

export default Search;
