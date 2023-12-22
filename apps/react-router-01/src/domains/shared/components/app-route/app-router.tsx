import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorScreen } from '../../screens/error';
import { AppMainLoader } from '../app-main-loader/app-main-loader';
import RootLayout from '../root-layout/root-layout';
import { PublicLayout } from '../public-layout/pubic-layout';
import { HomeScreen } from '../../../home/screens/home/home';
import { AuthenticatedLayout } from '../../auth/components/authenticated-layout/authenticated-layout';
import { GameScreen } from '../../../games/screens/game';
import { LoginScreen } from '../../auth/screens/login/login';
import { TableScreen } from '../../../tables/screens/table/table';
import { TablesScreen } from '../../../tables/screens/tables/tables';

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorScreen />,
      children: [
        { index: true, element: <HomeScreen /> },
        {
          element: <AuthenticatedLayout />,
          // loader: async () => {
          //   const response = await fetch(
          //     `${import.meta.env.VITE_ONE_WORD_API}/user`
          //   );

          //   const user = await response.json();
          //   return user;
          // },
          children: [
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
          ],
        },
        {
          element: <PublicLayout />,
          children: [
            {
              path: 'login',
              element: <LoginScreen />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<AppMainLoader />} />;
};
