import getMovies from 'components/api/api';
import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getMovies('/trending/all/day').then(data =>
      setTrendingMovies(data.results)
    );
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {trendingMovies.length > 0 && (
        <MoviesList list={trendingMovies} link="movies/" />
      )}
    </>
  );
}
