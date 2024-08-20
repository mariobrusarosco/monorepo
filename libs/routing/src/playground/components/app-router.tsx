// Import the generated route tree
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from '../routeTree.gen';

const router = createRouter({
  routeTree,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const AppRouter = () => {
  console.log('AppRouter');

  return <RouterProvider router={router} />;
};

// export const CustomAppRouter = ({
//   routerSiblings,
// }: {
//   routerSiblings: React.ReactNode;
// }) => {
//   console.log('AppRouter');

//   const router = createRouter({
//     routeTree,
//     InnerWrap: ({ children }) => (
//       <>
//         {routerSiblings}
//         {children}
//       </>
//     ),
//   });

//   return <RouterProvider router={router} />;
// };
