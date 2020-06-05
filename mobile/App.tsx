import React from "react";

import AppProvider from "./src/contexts";

import ThemeChanger from "./src";

const App: React.FC = () => {
  return (
    <AppProvider>
      <ThemeChanger />
    </AppProvider>
  );
};

export default App;
