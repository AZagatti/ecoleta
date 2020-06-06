import { useContext } from "react";

import { CustomThemeContext } from "../contexts/theme";

const useCustomTheme = () => {
  const context = useContext(CustomThemeContext);

  if (!context) {
    throw new Error(
      "useCustomTheme must be used within an CustomThemeProvider!"
    );
  }

  return context;
};

export default useCustomTheme;