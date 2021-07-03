import React from "react";
import { render } from "react-dom";
import App from "./components/App.jsx";
import { createMuiTheme } from "@material-ui/core";
import CustomThemeProvider from "./themes/CustomThemeProvider.jsx";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#EE5FA7",
    },
    secondary: {
      main: "#5ACD8A",
    },
    typography: {
      fontFamily: "Raleway, Arial",
    },
  },
});

render(
  <CustomThemeProvider>
    <CssBaseline />
    <App />
  </CustomThemeProvider>,

  document.getElementById("root")
);
