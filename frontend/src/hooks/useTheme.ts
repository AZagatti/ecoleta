import { useContext } from "react";
import { ThemeContext } from 'styled-components';

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used within an CustomThemeProvider!"
    );
  }

  return context;
};

export default useTheme;