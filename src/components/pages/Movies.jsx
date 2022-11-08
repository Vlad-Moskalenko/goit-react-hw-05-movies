import getMovies from 'components/api/api';
import MovieList from 'components/MoviesList/MoviesList';
import { useState } from 'react';

export default function Movies() {
  const [moviesList, setMoviesList] = useState([]);

  const onFormSubmit = e => {
    e.preventDefault();

    getMovies(`search/movie`, e.target.elements.query.value).then(data =>
      setMoviesList(data.results)
    );
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input name="query" type="text" />
        <button type="submit">Search</button>
      </form>
      <MovieList list={moviesList} />
    </div>
  );
}
