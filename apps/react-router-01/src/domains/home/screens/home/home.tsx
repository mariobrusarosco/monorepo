import { NavLink } from 'react-router-dom';

export const HomeScreen = () => {
  return (
    <div>
      <h2>Home Screen</h2>
      <NavLink to="/tables">Go to Tables</NavLink>
    </div>
  );
};
