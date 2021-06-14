// import React, { useState, useEffect }  from 'react';
// import { Button, TextField } from '@material-ui/core'
// import { Redirect } from 'react-router-dom'; 


// const AdminSignup = () => {

//   const [redirect, setRedirect] = useState(false);
//   const [token, setToken] = useState('')
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  
//   const handleSubmit = (e) => {
//     const form = e.target
    
//     e.preventDefault();

//     fetch(form.action, {
//       method: form.method,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         firstName,
//         lastName,
//         email,
//         password
//       })
//     })
//       .then((res) => {
//         console.log('RES: ', res);
//         return res.json();
//       })
//       .then((data) => {
//         // console.log(data.loggedIn)
//         setToken(data)
//         if (data) {
//           setRedirect(true);
//         }
//       })
//       // .catch((err) => setLoginFailed('Incorrect Username/Password'));
//   };

//   const handleFirstName = (e) => {
//     setFirstName(e.target.value);
//   }

//   const handleLastName = (e) => {
//     setLastName(e.target.value);
//   }

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   if (redirect) return <Redirect to='/admin'/>


//   return (
//     <div id='adminsignup'>
//       <form method='POST' action ='/admin/create' onSubmit={handleSubmit}>
//       <TextField label='First Name' name='firstName' onChange={handleFirstName}></TextField>
//       <TextField label='Last Name' name='lastName' onChange={handleLastName}></TextField>
//       <TextField label='Email' name='email' onChange={handleEmail}></TextField>
//       <TextField type='password' label='Password' name='password' onChange={handlePassword}></TextField>
//       {/* <TextField type='hidden' name='isadmin' value='true'></TextField> */}
//       <Button type="submit">Signup</Button>
//       </form> 
//       </div>

//   )
// }



// export default AdminSignup;