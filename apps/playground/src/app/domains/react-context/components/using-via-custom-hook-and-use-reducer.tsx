import { useNotification } from '../context/notification-context';

export const UsingViaCustomHookAndUseReducer = () => {
  const { state, dispatch } = useNotification();
  const handleNewNotification = () => {
    dispatch({ type: 'SHOW_NOTIFICATION', payload: 'New notification' });
  };

  return (
    <>
      <h3>Using React Context via custom Hook and useReducer</h3>
      <p>Message: {state.message}</p>
      <button onClick={handleNewNotification}>Send Notification</button>
    </>
  );
};
