import { Link } from 'react-router-dom';
import { UseEffectScreen } from './use-effect';
import { GetTheValueOfASearchInput } from '../components/get-the-value-of-a-search-input';

export const ReactScreen = () => {
  return (
    <div>
      <h1>React</h1>
      <p>
        This is the React playground. You can find all the React examples here.
      </p>
      <ul>
        <li>
          <Link to="use-effect">useEffect</Link>
        </li>
      </ul>

      <GetTheValueOfASearchInput />

      <UseEffectScreen />

      {/* <Route path="use-effect" element={<UseEffectScreen />} />
      <Outlet /> */}
    </div>
  );
};
