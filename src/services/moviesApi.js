import axios from "axios";

const KEY = "f84fc31d";

export const getMovie = async (movie) => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=f84fc31d&s=${movie}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
