const db = require('../db/models');
const { runTerminalCommand, kubectl, gcloud } = require('../../terminalCommands.js')
const spacesController = {};

//will need to edit the database schema

spacesController.addNamespace = (req, res, next) => {
  const { hostNamespace, team_id, projectName } = req.body;
  const params = [hostNamespace, team_id, projectName];
  const query = `
  INSERT INTO namespaces2(name, team_id, project)
  VALUES ($1, $2, $3)`

  db.query(query, params)
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({ log: `Error in spacesController.addNamespace: ${err}` });
    })
}

// spacesController.deleteNamespaceFromDB = (req, res, next) => {
//   const { hostNamespace, team_id, projectName } = req.body;
//   const params = [hostNamespace, team_id, projectName];
//   const query = `
//   INSERT INTO namespaces2(name, team_id, project)
//   VALUES ($1, $2, $3)`

//   db.query(query, params)
//     .then(() => {
//       return next();
//     })
//     .catch((err) => {
//       return next({ log: `Error in spacesController.addNamespace: ${err}` });
//     })
// }

spacesController.fetchNamespaces = (req, res, next) => {
  // console.group(req.params)
  const query = `
  SELECT * FROM namespaces2`
  db.query(query)
    .then((data) => {
      res.locals.kyung = data.rows;
      console.log('what is data', data);
      return next();
    })
    .catch((err) => {
      return next({ log: `Error in spacesController.fetchNamespaces: ${err}` });
    })
}

spacesController.createNamespace = (req, res, next) => {
  console.log(req.body)
  const { clusterName, hostNamespace } = req.body;
  // need to make gcloud into a function
  runTerminalCommand(gcloud.getCredentials(clusterName))
  .then((data) => {
    console.log(data)
    runTerminalCommand(kubectl.createNamespace(hostNamespace))
  return next();
  })
}

spacesController.deploy = (req, res, next) => {
  console.log(req.body)
  const { deploymentName, hostNamespace, imageFile } = req.body;
  runTerminalCommand(kubectl.deployImage(deploymentName, hostNamespace, imageFile))
  .then((data) => {
    console.log(data)
    runTerminalCommand(kubectl.expose(deploymentName, hostNamespace))
    runTerminalCommand(`kubectl get services`)
  })
  return next();
}

spacesController.fetchSpaces = (req, res, next) => {
  const query = `
  SELECT * FROM namespaces2;
  `

  db.query(query)
    .then((data) => {
      res.locals.spaces = data.rows
      return next();
    })
}

module.exports = spacesController;
