import React, { useState, useEffect }  from 'react';
import { Button, TextField } from '@material-ui/core'
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';  


const LoginPage = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  let history = useHistory();
  // when the component re-renders, check if the isLoggedIn is truthy and push
  // homepage endpoint so the route can render the proper page
  useEffect( () => {
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
        console.log('RES: ', res);
        return res.json();
      })
      .then((data) => {
        // console.log(data.loggedIn)
        setToken(data)
        fetch('/admin/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringifiy({
            token,
          })
        })
        .then(res => {
          console.log('JWT res', res);
          return res.json
        })
        .then(res => {
          setAdmin(res);
          if (typeof res === boolean) {
            setLoggedIn(true);
          }
        })
        }
      )

    


  }

  handleEmail = (e) => {
    setEmail(e.target.value);
  };

  handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div id='LoginPage'>
    <form method="POST" action="/user/login" onSubmit={handleSubmit}>
    <TextField label='Email' name='email' onChange={handleEmail}>Email</TextField>
    <TextField label='Password' type='password' name='password' onChange={handlePassword}>Password</TextField>
    <Button type="submit">Login</Button>
    </form>

    <Button onClick={formSubmit}>First Time? Sign up Here</Button>
    </div>
    
  )
}

export default LoginPage;