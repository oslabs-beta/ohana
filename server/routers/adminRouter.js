const express = require('express');
const router = express.Router();

// Add middleware here
const adminController = require ('../controllers/adminController');

router.post('/create',
  // userController.bcryptEmail,
  adminController.bcryptPassword,
  adminController.addNewAdmin,
  (req, res) => {
    res.status(200).send('Successfully added new user');
})

router.post('/login',
  // userController.bcryptEmail,
  adminController.loginCheck,
  (req, res) => {
    res.status(200).send('Successfully signed in')
  }
)

module.exports = router;