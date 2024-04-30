import { useNotification } from '../context/notification-context';

export const UsingWithUseReducer = () => {
  const { state, dispatch } = useNotification();
  const handleNewNotification = () => {
    dispatch({ type: 'SHOW_NOTIFICATION', payload: 'New notification' });
  };

  return (
    <>
      <h3>via custom Hook</h3>
      <p>Message: {state.message}</p>
      <button onClick={handleNewNotification}>Send Notification</button>
    </>
  );
};
