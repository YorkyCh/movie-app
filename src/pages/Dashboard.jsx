import React, { useState } from "react";
import MovieCard from "../features/movies/MovieCard";
import SearchMovie from "../features/movies/SearchMovie";
import { MovieContext } from "../services/MovieContext";

const Dashboard = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovie, setActiveMovie] = useState(null);

  return (
    <MovieContext.Provider value={{ movies, updateMovies: setMovies }}>
      <div className="grid row-span-1 grid-cols-2">
        <SearchMovie gridCol={"col-span-2"} setMovies={setMovies} />
        {/*   */}
        <div className="grid row-span-4 col-span-1 grid-cols-2 mt-10">
          {/*  */}
          <div className="grid grid-cols-3 grid-rows-auto col-span-2 gap-2 ml-2 max-h-[38rem]">
            {movies &&
              movies.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  imdbID={movie.imdbID}
                  setActive={setActiveMovie}
                  active={activeMovie === movie.imdbID}
                />
              ))}
          </div>
          {/*  */}
        </div>

        {/*  */}
        <div className="fixed top-32 left-[50%] min-h-[80%] w-[48%] mx-4 mt-10 border-2 border-gray-400 rounded-lg shadow-lg shadow-gray-500">
          {/* Movie Rating Card*/}
        </div>
        {/*  */}
      </div>
    </MovieContext.Provider>
  );
};

export default Dashboard;
