import { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';

type Action = {
  type: 'SHOW_NOTIFICATION' | 'HIDE_NOTIFICATION';
  payload?: string;
};
type Dispatch = (action: Action) => void;
type State = {
  message: string;
};

const NotificationContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const notificationReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return {
        ...state,
        message: action.payload || '',
      };
    case 'HIDE_NOTIFICATION':
      return {
        ...state,
        message: '',
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(notificationReducer, { message: '' });

  const value = { state, dispatch };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

const useNotification = () => {
  const context = useContext(NotificationContext);

  if (context === undefined) {
    throw new Error(
      'useNotification must be used within a NotificationProvider'
    );
  }

  return context;
};

export { NotificationContext, useNotification, NotificationProvider };
