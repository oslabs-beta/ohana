const db = require ('../db/models');
const bcrypt = require ('bcrypt');
const saltRounds = 10;

const adminController = {};

adminController.bcryptEmail = (req, res, next) => {
  const { email } = req.body;
  bcrypt.hash(email, saltRounds)
    .then((hash) => {    
      res.locals.email = hash;
      return next();
    })
    .catch((err) => next({log: `Error in adminController.bcrypt: ${err}`}));
}

adminController.bcryptPassword = (req, res, next) => {
  const { password } = req.body;
  bcrypt.hash(password, saltRounds)
    .then((hash) => {
      res.locals.password = hash;
      return next();
    })
    .catch((err) => next({log: `Error in userController.bcrypt: ${err}`}));
}

adminController.addNewAdmin = (req, res, next) => {
  const { password } = res.locals;
  const { email, firstName, lastName, teamId } = req.body;
  const params = [email, password, firstName, lastName, teamId];
  const query = `
  INSERT INTO users(email, password, first_name, last_name, team_id, is_admin)
  VALUES ($1, $2, $3, $4, $5, true)`
  db.query(query, params)
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({log: `Error in adminController.addNewAdmin: ${err}`});
    })
}

adminController.loginCheck = (req, res, next) => {
  const { email, password } = req.body;
  const query = `
    SELECT password
    FROM users
    WHERE email = '${email}'
  `
  db.query(query)
    .then((result) => {
      console.log('password query',result);
      bcrypt.compare(password, result.rows[0].password, (err, result) => {
        console.log('result', result)
        if (err) return next({log: `Error in adminController.loginCheck: ${err}`});
        if (!result) return next({log:'Incorrect username/password', message: 'Incorrect username/password'});
        return next();
      })
    })
    .catch((err) => next({log: `Error in adminController.loginCheck: ${err}`, message: 'Incorrect username/password'}))
};

module.exports = adminController;