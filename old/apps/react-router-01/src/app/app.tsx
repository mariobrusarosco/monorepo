import { AppRouter } from '../domains/shared/components/app-router/app-router';
import './App.css';

const AppWithProviders = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

function App() {
  return (
    <AppWithProviders>
      <AppRouter />
    </AppWithProviders>
  );
}

export default App;
