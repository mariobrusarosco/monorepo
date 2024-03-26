import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

export const ReactContextScreen = () => {
  const { mode, toggleThemeMode } = useContext(ThemeContext);

  return (
    <div>
      <h2>React Context</h2>

      <div>
        <h3>Theme Context</h3>
        <p>Theme mode: {mode}</p>
        <button onClick={toggleThemeMode}>toggle theme mode</button>
      </div>
    </div>
  );
};
