import React, { createContext, useState } from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core';
import { Brightness7Icon, Brishtness3Icon } from '@material-ui/icons';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CustomThemeProvider from './themes/CustomThemeProvider.jsx';
import CssBaseline from '@material-ui/core/CssBaseline';
// import CssBaseline from './components/CssBaseline';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#EE5FA7'
    },
    secondary: {
      main: '#5ACD8A'
    },
    typography: {
      fontFamily: 'Raleway, Arial',
    },

  },
});

render(
  <CustomThemeProvider>
    <CssBaseline />
    {/* <ThemeProvider theme={theme}> */}
    <App />
    {/* </ThemeProvider> */}
  </CustomThemeProvider>,


  document.getElementById("root")
)


