import { NavLink, Outlet, useParams } from 'react-router-dom';

export const TableScreen = () => {
  const { tableId } = useParams<{ tableId: string }>();

  return (
    <div>
      <h3>Table: {tableId}</h3>
      <NavLink to="game">Go to Game</NavLink>
      <Outlet />
    </div>
  );
};
