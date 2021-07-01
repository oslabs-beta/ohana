import React, { useContext } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { CustomThemeContext } from './CustomThemeProvider.jsx';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import Brightness6OutlinedIcon from '@material-ui/icons/Brightness6Outlined';

const useStyles = makeStyles(theme => ({
  root: {
    height: 40,
    margin: '10px'
  },
  button: {
    color: theme.palette.primary,
    paddingTop: '1em',
    paddingBottom: '1em'
  }
}));

export default function ThemeToggle() {
  const classes = useStyles();
  const { currentTheme, setTheme } = useContext(CustomThemeContext);
  const isNormal = Boolean(currentTheme === 'normal');
  console.log(isNormal);
  const handleThemeChange = (event, newTheme) => {
    if (isNormal) {
      setTheme(newTheme);
    } else {
      setTheme('normal');
    }
  }


  return (
    <ToggleButtonGroup
      className={classes.root}
      value={currentTheme}
      exclusive
      size='small'
      onChange={handleThemeChange}>
      <ToggleButton className={classes.button} value='normal'>
        <Brightness6OutlinedIcon style={{ color: "#EE5FA7" }} />
      </ToggleButton>
      <ToggleButton className={classes.button} value='dark'>
        <Brightness2OutlinedIcon style={{ color: "#EE5FA7" }} />
      </ToggleButton>
    </ToggleButtonGroup>
  )
};

