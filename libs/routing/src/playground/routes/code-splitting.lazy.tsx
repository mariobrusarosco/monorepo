import { createLazyFileRoute } from '@tanstack/react-router';
import { CodeSplitting } from '@monorepo/code-splitting';

export const Route = createLazyFileRoute('/code-splitting')({
  component: CodeSplitting,
});
