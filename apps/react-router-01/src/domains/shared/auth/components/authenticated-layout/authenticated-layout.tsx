import { Outlet, useLoaderData, useOutletContext } from 'react-router-dom';
import { NavigationBar } from '../../../components/navigation-bar/navigation-bar';

export const AuthenticatedLayout = () => {
  // const user = useLoaderData() as { name: string };

  return (
    <div style={{ border: '1px solid orange' }}>
      <i style={{ color: 'orange' }}>AuthenticatedLayout</i>
      <NavigationBar />
      <Outlet />
      {/* <Outlet context={{ user } satisfies ContextType} /> */}
    </div>
  );
};

// type ContextType = { user: { name: string } | null };

// export const useUser = () => {
//   return useOutletContext<ContextType>();
// };
