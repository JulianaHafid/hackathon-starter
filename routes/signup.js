import express from 'express';
const router = express.Router();


/* GET signup page */
router.get('/signup', (req, res, next) => {
  res.render('signup', {
    title: 'signup'
  });
});

module.exports = router
