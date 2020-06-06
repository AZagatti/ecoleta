import React from "react";

import ThemeChanger from './ThemeChanger';

import AppProvider from "./contexts";

function App() {
  return (
    <AppProvider>
      <ThemeChanger />
    </AppProvider>
  );
}

export default App;
