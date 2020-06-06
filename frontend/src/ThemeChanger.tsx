import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import Routes from "./routes";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyles from "./styles/global";
import useCustomTheme from "./hooks/useCustomTheme";

function ThemeChanger() {
  const { theme } = useCustomTheme();
  const selectedTheme: DefaultTheme = theme === "light" ? light : dark;

  return (
    <ThemeProvider theme={selectedTheme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default ThemeChanger;
