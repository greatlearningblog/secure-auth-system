const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');

// Local sign-up
router.post('/signup', authController.signup);

// Local login
router.post('/login', authController.login);

// Token refresh
router.post('/refresh-token', authController.refreshToken);

// Logout
router.get('/logout', authController.logout);

// Google OAuth routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  authController.oauthCallback
);

// GitHub OAuth routes
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/' }),
  authController.oauthCallback
);

module.exports = router;
