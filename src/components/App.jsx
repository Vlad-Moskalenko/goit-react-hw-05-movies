import Header from './Header/Header';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Movies = lazy(() => import('./pages/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Home = lazy(() => import('./pages/Home'));
const MoviesDetails = lazy(() => import('./MoviesDetails/MoviesDetails'));
const NotFound = lazy(() => import('./pages/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
