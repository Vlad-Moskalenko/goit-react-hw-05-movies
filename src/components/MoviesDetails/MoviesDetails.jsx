import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';

import getMovies from 'components/api/api';

export default function MoviesDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    if (movieId) {
      getMovies(`movie/${movieId}`).then(setMovieDetails);
    }
  }, [movieId]);

  return (
    <div>
      <p>
        <Link to={backLinkHref}>Go Back</Link>
      </p>

      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
        alt={movieDetails.title || movieDetails.name}
      />
      <div>
        <h2>{movieDetails.title || movieDetails.name}</h2>
        <p>User score: {movieDetails.popularity}</p>
        <h3>Overview</h3>
        <p>{movieDetails.overview}</p>
        <h3>Genres</h3>
        <ul>
          {movieDetails.genres > 0 &&
            movieDetails.genres.map(genre => <li>{genre.name}</li>)}
        </ul>
      </div>
      <ul>
        Additional information
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
