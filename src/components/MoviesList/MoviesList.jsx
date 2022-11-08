import { Link } from 'react-router-dom';

export default function MovieList({ list, link = '' }) {
  return (
    <ul>
      {list.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={link + id}>{title || name}</Link>
        </li>
      ))}
    </ul>
  );
}
