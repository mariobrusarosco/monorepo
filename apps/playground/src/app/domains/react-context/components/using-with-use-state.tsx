import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

export const UsingWithUseState = () => {
  const context = useContext(ThemeContext);

  return (
    <>
      <h3>via useContext</h3>
      <p>Theme mode: {context?.mode}</p>
      <button onClick={context?.toggleThemeMode}>toggle theme mode</button>
    </>
  );
};
