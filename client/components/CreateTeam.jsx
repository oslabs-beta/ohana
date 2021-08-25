import { Button, TextField, Box } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
  },
  shape: {
    backgroundColor: theme.palette.primary.main,
    width: 55,
    height: 55,
  },
  shapeCircle: {
    borderRadius: "100%",
  },
}));

const CreateTeam = () => {
  const [teamName, setTeamName] = useState("");
  const [addTeamStatus, setAddTeamStatus] = useState("");

  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log("am i hitting submit?");
    e.preventDefault();
    fetch("/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ teamName }),
    })
      .then((res) => res.json())
      .then((data) => setAddTeamStatus(<p>{data}</p>))
      .catch((err) => {
        console.log(err);
        setAddTeamStatus(<p>Unable to create new team</p>);
      });
  };

  return (
    <div id='createteam'>
      <form method='POST' action='/team' onSubmit={handleSubmit}>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='flexStart'
          width='50vw'
        >
          <Box maxWidth='20vw'>
            <h2>Create a Team</h2>
          </Box>
          <Box>{addTeamStatus}</Box>
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='flexStart'
          minHeight='15vh'
          minWidth='40vw'
        >
          <TextField
            label='Team Name'
            name='teamName'
            onChange={handleTeamNameChange}
          ></TextField>
          <br></br>
          <Button variant='contained' color='primary' type='submit'>
            Create Team
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default CreateTeam;
