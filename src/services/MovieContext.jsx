import React, { createContext, useState } from "react";

// Create the MovieContext
export const MovieContext = createContext();

// Create the MovieProvider component
export const MovieProvider = ({ children }) => {
  // State to hold the movie data
  const [movies, setMovies] = useState([]);

  // Function to update the movie data
  const updateMovies = (newMovies) => {
    setMovies(newMovies);
  };

  // Provide the movie data and update function to the children components
  return (
    <MovieContext.Provider value={{ movies, updateMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
