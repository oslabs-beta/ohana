import { createMuiTheme } from '@material-ui/core/styles';

const dark = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ee5fa7',
      contrastText: '#ffffff'
    },
    background: {
      default: '#18191a'
    },
    secondary: {
      main: '#5ACD8A',
    }
  },
});

export default dark;