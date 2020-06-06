import React, { createContext, useCallback } from "react";

import usePersistedState from "../hooks/usePersistedHook";

interface CustomThemeContextData {
  theme: ThemeState;
  handleChangeTheme(): void;
}

type ThemeState = "light" | "dark";

const CustomThemeContext = createContext<CustomThemeContextData>(
  {} as CustomThemeContextData
);

const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<ThemeState>(
    "@ecoleta:theme",
    "light"
  );

  const handleChangeTheme = useCallback(() => {
    setTheme((state) => (state === "light" ? "dark" : "light"));
  }, [setTheme]);

  return (
    <CustomThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </CustomThemeContext.Provider>
  );
};

export { CustomThemeContext, CustomThemeProvider };
