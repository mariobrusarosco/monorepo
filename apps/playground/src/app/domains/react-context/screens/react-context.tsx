import { UsingViaUseContext } from '../components/using-via-custom-hook-and-use-reducer';
import { UsingViaCustomHookAndUseReducer } from '../components/using-via-use-context';
import { NotificationProvider } from '../context/notification-context';

export const ReactContextScreen = () => {
  return (
    <div>
      <h2>React Context</h2>

      <div>
        <UsingViaUseContext />

        <NotificationProvider>
          <UsingViaCustomHookAndUseReducer />
        </NotificationProvider>
      </div>
    </div>
  );
};
