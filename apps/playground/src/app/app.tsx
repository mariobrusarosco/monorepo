import './app.css';
import { ThemeProvider } from './domains/react/react-context/context/theme-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const client = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

export function App() {
  return (
    <div>
      <QueryClientProvider client={client}>
        <ReactQueryDevtools initialIsOpen={false} />

        <ThemeProvider>temp</ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
