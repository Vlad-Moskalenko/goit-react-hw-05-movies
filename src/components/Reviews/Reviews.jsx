import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getMovies from 'components/api/api';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovies(`/movie/${movieId}/reviews`).then(data =>
      setReviews(data.results)
    );
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
