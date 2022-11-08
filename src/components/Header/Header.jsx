import { Outlet, Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}