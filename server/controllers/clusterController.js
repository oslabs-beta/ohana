const db = require('../db/models');
const { runTerminalCommand, vCluster, gcloud } = require('../../terminalCommands.js')
const clusterController = {};


clusterController.addCluster = (req, res, next) => {
  const { hostNamespace, vClusterName, projectName } = req.body;
  const params = [hostNamespace, vClusterName, projectName];
  const query = `
  INSERT INTO vclusters3(team_id, namespace_id, project)
  VALUES ($1, $2, $3)`
  db.query(query, params)
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({ log: `Error in clsuterController.addCluster: ${err}` });
    })
}

// clusterController.deleteClusterFromDB = (req, res, next) => {
//   const { hostNamespace, vClusterName, projectName } = req.body;
//   const params = [hostNamespace, vClusterName, projectName];
//   const query = `
//   INSERT INTO vclusters3(team_id, namespace_id, project)
//   VALUES ($1, $2, $3)`

//   db.query(query, params)
//     .then(() => {
//       return next();
//     })
//     .catch((err) => {
//       return next({ log: `Error in clsuterController.addCluster: ${err}` });
//     })
// }

clusterController.createCluster = (req, res, next) => {

    console.log(req.body);
    const { clusterName, vClusterName, hostNamespace } = req.body;
    // need to make gcloud into a function
    runTerminalCommand(gcloud.getCredentials(clusterName))
    .then((data) => {
      console.log('1', data)
      runTerminalCommand(vCluster.create(vClusterName, hostNamespace))

      runTerminalCommand(vCluster.connect(vClusterName, hostNamespace))
    .catch(err => console.log(err))
  })
}

clusterController.deleteCluster = (req, res, next) => {
  console.log(req.body);
  const { clusterName, vClusterName, hostNamespace } = req.body;
  // need to make gcloud into a function
  runTerminalCommand(gcloud.getCredentials(clusterName))
  .then((data) => {
    console.log('1',data)
    runTerminalCommand(vCluster.create(vClusterName, hostNamespace))
  .catch(err => console.log(err))
})
}

        .then(() => next())
        .catch(err => console.log(err))
    })
}

clusterController.fetchClusters = (req, res, next) => {
  const query = `
  SELECT * FROM vclusters3;
  `


  db.query(query)
    .then((data) => {
      res.locals.kyung = data.rows
      return next();
    })
}
module.exports = clusterController;