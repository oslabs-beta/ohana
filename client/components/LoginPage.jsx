import React, { useState, useEffect, useContext } from 'react';
import { Button, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import LoginContext from '../containers/MainContainer.jsx';


const LoginPage = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState();

  let history = useHistory();
  // when the component re-renders, check if the isLoggedIn is truthy and push
  // homepage endpoint so the route can render the proper page
  useEffect(() => {
    if (isLoggedIn) {
      if (isAdmin) history.push('/admin')
      else {
        history.push('/user')
      }
    }
  })

  const formSubmit = (e) => {
    e.preventDefault();
    setRedirect(true);
  }
  // if (redirect === true) return <Redirect to='/adminsignup' />

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target

    e.preventDefault();
    fetch(form.action, {
      method: form.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then((res) => {
        return res.json();
      })
      .then((token) => {
        setToken(token)

        fetch('/user/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token,
          })
        })
          .then(res => {
            return res.json();
          })
          .then(res => {
            setAdmin(res);
            if (typeof res === 'boolean') {
              setLoggedIn(true);
            }
          })
      }
      )
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div id='LoginPage'>
      <form id='LoginForm' method="POST" action="/user/login" onSubmit={handleSubmit}>
        <TextField label='Email' name='email' onChange={handleEmail}></TextField><br></br>
        <TextField label='Password' type='password' name='password' onChange={handlePassword}></TextField><br></br>
        <Button type="submit" variant="contained" color="secondary">Login</Button>
      </form>
    </div>

  )
}

export default LoginPage;