import { Link } from 'react-router-dom';
import { SimpleRawForm } from '../components/forms';
import { UseRef } from '../components/use-ref';

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

      <SimpleRawForm />
      {/* <GetTheValueOfASearchInput /> */}

      {/* <UseEffectScreen /> */}

      {/* <Route path="use-effect" element={<UseEffectScreen />} />
      <Outlet /> */}
      <UseRef />
    </div>
  );
};
