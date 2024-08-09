import { Link } from '@tanstack/react-router';

export const Header = () => {
  return (
    <div role="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/testing">Testing</Link>
        </li>
        <li>
          <Link to="/react-query">React Query</Link>
        </li>
        <li>
          <Link to="/react-context">React Context</Link>
        </li>
        <li>
          <Link to="/react">React</Link>
        </li>
      </ul>
    </div>
  );
};
