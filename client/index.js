import React, { useState } from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core';
import { Brightness7Icon, Brishtness3Icon } from '@material-ui/icons';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";


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



  render (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    document.getElementById("root")
  )