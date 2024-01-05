import React from "react";

const MovieRatingCard = ({ data }) => {
  console.log(data);

  if (!data) return null;

  return (
    <div className="flex flex-col justify-center items-center gap-5 h-[55rem]">
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-[20rem] h-[30rem] rounded-lg shadow-2xl shadow-indigo-700"
          src={data.Poster}
          alt={data.Title}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-semibold text-center text-indigo-500">
          {data.Title}
        </h1>
        {/* Rating Component */}
      </div>
    </div>
  );
};

export default MovieRatingCard;
