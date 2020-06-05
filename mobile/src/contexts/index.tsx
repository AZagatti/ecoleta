import React from "react";

import { CustomThemeProvider } from "./theme";

const AppProvider: React.FC = ({ children }) => (
  <CustomThemeProvider>{children}</CustomThemeProvider>
);

export default AppProvider;
