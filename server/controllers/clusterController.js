const db = require('../db/models');

const clusterController = {};

clusterController.addCluster = (req, res, next) => {
  const { clusterName } = req.body;
  const query = `
  INSERT INTO clusters (name)
  VALUES ('${clusterName}')
  `
  db.query(query)
    .then(() => next())
    .catch((err) => next({log: `Error in clusterController.addClusters: ${err}`,message: 'Error adding new cluster'}))
}

clusterController.getClusters = (req, res, next) => {
  const query = 'SELECT name FROM clusters;'
  db.query(query)
    .then((data) => {
      console.log(data)
      res.locals.clusterNames = data.rows
      return next()
    })
}

module.exports = clusterController