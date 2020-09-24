import axios from "axios";

export const getMovies = async () => {
  const movies = await axios
    .get("https://yts.mx/api/v2/list_movies.json?limit=50&page=15")
    .then((res) => res.data.data.movies);
  return movies;
};

export const getDetail = async (movieID) => {
  const details = await axios
    .get(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieID}`)
    .then((res) => res.data.data.movie);
  return details;
};