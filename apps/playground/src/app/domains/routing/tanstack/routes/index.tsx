import { createFileRoute } from '@tanstack/react-router';

const IndexScreen = () => {
  return (
    <div data-ui="" className="">
      Hello from IndexScreen
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: IndexScreen,
});
