import { NavLink, Navigate } from 'react-router-dom';
import { GameScreen } from '../domains/games/screens/game';
import { TableScreen } from '../domains/tables/screens/with-loaders/table/table';
import { TablesScreen } from '../domains/tables/screens/with-loaders/tables/tables';

export const IndexScreen = () => {
  return (
    <div>
      <h2>
        {' '}
        POC: Using React Router but loading data with React Router Loaders
      </h2>
      <ul>
        <li>
          <NavLink to="tables">Tables</NavLink>
        </li>
      </ul>
    </div>
  );
};

export const oneWordRoutingWithLoaders = [
  {
    index: true,
    element: <IndexScreen />,
  },
  {
    path: 'tables',
    element: <TablesScreen />,
    id: 'tables',
    loader: async () => {
      return {
        tables: [
          { label: 'Table 1', id: '123' },
          { label: 'Table 2', id: '456' },
        ],
      };
    },
    children: [
      {
        path: ':tableId',
        element: <TableScreen />,
        // children: [{ path: 'game', element: <GameScreen /> }],
      },
    ],
  },
];
