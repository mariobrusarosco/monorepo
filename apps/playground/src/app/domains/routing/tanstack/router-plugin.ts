import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

export const routerPlugin = () =>
  TanStackRouterVite({
    routesDirectory: __dirname + '/routes',
    generatedRouteTree:
      'apps/playground/src/app/domains/routing/tanstack/routeTree.gen.ts',
  });
