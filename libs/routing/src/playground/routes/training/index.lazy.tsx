import { createLazyFileRoute } from '@tanstack/react-router';
import { TrainingScreen } from '@monorepo/training';

export const Route = createLazyFileRoute('/training/')({
  component: TrainingScreen,
});
