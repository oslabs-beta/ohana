// const db = require('../db/models');

// const clusterController = {};

// // CREATE TABLE "vclusters" (
// //   "_id" smallserial PRIMARY KEY NOT NULL,
// //   "owner_id" smallint NOT NULL,
// //   "team_id" smallint NOT NULL,
// //   "namespace_id" smallint NOT NULL,
// //   "project" varchar
// // );

// clusterController.getClusters = (req, res, next) => {
//   const params = [vcluster, owner_id, team_id, namespace_id, project];
//   const query = `
//   SELECT * FROM vclusters(vcluster, owner_id, team_id, namespace_id, project)
//   VALUES ($1, $2, $3, $4, $5)`

//   db.query(query, params)
//     .then(() => {
//       res.locals.vcluster = result;
//       return next();
//     })
//     .catch((err) => {
//       return next({ log: `Error in clusterController.getClusters: ${err}` });
//     })
// }

// module.exports = clusterController;