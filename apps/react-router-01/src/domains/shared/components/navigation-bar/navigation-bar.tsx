import { NavLink } from 'react-router-dom';

export const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Hpme</NavLink>
        </li>
        <li>
          <NavLink to="/tables">Tables</NavLink>
        </li>
      </ul>
    </nav>
  );
};
