import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/moviesApi';
import { Link } from 'react-router-dom';
import { Container, Wrap, Image } from './MovieDetails.styled';
import { BackLink } from 'components/BackLink/BackLink';
import { Suspense } from 'react';
import Loader from 'components/Loading/Loading';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMoviesById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }
  const { original_title, poster_path, vote_average, overview, genres } = movie;
  const backLink = location.state?.from ?? '/movies';

  return (
    <Container>
      <BackLink to={backLink}>Go back </BackLink>
      <Wrap>
        <Image
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={original_title}
        />

        <div>
          <h1>{original_title}</h1>
          <p>User score {Math.round(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        </div>
      </Wrap>
      <div>
        <ul>Additional information</ul>
        <li>
          <Link to={'cast'} state={{ from: backLink }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={'reviews'} state={{ from: backLink }}>
            Reviews
          </Link>
        </li>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};

export default MovieDetails;
