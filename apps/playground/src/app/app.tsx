import './app.css';
import { ThemeProvider } from './domains/react-context/context/theme-context';
import { ReactContextScreen } from './domains/react-context/screens/react-context';
import { ReactQuery } from './domains/react-query/screens/react-query';
import { Testing } from './domains/testing/screens/testing';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, Routes, Link } from 'react-router-dom';
import { ReactScreen } from './domains/react/screens/react';

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

        <ThemeProvider>
          <div role="navigation">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/testing">Testing</Link>
              </li>
              <li>
                <Link to="/react-query">React Query</Link>
              </li>
              <li>
                <Link to="/react-context">React Context</Link>
              </li>
              <li>
                <Link to="/react">React</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Link to="/testing">Click here for Testing.</Link>
                </div>
              }
            />
            <Route path="/testing" element={<Testing />} />
            <Route path="/react-query" element={<ReactQuery />} />
            <Route path="/react-context" element={<ReactContextScreen />} />
            <Route path="/react" element={<ReactScreen />} />
          </Routes>
          {/* END: routes */}
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
