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
    
    // text: {
    //   default: '#f8f8f8'
    // },
    // text: {
    //   primary: '#18191a',
    //   secondary: '#ffffff'
      
    // }
  },
  // typography: {
  //   body2: {
  //     color: "#ffffff"
  //   },
  //   button: {
  //     fontColor: '#ffffff'
  //   }
  // },
  
});

export default dark;