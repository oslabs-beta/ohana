import React, { createContext, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import getTheme from "./Themes.jsx";

export const CustomThemeContext = createContext({
  currentTheme: "normal",
  setTheme: null,
});

const CustomThemeProvider = (props) => {
  const { children } = props;

  const currentTheme = localStorage.getItem("appTheme") || "normal";
  const [themeName, _setThemeName] = useState(currentTheme);
  const theme = getTheme(themeName);
  const setThemeName = (name) => {
    localStorage.setItem("appTheme", name);
    _setThemeName(name);
  };

  const contextValue = {
    currentTheme: themeName,
    setTheme: setThemeName,
  };

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
