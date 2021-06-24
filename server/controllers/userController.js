const db = require('../db/models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
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
  const { password } = req.body;
  bcrypt.hash(password, saltRounds)
    .then((hash) => {
      res.locals.password = hash;
      return next();
    })
    .catch((err) => next({ log: `Error in userController.bcrypt: ${err}` }));
}

userController.addNewUser = (req, res, next) => {
  const { password } = res.locals;
  const { email, firstName, lastName, teamId, isAdmin } = req.body;
  const params = [email, password, firstName, lastName, teamId, isAdmin];
  const query = `
  INSERT INTO users(email, password, first_name, last_name, team_id, is_admin)
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
    WHERE email = '${email}'
  `
  db.query(query)
    .then((result) => {
      bcrypt.compare(password, result.rows[0].password, (err, result) => {
        if (err) return next({ log: `Error in userController.loginCheck: ${err}` });
        if (!result) return next({ log: 'Incorrect username/password', message: 'Incorrect username/password' });
        return next();
      })
    })
    .catch((err) => next({ log: `Error in userController.loginCheck: ${err}`, message: 'Incorrect username/password' }))
};

userController.isAdminCheck = (req, res, next) => {
  console.log('checking for jwt', req.headers);
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

userController.verifyAdmin = (req, res, next) => {
  const { token } = req.body;
  jwt.verify(token, secret, (err, decoded) => {
    if (err) return next({ log: `Error in userController.verifyAdmin: ${err}` });
    res.locals.isAdmin = decoded.isAdmin;
    return next();
  })
}

userController.assignJwt = (req, res, next) => {
  const { isAdminResult } = res.locals;
  const { email } = req.body;
  jwt.sign({ email, isAdmin: isAdminResult }, secret, (err, token) => {
    if (err) return next({ log: `Error in userController.assignJwt: ${err}` })
    res.locals.token = token;
    return next();
  })
}

module.exports = userController;