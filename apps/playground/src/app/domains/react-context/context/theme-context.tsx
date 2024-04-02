import { createContext, useState } from 'react';

const defaultValues = {
  mode: 'dark',
  toggleThemeMode: () => undefined,
};

const ThemeContext = createContext<null | typeof defaultValues>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState(defaultValues.mode);
  const handleToggleThemeMode = () => {
    setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const state = {
    mode: themeMode,
    toggleThemeMode: handleToggleThemeMode,
  };
  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
