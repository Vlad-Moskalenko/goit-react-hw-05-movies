import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import getMovies from 'components/api/api';

export default function Cast() {
  const { movieId } = useParams();

  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovies(`movie/${movieId}/credits`).then(data => setCredits(data.cast));
  }, [movieId]);

  return (
    <>
      {credits.length > 0 && (
        <ul>
          {credits.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                width="100px"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
