const express = require('express');
const router = express.Router();

// Add middleware here
const adminController = require ('../controllers/adminController');


router.post('/create',
  // userController.bcryptEmail,
  adminController.bcryptPassword,
  adminController.addNewAdmin,
  adminController.assignJwt,
  (req, res) => {
    const { token } = res.locals;
    console.log(token)
    res.status(200).json(token);
})

// router.post('/login',
//   // userController.bcryptEmail,
//   adminController.loginCheck,
//   adminController.assignJwt,
//   (req, res) => {
//     const { token } = res.locals;
//     console.log(token)
//     res.status(200).json(token)
//   }
// )

// router.post('/verify',
//   adminController.verifyAdmin,
//   (req, res) => {
//     console.log('router:', res.locals.isAdmin)
//     const { isAdmin } = res.locals;
//     res.status(200).json(isAdmin);
//   }
// )

module.exports = router;