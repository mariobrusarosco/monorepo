import { Navigate } from 'react-router-dom';
import { GameScreen } from '../domains/games/screens/game';
import { TableScreen } from '../domains/tables/screens/with-loaders/table/table';
import { TablesScreen } from '../domains/tables/screens/with-loaders/tables/tables';

export const oneWordRoutingWithReactQuery = [
  {
    index: true,
    element: (
      <div>POC: Using React Router but loading data with React Query</div>
    ),
  },
  {
    path: 'tables',
    element: <TablesScreen />,
    children: [
      {
        path: ':tableId',
        element: <TableScreen />,
        children: [{ path: 'game', element: <GameScreen /> }],
      },
    ],
  },
];
