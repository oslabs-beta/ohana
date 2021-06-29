import React from 'react';
import { makeStyles, List, ListItem, ListItemText, ListSubheader } from '@material-ui/core/';

const TeamsDisplay = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 300,
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
  }));

  const classes = useStyles();

  return (
    <div id="teamslist">
    <List className={classes.root} subheader={<li />}>
      {['Admins', 'Senior Engineers', 'Junior Engineers'].map((sectionId) => (
        <li key={`section-${sectionId}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{`${sectionId}`}</ListSubheader>
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
    </div>
  );
}


export default TeamsDisplay;