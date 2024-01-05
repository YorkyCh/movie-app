// MovieCard.jsx
import React from "react";

const MovieCard = ({ title, year, poster, imdbID, setActive, active }) => {
  return (
    <div
      className={
        active
          ? `h-[15rem] border-2 rounded-lg border-indigo-300 flex flex-col items-center shadow-lg shadow-indigo-500`
          : `h-[15rem] border-2 rounded-lg border-gray-300 flex flex-col items-center`
      }
      onClick={() => (active ? setActive(null) : setActive(imdbID))}
    >
      <img
        src={poster === "N/A" ? "/no-image.png" : poster}
        alt="movie poster"
        className="h-[10rem] w-[10rem] mt-2 rounded-md"
      />
      <h1 className="text-lg font-serif text-center text-indigo-400 mt-2">
        {title}
      </h1>
    </div>
  );
};

export default MovieCard;
