import {
  NavLink,
  Outlet,
  useLoaderData,
  useOutletContext,
  useParams,
  useRouteLoaderData,
} from 'react-router-dom';

export const TableScreen = () => {
  const { tableId } = useParams<{ tableId: string }>();
  const routeData = useLoaderData(); // This will be undefined unless we use the loader for this route
  const parentRouteData = useRouteLoaderData('tables');
  const outletContext = useOutletContext();

  console.log('tables', { routeData, parentRouteData, outletContext });

  return (
    <div>
      <h3>Table: {tableId}</h3>
      <NavLink to="game">Go to Table's Game</NavLink>
      <Outlet />
    </div>
  );
};
