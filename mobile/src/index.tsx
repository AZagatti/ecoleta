import React from "react";
import { StatusBar } from "react-native";
import { AppLoading } from "expo";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Ubuntu_700Bold, useFonts } from "@expo-google-fonts/ubuntu";
import { AppearanceProvider } from "react-native-appearance";

import useCustomTheme from "./hooks/customTheme";

import Routes from "./routes";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

export default function App() {
  const { theme } = useCustomTheme();
  const selectedTheme: DefaultTheme = theme === "light" ? light : dark;

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <AppearanceProvider>
        <StatusBar
          barStyle={theme === "light" ? "dark-content" : "light-content"}
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </AppearanceProvider>
    </ThemeProvider>
  );
}
