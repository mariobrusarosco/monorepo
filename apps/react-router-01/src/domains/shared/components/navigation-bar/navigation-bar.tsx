import { NavLink } from 'react-router-dom';

export const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="with-loaders">With React Router Loaders</NavLink>
        </li>
        <li>
          <NavLink to="with-react-query">With react query</NavLink>
        </li>
      </ul>
    </nav>
  );
};
