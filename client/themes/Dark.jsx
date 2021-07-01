import { createMuiTheme } from '@material-ui/core/styles';

const dark = createMuiTheme({
  palette: {
    primary: {
      main: '#ee5fa7',
      contrastText: '#f8f8f8'
    },
    background: {
      default: '#18191a'
    },
    text: {
      primary: '#ffffff',
      secondary: '#18191a',
    }
  }
});

export default dark;