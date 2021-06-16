const db = require('../db/models');

const clusterController = {};

// CREATE TABLE "vclusters3" (
//   "_id" smallserial PRIMARY KEY NOT NULL,
//   "owner_id" smallint NOT NULL,
//   "team_id" smallint NOT NULL,
//   "namespace_id" smallint NOT NULL,
//   "project" varchar
// );

clusterController.getClusters = (req, res, next) => {
  const query = `
  SELECT * FROM vclusters3`

  db.query(query)
    .then((result) => {
      res.locals.vcluster = result;
      return next();
    })
    .catch((err) => {
      return next({ log: `Error in clusterController.getClusters: ${err}` });
    })
}

module.exports = clusterController;