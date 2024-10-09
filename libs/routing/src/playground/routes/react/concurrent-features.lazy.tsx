import { createLazyFileRoute } from '@tanstack/react-router';
import { LazyComponents } from '@monorepo/react';

export const Route = createLazyFileRoute('/react/concurrent-features')({
  component: () => (
    <div>
      <h1>Concurrent Features</h1>
      <LazyComponents />
    </div>
  ),
});
