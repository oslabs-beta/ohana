const db = require('../db/models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const { runTerminalCommand } = require('../../terminalCommands');
const secret = 'ohana';

let configFile = '/yamlConfigs/userAccount.yaml';
let viewConfigFile = '/yamlConfigs/viewUserAccount.yaml';

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
  // look up the team id value stored
  const query = `SELECT _id FROM teams WHERE name='${teamName}'`;
  db.query(query)
    .then((data) => {
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

// userController.editUser 
userController.editAccessUser = (req, res, next) => {
  console.log('hitting editAccess controller')
  const { editAccess } = req.body;
  console.log('Checking if true', editAccess);

  if (editAccess === true) {
    console.log('running terminal command')
    runTerminalCommand(kubectl.createFromConfig(configFile))
      .then(() => next())
      .catch((err) => {
        return next({ log: `Error in userController.editAccessUser: ${err}` });
      })
  }
}
// userController.addNewUser = (req, res, next) => {
//   const { password } = res.locals;
//   const { email, firstName, lastName, teamId, isAdmin, editAccess } = req.body;
//   const params = [email, password, firstName, lastName, isAdmin, teamId, editAccess];
//   const query = `
//   INSERT INTO users(email, password, first_name, last_name, is_admin, team_id, edit_access)
//   VALUES ($1, $2, $3, $4, $5, $6, $7);`
//   db.query(query, params)
//     .then(() => next())
//     .catch((err) => {
//       return next({ log: `Error in userController.addNewUser: ${err}` });
//     })
// }

// new || do we need to add this into the db as well?
userController.createServiceAccount = (req, res, next) => {
  const { email } = req.body
  // run terminal command for service account
  runTerminalCommand(serviceAccount.user(email))
    .then((data) => {
      console.log('what is data', data)
      runTerminalCommand(serviceAccount.userConfig(email))
      return next();
    })
    .catch((err) => {
      return next({ log: `Error in userController.createServiceAccount: ${err}` });
    })
}

// create tenancy with the useraccount.yaml
// userController.createTenancy = (req, res, next) => {
//   const { email } = req.body
//   // need to generate a yaml file here
//   // const accountConfigFile = generateYaml with email
//   // const spaceConfigFile = generateYaml with email
//   runTerminalCommand(kubectl.createFromConfigAs(configFile, email))
//   .then((data) => {
//     console.log('what is data', data)
//     runTerminalCommand(kubectl.createFromConfigAs(configFile, email))
//     return next();
//   })
//   .catch((err) => {
//     return next({log: `Error in userController.createTenancy: ${err}`})
//   })
// }

// this is new do not delete
// userController.editAccessUser = (req, res, next) => {
//   const { editAccess } = req.body
//   runTerminalCommand(kubectl.currentContext())
//   .then((data) => {
//     const clusterName = data.split('_').slice(-1).toString().trim();
//     runTerminalCommand(gcloud.getCredentials(clusterName))
//   .then((data) => {
//     if (editAccess === 'true') {
//       // need to create config files automatically
//       runTerminalCommand(kubectl.createFromConfig(configFile))
//       return next();
//     } else {
//       runTerminalCommand(kubectl.createFromConfig(configFile))
//       return next();
//     }
//   })
//   .catch((err) => {
//     return next({ log: `Error in userController.editAccessUser: ${err}` });
//     })
//   })
// }

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

userController.assignJwt = (req, res, next) => {
  const { isAdminResult } = res.locals;
  const { email, firstName, lastName } = req.body;
  jwt.sign({ email, firstName, lastName, isAdmin: isAdminResult }, secret, (err, token) => {
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
    return next();
  })
}


module.exports = userController;