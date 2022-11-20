import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'bc4500f3e002eaa279df91f9e5a7b7d1';

export async function fetchMoviesTrend() {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
}

export async function fetchMoviesByWord(searchQuery) {
  const response = await axios(
    `/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1`
  );
  return response.data;
}

export async function fetchMoviesById(movieId) {
  const response = await axios(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

export async function fetchCast(movieId) {
  const response = await axios(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

export async function fetchReviews(movieId) {
  const response = await axios(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
}
