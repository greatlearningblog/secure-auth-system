const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', authController.verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
