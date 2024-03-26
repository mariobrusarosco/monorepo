import './app.css';
import { ReactQuery } from './domains/react-query/screens/react-query';
import { Testing } from './domains/testing/screens/testing';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, Routes, Link } from 'react-router-dom';

const client = new QueryClient();

export function App() {
  return (
    <div>
      <QueryClientProvider client={client}>
        <ReactQueryDevtools initialIsOpen={false} />
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
        </Routes>
        {/* END: routes */}
      </QueryClientProvider>
    </div>
  );
}

export default App;
