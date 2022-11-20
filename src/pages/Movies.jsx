import { SearchBox } from 'components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchMoviesByWord } from 'services/moviesApi';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query') ?? '';

  const handleFormSubmit = movieName => {
    const querySearch = movieName;

    if (querySearch.trim() === '') {
      alert('🦄 Enter your request!');
      return;
    }
    setSearchParams({ query: querySearch });
    setMovies([]);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMoviesByWord(query).then(({ results }) => {
      setMovies(results);
    });
  }, [query]);

  return (
    <main>
      <SearchBox onSubmit={handleFormSubmit} />
      <MovieList movies={movies} />
    </main>
  );
};

export default Movies;
