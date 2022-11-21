import { fetchCast } from 'services/moviesApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import img from '../../default/coming.jpg';
import {  useLocation } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const location = useLocation();
  console.log(location);

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
      {cast.length > 0 ? cast.map(({ id, original_name, profile_path, character }) => {
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
      })
      : (
        <p>We will add information soon</p>
      )
      }
    </ul>
  );
};

export default Cast;
