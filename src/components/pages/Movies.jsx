import getMovies from 'components/api/api';
import MovieList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieName !== '') {
      getMovies(`search/movie`, movieName).then(data =>
        setMoviesList(data.results)
      );
    }
  }, []);

  const onFormSubmit = e => {
    e.preventDefault();

    getMovies(`search/movie`, movieName).then(data =>
      setMoviesList(data.results)
    );
  };

  const onInputChange = name => {
    const nextParams = name !== '' ? { query: name } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          value={movieName}
          onChange={e => onInputChange(e.target.value)}
          name="query"
          type="text"
        />
        <button type="submit">Search</button>
      </form>
      <MovieList list={moviesList} />
    </div>
  );
}
