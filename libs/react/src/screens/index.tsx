import { Link } from '@tanstack/react-router';

export const ReactScreen = () => {
  return (
    <div data-ui="screen-react">
      <h2>React</h2>

      <menu>
        <ul>
          <li>
            <Link to="/react/hooks">Hooks</Link>
          </li>
        </ul>
      </menu>
    </div>
  );
};
