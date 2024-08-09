import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: IndexScreen,
});

function IndexScreen() {
  return <div className="p-2">Hello from IndexScreen</div>;
}
