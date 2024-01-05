import React from "react";

const Search = ({ gridCol }) => {
  return (
    <input
      placeholder="Search"
      className={`${gridCol} text-center mx-12 rounded-xl h-20 mt-12 bg-inherit text-2xl text-indigo-400 font-serif border-2`}
    />
  );
};

export default Search;
