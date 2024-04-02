import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

export const UsingWithUseState = () => {
  const { mode, toggleThemeMode } = useContext(ThemeContext);

  return (
    <>
      <h3>Using React Context via useContext</h3>
      <p>Theme mode: {mode}</p>
      <button onClick={toggleThemeMode}>toggle theme mode</button>
    </>
  );
};
