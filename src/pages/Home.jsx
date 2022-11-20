import { fetchMoviesTrend } from '../services/moviesApi';
import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [moviesTrend, setMoviesTrend] = useState(null);

  useEffect(() => {
    try {
      const response = fetchMoviesTrend();
      response.then(({ results }) => {
        setMoviesTrend(results);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {moviesTrend && <MovieList movies={moviesTrend} />}
    </main>
  );
};

export default Home;
