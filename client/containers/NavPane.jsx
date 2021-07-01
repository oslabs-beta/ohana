import React, { useContext } from 'react';
import { Button, Box } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, Link } from 'react-router-dom';
import { AppContext } from '../components/AppContext'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
  shape: {
    backgroundColor: theme.palette.primary.main,
    width: 55,
    height: 55,
  },
  shapeCircle: {
    borderRadius: '100%',
  },
}));

const NavPane = () => {

  const classes = useStyles();
  const circle = <div className={clsx(classes.shape, classes.shapeCircle)} />;

  const { isAdmin, firstName, lastName } = useContext(AppContext)
  console.log('firstname', firstName);
  let adminPane = '';
  let userValue = '';
  if (isAdmin) {
    userValue = 'admin';
    adminPane = 
    <Box minHeight="10vh" maxHeight="20vh" paddingLeft="1em">
      <Box><h3>Admin</h3></Box>
      <Box display="flex" flexDirection="column" justifyContent="flexStart" alignItems="flexStart" marginLeft="-0.5em">
        <Box>
          <Link to="/team">
            <Button color="primary.text.primary">Teams</Button>
          </Link>
          </Box>
          <Box>
            <Link to="/users">
              <Button color="primary.text.primary">Users</Button>
            </Link>
          </Box>
      </Box>
    </Box>
  } else {
    userValue = 'user'
  }
  let history = useHistory();

  return (
    <div id='leftPaneNav' className='shadow'>
          <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          >
          <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          minHeight="15vh"
          >
          <img src={require("../assets/transparentohana.png")} alt="ohana" className="ohana_logo"/><h1>Ohana</h1>
          </Box>
          <Box
          display="flex"
          flexDirection="column"
          minHeight="15vh">
          <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          minHeight="10vh"
          maxheight="11vh"
          border="1px solid #d5d5d5"
          borderRadius="15px"
          maxWidth="100%"
          minWidth="80%"
          alignSelf="center"
          marginLeft="-2rem"
          
          >
            &nbsp;&nbsp;
            {circle}
            <Box
            minHeight="0"
            maxHeight="10vh"
            paddingLeft="1em"
            lineHeight=".5em"
            >
            <h3>{firstName} {lastName}</h3>
            <p><mark>{userValue}</mark></p>
            </Box>
          </Box>
          </Box>
          </Box>
          <Box
          display="flex"
          flexDirection="column"
          alignContent="center"
          justifyContent="flexStart"
          minHeight="80vh"
          
          >
            <Box
            minHeight="10vh"
            maxHeight="25vh"
            paddingLeft="1em"
            
            >
            <Box>
            <h3>General</h3>
            </Box>
          
          <Box
          display="flex"
          flexDirection="column"
          justifyContent="flexStart"
          alignItems="flexStart"
          // width="300px"
          // border="1px solid blue"
          marginLeft="-0.5em"
          >
          <Box>
          <Link to="/home">
            <Button color="primary.text.secondary">
              Home
            </Button>
          </Link>
          </Box>
          <Box>
          <Link to="/vcluster">
            <Button color="primary.contrastText">
              vClusters
            </Button>
          </Link>
          </Box>
          <Box>
          <Link to="/spaces">
            <Button color="primary.text.secondary">
              Spaces
            </Button>
          </Link>
          </Box>
          <Box>
          <Link to="/deploy">
            <Button color="primary.text.secondary">
              Deploy
            </Button>
          </Link>
          </Box>
          </Box>
          </Box>
          <Box
            minHeight="0"
            maxHeight="20vh"
            paddingLeft="1em">
            
          <Box>
            <h3>Support</h3>
            </Box>
            <Box
          display="flex"
          flexDirection="column"
          justifyContent="flexStart"
          alignItems="flexStart"
          // width="300px"
          // border="1px solid blue"
          marginLeft="-0.5em"
          >
          <Box>
          <Button href="http://ohana-app.io" color="primary.text.primary">
            Docs
          </Button>
          </Box>
          <Box>
          <Button href="https://github.com/oslabs-beta/ohana" color="primary.text.primary">
              Github
          </Button>
          </Box>
          </Box>
          <Box
          marginLeft="-1em"
          >
          {adminPane}
          </Box>
          
          
          
          </Box>
          </Box>    
          </div>




  )
}

export default NavPane;