import { Navigate } from 'react-router-dom';
import { GameScreen } from '../domains/games/screens/game';
import { TableScreen } from '../domains/tables/screens/table/table';
import { TablesScreen } from '../domains/tables/screens/tables/tables';

export const oneWordRoutingWithLoaders = [
  {
    index: true,
    element: (
      <div>
        POC: Using React Router but loading data with React Router Loaders
      </div>
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
