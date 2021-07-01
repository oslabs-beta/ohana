import { createMuiTheme } from '@material-ui/core/styles';

const normal = createMuiTheme({
  palette: {
    primary: {
      main: '#EE5FA7',
      contrastText: '#ffffff'
    },
    background: {
      default: '#ffffff'
    },
    text: {
      primary: '#000000',
      // secondary: '#ffffff'
    }
  }
});

export default normal;