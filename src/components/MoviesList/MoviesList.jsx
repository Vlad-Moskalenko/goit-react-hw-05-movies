import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function MovieList({ list, link = '' }) {
  const location = useLocation();

  return (
    <ul>
      {list.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={link + id} state={{ from: location }}>
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
