import React from 'react';

const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;
export const useTheme = () => React.useContext(ThemeContext);

