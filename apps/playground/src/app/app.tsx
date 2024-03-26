import './app.css';
import { ReactQuery } from './domains/react-query/screens/reac-query';
import { Testing } from './domains/testing/screens/testing';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
