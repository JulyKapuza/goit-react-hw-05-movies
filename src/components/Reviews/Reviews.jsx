import { fetchReviews } from 'services/moviesApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchReviews(movieId).then(({ results }) => {
      setReviews(results);
    });
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <p>
                <b>Author:</b> {author}
              </p>
              <p> {content}</p>
            </li>
          );
        })
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};

export default Reviews;
