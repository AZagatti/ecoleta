import React from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider, DefaultTheme } from "styled-components";

import Routes from "./routes";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "./styles/global";
import useCustomTheme from "./hooks/useCustomTheme";

function ThemeChanger() {
  const { theme } = useCustomTheme();
  const selectedTheme: DefaultTheme = theme === "light" ? light : dark;

  return (
    <ThemeProvider theme={selectedTheme}>
      <Routes />
      <ToastContainer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default ThemeChanger;
