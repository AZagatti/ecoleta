import React, { createContext, useState, useCallback } from "react";
import { useColorScheme } from "react-native-appearance";

interface CustomThemeContextData {
  theme: ThemeState;
  handleChangeTheme(): void;
}

type ThemeState = "light" | "dark";

const CustomThemeContext = createContext<CustomThemeContextData>(
  {} as CustomThemeContextData
);

const CustomThemeProvider: React.FC = ({ children }) => {
  const colorScheme = useColorScheme();

  const [theme, setTheme] = useState<ThemeState>(() => {
    return colorScheme === "no-preference" ? "light" : colorScheme;
  });

  const handleChangeTheme = useCallback(() => {
    setTheme((state) => (state === "light" ? "dark" : "light"));
  }, []);

  return (
    <CustomThemeContext.Provider value={{ theme: theme, handleChangeTheme }}>
      {children}
    </CustomThemeContext.Provider>
  );
};

export { CustomThemeContext, CustomThemeProvider };
