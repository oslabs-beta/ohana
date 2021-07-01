import { createMuiTheme } from '@material-ui/core/styles';

const normal = createMuiTheme({
  type: 'light',
  palette: {
    primary: {
      main: '#EE5FA7',
      contrastText: '#ffffff'
    },
    background: {
      default: '#ffffff'
    },
    secondary: {
      main: '#5ACD8A',
    }
  }
});

export default normal;