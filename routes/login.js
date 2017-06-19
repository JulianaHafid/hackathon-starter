import express from 'express';
const router = express.Router();

/* GET login page */
router.get('/login', (req, res, next) => {
  res.render('login', {
    title: 'Login'
  });
});

module.exports = router
