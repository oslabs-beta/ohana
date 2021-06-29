const db = require('../db/models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const { runTerminalCommand } = require('../../terminalCommands');
const { query } = require('express');
const secret = 'ohana';

const userController = {};

// userController.bcryptEmail = (req, res, next) => {
//   console.log('req', req);
//   const { email } = req.body;
//   bcrypt.hash(email, saltRounds)
//     .then((hash) => {
//       res.locals.email = hash;
//       return next();
//     })
//     .catch((err) => next({ log: `Error in userController.bcrypt: ${err}` }));
// }

userController.bcryptPassword = (req, res, next) => {
  console.log('req.body', req.body);
  const { password } = req.body;
  console.log('hitting bcrypt controller', password)
  bcrypt.hash(password, saltRounds)
    .then((hash) => {
      res.locals.password = hash;
      return next();
    })
    .catch((err) => next({ log: `Error in userController.bcrypt: ${err}` }));
}

userController.teamIdLookup = (req, res, next) => {
  const { teamName } = req.body;
  const query = `SELECT _id FROM teams WHERE name='${teamName}'`;
  db.query(query)
    .then((data) => {
      console.log(data.rows[0]._id)
      res.locals.teamId = data.rows[0]._id;
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error in userController.teamIdLookup: ${err}`,
        message: `Please enter valid team name`
      })
    })
}

userController.addNewUser = (req, res, next) => {
  console.log('hitting addNewUser controller')
  const { teamId, password } = res.locals;
  const { email, firstName, lastName, isAdmin } = req.body;
  const params = [email, password, firstName, lastName, isAdmin, teamId];
  const query = `
  INSERT INTO users(email, password, first_name, last_name, is_admin, team_id)
  VALUES ($1, $2, $3, $4, $5, $6);`
  db.query(query, params)
    .then(() => next())
    .catch((err) => {
      return next({ log: `Error in userController.addNewUser: ${err}` });
    })
}

userController.loginCheck = (req, res, next) => {
  const { email, password } = req.body;
  const query = `
    SELECT password
    FROM users
    WHERE email = '${email}'`
  db.query(query)
    .then((result) => {
      if (!result.rows.length) {
        console.log('user does not exist')
        res.locals.user = false
        return next({ log: 'Incorrect username/password', message: 'Incorrect username/password' });
      }
      bcrypt.compare(password, result.rows[0].password, (err, result) => {
        if (err) return next({ log: `Error in userController.loginCheck: ${err}` });
        if (!result) return next({ log: 'Incorrect username/password', message: 'Incorrect username/password' });
        return next();
      })
    })
    .catch((err) => next({ log: `Error in userController.loginCheck: ${err}`, message: 'Incorrect username/password' }))
};

userController.isAdminCheck = (req, res, next) => {
  const { email } = req.body;
  const params = [email];
  const query = `
  SELECT is_admin
  FROM users
  WHERE email=$1;
  `
  db.query(query, params)
    .then(result => {
      let isAdminResult = result.rows[0].is_admin;
      if (!isAdminResult) isAdminResult = false;
      res.locals.isAdminResult = isAdminResult;
      return next();
    }).catch(err => next({ log: `Error in userController.isAdminCheck: ${err}` }))
}


userController.teamId = (req, res, next) => {
  const { email } = req.body;
  const params = [email];
  const query = `
  SELECT team_id
  FROM users
  WHERE email=$1;
  `
  db.query(query, params)
    .then(result => {
      let teamId = result.rows[0].team_id;
      res.locals.teamId = teamId;
      return next();
    }).catch(err => next({ log: `Error in userController.teamId: ${err}` }))
}

userController.assignJwt = (req, res, next) => {
  const { isAdminResult, teamId } = res.locals;
  const { email, firstName, lastName } = req.body;
  jwt.sign({ email, firstName, lastName, teamId, isAdmin: isAdminResult }, secret, (err, token) => {
    if (err) return next({ log: `Error in userController.assignJwt: ${err}` })
    res.locals.token = token;
    return next();
  })
}

userController.verifyAdmin = (req, res, next) => {
  const { AuthToken } = req.cookies;
  jwt.verify(AuthToken, secret, (err, decoded) => {
    if (err) return next({ log: `Error in userController.verifyAdmin: ${err}` });
    res.locals.isAdmin = decoded.isAdmin;
    res.locals.teamId = decoded.teamId
    return next();
  })
}

userController.deleteUser = (req, res, next) => {
  const { email } = req.body;
  const params = [email];
  const query =  `DELETE FROM users WHERE email=$1`
  db.query(query, params)
    .then(() => next())
    .catch(err => next({ 
      log: `Error in userController.deleteUser: ${err}`,
      message: 'Unable to delete user'
    })) 
}

userController.getAllUsers = (req, res, next) => {
  const query = 'SELECT * FROM users'
  db.query(query)
    .then((result) => {
      res.locals.allUsers = result.rows
      return next()
    })
    .catch(err => next({ 
      log: `Error in userController.getAllUsers: ${err}`,
      message: 'Unable to get users'
    }))
}


module.exports = userController;