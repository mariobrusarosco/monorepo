import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/react/hooks')({
  component: () => <div>Hello /react/hooks!</div>,
});
