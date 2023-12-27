import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { ErrorScreen } from '../../screens/error';
import { AppMainLoader } from '../app-main-loader/app-main-loader';
import RootLayout from '../root-layout/root-layout';
import { PublicLayout } from '../public-layout/pubic-layout';
import { HomeScreen } from '../../../home/screens/home/home';
import { AuthenticatedLayout } from '../../auth/components/authenticated-layout/authenticated-layout';
import { LoginScreen } from '../../auth/screens/login/login';
import { oneWordRouting } from '../../../../routing/one-word-routing';

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
          children: [
            {
              path: 'with-loaders',
              children: oneWordRouting,
            },
            {
              path: 'with-react-query-queries',
              children: oneWordRouting,
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
