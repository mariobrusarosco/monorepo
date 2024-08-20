import { AppRouter } from '@monorepo/routing';

export function App() {
  console.log('import.meta.env!', import.meta.env);

  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
