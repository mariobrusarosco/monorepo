import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/react')({
  component: ReactScreen,
});

function ReactScreen() {
  return <div className="p-2">Hello from ReactScreen!</div>;
}
