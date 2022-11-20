import { fetchCast } from 'services/moviesApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import img from '../../default/coming.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCast(movieId).then(({ cast }) => {
      setCast(cast);
    });
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <ul>
      {cast.map(({ id, original_name, profile_path, character }) => {
        return (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : img
              }
              alt={original_name}
            />
            <p>
              <b>{original_name}</b>
            </p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
