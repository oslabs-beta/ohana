const express = require('express');
const router = express.Router();
const spacesController = require('../controllers/spacesController');

router.post('/create',
  // need to add in the addNamespace routes
  // spacesController.addNamespace,
  spacesController.createNamespace, (req, res) => {
    res.status(200).send('posted to database');
  })

router.post('/deploy',
  spacesController.deploy,
  (req, res) => {
    const { jeff } = res.locals;
    res.status(200).json(jeff);
  })

router.post('/getip',
  spacesController.getExternalIp,
  (req, res) => {
    const { getServices } = res.locals;
    res.status(200).json(getServices);
  })

// router.get('/fetch', 
//   spacesController.fetchSpaces, 
//   (req, res) => {
//     res.status(200).json(res.locals.spaces)
//   });

// router.get('/fetchspaces', 
//   spacesController.fetchNamespaces, 
//   (req, res) => {
//     res.status(200).json(res.locals.namespaces)
//   });

// router.get('/fetchclusters', 
//   spacesController.fetchClusters, 
//   (req, res) => {
//     res.status(200).json(res.locals.clusters)
//   });

router.get('/fetch',
  spacesController.fetchSpaces, (req, res) => {
    res.status(200).json(res.locals.spaces);
  })

module.exports = router;