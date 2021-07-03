import React, { useState } from "react";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
} from "@material-ui/core";

const CreateUser = () => {
  const [isAdmin, setAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [createdUser, setCreatedUser] = useState("");

  const handleAdmin = (e) => {
    setAdmin(e.target.checked);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleTeamName = (e) => {
    setTeamName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password, firstName, lastName, teamName, isAdmin };
    console.log("data", data);
    fetch("/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setCreatedUser(<span>{data}</span>))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div id='createuser'>
      <form onSubmit={handleSubmit}>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='flex-start'
          alignItems='flex-start'
          minWidth='50vw'
        >
          <Box>
            <h3>Create a new User</h3>
          </Box>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='flex-start'
          minWidth='50vw'
        >
          <TextField
            label='User Email'
            name='email'
            onChange={handleEmail}
          ></TextField>
          <br></br>
          <TextField
            type='password'
            label='User Password'
            name='password'
            onChange={handlePassword}
          ></TextField>
          <br></br>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='flex-start'
          minWidth='50vw'
        >
          <TextField
            label='First Name'
            name='firstName'
            onChange={handleFirstName}
          ></TextField>
          <br></br>
          <TextField
            label='Last Name'
            name='lastName'
            onChange={handleLastName}
          ></TextField>
          <br></br>

          <TextField
            label='Team Name'
            name='teamName'
            onChange={handleTeamName}
          ></TextField>
          <br></br>
        </Box>
        {/* <Select>Select Team</Select> */}
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          minWidth='50vw'
          minHeight='10vh'
        >
          <FormControlLabel
            control={<Checkbox />}
            name='isAdmin'
            label='Add as Admin'
            labelPlacement='end'
            onChange={handleAdmin}
            value={isAdmin}
          />
          <br></br>
          {createdUser}
          <Button
            type='submit'
            label='Create User'
            variant='contained'
            color='primary'
          >
            Create User
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default CreateUser;
