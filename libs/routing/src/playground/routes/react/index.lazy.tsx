import { ReactScreen } from '@monorepo/react';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/react/')({
  component: ReactScreen,
});
