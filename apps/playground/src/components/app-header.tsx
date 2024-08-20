import { Link } from '@tanstack/react-router';

export const AppHeader = () => {
  return (
    <header data-ui="app-header">
      <Link to="/" className="">
        Home
      </Link>{' '}
      <Link to="/react" className="">
        React
      </Link>{' '}
      <Link to="" className="">
        About
      </Link>{' '}
    </header>
  );
};
