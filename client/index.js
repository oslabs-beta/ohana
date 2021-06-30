import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const font = 'Montserrat';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EE5FA7'
    },
    secondary: {
      main: '#5ACD8A'
    },
    typography: {
      fontFamily: font,
      color: '#fff'
    }
  },
});

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
)