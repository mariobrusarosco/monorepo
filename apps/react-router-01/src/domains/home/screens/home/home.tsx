import { NavLink } from 'react-router-dom';

export const HomeScreen = () => {
  return (
    <div>
      <h2>Hello, this the Home Page of the App</h2>
      <p>It was made to be accessed when the route is '/' and nothing else!</p>
      <p>
        This could be a point where we would check if a user has a valid token.
        If yes we would redirect it to a "logged" route
      </p>
      <ul>
        <li>
          <NavLink to="with-loaders">With React Router Loaders</NavLink>
        </li>
        <li>
          <NavLink to="with-react-query">With react query</NavLink>
        </li>
      </ul>
    </div>
  );
};
