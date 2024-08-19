import { UsingWithUseReducer } from '../components/using-with-use-reducer';
import { UsingWithUseState } from '../components/using-with-use-state';
import { NotificationProvider } from '../context/notification-context';

export const ReactContextScreen = () => {
  return (
    <div>
      <h2>React Context</h2>
      <ul>
        <li>
          <strong>ThemeProvider</strong> <strong>useState</strong>
        </li>
        <li>
          <strong>NotificationProvider</strong> <strong>useReducer</strong>
        </li>
      </ul>
      <div>
        <UsingWithUseState />

        <NotificationProvider>
          <UsingWithUseReducer />
        </NotificationProvider>
      </div>
    </div>
  );
};
